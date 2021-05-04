import {LANG} from '../common/lang';

const UIStringByLang = {
  en: {
    gameVer: "Game version:",
    internalLvHeading: "Chart Internal Level Data",
    manualLv: "Manual input",
    autoLv: "Automatic",
    scoreInputHeading: "Player Scores",
    scoreInputDescPrefix:
      'Please use "Analyze Self DX Rating" or "Analyze Friend\'s DX Rating" from ',
    bookmarketLinkLabel: "maimai bookmarklets",
    scoreInputDescSuffix: " to fill in this field.",
    computeRating: "Calculate Rating",
    analysisResult: "Analysis Result",
    newChartsRecLv: "New Charts",
    oldChartsRecLv: "Old Charts",
    newChartsRating: "New Charts Rating",
    oldChartsRating: "Old Charts Rating",
    grade: "Grade",
    ratingTargetLvDistribution: "Levels of Rating Subjects",
    ratingTargetDiffDistribution: "Difficulties of Rating Subjects",
    column: ":",
    subtotal: "Subtotal",
    newChartsRatingTargets: "New Charts Rating Subjects (best 15):",
    oldChartsRatingTargets: "Old Charts Rating Subjects (best {count}):",
    newChartsRatingCandidates: "New Charts Rating Candidates:",
    oldChartsRatingCandidates: "Old Charts Rating Candidates:",
    num: "#",
    song: "Song",
    difficulty: "Difficulty",
    level: "Level",
    rating: "Rating",
    nextGoal: "Next Goal",
    nextRating: "+Rating",
    rank: "Rank",
    achievementAbbr: "Achv",
    otherToolsHeading: "Other Tools",
    ratingVisualizer: "Rating Lookup Table & Visualization",
    bookmarketList: "maimai Bookmarklets (Features & How to use)",
    otohime: "Otohime (Personal score tracking)",
    mapDistanceCalc: "Map Distance Calculator (How many credits to a character/collection item)",
    showMore: "Show more",
    showLess: "Show less",
    recommendedLevels: "Recommended levels",
    tilde: "~",
    projectedRating: "Potential Rating",
    levelComment:
      "Note: X.7 and above is classified under X+. For example, 10.7, 10.8, and 10.9 are 10+.",
    average: "Average",
    showPlayed: "Show played charts",
    showNotPlayed: "Show not yet played charts",
  },
  zh: {
    gameVer: "遊戲版本：",
    internalLvHeading: "譜面定數",
    manualLv: "手動輸入",
    autoLv: "自動代入",
    scoreInputHeading: "玩家成績輸入",
    scoreInputDescPrefix: "請用 ",
    bookmarketLinkLabel: "maimai 書籤小工具",
    scoreInputDescSuffix: " 中的「分析自己 DX Rating」或「分析好友 DX Rating」填入此欄。",
    computeRating: "計算 Rating 值",
    analysisResult: "分析結果",
    newChartsRecLv: "新譜面",
    oldChartsRecLv: "舊譜面",
    newChartsRating: "新譜面 Rating",
    oldChartsRating: "舊譜面 Rating",
    grade: "段位",
    ratingTargetLvDistribution: "Rating 對象曲 等級分布",
    ratingTargetDiffDistribution: "Rating 對象曲 難度分布",
    column: "：",
    subtotal: "小計",
    newChartsRatingTargets: "新譜面 Rating 對象曲 (取最佳 15 首)：",
    oldChartsRatingTargets: "舊譜面 Rating 對象曲 (取最佳 {count} 首)：",
    newChartsRatingCandidates: "新譜面 Rating 候選曲：",
    oldChartsRatingCandidates: "舊譜面 Rating 候選曲：",
    num: "#",
    song: "歌曲",
    difficulty: "難度",
    level: "等級",
    rating: "R 值",
    nextGoal: "下個\n目標",
    nextRating: "R 值\n加分",
    rank: "Rank",
    achievementAbbr: "達成率",
    otherToolsHeading: "其他工具",
    ratingVisualizer: "單曲 R 值圖表",
    bookmarketList: "書籤小工具介紹與設定教學",
    otohime: "Otohime - 音 Game 成績單網站",
    mapDistanceCalc: "ちほー道數計算器 (旅伴 & 收藏品)",
    showMore: "顯示更多",
    showLess: "顯示較少",
    recommendedLevels: "刷分目標 (推薦等級)",
    tilde: "～",
    projectedRating: "可獲得 R 值",
    levelComment: "註：X.7 以上是歸類在官方的 X+。舉例來說：10.7, 10.8, 10.9 都算是 10+。",
    average: "平均",
    showPlayed: "顯示已玩過的譜面",
    showNotPlayed: "顯示未玩過的譜面",
  },
};

export const UIString = UIStringByLang[LANG];
