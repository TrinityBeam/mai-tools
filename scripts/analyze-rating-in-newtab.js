(()=>{"use strict";var e={9099:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getChartType=void 0,t.getChartType=function(e){if(e.id)return e.id.includes("sta_")?0:1;const t=e.querySelector(".playlog_music_kind_icon")||e.querySelector(".music_kind_icon")||e.querySelector(".f_l.h_20")||e.querySelector("img:nth-child(2)");return t instanceof HTMLImageElement&&t.src.includes("_standard")?0:1}},8642:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getDifficultyTextColor=t.getDifficultyForRecord=t.getDifficultyName=t.DIFFICULTY_CLASSNAME_MAP=t.DIFFICULTIES=void 0,t.DIFFICULTIES=["BASIC","ADVANCED","EXPERT","MASTER","Re:MASTER"],t.DIFFICULTY_CLASSNAME_MAP=new Map([["Re:MASTER","remaster"],["MASTER","master"],["EXPERT","expert"],["ADVANCED","advanced"]]),t.getDifficultyName=function(e){return t.DIFFICULTIES[e]},t.getDifficultyForRecord=function(e){const n=e.querySelector(".playlog_top_container img.playlog_diff").src,i=n.substring(n.lastIndexOf("_")+1,n.lastIndexOf(".")),o=t.DIFFICULTIES.indexOf(i.toUpperCase());return o<0?4:o},t.getDifficultyTextColor=function(e){return["#45c124","#ffba01","#ff7b7b","#9f51dc","#dbaaff"][e]}},2347:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getPlayerGrade=t.getPlayerName=t.getChartDifficulty=t.getChartLevel=t.getSongName=void 0;const i=n(472);t.getSongName=function(e){const t=e.querySelector(".basic_block.break");return t?t.childNodes.item(t.childNodes.length-1).nodeValue:(0,i.normalizeSongName)(e.getElementsByClassName("music_name_block")[0].innerText)},t.getChartLevel=function(e){return e.getElementsByClassName("music_lv_block")[0].innerText},t.getChartDifficulty=function(e){if(!e.classList.contains("pointer")){const t=e.querySelector(".pointer");e=t||e}const t=e.className.match(/music_([a-z]+)_score_back/)[1].toUpperCase();return 0===t.indexOf("RE")?"Re:MASTER":t},t.getPlayerName=function(e){var t,n;return e.className.includes("friend_vs_friend_block")?null===(t=e.querySelector(".t_l"))||void 0===t?void 0:t.innerText:null===(n=e.querySelector(".name_block"))||void 0===n?void 0:n.innerText},t.getPlayerGrade=function(e){const t=e.querySelector(".user_data_block_line ~ img.h_25");if(t){const e=t.src.lastIndexOf("grade_");return t.src.substring(e+6,e+8)}return null}},6510:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,a){function r(e){try{s(i.next(e))}catch(e){a(e)}}function c(e){try{s(i.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,c)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.fetchScores=t.SELF_SCORE_URLS=void 0;const o=n(9099),a=n(8642),r=n(2347),c=n(6420);t.SELF_SCORE_URLS=new Map([[4,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=4"],[3,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=3"],[2,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=2"],[1,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=1"],[0,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=0"]]),t.fetchScores=function(e,n){return i(this,void 0,void 0,(function*(){const i=t.SELF_SCORE_URLS.get(e);if(!i)return;const s=yield(0,c.fetchPage)(i),l=s.querySelectorAll(".main_wrapper.t_c .m_15"),u={genre:"",scoreList:n};return l.forEach((t=>function(e,t,n){const i=e.classList.contains("screw_block"),c=e.classList.contains("w_450")&&e.classList.contains("m_15")&&e.classList.contains("p_r")&&e.classList.contains("f_0");if(i)n.genre=e.innerText;else if(c){const i=(0,r.getSongName)(e),c=(0,r.getChartLevel)(e),s=1===(0,o.getChartType)(e)?"DX":"STANDARD",l=function(e){const t=e.querySelector(".music_score_block.w_120");return t&&t.innerText}(e);if(!l)return;n.scoreList.push([i,n.genre,(0,a.getDifficultyName)(t),c,s,l].join("\t"))}}(t,e,u))),s}))}},6162:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getGameRegionFromOrigin=t.isMaimaiNetOrigin=t.MAIMAI_NET_ORIGINS=void 0,t.MAIMAI_NET_ORIGINS=["https://maimaidx.jp","https://maimaidx-eng.com"],t.isMaimaiNetOrigin=function(e){return"https://maimaidx.jp"===e||"https://maimaidx-eng.com"===e},t.getGameRegionFromOrigin=function(e){return"https://maimaidx.jp"===e?"https://maimaidx.jp":"https://maimaidx-eng.com"}},8080:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getInitialLanguage=t.saveLanguage=t.SUPPORTED_LANGUAGES=void 0,t.SUPPORTED_LANGUAGES=["en_US","zh_TW","ko_KR"];const n="MaiToolsLang";t.saveLanguage=function(e){window.localStorage.setItem(n,e)},t.getInitialLanguage=function(){const e=new URLSearchParams(location.search).get("hl");if(e)return e.startsWith("zh")?"zh_TW":e.startsWith("ko")?"ko_KR":"en_US";return function(){switch(window.localStorage.getItem(n)){case"en_US":return"en_US";case"zh_TW":return"zh_TW";case"ko_KR":return"ko_KR"}return null}()||(navigator.language.startsWith("zh")?"zh_TW":navigator.language.startsWith("ko")?"ko_KR":"en_US")}},4468:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.statusText=void 0;const n={zh_TW:{bscStart:"匯入綠譜成績中…",bscDone:"✔",advStart:"匯入黃譜成績中…",advDone:"✔",expStart:"匯入紅譜成績中…",expDone:"✔",masStart:"匯入紫譜成績中…",masDone:"✔",remStart:"匯入白譜成績中…",remDone:"✔"},en_US:{bscStart:"Loading Basic scores…",bscDone:"✔",advStart:"Loading Advanced scores…",advDone:"✔",expStart:"Loading Expert scores…",expDone:"✔",masStart:"Loading Master scores…",masDone:"✔",remStart:"Loading Re:Master scores…",remDone:"✔"},ko_KR:{bscStart:"Basic 정확도 불러오는 중…",bscDone:"✔",advStart:"Advanced 정확도 불러오는 중…",advDone:"✔",expStart:"Expert 정확도 불러오는 중…",expDone:"✔",masStart:"Master 정확도 불러오는 중…",masDone:"✔",remStart:"Re:Master 정확도 불러오는 중…",remDone:"✔"}};t.statusText=function(e,t,i){const o=n[e];switch(t){case 4:return i?o.remDone+"\n":o.remStart;case 3:return i?o.masDone+"\n":o.masStart;case 2:return i?o.expDone+"\n":o.expStart;case 1:return i?o.advDone+"\n":o.advStart;case 0:return i?o.bscDone+"\n":o.bscStart}return""}},4313:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getMaiToolsBaseUrl=t.getScriptHost=void 0;const i=n(6162),o="https://myjian.github.io/mai-tools";t.getScriptHost=function(e){const t=Array.from(document.querySelectorAll("script"));for(;t.length;){const n=t.pop();if(n.src.includes(e)){const e=new URL(n.src),t=e.pathname;return e.origin+t.substring(0,t.lastIndexOf("/scripts"))}}return o},t.getMaiToolsBaseUrl=function(){return(0,i.isMaimaiNetOrigin)(window.location.origin)?o:window.location.pathname.startsWith("/mai-tools")?window.location.origin+"/mai-tools":window.location.origin}},472:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,a){function r(e){try{s(i.next(e))}catch(e){a(e)}}function c(e){try{s(i.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,c)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.isNiconicoLinkImg=t.isNicoNicoLink=t.getSongNickname=t.getSongIdx=t.normalizeSongName=t.RATING_TARGET_SONG_NAME_PREFIX=t.DX_SONG_NAME_SUFFIX=void 0;const o=n(6420);t.DX_SONG_NAME_SUFFIX=" [DX]",t.RATING_TARGET_SONG_NAME_PREFIX="▶ ",t.normalizeSongName=function(e){return"D✪N’T  ST✪P  R✪CKIN’"===e?"D✪N’T ST✪P R✪CKIN’":e.replace(/" \+ '/g,"").replace(/' \+ "/g,"")},t.getSongIdx=function(e){return e.getElementsByTagName("form")[0].elements.namedItem("idx").value},t.getSongNickname=function(e,n,i){return"Link"===e&&(e=n.includes("niconico")?"Link(nico)":"Link(org)"),1===i?e+t.DX_SONG_NAME_SUFFIX:e};let a={};t.isNicoNicoLink=function(e){return i(this,void 0,void 0,(function*(){if(a.nico===e)return!0;if(a.original===e)return!1;const t=(yield(0,o.fetchSongDetailPage)(e)).body.querySelector(".m_10.m_t_5.t_r.f_12").innerText.includes("niconico");return console.log("Link (idx: "+e+") "+(t?"is niconico":"is original")),t?a.nico=e:a.original=e,t}))},t.isNiconicoLinkImg=function(e){return e.includes("e90f79d9dcff84df")}},6420:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,a){function r(e){try{s(i.next(e))}catch(e){a(e)}}function c(e){try{s(i.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,c)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getPostMessageFunc=t.fetchSongDetailPage=t.fetchNewSongs=t.fetchAllSongs=t.fetchGameVersion=t.fetchPage=t.handleError=t.ALLOWED_ORIGINS=void 0;const o=n(9099),a=n(2347),r=n(6510),c=n(472);function s(e){return i(this,void 0,void 0,(function*(){const t=yield fetch(e),n=yield t.text();return(new DOMParser).parseFromString(n,"text/html")}))}function l(e){return i(this,void 0,void 0,(function*(){const t=Array.from(e.querySelectorAll(".w_450.m_15.f_0")),n=[];for(const e of t){const t=(0,c.getSongIdx)(e),i=(0,a.getSongName)(e),r=(0,o.getChartType)(e);let s;"Link"===i&&(s=(yield(0,c.isNicoNicoLink)(t))?"Link(nico)":"Link(org)"),n.push({dx:r,name:i,nickname:s})}return n}))}t.ALLOWED_ORIGINS=["https://cdpn.io","https://myjian.github.io","http://localhost:8080"],t.handleError=function(e){alert(e)},t.fetchPage=s,t.fetchGameVersion=function e(t){return i(this,void 0,void 0,(function*(){const n=t.querySelector("select[name=version] option:last-of-type");return n?parseInt(n.value):e(t=yield s("/maimai-mobile/record/musicVersion/"))}))},t.fetchAllSongs=function(e){return i(this,void 0,void 0,(function*(){if(!e){const t=r.SELF_SCORE_URLS.get(1);e=yield s(t)}return yield l(e)}))},t.fetchNewSongs=function(e){return i(this,void 0,void 0,(function*(){const t=yield s(`/maimai-mobile/record/musicVersion/search/?version=${e}&diff=0`);return yield l(t)}))},t.fetchSongDetailPage=function(e){return i(this,void 0,void 0,(function*(){return s("/maimai-mobile/record/musicDetail/?"+new URLSearchParams({idx:e}).toString())}))},t.getPostMessageFunc=function(e,t){return(n,i)=>{const o={action:n,payload:i};e.postMessage(o,t)}}},7552:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,a){function r(e){try{s(i.next(e))}catch(e){a(e)}}function c(e){try{s(i.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,c)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=n(2347),a=n(6510),r=n(6162),c=n(8080),s=n(4468),l=n(4313),u=n(6420);!function(){const e=(0,l.getScriptHost)("analyze-rating-in-newtab")+"/rating-calculator/";let t=(0,c.getInitialLanguage)();const n={zh_TW:{pleaseLogIn:"請登入 maimai NET",analyze:"分析 Rating"},en_US:{pleaseLogIn:"Please log in to maimai DX NET.",analyze:"Analyze Rating"},ko_KR:{pleaseLogIn:"maimai DX NET에 로그인 해 주세요.",analyze:"레이팅 분석하기"}},d=location.pathname.includes("friend");function f(e){return i(this,void 0,void 0,(function*(){let n;const i=d?null:(0,o.getPlayerGrade)(document.body);i&&e("playerGrade",i);const r=[];for(const i of a.SELF_SCORE_URLS.keys()){e("appendPlayerScore",(0,s.statusText)(t,i,!1));const o=yield(0,a.fetchScores)(i,r);3===i&&(n=o),e("appendPlayerScore",(0,s.statusText)(t,i,!0))}return e("replacePlayerScore",""),e("appendPlayerScore",r.join("\n")),e("calculateRating",""),n}))}!function(){if(!(0,r.isMaimaiNetOrigin)(document.location.origin))return void(0,u.handleError)(n[t].pleaseLogIn);const a=d?null:(0,o.getPlayerName)(document.body);!function(e){const i=document.body.querySelector(".basic_block.p_10.f_0");if(!i)return;let o=document.querySelector(".analyzeLink");o&&o.remove(),o=document.createElement("a"),o.className="analyzeLink f_14",o.style.color="#1477e6",o.target="selfRating",o.append(n[t].analyze,document.createElement("br")),o.href=e,location.pathname.indexOf("/maimai-mobile/playerData/")>=0?(o.className+=" f_l",document.querySelector(".m_5.m_t_10.t_r.f_12").insertAdjacentElement("afterbegin",o)):location.pathname.indexOf("/maimai-mobile/home/")>=0?(o.className+=" d_b",document.querySelector(".comment_block.f_l.f_12").insertAdjacentElement("afterbegin",o)):i.querySelector(".name_block").parentElement.append(o)}(a?e+"?"+new URLSearchParams({playerName:a}):e);const s=(0,u.fetchGameVersion)(document.body);let l;window.ratingCalcMsgListener&&window.removeEventListener("message",window.ratingCalcMsgListener),window.ratingCalcMsgListener=e=>i(this,void 0,void 0,(function*(){if(console.log(e.origin,e.data),u.ALLOWED_ORIGINS.includes(e.origin)){const n=(0,u.getPostMessageFunc)(e.source,e.origin);if("string"==typeof e.data)"ready"===e.data&&(n("gameVersion",yield s),l=f(n));else if("object"==typeof e.data)if("ready"===e.data.action)n("gameVersion",yield s),"string"==typeof e.data.payload&&(t=e.data.payload),l=f(n);else if("fetchNewSongs"===e.data.action){const t=yield s,i=e.data.payload;t<i?n("newSongs",[]):(0,u.fetchNewSongs)(i).then((e=>n("newSongs",e)))}else"fetchAllSongs"===e.data.action?l.then((e=>(0,u.fetchAllSongs)(e).then((e=>n("allSongs",e))))):"saveLanguage"===e.data.action&&(t=e.data.payload,(0,c.saveLanguage)(t))}})),window.addEventListener("message",window.ratingCalcMsgListener)}()}()}},t={};!function n(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={exports:{}};return e[i].call(a.exports,a,a.exports,n),a.exports}(7552)})();