import {getRankDefinitions, getRankTitle} from './rank-functions';
import {ChartRecord} from './types';

export type RatingTargetData = {
  newChartRecords: ReadonlyArray<ChartRecord>;
  newTopChartsCount: number;
  oldChartRecords: ReadonlyArray<ChartRecord>;
  oldTopChartsCount: number;
};

export function mergeRecords(data: RatingTargetData): ChartRecord[] {
  const {newChartRecords, newTopChartsCount, oldChartRecords, oldTopChartsCount} = data;
  const newTopRecords = newChartRecords.slice(0, newTopChartsCount);
  const oldTopRecords = oldChartRecords.slice(0, oldTopChartsCount);
  return [].concat(newTopRecords, oldTopRecords);
}

export function getRankDistribution(scoreList: ReadonlyArray<ChartRecord>): Map<string, number> {
  const countPerRank = new Map();
  for (const rankDef of getRankDefinitions(true)) {
    countPerRank.set(rankDef.title, 0);
  }
  scoreList.forEach((record) => {
    const rankTitle = getRankTitle(record.achievement);
    const rankCount = countPerRank.get(rankTitle);
    countPerRank.set(rankTitle, rankCount + 1);
  });
  return countPerRank;
}

export function getMinRank(records: ReadonlyArray<ChartRecord>) {
  const overallRankDistribution = getRankDistribution(records);
  let minRank;
  for (const [rank, count] of overallRankDistribution) {
    if (count > 0) {
      minRank = rank;
    }
  }
  return minRank;
}
