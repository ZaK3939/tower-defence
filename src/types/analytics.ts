import { IWorld } from "@type/world";
import { GameStat } from "./game";

export interface IAnalytics {
  /**
   * Track progression event.
   * @param data - Event data
   */
  trackEvent(data: AnalyticEventData): void;

  /**
   * Track game error.
   * @param data - Error data
   */
  trackError(data: Error): void;
}

export type AnalyticEventData = {
  world: IWorld;
  stat?: GameStat;
  success: boolean;
};
