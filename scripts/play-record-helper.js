(()=>{"use strict";var e={9099:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getChartTypeName=t.getChartType=void 0,t.getChartType=function(e){if(e.id)return e.id.includes("sta_")?0:1;const t=e.querySelector(".playlog_music_kind_icon")||e.querySelector(".music_kind_icon")||e.querySelector(".f_l.h_20")||e.querySelector("img:nth-child(2)");return t instanceof HTMLImageElement&&t.src.includes("_standard")?0:1},t.getChartTypeName=function(e){return 1===e?"DX":"STANDARD"}},8642:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getDifficultyTextColor=t.getDifficultyForRecord=t.getDifficultyByName=t.getDifficultyName=t.DIFFICULTY_CLASSNAME_MAP=t.DIFFICULTIES=void 0,t.DIFFICULTIES=[0,1,2,3,4];const n=["BASIC","ADVANCED","EXPERT","MASTER","Re:MASTER"];function o(e){const t=n.indexOf(e.toUpperCase());return t<0?4:t}t.DIFFICULTY_CLASSNAME_MAP=new Map([[0,"basic"],[1,"advanced"],[2,"expert"],[3,"master"],[4,"remaster"]]),t.getDifficultyName=function(e){return n[e]},t.getDifficultyByName=o,t.getDifficultyForRecord=function(e){const t=e.querySelector(".playlog_top_container img.playlog_diff").src;return o(t.substring(t.lastIndexOf("_")+1,t.lastIndexOf(".")))},t.getDifficultyTextColor=function(e){return["#45c124","#ffba01","#ff7b7b","#9f51dc","#dbaaff"][e]}},271:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.calculateDetailedDxStar=t.getDxStarText=t.determineDxStar=void 0;const n=[0,.85,.9,.93,.95,.97,.99,1];function o(e){for(let t=n.length-1;t>0;t--)if(e>=n[t])return t;return 0}t.determineDxStar=o,t.getDxStarText=function(e,t=!1){return t||e?`✦${e}`:""},t.calculateDetailedDxStar=function(e){const t=e.querySelector(".playlog_result_innerblock .playlog_score_block");if(!t)return 0;const n=t.querySelector(".w_80");if(!n)return;n.remove();const[i,r]=t.textContent.split("/").map((e=>parseInt(e.replace(",","").trim()))),a=i/r,c=o(a),s=`✦${c} (${(100*a).toFixed(1)}%)`,l=document.createElement("div");return l.className="white p_r_5 f_15 f_l",l.append(s),t.prepend(l),c}},2347:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getSyncStatus=t.getApFcStatus=t.getAchievement=t.getPlayerGrade=t.getPlayerName=t.getChartDifficulty=t.getChartLevel=t.getSongName=void 0;const o=n(8642),i=n(472);t.getSongName=function(e){const t=e.querySelector(".basic_block.break");return t?t.childNodes.item(t.childNodes.length-1).nodeValue:(0,i.normalizeSongName)(e.getElementsByClassName("music_name_block")[0].innerText)},t.getChartLevel=function(e){return e.getElementsByClassName("music_lv_block")[0].innerText},t.getChartDifficulty=function(e){if(!e.classList.contains("pointer")){const t=e.querySelector(".pointer");e=t||e}const t=e.className.match(/music_([a-z]+)_score_back/)[1];return(0,o.getDifficultyByName)(t)},t.getPlayerName=function(e){var t,n;return e.className.includes("friend_vs_friend_block")?null===(t=e.querySelector(".t_l"))||void 0===t?void 0:t.innerText:null===(n=e.querySelector(".name_block"))||void 0===n?void 0:n.innerText},t.getPlayerGrade=function(e){const t=e.querySelector(".user_data_block_line ~ img.h_25");if(t){const e=t.src.lastIndexOf("grade_");return t.src.substring(e+6,e+8)}return null},t.getAchievement=function(e,t=!1){const n=t?e.querySelector("tr:first-child td:last-child"):e.querySelector(".music_score_block.w_120");return n instanceof HTMLElement?parseFloat(n.innerText):0},t.getApFcStatus=function(e,t=!1){const n=t?e.querySelector("tr:last-child td:last-child img:nth-child(2)"):e.children[0].querySelector("img.f_r:nth-last-of-type(2)");if(!n)return null;const o=n.src.replace(/\?ver=.*$/,""),i=o.lastIndexOf("_"),r=o.lastIndexOf("."),a=o.substring(i+1,r);return"back"===a?null:a.replace("ap","AP").replace("p","+").toUpperCase()},t.getSyncStatus=function(e,t=!1){const n=t?e.querySelector("tr:last-child td:last-child img:first-child"):e.children[0].querySelector("img.f_r:nth-last-of-type(3)");if(!n)return null;const o=n.src.replace(/\?ver=.*$/,""),i=o.lastIndexOf("_"),r=o.lastIndexOf("."),a=o.substring(i+1,r);return"back"===a?null:a.replace("sd","DX").replace("p","+").toUpperCase()}},6510:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{s(o.next(e))}catch(e){r(e)}}function c(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.fetchScoresFull=t.fetchScores=t.getMyDxScoreInfo=t.SELF_SCORE_URLS=void 0;const i=n(9099),r=n(271),a=n(2347),c=n(9268),s=n(6991);function l(e){const t=e.querySelectorAll(".music_score_block");if(2!==t.length)return null;const n=t[1].childNodes,o=n[n.length-1],i=o instanceof Text?o.wholeText.split("/").map((e=>e.replace(",","").trim())):[];if(2!==i.length)return null;try{const e=parseInt(i[0]),t=parseInt(i[1]);if(isNaN(e)||isNaN(t))throw new Error(`failed to parse DX score. Input was ${JSON.stringify(i)}`);const n=e/t;return{max:t,player:e,ratio:n,star:(0,r.determineDxStar)(n)}}catch(e){console.warn(e)}return{max:0,player:0,ratio:0,star:0}}function u(e,t,n,o){const r=e.classList.contains("screw_block"),s=e.classList.contains("w_450")&&e.classList.contains("m_15")&&e.classList.contains("p_r")&&e.classList.contains("f_0");if(r)return o.genre=e.innerText,null;if(s){const r=(0,a.getAchievement)(e);if(!r)return;const s=(0,a.getSongName)(e),l=(0,i.getChartType)(e),u=n.getSongProperties(s,o.genre,l);let d=u?u.lv[t]:0;const f=d>0;return d||(d=(0,c.getDefaultLevel)((0,a.getChartLevel)(e))),{songName:s,genre:o.genre,difficulty:t,level:d,levelIsPrecise:f,chartType:l,achievement:r}}}t.SELF_SCORE_URLS=new Map([[4,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=4"],[3,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=3"],[2,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=2"],[1,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=1"],[0,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=0"]]),t.getMyDxScoreInfo=l,t.fetchScores=function(e,n,i){return o(this,void 0,void 0,(function*(){let o=n.get(e);if(!o){const i=t.SELF_SCORE_URLS.get(e);if(!i)return;o=yield(0,s.fetchPage)(i),n.set(e,o)}const r=o.querySelectorAll(".main_wrapper.t_c .m_15"),a={genre:""};return Array.from(r).map((t=>u(t,e,i,a))).filter((e=>null!=e))}))},t.fetchScoresFull=function(e,n,i){return o(this,void 0,void 0,(function*(){let o=n.get(e);if(!o){const i=t.SELF_SCORE_URLS.get(e);if(!i)return;o=yield(0,s.fetchPage)(i),n.set(e,o)}const r=o.querySelectorAll(".main_wrapper.t_c .m_15"),c={genre:""},d=Array.from(r).map((t=>function(e,t,n,o){const i=u(e,t,n,o);if(null==i)return null;const r=n.getSongProperties(i.songName,o.genre,i.chartType);return Object.assign(Object.assign({},i),{fcap:(0,a.getApFcStatus)(e),sync:(0,a.getSyncStatus)(e),dxscore:l(e),version:r?r.debut:-1})}(t,e,i,c)));return d.filter((e=>null!=e))}))}},6162:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getGameRegionFromOrigin=t.isMaimaiNetOrigin=t.MAIMAI_NET_ORIGINS=void 0,t.MAIMAI_NET_ORIGINS=["https://maimaidx.jp","https://maimaidx-eng.com"],t.isMaimaiNetOrigin=function(e){return"https://maimaidx.jp"===e||"https://maimaidx-eng.com"===e},t.getGameRegionFromOrigin=function(e){return"https://maimaidx.jp"===e?"https://maimaidx.jp":"https://maimaidx-eng.com"}},134:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getVersionName=t.validateGameVersion=t.RATING_CALCULATOR_SUPPORTED_VERSIONS=t.LATEST_VERSION=void 0;const n=["maimai","maimai PLUS","GreeN","GreeN PLUS","ORANGE","ORANGE PLUS","PiNK","PiNK PLUS","MURASAKi","MURASAKi PLUS","MiLK","MiLK PLUS","FiNALE","maimaiでらっくす","maimaiでらっくす PLUS","Splash","Splash PLUS","UNiVERSE","UNiVERSE PLUS","FESTiVAL","FESTiVAL PLUS"];t.LATEST_VERSION=20,t.RATING_CALCULATOR_SUPPORTED_VERSIONS=[18,19,20],t.validateGameVersion=function(e,n,o=t.LATEST_VERSION){const i="string"==typeof e?parseInt(e):e;return!e||isNaN(i)?o:i>=n&&i<=o?i:o},t.getVersionName=function(e){return n[e]}},9268:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getDisplayLv=t.getDefaultLevel=t.getOfficialLevel=t.MAX_LEVEL=void 0,t.MAX_LEVEL=15,t.getOfficialLevel=function(e){const t=Math.floor(e);return e-t>.6?t+"+":t.toString()},t.getDefaultLevel=function(e){if(!e)return 1;const t=parseInt(e);return e.endsWith("+")?t+.7:t},t.getDisplayLv=function(e,t=!1){return(t=t||e<0)?Math.abs(e).toFixed(1)+"~":e.toFixed(1)}},6685:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{s(o.next(e))}catch(e){r(e)}}function c(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.loadMagic=void 0;const i=n(8642),r=n(134),a=n(472),c="magicExpire",s=["dxLv15","dxLv16","dxLv17","dxLv18","dxLv19","dxLv20"],l={13:null,18:"aHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9teWppYW4vZWU1NjlkNzRmNDIyZDRlMjU1MDY1ZDhiMDJlYTI5NGEvcmF3LzkzMmZiMDNhMzgxMjEyMTAwODBkNmY1Mzc5MTNhMDg0MjQ3ZTUzMWMvbWFpZHhfaW5fbHZfdW5pdmVyc2VwbHVzLmpz",19:"aHR0cHM6Ly9zZ2ltZXJhLmdpdGh1Yi5pby9tYWlfUmF0aW5nQW5hbHl6ZXIvc2NyaXB0c19tYWltYWkvbWFpZHhfaW5fbHZfZmVzdGl2YWwuanM=",20:"aHR0cHM6Ly9zZ2ltZXJhLmdpdGh1Yi5pby9tYWlfUmF0aW5nQW5hbHl6ZXIvc2NyaXB0c19tYWltYWkvbWFpZHhfaW5fbHZfZmVzdGl2YWxwbHVzLmpz"},u=/\bdx\s*:\s*([0-9]+)/,d=/\blv\s*:\s*(\[.+?\])/,f=/\bv\s*:\s*(-?[0-9]+)/,g=/\bn\s*:\s*["'](.+?)['"]\s*[,\}]/,m=/\bnn\s*:\s*["'](.+?)['"]\s*[,\}]/;function h(e){const t=e.match(u),n=e.match(d),o=e.match(f),r=e.match(g),c=e.match(m);if(t&&n&&o&&r){let e=JSON.parse(n[1]);if(e.length>i.DIFFICULTIES.length){const t=e.pop();e[i.DIFFICULTIES.length-1]=t}return{dx:parseInt(t[1]),lv:e,debut:Math.abs(parseInt(o[1])),name:(0,a.normalizeSongName)(r[1]),nickname:c&&c[1]}}}function p(e){return"magicVer"+e}t.loadMagic=function(e){return o(this,void 0,void 0,(function*(){const t=function(e){const t=parseInt(window.localStorage.getItem(c));if(isNaN(t)||Date.now()>t){for(const e of s)window.localStorage.removeItem(e);for(const e of r.RATING_CALCULATOR_SUPPORTED_VERSIONS)window.localStorage.removeItem(p(e));return null}const n=p(e),o=window.localStorage.getItem(n);return console.log(`Found cache: ${n}=${o}`),JSON.parse(o)}(e);if(t)return t;console.log("Magic happening...");const n=yield function(e){return o(this,void 0,void 0,(function*(){const t=l[e]||l[18],n=yield fetch(atob(t));return n.ok?(yield n.text()).split("\n").map(h).filter((e=>null!=e)):[]}))}(e);return n.length&&function(e,t){const n=p(e);window.localStorage.setItem(n,JSON.stringify(t)),window.localStorage.setItem(c,String(Date.now()+864e5)),console.log(`Updated cache for ${n}`)}(e,n),n}))}},6991:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{s(o.next(e))}catch(e){r(e)}}function c(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.addLvToSongTitle=t.removeScrollControl=t.getEpochTimeFromText=t.fetchGameVersion=t.fetchPage=void 0;const i=n(8642),r="MaiToolsGameVer",a="MaiToolsGameVerExpire",c=6e4*((new Date).getTimezoneOffset()+540);function s(e){return o(this,void 0,void 0,(function*(){const t=yield fetch(e),n=yield t.text();return(new DOMParser).parseFromString(n,"text/html")}))}t.fetchPage=s,t.fetchGameVersion=function e(t){return o(this,void 0,void 0,(function*(){const n=parseInt(window.localStorage.getItem(a));if(!isNaN(n)&&n>=Date.now()){const e=parseInt(window.localStorage.getItem(r));if(!isNaN(e))return e}const o=t.querySelector("select[name=version] option:last-of-type");if(o instanceof HTMLOptionElement){const e=parseInt(o.value);return window.localStorage.setItem(r,String(e)),window.localStorage.setItem(a,String(Date.now()+864e5)),e}return e(t=yield s("/maimai-mobile/record/musicVersion/"))}))},t.getEpochTimeFromText=function(e){const t=e.match(/(\d+)\/(\d+)\/(\d+) (\d+):(\d+)/);return new Date(parseInt(t[1]),parseInt(t[2])-1,parseInt(t[3]),parseInt(t[4]),parseInt(t[5])).getTime()-c},t.removeScrollControl=function(e){let t=e.getElementById("page-top");t&&t.remove(),t=e.getElementById("page-bottom"),t&&t.remove()},t.addLvToSongTitle=function(e,t,n){return o(this,void 0,void 0,(function*(){const o=e.querySelector(".basic_block.break"),r=o.querySelector("img");r&&r.remove();const a=document.createElement("div");a.className="f_r",a.append("Lv "+n),a.style.color=(0,i.getDifficultyTextColor)(t),o.append(a)}))}},6689:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getRemovedSongs=void 0,t.getRemovedSongs=function(e){return"https://maimaidx.jp"===e?["全世界共通リズム感テスト"]:"https://maimaidx-eng.com"===e?["コネクト","シュガーソングとビターステップ","Mr. Wonderland","ワンダーラスト","LOSER","U.S.A.","新宝島","アウトサイダー","ジャガーノート"]:[]}},4313:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getMaiToolsBaseUrl=t.getScriptHost=void 0;const o=n(6162),i="https://myjian.github.io/mai-tools";t.getScriptHost=function(e){const t=Array.from(document.querySelectorAll("script"));for(;t.length;){const n=t.pop();if(n.src.includes(e)){const e=new URL(n.src),t=e.pathname;return e.origin+t.substring(0,t.lastIndexOf("/scripts"))}}return i},t.getMaiToolsBaseUrl=function(){return(0,o.isMaimaiNetOrigin)(window.location.origin)?i:window.location.pathname.startsWith("/mai-tools")?window.location.origin+"/mai-tools":window.location.origin}},472:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{s(o.next(e))}catch(e){r(e)}}function c(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.isNiconicoLinkImg=t.isNiconicoLink=t.getSongNickname=t.getSongIdx=t.normalizeSongName=t.RATING_TARGET_SONG_NAME_PREFIX=t.DX_SONG_NAME_SUFFIX=void 0;const i=n(6420);t.DX_SONG_NAME_SUFFIX=" [DX]",t.RATING_TARGET_SONG_NAME_PREFIX="▶ ",t.normalizeSongName=function(e){return"D✪N’T  ST✪P  R✪CKIN’"===e?"D✪N’T ST✪P R✪CKIN’":e.replace(/" \+ '/g,"").replace(/' \+ "/g,"")},t.getSongIdx=function(e){return e.getElementsByTagName("form")[0].elements.namedItem("idx").value},t.getSongNickname=function(e,n,o){return"Link"===e&&(e=n.includes("niconico")?"Link(nico)":"Link(org)"),1===o?e+t.DX_SONG_NAME_SUFFIX:e};let r={};t.isNiconicoLink=function(e){return o(this,void 0,void 0,(function*(){if(r.nico===e)return!0;if(r.original===e)return!1;const t=(yield(0,i.fetchSongDetailPage)(e)).body.querySelector(".m_10.m_t_5.t_r.f_12").innerText.includes("niconico");return console.log("Link (idx: "+e+") "+(t?"is niconico":"is original")),t?r.nico=e:r.original=e,t}))},t.isNiconicoLinkImg=function(e){return e.includes("e90f79d9dcff84df")}},87:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{s(o.next(e))}catch(e){r(e)}}function c(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.filterSongsByVersion=t.loadSongDatabase=t.SongDatabase=void 0;const i=n(134),r=n(6685),a=n(6689),c=n(4313),s=n(472);class l{constructor(e=!0){this.dxMap=new Map,this.standardMap=new Map,this.verbose=!0,this.verbose=e}insertOrUpdateSong(e,t){const n=1===e.dx?this.dxMap:this.standardMap;if(this.updateSong(e))return;e.debut||0===e.debut||(e.debut=t);const o="Link"===e.name?e.nickname:e.name;if(n.has(o))return console.warn(`Found existing song properties for ${o} ${e.dx}: ${JSON.stringify(n.get(o))}`),void console.warn(`Will ignore ${e}`);n.set(o,e)}updateSong(e){const t=1===e.dx?this.dxMap:this.standardMap,n=t.has(e.name)?e.name:e.nickname,o=t.get(n);if(!o)return!1;let i=o.lv;return e.lv instanceof Array&&(i=o.lv.map(((t,n)=>{const o=e.lv[n];return!isNaN(o)&&o>0?o:t}))),t.set(n,Object.assign(Object.assign(Object.assign({},o),e),{lv:i})),!0}deleteSong(e){this.dxMap.delete(e),this.standardMap.delete(e)}validate(){for(const e of[this.dxMap,this.standardMap])e.forEach((e=>{console.assert(null!=e.debut),console.assert(e.debut>=0&&e.debut<=i.LATEST_VERSION),console.assert(e.lv.length>=4)}))}hasDualCharts(e,t){if("Link"===e)return!0;if(this.dxMap.has(e)&&this.standardMap.has(e))return!0;const n=(0,s.getSongNickname)(e,t,0);return!!n&&this.dxMap.has(n)&&this.standardMap.has(n)}getSongProperties(e,t,n=0){if(null==e)return;const o=1===n?this.dxMap:this.standardMap;let i=o.get(e);if(i)return i;const r=(0,s.getSongNickname)(e,t,0);if(i=o.get(r),i)return i;this.verbose&&console.warn(`Could not find song properties for ${e} ${n}`)}getSongsByVersion(e){const t=[];return this.dxMap.forEach((n=>{n.debut===e&&t.push(n)})),this.standardMap.forEach((n=>{n.debut===e&&t.push(n)})),t}toString(){return String({dxMap:this.dxMap,standardMap:this.standardMap})}}function u(e){return o(this,void 0,void 0,(function*(){let t="";try{const n=yield fetch(e);return n.ok?(t=yield n.text(),JSON.parse(t)):{}}catch(e){console.warn(e),console.warn("Failed to parse JSON: "+t)}return{}}))}t.SongDatabase=l,t.loadSongDatabase=function(e,t){return o(this,void 0,void 0,(function*(){const n=yield(0,r.loadMagic)(e),i=new l;for(const t of n)i.insertOrUpdateSong(t,e);const s=yield function(e){return o(this,void 0,void 0,(function*(){const t=(0,c.getMaiToolsBaseUrl)()+`/data/chart-levels/version${e}.json`,n=yield u(t),o=[];return["standard","dx"].forEach(((e,t)=>{if(n[e])for(const i of Object.keys(n[e]))o.push({name:i,dx:t,lv:n[e][i]})})),o}))}(e);console.log("chartLevelOverrides",s);for(const t of s)i.insertOrUpdateSong(t,e);if("https://maimaidx-eng.com"===t){const e=yield function(){return o(this,void 0,void 0,(function*(){const e=(0,c.getMaiToolsBaseUrl)()+"/data/song-info/intl.json",t=yield u(e),n=[];return["standard","dx"].forEach(((e,o)=>{if(t[e])for(const i of Object.keys(t[e])){const r=t[e][i],a=parseInt(i);for(const e of r)n.push({name:e,dx:o,debut:a})}})),n}))}();console.log("debutVersionOverrides",e);for(const t of e)i.updateSong(t)}const d=(0,a.getRemovedSongs)(t);for(const e of d)i.deleteSong(e);return i.validate(),i}))},t.filterSongsByVersion=function(e,t,n,o){const i=[];for(const r of e){const e=t.getSongProperties(r.name,"",r.dx)||t.getSongProperties(r.nickname,"",r.dx);e?(0===o&&e.debut===n||1===o&&e.debut<n)&&i.push(e):console.warn("Could not find song properties for",r)}return i}},6420:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{s(o.next(e))}catch(e){r(e)}}function c(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getPostMessageFunc=t.fetchSongDetailPage=t.fetchNewSongs=t.fetchAllSongs=t.handleError=t.ALLOWED_ORIGINS=void 0;const i=n(9099),r=n(2347),a=n(6510),c=n(6991),s=n(472);function l(e){return o(this,void 0,void 0,(function*(){const t=Array.from(e.querySelectorAll(".w_450.m_15.f_0")),n=[];for(const e of t){const t=(0,s.getSongIdx)(e),o=(0,r.getSongName)(e),a=(0,i.getChartType)(e);let c;"Link"===o&&(c=(yield(0,s.isNiconicoLink)(t))?"Link(nico)":"Link(org)"),n.push({dx:a,name:o,nickname:c})}return n}))}t.ALLOWED_ORIGINS=["https://cdpn.io","https://myjian.github.io","http://localhost:8080"],t.handleError=function(e){alert(e)},t.fetchAllSongs=function(e){return o(this,void 0,void 0,(function*(){if(!e){const t=a.SELF_SCORE_URLS.get(1);e=yield(0,c.fetchPage)(t)}return yield l(e)}))},t.fetchNewSongs=function(e){return o(this,void 0,void 0,(function*(){const t=yield(0,c.fetchPage)(`/maimai-mobile/record/musicVersion/search/?version=${e}&diff=0`);return yield l(t)}))},t.fetchSongDetailPage=function(e){return o(this,void 0,void 0,(function*(){const t=new URLSearchParams({idx:e}).toString();return(0,c.fetchPage)("/maimai-mobile/record/musicDetail/?"+t)}))},t.getPostMessageFunc=function(e,t){return(n,o)=>{const i={action:n,payload:o};e.postMessage(i,t)}}},2998:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{s(o.next(e))}catch(e){r(e)}}function c(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const i=n(9099),r=n(8642),a=n(2347),c=n(6162),s=n(9268),l=n(6991),u=n(472),d=n(87),f=n(6420);!function(e){o(this,void 0,void 0,(function*(){if((0,c.isMaimaiNetOrigin)(e.location.origin)&&e.location.pathname.includes("/maimai-mobile/record/playlogDetail/")){const t=yield(0,r.getDifficultyForRecord)(e.body),n=yield function(t){return o(this,void 0,void 0,(function*(){const n=yield(0,l.fetchGameVersion)(e.body),o=(0,c.getGameRegionFromOrigin)(e.location.origin),r=yield(0,d.loadSongDatabase)(n,o),g=(0,a.getSongName)(e.body),m=e.querySelector("img.music_img"),h="Link"===g&&(0,u.isNiconicoLinkImg)(m.src)?"niconico":"",p=(0,i.getChartType)(e.body),S=r.getSongProperties(g,h,p);if(S)return(0,s.getDisplayLv)(S.lv[t]);const v=e.querySelector("input[name=idx]");return(yield(0,f.fetchSongDetailPage)(v.value)).querySelector(`.music_detail_table tr:nth-child(${t+1}) .music_lv_back`).innerHTML.trim()}))}(t);(0,l.addLvToSongTitle)(e.body,t,n)}}))}(document)}},t={};!function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}(2998)})();