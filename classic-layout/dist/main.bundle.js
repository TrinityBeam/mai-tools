!function(e){var t={};function a(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(n,s,function(t){return e[t]}.bind(null,s));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=5)}([function(e,t){e.exports=React},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.formatFloat=t.roundFloat=t.sum=void 0;t.sum=function(e){let t=0;for(const a of e)t+=a;return t},t.roundFloat=function(e,t,a){return Math[t](e/a)*a},t.formatFloat=function(e,t){return e?e.toFixed(t):"0"}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EMPTY_JUDGEMENT_OBJ=t.BREAK_BONUS_MULTIPLIER=t.BREAK_BASE_SCORE_MULTIPLIER=t.MAX_BREAK_POINTS=t.BREAK_BONUS_POINTS=t.REGULAR_BASE_SCORE_MULTIPLIER=t.BASE_SCORE_PER_TYPE=t.DX_NOTE_TYPES=void 0,t.DX_NOTE_TYPES=["tap","hold","slide","touch","break"],t.BASE_SCORE_PER_TYPE={tap:500,hold:1e3,touch:500,slide:1500,break:2500},t.REGULAR_BASE_SCORE_MULTIPLIER={cp:1,perfect:1,great:.8,good:.5,miss:0},t.BREAK_BONUS_POINTS=100,t.MAX_BREAK_POINTS=t.BASE_SCORE_PER_TYPE.break+t.BREAK_BONUS_POINTS,t.BREAK_BASE_SCORE_MULTIPLIER=new Map([[t.MAX_BREAK_POINTS,1],[2550,1],[2500,1],[2e3,.8],[1500,.6],[1250,.5],[1e3,.4],[0,0]]),t.BREAK_BONUS_MULTIPLIER=new Map([[t.MAX_BREAK_POINTS,1],[2550,.75],[2500,.5],[2e3,.4],[1500,.4],[1250,.4],[1e3,.3],[0,0]]),t.EMPTY_JUDGEMENT_OBJ={perfect:0,great:0,good:0,miss:0}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getFinaleRankTitle=t.getRankTitle=t.getRankByAchievement=t.getRankIndexByAchievement=t.getRankDefinitions=void 0;const n=[{th:100.5,factor:15,title:"SSS+"},{th:100,factor:14,title:"SSS"},{th:99.99,factor:13.5,title:"SS+"},{th:99.5,factor:13,title:"SS+"},{th:99,factor:12,title:"SS"},{th:98,factor:11,title:"S+"},{th:97,factor:10,title:"S"},{th:94,factor:9.4,title:"AAA"},{th:90,factor:9,title:"AA"},{th:80,factor:8,title:"A"},{th:75,factor:7.5,title:"BBB"},{th:70,factor:7,title:"BB"},{th:60,factor:6,title:"B"},{th:50,factor:5,title:"C"}],s=[{th:100.5,factor:14,title:"SSS+"},{th:100,factor:13.5,title:"SSS"},{th:99.5,factor:13.2,title:"SS+"},{th:99,factor:13,title:"SS"},{th:98,factor:12.7,title:"S+"},{th:97,factor:12.5,title:"S"},{th:94,factor:10.5,title:"AAA"},{th:90,factor:9.5,title:"AA"},{th:80,factor:8.5,title:"A"},{th:75,factor:7.5,title:"BBB"},{th:70,factor:7,title:"BB"},{th:60,factor:6,title:"B"},{th:50,factor:5,title:"C"}];function o(e){return e?s:n}function r(e,t){return o(t).findIndex(t=>e>=t.th)}function c(e,t){const a=r(e,t);return a<0?null:o(t)[a]}function l(e){const t=c(e,!0);return t?t.title:"C"}t.getRankDefinitions=o,t.getRankIndexByAchievement=r,t.getRankByAchievement=c,t.getRankTitle=l,t.getFinaleRankTitle=function(e){return l(e).replace("SSS+","SSS")}},function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.NoteJudgement=t.getLastColumnText=void 0;const s=n(a(0)),o=a(1);function r(e,t){return"string"==typeof e?e:t?o.formatFloat(e,4)+"%":e.toLocaleString("en")}t.getLastColumnText=r;class c extends s.default.PureComponent{render(){const{noteType:e,judgements:t,lastColumn:a,isDxMode:n}=this.props;if(!t)return null;const o=e.charAt(0).toUpperCase()+e.substring(1),c=a.isMax?"score maxScore":"score",l=function(e){const t=e.cp;return t?t+e.perfect:e.perfect}(t);return s.default.createElement("tr",{className:e+"NoteRow"},s.default.createElement("th",{className:"rowHead"},o),s.default.createElement("td",{className:"perfect"},l),s.default.createElement("td",{className:"great"},t.great),s.default.createElement("td",{className:"good"},t.good),s.default.createElement("td",{className:"miss"},t.miss),s.default.createElement("td",{className:c},r(a.score,n)))}}t.NoteJudgement=c},function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=n(a(0)),o=n(a(6)),r=a(7);o.default.render(s.default.createElement(r.RootComponent,null),document.getElementById("root"))},function(e,t){e.exports=ReactDOM},function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.RootComponent=void 0;const s=n(a(0)),o=a(8),r=a(25),c=a(22),l=a(23),i=a(9),u=a(24);function d(e,t){return t=t||2,e.toString().padStart(t,"0")}function f(e,t,a){const n=e.get(t);return n||(console.warn('URL does not contain "'+t+'", using default value "'+a+'"'),a)}function m(e,t){const a=f(e,"dt",t.date),n=f(e,"tk",t.track),s=f(e,"df",t.difficulty),r=f(e,"st",t.songTitle),c=f(e,"ac",t.achievement),l=f(e,"hs",t.highScore),i=f(e,"cb",t.combo),u=f(e,"nd",t.noteDetails);return{date:a,track:n,songTitle:r,difficulty:s,syncStatus:f(e,"sc",t.syncStatus),noteJudgements:o.parseJudgements(u),combo:i&&i.replace("/"," / "),highScore:"1"===l,achievement:parseFloat(c)}}class g extends s.default.PureComponent{constructor(e){super(e),this.fetchRankImage=e=>{console.log("fetchRankImage "+e),this.state.rankImg.set(e,null),this.sendMessageToOpener({action:"getRankImage",payload:e})},this.handleWindowMessage=e=>{if("https://maimaidx-eng.com"===e.origin||"https://maimaidx.jp"===e.origin)switch(e.data.action){case"songImage":this.setState({songImg:e.data.imgSrc});break;case"apFcImage":this.setState({apFcImg:URL.createObjectURL(e.data.img)});break;case"syncImage":this.setState({syncImg:URL.createObjectURL(e.data.img)});break;case"rankImage":this.setState(t=>{const a=t.rankImg.get(e.data.title);a&&URL.revokeObjectURL(a);const n=new Map(t.rankImg);return n.set(e.data.title,URL.createObjectURL(e.data.img)),{rankImg:n}});break;default:console.log(e.data)}},window.opener&&document.referrer&&(this.openerOrigin=new URL(document.referrer).origin);const t=new URLSearchParams(document.location.search),a={date:(n=new Date,n.getFullYear()+"-"+d(n.getMonth()+1)+"-"+d(n.getDate())+" "+d(n.getHours())+":"+d(n.getMinutes())),track:"TRACK "+(Math.floor(3*Math.random())+1),songTitle:"分からない",achievement:"95.3035%",highScore:Math.random()>.9?"1":"0",noteDetails:"654-96-31-28\n25-0-0-0\n78-0-0-1\n\n37-2-1-0"};var n;try{this.state=Object.assign(Object.assign({},m(t,a)),{rankImg:new Map})}catch(e){console.error(e.message),console.error(e.stack),this.state=Object.assign(Object.assign({},m(new URLSearchParams(""),a)),{rankImg:new Map,showError:!0})}}componentDidMount(){document.title=this.state.songTitle+" - maimai classic score layout",window.addEventListener("message",this.handleWindowMessage),this.sendMessageToOpener({action:"ready"})}render(){const{achievement:e,combo:t,date:a,difficulty:n,highScore:o,noteJudgements:d,songTitle:f,track:m,songImg:g,apFcImg:p,rankImg:h,syncImg:E,syncStatus:_,showError:S}=this.state;return s.default.createElement(s.default.Fragment,null,s.default.createElement("div",{className:"widthLimit"},s.default.createElement("div",{className:"container"},s.default.createElement(l.PageTitle,null),s.default.createElement(u.SectionSep,null),S?s.default.createElement("div",{className:"error"},"Failed to parse input. Please contact the developer!"):s.default.createElement(i.ScorePageContainer,{achievement:e,combo:t,date:a,difficulty:n,highScore:o,noteJudgements:d,songTitle:f,track:m,syncStatus:_,songImgSrc:g,apFcImg:p,rankImg:h,syncImg:E,fetchRankImage:this.fetchRankImage}),s.default.createElement(u.SectionSep,null),s.default.createElement(c.PageFooter,null))),s.default.createElement(r.CreditInfo,null))}sendMessageToOpener(e){this.openerOrigin&&(console.log("sending message to opener",e),window.opener.postMessage(e,this.openerOrigin))}}t.RootComponent=g},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.parseJudgements=void 0;const n={cp:0,perfect:0,great:0,good:0,miss:0};function s(e,t){const a=e.match(/\d+/g);if(!a)return t;if(a.length<4)throw new Error("Cannot parse note judgements");const n=a.map(e=>parseInt(e,10));return n.length>4?{cp:n[0],perfect:n[1],great:n[2],good:n[3],miss:n[4]}:{perfect:n[0],great:n[1],good:n[2],miss:n[3]}}t.parseJudgements=function(e){let t=e.split("_");if(1===t.length&&(t=e.split("\n")),t.length<4)throw new Error("Cannot parse note judgement lines");const a=new Map,o=s(t.pop(),n);a.set("break",o);const r=s(t.pop(),void 0);r&&a.set("touch",r);const c=s(t.pop(),n);a.set("slide",c);const l=s(t.pop(),n);a.set("hold",l);const i=s(t.pop(),n);return a.set("tap",i),a}},function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ScorePageContainer=void 0;const s=n(a(0)),o=a(10),r=a(14);class c extends s.default.PureComponent{static getDerivedStateFromProps(e){const t=o.calculateScoreInfo(e.noteJudgements,e.achievement),a=function(e){const t={perfect:0,great:0,good:0,miss:0};return e.forEach(e=>{Object.keys(e).forEach(a=>{let n=a;const s=e[n];"cp"===n&&(n="perfect"),t[n]+=s})}),t}(e.noteJudgements),n=function(e,t){return e.miss?null:0===t.get("AP+")?"AP+":e.good?"FC":e.great?"FC+":"AP"}(a,t.finaleBorder);return Object.assign(Object.assign({},t),{totalJudgements:a,apFcStatus:n})}render(){return s.default.createElement(r.ScorePage,Object.assign({},this.props,this.state))}}t.ScorePageContainer=c},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.calculateScoreInfo=void 0;const n=a(11),s=a(12),o=a(2),r=a(13),c=a(1);function l(e,t,a,n){if("AP+"===a)return e+t*o.BREAK_BONUS_POINTS-n;const s=e*a-n;return s<0?-1:c.roundFloat(s,"ceil",50)}t.calculateScoreInfo=function(e,t){let a=0,i=0;const u=new Map([["tap",{score:0,isMax:!1}],["hold",{score:0,isMax:!1}],["slide",{score:0,isMax:!1}],["touch",{score:0,isMax:!1}],["break",{score:0,isMax:!1}],["total",{score:0,isMax:!1}]]),d=new Map;e.forEach((e,t)=>{const n=o.BASE_SCORE_PER_TYPE[t],s=c.sum(Object.values(e))*n;if(a+=s,"break"!==t){let a=0;Object.keys(e).forEach(t=>{const s=t,r=e[s];a+=r*n*o.REGULAR_BASE_SCORE_MULTIPLIER[s]});const r=s-a;u.set(t,{score:a,isMax:0===r}),d.set(t,r),i+=a}});const f=a/100,m=t-i/f,g=o.BASE_SCORE_PER_TYPE.break/f,p=[],h=e.get("break");s.walkBreakDistributions(p,new Map,r.convertJudgementsToArray(h),m,g),console.log("valid break distributions",p);let E=p[0];E||(console.warn("Could not find a valid break distribution!"),console.warn("Please report the issue to the developer."),E=new Map([[o.MAX_BREAK_POINTS,h.cp||0],[2550,0],[2500,h.perfect],[2e3,0],[1500,0],[1250,h.great],[1e3,h.good],[0,h.miss]]));let _=0,S=0;E.forEach((e,t)=>{_+=e,S+=e*t}),u.set("break",{score:S,isMax:_===E.get(2600)});const M=i+S,v=a+o.BREAK_BONUS_POINTS*_;u.set("total",{score:M,isMax:M===v});const R=c.roundFloat(M/f,"floor",.01),N=c.roundFloat(v/f,"floor",.01);console.log("player score per note type",u);const P=new Map;P.set("tap",{score:c.roundFloat(u.get("tap").score/f,"round",1e-4),isMax:u.get("tap").isMax}),P.set("hold",{score:c.roundFloat(u.get("hold").score/f,"round",1e-4),isMax:u.get("hold").isMax}),P.set("slide",{score:c.roundFloat(u.get("slide").score/f,"round",1e-4),isMax:u.get("slide").isMax}),P.set("touch",{score:c.roundFloat(u.get("touch").score/f,"round",1e-4),isMax:u.get("touch").isMax}),P.set("break",{score:c.roundFloat(m,"round",1e-4),isMax:u.get("break").isMax}),P.set("total",{score:c.roundFloat(t,"round",1e-4),isMax:u.get("total").isMax});const I=n.calculateAchvLoss(e,E,f);console.log("achievement loss detail",I);const y=new Map([["S",l(a,_,.97,M)],["S+",l(a,_,.98,M)],["SS",l(a,_,.99,M)],["SS+",l(a,_,.995,M)],["SSS",l(a,_,1,M)],["AP+",l(a,_,"AP+",M)]]),A=new Map,b=500/f,x=1/_;return A.set("tap",b),A.set("hold",2*b),A.set("slide",3*b),A.set("touch",b),A.set("breakDx",5*b+x),A.set("break",5.2*b),{finaleAchievement:R,maxFinaleScore:N,breakDistribution:E,achvLossDetail:I,finaleBorder:y,pctPerNoteType:A,playerScorePerType:u,dxAchvPerType:P}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.calculateAchvLoss=void 0;const n=a(2),s=a(1);function o(){return Object.assign({total:0},n.EMPTY_JUDGEMENT_OBJ)}t.calculateAchvLoss=function(e,t,a){const r=o(),c=o(),l={dx:new Map,finale:new Map},i=s.sum(Object.values(e.get("break")));return e.forEach((e,s)=>{const u=n.BASE_SCORE_PER_TYPE[s],d=o(),f=o();if("break"===s)d.perfect=50*t.get(2550)+100*t.get(2500),d.great=600*t.get(2e3)+1100*t.get(1500)+1350*t.get(1250),d.good=1600*t.get(1e3),d.miss=2600*t.get(0),d.total=Object.values(d).reduce((e,t)=>e+t,0),f.perfect=(t.get(2550)*(1-n.BREAK_BONUS_MULTIPLIER.get(2550))+t.get(2500)*(1-n.BREAK_BONUS_MULTIPLIER.get(2500)))/i,f.great=(t.get(2e3)*(1-n.BREAK_BASE_SCORE_MULTIPLIER.get(2e3))+t.get(1500)*(1-n.BREAK_BASE_SCORE_MULTIPLIER.get(1500))+t.get(1250)*(1-n.BREAK_BASE_SCORE_MULTIPLIER.get(1250)))*u/a+(t.get(2e3)*(1-n.BREAK_BONUS_MULTIPLIER.get(2e3))+t.get(1500)*(1-n.BREAK_BONUS_MULTIPLIER.get(1500))+t.get(1250)*(1-n.BREAK_BONUS_MULTIPLIER.get(1250)))/i,f.good=t.get(1e3)*(1-n.BREAK_BASE_SCORE_MULTIPLIER.get(1e3))*u/a+t.get(1e3)*(1-n.BREAK_BONUS_MULTIPLIER.get(1e3))/i,f.miss=t.get(0)*u/a+t.get(0)/i,f.total=Object.values(f).reduce((e,t)=>e+t,0);else{d.perfect=0,d.great=Math.round(e.great*u*(1-n.REGULAR_BASE_SCORE_MULTIPLIER.great)),d.good=Math.round(e.good*u*(1-n.REGULAR_BASE_SCORE_MULTIPLIER.good)),d.miss=e.miss*u,d.total=Object.values(d).reduce((e,t)=>e+t,0);for(const[e,t]of Object.entries(d))f[e]=t/a}for(const[e,t]of Object.entries(d))c[e]+=t;for(const[e,t]of Object.entries(f))r[e]+=t;l.finale.set(s,d),l.dx.set(s,f)}),l.finale.set("total",c),l.dx.set("total",r),l}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.walkBreakDistributions=void 0;const n=a(2);t.walkBreakDistributions=function e(t,a,s,o,r){let c=s[0],l=!1,i=0;switch(s.length){case 5:return a.set(n.MAX_BREAK_POINTS,c),e(t,a,s.slice(1),o,r);case 4:let u=0,d=c;if(a.has(n.MAX_BREAK_POINTS)){const e=a.get(n.MAX_BREAK_POINTS);c+=e,u=e,d=e}for(let f=d;f>=u;f--){a.set(n.MAX_BREAK_POINTS,f);for(let n=c-f;n>=0;n--){a.set(2550,n),a.set(2500,c-f-n);const u=e(t,a,s.slice(1),o,r);if(l||(i=u,l=!0),u<o)break}}return i;case 3:for(let n=c;n>=0;n--){a.set(2e3,n);for(let u=c-n;u>=0;u--){a.set(1500,u),a.set(1250,c-n-u);const d=e(t,a,s.slice(1),o,r);if(l||(i=d,l=!0),d<o)break}}return i;case 2:return a.set(1e3,c),e(t,a,s.slice(1),o,r);case 1:return a.set(0,c),e(t,a,s.slice(1),o,r);case 0:let f=0,m=0,g=0;return a.forEach((e,t)=>{f+=e,g+=e*n.BREAK_BASE_SCORE_MULTIPLIER.get(t)*r,m+=e*n.BREAK_BONUS_MULTIPLIER.get(t)}),g+=m/f,o-=g,Math.abs(o)<1e-4&&t.push(new Map(a)),g;default:throw new Error("unreachable")}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.convertJudgementsToArray=void 0,t.convertJudgementsToArray=function(e){return"number"==typeof e.cp?[e.cp,e.perfect,e.great,e.good,e.miss]:[e.perfect,e.great,e.good,e.miss]}},function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ScorePage=void 0;const s=n(a(0)),o=a(1),r=a(3),c=a(15),l=a(16),i=a(17),u=a(20),d=a(21);function f(e,t){return t?"-"+o.formatFloat(e,t)+"%":"-"+e.toLocaleString("en")}class m extends s.default.PureComponent{constructor(){super(...arguments),this.state={isDxMode:!1,displayMode:"NORMAL"},this.toggleDxMode=()=>{this.setState(e=>{const t=!e.isDxMode,{displayMode:a}=e;return{isDxMode:t,displayNoteJudgements:this.getNoteJudgementLoss(t,a),displayScorePerType:this.getDisplayScorePerType(t,a)}})},this.toggleDisplayMode=()=>{this.setState(e=>{const t=function(e){switch(e){case"NORMAL":return"DETAIL";case"DETAIL":return"LOSS";default:return"NORMAL"}}(e.displayMode),{isDxMode:a}=e;return{displayMode:t,displayNoteJudgements:this.getNoteJudgementLoss(a,t),displayScorePerType:this.getDisplayScorePerType(a,t)}})}}render(){const{achievement:e,apFcImg:t,rankImg:a,syncImg:n,highScore:o,date:r,songTitle:f,track:m,difficulty:g,songImgSrc:p,noteJudgements:h,combo:E,syncStatus:_,apFcStatus:S,finaleAchievement:M,maxFinaleScore:v,breakDistribution:R,totalJudgements:N,playerScorePerType:P}=this.props,{isDxMode:I,displayMode:y,displayScorePerType:A,displayNoteJudgements:b}=this.state;return s.default.createElement("div",{className:"songScoreContainer"},s.default.createElement(l.DateAndPlace,{date:r,isDxMode:I,toggleDxMode:this.toggleDxMode}),s.default.createElement("div",{className:"songScoreBody"},s.default.createElement("hr",{className:"trackTopLine"}),s.default.createElement(d.SongInfo,{songTitle:f,track:m,difficulty:g}),s.default.createElement(u.SongImg,{imgSrc:p}),s.default.createElement(c.AchievementInfo,{apFcStatus:S,apFcImg:t,rankImgMap:a,syncStatus:_,syncImg:n,isDxMode:I,isHighScore:o,dxAchv:e,finaleAchv:M,maxFinaleAchv:v,showMaxAchv:"NORMAL"!==y,toggleDisplayMode:this.toggleDisplayMode,fetchRankImage:this.props.fetchRankImage}),s.default.createElement(i.JudgementContainer,{noteJudgements:b||h,breakDistribution:R,totalJudgements:b?b.get("total"):N,scorePerType:A||P,nextRank:this.getNextRankEntry(I),combo:E,isDxMode:I,displayMode:y})))}getNextRankEntry(e){const t=e?this.props.achievement:this.props.finaleAchievement;if(e){if(101===t)return;if(t>=100.5)return{title:"AP+",diff:101-t};const e=r.getRankDefinitions(!0)[r.getRankIndexByAchievement(t,!0)-1];return{title:e.title,diff:e.th-t}}let a;return this.props.finaleBorder.forEach((e,t)=>{e>0&&!a&&(a={title:t,diff:e})}),a}getNoteJudgementLoss(e,t){if("LOSS"===t){const t=e?this.props.achvLossDetail.dx:this.props.achvLossDetail.finale,a=e?2:0,n=new Map;return t.forEach((e,t)=>{n.set(t,{perfect:f(e.perfect,a),great:f(e.great,a),good:f(e.good,a),miss:f(e.miss,a)})}),n}}getDisplayScorePerType(e,t){const{achvLossDetail:a}=this.props,n=e?a.dx:a.finale;if("LOSS"===t){const t=e?4:0,a=new Map;return n.forEach((e,n)=>{const s=0===e.total,o=f(e.total,t);a.set(n,{isMax:s,score:o})}),a}return e?this.props.dxAchvPerType:this.props.playerScorePerType}}t.ScorePage=m},function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AchievementInfo=void 0;const s=n(a(0)),o=a(3);function r(e,t,a,n){return t?o.getRankTitle(a):"AP+"===n?"SSS+":o.getFinaleRankTitle(e)}function c(e){return e?"FC+"===e?"apfc fcplus":e.includes("AP")?"apfc ap":"apfc":"apfc"}class l extends s.default.PureComponent{static getDerivedStateFromProps(e){const{dxAchv:t,apFcStatus:a,finaleAchv:n,isDxMode:s}=e;return{rankTitle:r(n,s,t,a)}}componentDidMount(){this.fetchRankImage()}componentDidUpdate(){this.fetchRankImage()}render(){const{apFcStatus:e,apFcImg:t,rankImgMap:a,isHighScore:n,syncStatus:o,syncImg:r,maxFinaleAchv:l,dxAchv:i,finaleAchv:u,isDxMode:d,toggleDisplayMode:f,showMaxAchv:m}=this.props,{rankTitle:g}=this.state,p=a.get(g),h=p?s.default.createElement("img",{className:"rankImg",src:p,alt:g}):g,E=t?s.default.createElement("img",{className:"apFcImg",src:t,alt:e}):e,_=r?s.default.createElement("img",{className:"syncImg",src:r,alt:o}):this.getSyncStatusText(o,d),S=d?i.toFixed(4):u.toFixed(2),M=d?101..toFixed(4):l.toFixed(2);return s.default.createElement("div",{className:"achievementInfo"},s.default.createElement("div",{className:"achvInfoSpace"}),s.default.createElement("div",{className:"rank"},h),s.default.createElement("div",{className:c(e)},E),s.default.createElement("div",{className:"sync"},_),s.default.createElement("div",{className:"playerScore"},s.default.createElement("div",{className:"highScore"},n?"HIGH SCORE!!":" "),s.default.createElement("div",{className:"achievement",tabIndex:0,onClick:f},"達成率：",s.default.createElement("div",{className:"achvNum"+(m?" hasMaxAchv":"")},s.default.createElement("span",{className:"playerAchv"},S,"％"),m&&s.default.createElement("span",{className:"maxAchv"},M,"％")))))}getSyncStatusText(e,t){if(e&&!t)switch(e){case"FS":case"FS+":return"MAX FEVER";case"FDX":case"FDX+":return"100% SYNC"}return e}fetchRankImage(){const{rankImgMap:e,fetchRankImage:t}=this.props,{rankTitle:a}=this.state;e.has(a)||t(a)}}t.AchievementInfo=l},function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DateAndPlace=void 0;const s=n(a(0));class o extends s.default.PureComponent{render(){const{date:e,isDxMode:t}=this.props,a=t?"でらっくすちほー":"CAFE MiLK";return s.default.createElement("div",{className:"dateAndPlace"},s.default.createElement("div",{className:"date"},e),s.default.createElement("div",{className:"place",tabIndex:0,onClick:this.props.toggleDxMode},a))}}t.DateAndPlace=o},function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.JudgementContainer=void 0;const s=n(a(0)),o=a(18),r=a(19),c=a(4);class l extends s.default.PureComponent{render(){const{nextRank:e,noteJudgements:t,breakDistribution:a,totalJudgements:n,scorePerType:l,combo:i,isDxMode:u,displayMode:d}=this.props;return s.default.createElement("div",{className:"judgementContainer"},s.default.createElement("table",{className:"judgement"},s.default.createElement("tbody",null,s.default.createElement("tr",null,s.default.createElement("th",{className:"rowHead"}," "),s.default.createElement("th",{className:"perfect"},"Perfect"),s.default.createElement("th",{className:"great"},"Great"),s.default.createElement("th",{className:"good"},"Good"),s.default.createElement("th",{className:"miss"},"Miss"),s.default.createElement("th",{className:"score"},"Score")),s.default.createElement(c.NoteJudgement,{noteType:"total",judgements:n,lastColumn:l.get("total"),isDxMode:u}),s.default.createElement(r.NextRankInfo,{nextRank:e,showTitle:"NORMAL"!==d}),i&&s.default.createElement("tr",{className:"maxCombo"},s.default.createElement("th",{className:"noRightBorder",colSpan:4},"MAX COMBO"),s.default.createElement("td",{className:"noLeftBorder",colSpan:2},i)),s.default.createElement("tr",{className:"tableSeparator"},s.default.createElement("td",{colSpan:6})),s.default.createElement(c.NoteJudgement,{noteType:"tap",judgements:t.get("tap"),lastColumn:l.get("tap"),isDxMode:u}),s.default.createElement(c.NoteJudgement,{noteType:"hold",judgements:t.get("hold"),lastColumn:l.get("hold"),isDxMode:u}),s.default.createElement(c.NoteJudgement,{noteType:"slide",judgements:t.get("slide"),lastColumn:l.get("slide"),isDxMode:u}),s.default.createElement(c.NoteJudgement,{noteType:"touch",judgements:t.get("touch"),lastColumn:l.get("touch"),isDxMode:u}),s.default.createElement(o.BreakNoteJudgement,{judgements:t.get("break"),distribution:a,lastColumn:l.get("break"),isDxMode:u,displayMode:d}))))}}t.JudgementContainer=l},function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.BreakNoteJudgement=void 0;const s=n(a(0)),o=a(4);class r extends s.default.PureComponent{render(){const{judgements:e,distribution:t,lastColumn:a,isDxMode:n,displayMode:r}=this.props,c=a.isMax?"score maxScore":"score";return"DETAIL"===r?s.default.createElement("tr",{className:"breakNoteRow"},s.default.createElement("th",{className:"rowHead"},"Break"),s.default.createElement("td",{colSpan:3,className:"noRightBorder"},s.default.createElement("div",{className:"breakDistribution"},s.default.createElement("span",{className:"perfect"},t.get(2600)),s.default.createElement("span",{className:"perfect"},t.get(2550)),s.default.createElement("span",{className:"perfect"},t.get(2500)),s.default.createElement("span",{className:"great"},t.get(2e3)),s.default.createElement("span",{className:"great"},t.get(1500)),s.default.createElement("span",{className:"great"},t.get(1250)),s.default.createElement("span",{className:"good"},t.get(1e3)))),s.default.createElement("td",{className:"noLeftBorder"},s.default.createElement("div",{className:"miss missWithBefore"},t.get(0))),s.default.createElement("td",{className:c},o.getLastColumnText(a.score,n))):s.default.createElement(o.NoteJudgement,{noteType:"break",judgements:e,lastColumn:a,isDxMode:n})}}t.BreakNoteJudgement=r},function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.NextRankInfo=void 0;const s=n(a(0));class o extends s.default.PureComponent{constructor(){super(...arguments),this.state={showTitle:!1}}render(){const{nextRank:e,showTitle:t}=this.props,a=t&&e?e.title:"",n=this.getNextRankDiff();return s.default.createElement("tr",{className:"nextRank"},s.default.createElement("th",{className:"noRightBorder",colSpan:4},"NEXT RANK"),s.default.createElement("td",{className:"noLeftBorder",colSpan:2},a&&s.default.createElement("span",{className:"nextRankTitle"},a),n&&s.default.createElement("span",{className:"nextRankDiff"},n)))}getNextRankDiff(){const{nextRank:e}=this.props;if(!e)return"—————";const{diff:t}=e;return"number"==typeof t?Math.round(t)!==t?t.toFixed(4)+"%":t.toLocaleString("en"):t}}t.NextRankInfo=o},function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SongImg=void 0;const s=n(a(0));class o extends s.default.PureComponent{render(){const{imgSrc:e}=this.props;return s.default.createElement("div",{className:"songImgContainer"},e?s.default.createElement("img",{className:"songImg",src:e,alt:""}):s.default.createElement("div",{className:"songImg songImgPlaceholder"}),s.default.createElement("div",{className:"songImgReflecContainer"},this.getReflecElement(e)))}getReflecElement(e){if(e){const t={backgroundImage:`url("${e}")`};return s.default.createElement("div",{className:"songImgReflec",style:t})}return s.default.createElement("div",{className:"songImgPlaceholder songImgReflecPlaceholder"})}}t.SongImg=o},function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SongInfo=void 0;const s=n(a(0)),o=s.default.memo(e=>{const{difficulty:t}=e;if(!t)return null;const a=t.toLowerCase().replace(":","");return s.default.createElement("span",{className:"difficulty "+a},"【",s.default.createElement("span",{id:"difficulty"},t),"】")});class r extends s.default.PureComponent{render(){const{songTitle:e,track:t,difficulty:a}=this.props,n="https://maimai.fandom.com/zh/wiki/"+encodeURIComponent(e)+"?variant=zh-hant";return s.default.createElement("div",{className:"songInfoContainer"},s.default.createElement("div",null,s.default.createElement("span",{className:"track",id:"track"},t),s.default.createElement(o,{difficulty:a})),s.default.createElement("h2",{className:"songTitle",id:"songTitle"},s.default.createElement("a",{className:"songWikiLink",href:n,target:"_blank"},e)))}}t.SongInfo=r},function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.PageFooter=void 0;const s=n(a(0));class o extends s.default.PureComponent{render(){return s.default.createElement("div",{className:"pageFooter"},s.default.createElement("a",{className:"closePage",href:"javascript:window.close()"},"戻る"))}}t.PageFooter=o},function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.PageTitle=void 0;const s=n(a(0));class o extends s.default.PureComponent{render(){return s.default.createElement("h3",{className:"pageTitle"},"プレイ履歴")}}t.PageTitle=o},function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SectionSep=void 0;const s=n(a(0));class o extends s.default.PureComponent{render(){return s.default.createElement("div",{className:"pageSectionSeparator"})}}t.SectionSep=o},function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CreditInfo=void 0;const s=n(a(0));class o extends s.default.PureComponent{render(){return s.default.createElement("div",{className:"credit"},s.default.createElement("span",{className:"madeBy"},"Made by"," "),s.default.createElement("a",{className:"authorLink",href:"https://github.com/myjian",target:"_blank"},"myjian"),".")}}t.CreditInfo=o}]);