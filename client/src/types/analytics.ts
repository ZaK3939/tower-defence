import { IWorld } from "@type/world";
import { GameStat } from "./game";
import { Wawa } from "./wawa";

export interface IAnalytics {
  /**
   * Track progression event.
   * @param data - Event data
   */
  trackEvent(data: AnalyticEventData): void;

  /**
   * Track progression event.
   * @param data - Event data
   */
  sendEvent(data: AnalyticEventData): void;
  /**
   * Track game error.
   * @param data - Error data
   */
  trackError(data: Error): void;
}

export type AnalyticEventData = {
  world: IWorld;
  address?: `0x${string}` | undefined;
  wawa?: Wawa | undefined;
  stat?: GameStat;
  success: boolean;
};
