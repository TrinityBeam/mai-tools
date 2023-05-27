(()=>{"use strict";var e={9099:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getChartTypeName=t.getChartType=void 0,t.getChartType=function(e){if(e.id)return e.id.includes("sta_")?0:1;const t=e.querySelector(".playlog_music_kind_icon")||e.querySelector(".music_kind_icon")||e.querySelector(".f_l.h_20")||e.querySelector("img:nth-child(2)");return t instanceof HTMLImageElement&&t.src.includes("_standard")?0:1},t.getChartTypeName=function(e){return 1===e?"DX":"STANDARD"}},8642:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getDifficultyTextColor=t.getDifficultyForRecord=t.getDifficultyByName=t.getDifficultyName=t.DIFFICULTY_CLASSNAME_MAP=t.DIFFICULTIES=void 0,t.DIFFICULTIES=[0,1,2,3,4];const n=["BASIC","ADVANCED","EXPERT","MASTER","Re:MASTER"];function i(e){const t=n.indexOf(e.toUpperCase());return t<0?4:t}t.DIFFICULTY_CLASSNAME_MAP=new Map([[0,"basic"],[1,"advanced"],[2,"expert"],[3,"master"],[4,"remaster"]]),t.getDifficultyName=function(e){return n[e]},t.getDifficultyByName=i,t.getDifficultyForRecord=function(e){const t=e.querySelector(".playlog_top_container img.playlog_diff").src;return i(t.substring(t.lastIndexOf("_")+1,t.lastIndexOf(".")))},t.getDifficultyTextColor=function(e){return["#45c124","#ffba01","#ff7b7b","#9f51dc","#dbaaff"][e]}},271:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.calculateDetailedDxStar=t.getDxStarText=t.determineDxStar=void 0;const n=[0,.85,.9,.93,.95,.97,.99,1];function i(e){for(let t=n.length-1;t>0;t--)if(e>=n[t])return t;return 0}t.determineDxStar=i,t.getDxStarText=function(e,t=!1){return t||e?`✦${e}`:""},t.calculateDetailedDxStar=function(e){const t=e.querySelector(".playlog_result_innerblock .playlog_score_block");if(!t)return 0;const n=t.querySelector(".w_80");if(!n)return;n.remove();const[r,o]=t.textContent.split("/").map((e=>parseInt(e.replace(",","").trim()))),a=r/o,c=i(a),s=`✦${c} (${(100*a).toFixed(1)}%)`,l=document.createElement("div");return l.className="white p_r_5 f_15 f_l",l.append(s),t.prepend(l),c}},2347:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getSyncStatus=t.getApFcStatus=t.getAchievement=t.getPlayerGrade=t.getPlayerName=t.getChartDifficulty=t.getChartLevel=t.getSongName=void 0;const i=n(8642),r=n(472);t.getSongName=function(e){const t=e.querySelector(".basic_block.break");return t?t.childNodes.item(t.childNodes.length-1).nodeValue:(0,r.normalizeSongName)(e.getElementsByClassName("music_name_block")[0].innerText)},t.getChartLevel=function(e){return e.getElementsByClassName("music_lv_block")[0].innerText},t.getChartDifficulty=function(e){if(!e.classList.contains("pointer")){const t=e.querySelector(".pointer");e=t||e}const t=e.className.match(/music_([a-z]+)_score_back/)[1];return(0,i.getDifficultyByName)(t)},t.getPlayerName=function(e){var t,n;return e.className.includes("friend_vs_friend_block")?null===(t=e.querySelector(".t_l"))||void 0===t?void 0:t.innerText:null===(n=e.querySelector(".name_block"))||void 0===n?void 0:n.innerText},t.getPlayerGrade=function(e){const t=e.querySelector(".user_data_block_line ~ img.h_25");if(t){const e=t.src.lastIndexOf("grade_");return t.src.substring(e+6,e+8)}return null},t.getAchievement=function(e,t=!1){const n=t?e.querySelector("tr:first-child td:last-child"):e.querySelector(".music_score_block.w_120");return n instanceof HTMLElement?parseFloat(n.innerText):0},t.getApFcStatus=function(e,t=!1){const n=t?e.querySelector("tr:last-child td:last-child img:nth-child(2)"):e.children[0].querySelector("img.f_r:nth-last-of-type(2)");if(!n)return null;const i=n.src.replace(/\?ver=.*$/,""),r=i.lastIndexOf("_"),o=i.lastIndexOf("."),a=i.substring(r+1,o);return"back"===a?null:a.replace("ap","AP").replace("p","+").toUpperCase()},t.getSyncStatus=function(e,t=!1){const n=t?e.querySelector("tr:last-child td:last-child img:first-child"):e.children[0].querySelector("img.f_r:nth-last-of-type(3)");if(!n)return null;const i=n.src.replace(/\?ver=.*$/,""),r=i.lastIndexOf("_"),o=i.lastIndexOf("."),a=i.substring(r+1,o);return"back"===a?null:a.replace("sd","DX").replace("p","+").toUpperCase()}},6510:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function a(e){try{s(i.next(e))}catch(e){o(e)}}function c(e){try{s(i.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.fetchScoresFull=t.fetchScores=t.getMyDxScoreInfo=t.SELF_SCORE_URLS=void 0;const r=n(9099),o=n(271),a=n(2347),c=n(9268),s=n(6991);function l(e){const t=e.querySelectorAll(".music_score_block");if(2!==t.length)return null;const n=t[1].childNodes,i=n[n.length-1],r=i instanceof Text?i.wholeText.split("/").map((e=>e.replace(",","").trim())):[];if(2!==r.length)return null;try{const e=parseInt(r[0]),t=parseInt(r[1]);if(isNaN(e)||isNaN(t))throw new Error(`failed to parse DX score. Input was ${JSON.stringify(r)}`);const n=e/t;return{max:t,player:e,ratio:n,star:(0,o.determineDxStar)(n)}}catch(e){console.warn(e)}return{max:0,player:0,ratio:0,star:0}}function u(e,t,n,i){const o=e.classList.contains("screw_block"),s=e.classList.contains("w_450")&&e.classList.contains("m_15")&&e.classList.contains("p_r")&&e.classList.contains("f_0");if(o)return i.genre=e.innerText,null;if(s){const o=(0,a.getAchievement)(e);if(!o)return;const s=(0,a.getSongName)(e),l=(0,r.getChartType)(e),u=n.getSongProperties(s,i.genre,l);let m=u?u.lv[t]:0;const g=m>0;return m||(m=(0,c.getDefaultLevel)((0,a.getChartLevel)(e))),{songName:s,genre:i.genre,difficulty:t,level:m,levelIsPrecise:g,chartType:l,achievement:o}}}t.SELF_SCORE_URLS=new Map([[4,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=4"],[3,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=3"],[2,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=2"],[1,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=1"],[0,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=0"]]),t.getMyDxScoreInfo=l,t.fetchScores=function(e,n,r){return i(this,void 0,void 0,(function*(){let i=n.get(e);if(!i){const r=t.SELF_SCORE_URLS.get(e);if(!r)return;i=yield(0,s.fetchPage)(r),n.set(e,i)}const o=i.querySelectorAll(".main_wrapper.t_c .m_15"),a={genre:""};return Array.from(o).map((t=>u(t,e,r,a))).filter((e=>null!=e))}))},t.fetchScoresFull=function(e,n,r){return i(this,void 0,void 0,(function*(){let i=n.get(e);if(!i){const r=t.SELF_SCORE_URLS.get(e);if(!r)return;i=yield(0,s.fetchPage)(r),n.set(e,i)}const o=i.querySelectorAll(".main_wrapper.t_c .m_15"),c={genre:""},m=Array.from(o).map((t=>function(e,t,n,i){const r=u(e,t,n,i);if(null==r)return null;const o=n.getSongProperties(r.songName,i.genre,r.chartType);return Object.assign(Object.assign({},r),{fcap:(0,a.getApFcStatus)(e),sync:(0,a.getSyncStatus)(e),dxscore:l(e),version:o?o.debut:-1})}(t,e,r,c)));return m.filter((e=>null!=e))}))}},6162:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getGameRegionFromOrigin=t.isMaimaiNetOrigin=t.MAIMAI_NET_ORIGINS=void 0,t.MAIMAI_NET_ORIGINS=["https://maimaidx.jp","https://maimaidx-eng.com"],t.isMaimaiNetOrigin=function(e){return"https://maimaidx.jp"===e||"https://maimaidx-eng.com"===e},t.getGameRegionFromOrigin=function(e){return"https://maimaidx.jp"===e?"https://maimaidx.jp":"https://maimaidx-eng.com"}},8080:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getInitialLanguage=t.saveLanguage=t.SUPPORTED_LANGUAGES=void 0;const i=n(5990);t.SUPPORTED_LANGUAGES=["en_US","zh_TW","ko_KR"],t.saveLanguage=function(e){(0,i.saveUserPreference)("MaiToolsLang",e)},t.getInitialLanguage=function(){const e=new URLSearchParams(location.search).get("hl");if(e)return e.startsWith("zh")?"zh_TW":e.startsWith("ko")?"ko_KR":"en_US";return function(){switch((0,i.loadUserPreference)("MaiToolsLang")){case"en_US":return"en_US";case"zh_TW":return"zh_TW";case"ko_KR":return"ko_KR"}return null}()||(navigator.language.startsWith("zh")?"zh_TW":navigator.language.startsWith("ko")?"ko_KR":"en_US")}},9268:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getDisplayLv=t.getDefaultLevel=t.getOfficialLevel=t.MAX_LEVEL=void 0,t.MAX_LEVEL=15,t.getOfficialLevel=function(e){const t=Math.floor(e);return e-t>.6?t+"+":t.toString()},t.getDefaultLevel=function(e){if(!e)return 1;const t=parseInt(e);return e.endsWith("+")?t+.7:t},t.getDisplayLv=function(e,t=!1){return(t=t||e<0)?Math.abs(e).toFixed(1)+"~":e.toFixed(1)}},6991:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function a(e){try{s(i.next(e))}catch(e){o(e)}}function c(e){try{s(i.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.addLvToSongTitle=t.removeScrollControl=t.getEpochTimeFromText=t.fetchGameVersion=t.fetchPage=void 0;const r=n(8642),o="MaiToolsGameVer",a="MaiToolsGameVerExpire",c=6e4*((new Date).getTimezoneOffset()+540);function s(e){return i(this,void 0,void 0,(function*(){const t=yield fetch(e),n=yield t.text();return(new DOMParser).parseFromString(n,"text/html")}))}t.fetchPage=s,t.fetchGameVersion=function e(t){return i(this,void 0,void 0,(function*(){const n=parseInt(window.localStorage.getItem(a));if(!isNaN(n)&&n>=Date.now()){const e=parseInt(window.localStorage.getItem(o));if(!isNaN(e))return e}const i=t.querySelector("select[name=version] option:last-of-type");if(i instanceof HTMLOptionElement){const e=parseInt(i.value);return window.localStorage.setItem(o,String(e)),window.localStorage.setItem(a,String(Date.now()+864e5)),e}return e(t=yield s("/maimai-mobile/record/musicVersion/"))}))},t.getEpochTimeFromText=function(e){const t=e.match(/(\d+)\/(\d+)\/(\d+) (\d+):(\d+)/);return new Date(parseInt(t[1]),parseInt(t[2])-1,parseInt(t[3]),parseInt(t[4]),parseInt(t[5])).getTime()-c},t.removeScrollControl=function(e){let t=e.getElementById("page-top");t&&t.remove(),t=e.getElementById("page-bottom"),t&&t.remove()},t.addLvToSongTitle=function(e,t,n){return i(this,void 0,void 0,(function*(){const i=e.querySelector(".basic_block.break"),o=i.querySelector("img");o&&o.remove();const a=document.createElement("div");a.className="f_r",a.append("Lv "+n),a.style.color=(0,r.getDifficultyTextColor)(t),i.append(a)}))}},4313:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getMaiToolsBaseUrl=t.getScriptHost=void 0;const i=n(6162),r="https://myjian.github.io/mai-tools";t.getScriptHost=function(e){const t=Array.from(document.querySelectorAll("script"));for(;t.length;){const n=t.pop();if(n.src.includes(e)){const e=new URL(n.src),t=e.pathname;return e.origin+t.substring(0,t.lastIndexOf("/scripts"))}}return r},t.getMaiToolsBaseUrl=function(){return(0,i.isMaimaiNetOrigin)(window.location.origin)?r:window.location.pathname.startsWith("/mai-tools")?window.location.origin+"/mai-tools":window.location.origin}},472:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function a(e){try{s(i.next(e))}catch(e){o(e)}}function c(e){try{s(i.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.isNiconicoLinkImg=t.isNiconicoLink=t.getSongNickname=t.getSongIdx=t.normalizeSongName=t.RATING_TARGET_SONG_NAME_PREFIX=t.DX_SONG_NAME_SUFFIX=void 0;const r=n(6420);t.DX_SONG_NAME_SUFFIX=" [DX]",t.RATING_TARGET_SONG_NAME_PREFIX="▶ ",t.normalizeSongName=function(e){return"D✪N’T  ST✪P  R✪CKIN’"===e?"D✪N’T ST✪P R✪CKIN’":e.replace(/" \+ '/g,"").replace(/' \+ "/g,"")},t.getSongIdx=function(e){return e.getElementsByTagName("form")[0].elements.namedItem("idx").value},t.getSongNickname=function(e,n,i){return"Link"===e&&(e=n.includes("niconico")?"Link(nico)":"Link(org)"),1===i?e+t.DX_SONG_NAME_SUFFIX:e};let o={};t.isNiconicoLink=function(e){return i(this,void 0,void 0,(function*(){if(o.nico===e)return!0;if(o.original===e)return!1;const t=(yield(0,r.fetchSongDetailPage)(e)).body.querySelector(".m_10.m_t_5.t_r.f_12").innerText.includes("niconico");return console.log("Link (idx: "+e+") "+(t?"is niconico":"is original")),t?o.nico=e:o.original=e,t}))},t.isNiconicoLinkImg=function(e){return e.includes("e90f79d9dcff84df")}},5990:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.saveUserPreference=t.loadUserPreference=void 0,t.loadUserPreference=function(e){return window.localStorage.getItem(e)},t.saveUserPreference=function(e,t){window.localStorage.setItem(e,t)}},6420:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function a(e){try{s(i.next(e))}catch(e){o(e)}}function c(e){try{s(i.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getPostMessageFunc=t.fetchSongDetailPage=t.fetchNewSongs=t.fetchAllSongs=t.handleError=t.ALLOWED_ORIGINS=void 0;const r=n(9099),o=n(2347),a=n(6510),c=n(6991),s=n(472);function l(e){return i(this,void 0,void 0,(function*(){const t=Array.from(e.querySelectorAll(".w_450.m_15.f_0")),n=[];for(const e of t){const t=(0,s.getSongIdx)(e),i=(0,o.getSongName)(e),a=(0,r.getChartType)(e);let c;"Link"===i&&(c=(yield(0,s.isNiconicoLink)(t))?"Link(nico)":"Link(org)"),n.push({dx:a,name:i,nickname:c})}return n}))}t.ALLOWED_ORIGINS=["https://cdpn.io","https://myjian.github.io","http://localhost:8080"],t.handleError=function(e){alert(e)},t.fetchAllSongs=function(e){return i(this,void 0,void 0,(function*(){if(!e){const t=a.SELF_SCORE_URLS.get(1);e=yield(0,c.fetchPage)(t)}return yield l(e)}))},t.fetchNewSongs=function(e){return i(this,void 0,void 0,(function*(){const t=yield(0,c.fetchPage)(`/maimai-mobile/record/musicVersion/search/?version=${e}&diff=0`);return yield l(t)}))},t.fetchSongDetailPage=function(e){return i(this,void 0,void 0,(function*(){const t=new URLSearchParams({idx:e}).toString();return(0,c.fetchPage)("/maimai-mobile/record/musicDetail/?"+t)}))},t.getPostMessageFunc=function(e,t){return(n,i)=>{const r={action:n,payload:i};e.postMessage(r,t)}}}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,n),o.exports}(()=>{const e=n(8642),t=n(271),i=n(2347),r=n(6162),o=n(8080),a=n(6991),c=n(4313),s=n(6420);!function(n){const l={en_US:{analyzeScore:"🔍 CLICK ME TO ANALYZE SCORE"},zh_TW:{analyzeScore:"🔍 點我分析分數"},ko_KR:{analyzeScore:"🔍 정확도 분석하기"}}[(0,o.getInitialLanguage)()],u=(0,c.getScriptHost)("score-converter")+"/classic-layout/",m=new Map([["S","/maimai-mobile/maimai-img/icon_s.png"],["S+","/maimai-mobile/maimai-img/icon_s_plus.png"],["SS","/maimai-mobile/maimai-img/icon_ss.png"],["SS+","/maimai-mobile/maimai-img/icon_ss_plus.png"],["SSS","/maimai-mobile/maimai-img/icon_sss.png"],["SSS+","/maimai-mobile/maimai-img/icon_sss_plus.png"]]),g=new Map([["AAA","/maimai-mobile/img/music_icon_aaa.png"],["AA","/maimai-mobile/img/music_icon_aa.png"],["A","/maimai-mobile/img/music_icon_a.png"]]),f=new Map([["fc","/maimai-mobile/maimai-img/icon_fc_silver.png"],["fcplus","/maimai-mobile/maimai-img/icon_fc_gold.png"],["ap","/maimai-mobile/maimai-img/icon_ap.png"]]),d=new Map([["applus","/maimai-mobile/img/music_icon_app.png"]]),p=new Map([["FS","/maimai-mobile/maimai-img/icon_maxfever_silver.png"],["FS+","/maimai-mobile/maimai-img/icon_maxfever_gold.png"]]),_=new Map([["FDX","/maimai-mobile/img/music_icon_fsd.png"],["FDX+","/maimai-mobile/img/music_icon_fsdp.png"]]);function h(e){return e.trim().replace(/\s+/g,"-")}function S(e,t){let n=e.get(t);return n instanceof Blob?Promise.resolve(n):n?fetch(n).then((e=>e.blob())).then((n=>(e.set(t,n),n))):void 0}function y(e){const t=e.querySelector(".playlog_achievement_txt").innerText;return t.substring(0,t.length-1)}function v(e){return e.querySelector(".playlog_notes_detail").innerText.split("\n").slice(-5).map(h).join("_")}function b(e){const t=e.querySelector(".playlog_top_container .sub_title span:last-child").innerText;return(0,a.getEpochTimeFromText)(t)}function I(e){return e.querySelector(".playlog_achievement_newrecord")?1:0}function x(e){return e.querySelector(".col2 .playlog_score_block .white").innerText}function N(e){const t=e.querySelector("img.music_img"),i=n.createElement("canvas");return i.width=t.width,i.height=t.height,i.getContext("2d").drawImage(t,0,0,i.width,i.height),i.toDataURL()}function T(e){return S(m,e)||S(g,e)||Promise.reject('invalid title "'+e+'"')}function w(e){const t=e.querySelector(".playlog_result_innerblock > img:nth-child(3)").src;switch(t.substring(t.lastIndexOf("/")+1,t.lastIndexOf("."))){case"fs":return"FS";case"fsplus":return"FS+";case"fsd":return"FDX";case"fsdplus":return"FDX+"}return null}(0,r.isMaimaiNetOrigin)(n.location.origin)&&n.location.pathname.includes("/maimai-mobile/record/playlogDetail/")&&(function(){(0,a.removeScrollControl)(n);const t=new URLSearchParams({dt:String(b(n.body)),tk:(r=n.body,r.querySelector(".playlog_top_container .sub_title .f_b").innerText.replace("0","")),st:(0,i.getSongName)(n.body),df:(0,e.getDifficultyForRecord)(n.body).toString(),ac:y(n.body),hs:I(n.body).toString(),nd:v(n.body),cb:x(n.body)});var r;let o=u+"?"+t.toString();const c=w(n.body);c&&(o+="&sc="+encodeURIComponent(c)),function(e){let t=n.getElementById("placeName");t||(t=function(){const e=n.createElement("div");e.className="basic_block m_10 p_l_10 t_l f_14 break";const t=n.createElement("span");t.className="m_t_5 p_5 d_ib";const i=n.createElement("div");return i.className="clearfix",e.append(t,i),n.querySelector(".gray_block").insertAdjacentElement("afterend",e),e}());const i=n.getElementById("placeNameCtrl");i&&i.remove();const r=t.querySelector("span");if(r.parentElement instanceof HTMLAnchorElement)return;r.innerText=l.analyzeScore;const o=n.createElement("a");o.href=e,o.target="classic_layout",o.className="blue d_ib",o.style.height="40px",t.append(o),o.append(r)}(o),window.addEventListener("message",(e=>{if(s.ALLOWED_ORIGINS.includes(e.origin)){const i=e.data,r=e.source;let o="";switch(i.action){case"ready":r.postMessage({action:"songImage",imgSrc:N(n.body)},e.origin),function(e){const t=e.querySelector(".playlog_result_innerblock > img:nth-child(2)").src.replace(/\?ver=.*$/,""),n=t.substring(t.lastIndexOf("/")+1,t.lastIndexOf("."));return"fc_dummy"===n?Promise.resolve(null):S(f,n)||S(d,n)||Promise.reject('invalid title "'+n+'"')}(n.body).then((t=>{t&&r.postMessage({action:"apFcImage",img:t},e.origin)})),(t=w(n.body),t?S(p,t)||S(_,t)||Promise.reject('invalid title "'+t+'"'):Promise.resolve(null)).then((t=>{t&&r.postMessage({action:"syncImage",img:t},e.origin)})),o=function(e){const t=e.querySelector(".playlog_scorerank").src.replace(/\?ver=.*$/,"");return t.substring(t.lastIndexOf("/")+1,t.lastIndexOf(".")).toUpperCase().replace("PLUS","+")}(n.body),T(o).then((t=>{r.postMessage({action:"rankImage",title:o,img:t},e.origin)}));break;case"getRankImage":o=i.payload,T(o).then((t=>{r.postMessage({action:"rankImage",title:o,img:t},e.origin)}))}}var t}))}(),(0,t.calculateDetailedDxStar)(n.body))}(document)})()})();