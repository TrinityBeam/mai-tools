import {GameVersion} from './game-version';

export type LevelDef = {
  title: string;
  minLv: number;
  maxLv: number;
};

export const MAX_LEVEL = 15;

const MIN_LEVEL = 1;

export function getOfficialLevel(gameVer: GameVersion, level: number): string {
  const baseLevel = Math.floor(level);
  const levelX10 = Math.floor(level * 10);
  if (gameVer > GameVersion.BUDDiES) {
    // .6 - .9 is +
    return levelX10 % 10 > 5 ? baseLevel + '+' : baseLevel.toString();
  }
  // .7 - .9 is +
  return levelX10 % 10 > 6 ? baseLevel + '+' : baseLevel.toString();
}

/**
 * Compute the default level based on the official level.
 * Game version before BUDDiES PLUS:
 *   Lv10 => 10.0 (actual range: 10.0 - 10.6)
 *   Lv10+ => 10.7 (actual range: 10.7 - 10.9)
 * Game version after BUDDiES PLUS:
 *   Lv10 => 10.0 (actual range: 10.0 - 10.5)
 *   Lv10+ => 10.6 (actual range: 10.6 - 10.9)
 */
export function getDefaultLevel(gameVer: GameVersion, officialLevel: string): number {
  if (!officialLevel) {
    return MIN_LEVEL;
  }
  const baseLevel = parseInt(officialLevel);
  if (gameVer > GameVersion.BUDDiES) {
    return officialLevel.endsWith('+') ? baseLevel + 0.6 : baseLevel;
  }
  return officialLevel.endsWith('+') ? baseLevel + 0.7 : baseLevel;
}

export function getMaxConstant(gameVer: GameVersion, officialLevel: string): number {
  if (!officialLevel) {
    return MIN_LEVEL;
  }
  const baseLevel = parseInt(officialLevel);
  if (gameVer > GameVersion.BUDDiES) {
    return officialLevel.endsWith('+') ? baseLevel + 0.9 : baseLevel + 0.5;
  }
  return officialLevel.endsWith('+') ? baseLevel + 0.9 : baseLevel + 0.6;
}

export function getDisplayLv(internalLv: number, lvIsEstimate = false): string {
  // If internalLv is negative, we also consider it estimate.
  lvIsEstimate = lvIsEstimate || internalLv < 0;
  if (lvIsEstimate) {
    return Math.abs(internalLv).toFixed(1) + '~';
  }
  return internalLv.toFixed(1);
}
