(()=>{"use strict";var e={9099:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getChartType=void 0,t.getChartType=function(e){if(e.id)return e.id.includes("sta_")?0:1;const t=e.querySelector(".playlog_music_kind_icon")||e.querySelector(".music_kind_icon")||e.querySelector(".f_l.h_20")||e.querySelector("img:nth-child(2)");return t instanceof HTMLImageElement&&t.src.includes("_standard")?0:1}},8642:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getDifficultyTextColor=t.getDifficultyForRecord=t.getDifficultyName=t.DIFFICULTY_CLASSNAME_MAP=t.DIFFICULTIES=void 0,t.DIFFICULTIES=["BASIC","ADVANCED","EXPERT","MASTER","Re:MASTER"],t.DIFFICULTY_CLASSNAME_MAP=new Map([["Re:MASTER","remaster"],["MASTER","master"],["EXPERT","expert"],["ADVANCED","advanced"]]),t.getDifficultyName=function(e){return t.DIFFICULTIES[e]},t.getDifficultyForRecord=function(e){const n=e.querySelector(".playlog_top_container img.playlog_diff").src,o=n.substring(n.lastIndexOf("_")+1,n.lastIndexOf(".")),i=t.DIFFICULTIES.indexOf(o.toUpperCase());return i<0?4:i},t.getDifficultyTextColor=function(e){return["#45c124","#ffba01","#ff7b7b","#9f51dc","#dbaaff"][e]}},2347:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getPlayerGrade=t.getPlayerName=t.getChartDifficulty=t.getChartLevel=t.getSongName=void 0;const o=n(472);t.getSongName=function(e){const t=e.querySelector(".basic_block.break");return t?t.childNodes.item(t.childNodes.length-1).nodeValue:(0,o.normalizeSongName)(e.getElementsByClassName("music_name_block")[0].innerText)},t.getChartLevel=function(e){return e.getElementsByClassName("music_lv_block")[0].innerText},t.getChartDifficulty=function(e){if(!e.classList.contains("pointer")){const t=e.querySelector(".pointer");e=t||e}const t=e.className.match(/music_([a-z]+)_score_back/)[1].toUpperCase();return 0===t.indexOf("RE")?"Re:MASTER":t},t.getPlayerName=function(e){var t,n;return e.className.includes("friend_vs_friend_block")?null===(t=e.querySelector(".t_l"))||void 0===t?void 0:t.innerText:null===(n=e.querySelector(".name_block"))||void 0===n?void 0:n.innerText},t.getPlayerGrade=function(e){const t=e.querySelector(".user_data_block_line ~ img.h_25");if(t){const e=t.src.lastIndexOf("grade_");return t.src.substring(e+6,e+8)}return null}},6510:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{s(o.next(e))}catch(e){r(e)}}function c(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.fetchScores=t.SELF_SCORE_URLS=void 0;const i=n(9099),r=n(8642),a=n(2347),c=n(6420);t.SELF_SCORE_URLS=new Map([[4,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=4"],[3,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=3"],[2,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=2"],[1,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=1"],[0,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=0"]]),t.fetchScores=function(e,n){return o(this,void 0,void 0,(function*(){const o=t.SELF_SCORE_URLS.get(e);if(!o)return;const s=yield(0,c.fetchPage)(o),l=s.querySelectorAll(".main_wrapper.t_c .m_15"),u={genre:"",scoreList:n};return l.forEach((t=>function(e,t,n){const o=e.classList.contains("screw_block"),c=e.classList.contains("w_450")&&e.classList.contains("m_15")&&e.classList.contains("p_r")&&e.classList.contains("f_0");if(o)n.genre=e.innerText;else if(c){const o=(0,a.getSongName)(e),c=(0,a.getChartLevel)(e),s=1===(0,i.getChartType)(e)?"DX":"STANDARD",l=function(e){const t=e.querySelector(".music_score_block.w_120");return t&&t.innerText}(e);if(!l)return;n.scoreList.push([o,n.genre,(0,r.getDifficultyName)(t),c,s,l].join("\t"))}}(t,e,u))),s}))}},8080:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getInitialLanguage=t.saveLanguage=t.SUPPORTED_LANGUAGES=void 0,t.SUPPORTED_LANGUAGES=["en_US","zh_TW","ko_KR"];const n="MaiToolsLang";t.saveLanguage=function(e){window.localStorage.setItem(n,e)},t.getInitialLanguage=function(){const e=new URLSearchParams(location.search).get("hl");if(e)return e.startsWith("zh")?"zh_TW":e.startsWith("ko")?"ko_KR":"en_US";return function(){switch(window.localStorage.getItem(n)){case"en_US":return"en_US";case"zh_TW":return"zh_TW";case"ko_KR":return"ko_KR"}return null}()||(navigator.language.startsWith("zh")?"zh_TW":navigator.language.startsWith("ko")?"ko_KR":"en_US")}},4468:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.statusText=void 0;const n={zh_TW:{bscStart:"匯入綠譜成績中…",bscDone:"✔",advStart:"匯入黃譜成績中…",advDone:"✔",expStart:"匯入紅譜成績中…",expDone:"✔",masStart:"匯入紫譜成績中…",masDone:"✔",remStart:"匯入白譜成績中…",remDone:"✔"},en_US:{bscStart:"Loading Basic scores…",bscDone:"✔",advStart:"Loading Advanced scores…",advDone:"✔",expStart:"Loading Expert scores…",expDone:"✔",masStart:"Loading Master scores…",masDone:"✔",remStart:"Loading Re:Master scores…",remDone:"✔"},ko_KR:{bscStart:"Basic 정확도 불러오는 중…",bscDone:"✔",advStart:"Advanced 정확도 불러오는 중…",advDone:"✔",expStart:"Expert 정확도 불러오는 중…",expDone:"✔",masStart:"Master 정확도 불러오는 중…",masDone:"✔",remStart:"Re:Master 정확도 불러오는 중…",remDone:"✔"}};t.statusText=function(e,t,o){const i=n[e];switch(t){case 4:return o?i.remDone+"\n":i.remStart;case 3:return o?i.masDone+"\n":i.masStart;case 2:return o?i.expDone+"\n":i.expStart;case 1:return o?i.advDone+"\n":i.advStart;case 0:return o?i.bscDone+"\n":i.bscStart}return""}},4313:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getScriptHost=void 0,t.getScriptHost=function(e){const t=Array.from(document.querySelectorAll("script"));for(;t.length;){const n=t.pop();if(n.src.includes(e)){const e=new URL(n.src),t=e.pathname;return e.origin+t.substring(0,t.lastIndexOf("/scripts"))}}return"https://myjian.github.io/mai-tools"}},472:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{s(o.next(e))}catch(e){r(e)}}function c(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.isNiconicoLinkImg=t.isNicoNicoLink=t.getSongNickname=t.getSongIdx=t.normalizeSongName=t.RATING_TARGET_SONG_NAME_PREFIX=t.DX_SONG_NAME_SUFFIX=void 0;const i=n(6420);t.DX_SONG_NAME_SUFFIX=" [DX]",t.RATING_TARGET_SONG_NAME_PREFIX="▶ ",t.normalizeSongName=function(e){return"D✪N’T  ST✪P  R✪CKIN’"===e?"D✪N’T ST✪P R✪CKIN’":e.replace(/" \+ '/g,"").replace(/' \+ "/g,"")},t.getSongIdx=function(e){return e.getElementsByTagName("form")[0].elements.namedItem("idx").value},t.getSongNickname=function(e,n,o){return"Link"===e&&(e=n.includes("niconico")?"Link(nico)":"Link(org)"),1===o?e+t.DX_SONG_NAME_SUFFIX:e};let r={};t.isNicoNicoLink=function(e){return o(this,void 0,void 0,(function*(){if(r.nico===e)return!0;if(r.original===e)return!1;const t=(yield(0,i.fetchSongDetailPage)(e)).body.querySelector(".m_10.m_t_5.t_r.f_12").innerText.includes("niconico");return console.log("Link (idx: "+e+") "+(t?"is niconico":"is original")),t?r.nico=e:r.original=e,t}))},t.isNiconicoLinkImg=function(e){return e.includes("e90f79d9dcff84df")}},6420:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{s(o.next(e))}catch(e){r(e)}}function c(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getPostMessageFunc=t.fetchSongDetailPage=t.fetchNewSongs=t.fetchAllSongs=t.fetchGameVersion=t.fetchPage=t.handleError=t.ALLOWED_ORIGINS=void 0;const i=n(9099),r=n(2347),a=n(6510),c=n(472);function s(e){return o(this,void 0,void 0,(function*(){const t=yield fetch(e),n=yield t.text();return(new DOMParser).parseFromString(n,"text/html")}))}function l(e){return o(this,void 0,void 0,(function*(){const t=Array.from(e.querySelectorAll(".w_450.m_15.f_0")),n=[];for(const e of t){const t=(0,c.getSongIdx)(e),o=(0,r.getSongName)(e),a=(0,i.getChartType)(e);let s;"Link"===o&&(s=(yield(0,c.isNicoNicoLink)(t))?"Link(nico)":"Link(org)"),n.push({dx:a,name:o,nickname:s})}return n}))}t.ALLOWED_ORIGINS=["https://cdpn.io","https://myjian.github.io","http://localhost:8080"],t.handleError=function(e){alert(e)},t.fetchPage=s,t.fetchGameVersion=function e(t){return o(this,void 0,void 0,(function*(){const n=t.querySelector("select[name=version] option:last-of-type");return n?parseInt(n.value):e(t=yield s("/maimai-mobile/record/musicVersion/"))}))},t.fetchAllSongs=function(e){return o(this,void 0,void 0,(function*(){if(!e){const t=a.SELF_SCORE_URLS.get(1);e=yield s(t)}return yield l(e)}))},t.fetchNewSongs=function(e){return o(this,void 0,void 0,(function*(){const t=yield s(`/maimai-mobile/record/musicVersion/search/?version=${e}&diff=0`);return yield l(t)}))},t.fetchSongDetailPage=function(e){return o(this,void 0,void 0,(function*(){return s("/maimai-mobile/record/musicDetail/?"+new URLSearchParams({idx:e}).toString())}))},t.getPostMessageFunc=function(e,t){return(n,o)=>{const i={action:n,payload:o};e.postMessage(i,t)}}},7552:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{s(o.next(e))}catch(e){r(e)}}function c(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const i=n(2347),r=n(6510),a=n(8080),c=n(4468),s=n(4313),l=n(6420);!function(){const e=(0,s.getScriptHost)("analyze-rating-in-newtab")+"/rating-calculator/";let t=(0,a.getInitialLanguage)();const n={zh_TW:{pleaseLogIn:"請登入 maimai NET",analyze:"分析 Rating"},en_US:{pleaseLogIn:"Please log in to maimai DX NET.",analyze:"Analyze Rating"},ko_KR:{pleaseLogIn:"maimai DX NET에 로그인 해 주세요.",analyze:"레이팅 분석하기"}},u=location.pathname.includes("friend");function d(e){return o(this,void 0,void 0,(function*(){let n;const o=u?null:(0,i.getPlayerGrade)(document.body);o&&e("playerGrade",o);const a=[];for(const o of r.SELF_SCORE_URLS.keys()){e("appendPlayerScore",(0,c.statusText)(t,o,!1));const i=yield(0,r.fetchScores)(o,a);3===o&&(n=i),e("appendPlayerScore",(0,c.statusText)(t,o,!0))}return e("replacePlayerScore",""),e("appendPlayerScore",a.join("\n")),e("calculateRating",""),n}))}!function(){const r=location.host;if("maimaidx-eng.com"!==r&&"maimaidx.jp"!==r)return void(0,l.handleError)(n[t].pleaseLogIn);const c=u?null:(0,i.getPlayerName)(document.body);!function(e){const o=document.body.querySelector(".basic_block.p_10.f_0");if(!o)return;let i=document.querySelector(".analyzeLink");i&&i.remove(),i=document.createElement("a"),i.className="analyzeLink f_14",i.style.color="#1477e6",i.target="selfRating",i.append(n[t].analyze,document.createElement("br")),i.href=e,location.pathname.indexOf("/maimai-mobile/playerData/")>=0?(i.className+=" f_l",document.querySelector(".m_5.m_t_10.t_r.f_12").insertAdjacentElement("afterbegin",i)):location.pathname.indexOf("/maimai-mobile/home/")>=0?(i.className+=" d_b",document.querySelector(".comment_block.f_l.f_12").insertAdjacentElement("afterbegin",i)):o.querySelector(".name_block").parentElement.append(i)}(c?e+"?"+new URLSearchParams({playerName:c}):e);const s=(0,l.fetchGameVersion)(document.body);let f;window.ratingCalcMsgListener&&window.removeEventListener("message",window.ratingCalcMsgListener),window.ratingCalcMsgListener=e=>o(this,void 0,void 0,(function*(){if(console.log(e.origin,e.data),l.ALLOWED_ORIGINS.includes(e.origin)){const n=(0,l.getPostMessageFunc)(e.source,e.origin);if("string"==typeof e.data)"ready"===e.data&&(n("gameVersion",yield s),f=d(n));else if("object"==typeof e.data)if("ready"===e.data.action)n("gameVersion",yield s),"string"==typeof e.data.payload&&(t=e.data.payload),f=d(n);else if("fetchNewSongs"===e.data.action){const t=yield s,o=e.data.payload;t<o?n("newSongs",[]):(0,l.fetchNewSongs)(o).then((e=>n("newSongs",e)))}else"fetchAllSongs"===e.data.action?f.then((e=>(0,l.fetchAllSongs)(e).then((e=>n("allSongs",e))))):"saveLanguage"===e.data.action&&(t=e.data.payload,(0,a.saveLanguage)(t))}})),window.addEventListener("message",window.ratingCalcMsgListener)}()}()}},t={};!function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}(7552)})();