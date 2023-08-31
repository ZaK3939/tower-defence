import { v4 as uuidv4 } from "uuid";

import pkg from "../../package.json";
import { ANALYTICS_SERVER } from "@const/analytics";
import { AnalyticEventData, IAnalytics } from "@type/analytics";

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

export class Analytics implements IAnalytics {
  private userId: string;

  private host: string;

  constructor() {
    const userId = localStorage.getItem("USER_ID");

    if (userId) {
      this.userId = userId;
    } else {
      this.userId = uuidv4();
      localStorage.setItem("USER_ID", this.userId);
    }

    if (document.referrer) {
      this.host = document.referrer.replace(/(https?:\/\/)?([^/?]+).*/, "$2");
    } else {
      this.host = window.location.host;
    }
  }

  public trackEvent(data: AnalyticEventData) {
    const payload = this.getEventPayload(data);

    const successColor = 3447003;
    const failureColor = 15158332;

    const embedColor = payload.success ? successColor : failureColor;
    const eventTitle = payload.success ? "📊 GameClear" : "GameOver!";
    const eventDescription = payload.success
      ? "A new successful event has been tracked in the game."
      : "An event failed in the game!";
    if (IS_DEV_MODE) {
      console.log("Track analytic event:", payload);
    } else if (DISCORD_WEBHOOK_URL) {
      fetch(DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: payload.success ? "📊 GameClear" : "GameOver!",
          embeds: [
            {
              title: eventTitle,
              description: eventDescription,
              color: embedColor,
              fields: [
                {
                  name: "Game Clear",
                  value: payload.success.toString(),
                  inline: true,
                },
                { name: "Difficulty", value: payload.difficulty, inline: true },
                { name: "Planet", value: payload.planet, inline: true },
                {
                  name: "Wave Number",
                  value: payload.waveNumber.toString(),
                  inline: true,
                },
                {
                  name: "Resources",
                  value: payload.resources.toString(),
                  inline: true,
                },
                { name: "User ID", value: payload.userId, inline: true },
                { name: "Host", value: payload.host, inline: true },
                { name: "Version", value: payload.version, inline: true },
                {
                  name: "Score",
                  value: payload.score ? payload.score.toString() : "playing",
                  inline: true,
                },
              ],
              footer: {
                text: "Tracked at " + new Date().toLocaleString(),
              },
              thumbnail: {
                url: "https://github.com/ZaK3939/tower-defence/blob/master/src/assets/banner.png?raw=true",
              },
            },
          ],
        }),
      }).catch((e) => {
        console.warn("Failed analytics event tracking:", payload, e);
      });
    }
  }

  public trackError(data: Error) {
    if (IS_DEV_MODE) {
      return;
    }

    const payload = this.getErrorPayload(data);

    const discordPayload = {
      content: "⚠️ An error occurred in the game!",
      embeds: [
        {
          title: "Error Event",
          description: payload.message,
          color: 15158332, // 赤色
          fields: [
            { name: "Error Name", value: data.name, inline: true },
            {
              name: "Error Stack",
              value: data.stack ? data.stack.substring(0, 1024) : "N/A",
              inline: false,
            },
          ],
          footer: {
            text: "Tracked at " + new Date().toLocaleString(),
          },
        },
      ],
    };
    if (IS_DEV_MODE) {
      console.log("Track analytic event:", payload);
    } else if (DISCORD_WEBHOOK_URL) {
      fetch(DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(discordPayload),
      }).catch((e) => {
        console.warn("Failed analytics error tracking:", discordPayload, e);
      });
    }
  }

  private getEventPayload(data: AnalyticEventData) {
    return {
      // Game progress
      success: data.success,
      difficulty: data.world.game.difficulty,
      planet: data.world.level.planet,
      waveNumber: data.world.wave.number,
      resources: data.world.player.resources,

      // stat
      score: data.stat?.score,
      waves: data.stat?.waves,
      kills: data.stat?.kills,
      lived: data.stat?.lived,

      // System info
      userId: this.userId,
      host: this.host,
      version: pkg.version,
    };
  }

  private getErrorPayload(data: Error) {
    return {
      // Error info
      message: data.message,
      stack: data.stack,
      // System info
      userId: this.userId,
      version: pkg.version,
      userAgent: window.navigator.userAgent,
    };
  }
}
