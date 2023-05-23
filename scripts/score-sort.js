(()=>{"use strict";var e={9099:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.getChartType=void 0,n.getChartType=function(e){if(e.id)return e.id.includes("sta_")?0:1;const n=e.querySelector(".playlog_music_kind_icon")||e.querySelector(".music_kind_icon")||e.querySelector(".f_l.h_20")||e.querySelector("img:nth-child(2)");return n instanceof HTMLImageElement&&n.src.includes("_standard")?0:1}},8642:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.getDifficultyTextColor=n.getDifficultyForRecord=n.getDifficultyName=n.DIFFICULTY_CLASSNAME_MAP=n.DIFFICULTIES=void 0,n.DIFFICULTIES=["BASIC","ADVANCED","EXPERT","MASTER","Re:MASTER"],n.DIFFICULTY_CLASSNAME_MAP=new Map([["Re:MASTER","remaster"],["MASTER","master"],["EXPERT","expert"],["ADVANCED","advanced"]]),n.getDifficultyName=function(e){return n.DIFFICULTIES[e]},n.getDifficultyForRecord=function(e){const t=e.querySelector(".playlog_top_container img.playlog_diff").src,o=t.substring(t.lastIndexOf("_")+1,t.lastIndexOf(".")),r=n.DIFFICULTIES.indexOf(o.toUpperCase());return r<0?4:r},n.getDifficultyTextColor=function(e){return["#45c124","#ffba01","#ff7b7b","#9f51dc","#dbaaff"][e]}},2347:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.getPlayerGrade=n.getPlayerName=n.getChartDifficulty=n.getChartLevel=n.getSongName=void 0;const o=t(472);n.getSongName=function(e){const n=e.querySelector(".basic_block.break");return n?n.childNodes.item(n.childNodes.length-1).nodeValue:(0,o.normalizeSongName)(e.getElementsByClassName("music_name_block")[0].innerText)},n.getChartLevel=function(e){return e.getElementsByClassName("music_lv_block")[0].innerText},n.getChartDifficulty=function(e){if(!e.classList.contains("pointer")){const n=e.querySelector(".pointer");e=n||e}const n=e.className.match(/music_([a-z]+)_score_back/)[1].toUpperCase();return 0===n.indexOf("RE")?"Re:MASTER":n},n.getPlayerName=function(e){var n,t;return e.className.includes("friend_vs_friend_block")?null===(n=e.querySelector(".t_l"))||void 0===n?void 0:n.innerText:null===(t=e.querySelector(".name_block"))||void 0===t?void 0:t.innerText},n.getPlayerGrade=function(e){const n=e.querySelector(".user_data_block_line ~ img.h_25");if(n){const e=n.src.lastIndexOf("grade_");return n.src.substring(e+6,e+8)}return null}},6510:function(e,n,t){var o=this&&this.__awaiter||function(e,n,t,o){return new(t||(t=Promise))((function(r,i){function c(e){try{a(o.next(e))}catch(e){i(e)}}function s(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,s)}a((o=o.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.fetchScores=n.SELF_SCORE_URLS=void 0;const r=t(9099),i=t(8642),c=t(2347),s=t(6420);n.SELF_SCORE_URLS=new Map([[4,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=4"],[3,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=3"],[2,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=2"],[1,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=1"],[0,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=0"]]),n.fetchScores=function(e,t){return o(this,void 0,void 0,(function*(){const o=n.SELF_SCORE_URLS.get(e);if(!o)return;const a=yield(0,s.fetchPage)(o),l=a.querySelectorAll(".main_wrapper.t_c .m_15"),u={genre:"",scoreList:t};return l.forEach((n=>function(e,n,t){const o=e.classList.contains("screw_block"),s=e.classList.contains("w_450")&&e.classList.contains("m_15")&&e.classList.contains("p_r")&&e.classList.contains("f_0");if(o)t.genre=e.innerText;else if(s){const o=(0,c.getSongName)(e),s=(0,c.getChartLevel)(e),a=1===(0,r.getChartType)(e)?"DX":"STANDARD",l=function(e){const n=e.querySelector(".music_score_block.w_120");return n&&n.innerText}(e);if(!l)return;t.scoreList.push([o,t.genre,(0,i.getDifficultyName)(n),s,a,l].join("\t"))}}(n,e,u))),a}))}},6162:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.getGameRegionFromOrigin=n.isMaimaiNetOrigin=n.MAIMAI_NET_ORIGINS=void 0,n.MAIMAI_NET_ORIGINS=["https://maimaidx.jp","https://maimaidx-eng.com"],n.isMaimaiNetOrigin=function(e){return"https://maimaidx.jp"===e||"https://maimaidx-eng.com"===e},n.getGameRegionFromOrigin=function(e){return"https://maimaidx.jp"===e?"https://maimaidx.jp":"https://maimaidx-eng.com"}},134:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.getVersionName=n.validateGameVersion=n.RATING_CALCULATOR_SUPPORTED_VERSIONS=n.LATEST_VERSION=void 0;const t=["maimai","maimai PLUS","GreeN","GreeN PLUS","ORANGE","ORANGE PLUS","PiNK","PiNK PLUS","MURASAKi","MURASAKi PLUS","MiLK","MiLK PLUS","FiNALE","maimaiでらっくす","maimaiでらっくす PLUS","Splash","Splash PLUS","UNiVERSE","UNiVERSE PLUS","FESTiVAL","FESTiVAL PLUS"];n.LATEST_VERSION=20,n.RATING_CALCULATOR_SUPPORTED_VERSIONS=[18,19,20],n.validateGameVersion=function(e,t,o=n.LATEST_VERSION){const r="string"==typeof e?parseInt(e):e;return!e||isNaN(r)?o:r>=t&&r<=o?r:o},n.getVersionName=function(e){return t[e]}},8080:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.getInitialLanguage=n.saveLanguage=n.SUPPORTED_LANGUAGES=void 0,n.SUPPORTED_LANGUAGES=["en_US","zh_TW","ko_KR"];const t="MaiToolsLang";n.saveLanguage=function(e){window.localStorage.setItem(t,e)},n.getInitialLanguage=function(){const e=new URLSearchParams(location.search).get("hl");if(e)return e.startsWith("zh")?"zh_TW":e.startsWith("ko")?"ko_KR":"en_US";return function(){switch(window.localStorage.getItem(t)){case"en_US":return"en_US";case"zh_TW":return"zh_TW";case"ko_KR":return"ko_KR"}return null}()||(navigator.language.startsWith("zh")?"zh_TW":navigator.language.startsWith("ko")?"ko_KR":"en_US")}},9268:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.getDisplayLv=n.getDefaultLevel=n.getOfficialLevel=void 0,n.getOfficialLevel=function(e){const n=Math.floor(e);return e-n>.6?n+"+":n.toString()},n.getDefaultLevel=function(e){if(!e)return 1;const n=parseInt(e);return e.endsWith("+")?n+.7:n},n.getDisplayLv=function(e){if(!(e<0))return e.toFixed(1);const n=Math.abs(e),t=Math.floor(n);return t===n?t.toFixed(0):t.toFixed(0)+"+"}},6685:function(e,n,t){var o=this&&this.__awaiter||function(e,n,t,o){return new(t||(t=Promise))((function(r,i){function c(e){try{a(o.next(e))}catch(e){i(e)}}function s(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,s)}a((o=o.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.writeMagicToCache=n.readMagicFromCache=n.fetchMagic=void 0;const r=t(134),i={13:null,18:"aHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9teWppYW4vZWU1NjlkNzRmNDIyZDRlMjU1MDY1ZDhiMDJlYTI5NGEvcmF3LzkzMmZiMDNhMzgxMjEyMTAwODBkNmY1Mzc5MTNhMDg0MjQ3ZTUzMWMvbWFpZHhfaW5fbHZfdW5pdmVyc2VwbHVzLmpz",19:"aHR0cHM6Ly9zZ2ltZXJhLmdpdGh1Yi5pby9tYWlfUmF0aW5nQW5hbHl6ZXIvc2NyaXB0c19tYWltYWkvbWFpZHhfaW5fbHZfZmVzdGl2YWwuanM=",20:"aHR0cHM6Ly9zZ2ltZXJhLmdpdGh1Yi5pby9tYWlfUmF0aW5nQW5hbHl6ZXIvc2NyaXB0c19tYWltYWkvbWFpZHhfaW5fbHZfZmVzdGl2YWxwbHVzLmpz"};function c(e){return"dxLv"+e}n.fetchMagic=function(e){return o(this,void 0,void 0,(function*(){const n=i[e]||i[18],t=yield fetch(atob(n));return t.ok?t.text():""}))},n.readMagicFromCache=function(e){const n=c(e),t=window.localStorage.getItem(n);if(console.log('Reading cache for "'+n+'" =>',t),!t)return null;const o=JSON.parse(t),i=new Date(o.date);if((new Date).valueOf()-i.valueOf()>864e5){console.warn('Cache for "'+n+'" is expired.');for(const e of r.RATING_CALCULATOR_SUPPORTED_VERSIONS)window.localStorage.removeItem(c(e));return null}return o.content},n.writeMagicToCache=function(e,n){const t=c(e);console.log('Updating cache for "'+t+'"');const o={date:new Date,content:n};window.localStorage.setItem(t,JSON.stringify(o))}},6689:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.getRemovedSongs=void 0,n.getRemovedSongs=function(e){return"https://maimaidx.jp"===e?["全世界共通リズム感テスト"]:"https://maimaidx-eng.com"===e?["コネクト","シュガーソングとビターステップ","Mr. Wonderland","ワンダーラスト","LOSER","U.S.A.","新宝島","アウトサイダー","ジャガーノート"]:[]}},4313:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.getMaiToolsBaseUrl=n.getScriptHost=void 0;const o=t(6162),r="https://myjian.github.io/mai-tools";n.getScriptHost=function(e){const n=Array.from(document.querySelectorAll("script"));for(;n.length;){const t=n.pop();if(t.src.includes(e)){const e=new URL(t.src),n=e.pathname;return e.origin+n.substring(0,n.lastIndexOf("/scripts"))}}return r},n.getMaiToolsBaseUrl=function(){return(0,o.isMaimaiNetOrigin)(window.location.origin)?r:window.location.pathname.startsWith("/mai-tools")?window.location.origin+"/mai-tools":window.location.origin}},472:function(e,n,t){var o=this&&this.__awaiter||function(e,n,t,o){return new(t||(t=Promise))((function(r,i){function c(e){try{a(o.next(e))}catch(e){i(e)}}function s(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,s)}a((o=o.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.isNiconicoLinkImg=n.isNicoNicoLink=n.getSongNickname=n.getSongIdx=n.normalizeSongName=n.RATING_TARGET_SONG_NAME_PREFIX=n.DX_SONG_NAME_SUFFIX=void 0;const r=t(6420);n.DX_SONG_NAME_SUFFIX=" [DX]",n.RATING_TARGET_SONG_NAME_PREFIX="▶ ",n.normalizeSongName=function(e){return"D✪N’T  ST✪P  R✪CKIN’"===e?"D✪N’T ST✪P R✪CKIN’":e.replace(/" \+ '/g,"").replace(/' \+ "/g,"")},n.getSongIdx=function(e){return e.getElementsByTagName("form")[0].elements.namedItem("idx").value},n.getSongNickname=function(e,t,o){return"Link"===e&&(e=t.includes("niconico")?"Link(nico)":"Link(org)"),1===o?e+n.DX_SONG_NAME_SUFFIX:e};let i={};n.isNicoNicoLink=function(e){return o(this,void 0,void 0,(function*(){if(i.nico===e)return!0;if(i.original===e)return!1;const n=(yield(0,r.fetchSongDetailPage)(e)).body.querySelector(".m_10.m_t_5.t_r.f_12").innerText.includes("niconico");return console.log("Link (idx: "+e+") "+(n?"is niconico":"is original")),n?i.nico=e:i.original=e,n}))},n.isNiconicoLinkImg=function(e){return e.includes("e90f79d9dcff84df")}},87:function(e,n,t){var o=this&&this.__awaiter||function(e,n,t,o){return new(t||(t=Promise))((function(r,i){function c(e){try{a(o.next(e))}catch(e){i(e)}}function s(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,s)}a((o=o.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSongsByVersion=n.filterSongsByVersion=n.getSongProperties=n.buildSongPropsMap=void 0;const r=t(8642),i=t(134),c=t(6689),s=t(4313),a=t(472),l=/\bdx\s*:\s*([0-9]+)/,u=/\blv\s*:\s*(\[.+?\])/,f=/\bv\s*:\s*(-?[0-9]+)/,d=/\bn\s*:\s*["'](.+?)['"]\s*[,\}]/,g=/\bnn\s*:\s*["'](.+?)['"]\s*[,\}]/;function h(e){return o(this,void 0,void 0,(function*(){let n="";try{const t=yield fetch(e);return t.ok?(n=yield t.text(),JSON.parse(n)):{}}catch(e){console.warn(e),console.warn("Failed to parse JSON: "+n)}return{}}))}function m(e){const n=e.match(l),t=e.match(u),o=e.match(f),i=e.match(d),c=e.match(g);if(n&&t&&o&&i){let e=JSON.parse(t[1]);if(e.length>r.DIFFICULTIES.length){const n=e.pop();e[r.DIFFICULTIES.length-1]=n}return{dx:parseInt(n[1]),lv:e,debut:Math.abs(parseInt(o[1])),name:(0,a.normalizeSongName)(i[1]),nickname:c&&c[1]}}}function S(e,n){if(!e.has(n.name))return!1;const t=e.get(n.name),o=t.findIndex((e=>n.dx===e.dx));return!(o<0||t[o].nickname!=n.nickname||(t[o]=function(e,n){let t=e.lv;return n.lv instanceof Array&&(t=e.lv.map(((e,t)=>isNaN(n.lv[t])?e:n.lv[t]))),Object.assign(Object.assign(Object.assign({},e),n),{lv:t})}(t[o],n),0))}function p(e,n,t){S(e,n)||(n.debut||0===n.debut||(n.debut=t),e.has(n.name)||e.set(n.name,[]),e.get(n.name).push(n))}n.buildSongPropsMap=function(e,n,t){return o(this,void 0,void 0,(function*(){const r=t.split("\n"),a=new Map;for(const n of r){const t=m(n);t&&p(a,t,e)}const l=yield function(e){return o(this,void 0,void 0,(function*(){const n=(0,s.getMaiToolsBaseUrl)()+`/data/chart-levels/version${e}.json`,t=yield h(n),o=[];return["standard","dx"].forEach(((e,n)=>{if(t[e])for(const r of Object.keys(t[e]))o.push({name:r,dx:n,lv:t[e][r]})})),o}))}(e);console.log("chartLevelOverrides",l);for(const n of l)p(a,n,e);if("https://maimaidx-eng.com"===n){const e=yield function(){return o(this,void 0,void 0,(function*(){const e=(0,s.getMaiToolsBaseUrl)()+"/data/song-info/intl.json",n=yield h(e),t=[];return["standard","dx"].forEach(((e,o)=>{if(n[e])for(const r of Object.keys(n[e])){const i=n[e][r],c=parseInt(r);for(const e of i)t.push({name:e,dx:o,debut:c})}})),t}))}();console.log("debutVersionOverrides",e);for(const n of e)S(a,n)}const u=(0,c.getRemovedSongs)(n);for(const e of u)a.delete(e);return a.forEach((e=>{for(const n of e)console.assert(null!=n.debut),console.assert(n.debut>=0&&n.debut<=i.LATEST_VERSION),console.assert(n.lv.length>=4)})),a}))},n.getSongProperties=function(e,n,t,o){let r=e.get(n);if(r&&r.length>0){if(r.length>1&&(r=r.filter((e=>e.dx===o)),r.length>1)){const e=(0,a.getSongNickname)(n,t,o);r=r.filter((n=>n.nickname===e))}if(r.length)return r.length>1&&(console.warn(`Found multiple song properties for ${n} ${o}`),console.warn(r)),r[0]}console.warn(`Could not find song properties for ${n} ${o}`)},n.filterSongsByVersion=function(e,n,t,o){const r=[];for(const i of e){const{dx:e,name:c,nickname:s}=i;let a=n.get(c);a&&a.length>0&&(a.length>1&&(a=a.filter((n=>n.dx===e)),a.length>1&&(a=a.filter((e=>e.nickname===s)))),a.length)?(a.length>1&&(console.warn(`Found multiple song properties for ${c} ${e?"[DX]":""}`),console.warn(a)),(0===o&&a[0].debut===t||1===o&&a[0].debut<t)&&r.push(a[0])):console.warn(`Could not find song properties for ${c} ${e?"[DX]":""}`)}return r},n.getSongsByVersion=function(e,n){const t=[];return e.forEach((e=>e.forEach((e=>{e.debut===n&&t.push(e)})))),t}},6420:function(e,n,t){var o=this&&this.__awaiter||function(e,n,t,o){return new(t||(t=Promise))((function(r,i){function c(e){try{a(o.next(e))}catch(e){i(e)}}function s(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,s)}a((o=o.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getPostMessageFunc=n.fetchSongDetailPage=n.fetchNewSongs=n.fetchAllSongs=n.fetchGameVersion=n.fetchPage=n.handleError=n.ALLOWED_ORIGINS=void 0;const r=t(9099),i=t(2347),c=t(6510),s=t(472);function a(e){return o(this,void 0,void 0,(function*(){const n=yield fetch(e),t=yield n.text();return(new DOMParser).parseFromString(t,"text/html")}))}function l(e){return o(this,void 0,void 0,(function*(){const n=Array.from(e.querySelectorAll(".w_450.m_15.f_0")),t=[];for(const e of n){const n=(0,s.getSongIdx)(e),o=(0,i.getSongName)(e),c=(0,r.getChartType)(e);let a;"Link"===o&&(a=(yield(0,s.isNicoNicoLink)(n))?"Link(nico)":"Link(org)"),t.push({dx:c,name:o,nickname:a})}return t}))}n.ALLOWED_ORIGINS=["https://cdpn.io","https://myjian.github.io","http://localhost:8080"],n.handleError=function(e){alert(e)},n.fetchPage=a,n.fetchGameVersion=function e(n){return o(this,void 0,void 0,(function*(){const t=n.querySelector("select[name=version] option:last-of-type");return t?parseInt(t.value):e(n=yield a("/maimai-mobile/record/musicVersion/"))}))},n.fetchAllSongs=function(e){return o(this,void 0,void 0,(function*(){if(!e){const n=c.SELF_SCORE_URLS.get(1);e=yield a(n)}return yield l(e)}))},n.fetchNewSongs=function(e){return o(this,void 0,void 0,(function*(){const n=yield a(`/maimai-mobile/record/musicVersion/search/?version=${e}&diff=0`);return yield l(n)}))},n.fetchSongDetailPage=function(e){return o(this,void 0,void 0,(function*(){return a("/maimai-mobile/record/musicDetail/?"+new URLSearchParams({idx:e}).toString())}))},n.getPostMessageFunc=function(e,n){return(t,o)=>{const r={action:t,payload:o};e.postMessage(r,n)}}},3153:function(e,n,t){var o=this&&this.__awaiter||function(e,n,t,o){return new(t||(t=Promise))((function(r,i){function c(e){try{a(o.next(e))}catch(e){i(e)}}function s(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,s)}a((o=o.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0});const r=t(9099),i=t(8642),c=t(2347),s=t(6510),a=t(6162),l=t(8080),u=t(9268),f=t(6685),d=t(472),g=t(87),h=t(6420);!function(e){const n={en_US:{None:"-- Choose Sort Option --",RankAsc:"Rank (low → high)",RankDes:"Rank (high → low)",ApFcAsc:"AP/FC (FC → AP+)",ApFcDes:"AP/FC (AP+ → FC)",SyncAsc:"Sync (FS → FDX+)",SyncDes:"Sync (FDX+ → FS)",VsResultAsc:"VS Result (Lose → Win)",VsResultDes:"VS Result (Win → Lose)",LvAsc:"Level (low → high)",LvDes:"Level (high → low)",InLvAsc:"Internal Level (low → high)",InLvDes:"Internal Level (high → low)",DxStarDes:"DX-Star (7 → none)",DxStarAsc:"DX-Star (none → 7)"},zh_TW:{None:"-- 選擇排序方式 --",RankAsc:"達成率 (由低至高)",RankDes:"達成率 (由高至低)",ApFcAsc:"AP/FC (由 FC 到 AP+)",ApFcDes:"AP/FC (由 AP+ 到 FC)",SyncAsc:"Sync (由 FS 到 FDX+)",SyncDes:"Sync (由 FDX+ 到 FS)",VsResultAsc:"對戰結果 (由敗北到勝利)",VsResultDes:"對戰結果 (由勝利到敗北)",LvAsc:"譜面等級 (由低至高)",LvDes:"譜面等級 (由高至低)",InLvAsc:"內部譜面等級 (由低至高)",InLvDes:"內部譜面等級 (由高至低)",DxStarDes:"DX-Star (7 星至無星)",DxStarAsc:"DX-Star (無星至 7 星)"},ko_KR:{None:"-- 정렬 순서를 선택해주세요 --",RankAsc:"정확도 오름차순 (낮음 → 높음)",RankDes:"정확도 내림차순 (높음 → 낮음)",ApFcAsc:"AP/FC 오름차순 (FC → AP+)",ApFcDes:"AP/FC 내림차순 (AP+ → FC)",SyncAsc:"Sync 오름차순 (FS → FDX+)",SyncDes:"Sync 내림차순 (FDX+ → FS)",VsResultAsc:"VS 결과 오름차순 (Lose → Win)",VsResultDes:"VS 결과 내림차순 (Win → Lose)",LvAsc:"난이도 오름차순 (낮음 → 높음)",LvDes:"난이도 내림차순 (높음 → 낮음)",InLvAsc:"난이도 상수 오름차순 (낮음 → 높음)",InLvDes:"난이도 상수 내림차순 (높음 → 낮음)",DxStarDes:"DX-Star 내림차순 (7 → none)",DxStarAsc:"DX-Star 오름차순 (none → 7)"}}[(0,l.getInitialLanguage)()],t=["1","2","3","4","5","6","7","7+","8","8+","9","9+","10","10+","11","11+","12","12+","13","13+","14","14+","15"],m=["SSS+","SSS","SS+","SS","S+","S","AAA","AA","A","BBB","BB","B","C","D",null],S=["AP+","AP","FC+","FC",null],p=["FDX+","FDX","FS+","FS",null],_=["WIN","DRAW","LOSE"],v=[null,"✦ - 85%","✦✦ - 90%","✦✦✦ - 93%","✦✦✦✦ - 95%","✦✦✦✦✦ - 97%","✦6 - 99%","✦7 - 100%"],y=.02,L=location.pathname.includes("battleStart"),A=location.search.includes("scoreType=1"),N={};function D(e){const n=e-Math.floor(e);return n>.95?1:n>.65&&n<.69?.7:0}function b(e){const n=D(e);return n?n<1?"UNKNOWN LEVEL "+Math.floor(e)+"+":"UNKNOWN LEVEL "+e.toFixed(0):"INTERNAL LEVEL "+e.toFixed(1)}function E(e,n){const t=new Map;n&&e.reverse();for(const n of e)t.set(n,[]);return n&&e.reverse(),t}function I(n,t,o){let r=[];return n.forEach(((n,i)=>{if(n.length){const c=e.createElement("div");c.className="screw_block m_15 f_15 p_s",c.innerText=function(e,n,t,o){let r=3===e?"":"◖";switch(e){case 1:r+="LEVEL "+n;break;case 2:r+=n?"RANK "+n:"NO RANK";break;default:r+=n||" ― "}return 3!==e&&(r+="◗"),r+"　　　"+t+"/"+o}(t,i,n.length,o),r.push(c),r=r.concat(n)}})),r}function x(e){return e.getElementsByClassName("music_lv_block")[0]}function T(e,n="lv"){var t;return null===(t=x(e))||void 0===t?void 0:t.dataset[n]}function M(e,n){const t=x(e);if(!t.dataset.inlv){const e=D(n);t.dataset.inlv=n.toFixed(2);const o=(e?"*":"")+n.toFixed(1);o.length>4&&(t.classList.remove("f_14"),t.classList.add("f_13")),t.innerText=o}}function R(e,n,t){let o=0;return t&&(o=t.lv[n],"number"!=typeof o?o=0:o<0&&(o=Math.abs(o)-y)),o||(0,u.getDefaultLevel)(T(e))-y}function F(e,n){const t=T(e,"inlv");if(t)return parseFloat(t);const o=(0,c.getSongName)(e),s=(0,r.getChartType)(e),a=i.DIFFICULTIES.indexOf((0,c.getChartDifficulty)(e));let l;if("Link"===o){const t=L?null:(0,d.getSongIdx)(e);N.nicoLinkIdx===t?l=(0,g.getSongProperties)(n,o,"niconico",s):N.originalLinkIdx===t&&(l=(0,g.getSongProperties)(n,o,"",s)),console.log(l)}else l=(0,g.getSongProperties)(n,o,"",s);return R(e,a,l)}function w(e,n){const t=F(e,N.songProps),o=F(n,N.songProps);return t<o?-1:o<t?1:0}function k(e,n){const o=E(t,n);return e.forEach((e=>{const n=T(e);o.get(n).push(e)})),N.songProps&&o.forEach((e=>{e.sort(w),n&&e.reverse()})),I(o,1,e.length)}function P(e){const n=L?e.querySelector("tr:last-child td:last-child img:last-child"):e.children[0].querySelector("img.f_r:not(.music_kind_icon):last-of-type");if(!n)return null;const t=new URL(n.src).pathname,o=t.substring(t.lastIndexOf("_")+1,t.lastIndexOf("."));return"back"===o?null:o.replace("p","+").toUpperCase()}function O(e){const n=L?e.querySelector("tr:first-child td:last-child"):e.querySelector(".music_score_block.w_120");return n?parseFloat(n.innerText):n}function C(e,n){const t=O(e),o=O(n);return null===t&&null===o?0:null===o?-1:null===t?1:t>o?-1:t<o?1:0}function U(e,n){const t=E(m,n);return e.forEach((e=>{const n=P(e);try{t.get(n).push(e)}catch(o){console.warn(n),t.get(null).push(e)}})),A||t.forEach(((e,t)=>{e.sort(C),null!==t&&n&&e.reverse()})),I(t,2,e.length)}function V(e){const n=L?e.querySelector("tr:last-child td:last-child img:nth-child(2)"):e.children[0].querySelector("img.f_r:nth-last-of-type(2)");if(!n)return null;const t=n.src.replace(/\?ver=.*$/,""),o=t.lastIndexOf("_"),r=t.lastIndexOf("."),i=t.substring(o+1,r);return"back"===i?null:i.replace("ap","AP").replace("p","+").toUpperCase()}function $(e,n){const t=E(S,n);return e.forEach((e=>{const n=V(e);t.get(n).push(e)})),I(t,0,e.length)}function W(e){const n=L?e.querySelector("tr:last-child td:last-child img:first-child"):e.children[0].querySelector("img.f_r:nth-last-of-type(3)");if(!n)return null;const t=n.src.replace(/\?ver=.*$/,""),o=t.lastIndexOf("_"),r=t.lastIndexOf("."),i=t.substring(o+1,r);return"back"===i?null:i.replace("sd","DX").replace("p","+").toUpperCase()}function G(e,n){const t=E(p,n);return e.forEach((e=>{const n=W(e);t.get(n).push(e)})),I(t,0,e.length)}function q(e,n){const t=E(_,n);return e.forEach((e=>{const n=function(e){const n=e.querySelector("tr:first-child td:nth-child(2) img").src.replace(/\?ver=.*$/,""),t=n.lastIndexOf("_"),o=n.lastIndexOf(".");return n.substring(t+1,o).toUpperCase()}(e);t.get(n).push(e)})),I(t,0,e.length)}function H(e){if(L){const n=e.querySelector("tr:first-child td:last-child img");if(!n)return null;const t=new URL(n.src).pathname,o=t.substring(t.lastIndexOf("_")+1,t.lastIndexOf("."));try{const e=parseInt(o);return(e<0||e>=v.length)&&console.warn("invalid dx star "+o),v[e]}catch(e){console.warn("invalid dx star "+o)}return null}if(e.dataset.dxStar)return"null"===e.dataset.dxStar?null:e.dataset.dxStar;const n=function(e){const n=e.querySelectorAll(".music_score_block");if(2!==n.length)return null;const t=n[1].childNodes,o=t[t.length-1];if(!o.wholeText)return null;const r=o.wholeText.split("/");if(2!==r.length)return null;try{const e=parseInt(r[0].replace(",","").trim()),n=parseInt(r[1].replace(",","").trim()),t=e/n;if(e===n)return v[7];if(t>=.99)return v[6];if(t>=.97)return v[5];if(t>=.95)return v[4];if(t>=.93)return v[3];if(t>=.9)return v[2];if(t>=.85)return v[1]}catch(e){console.warn(e)}return null}(e);return e.dataset.dxStar=n,n}function X(e,n){const t=E(v,n);return e.forEach((e=>{const n=H(e);t.get(n).push(e)})),I(t,3,e.length)}function j(e,n){const t=new Map,o=[];for(const n of Array.from(e)){const e=F(n,N.songProps);t.set(e,!0),o.push(e)}const r=Array.from(t.keys()).sort(((e,n)=>e>n?-1:e<n?1:0));n&&r.reverse();const i=new Map;return r.forEach((e=>{i.set(b(e),[])})),Array.from(e).forEach(((e,n)=>{i.get(b(o[n])).push(e)})),I(i,0,e.length)}function z(){return e.body.querySelectorAll(".main_wrapper.t_c .w_450.m_15.f_0")}function B(t,o){const r=n[t];let i=e.getElementsByClassName("option_"+t)[0];return i||(i=e.createElement("option"),i.className="option_"+t,i.innerText=r,i.value=t),o?i.classList.add("d_n"):i.classList.remove("d_n"),i}L?function(){var n,t;o(this,void 0,void 0,(function*(){const o=yield(0,h.fetchPage)(s.SELF_SCORE_URLS.get(4)),r=null===(n=o.querySelector(".music_scorelist_table"))||void 0===n?void 0:n.parentElement;if(!r)return void console.warn("could not find summary table");A||null===(t=r.querySelector("tr:last-child"))||void 0===t||t.remove();const i=z(),c=i.length;setTimeout((function(){const e={};for(const n of m)e[n]=0;i.forEach((n=>{e[P(n)]++}));for(let n=1;n<9;n++)e[m[n]]+=e[m[n-1]];const n=r.querySelectorAll("tr:first-child .f_10");n[0].innerHTML=`${e.A}/${c}`,n[1].innerHTML=`${e.S}/${c}`,n[2].innerHTML=`${e["S+"]}/${c}`,n[3].innerHTML=`${e.SS}/${c}`,n[4].innerHTML=`${e["SS+"]}/${c}`,n[5].innerHTML=`${e.SSS}/${c}`,n[6].innerHTML=`${e["SSS+"]}/${c}`}),0),setTimeout((function(){const e={};for(const n of S)e[n]=0;i.forEach((n=>{e[V(n)]++}));for(let n=1;n<4;n++)e[S[n]]+=e[S[n-1]];const n=r.querySelectorAll("tr:nth-child(2) .f_10");n[0].innerHTML=`${e.FC}/${c}`,n[1].innerHTML=`${e["FC+"]}/${c}`,n[2].innerHTML=`${e.AP}/${c}`,n[3].innerHTML=`${e["AP+"]}/${c}`}),0),setTimeout((function(){const e={};for(const n of p)e[n]=0;i.forEach((n=>{e[W(n)]++}));for(let n=1;n<4;n++)e[p[n]]+=e[p[n-1]];const n=r.querySelectorAll("tr:nth-child(2) .f_10");n[4].innerHTML=`${e.FS}/${c}`,n[5].innerHTML=`${e["FS+"]}/${c}`,n[6].innerHTML=`${e.FDX}/${c}`,n[7].innerHTML=`${e["FDX+"]}/${c}`}),0),A&&setTimeout((function(){const e={};for(const n of v)e[n]=0;i.forEach((n=>{e[H(n)]++}));for(let n=v.length-2;n>=1;n--)e[v[n]]+=e[v[n+1]];const n=r.querySelectorAll("tr:last-child .f_10");n[0].innerHTML=`${e[v[1]]}/${c}`,n[1].innerHTML=`${e[v[2]]}/${c}`,n[2].innerHTML=`${e[v[3]]}/${c}`,n[3].innerHTML=`${e[v[4]]}/${c}`,n[4].innerHTML=`${e[v[5]]}/${c}`}),0),e.querySelector(".town_block + .see_through_block").insertAdjacentElement("afterend",r)}))}():e.querySelectorAll("div.w_450.m_15.p_r.f_0[id]").forEach((e=>{var n,t;e.style.removeProperty("display"),e.style.removeProperty("margin-top"),e.id.includes("sta_")?null===(n=e.querySelector(".music_kind_icon_dx"))||void 0===n||n.remove():null===(t=e.querySelector(".music_kind_icon_standard"))||void 0===t||t.remove();const o=e.querySelector("img:nth-child(2)");o.onclick=null,o.className="music_kind_icon"})),Array.from(e.getElementsByClassName("music_lv_block")).forEach((e=>{e.dataset.lv||(e.dataset.lv=e.innerText)}));const Z=e.body.querySelector(".main_wrapper.t_c .screw_block");Z&&(Z.insertAdjacentElement("beforebegin",function(){const n="scoreSortContainer";let t=e.getElementById(n);if(t)return t;t=e.createElement("div"),t.id=n,t.className="w_450 m_15";const o=e.createElement("select");return o.className="w_300 m_10",o.addEventListener("change",(n=>{!function(n){const t=z(),o=Array.from(e.body.querySelectorAll(".main_wrapper.t_c .screw_block"));let r=null;switch(n){case"RankDes":r=U(t,!1);break;case"RankAsc":r=U(t,!0);break;case"ApFcDes":r=$(t,!1);break;case"ApFcAsc":r=$(t,!0);break;case"SyncDes":r=G(t,!1);break;case"SyncAsc":r=G(t,!0);break;case"VsResultAsc":r=q(t,!0);break;case"VsResultDes":r=q(t,!1);break;case"LvDes":r=k(t,!0);break;case"LvAsc":r=k(t,!1);break;case"InLvDes":r=j(t,!1);break;case"InLvAsc":r=j(t,!0);break;case"DxStarAsc":r=X(t,!1);break;case"DxStarDes":r=X(t,!0);break;default:return}for(let e=1;e<o.length;e++)o[e].remove();const i=o[0];for(let e=r.length-1;e>=1;e--)i.insertAdjacentElement("afterend",r[e]);i.innerText=r[0].innerText}(n.target.value)})),o.append(B("None")),o.append(B("RankAsc")),o.append(B("RankDes")),o.append(B("ApFcAsc")),o.append(B("ApFcDes")),o.append(B("SyncAsc")),o.append(B("SyncDes")),L?(A&&(o.append(B("DxStarDes")),o.append(B("DxStarAsc"))),o.append(B("VsResultAsc")),o.append(B("VsResultDes"))):(o.append(B("DxStarDes")),o.append(B("DxStarAsc"))),o.append(B("LvAsc")),o.append(B("LvDes")),o.append(B("InLvAsc",!0)),o.append(B("InLvDes",!0)),t.append(o),t}()),function(){o(this,void 0,void 0,(function*(){const n=yield(0,h.fetchGameVersion)(e.body),t=(0,a.getGameRegionFromOrigin)(window.location.origin),o=yield(0,g.buildSongPropsMap)(n,t,yield(0,f.fetchMagic)(n)),r=Array.from(z());for(const e of r){const n=(0,c.getSongName)(e);if("Link"===n){const t=i.DIFFICULTIES.indexOf((0,c.getChartDifficulty)(e));try{const r=(0,d.getSongIdx)(e);let i;(yield(0,d.isNicoNicoLink)(r))?(N.nicoLinkIdx=r,i=(0,g.getSongProperties)(o,n,"niconico",0)):(N.originalLinkIdx=r,i=(0,g.getSongProperties)(o,n,"",0)),M(e,R(e,t,i))}catch(n){M(e,R(e,t))}}else M(e,F(e,o))}console.log("enabling internal level sort"),B("InLvAsc",!1),B("InLvDes",!1),N.songProps=o}))}())}(document)}},n={};!function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o].call(i.exports,i,i.exports,t),i.exports}(3153)})();