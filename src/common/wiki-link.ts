import {ChartType} from './chart-type';
import {Difficulty, getDifficultyName} from './difficulties';

const WIKI_URL_PREFIX = 'https://maimai.fandom.com/zh/wiki/';
const WIKI_URL_SUFFIX = '?variant=zh-hant';
const ARCADE_SONG_BASE_URL = 'https://arcade-songs.zetaraku.dev/maimai/?';

export function getZhWikiLink(title: string) {
  return WIKI_URL_PREFIX + encodeURIComponent(title) + WIKI_URL_SUFFIX;
}

export function getArcadeSongLink(title: string, chartType: ChartType, d: Difficulty): string {
  const query = new URLSearchParams();
  query.set('title', title);
  query.set('types', chartType === ChartType.DX ? 'dx' : 'std');
  query.set('difficulties', getDifficultyName(d).replace(':', '').toLowerCase());
  return ARCADE_SONG_BASE_URL + query;
}
