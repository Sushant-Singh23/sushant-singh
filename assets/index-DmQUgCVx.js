var jm=Object.defineProperty;var Qm=(r,t,e)=>t in r?jm(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var It=(r,t,e)=>Qm(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function Ii(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Bd(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Wn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Hs={duration:.5,overwrite:!1,delay:0},$u,rn,Re,ti=1e8,ye=1/ti,Pc=Math.PI*2,t_=Pc/4,e_=0,zd=Math.sqrt,n_=Math.cos,i_=Math.sin,tn=function(t){return typeof t=="string"},De=function(t){return typeof t=="function"},Hi=function(t){return typeof t=="number"},Ku=function(t){return typeof t>"u"},yi=function(t){return typeof t=="object"},bn=function(t){return t!==!1},Zu=function(){return typeof window<"u"},oa=function(t){return De(t)||tn(t)},kd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},hn=Array.isArray,Lc=/(?:-?\.?\d|\.)+/gi,Hd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Cs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ul=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Vd=/[+-]=-?[.\d]+/,Gd=/[^,'"\[\]\s]+/gi,r_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Pe,pi,Dc,Ju,Xn={},al={},Wd,Xd=function(t){return(al=Vs(t,Xn))&&Pn},ju=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Wo=function(t,e){return!e&&console.warn(t)},Yd=function(t,e){return t&&(Xn[t]=e)&&al&&(al[t]=e)||Xn},Xo=function(){return 0},s_={suppressEvents:!0,isStart:!0,kill:!1},Xa={suppressEvents:!0,kill:!1},o_={suppressEvents:!0},Qu={},sr=[],Ic={},qd,Fn={},Nl={},zh=30,Ya=[],th="",eh=function(t){var e=t[0],n,i;if(yi(e)||De(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ya.length;i--&&!Ya[i].targetTest(e););n=Ya[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new gp(t[i],n)))||t.splice(i,1);return t},Hr=function(t){return t._gsap||eh(ei(t))[0]._gsap},$d=function(t,e,n){return(n=t[e])&&De(n)?t[e]():Ku(n)&&t.getAttribute&&t.getAttribute(e)||n},An=function(t,e){return(t=t.split(",")).forEach(e)||t},Oe=function(t){return Math.round(t*1e5)/1e5||0},He=function(t){return Math.round(t*1e7)/1e7||0},Ds=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},a_=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ll=function(){var t=sr.length,e=sr.slice(0),n,i;for(Ic={},sr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},nh=function(t){return!!(t._initted||t._startAt||t.add)},Kd=function(t,e,n,i){sr.length&&!rn&&ll(),t.render(e,n,!!(rn&&e<0&&nh(t))),sr.length&&!rn&&ll()},Zd=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Gd).length<2?e:tn(t)?t.trim():t},Jd=function(t){return t},Yn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},l_=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Vs=function(t,e){for(var n in e)t[n]=e[n];return t},kh=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=yi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},cl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Ao=function(t){var e=t.parent||Pe,n=t.keyframes?l_(hn(t.keyframes)):Yn;if(bn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},c_=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},jd=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Tl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},fr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Vr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},u_=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Uc=function(t,e,n,i){return t._startAt&&(rn?t._startAt.revert(Xa):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},h_=function r(t){return!t||t._ts&&r(t.parent)},Hh=function(t){return t._repeat?Gs(t._tTime,t=t.duration()+t._rDelay)*t:0},Gs=function(t,e){var n=Math.floor(t=He(t/e));return t&&n===t?n-1:n},ul=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},wl=function(t){return t._end=He(t._start+(t._tDur/Math.abs(t._ts||t._rts||ye)||0))},bl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=He(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),wl(t),n._dirty||Vr(n,t)),t},Qd=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=ul(t.rawTime(),e),(!e._dur||ia(0,e.totalDuration(),n)-e._tTime>ye)&&e.render(n,!0)),Vr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ye}},gi=function(t,e,n,i){return e.parent&&fr(e),e._start=He((Hi(n)?n:n||t!==Pe?Zn(t,n,e):t._time)+e._delay),e._end=He(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),jd(t,e,"_first","_last",t._sort?"_start":0),Nc(e)||(t._recent=e),i||Qd(t,e),t._ts<0&&bl(t,t._tTime),t},tp=function(t,e){return(Xn.ScrollTrigger||ju("scrollTrigger",e))&&Xn.ScrollTrigger.create(e,t)},ep=function(t,e,n,i,s){if(rh(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!rn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&qd!==kn.frame)return sr.push(t),t._lazy=[s,i],1},f_=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Nc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},d_=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&f_(t)&&!(!t._initted&&Nc(t))||(t._ts<0||t._dp._ts<0)&&!Nc(t))?0:1,a=t._rDelay,l=0,c,u,h;if(a&&t._repeat&&(l=ia(0,t._tDur,e),u=Gs(l,a),t._yoyo&&u&1&&(o=1-o),u!==Gs(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||rn||i||t._zTime===ye||!e&&t._zTime){if(!t._initted&&ep(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?ye:0),n||(n=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Uc(t,e,n,!0),t._onUpdate&&!n&&Gn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Gn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&fr(t,1),!n&&!rn&&(Gn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},p_=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Ws=function(t,e,n,i){var s=t._repeat,o=He(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:He(o*(s+1)+t._rDelay*s):o,a>0&&!i&&bl(t,t._tTime=t._tDur*a),t.parent&&wl(t),n||Vr(t.parent,t),t},Vh=function(t){return t instanceof Mn?Vr(t):Ws(t,t._dur)},m_={_start:0,endTime:Xo,totalDuration:Xo},Zn=function r(t,e,n){var i=t.labels,s=t._recent||m_,o=t.duration()>=ti?s.endTime(!1):t._dur,a,l,c;return tn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(hn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Co=function(t,e,n){var i=Hi(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=bn(l.vars.inherit)&&l.parent;o.immediateRender=bn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new ke(e[0],o,e[s+1])},gr=function(t,e){return t||t===0?e(t):e},ia=function(t,e,n){return n<t?t:n>e?e:n},cn=function(t,e){return!tn(t)||!(e=r_.exec(t))?"":e[1]},__=function(t,e,n){return gr(n,function(i){return ia(t,e,i)})},Oc=[].slice,np=function(t,e){return t&&yi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&yi(t[0]))&&!t.nodeType&&t!==pi},g_=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return tn(i)&&!e||np(i,1)?(s=n).push.apply(s,ei(i)):n.push(i)})||n},ei=function(t,e,n){return Re&&!e&&Re.selector?Re.selector(t):tn(t)&&!n&&(Dc||!Xs())?Oc.call((e||Ju).querySelectorAll(t),0):hn(t)?g_(t,n):np(t)?Oc.call(t,0):t?[t]:[]},Fc=function(t){return t=ei(t)[0]||Wo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return ei(e,n.querySelectorAll?n:n===t?Wo("Invalid scope")||Ju.createElement("div"):t)}},ip=function(t){return t.sort(function(){return .5-Math.random()})},rp=function(t){if(De(t))return t;var e=yi(t)?t:{each:t},n=Gr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,u=i,h=i;return tn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(d,f,_){var g=(_||e).length,p=o[g],m,M,x,S,C,b,E,R,F;if(!p){if(F=e.grid==="auto"?0:(e.grid||[1,ti])[1],!F){for(E=-ti;E<(E=_[F++].getBoundingClientRect().left)&&F<g;);F<g&&F--}for(p=o[g]=[],m=l?Math.min(F,g)*u-.5:i%F,M=F===ti?0:l?g*h/F-.5:i/F|0,E=0,R=ti,b=0;b<g;b++)x=b%F-m,S=M-(b/F|0),p[b]=C=c?Math.abs(c==="y"?S:x):zd(x*x+S*S),C>E&&(E=C),C<R&&(R=C);i==="random"&&ip(p),p.max=E-R,p.min=R,p.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(F>g?g-1:c?c==="y"?g/F:F:Math.max(F,g/F))||0)*(i==="edges"?-1:1),p.b=g<0?s-g:s,p.u=cn(e.amount||e.each)||0,n=n&&g<0?pp(n):n}return g=(p[d]-p.min)/p.max||0,He(p.b+(n?n(g):g)*p.v)+p.u}},Bc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=He(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Hi(n)?0:cn(n))}},sp=function(t,e){var n=hn(t),i,s;return!n&&yi(t)&&(i=n=t.radius||ti,t.values?(t=ei(t.values),(s=!Hi(t[0]))&&(i*=i)):t=Bc(t.increment)),gr(e,n?De(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ti,u=0,h=t.length,d,f;h--;)s?(d=t[h].x-a,f=t[h].y-l,d=d*d+f*f):d=Math.abs(t[h]-a),d<c&&(c=d,u=h);return u=!i||c<=i?t[u]:o,s||u===o||Hi(o)?u:u+cn(o)}:Bc(t))},op=function(t,e,n,i){return gr(hn(t)?!e:n===!0?!!(n=0):!i,function(){return hn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},v_=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},x_=function(t,e){return function(n){return t(parseFloat(n))+(e||cn(n))}},M_=function(t,e,n){return lp(t,e,0,1,n)},ap=function(t,e,n){return gr(n,function(i){return t[~~e(i)]})},S_=function r(t,e,n){var i=e-t;return hn(t)?ap(t,r(0,t.length),e):gr(n,function(s){return(i+(s-t)%i)%i+t})},y_=function r(t,e,n){var i=e-t,s=i*2;return hn(t)?ap(t,r(0,t.length-1),e):gr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Yo=function(t){for(var e=0,n="",i,s,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,o-i-7).match(a?Gd:Lc),n+=t.substr(e,i-e)+op(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},lp=function(t,e,n,i,s){var o=e-t,a=i-n;return gr(s,function(l){return n+((l-t)/o*a||0)})},E_=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var o=tn(t),a={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(hn(t)&&!hn(e)){for(u=[],h=t.length,d=h-2,c=1;c<h;c++)u.push(r(t[c-1],t[c]));h--,s=function(_){_*=h;var g=Math.min(d,~~_);return u[g](_-g)},n=e}else i||(t=Vs(hn(t)?[]:{},t));if(!u){for(l in e)ih.call(a,t,l,"get",e[l]);s=function(_){return ah(_,a)||(o?t.p:t)}}}return gr(n,s)},Gh=function(t,e,n){var i=t.labels,s=ti,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Gn=function(t,e,n){var i=t.vars,s=i[e],o=Re,a=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&sr.length&&ll(),a&&(Re=a),u=l?s.apply(c,l):s.call(c),Re=o,u},vo=function(t){return fr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!rn),t.progress()<1&&Gn(t,"onInterrupt"),t},Rs,cp=[],up=function(t){if(t)if(t=!t.name&&t.default||t,Zu()||t.headless){var e=t.name,n=De(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Xo,render:ah,add:ih,kill:z_,modifier:B_,rawVars:0},o={targetTest:0,get:0,getSetter:oh,aliases:{},register:0};if(Xs(),t!==i){if(Fn[e])return;Yn(i,Yn(cl(t,s),o)),Vs(i.prototype,Vs(s,cl(t,o))),Fn[i.prop=e]=i,t.targetTest&&(Ya.push(i),Qu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Yd(e,i),t.register&&t.register(Pn,i,Cn)}else cp.push(t)},Se=255,xo={aqua:[0,Se,Se],lime:[0,Se,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Se],navy:[0,0,128],white:[Se,Se,Se],olive:[128,128,0],yellow:[Se,Se,0],orange:[Se,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Se,0,0],pink:[Se,192,203],cyan:[0,Se,Se],transparent:[Se,Se,Se,0]},Ol=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Se+.5|0},hp=function(t,e,n){var i=t?Hi(t)?[t>>16,t>>8&Se,t&Se]:0:xo.black,s,o,a,l,c,u,h,d,f,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),xo[t])i=xo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Se,i&Se,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Se,t&Se]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(Lc),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Ol(l+1/3,s,o),i[1]=Ol(l,s,o),i[2]=Ol(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Hd),n&&i.length<4&&(i[3]=1),i}else i=t.match(Lc)||xo.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/Se,o=i[1]/Se,a=i[2]/Se,h=Math.max(s,o,a),d=Math.min(s,o,a),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(o-a)/f+(o<a?6:0):h===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},fp=function(t){var e=[],n=[],i=-1;return t.split(or).forEach(function(s){var o=s.match(Cs)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Wh=function(t,e,n){var i="",s=(t+i).match(or),o=e?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return t;if(s=s.map(function(d){return(d=hp(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=fp(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(or,"1").split(Cs),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(or),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},or=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in xo)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),T_=/hsl[a]?\(/,dp=function(t){var e=t.join(" "),n;if(or.lastIndex=0,or.test(e))return n=T_.test(e),t[1]=Wh(t[1],n),t[0]=Wh(t[0],n,fp(t[1])),!0},qo,kn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,d,f,_=function g(p){var m=r()-i,M=p===!0,x,S,C,b;if((m>t||m<0)&&(n+=m-e),i+=m,C=i-n,x=C-o,(x>0||M)&&(b=++h.frame,d=C-h.time*1e3,h.time=C=C/1e3,o+=x+(x>=s?4:s-x),S=1),M||(l=c(g)),S)for(f=0;f<a.length;f++)a[f](C,d,b,p)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){Wd&&(!Dc&&Zu()&&(pi=Dc=window,Ju=pi.document||{},Xn.gsap=Pn,(pi.gsapVersions||(pi.gsapVersions=[])).push(Pn.version),Xd(al||pi.GreenSockGlobals||!pi.gsap&&pi||{}),cp.forEach(up)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},qo=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),qo=0,c=Xo},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),o=h.time*1e3+s},add:function(p,m,M){var x=m?function(S,C,b,E){p(S,C,b,E),h.remove(x)}:p;return h.remove(p),a[M?"unshift":"push"](x),Xs(),x},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&f>=m&&f--},_listeners:a},h}(),Xs=function(){return!qo&&kn.wake()},ue={},w_=/^[\d.\-M][\d.\-,\s]/,b_=/["']/g,A_=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(b_,"").trim():+c,i=l.substr(a+1).trim();return e},C_=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},R_=function(t){var e=(t+"").split("("),n=ue[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[A_(e[1])]:C_(t).split(",").map(Zd)):ue._CE&&w_.test(t)?ue._CE("",t):n},pp=function(t){return function(e){return 1-t(1-e)}},mp=function r(t,e){for(var n=t._first,i;n;)n instanceof Mn?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Gr=function(t,e){return t&&(De(t)?t:ue[t]||R_(t))||e},es=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return An(t,function(a){ue[a]=Xn[a]=s,ue[o=a.toLowerCase()]=n;for(var l in s)ue[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ue[a+"."+l]=s[l]}),s},_p=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Fl=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Pc*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*i_((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:_p(a);return s=Pc/s,l.config=function(c,u){return r(t,c,u)},l},Bl=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:_p(n);return i.config=function(s){return r(t,s)},i};An("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;es(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ue.Linear.easeNone=ue.none=ue.Linear.easeIn;es("Elastic",Fl("in"),Fl("out"),Fl());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};es("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);es("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});es("Circ",function(r){return-(zd(1-r*r)-1)});es("Sine",function(r){return r===1?1:-n_(r*t_)+1});es("Back",Bl("in"),Bl("out"),Bl());ue.SteppedEase=ue.steps=Xn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-ye;return function(a){return((i*ia(0,o,a)|0)+s)*n}}};Hs.ease=ue["quad.out"];An("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return th+=r+","+r+"Params,"});var gp=function(t,e){this.id=e_++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:$d,this.set=e?e.getSetter:oh},$o=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ws(this,+e.duration,1,1),this.data=e.data,Re&&(this._ctx=Re,Re.data.push(this)),qo||kn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ws(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Xs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(bl(this,n),!s._dp||s.parent||Qd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&gi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ye||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Kd(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Hh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Hh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Gs(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ye?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ul(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ye?0:this._rts,this.totalTime(ia(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),wl(this),u_(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Xs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ye&&(this._tTime-=ye)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&gi(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(bn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ul(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=o_);var i=rn;return rn=n,nh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),rn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Vh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Vh(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Zn(this,n),bn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,bn(i)),this._dur||(this._zTime=-ye),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ye:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ye,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ye)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(s){var o=De(n)?n:Jd,a=function(){var c=i.then;i.then=null,De(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){vo(this)},r}();Yn($o.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ye,_prom:0,_ps:!1,_rts:1});var Mn=function(r){Bd(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=bn(n.sortChildren),Pe&&gi(n.parent||Pe,Ii(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&tp(Ii(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Co(0,arguments,this),this},e.from=function(i,s,o){return Co(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Co(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,Ao(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ke(i,s,Zn(this,o),1),this},e.call=function(i,s,o){return gi(this,ke.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new ke(i,o,Zn(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Ao(o).immediateRender=bn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},e.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,Ao(a).immediateRender=bn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:He(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,_,g,p,m,M,x,S,C,b,E;if(this!==Pe&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,S=this._start,x=this._ts,m=!x,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(d=He(u%p),u===l?(g=this._repeat,d=c):(C=He(u/p),g=~~C,g&&g===C&&(d=c,g--),d>c&&(d=c)),C=Gs(this._tTime,p),!a&&this._tTime&&C!==g&&this._tTime-C*p-this._dur<=0&&(C=g),b&&g&1&&(d=c-d,E=1),g!==C&&!this._lock){var R=b&&C&1,F=R===(b&&g&1);if(g<C&&(R=!R),a=R?0:u%c?c:u,this._lock=1,this.render(a||(E?0:He(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Gn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,F&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;mp(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=p_(this,He(a),He(d)),M&&(u-=d-(d=M._start))),this._tTime=u,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&!s&&!C&&(Gn(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!m){M=0,_&&(u+=this._zTime=-ye);break}}f=_}else{f=this._last;for(var v=i<0?i:d;f;){if(_=f._prev,(f._act||v<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(v-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(v-f._start)*f._ts,s,o||rn&&nh(f)),d!==this._time||!this._ts&&!m){M=0,_&&(u+=this._zTime=v?-ye:ye);break}}f=_}}if(M&&!s&&(this.pause(),M.render(d>=a?0:-ye)._zTime=d>=a?1:-1,this._ts))return this._start=S,wl(this),this.render(i,s,o);this._onUpdate&&!s&&Gn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&fr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Gn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Hi(s)||(s=Zn(this,s,i)),!(i instanceof $o)){if(hn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(tn(i))return this.addLabel(i,s);if(De(i))i=ke.delayedCall(0,i);else return this}return this!==i?gi(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ti);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ke?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return tn(i)?this.removeLabel(i):De(i)?this.killTweensOf(i):(i.parent===this&&Tl(this,i),i===this._recent&&(this._recent=this._last),Vr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=He(kn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Zn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=ke.delayedCall(0,s||Xo,o);return a.data="isPause",this._hasPause=1,gi(this,a,Zn(this,i))},e.removePause=function(i){var s=this._first;for(i=Zn(this,i);s;)s._start===i&&s.data==="isPause"&&fr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)tr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=ei(i),l=this._first,c=Hi(s),u;l;)l instanceof ke?a_(l._targets,a)&&(c?(!tr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=Zn(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,_=ke.to(o,Yn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ye,onStart:function(){if(o.pause(),!f){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&Ws(_,p,0,1).render(_._time,!0,!0),f=1}u&&u.apply(_,h||[])}},s));return d?_.render(0):_},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,Yn({startAt:{time:Zn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Gh(this,Zn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Gh(this,Zn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ye)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Vr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Vr(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=ti,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,gi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ws(o,o===Pe&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Pe._ts&&(Kd(Pe,ul(i,Pe)),qd=kn.frame),kn.frame>=zh){zh+=Wn.autoSleep||120;var s=Pe._first;if((!s||!s._ts)&&Wn.autoSleep&&kn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||kn.sleep()}}},t}($o);Yn(Mn.prototype,{_lock:0,_hasPause:0,_forcing:0});var P_=function(t,e,n,i,s,o,a){var l=new Cn(this._pt,t,e,0,1,Ep,null,s),c=0,u=0,h,d,f,_,g,p,m,M;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Yo(i)),o&&(M=[n,i],o(M,t,e),n=M[0],i=M[1]),d=n.match(Ul)||[];h=Ul.exec(i);)_=h[0],g=i.substring(c,h.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[u++]&&(p=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?Ds(p,_)-p:parseFloat(_)-p,m:f&&f<4?Math.round:0},c=Ul.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Vd.test(i)||m)&&(l.e=0),this._pt=l,l},ih=function(t,e,n,i,s,o,a,l,c,u){De(i)&&(i=i(s||0,t,o));var h=t[e],d=n!=="get"?n:De(h)?c?t[e.indexOf("set")||!De(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,f=De(h)?c?N_:Sp:sh,_;if(tn(i)&&(~i.indexOf("random(")&&(i=Yo(i)),i.charAt(1)==="="&&(_=Ds(d,i)+(cn(d)||0),(_||_===0)&&(i=_))),!u||d!==i||zc)return!isNaN(d*i)&&i!==""?(_=new Cn(this._pt,t,e,+d||0,i-(d||0),typeof h=="boolean"?F_:yp,0,f),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!h&&!(e in t)&&ju(e,i),P_.call(this,t,e,d,i,f,l||Wn.stringFilter,c))},L_=function(t,e,n,i,s){if(De(t)&&(t=Ro(t,s,e,n,i)),!yi(t)||t.style&&t.nodeType||hn(t)||kd(t))return tn(t)?Ro(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Ro(t[a],s,e,n,i);return o},vp=function(t,e,n,i,s,o){var a,l,c,u;if(Fn[t]&&(a=new Fn[t]).init(s,a.rawVars?e[t]:L_(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Cn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Rs))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},tr,zc,rh=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=t._dur,g=t._startAt,p=t._targets,m=t.parent,M=m&&m.data==="nested"?m.vars.targets:p,x=t._overwrite==="auto"&&!$u,S=t.timeline,C,b,E,R,F,v,T,U,z,$,J,G,K;if(S&&(!d||!s)&&(s="none"),t._ease=Gr(s,Hs.ease),t._yEase=h?pp(Gr(h===!0?s:h,Hs.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!S&&!!i.runBackwards,!S||d&&!i.stagger){if(U=p[0]?Hr(p[0]).harness:0,G=U&&i[U.prop],C=cl(i,Qu),g&&(g._zTime<0&&g.progress(1),e<0&&u&&a&&!f?g.render(-1,!0):g.revert(u&&_?Xa:s_),g._lazy=0),o){if(fr(t._startAt=ke.set(p,Yn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&bn(l),startAt:null,delay:0,onUpdate:c&&function(){return Gn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(rn||!a&&!f)&&t._startAt.revert(Xa),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&_&&!g){if(e&&(a=!1),E=Yn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&bn(l),immediateRender:a,stagger:0,parent:m},C),G&&(E[U.prop]=G),fr(t._startAt=ke.set(p,E)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(rn?t._startAt.revert(Xa):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,ye,ye);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&bn(l)||l&&!_,b=0;b<p.length;b++){if(F=p[b],T=F._gsap||eh(p)[b]._gsap,t._ptLookup[b]=$={},Ic[T.id]&&sr.length&&ll(),J=M===p?b:M.indexOf(F),U&&(z=new U).init(F,G||C,t,J,M)!==!1&&(t._pt=R=new Cn(t._pt,F,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(k){$[k]=R}),z.priority&&(v=1)),!U||G)for(E in C)Fn[E]&&(z=vp(E,C,t,J,F,M))?z.priority&&(v=1):$[E]=R=ih.call(t,F,E,"get",C[E],J,M,0,i.stringFilter);t._op&&t._op[b]&&t.kill(F,t._op[b]),x&&t._pt&&(tr=t,Pe.killTweensOf(F,$,t.globalTime(e)),K=!t.parent,tr=0),t._pt&&l&&(Ic[T.id]=1)}v&&Tp(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!K,d&&e<=0&&S.render(ti,!0,!0)},D_=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,d,f;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(u=d[f][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return zc=1,t.vars[e]="+=0",rh(t,a),zc=0,l?Wo(e+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Oe(n)+cn(h.e)),h.b&&(h.b=u.s+cn(h.b))},I_=function(t,e){var n=t[0]?Hr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Vs({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},U_=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(hn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Ro=function(t,e,n,i,s){return De(t)?t.call(e,n,i,s):tn(t)&&~t.indexOf("random(")?Yo(t):t},xp=th+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Mp={};An(xp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Mp[r]=1});var ke=function(r){Bd(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Ao(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,M=i.parent||Pe,x=(hn(n)||kd(n)?Hi(n[0]):"length"in i)?[n]:ei(n),S,C,b,E,R,F,v,T;if(a._targets=x.length?eh(x):Wo("GSAP target "+n+" not found. https://gsap.com",!Wn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||d||oa(c)||oa(u)){if(i=a.vars,S=a.timeline=new Mn({data:"nested",defaults:g||{},targets:M&&M.data==="nested"?M.vars.targets:x}),S.kill(),S.parent=S._dp=Ii(a),S._start=0,d||oa(c)||oa(u)){if(E=x.length,v=d&&rp(d),yi(d))for(R in d)~xp.indexOf(R)&&(T||(T={}),T[R]=d[R]);for(C=0;C<E;C++)b=cl(i,Mp),b.stagger=0,m&&(b.yoyoEase=m),T&&Vs(b,T),F=x[C],b.duration=+Ro(c,Ii(a),C,F,x),b.delay=(+Ro(u,Ii(a),C,F,x)||0)-a._delay,!d&&E===1&&b.delay&&(a._delay=u=b.delay,a._start+=u,b.delay=0),S.to(F,b,v?v(C,F,x):0),S._ease=ue.none;S.duration()?c=u=0:a.timeline=0}else if(_){Ao(Yn(S.vars.defaults,{ease:"none"})),S._ease=Gr(_.ease||i.ease||"none");var U=0,z,$,J;if(hn(_))_.forEach(function(G){return S.to(x,G,">")}),S.duration();else{b={};for(R in _)R==="ease"||R==="easeEach"||U_(R,_[R],b,_.easeEach);for(R in b)for(z=b[R].sort(function(G,K){return G.t-K.t}),U=0,C=0;C<z.length;C++)$=z[C],J={ease:$.e,duration:($.t-(C?z[C-1].t:0))/100*c},J[R]=$.v,S.to(x,J,U),U+=J.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return f===!0&&!$u&&(tr=Ii(a),Pe.killTweensOf(x),tr=0),gi(M,Ii(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!_&&a._start===He(M._time)&&bn(h)&&h_(Ii(a))&&M.data!=="nested")&&(a._tTime=-ye,a.render(Math.max(0,-u)||0)),p&&tp(Ii(a),p),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-ye&&!u?l:i<ye?0:i,d,f,_,g,p,m,M,x,S;if(!c)d_(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,o);if(d=He(h%g),h===l?(_=this._repeat,d=c):(p=He(h/g),_=~~p,_&&_===p?(d=c,_--):d>c&&(d=c)),m=this._yoyo&&_&1,m&&(S=this._yEase,d=c-d),p=Gs(this._tTime,g),d===a&&!o&&this._initted&&_===p)return this._tTime=h,this;_!==p&&(x&&this._yEase&&mp(x,m),this.vars.repeatRefresh&&!m&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(He(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(ep(this,u?i:d,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(S||this._ease)(d/c),this._from&&(this.ratio=M=1-M),!a&&h&&!s&&!p&&(Gn(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;x&&x.render(i<0?i:x._dur*x._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Uc(this,i,s,o),Gn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&Gn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Uc(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&fr(this,1),!s&&!(u&&!a)&&(h||a||m)&&(Gn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){qo||kn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||rh(this,c),u=this._ease(c/this._dur),D_(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(bl(this,0),this.parent||jd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?vo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!rn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,tr&&tr.vars.overwrite!==!0)._first||vo(this),this.parent&&o!==this.timeline.totalDuration()&&Ws(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ei(i):a,c=this._ptLookup,u=this._pt,h,d,f,_,g,p,m;if((!s||s==="all")&&c_(a,l))return s==="all"&&(this._pt=0),vo(this);for(h=this._op=this._op||[],s!=="all"&&(tn(s)&&(g={},An(s,function(M){return g[M]=1}),s=g),s=I_(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){d=c[m],s==="all"?(h[m]=s,_=d,f={}):(f=h[m]=h[m]||{},_=s);for(g in _)p=d&&d[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&Tl(this,p,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&u&&vo(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Co(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Co(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Pe.killTweensOf(i,s,o)},t}($o);Yn(ke.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});An("staggerTo,staggerFrom,staggerFromTo",function(r){ke[r]=function(){var t=new Mn,e=Oc.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var sh=function(t,e,n){return t[e]=n},Sp=function(t,e,n){return t[e](n)},N_=function(t,e,n,i){return t[e](i.fp,n)},O_=function(t,e,n){return t.setAttribute(e,n)},oh=function(t,e){return De(t[e])?Sp:Ku(t[e])&&t.setAttribute?O_:sh},yp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},F_=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Ep=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},ah=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},B_=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},z_=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Tl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},k_=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Tp=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Cn=function(){function r(e,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||yp,this.d=l||this,this.set=c||sh,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=k_,this.m=n,this.mt=s,this.tween=i},r}();An(th+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Qu[r]=1});Xn.TweenMax=Xn.TweenLite=ke;Xn.TimelineLite=Xn.TimelineMax=Mn;Pe=new Mn({sortChildren:!1,defaults:Hs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Wn.stringFilter=dp;var Wr=[],qa={},H_=[],Xh=0,V_=0,zl=function(t){return(qa[t]||H_).map(function(e){return e()})},kc=function(){var t=Date.now(),e=[];t-Xh>2&&(zl("matchMediaInit"),Wr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=pi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),zl("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Xh=t,zl("matchMedia"))},wp=function(){function r(e,n){this.selector=n&&Fc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=V_++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){De(n)&&(s=i,i=n,n=De);var o=this,a=function(){var c=Re,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Fc(s)),Re=o,h=i.apply(o,arguments),De(h)&&o._r.push(h),Re=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===De?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Re;Re=null,n(this),Re=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof ke&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Mn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ke)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Wr.length;o--;)Wr[o].id===this.id&&Wr.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),G_=function(){function r(e){this.contexts=[],this.scope=e,Re&&Re.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){yi(n)||(n={matches:n});var o=new wp(0,s||this.scope),a=o.conditions={},l,c,u;Re&&!o.selector&&(o.selector=Re.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=pi.matchMedia(n[c]),l&&(Wr.indexOf(o)<0&&Wr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(kc):l.addEventListener("change",kc)));return u&&i(o,function(h){return o.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),hl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return up(i)})},timeline:function(t){return new Mn(t)},getTweensOf:function(t,e){return Pe.getTweensOf(t,e)},getProperty:function(t,e,n,i){tn(t)&&(t=ei(t)[0]);var s=Hr(t||{}).get,o=n?Jd:Zd;return n==="native"&&(n=""),t&&(e?o((Fn[e]&&Fn[e].get||s)(t,e,n,i)):function(a,l,c){return o((Fn[a]&&Fn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=ei(t),t.length>1){var i=t.map(function(u){return Pn.quickSetter(u,e,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}t=t[0]||{};var o=Fn[e],a=Hr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var h=new o;Rs._pt=0,h.init(t,n?u+n:u,Rs,0,[t]),h.render(1,h),Rs._pt&&ah(1,Rs)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var i,s=Pn.to(t,Yn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return Pe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Gr(t.ease,Hs.ease)),kh(Hs,t||{})},config:function(t){return kh(Wn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Fn[a]&&!Xn[a]&&Wo(e+" effect requires "+a+" plugin.")}),Nl[e]=function(a,l,c){return n(ei(a),Yn(l||{},s),c)},o&&(Mn.prototype[e]=function(a,l,c){return this.add(Nl[e](a,yi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ue[t]=Gr(e)},parseEase:function(t,e){return arguments.length?Gr(t,e):ue},getById:function(t){return Pe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Mn(t),i,s;for(n.smoothChildTiming=bn(t.smoothChildTiming),Pe.remove(n),n._dp=0,n._time=n._tTime=Pe._time,i=Pe._first;i;)s=i._next,(e||!(!i._dur&&i instanceof ke&&i.vars.onComplete===i._targets[0]))&&gi(n,i,i._start-i._delay),i=s;return gi(Pe,n,0),n},context:function(t,e){return t?new wp(t,e):Re},matchMedia:function(t){return new G_(t)},matchMediaRefresh:function(){return Wr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||kc()},addEventListener:function(t,e){var n=qa[t]||(qa[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=qa[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:S_,wrapYoyo:y_,distribute:rp,random:op,snap:sp,normalize:M_,getUnit:cn,clamp:__,splitColor:hp,toArray:ei,selector:Fc,mapRange:lp,pipe:v_,unitize:x_,interpolate:E_,shuffle:ip},install:Xd,effects:Nl,ticker:kn,updateRoot:Mn.updateRoot,plugins:Fn,globalTimeline:Pe,core:{PropTween:Cn,globals:Yd,Tween:ke,Timeline:Mn,Animation:$o,getCache:Hr,_removeLinkedListItem:Tl,reverting:function(){return rn},context:function(t){return t&&Re&&(Re.data.push(t),t._ctx=Re),Re},suppressOverwrites:function(t){return $u=t}}};An("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return hl[r]=ke[r]});kn.add(Mn.updateRoot);Rs=hl.to({},{duration:0});var W_=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},X_=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=W_(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},kl=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(tn(s)&&(l={},An(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}X_(a,s)}}}},Pn=hl.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)rn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},kl("roundProps",Bc),kl("modifiers"),kl("snap",sp))||hl;ke.version=Mn.version=Pn.version="3.13.0";Wd=1;Zu()&&Xs();ue.Power0;ue.Power1;ue.Power2;ue.Power3;ue.Power4;ue.Linear;ue.Quad;ue.Cubic;ue.Quart;ue.Quint;ue.Strong;ue.Elastic;ue.Back;ue.SteppedEase;ue.Bounce;ue.Sine;ue.Expo;ue.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Yh,er,Is,lh,Fr,qh,ch,Y_=function(){return typeof window<"u"},Vi={},Ar=180/Math.PI,Us=Math.PI/180,ss=Math.atan2,$h=1e8,uh=/([A-Z])/g,q_=/(left|right|width|margin|padding|x)/i,$_=/[\s,\(]\S/,vi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Hc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},K_=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Z_=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},J_=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},bp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Ap=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},j_=function(t,e,n){return t.style[e]=n},Q_=function(t,e,n){return t.style.setProperty(e,n)},tg=function(t,e,n){return t._gsap[e]=n},eg=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},ng=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},ig=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Le="transform",Rn=Le+"Origin",rg=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Vi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=vi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Ui(i,a)}):this.tfm[t]=o.x?o[t]:Ui(i,t),t===Rn&&(this.tfm.zOrigin=o.zOrigin);else return vi.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Le)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Rn,e,"")),t=Le}(s||e)&&this.props.push(t,e,s[t])},Cp=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},sg=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(uh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=ch(),(!s||!s.isStart)&&!n[Le]&&(Cp(n),i.zOrigin&&n[Rn]&&(n[Rn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Rp=function(t,e){var n={target:t,props:[],revert:sg,save:rg};return t._gsap||Pn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Pp,Vc=function(t,e){var n=er.createElementNS?er.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):er.createElement(t);return n&&n.style?n:er.createElement(t)},ni=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(uh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Ys(e)||e,1)||""},Kh="O,Moz,ms,Ms,Webkit".split(","),Ys=function(t,e,n){var i=e||Fr,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Kh[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Kh[o]:"")+t},Gc=function(){Y_()&&window.document&&(Yh=window,er=Yh.document,Is=er.documentElement,Fr=Vc("div")||{style:{}},Vc("div"),Le=Ys(Le),Rn=Le+"Origin",Fr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Pp=!!Ys("perspective"),ch=Pn.core.reverting,lh=1)},Zh=function(t){var e=t.ownerSVGElement,n=Vc("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Is.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Is.removeChild(n),s},Jh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Lp=function(t){var e,n;try{e=t.getBBox()}catch{e=Zh(t),n=1}return e&&(e.width||e.height)||n||(e=Zh(t)),e&&!e.width&&!e.x&&!e.y?{x:+Jh(t,["x","cx","x1"])||0,y:+Jh(t,["y","cy","y1"])||0,width:0,height:0}:e},Dp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Lp(t))},Kr=function(t,e){if(e){var n=t.style,i;e in Vi&&e!==Rn&&(e=Le),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(uh,"-$1").toLowerCase())):n.removeAttribute(e)}},nr=function(t,e,n,i,s,o){var a=new Cn(t._pt,e,n,0,1,o?Ap:bp);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},jh={deg:1,rad:1,turn:1},og={grid:1,flex:1},dr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Fr.style,l=q_.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",_,g,p,m;if(i===o||!s||jh[i]||jh[o])return s;if(o!=="px"&&!d&&(s=r(t,e,n,"px")),m=t.getCTM&&Dp(t),(f||o==="%")&&(Vi[e]||~e.indexOf("adius")))return _=m?t.getBBox()[l?"width":"height"]:t[u],Oe(f?s/_*h:s/100*_);if(a[l?"width":"height"]=h+(d?o:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===er||!g.appendChild)&&(g=er.body),p=g._gsap,p&&f&&p.width&&l&&p.time===kn.time&&!p.uncache)return Oe(s/p.width*h);if(f&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=h+i,_=t[u],M?t.style[e]=M:Kr(t,e)}else(f||o==="%")&&!og[ni(g,"display")]&&(a.position=ni(t,"position")),g===t&&(a.position="static"),g.appendChild(Fr),_=Fr[u],g.removeChild(Fr),a.position="absolute";return l&&f&&(p=Hr(g),p.time=kn.time,p.width=g[u]),Oe(d?_*s/h:_&&s?h/_*s:0)},Ui=function(t,e,n,i){var s;return lh||Gc(),e in vi&&e!=="transform"&&(e=vi[e],~e.indexOf(",")&&(e=e.split(",")[0])),Vi[e]&&e!=="transform"?(s=Zo(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:dl(ni(t,Rn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=fl[e]&&fl[e](t,e,n)||ni(t,e)||$d(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?dr(t,e,s,n)+n:s},ag=function(t,e,n,i){if(!n||n==="none"){var s=Ys(e,t,1),o=s&&ni(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=ni(t,"borderTopColor"))}var a=new Cn(this._pt,t.style,e,0,1,Ep),l=0,c=0,u,h,d,f,_,g,p,m,M,x,S,C;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ni(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=ni(t,e)||i,g?t.style[e]=g:Kr(t,e)),u=[n,i],dp(u),n=u[0],i=u[1],d=n.match(Cs)||[],C=i.match(Cs)||[],C.length){for(;h=Cs.exec(i);)p=h[0],M=i.substring(l,h.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),p!==(g=d[c++]||"")&&(f=parseFloat(g)||0,S=g.substr((f+"").length),p.charAt(1)==="="&&(p=Ds(f,p)+S),m=parseFloat(p),x=p.substr((m+"").length),l=Cs.lastIndex-x.length,x||(x=x||Wn.units[e]||S,l===i.length&&(i+=x,a.e+=x)),S!==x&&(f=dr(t,e,g,x)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:f,c:m-f,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Ap:bp;return Vd.test(i)&&(a.e=0),this._pt=a,a},Qh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},lg=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Qh[n]||n,e[1]=Qh[i]||i,e.join(" ")},cg=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Vi[a]&&(l=1,a=a==="transformOrigin"?Rn:Le),Kr(n,a);l&&(Kr(n,Le),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Zo(n,1),o.uncache=1,Cp(i)))}},fl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Cn(t._pt,e,n,0,0,cg);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},Ko=[1,0,0,1,0,0],Ip={},Up=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},tf=function(t){var e=ni(t,Le);return Up(e)?Ko:e.substr(7).match(Hd).map(Oe)},hh=function(t,e){var n=t._gsap||Hr(t),i=t.style,s=tf(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ko:s):(s===Ko&&!t.offsetParent&&t!==Is&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Is.appendChild(t)),s=tf(t),l?i.display=l:Kr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Is.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Wc=function(t,e,n,i,s,o){var a=t._gsap,l=s||hh(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=l[0],_=l[1],g=l[2],p=l[3],m=l[4],M=l[5],x=e.split(" "),S=parseFloat(x[0])||0,C=parseFloat(x[1])||0,b,E,R,F;n?l!==Ko&&(E=f*p-_*g)&&(R=S*(p/E)+C*(-g/E)+(g*M-p*m)/E,F=S*(-_/E)+C*(f/E)-(f*M-_*m)/E,S=R,C=F):(b=Lp(t),S=b.x+(~x[0].indexOf("%")?S/100*b.width:S),C=b.y+(~(x[1]||x[0]).indexOf("%")?C/100*b.height:C)),i||i!==!1&&a.smooth?(m=S-c,M=C-u,a.xOffset=h+(m*f+M*g)-m,a.yOffset=d+(m*_+M*p)-M):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=C,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Rn]="0px 0px",o&&(nr(o,a,"xOrigin",c,S),nr(o,a,"yOrigin",u,C),nr(o,a,"xOffset",h,a.xOffset),nr(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",S+" "+C)},Zo=function(t,e){var n=t._gsap||new gp(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=ni(t,Rn)||"0",u,h,d,f,_,g,p,m,M,x,S,C,b,E,R,F,v,T,U,z,$,J,G,K,k,ut,P,lt,Vt,Yt,X,et;return u=h=d=g=p=m=M=x=S=0,f=_=1,n.svg=!!(t.getCTM&&Dp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Le]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Le]!=="none"?l[Le]:"")),i.scale=i.rotate=i.translate="none"),E=hh(t,n.svg),n.svg&&(n.uncache?(k=t.getBBox(),c=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",K=""):K=!e&&t.getAttribute("data-svg-origin"),Wc(t,K||c,!!K||n.originIsAbsolute,n.smooth!==!1,E)),C=n.xOrigin||0,b=n.yOrigin||0,E!==Ko&&(T=E[0],U=E[1],z=E[2],$=E[3],u=J=E[4],h=G=E[5],E.length===6?(f=Math.sqrt(T*T+U*U),_=Math.sqrt($*$+z*z),g=T||U?ss(U,T)*Ar:0,M=z||$?ss(z,$)*Ar+g:0,M&&(_*=Math.abs(Math.cos(M*Us))),n.svg&&(u-=C-(C*T+b*z),h-=b-(C*U+b*$))):(et=E[6],Yt=E[7],P=E[8],lt=E[9],Vt=E[10],X=E[11],u=E[12],h=E[13],d=E[14],R=ss(et,Vt),p=R*Ar,R&&(F=Math.cos(-R),v=Math.sin(-R),K=J*F+P*v,k=G*F+lt*v,ut=et*F+Vt*v,P=J*-v+P*F,lt=G*-v+lt*F,Vt=et*-v+Vt*F,X=Yt*-v+X*F,J=K,G=k,et=ut),R=ss(-z,Vt),m=R*Ar,R&&(F=Math.cos(-R),v=Math.sin(-R),K=T*F-P*v,k=U*F-lt*v,ut=z*F-Vt*v,X=$*v+X*F,T=K,U=k,z=ut),R=ss(U,T),g=R*Ar,R&&(F=Math.cos(R),v=Math.sin(R),K=T*F+U*v,k=J*F+G*v,U=U*F-T*v,G=G*F-J*v,T=K,J=k),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),f=Oe(Math.sqrt(T*T+U*U+z*z)),_=Oe(Math.sqrt(G*G+et*et)),R=ss(J,G),M=Math.abs(R)>2e-4?R*Ar:0,S=X?1/(X<0?-X:X):0),n.svg&&(K=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Up(ni(t,Le)),K&&t.setAttribute("transform",K))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(f*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Oe(f),n.scaleY=Oe(_),n.rotation=Oe(g)+a,n.rotationX=Oe(p)+a,n.rotationY=Oe(m)+a,n.skewX=M+a,n.skewY=x+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Rn]=dl(c)),n.xOffset=n.yOffset=0,n.force3D=Wn.force3D,n.renderTransform=n.svg?hg:Pp?Np:ug,n.uncache=0,n},dl=function(t){return(t=t.split(" "))[0]+" "+t[1]},Hl=function(t,e,n){var i=cn(e);return Oe(parseFloat(e)+parseFloat(dr(t,"x",n+"px",i)))+i},ug=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Np(t,e)},xr="0deg",ro="0px",Mr=") ",Np=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,M=n.target,x=n.zOrigin,S="",C=m==="auto"&&t&&t!==1||m===!0;if(x&&(h!==xr||u!==xr)){var b=parseFloat(u)*Us,E=Math.sin(b),R=Math.cos(b),F;b=parseFloat(h)*Us,F=Math.cos(b),o=Hl(M,o,E*F*-x),a=Hl(M,a,-Math.sin(b)*-x),l=Hl(M,l,R*F*-x+x)}p!==ro&&(S+="perspective("+p+Mr),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(C||o!==ro||a!==ro||l!==ro)&&(S+=l!==ro||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Mr),c!==xr&&(S+="rotate("+c+Mr),u!==xr&&(S+="rotateY("+u+Mr),h!==xr&&(S+="rotateX("+h+Mr),(d!==xr||f!==xr)&&(S+="skew("+d+", "+f+Mr),(_!==1||g!==1)&&(S+="scale("+_+", "+g+Mr),M.style[Le]=S||"translate(0, 0)"},hg=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,M=n.forceCSS,x=parseFloat(o),S=parseFloat(a),C,b,E,R,F;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Us,c*=Us,C=Math.cos(l)*h,b=Math.sin(l)*h,E=Math.sin(l-c)*-d,R=Math.cos(l-c)*d,c&&(u*=Us,F=Math.tan(c-u),F=Math.sqrt(1+F*F),E*=F,R*=F,u&&(F=Math.tan(u),F=Math.sqrt(1+F*F),C*=F,b*=F)),C=Oe(C),b=Oe(b),E=Oe(E),R=Oe(R)):(C=h,R=d,b=E=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=dr(f,"x",o,"px"),S=dr(f,"y",a,"px")),(_||g||p||m)&&(x=Oe(x+_-(_*C+g*E)+p),S=Oe(S+g-(_*b+g*R)+m)),(i||s)&&(F=f.getBBox(),x=Oe(x+i/100*F.width),S=Oe(S+s/100*F.height)),F="matrix("+C+","+b+","+E+","+R+","+x+","+S+")",f.setAttribute("transform",F),M&&(f.style[Le]=F)},fg=function(t,e,n,i,s){var o=360,a=tn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ar:1),c=l-i,u=i+c+"deg",h,d;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*$h)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*$h)%o-~~(c/o)*o)),t._pt=d=new Cn(t._pt,e,n,i,c,K_),d.e=u,d.u="deg",t._props.push(n),d},ef=function(t,e){for(var n in e)t[n]=e[n];return t},dg=function(t,e,n){var i=ef({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,d,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Le]=e,a=Zo(n,1),Kr(n,Le),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Le],o[Le]=e,a=Zo(n,1),o[Le]=c);for(l in Vi)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(f=cn(c),_=cn(u),h=f!==_?dr(n,l,c,_):parseFloat(c),d=parseFloat(u),t._pt=new Cn(t._pt,a,l,h,d-h,Hc),t._pt.u=_||0,t._props.push(l));ef(a,i)};An("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});fl[t>1?"border"+r:r]=function(a,l,c,u,h){var d,f;if(arguments.length<4)return d=o.map(function(_){return Ui(a,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},o.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,f,h)}});var Op={name:"css",register:Gc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,h,d,f,_,g,p,m,M,x,S,C,b,E,R;lh||Gc(),this.styles=this.styles||Rp(t),R=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(u=e[g],!(Fn[g]&&vp(g,e,n,i,t,s)))){if(f=typeof u,_=fl[g],f==="function"&&(u=u.call(n,i,t,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Yo(u)),_)_(this,t,g,u,n)&&(E=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",or.lastIndex=0,or.test(c)||(p=cn(c),m=cn(u)),m?p!==m&&(c=dr(t,g,c,m)+m):p&&(u+=p),this.add(a,"setProperty",c,u,i,s,0,0,g),o.push(g),R.push(g,0,a[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],tn(c)&&~c.indexOf("random(")&&(c=Yo(c)),cn(c+"")||c==="auto"||(c+=Wn.units[g]||cn(Ui(t,g))||""),(c+"").charAt(1)==="="&&(c=Ui(t,g))):c=Ui(t,g),d=parseFloat(c),M=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),g in vi&&(g==="autoAlpha"&&(d===1&&Ui(t,"visibility")==="hidden"&&h&&(d=0),R.push("visibility",0,a.visibility),nr(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=vi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in Vi,x){if(this.styles.save(g),f==="string"&&u.substring(0,6)==="var(--"&&(u=ni(t,u.substring(4,u.indexOf(")"))),h=parseFloat(u)),S||(C=t._gsap,C.renderTransform&&!e.parseTransform||Zo(t,e.parseTransform),b=e.smoothOrigin!==!1&&C.smooth,S=this._pt=new Cn(this._pt,a,Le,0,1,C.renderTransform,C,0,-1),S.dep=1),g==="scale")this._pt=new Cn(this._pt,C,"scaleY",C.scaleY,(M?Ds(C.scaleY,M+h):h)-C.scaleY||0,Hc),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(Rn,0,a[Rn]),u=lg(u),C.svg?Wc(t,u,0,b,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==C.zOrigin&&nr(this,C,"zOrigin",C.zOrigin,m),nr(this,a,g,dl(c),dl(u)));continue}else if(g==="svgOrigin"){Wc(t,u,1,b,0,this);continue}else if(g in Ip){fg(this,C,g,d,M?Ds(d,M+u):u);continue}else if(g==="smoothOrigin"){nr(this,C,"smooth",C.smooth,u);continue}else if(g==="force3D"){C[g]=u;continue}else if(g==="transform"){dg(this,u,t);continue}}else g in a||(g=Ys(g)||g);if(x||(h||h===0)&&(d||d===0)&&!$_.test(u)&&g in a)p=(c+"").substr((d+"").length),h||(h=0),m=cn(u)||(g in Wn.units?Wn.units[g]:p),p!==m&&(d=dr(t,g,c,m)),this._pt=new Cn(this._pt,x?C:a,g,d,(M?Ds(d,M+h):h)-d,!x&&(m==="px"||g==="zIndex")&&e.autoRound!==!1?J_:Hc),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=Z_);else if(g in a)ag.call(this,t,g,c,M?M+u:u);else if(g in t)this.add(t,g,c||t[g],M?M+u:u,i,s);else if(g!=="parseTransform"){ju(g,u);continue}x||(g in a?R.push(g,0,a[g]):typeof t[g]=="function"?R.push(g,2,t[g]()):R.push(g,1,c||t[g])),o.push(g)}}E&&Tp(this)},render:function(t,e){if(e.tween._time||!ch())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Ui,aliases:vi,getSetter:function(t,e,n){var i=vi[e];return i&&i.indexOf(",")<0&&(e=i),e in Vi&&e!==Rn&&(t._gsap.x||Ui(t,"x"))?n&&qh===n?e==="scale"?eg:tg:(qh=n||{})&&(e==="scale"?ng:ig):t.style&&!Ku(t.style[e])?j_:~e.indexOf("-")?Q_:oh(t,e)},core:{_removeProperty:Kr,_getMatrix:hh}};Pn.utils.checkPrefix=Ys;Pn.core.getStyleSaver=Rp;(function(r,t,e,n){var i=An(r+","+t+","+e,function(s){Vi[s]=1});An(t,function(s){Wn.units[s]="deg",Ip[s]=1}),vi[i[13]]=r+","+t,An(n,function(s){var o=s.split(":");vi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");An("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Wn.units[r]="px"});Pn.registerPlugin(Op);var $e=Pn.registerPlugin(Op)||Pn;$e.core.Tween;function pg(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function mg(r,t,e){return t&&pg(r.prototype,t),r}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var nn,$a,Hn,ir,rr,Ns,Fp,Cr,Po,Bp,Bi,li,zp,kp=function(){return nn||typeof window<"u"&&(nn=window.gsap)&&nn.registerPlugin&&nn},Hp=1,Ps=[],ie=[],Si=[],Lo=Date.now,Xc=function(t,e){return e},_g=function(){var t=Po.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ie),i.push.apply(i,Si),ie=n,Si=i,Xc=function(o,a){return e[o](a)}},ar=function(t,e){return~Si.indexOf(t)&&Si[Si.indexOf(t)+1][e]},Do=function(t){return!!~Bp.indexOf(t)},pn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},dn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},aa="scrollLeft",la="scrollTop",Yc=function(){return Bi&&Bi.isPressed||ie.cache++},pl=function(t,e){var n=function i(s){if(s||s===0){Hp&&(Hn.history.scrollRestoration="manual");var o=Bi&&Bi.isPressed;s=i.v=Math.round(s)||(Bi&&Bi.iOS?1:0),t(s),i.cacheID=ie.cache,o&&Xc("ss",s)}else(e||ie.cache!==i.cacheID||Xc("ref"))&&(i.cacheID=ie.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Sn={s:aa,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:pl(function(r){return arguments.length?Hn.scrollTo(r,Ge.sc()):Hn.pageXOffset||ir[aa]||rr[aa]||Ns[aa]||0})},Ge={s:la,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Sn,sc:pl(function(r){return arguments.length?Hn.scrollTo(Sn.sc(),r):Hn.pageYOffset||ir[la]||rr[la]||Ns[la]||0})},En=function(t,e){return(e&&e._ctx&&e._ctx.selector||nn.utils.toArray)(t)[0]||(typeof t=="string"&&nn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},gg=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},pr=function(t,e){var n=e.s,i=e.sc;Do(t)&&(t=ir.scrollingElement||rr);var s=ie.indexOf(t),o=i===Ge.sc?1:2;!~s&&(s=ie.push(t)-1),ie[s+o]||pn(t,"scroll",Yc);var a=ie[s+o],l=a||(ie[s+o]=pl(ar(t,n),!0)||(Do(t)?i:pl(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=nn.getProperty(t,"scrollBehavior")==="smooth"),l},qc=function(t,e,n){var i=t,s=t,o=Lo(),a=o,l=e||50,c=Math.max(500,l*3),u=function(_,g){var p=Lo();g||p-o>l?(s=i,i=_,a=o,o=p):n?i+=_:i=s+(_-s)/(p-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},d=function(_){var g=a,p=s,m=Lo();return(_||_===0)&&_!==i&&u(_),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-g)*1e3};return{update:u,reset:h,getVelocity:d}},so=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},nf=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Vp=function(){Po=nn.core.globals().ScrollTrigger,Po&&Po.core&&_g()},Gp=function(t){return nn=t||kp(),!$a&&nn&&typeof document<"u"&&document.body&&(Hn=window,ir=document,rr=ir.documentElement,Ns=ir.body,Bp=[Hn,ir,rr,Ns],nn.utils.clamp,zp=nn.core.context||function(){},Cr="onpointerenter"in Ns?"pointer":"mouse",Fp=Fe.isTouch=Hn.matchMedia&&Hn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Hn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,li=Fe.eventTypes=("ontouchstart"in rr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in rr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Hp=0},500),Vp(),$a=1),$a};Sn.op=Ge;ie.cache=0;var Fe=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){$a||Gp(nn)||console.warn("Please gsap.registerPlugin(Observer)"),Po||Vp();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,f=n.ignore,_=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,M=n.onDrag,x=n.onPress,S=n.onRelease,C=n.onRight,b=n.onLeft,E=n.onUp,R=n.onDown,F=n.onChangeX,v=n.onChangeY,T=n.onChange,U=n.onToggleX,z=n.onToggleY,$=n.onHover,J=n.onHoverEnd,G=n.onMove,K=n.ignoreCheck,k=n.isNormalizer,ut=n.onGestureStart,P=n.onGestureEnd,lt=n.onWheel,Vt=n.onEnable,Yt=n.onDisable,X=n.onClick,et=n.scrollSpeed,dt=n.capture,ot=n.allowClicks,bt=n.lockAxis,Tt=n.onLockAxis;this.target=a=En(a)||rr,this.vars=n,f&&(f=nn.utils.toArray(f)),i=i||1e-9,s=s||0,_=_||1,et=et||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Hn.getComputedStyle(Ns).lineHeight)||22);var qt,Wt,Bt,D,se,kt,Ut,B=this,$t=0,Pt=0,A=n.passive||!u&&n.passive!==!1,y=pr(a,Sn),H=pr(a,Ge),nt=y(),st=H(),j=~o.indexOf("touch")&&!~o.indexOf("pointer")&&li[0]==="pointerdown",Et=Do(a),q=a.ownerDocument||ir,it=[0,0,0],St=[0,0,0],Q=0,pt=function(){return Q=Lo()},at=function(Ct,he){return(B.event=Ct)&&f&&gg(Ct.target,f)||he&&j&&Ct.pointerType!=="touch"||K&&K(Ct,he)},ct=function(){B._vx.reset(),B._vy.reset(),Wt.pause(),h&&h(B)},rt=function(){var Ct=B.deltaX=nf(it),he=B.deltaY=nf(St),vt=Math.abs(Ct)>=i,Ht=Math.abs(he)>=i;T&&(vt||Ht)&&T(B,Ct,he,it,St),vt&&(C&&B.deltaX>0&&C(B),b&&B.deltaX<0&&b(B),F&&F(B),U&&B.deltaX<0!=$t<0&&U(B),$t=B.deltaX,it[0]=it[1]=it[2]=0),Ht&&(R&&B.deltaY>0&&R(B),E&&B.deltaY<0&&E(B),v&&v(B),z&&B.deltaY<0!=Pt<0&&z(B),Pt=B.deltaY,St[0]=St[1]=St[2]=0),(D||Bt)&&(G&&G(B),Bt&&(p&&Bt===1&&p(B),M&&M(B),Bt=0),D=!1),kt&&!(kt=!1)&&Tt&&Tt(B),se&&(lt(B),se=!1),qt=0},yt=function(Ct,he,vt){it[vt]+=Ct,St[vt]+=he,B._vx.update(Ct),B._vy.update(he),c?qt||(qt=requestAnimationFrame(rt)):rt()},wt=function(Ct,he){bt&&!Ut&&(B.axis=Ut=Math.abs(Ct)>Math.abs(he)?"x":"y",kt=!0),Ut!=="y"&&(it[2]+=Ct,B._vx.update(Ct,!0)),Ut!=="x"&&(St[2]+=he,B._vy.update(he,!0)),c?qt||(qt=requestAnimationFrame(rt)):rt()},Nt=function(Ct){if(!at(Ct,1)){Ct=so(Ct,u);var he=Ct.clientX,vt=Ct.clientY,Ht=he-B.x,Ot=vt-B.y,Xt=B.isDragging;B.x=he,B.y=vt,(Xt||(Ht||Ot)&&(Math.abs(B.startX-he)>=s||Math.abs(B.startY-vt)>=s))&&(Bt=Xt?2:1,Xt||(B.isDragging=!0),wt(Ht,Ot))}},I=B.onPress=function(Dt){at(Dt,1)||Dt&&Dt.button||(B.axis=Ut=null,Wt.pause(),B.isPressed=!0,Dt=so(Dt),$t=Pt=0,B.startX=B.x=Dt.clientX,B.startY=B.y=Dt.clientY,B._vx.reset(),B._vy.reset(),pn(k?a:q,li[1],Nt,A,!0),B.deltaX=B.deltaY=0,x&&x(B))},tt=B.onRelease=function(Dt){if(!at(Dt,1)){dn(k?a:q,li[1],Nt,!0);var Ct=!isNaN(B.y-B.startY),he=B.isDragging,vt=he&&(Math.abs(B.x-B.startX)>3||Math.abs(B.y-B.startY)>3),Ht=so(Dt);!vt&&Ct&&(B._vx.reset(),B._vy.reset(),u&&ot&&nn.delayedCall(.08,function(){if(Lo()-Q>300&&!Dt.defaultPrevented){if(Dt.target.click)Dt.target.click();else if(q.createEvent){var Ot=q.createEvent("MouseEvents");Ot.initMouseEvent("click",!0,!0,Hn,1,Ht.screenX,Ht.screenY,Ht.clientX,Ht.clientY,!1,!1,!1,!1,0,null),Dt.target.dispatchEvent(Ot)}}})),B.isDragging=B.isGesturing=B.isPressed=!1,h&&he&&!k&&Wt.restart(!0),Bt&&rt(),m&&he&&m(B),S&&S(B,vt)}},Y=function(Ct){return Ct.touches&&Ct.touches.length>1&&(B.isGesturing=!0)&&ut(Ct,B.isDragging)},Z=function(){return(B.isGesturing=!1)||P(B)},ft=function(Ct){if(!at(Ct)){var he=y(),vt=H();yt((he-nt)*et,(vt-st)*et,1),nt=he,st=vt,h&&Wt.restart(!0)}},mt=function(Ct){if(!at(Ct)){Ct=so(Ct,u),lt&&(se=!0);var he=(Ct.deltaMode===1?l:Ct.deltaMode===2?Hn.innerHeight:1)*_;yt(Ct.deltaX*he,Ct.deltaY*he,0),h&&!k&&Wt.restart(!0)}},Kt=function(Ct){if(!at(Ct)){var he=Ct.clientX,vt=Ct.clientY,Ht=he-B.x,Ot=vt-B.y;B.x=he,B.y=vt,D=!0,h&&Wt.restart(!0),(Ht||Ot)&&wt(Ht,Ot)}},xe=function(Ct){B.event=Ct,$(B)},Ae=function(Ct){B.event=Ct,J(B)},oe=function(Ct){return at(Ct)||so(Ct,u)&&X(B)};Wt=B._dc=nn.delayedCall(d||.25,ct).pause(),B.deltaX=B.deltaY=0,B._vx=qc(0,50,!0),B._vy=qc(0,50,!0),B.scrollX=y,B.scrollY=H,B.isDragging=B.isGesturing=B.isPressed=!1,zp(this),B.enable=function(Dt){return B.isEnabled||(pn(Et?q:a,"scroll",Yc),o.indexOf("scroll")>=0&&pn(Et?q:a,"scroll",ft,A,dt),o.indexOf("wheel")>=0&&pn(a,"wheel",mt,A,dt),(o.indexOf("touch")>=0&&Fp||o.indexOf("pointer")>=0)&&(pn(a,li[0],I,A,dt),pn(q,li[2],tt),pn(q,li[3],tt),ot&&pn(a,"click",pt,!0,!0),X&&pn(a,"click",oe),ut&&pn(q,"gesturestart",Y),P&&pn(q,"gestureend",Z),$&&pn(a,Cr+"enter",xe),J&&pn(a,Cr+"leave",Ae),G&&pn(a,Cr+"move",Kt)),B.isEnabled=!0,B.isDragging=B.isGesturing=B.isPressed=D=Bt=!1,B._vx.reset(),B._vy.reset(),nt=y(),st=H(),Dt&&Dt.type&&I(Dt),Vt&&Vt(B)),B},B.disable=function(){B.isEnabled&&(Ps.filter(function(Dt){return Dt!==B&&Do(Dt.target)}).length||dn(Et?q:a,"scroll",Yc),B.isPressed&&(B._vx.reset(),B._vy.reset(),dn(k?a:q,li[1],Nt,!0)),dn(Et?q:a,"scroll",ft,dt),dn(a,"wheel",mt,dt),dn(a,li[0],I,dt),dn(q,li[2],tt),dn(q,li[3],tt),dn(a,"click",pt,!0),dn(a,"click",oe),dn(q,"gesturestart",Y),dn(q,"gestureend",Z),dn(a,Cr+"enter",xe),dn(a,Cr+"leave",Ae),dn(a,Cr+"move",Kt),B.isEnabled=B.isPressed=B.isDragging=!1,Yt&&Yt(B))},B.kill=B.revert=function(){B.disable();var Dt=Ps.indexOf(B);Dt>=0&&Ps.splice(Dt,1),Bi===B&&(Bi=0)},Ps.push(B),k&&Do(a)&&(Bi=B),B.enable(g)},mg(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Fe.version="3.13.0";Fe.create=function(r){return new Fe(r)};Fe.register=Gp;Fe.getAll=function(){return Ps.slice()};Fe.getById=function(r){return Ps.filter(function(t){return t.vars.id===r})[0]};kp()&&nn.registerPlugin(Fe);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var At,ws,ne,Ee,Bn,pe,fh,ml,Jo,Io,Mo,ca,an,Al,$c,vn,rf,sf,bs,Wp,Vl,Xp,gn,Kc,Yp,qp,ji,Zc,dh,Os,ph,_l,Jc,Gl,ua=1,ln=Date.now,Wl=ln(),ii=0,So=0,of=function(t,e,n){var i=On(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},af=function(t,e){return e&&(!On(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},vg=function r(){return So&&requestAnimationFrame(r)},lf=function(){return Al=1},cf=function(){return Al=0},mi=function(t){return t},yo=function(t){return Math.round(t*1e5)/1e5||0},$p=function(){return typeof window<"u"},Kp=function(){return At||$p()&&(At=window.gsap)&&At.registerPlugin&&At},Zr=function(t){return!!~fh.indexOf(t)},Zp=function(t){return(t==="Height"?ph:ne["inner"+t])||Bn["client"+t]||pe["client"+t]},Jp=function(t){return ar(t,"getBoundingClientRect")||(Zr(t)?function(){return Qa.width=ne.innerWidth,Qa.height=ph,Qa}:function(){return Ni(t)})},xg=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=ar(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Zp(s):t["client"+s])||0}},Mg=function(t,e){return!e||~Si.indexOf(t)?Jp(t):function(){return Qa}},xi=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=ar(t,n))?o()-Jp(t)()[s]:Zr(t)?(Bn[n]||pe[n])-Zp(i):t[n]-t["offset"+i])},ha=function(t,e){for(var n=0;n<bs.length;n+=3)(!e||~e.indexOf(bs[n+1]))&&t(bs[n],bs[n+1],bs[n+2])},On=function(t){return typeof t=="string"},un=function(t){return typeof t=="function"},Eo=function(t){return typeof t=="number"},Rr=function(t){return typeof t=="object"},oo=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Xl=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},os=Math.abs,jp="left",Qp="top",mh="right",_h="bottom",Xr="width",Yr="height",Uo="Right",No="Left",Oo="Top",Fo="Bottom",ze="padding",jn="margin",qs="Width",gh="Height",Ve="px",Qn=function(t){return ne.getComputedStyle(t)},Sg=function(t){var e=Qn(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},uf=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Ni=function(t,e){var n=e&&Qn(t)[$c]!=="matrix(1, 0, 0, 1, 0, 0)"&&At.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},gl=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},tm=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},yg=function(t){return function(e){return At.utils.snap(tm(t),e)}},vh=function(t){var e=At.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},Eg=function(t){return function(e,n){return vh(tm(t))(e,n.direction)}},fa=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},Ze=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},Ke=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},da=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},hf={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},pa={toggleActions:"play",anticipatePin:0},vl={top:0,left:0,center:.5,bottom:1,right:1},Ka=function(t,e){if(On(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in vl?vl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},ma=function(t,e,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,d=s.indent,f=s.fontWeight,_=Ee.createElement("div"),g=Zr(n)||ar(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,m=g?pe:n,M=t.indexOf("start")!==-1,x=M?c:u,S="border-color:"+x+";font-size:"+h+";color:"+x+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(S+=(i===Ge?mh:_h)+":"+(o+parseFloat(d))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=M,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=S,_.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],Za(_,0,i,M),_},Za=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+qs]=1,s["border"+a+qs]=0,s[n.p]=e+"px",At.set(t,s)},ee=[],jc={},jo,ff=function(){return ln()-ii>34&&(jo||(jo=requestAnimationFrame(ki)))},as=function(){(!gn||!gn.isPressed||gn.startX>pe.clientWidth)&&(ie.cache++,gn?jo||(jo=requestAnimationFrame(ki)):ki(),ii||jr("scrollStart"),ii=ln())},Yl=function(){qp=ne.innerWidth,Yp=ne.innerHeight},To=function(t){ie.cache++,(t===!0||!an&&!Xp&&!Ee.fullscreenElement&&!Ee.webkitFullscreenElement&&(!Kc||qp!==ne.innerWidth||Math.abs(ne.innerHeight-Yp)>ne.innerHeight*.25))&&ml.restart(!0)},Jr={},Tg=[],em=function r(){return Ke(Qt,"scrollEnd",r)||Br(!0)},jr=function(t){return Jr[t]&&Jr[t].map(function(e){return e()})||Tg},Nn=[],nm=function(t){for(var e=0;e<Nn.length;e+=5)(!t||Nn[e+4]&&Nn[e+4].query===t)&&(Nn[e].style.cssText=Nn[e+1],Nn[e].getBBox&&Nn[e].setAttribute("transform",Nn[e+2]||""),Nn[e+3].uncache=1)},xh=function(t,e){var n;for(vn=0;vn<ee.length;vn++)n=ee[vn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));_l=!0,e&&nm(e),e||jr("revert")},im=function(t,e){ie.cache++,(e||!xn)&&ie.forEach(function(n){return un(n)&&n.cacheID++&&(n.rec=0)}),On(t)&&(ne.history.scrollRestoration=dh=t)},xn,qr=0,df,wg=function(){if(df!==qr){var t=df=qr;requestAnimationFrame(function(){return t===qr&&Br(!0)})}},rm=function(){pe.appendChild(Os),ph=!gn&&Os.offsetHeight||ne.innerHeight,pe.removeChild(Os)},pf=function(t){return Jo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Br=function(t,e){if(Bn=Ee.documentElement,pe=Ee.body,fh=[ne,Ee,Bn,pe],ii&&!t&&!_l){Ze(Qt,"scrollEnd",em);return}rm(),xn=Qt.isRefreshing=!0,ie.forEach(function(i){return un(i)&&++i.cacheID&&(i.rec=i())});var n=jr("refreshInit");Wp&&Qt.sort(),e||xh(),ie.forEach(function(i){un(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ee.slice(0).forEach(function(i){return i.refresh()}),_l=!1,ee.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Jc=1,pf(!0),ee.forEach(function(i){var s=xi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),pf(!1),Jc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ie.forEach(function(i){un(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),im(dh,1),ml.pause(),qr++,xn=2,ki(2),ee.forEach(function(i){return un(i.vars.onRefresh)&&i.vars.onRefresh(i)}),xn=Qt.isRefreshing=!1,jr("refresh")},Qc=0,Ja=1,Bo,ki=function(t){if(t===2||!xn&&!_l){Qt.isUpdating=!0,Bo&&Bo.update(0);var e=ee.length,n=ln(),i=n-Wl>=50,s=e&&ee[0].scroll();if(Ja=Qc>s?-1:1,xn||(Qc=s),i&&(ii&&!Al&&n-ii>200&&(ii=0,jr("scrollEnd")),Mo=Wl,Wl=n),Ja<0){for(vn=e;vn-- >0;)ee[vn]&&ee[vn].update(0,i);Ja=1}else for(vn=0;vn<e;vn++)ee[vn]&&ee[vn].update(0,i);Qt.isUpdating=!1}jo=0},tu=[jp,Qp,_h,mh,jn+Fo,jn+Uo,jn+Oo,jn+No,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ja=tu.concat([Xr,Yr,"boxSizing","max"+qs,"max"+gh,"position",jn,ze,ze+Oo,ze+Uo,ze+Fo,ze+No]),bg=function(t,e,n){Fs(n);var i=t._gsap;if(i.spacerIsNative)Fs(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},ql=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=tu.length,o=e.style,a=t.style,l;s--;)l=tu[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[_h]=a[mh]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Xr]=gl(t,Sn)+Ve,o[Yr]=gl(t,Ge)+Ve,o[ze]=a[jn]=a[Qp]=a[jp]="0",Fs(i),a[Xr]=a["max"+qs]=n[Xr],a[Yr]=a["max"+gh]=n[Yr],a[ze]=n[ze],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Ag=/([A-Z])/g,Fs=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||At.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(Ag,"-$1").toLowerCase())}},_a=function(t){for(var e=ja.length,n=t.style,i=[],s=0;s<e;s++)i.push(ja[s],n[ja[s]]);return i.t=t,i},Cg=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Qa={left:0,top:0},mf=function(t,e,n,i,s,o,a,l,c,u,h,d,f,_){un(t)&&(t=t(l)),On(t)&&t.substr(0,3)==="max"&&(t=d+(t.charAt(4)==="="?Ka("0"+t.substr(3),n):0));var g=f?f.time():0,p,m,M;if(f&&f.seek(0),isNaN(t)||(t=+t),Eo(t))f&&(t=At.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,t)),a&&Za(a,n,i,!0);else{un(e)&&(e=e(l));var x=(t||"0").split(" "),S,C,b,E;M=En(e,l)||pe,S=Ni(M)||{},(!S||!S.left&&!S.top)&&Qn(M).display==="none"&&(E=M.style.display,M.style.display="block",S=Ni(M),E?M.style.display=E:M.style.removeProperty("display")),C=Ka(x[0],S[i.d]),b=Ka(x[1]||"0",n),t=S[i.p]-c[i.p]-u+C+s-b,a&&Za(a,b,i,n-b<20||a._isStart&&b>20),n-=n-b}if(_&&(l[_]=t||-.001,t<0&&(t=0)),o){var R=t+n,F=o._isStart;p="scroll"+i.d2,Za(o,R,i,F&&R>20||!F&&(h?Math.max(pe[p],Bn[p]):o.parentNode[p])<=R+1),h&&(c=Ni(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Ve))}return f&&M&&(p=Ni(M),f.seek(d),m=Ni(M),f._caScrollDist=p[i.p]-m[i.p],t=t/f._caScrollDist*d),f&&f.seek(g),f?t:Math.round(t)},Rg=/(webkit|moz|length|cssText|inset)/i,_f=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===pe){t._stOrig=s.cssText,a=Qn(t);for(o in a)!+o&&!Rg.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;At.core.getCache(t).uncache=1,e.appendChild(t)}},sm=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},ga=function(t,e,n){var i={};i[e.p]="+="+n,At.set(t,i)},gf=function(t,e){var n=pr(t,e),i="_scroll"+e.p2,s=function o(a,l,c,u,h){var d=o.tween,f=l.onComplete,_={};c=c||n();var g=sm(n,c,function(){d.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){ie.cache++,o.tween&&ki()},l.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=At.to(t,l),d};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Ze(t,"wheel",n.wheelHandler),Qt.isTouch&&Ze(t,"touchmove",n.wheelHandler),s},Qt=function(){function r(e,n){ws||r.register(At)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Zc(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!So){this.update=this.refresh=this.kill=mi;return}n=uf(On(n)||Eo(n)||n.nodeType?{trigger:n}:n,pa);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,d=s.trigger,f=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,M=s.onSnapComplete,x=s.once,S=s.snap,C=s.pinReparent,b=s.pinSpacer,E=s.containerAnimation,R=s.fastScrollEnd,F=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Sn:Ge,T=!h&&h!==0,U=En(n.scroller||ne),z=At.core.getCache(U),$=Zr(U),J=("pinType"in n?n.pinType:ar(U,"pinType")||$&&"fixed")==="fixed",G=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],K=T&&n.toggleActions.split(" "),k="markers"in n?n.markers:pa.markers,ut=$?0:parseFloat(Qn(U)["border"+v.p2+qs])||0,P=this,lt=n.onRefreshInit&&function(){return n.onRefreshInit(P)},Vt=xg(U,$,v),Yt=Mg(U,$),X=0,et=0,dt=0,ot=pr(U,v),bt,Tt,qt,Wt,Bt,D,se,kt,Ut,B,$t,Pt,A,y,H,nt,st,j,Et,q,it,St,Q,pt,at,ct,rt,yt,wt,Nt,I,tt,Y,Z,ft,mt,Kt,xe,Ae;if(P._startClamp=P._endClamp=!1,P._dir=v,p*=45,P.scroller=U,P.scroll=E?E.time.bind(E):ot,Wt=ot(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(Wp=1,n.refreshPriority===-9999&&(Bo=P)),z.tweenScroll=z.tweenScroll||{top:gf(U,Ge),left:gf(U,Sn)},P.tweenTo=bt=z.tweenScroll[v.p],P.scrubDuration=function(vt){Y=Eo(vt)&&vt,Y?tt?tt.duration(vt):tt=At.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Y,paused:!0,onComplete:function(){return m&&m(P)}}):(tt&&tt.progress(1).kill(),tt=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(h),Nt=0,l||(l=i.vars.id)),S&&((!Rr(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in pe.style&&At.set($?[pe,Bn]:U,{scrollBehavior:"auto"}),ie.forEach(function(vt){return un(vt)&&vt.target===($?Ee.scrollingElement||Bn:U)&&(vt.smooth=!1)}),qt=un(S.snapTo)?S.snapTo:S.snapTo==="labels"?yg(i):S.snapTo==="labelsDirectional"?Eg(i):S.directional!==!1?function(vt,Ht){return vh(S.snapTo)(vt,ln()-et<500?0:Ht.direction)}:At.utils.snap(S.snapTo),Z=S.duration||{min:.1,max:2},Z=Rr(Z)?Io(Z.min,Z.max):Io(Z,Z),ft=At.delayedCall(S.delay||Y/2||.1,function(){var vt=ot(),Ht=ln()-et<500,Ot=bt.tween;if((Ht||Math.abs(P.getVelocity())<10)&&!Ot&&!Al&&X!==vt){var Xt=(vt-D)/y,Ie=i&&!T?i.totalProgress():Xt,Zt=Ht?0:(Ie-I)/(ln()-Mo)*1e3||0,Ce=At.utils.clamp(-Xt,1-Xt,os(Zt/2)*Zt/.185),Ue=Xt+(S.inertia===!1?0:Ce),Te,Me,_e=S,Ln=_e.onStart,we=_e.onInterrupt,w=_e.onComplete;if(Te=qt(Ue,P),Eo(Te)||(Te=Ue),Me=Math.max(0,Math.round(D+Te*y)),vt<=se&&vt>=D&&Me!==vt){if(Ot&&!Ot._initted&&Ot.data<=os(Me-vt))return;S.inertia===!1&&(Ce=Te-Xt),bt(Me,{duration:Z(os(Math.max(os(Ue-Ie),os(Te-Ie))*.185/Zt/.05||0)),ease:S.ease||"power3",data:os(Me-vt),onInterrupt:function(){return ft.restart(!0)&&we&&we(P)},onComplete:function(){P.update(),X=ot(),i&&!T&&(tt?tt.resetTo("totalProgress",Te,i._tTime/i._tDur):i.progress(Te)),Nt=I=i&&!T?i.totalProgress():P.progress,M&&M(P),w&&w(P)}},vt,Ce*y,Me-vt-Ce*y),Ln&&Ln(P,bt.tween)}}else P.isActive&&X!==vt&&ft.restart(!0)}).pause()),l&&(jc[l]=P),d=P.trigger=En(d||f!==!0&&f),Ae=d&&d._gsap&&d._gsap.stRevert,Ae&&(Ae=Ae(P)),f=f===!0?d:En(f),On(a)&&(a={targets:d,className:a}),f&&(_===!1||_===jn||(_=!_&&f.parentNode&&f.parentNode.style&&Qn(f.parentNode).display==="flex"?!1:ze),P.pin=f,Tt=At.core.getCache(f),Tt.spacer?H=Tt.pinState:(b&&(b=En(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),Tt.spacerIsNative=!!b,b&&(Tt.spacerState=_a(b))),Tt.spacer=j=b||Ee.createElement("div"),j.classList.add("pin-spacer"),l&&j.classList.add("pin-spacer-"+l),Tt.pinState=H=_a(f)),n.force3D!==!1&&At.set(f,{force3D:!0}),P.spacer=j=Tt.spacer,wt=Qn(f),pt=wt[_+v.os2],q=At.getProperty(f),it=At.quickSetter(f,v.a,Ve),ql(f,j,wt),st=_a(f)),k){Pt=Rr(k)?uf(k,hf):hf,B=ma("scroller-start",l,U,v,Pt,0),$t=ma("scroller-end",l,U,v,Pt,0,B),Et=B["offset"+v.op.d2];var oe=En(ar(U,"content")||U);kt=this.markerStart=ma("start",l,oe,v,Pt,Et,0,E),Ut=this.markerEnd=ma("end",l,oe,v,Pt,Et,0,E),E&&(xe=At.quickSetter([kt,Ut],v.a,Ve)),!J&&!(Si.length&&ar(U,"fixedMarkers")===!0)&&(Sg($?pe:U),At.set([B,$t],{force3D:!0}),ct=At.quickSetter(B,v.a,Ve),yt=At.quickSetter($t,v.a,Ve))}if(E){var Dt=E.vars.onUpdate,Ct=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){P.update(0,0,1),Dt&&Dt.apply(E,Ct||[])})}if(P.previous=function(){return ee[ee.indexOf(P)-1]},P.next=function(){return ee[ee.indexOf(P)+1]},P.revert=function(vt,Ht){if(!Ht)return P.kill(!0);var Ot=vt!==!1||!P.enabled,Xt=an;Ot!==P.isReverted&&(Ot&&(mt=Math.max(ot(),P.scroll.rec||0),dt=P.progress,Kt=i&&i.progress()),kt&&[kt,Ut,B,$t].forEach(function(Ie){return Ie.style.display=Ot?"none":"block"}),Ot&&(an=P,P.update(Ot)),f&&(!C||!P.isActive)&&(Ot?bg(f,j,H):ql(f,j,Qn(f),at)),Ot||P.update(Ot),an=Xt,P.isReverted=Ot)},P.refresh=function(vt,Ht,Ot,Xt){if(!((an||!P.enabled)&&!Ht)){if(f&&vt&&ii){Ze(r,"scrollEnd",em);return}!xn&&lt&&lt(P),an=P,bt.tween&&!Ot&&(bt.tween.kill(),bt.tween=0),tt&&tt.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(te){return te.vars.immediateRender&&te.render(0,!0,!0)})),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Ie=Vt(),Zt=Yt(),Ce=E?E.duration():xi(U,v),Ue=y<=.01||!y,Te=0,Me=Xt||0,_e=Rr(Ot)?Ot.end:n.end,Ln=n.endTrigger||d,we=Rr(Ot)?Ot.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),w=P.pinnedContainer=n.pinnedContainer&&En(n.pinnedContainer,P),O=d&&Math.max(0,ee.indexOf(P))||0,V=O,W,N,ht,Mt,gt,_t,Lt,Gt,Rt,le,ae,ge,Ye;for(k&&Rr(Ot)&&(ge=At.getProperty(B,v.p),Ye=At.getProperty($t,v.p));V-- >0;)_t=ee[V],_t.end||_t.refresh(0,1)||(an=P),Lt=_t.pin,Lt&&(Lt===d||Lt===f||Lt===w)&&!_t.isReverted&&(le||(le=[]),le.unshift(_t),_t.revert(!0,!0)),_t!==ee[V]&&(O--,V--);for(un(we)&&(we=we(P)),we=of(we,"start",P),D=mf(we,d,Ie,v,ot(),kt,B,P,Zt,ut,J,Ce,E,P._startClamp&&"_startClamp")||(f?-.001:0),un(_e)&&(_e=_e(P)),On(_e)&&!_e.indexOf("+=")&&(~_e.indexOf(" ")?_e=(On(we)?we.split(" ")[0]:"")+_e:(Te=Ka(_e.substr(2),Ie),_e=On(we)?we:(E?At.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,D):D)+Te,Ln=d)),_e=of(_e,"end",P),se=Math.max(D,mf(_e||(Ln?"100% 0":Ce),Ln,Ie,v,ot()+Te,Ut,$t,P,Zt,ut,J,Ce,E,P._endClamp&&"_endClamp"))||-.001,Te=0,V=O;V--;)_t=ee[V],Lt=_t.pin,Lt&&_t.start-_t._pinPush<=D&&!E&&_t.end>0&&(W=_t.end-(P._startClamp?Math.max(0,_t.start):_t.start),(Lt===d&&_t.start-_t._pinPush<D||Lt===w)&&isNaN(we)&&(Te+=W*(1-_t.progress)),Lt===f&&(Me+=W));if(D+=Te,se+=Te,P._startClamp&&(P._startClamp+=Te),P._endClamp&&!xn&&(P._endClamp=se||-.001,se=Math.min(se,xi(U,v))),y=se-D||(D-=.01)&&.001,Ue&&(dt=At.utils.clamp(0,1,At.utils.normalize(D,se,mt))),P._pinPush=Me,kt&&Te&&(W={},W[v.a]="+="+Te,w&&(W[v.p]="-="+ot()),At.set([kt,Ut],W)),f&&!(Jc&&P.end>=xi(U,v)))W=Qn(f),Mt=v===Ge,ht=ot(),St=parseFloat(q(v.a))+Me,!Ce&&se>1&&(ae=($?Ee.scrollingElement||Bn:U).style,ae={style:ae,value:ae["overflow"+v.a.toUpperCase()]},$&&Qn(pe)["overflow"+v.a.toUpperCase()]!=="scroll"&&(ae.style["overflow"+v.a.toUpperCase()]="scroll")),ql(f,j,W),st=_a(f),N=Ni(f,!0),Gt=J&&pr(U,Mt?Sn:Ge)(),_?(at=[_+v.os2,y+Me+Ve],at.t=j,V=_===ze?gl(f,v)+y+Me:0,V&&(at.push(v.d,V+Ve),j.style.flexBasis!=="auto"&&(j.style.flexBasis=V+Ve)),Fs(at),w&&ee.forEach(function(te){te.pin===w&&te.vars.pinSpacing!==!1&&(te._subPinOffset=!0)}),J&&ot(mt)):(V=gl(f,v),V&&j.style.flexBasis!=="auto"&&(j.style.flexBasis=V+Ve)),J&&(gt={top:N.top+(Mt?ht-D:Gt)+Ve,left:N.left+(Mt?Gt:ht-D)+Ve,boxSizing:"border-box",position:"fixed"},gt[Xr]=gt["max"+qs]=Math.ceil(N.width)+Ve,gt[Yr]=gt["max"+gh]=Math.ceil(N.height)+Ve,gt[jn]=gt[jn+Oo]=gt[jn+Uo]=gt[jn+Fo]=gt[jn+No]="0",gt[ze]=W[ze],gt[ze+Oo]=W[ze+Oo],gt[ze+Uo]=W[ze+Uo],gt[ze+Fo]=W[ze+Fo],gt[ze+No]=W[ze+No],nt=Cg(H,gt,C),xn&&ot(0)),i?(Rt=i._initted,Vl(1),i.render(i.duration(),!0,!0),Q=q(v.a)-St+y+Me,rt=Math.abs(y-Q)>1,J&&rt&&nt.splice(nt.length-2,2),i.render(0,!0,!0),Rt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Vl(0)):Q=y,ae&&(ae.value?ae.style["overflow"+v.a.toUpperCase()]=ae.value:ae.style.removeProperty("overflow-"+v.a));else if(d&&ot()&&!E)for(N=d.parentNode;N&&N!==pe;)N._pinOffset&&(D-=N._pinOffset,se-=N._pinOffset),N=N.parentNode;le&&le.forEach(function(te){return te.revert(!1,!0)}),P.start=D,P.end=se,Wt=Bt=xn?mt:ot(),!E&&!xn&&(Wt<mt&&ot(mt),P.scroll.rec=0),P.revert(!1,!0),et=ln(),ft&&(X=-1,ft.restart(!0)),an=0,i&&T&&(i._initted||Kt)&&i.progress()!==Kt&&i.progress(Kt||0,!0).render(i.time(),!0,!0),(Ue||dt!==P.progress||E||g||i&&!i._initted)&&(i&&!T&&(i._initted||dt||i.vars.immediateRender!==!1)&&i.totalProgress(E&&D<-.001&&!dt?At.utils.normalize(D,se,0):dt,!0),P.progress=Ue||(Wt-D)/y===dt?0:dt),f&&_&&(j._pinOffset=Math.round(P.progress*Q)),tt&&tt.invalidate(),isNaN(ge)||(ge-=At.getProperty(B,v.p),Ye-=At.getProperty($t,v.p),ga(B,v,ge),ga(kt,v,ge-(Xt||0)),ga($t,v,Ye),ga(Ut,v,Ye-(Xt||0))),Ue&&!xn&&P.update(),u&&!xn&&!A&&(A=!0,u(P),A=!1)}},P.getVelocity=function(){return(ot()-Bt)/(ln()-Mo)*1e3||0},P.endAnimation=function(){oo(P.callbackAnimation),i&&(tt?tt.progress(1):i.paused()?T||oo(i,P.direction<0,1):oo(i,i.reversed()))},P.labelToScroll=function(vt){return i&&i.labels&&(D||P.refresh()||D)+i.labels[vt]/i.duration()*y||0},P.getTrailing=function(vt){var Ht=ee.indexOf(P),Ot=P.direction>0?ee.slice(0,Ht).reverse():ee.slice(Ht+1);return(On(vt)?Ot.filter(function(Xt){return Xt.vars.preventOverlaps===vt}):Ot).filter(function(Xt){return P.direction>0?Xt.end<=D:Xt.start>=se})},P.update=function(vt,Ht,Ot){if(!(E&&!Ot&&!vt)){var Xt=xn===!0?mt:P.scroll(),Ie=vt?0:(Xt-D)/y,Zt=Ie<0?0:Ie>1?1:Ie||0,Ce=P.progress,Ue,Te,Me,_e,Ln,we,w,O;if(Ht&&(Bt=Wt,Wt=E?ot():Xt,S&&(I=Nt,Nt=i&&!T?i.totalProgress():Zt)),p&&f&&!an&&!ua&&ii&&(!Zt&&D<Xt+(Xt-Bt)/(ln()-Mo)*p?Zt=1e-4:Zt===1&&se>Xt+(Xt-Bt)/(ln()-Mo)*p&&(Zt=.9999)),Zt!==Ce&&P.enabled){if(Ue=P.isActive=!!Zt&&Zt<1,Te=!!Ce&&Ce<1,we=Ue!==Te,Ln=we||!!Zt!=!!Ce,P.direction=Zt>Ce?1:-1,P.progress=Zt,Ln&&!an&&(Me=Zt&&!Ce?0:Zt===1?1:Ce===1?2:3,T&&(_e=!we&&K[Me+1]!=="none"&&K[Me+1]||K[Me],O=i&&(_e==="complete"||_e==="reset"||_e in i))),F&&(we||O)&&(O||h||!i)&&(un(F)?F(P):P.getTrailing(F).forEach(function(ht){return ht.endAnimation()})),T||(tt&&!an&&!ua?(tt._dp._time-tt._start!==tt._time&&tt.render(tt._dp._time-tt._start),tt.resetTo?tt.resetTo("totalProgress",Zt,i._tTime/i._tDur):(tt.vars.totalProgress=Zt,tt.invalidate().restart())):i&&i.totalProgress(Zt,!!(an&&(et||vt)))),f){if(vt&&_&&(j.style[_+v.os2]=pt),!J)it(yo(St+Q*Zt));else if(Ln){if(w=!vt&&Zt>Ce&&se+1>Xt&&Xt+1>=xi(U,v),C)if(!vt&&(Ue||w)){var V=Ni(f,!0),W=Xt-D;_f(f,pe,V.top+(v===Ge?W:0)+Ve,V.left+(v===Ge?0:W)+Ve)}else _f(f,j);Fs(Ue||w?nt:st),rt&&Zt<1&&Ue||it(St+(Zt===1&&!w?Q:0))}}S&&!bt.tween&&!an&&!ua&&ft.restart(!0),a&&(we||x&&Zt&&(Zt<1||!Gl))&&Jo(a.targets).forEach(function(ht){return ht.classList[Ue||x?"add":"remove"](a.className)}),o&&!T&&!vt&&o(P),Ln&&!an?(T&&(O&&(_e==="complete"?i.pause().totalProgress(1):_e==="reset"?i.restart(!0).pause():_e==="restart"?i.restart(!0):i[_e]()),o&&o(P)),(we||!Gl)&&(c&&we&&Xl(P,c),G[Me]&&Xl(P,G[Me]),x&&(Zt===1?P.kill(!1,1):G[Me]=0),we||(Me=Zt===1?1:3,G[Me]&&Xl(P,G[Me]))),R&&!Ue&&Math.abs(P.getVelocity())>(Eo(R)?R:2500)&&(oo(P.callbackAnimation),tt?tt.progress(1):oo(i,_e==="reverse"?1:!Zt,1))):T&&o&&!an&&o(P)}if(yt){var N=E?Xt/E.duration()*(E._caScrollDist||0):Xt;ct(N+(B._isFlipped?1:0)),yt(N)}xe&&xe(-Xt/E.duration()*(E._caScrollDist||0))}},P.enable=function(vt,Ht){P.enabled||(P.enabled=!0,Ze(U,"resize",To),$||Ze(U,"scroll",as),lt&&Ze(r,"refreshInit",lt),vt!==!1&&(P.progress=dt=0,Wt=Bt=X=ot()),Ht!==!1&&P.refresh())},P.getTween=function(vt){return vt&&bt?bt.tween:tt},P.setPositions=function(vt,Ht,Ot,Xt){if(E){var Ie=E.scrollTrigger,Zt=E.duration(),Ce=Ie.end-Ie.start;vt=Ie.start+Ce*vt/Zt,Ht=Ie.start+Ce*Ht/Zt}P.refresh(!1,!1,{start:af(vt,Ot&&!!P._startClamp),end:af(Ht,Ot&&!!P._endClamp)},Xt),P.update()},P.adjustPinSpacing=function(vt){if(at&&vt){var Ht=at.indexOf(v.d)+1;at[Ht]=parseFloat(at[Ht])+vt+Ve,at[1]=parseFloat(at[1])+vt+Ve,Fs(at)}},P.disable=function(vt,Ht){if(P.enabled&&(vt!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,Ht||tt&&tt.pause(),mt=0,Tt&&(Tt.uncache=1),lt&&Ke(r,"refreshInit",lt),ft&&(ft.pause(),bt.tween&&bt.tween.kill()&&(bt.tween=0)),!$)){for(var Ot=ee.length;Ot--;)if(ee[Ot].scroller===U&&ee[Ot]!==P)return;Ke(U,"resize",To),$||Ke(U,"scroll",as)}},P.kill=function(vt,Ht){P.disable(vt,Ht),tt&&!Ht&&tt.kill(),l&&delete jc[l];var Ot=ee.indexOf(P);Ot>=0&&ee.splice(Ot,1),Ot===vn&&Ja>0&&vn--,Ot=0,ee.forEach(function(Xt){return Xt.scroller===P.scroller&&(Ot=1)}),Ot||xn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,vt&&i.revert({kill:!1}),Ht||i.kill()),kt&&[kt,Ut,B,$t].forEach(function(Xt){return Xt.parentNode&&Xt.parentNode.removeChild(Xt)}),Bo===P&&(Bo=0),f&&(Tt&&(Tt.uncache=1),Ot=0,ee.forEach(function(Xt){return Xt.pin===f&&Ot++}),Ot||(Tt.spacer=0)),n.onKill&&n.onKill(P)},ee.push(P),P.enable(!1,!1),Ae&&Ae(P),i&&i.add&&!y){var he=P.update;P.update=function(){P.update=he,ie.cache++,D||se||P.refresh()},At.delayedCall(.01,P.update),y=.01,D=se=0}else P.refresh();f&&wg()},r.register=function(n){return ws||(At=n||Kp(),$p()&&window.document&&r.enable(),ws=So),ws},r.defaults=function(n){if(n)for(var i in n)pa[i]=n[i];return pa},r.disable=function(n,i){So=0,ee.forEach(function(o){return o[i?"kill":"disable"](n)}),Ke(ne,"wheel",as),Ke(Ee,"scroll",as),clearInterval(ca),Ke(Ee,"touchcancel",mi),Ke(pe,"touchstart",mi),fa(Ke,Ee,"pointerdown,touchstart,mousedown",lf),fa(Ke,Ee,"pointerup,touchend,mouseup",cf),ml.kill(),ha(Ke);for(var s=0;s<ie.length;s+=3)da(Ke,ie[s],ie[s+1]),da(Ke,ie[s],ie[s+2])},r.enable=function(){if(ne=window,Ee=document,Bn=Ee.documentElement,pe=Ee.body,At&&(Jo=At.utils.toArray,Io=At.utils.clamp,Zc=At.core.context||mi,Vl=At.core.suppressOverwrites||mi,dh=ne.history.scrollRestoration||"auto",Qc=ne.pageYOffset||0,At.core.globals("ScrollTrigger",r),pe)){So=1,Os=document.createElement("div"),Os.style.height="100vh",Os.style.position="absolute",rm(),vg(),Fe.register(At),r.isTouch=Fe.isTouch,ji=Fe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Kc=Fe.isTouch===1,Ze(ne,"wheel",as),fh=[ne,Ee,Bn,pe],At.matchMedia?(r.matchMedia=function(c){var u=At.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},At.addEventListener("matchMediaInit",function(){return xh()}),At.addEventListener("matchMediaRevert",function(){return nm()}),At.addEventListener("matchMedia",function(){Br(0,1),jr("matchMedia")}),At.matchMedia().add("(orientation: portrait)",function(){return Yl(),Yl})):console.warn("Requires GSAP 3.11.0 or later"),Yl(),Ze(Ee,"scroll",as);var n=pe.hasAttribute("style"),i=pe.style,s=i.borderTopStyle,o=At.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Ni(pe),Ge.m=Math.round(a.top+Ge.sc())||0,Sn.m=Math.round(a.left+Sn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(pe.setAttribute("style",""),pe.removeAttribute("style")),ca=setInterval(ff,250),At.delayedCall(.5,function(){return ua=0}),Ze(Ee,"touchcancel",mi),Ze(pe,"touchstart",mi),fa(Ze,Ee,"pointerdown,touchstart,mousedown",lf),fa(Ze,Ee,"pointerup,touchend,mouseup",cf),$c=At.utils.checkPrefix("transform"),ja.push($c),ws=ln(),ml=At.delayedCall(.2,Br).pause(),bs=[Ee,"visibilitychange",function(){var c=ne.innerWidth,u=ne.innerHeight;Ee.hidden?(rf=c,sf=u):(rf!==c||sf!==u)&&To()},Ee,"DOMContentLoaded",Br,ne,"load",Br,ne,"resize",To],ha(Ze),ee.forEach(function(c){return c.enable(0,1)}),l=0;l<ie.length;l+=3)da(Ke,ie[l],ie[l+1]),da(Ke,ie[l],ie[l+2])}},r.config=function(n){"limitCallbacks"in n&&(Gl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ca)||(ca=i)&&setInterval(ff,i),"ignoreMobileResize"in n&&(Kc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ha(Ke)||ha(Ze,n.autoRefreshEvents||"none"),Xp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=En(n),o=ie.indexOf(s),a=Zr(s);~o&&ie.splice(o,a?6:2),i&&(a?Si.unshift(ne,i,pe,i,Bn,i):Si.unshift(s,i))},r.clearMatchMedia=function(n){ee.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(On(n)?En(n):n).getBoundingClientRect(),a=o[s?Xr:Yr]*i||0;return s?o.right-a>0&&o.left+a<ne.innerWidth:o.bottom-a>0&&o.top+a<ne.innerHeight},r.positionInViewport=function(n,i,s){On(n)&&(n=En(n));var o=n.getBoundingClientRect(),a=o[s?Xr:Yr],l=i==null?a/2:i in vl?vl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ne.innerWidth:(o.top+l)/ne.innerHeight},r.killAll=function(n){if(ee.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Jr.killAll||[];Jr={},i.forEach(function(s){return s()})}},r}();Qt.version="3.13.0";Qt.saveStyles=function(r){return r?Jo(r).forEach(function(t){if(t&&t.style){var e=Nn.indexOf(t);e>=0&&Nn.splice(e,5),Nn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),At.core.getCache(t),Zc())}}):Nn};Qt.revert=function(r,t){return xh(!r,t)};Qt.create=function(r,t){return new Qt(r,t)};Qt.refresh=function(r){return r?To(!0):(ws||Qt.register())&&Br(!0)};Qt.update=function(r){return++ie.cache&&ki(r===!0?2:0)};Qt.clearScrollMemory=im;Qt.maxScroll=function(r,t){return xi(r,t?Sn:Ge)};Qt.getScrollFunc=function(r,t){return pr(En(r),t?Sn:Ge)};Qt.getById=function(r){return jc[r]};Qt.getAll=function(){return ee.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Qt.isScrolling=function(){return!!ii};Qt.snapDirectional=vh;Qt.addEventListener=function(r,t){var e=Jr[r]||(Jr[r]=[]);~e.indexOf(t)||e.push(t)};Qt.removeEventListener=function(r,t){var e=Jr[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Qt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,u){var h=[],d=[],f=At.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(_){h.length||f.restart(!0),h.push(_.trigger),d.push(_),s<=h.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&un(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return un(s)&&(s=s(),Ze(Qt,"refresh",function(){return s=t.batchMax()})),Jo(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Qt.create(c))}),e};var vf=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},$l=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Fe.isTouch?" pinch-zoom":""):"none",t===Bn&&r(pe,e)},va={auto:1,scroll:1},Pg=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||At.core.getCache(s),a=ln(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==pe&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(va[(l=Qn(s)).overflowY]||va[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Zr(s)&&(va[(l=Qn(s)).overflowY]||va[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},om=function(t,e,n,i){return Fe.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&Pg,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Ze(Ee,Fe.eventTypes[0],Mf,!1,!0)},onDisable:function(){return Ke(Ee,Fe.eventTypes[0],Mf,!0)}})},Lg=/(input|label|select|textarea)/i,xf,Mf=function(t){var e=Lg.test(t.target.tagName);(e||xf)&&(t._gsapAllow=!0,xf=e)},Dg=function(t){Rr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=En(t.target)||Bn,u=At.core.globals().ScrollSmoother,h=u&&u.get(),d=ji&&(t.content&&En(t.content)||h&&t.content!==!1&&!h.smooth()&&h.content()),f=pr(c,Ge),_=pr(c,Sn),g=1,p=(Fe.isTouch&&ne.visualViewport?ne.visualViewport.scale*ne.visualViewport.width:ne.outerWidth)/ne.innerWidth,m=0,M=un(i)?function(){return i(a)}:function(){return i||2.8},x,S,C=om(c,t.type,!0,s),b=function(){return S=!1},E=mi,R=mi,F=function(){l=xi(c,Ge),R=Io(ji?1:0,l),n&&(E=Io(0,xi(c,Sn))),x=qr},v=function(){d._gsap.y=yo(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},T=function(){if(S){requestAnimationFrame(b);var k=yo(a.deltaY/2),ut=R(f.v-k);if(d&&ut!==f.v+f.offset){f.offset=ut-f.v;var P=yo((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",d._gsap.y=P+"px",f.cacheID=ie.cache,ki()}return!0}f.offset&&v(),S=!0},U,z,$,J,G=function(){F(),U.isActive()&&U.vars.scrollY>l&&(f()>l?U.progress(1)&&f(l):U.resetTo("scrollY",l))};return d&&At.set(d,{y:"+=0"}),t.ignoreCheck=function(K){return ji&&K.type==="touchmove"&&T()||g>1.05&&K.type!=="touchstart"||a.isGesturing||K.touches&&K.touches.length>1},t.onPress=function(){S=!1;var K=g;g=yo((ne.visualViewport&&ne.visualViewport.scale||1)/p),U.pause(),K!==g&&$l(c,g>1.01?!0:n?!1:"x"),z=_(),$=f(),F(),x=qr},t.onRelease=t.onGestureStart=function(K,k){if(f.offset&&v(),!k)J.restart(!0);else{ie.cache++;var ut=M(),P,lt;n&&(P=_(),lt=P+ut*.05*-K.velocityX/.227,ut*=vf(_,P,lt,xi(c,Sn)),U.vars.scrollX=E(lt)),P=f(),lt=P+ut*.05*-K.velocityY/.227,ut*=vf(f,P,lt,xi(c,Ge)),U.vars.scrollY=R(lt),U.invalidate().duration(ut).play(.01),(ji&&U.vars.scrollY>=l||P>=l-1)&&At.to({},{onUpdate:G,duration:ut})}o&&o(K)},t.onWheel=function(){U._ts&&U.pause(),ln()-m>1e3&&(x=0,m=ln())},t.onChange=function(K,k,ut,P,lt){if(qr!==x&&F(),k&&n&&_(E(P[2]===k?z+(K.startX-K.x):_()+k-P[1])),ut){f.offset&&v();var Vt=lt[2]===ut,Yt=Vt?$+K.startY-K.y:f()+ut-lt[1],X=R(Yt);Vt&&Yt!==X&&($+=X-Yt),f(X)}(ut||k)&&ki()},t.onEnable=function(){$l(c,n?!1:"x"),Qt.addEventListener("refresh",G),Ze(ne,"resize",G),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=_.smooth=!1),C.enable()},t.onDisable=function(){$l(c,!0),Ke(ne,"resize",G),Qt.removeEventListener("refresh",G),C.kill()},t.lockAxis=t.lockAxis!==!1,a=new Fe(t),a.iOS=ji,ji&&!f()&&f(1),ji&&At.ticker.add(mi),J=a._dc,U=At.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:sm(f,f(),function(){return U.pause()})},onUpdate:ki,onComplete:J.vars.onComplete}),a};Qt.sort=function(r){if(un(r))return ee.sort(r);var t=ne.pageYOffset||0;return Qt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ne.innerHeight}),ee.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Qt.observe=function(r){return new Fe(r)};Qt.normalizeScroll=function(r){if(typeof r>"u")return gn;if(r===!0&&gn)return gn.enable();if(r===!1){gn&&gn.kill(),gn=r;return}var t=r instanceof Fe?r:Dg(r);return gn&&gn.target===t.target&&gn.kill(),Zr(t.target)&&(gn=t),t};Qt.core={_getVelocityProp:qc,_inputObserver:om,_scrollers:ie,_proxies:Si,bridge:{ss:function(){ii||jr("scrollStart"),ii=ln()},ref:function(){return an}}};Kp()&&At.registerPlugin(Qt);var Ig="1.3.4";function am(r,t,e){return Math.max(r,Math.min(t,e))}function Ug(r,t,e){return(1-e)*r+e*t}function Ng(r,t,e,n){return Ug(r,t,1-Math.exp(-e*n))}function Og(r,t){return(r%t+t)%t}var Fg=class{constructor(){It(this,"isRunning",!1);It(this,"value",0);It(this,"from",0);It(this,"to",0);It(this,"currentTime",0);It(this,"lerp");It(this,"duration");It(this,"easing");It(this,"onUpdate")}advance(r){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=am(0,this.currentTime/this.duration,1);t=n>=1;const i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=Ng(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function Bg(r,t){let e;return function(...n){let i=this;clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(i,n)},t)}}var zg=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){It(this,"width",0);It(this,"height",0);It(this,"scrollHeight",0);It(this,"scrollWidth",0);It(this,"debouncedResize");It(this,"wrapperResizeObserver");It(this,"contentResizeObserver");It(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});It(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});It(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=Bg(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,t;(r=this.wrapperResizeObserver)==null||r.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},lm=class{constructor(){It(this,"events",{})}emit(r,...t){var n;let e=this.events[r]||[];for(let i=0,s=e.length;i<s;i++)(n=e[i])==null||n.call(e,...t)}on(r,t){var e;return(e=this.events[r])!=null&&e.push(t)||(this.events[r]=[t]),()=>{var n;this.events[r]=(n=this.events[r])==null?void 0:n.filter(i=>t!==i)}}off(r,t){var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}},Sf=100/6,Xi={passive:!1},kg=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){It(this,"touchStart",{x:0,y:0});It(this,"lastDelta",{x:0,y:0});It(this,"window",{width:0,height:0});It(this,"emitter",new lm);It(this,"onTouchStart",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});It(this,"onTouchMove",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});It(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});It(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r;const i=n===1?Sf:n===2?this.window.width:1,s=n===1?Sf:n===2?this.window.height:1;t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});It(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Xi),this.element.addEventListener("touchstart",this.onTouchStart,Xi),this.element.addEventListener("touchmove",this.onTouchMove,Xi),this.element.addEventListener("touchend",this.onTouchEnd,Xi)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Xi),this.element.removeEventListener("touchstart",this.onTouchStart,Xi),this.element.removeEventListener("touchmove",this.onTouchMove,Xi),this.element.removeEventListener("touchend",this.onTouchEnd,Xi)}},yf=r=>Math.min(1,1.001-Math.pow(2,-10*r)),Hg=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaMultiplier:o=35,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:d="vertical",touchMultiplier:f=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:p,virtualScroll:m,overscroll:M=!0,autoRaf:x=!1,anchors:S=!1,autoToggle:C=!1,allowNestedScroll:b=!1,__experimental__naiveDimensions:E=!1}={}){It(this,"_isScrolling",!1);It(this,"_isStopped",!1);It(this,"_isLocked",!1);It(this,"_preventNextNativeScrollEvent",!1);It(this,"_resetVelocityTimeout",null);It(this,"__rafID",null);It(this,"isTouching");It(this,"time",0);It(this,"userData",{});It(this,"lastVelocity",0);It(this,"velocity",0);It(this,"direction",0);It(this,"options");It(this,"targetScroll");It(this,"animatedScroll");It(this,"animate",new Fg);It(this,"emitter",new lm);It(this,"dimensions");It(this,"virtualScroll");It(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});It(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});It(this,"onTransitionEnd",r=>{if(r.propertyName.includes("overflow")){const t=this.isHorizontal?"overflow-x":"overflow-y",e=getComputedStyle(this.rootElement)[t];["hidden","clip"].includes(e)?this.stop():this.start()}});It(this,"onClick",r=>{const e=r.composedPath().find(n=>{var i,s,o;return n instanceof HTMLAnchorElement&&(((i=n.getAttribute("href"))==null?void 0:i.startsWith("#"))||((s=n.getAttribute("href"))==null?void 0:s.startsWith("/#"))||((o=n.getAttribute("href"))==null?void 0:o.startsWith("./#")))});if(e){const n=e.getAttribute("href");if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0;let s=`#${n.split("#")[1]}`;["#","/#","./#","#top","/#top","./#top"].includes(n)&&(s=0),this.scrollTo(s,i)}}});It(this,"onPointerDown",r=>{r.button===1&&this.reset()});It(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(p=>{var m,M,x;return p instanceof HTMLElement&&(typeof u=="function"&&(u==null?void 0:u(p))||((m=p.hasAttribute)==null?void 0:m.call(p,"data-lenis-prevent"))||i&&((M=p.hasAttribute)==null?void 0:M.call(p,"data-lenis-prevent-touch"))||s&&((x=p.hasAttribute)==null?void 0:x.call(p,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.checkNestedScroll(p,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.preventDefault();const f=i&&this.options.syncTouch,g=i&&n.type==="touchend"&&Math.abs(d)>5;g&&(d=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:g?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});It(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});It(this,"raf",r=>{const t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=Ig,(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=yf:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaMultiplier:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:d,orientation:h,touchMultiplier:f,wheelMultiplier:_,autoResize:g,prevent:p,virtualScroll:m,overscroll:M,autoRaf:x,anchors:S,autoToggle:C,allowNestedScroll:b,__experimental__naiveDimensions:E},this.dimensions=new zg(r,t,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new kg(e,{touchMultiplier:f,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,duration:i=this.options.duration,easing:s=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:l,force:c=!1,programmatic:u=!0,userData:h}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof r=="string"&&["top","left","start"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let d;if(typeof r=="string"?d=document.querySelector(r):r instanceof HTMLElement&&(r!=null&&r.nodeType)&&(d=r),d){if(this.options.wrapper!==window){const _=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?_.left:_.top}const f=d.getBoundingClientRect();r=(this.isHorizontal?f.left:f.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=t,r=Math.round(r),this.options.infinite){if(u){this.targetScroll=this.animatedScroll=this.scroll;const d=r-this.animatedScroll;d>this.limit/2?r=r-this.limit:d<-this.limit/2&&(r=r+this.limit)}}else r=am(0,r,this.limit);if(r===this.targetScroll){a==null||a(this),l==null||l(this);return}if(this.userData=h??{},e){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}u||(this.targetScroll=r),typeof i=="number"&&typeof s!="function"?s=yf:typeof s=="function"&&typeof i!="number"&&(i=1),this.animate.fromTo(this.animatedScroll,r,{duration:i,easing:s,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",a==null||a(this)},onUpdate:(d,f)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=d-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=d,this.setScroll(this.scroll),u&&(this.targetScroll=d),f||this.emit(),f&&(this.reset(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(r,{deltaX:t,deltaY:e}){const n=Date.now(),i=r._lenis??(r._lenis={});let s,o,a,l,c,u,h,d;const f=this.options.gestureOrientation;if(n-(i.time??0)>2e3){i.time=Date.now();const C=window.getComputedStyle(r);i.computedStyle=C;const b=C.overflowX,E=C.overflowY;if(s=["auto","overlay","scroll"].includes(b),o=["auto","overlay","scroll"].includes(E),i.hasOverflowX=s,i.hasOverflowY=o,!s&&!o||f==="vertical"&&!o||f==="horizontal"&&!s)return!1;c=r.scrollWidth,u=r.scrollHeight,h=r.clientWidth,d=r.clientHeight,a=c>h,l=u>d,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=c,i.scrollHeight=u,i.clientWidth=h,i.clientHeight=d}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,c=i.scrollWidth,u=i.scrollHeight,h=i.clientWidth,d=i.clientHeight;if(!s&&!o||!a&&!l||f==="vertical"&&(!o||!l)||f==="horizontal"&&(!s||!a))return!1;let _;if(f==="horizontal")_="x";else if(f==="vertical")_="y";else{const C=t!==0,b=e!==0;C&&s&&a&&(_="x"),b&&o&&l&&(_="y")}if(!_)return!1;let g,p,m,M,x;if(_==="x")g=r.scrollLeft,p=c-h,m=t,M=s,x=a;else if(_==="y")g=r.scrollTop,p=u-d,m=e,M=o,x=l;else return!1;return(m>0?g<p:g>0)&&M&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?Og(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mh="169",Vg=0,Ef=1,Gg=2,cm=1,um=2,Di=3,mr=0,yn=1,Oi=2,lr=0,Bs=1,Tf=2,wf=3,bf=4,Wg=5,Ir=100,Xg=101,Yg=102,qg=103,$g=104,Kg=200,Zg=201,Jg=202,jg=203,eu=204,nu=205,Qg=206,t0=207,e0=208,n0=209,i0=210,r0=211,s0=212,o0=213,a0=214,iu=0,ru=1,su=2,$s=3,ou=4,au=5,lu=6,cu=7,hm=0,l0=1,c0=2,cr=0,u0=1,h0=2,f0=3,d0=4,p0=5,m0=6,fm=7,dm=300,Ks=301,Zs=302,uu=303,hu=304,Cl=306,fu=1e3,zr=1001,du=1002,wn=1003,_0=1004,xa=1005,Vn=1006,Kl=1007,kr=1008,Gi=1009,pm=1010,mm=1011,Qo=1012,Sh=1013,Qr=1014,Mi=1015,ra=1016,yh=1017,Eh=1018,Js=1020,_m=35902,gm=1021,vm=1022,ui=1023,xm=1024,Mm=1025,zs=1026,js=1027,Th=1028,wh=1029,Sm=1030,bh=1031,Ah=1033,tl=33776,el=33777,nl=33778,il=33779,pu=35840,mu=35841,_u=35842,gu=35843,vu=36196,xu=37492,Mu=37496,Su=37808,yu=37809,Eu=37810,Tu=37811,wu=37812,bu=37813,Au=37814,Cu=37815,Ru=37816,Pu=37817,Lu=37818,Du=37819,Iu=37820,Uu=37821,rl=36492,Nu=36494,Ou=36495,ym=36283,Fu=36284,Bu=36285,zu=36286,g0=3200,v0=3201,Em=0,x0=1,Qi="",Tn="srgb",vr="srgb-linear",Ch="display-p3",Rl="display-p3-linear",xl="linear",be="srgb",Ml="rec709",Sl="p3",ls=7680,Af=519,M0=512,S0=513,y0=514,Tm=515,E0=516,T0=517,w0=518,b0=519,Cf=35044,Rf="300 es",zi=2e3,yl=2001;class to{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pf=1234567;const zo=Math.PI/180,ta=180/Math.PI;function eo(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[r&255]+sn[r>>8&255]+sn[r>>16&255]+sn[r>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function Je(r,t,e){return Math.max(t,Math.min(e,r))}function Rh(r,t){return(r%t+t)%t}function A0(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function C0(r,t,e){return r!==t?(e-r)/(t-r):0}function ko(r,t,e){return(1-e)*r+e*t}function R0(r,t,e,n){return ko(r,t,1-Math.exp(-e*n))}function P0(r,t=1){return t-Math.abs(Rh(r,t*2)-t)}function L0(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function D0(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function I0(r,t){return r+Math.floor(Math.random()*(t-r+1))}function U0(r,t){return r+Math.random()*(t-r)}function N0(r){return r*(.5-Math.random())}function O0(r){r!==void 0&&(Pf=r);let t=Pf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function F0(r){return r*zo}function B0(r){return r*ta}function z0(r){return(r&r-1)===0&&r!==0}function k0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function H0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function V0(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),u=o((t+n)/2),h=s((t-n)/2),d=o((t-n)/2),f=s((n-t)/2),_=o((n-t)/2);switch(i){case"XYX":r.set(a*u,l*h,l*d,a*c);break;case"YZY":r.set(l*d,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*d,a*u,a*c);break;case"XZX":r.set(a*u,l*_,l*f,a*c);break;case"YXY":r.set(l*f,a*u,l*_,a*c);break;case"ZYZ":r.set(l*_,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function As(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function mn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const G0={DEG2RAD:zo,RAD2DEG:ta,generateUUID:eo,clamp:Je,euclideanModulo:Rh,mapLinear:A0,inverseLerp:C0,lerp:ko,damp:R0,pingpong:P0,smoothstep:L0,smootherstep:D0,randInt:I0,randFloat:U0,randFloatSpread:N0,seededRandom:O0,degToRad:F0,radToDeg:B0,isPowerOfTwo:z0,ceilPowerOfTwo:k0,floorPowerOfTwo:H0,setQuaternionFromProperEuler:V0,normalize:mn,denormalize:As};class zt{constructor(t=0,e=0){zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,n,i,s,o,a,l,c){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],_=n[8],g=i[0],p=i[3],m=i[6],M=i[1],x=i[4],S=i[7],C=i[2],b=i[5],E=i[8];return s[0]=o*g+a*M+l*C,s[3]=o*p+a*x+l*b,s[6]=o*m+a*S+l*E,s[1]=c*g+u*M+h*C,s[4]=c*p+u*x+h*b,s[7]=c*m+u*S+h*E,s[2]=d*g+f*M+_*C,s[5]=d*p+f*x+_*b,s[8]=d*m+f*S+_*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,_=e*h+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=h*g,t[1]=(i*c-u*n)*g,t[2]=(a*n-i*o)*g,t[3]=d*g,t[4]=(u*e-i*l)*g,t[5]=(i*s-a*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Zl.makeScale(t,e)),this}rotate(t){return this.premultiply(Zl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Zl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zl=new jt;function wm(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ea(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function W0(){const r=ea("canvas");return r.style.display="block",r}const Lf={};function sl(r){r in Lf||(Lf[r]=!0,console.warn(r))}function X0(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Y0(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function q0(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Df=new jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),If=new jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ao={[vr]:{transfer:xl,primaries:Ml,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[Tn]:{transfer:be,primaries:Ml,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Rl]:{transfer:xl,primaries:Sl,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(If),fromReference:r=>r.applyMatrix3(Df)},[Ch]:{transfer:be,primaries:Sl,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(If),fromReference:r=>r.applyMatrix3(Df).convertLinearToSRGB()}},$0=new Set([vr,Rl]),me={enabled:!0,_workingColorSpace:vr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!$0.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=ao[t].toReference,i=ao[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return ao[r].primaries},getTransfer:function(r){return r===Qi?xl:ao[r].transfer},getLuminanceCoefficients:function(r,t=this._workingColorSpace){return r.fromArray(ao[t].luminanceCoefficients)}};function ks(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Jl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let cs;class K0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{cs===void 0&&(cs=ea("canvas")),cs.width=t.width,cs.height=t.height;const n=cs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=cs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ea("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ks(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ks(e[n]/255)*255):e[n]=ks(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Z0=0;class bm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=eo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(jl(i[o].image)):s.push(jl(i[o]))}else s=jl(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function jl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?K0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let J0=0;class je extends to{constructor(t=je.DEFAULT_IMAGE,e=je.DEFAULT_MAPPING,n=zr,i=zr,s=Vn,o=kr,a=ui,l=Gi,c=je.DEFAULT_ANISOTROPY,u=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=eo(),this.name="",this.source=new bm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fu:t.x=t.x-Math.floor(t.x);break;case zr:t.x=t.x<0?0:1;break;case du:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fu:t.y=t.y-Math.floor(t.y);break;case zr:t.y=t.y<0?0:1;break;case du:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=dm;je.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,i=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,S=(f+1)/2,C=(m+1)/2,b=(u+d)/4,E=(h+g)/4,R=(_+p)/4;return x>S&&x>C?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=b/n,s=E/n):S>C?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=b/i,s=R/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=E/s,i=R/s),this.set(n,i,s,e),this}let M=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(p-_)/M,this.y=(h-g)/M,this.z=(d-u)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class j0 extends to{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new je(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new bm(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ts extends j0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Am extends je{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=wn,this.minFilter=wn,this.wrapR=zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Q0 extends je{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=wn,this.minFilter=wn,this.wrapR=zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ur{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[o+0],f=s[o+1],_=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(h!==g||l!==d||c!==f||u!==_){let p=1-a;const m=l*d+c*f+u*_+h*g,M=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const C=Math.sqrt(x),b=Math.atan2(C,m*M);p=Math.sin(p*b)/C,a=Math.sin(a*b)/C}const S=a*M;if(l=l*p+d*S,c=c*p+f*S,u=u*p+_*S,h=h*p+g*S,p===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],f=s[o+2],_=s[o+3];return t[e]=a*_+u*h+l*f-c*d,t[e+1]=l*_+u*d+c*h-a*f,t[e+2]=c*_+u*f+a*d-l*h,t[e+3]=u*_-a*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),f=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"YZX":this._x=d*u*h+c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h-d*f*_;break;case"XZY":this._x=d*u*h-c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Je(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-s*i),h=2*(s*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ql.copy(this).projectOnVector(t),this.sub(Ql)}reflect(t){return this.sub(Ql.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ql=new L,Uf=new ur;class ns{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,si):si.fromBufferAttribute(s,o),si.applyMatrix4(t.matrixWorld),this.expandByPoint(si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ma.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ma.copy(n.boundingBox)),Ma.applyMatrix4(t.matrixWorld),this.union(Ma)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,si),si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(lo),Sa.subVectors(this.max,lo),us.subVectors(t.a,lo),hs.subVectors(t.b,lo),fs.subVectors(t.c,lo),Yi.subVectors(hs,us),qi.subVectors(fs,hs),Sr.subVectors(us,fs);let e=[0,-Yi.z,Yi.y,0,-qi.z,qi.y,0,-Sr.z,Sr.y,Yi.z,0,-Yi.x,qi.z,0,-qi.x,Sr.z,0,-Sr.x,-Yi.y,Yi.x,0,-qi.y,qi.x,0,-Sr.y,Sr.x,0];return!tc(e,us,hs,fs,Sa)||(e=[1,0,0,0,1,0,0,0,1],!tc(e,us,hs,fs,Sa))?!1:(ya.crossVectors(Yi,qi),e=[ya.x,ya.y,ya.z],tc(e,us,hs,fs,Sa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const wi=[new L,new L,new L,new L,new L,new L,new L,new L],si=new L,Ma=new ns,us=new L,hs=new L,fs=new L,Yi=new L,qi=new L,Sr=new L,lo=new L,Sa=new L,ya=new L,yr=new L;function tc(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){yr.fromArray(r,s);const a=i.x*Math.abs(yr.x)+i.y*Math.abs(yr.y)+i.z*Math.abs(yr.z),l=t.dot(yr),c=e.dot(yr),u=n.dot(yr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const tv=new ns,co=new L,ec=new L;class sa{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):tv.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;co.subVectors(t,this.center);const e=co.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(co,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ec.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(co.copy(t.center).add(ec)),this.expandByPoint(co.copy(t.center).sub(ec))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new L,nc=new L,Ea=new L,$i=new L,ic=new L,Ta=new L,rc=new L;class Cm{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bi.copy(this.origin).addScaledVector(this.direction,e),bi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){nc.copy(t).add(e).multiplyScalar(.5),Ea.copy(e).sub(t).normalize(),$i.copy(this.origin).sub(nc);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Ea),a=$i.dot(this.direction),l=-$i.dot(Ea),c=$i.lengthSq(),u=Math.abs(1-o*o);let h,d,f,_;if(u>0)if(h=o*l-a,d=o*a-l,_=s*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(nc).addScaledVector(Ea,d),f}intersectSphere(t,e){bi.subVectors(t.center,this.origin);const n=bi.dot(this.direction),i=bi.dot(bi)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,bi)!==null}intersectTriangle(t,e,n,i,s){ic.subVectors(e,t),Ta.subVectors(n,t),rc.crossVectors(ic,Ta);let o=this.direction.dot(rc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$i.subVectors(this.origin,t);const l=a*this.direction.dot(Ta.crossVectors($i,Ta));if(l<0)return null;const c=a*this.direction.dot(ic.cross($i));if(c<0||l+c>o)return null;const u=-a*$i.dot(rc);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,n,i,s,o,a,l,c,u,h,d,f,_,g,p){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,u,h,d,f,_,g,p)}set(t,e,n,i,s,o,a,l,c,u,h,d,f,_,g,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ds.setFromMatrixColumn(t,0).length(),s=1/ds.setFromMatrixColumn(t,1).length(),o=1/ds.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=o*u,f=o*h,_=a*u,g=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+_*c,e[5]=d-g*c,e[9]=-a*l,e[2]=g-d*c,e[6]=_+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,f=l*h,_=c*u,g=c*h;e[0]=d+g*a,e[4]=_*a-f,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-_,e[6]=g+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,f=l*h,_=c*u,g=c*h;e[0]=d-g*a,e[4]=-o*h,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*u,e[9]=g-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,f=o*h,_=a*u,g=a*h;e[0]=l*u,e[4]=_*c-f,e[8]=d*c+g,e[1]=l*h,e[5]=g*c+d,e[9]=f*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=g-d*h,e[8]=_*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*h+_,e[10]=d-g*h}else if(t.order==="XZY"){const d=o*l,f=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+g,e[5]=o*u,e[9]=f*h-_,e[2]=_*h-f,e[6]=a*u,e[10]=g*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ev,t,nv)}lookAt(t,e,n){const i=this.elements;return In.subVectors(t,e),In.lengthSq()===0&&(In.z=1),In.normalize(),Ki.crossVectors(n,In),Ki.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Ki.crossVectors(n,In)),Ki.normalize(),wa.crossVectors(In,Ki),i[0]=Ki.x,i[4]=wa.x,i[8]=In.x,i[1]=Ki.y,i[5]=wa.y,i[9]=In.y,i[2]=Ki.z,i[6]=wa.z,i[10]=In.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],_=n[2],g=n[6],p=n[10],m=n[14],M=n[3],x=n[7],S=n[11],C=n[15],b=i[0],E=i[4],R=i[8],F=i[12],v=i[1],T=i[5],U=i[9],z=i[13],$=i[2],J=i[6],G=i[10],K=i[14],k=i[3],ut=i[7],P=i[11],lt=i[15];return s[0]=o*b+a*v+l*$+c*k,s[4]=o*E+a*T+l*J+c*ut,s[8]=o*R+a*U+l*G+c*P,s[12]=o*F+a*z+l*K+c*lt,s[1]=u*b+h*v+d*$+f*k,s[5]=u*E+h*T+d*J+f*ut,s[9]=u*R+h*U+d*G+f*P,s[13]=u*F+h*z+d*K+f*lt,s[2]=_*b+g*v+p*$+m*k,s[6]=_*E+g*T+p*J+m*ut,s[10]=_*R+g*U+p*G+m*P,s[14]=_*F+g*z+p*K+m*lt,s[3]=M*b+x*v+S*$+C*k,s[7]=M*E+x*T+S*J+C*ut,s[11]=M*R+x*U+S*G+C*P,s[15]=M*F+x*z+S*K+C*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],_=t[3],g=t[7],p=t[11],m=t[15];return _*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*f-n*l*f)+g*(+e*l*f-e*c*d+s*o*d-i*o*f+i*c*u-s*l*u)+p*(+e*c*h-e*a*f-s*o*h+n*o*f+s*a*u-n*c*u)+m*(-i*a*u-e*l*h+e*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],_=t[12],g=t[13],p=t[14],m=t[15],M=h*p*c-g*d*c+g*l*f-a*p*f-h*l*m+a*d*m,x=_*d*c-u*p*c-_*l*f+o*p*f+u*l*m-o*d*m,S=u*g*c-_*h*c+_*a*f-o*g*f-u*a*m+o*h*m,C=_*h*l-u*g*l-_*a*d+o*g*d+u*a*p-o*h*p,b=e*M+n*x+i*S+s*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return t[0]=M*E,t[1]=(g*d*s-h*p*s-g*i*f+n*p*f+h*i*m-n*d*m)*E,t[2]=(a*p*s-g*l*s+g*i*c-n*p*c-a*i*m+n*l*m)*E,t[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*f-n*l*f)*E,t[4]=x*E,t[5]=(u*p*s-_*d*s+_*i*f-e*p*f-u*i*m+e*d*m)*E,t[6]=(_*l*s-o*p*s-_*i*c+e*p*c+o*i*m-e*l*m)*E,t[7]=(o*d*s-u*l*s+u*i*c-e*d*c-o*i*f+e*l*f)*E,t[8]=S*E,t[9]=(_*h*s-u*g*s-_*n*f+e*g*f+u*n*m-e*h*m)*E,t[10]=(o*g*s-_*a*s+_*n*c-e*g*c-o*n*m+e*a*m)*E,t[11]=(u*a*s-o*h*s-u*n*c+e*h*c+o*n*f-e*a*f)*E,t[12]=C*E,t[13]=(u*g*i-_*h*i+_*n*d-e*g*d-u*n*p+e*h*p)*E,t[14]=(_*a*i-o*g*i-_*n*l+e*g*l+o*n*p-e*a*p)*E,t[15]=(o*h*i-u*a*i+u*n*l-e*h*l-o*n*d+e*a*d)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,_=s*h,g=o*u,p=o*h,m=a*h,M=l*c,x=l*u,S=l*h,C=n.x,b=n.y,E=n.z;return i[0]=(1-(g+m))*C,i[1]=(f+S)*C,i[2]=(_-x)*C,i[3]=0,i[4]=(f-S)*b,i[5]=(1-(d+m))*b,i[6]=(p+M)*b,i[7]=0,i[8]=(_+x)*E,i[9]=(p-M)*E,i[10]=(1-(d+g))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ds.set(i[0],i[1],i[2]).length();const o=ds.set(i[4],i[5],i[6]).length(),a=ds.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],oi.copy(this);const c=1/s,u=1/o,h=1/a;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=u,oi.elements[5]*=u,oi.elements[6]*=u,oi.elements[8]*=h,oi.elements[9]*=h,oi.elements[10]*=h,e.setFromRotationMatrix(oi),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=zi){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i);let f,_;if(a===zi)f=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===yl)f=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=zi){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(o-s),d=(e+t)*c,f=(n+i)*u;let _,g;if(a===zi)_=(o+s)*h,g=-2*h;else if(a===yl)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ds=new L,oi=new ce,ev=new L(0,0,0),nv=new L(1,1,1),Ki=new L,wa=new L,In=new L,Nf=new ce,Of=new ur;class fi{constructor(t=0,e=0,n=0,i=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Of.setFromEuler(this),this.setFromQuaternion(Of,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class Ph{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let iv=0;const Ff=new L,ps=new ur,Ai=new ce,ba=new L,uo=new L,rv=new L,sv=new ur,Bf=new L(1,0,0),zf=new L(0,1,0),kf=new L(0,0,1),Hf={type:"added"},ov={type:"removed"},ms={type:"childadded",child:null},sc={type:"childremoved",child:null};class Qe extends to{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qe.DEFAULT_UP.clone();const t=new L,e=new fi,n=new ur,i=new L(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ce},normalMatrix:{value:new jt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=Qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ph,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(Bf,t)}rotateY(t){return this.rotateOnAxis(zf,t)}rotateZ(t){return this.rotateOnAxis(kf,t)}translateOnAxis(t,e){return Ff.copy(t).applyQuaternion(this.quaternion),this.position.add(Ff.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bf,t)}translateY(t){return this.translateOnAxis(zf,t)}translateZ(t){return this.translateOnAxis(kf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ba.copy(t):ba.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(uo,ba,this.up):Ai.lookAt(ba,uo,this.up),this.quaternion.setFromRotationMatrix(Ai),i&&(Ai.extractRotation(i.matrixWorld),ps.setFromRotationMatrix(Ai),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hf),ms.child=t,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ov),sc.child=t,this.dispatchEvent(sc),sc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hf),ms.child=t,this.dispatchEvent(ms),ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,t,rv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,sv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Qe.DEFAULT_UP=new L(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new L,Ci=new L,oc=new L,Ri=new L,_s=new L,gs=new L,Vf=new L,ac=new L,lc=new L,cc=new L,uc=new ve,hc=new ve,fc=new ve;class ci{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ai.subVectors(t,e),i.cross(ai);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){ai.subVectors(i,e),Ci.subVectors(n,e),oc.subVectors(t,e);const o=ai.dot(ai),a=ai.dot(Ci),l=ai.dot(oc),c=Ci.dot(Ci),u=Ci.dot(oc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,_=(o*u-a*l)*d;return s.set(1-f-_,_,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ri.x),l.addScaledVector(o,Ri.y),l.addScaledVector(a,Ri.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return uc.setScalar(0),hc.setScalar(0),fc.setScalar(0),uc.fromBufferAttribute(t,e),hc.fromBufferAttribute(t,n),fc.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(uc,s.x),o.addScaledVector(hc,s.y),o.addScaledVector(fc,s.z),o}static isFrontFacing(t,e,n,i){return ai.subVectors(n,e),Ci.subVectors(t,e),ai.cross(Ci).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ai.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ai.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ci.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return ci.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;_s.subVectors(i,n),gs.subVectors(s,n),ac.subVectors(t,n);const l=_s.dot(ac),c=gs.dot(ac);if(l<=0&&c<=0)return e.copy(n);lc.subVectors(t,i);const u=_s.dot(lc),h=gs.dot(lc);if(u>=0&&h<=u)return e.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(_s,o);cc.subVectors(t,s);const f=_s.dot(cc),_=gs.dot(cc);if(_>=0&&f<=_)return e.copy(s);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(gs,a);const p=u*_-f*h;if(p<=0&&h-u>=0&&f-_>=0)return Vf.subVectors(s,i),a=(h-u)/(h-u+(f-_)),e.copy(i).addScaledVector(Vf,a);const m=1/(p+g+d);return o=g*m,a=d*m,e.copy(n).addScaledVector(_s,o).addScaledVector(gs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Rm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function dc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class re{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=me.workingColorSpace){if(t=Rh(t,1),e=Je(e,0,1),n=Je(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=dc(o,s,t+1/3),this.g=dc(o,s,t),this.b=dc(o,s,t-1/3)}return me.toWorkingColorSpace(this,i),this}setStyle(t,e=Tn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Tn){const n=Rm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ks(t.r),this.g=ks(t.g),this.b=ks(t.b),this}copyLinearToSRGB(t){return this.r=Jl(t.r),this.g=Jl(t.g),this.b=Jl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Tn){return me.fromWorkingColorSpace(on.copy(this),t),Math.round(Je(on.r*255,0,255))*65536+Math.round(Je(on.g*255,0,255))*256+Math.round(Je(on.b*255,0,255))}getHexString(t=Tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.fromWorkingColorSpace(on.copy(this),e);const n=on.r,i=on.g,s=on.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=me.workingColorSpace){return me.fromWorkingColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=Tn){me.fromWorkingColorSpace(on.copy(this),t);const e=on.r,n=on.g,i=on.b;return t!==Tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Zi),this.setHSL(Zi.h+t,Zi.s+e,Zi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zi),t.getHSL(Aa);const n=ko(Zi.h,Aa.h,e),i=ko(Zi.s,Aa.s,e),s=ko(Zi.l,Aa.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new re;re.NAMES=Rm;let av=0;class no extends to{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=eo(),this.name="",this.type="Material",this.blending=Bs,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eu,this.blendDst=nu,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Af,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(n.blending=this.blending),this.side!==mr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==eu&&(n.blendSrc=this.blendSrc),this.blendDst!==nu&&(n.blendDst=this.blendDst),this.blendEquation!==Ir&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Af&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class na extends no{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=hm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Be=new L,Ca=new zt;class hi{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Cf,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ca.fromBufferAttribute(this,e),Ca.applyMatrix3(t),this.setXY(e,Ca.x,Ca.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=As(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=mn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=As(e,this.array)),e}setX(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=As(e,this.array)),e}setY(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=As(e,this.array)),e}setZ(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=As(e,this.array)),e}setW(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array),i=mn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array),i=mn(i,this.array),s=mn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Cf&&(t.usage=this.usage),t}}class Pm extends hi{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Lm extends hi{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class fn extends hi{constructor(t,e,n){super(new Float32Array(t),e,n)}}let lv=0;const $n=new ce,pc=new Qe,vs=new L,Un=new ns,ho=new ns,qe=new L;class Ei extends to{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=eo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wm(t)?Lm:Pm)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $n.makeRotationFromQuaternion(t),this.applyMatrix4($n),this}rotateX(t){return $n.makeRotationX(t),this.applyMatrix4($n),this}rotateY(t){return $n.makeRotationY(t),this.applyMatrix4($n),this}rotateZ(t){return $n.makeRotationZ(t),this.applyMatrix4($n),this}translate(t,e,n){return $n.makeTranslation(t,e,n),this.applyMatrix4($n),this}scale(t,e,n){return $n.makeScale(t,e,n),this.applyMatrix4($n),this}lookAt(t){return pc.lookAt(t),pc.updateMatrix(),this.applyMatrix4(pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new fn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Un.setFromBufferAttribute(s),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Un.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];ho.setFromBufferAttribute(a),this.morphTargetsRelative?(qe.addVectors(Un.min,ho.min),Un.expandByPoint(qe),qe.addVectors(Un.max,ho.max),Un.expandByPoint(qe)):(Un.expandByPoint(ho.min),Un.expandByPoint(ho.max))}Un.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)qe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(qe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)qe.fromBufferAttribute(a,c),l&&(vs.fromBufferAttribute(t,c),qe.add(vs)),i=Math.max(i,n.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new L,l[R]=new L;const c=new L,u=new L,h=new L,d=new zt,f=new zt,_=new zt,g=new L,p=new L;function m(R,F,v){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,F),h.fromBufferAttribute(n,v),d.fromBufferAttribute(s,R),f.fromBufferAttribute(s,F),_.fromBufferAttribute(s,v),u.sub(c),h.sub(c),f.sub(d),_.sub(d);const T=1/(f.x*_.y-_.x*f.y);isFinite(T)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(T),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(T),a[R].add(g),a[F].add(g),a[v].add(g),l[R].add(p),l[F].add(p),l[v].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,F=M.length;R<F;++R){const v=M[R],T=v.start,U=v.count;for(let z=T,$=T+U;z<$;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const x=new L,S=new L,C=new L,b=new L;function E(R){C.fromBufferAttribute(i,R),b.copy(C);const F=a[R];x.copy(F),x.sub(C.multiplyScalar(C.dot(F))).normalize(),S.crossVectors(b,F);const T=S.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,T)}for(let R=0,F=M.length;R<F;++R){const v=M[R],T=v.start,U=v.count;for(let z=T,$=T+U;z<$;z+=3)E(t.getX(z+0)),E(t.getX(z+1)),E(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new L,s=new L,o=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){const _=t.getX(d+0),g=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,p),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*u;for(let m=0;m<u;m++)d[_++]=c[f++]}return new hi(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ei,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gf=new ce,Er=new Cm,Ra=new sa,Wf=new L,Pa=new L,La=new L,Da=new L,mc=new L,Ia=new L,Xf=new L,Ua=new L;class fe extends Qe{constructor(t=new Ei,e=new na){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Ia.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(mc.fromBufferAttribute(h,t),o?Ia.addScaledVector(mc,u):Ia.addScaledVector(mc.sub(e),u))}e.add(Ia)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(s),Er.copy(t.ray).recast(t.near),!(Ra.containsPoint(Er.origin)===!1&&(Er.intersectSphere(Ra,Wf)===null||Er.origin.distanceToSquared(Wf)>(t.far-t.near)**2))&&(Gf.copy(s).invert(),Er.copy(t.ray).applyMatrix4(Gf),!(n.boundingBox!==null&&Er.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Er)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const p=d[_],m=o[p.materialIndex],M=Math.max(p.start,f.start),x=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let S=M,C=x;S<C;S+=3){const b=a.getX(S),E=a.getX(S+1),R=a.getX(S+2);i=Na(this,m,t,n,c,u,h,b,E,R),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const M=a.getX(p),x=a.getX(p+1),S=a.getX(p+2);i=Na(this,o,t,n,c,u,h,M,x,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const p=d[_],m=o[p.materialIndex],M=Math.max(p.start,f.start),x=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let S=M,C=x;S<C;S+=3){const b=S,E=S+1,R=S+2;i=Na(this,m,t,n,c,u,h,b,E,R),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const M=p,x=p+1,S=p+2;i=Na(this,o,t,n,c,u,h,M,x,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function cv(r,t,e,n,i,s,o,a){let l;if(t.side===yn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===mr,a),l===null)return null;Ua.copy(a),Ua.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Ua);return c<e.near||c>e.far?null:{distance:c,point:Ua.clone(),object:r}}function Na(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Pa),r.getVertexPosition(l,La),r.getVertexPosition(c,Da);const u=cv(r,t,e,n,Pa,La,Da,Xf);if(u){const h=new L;ci.getBarycoord(Xf,Pa,La,Da,h),i&&(u.uv=ci.getInterpolatedAttribute(i,a,l,c,h,new zt)),s&&(u.uv1=ci.getInterpolatedAttribute(s,a,l,c,h,new zt)),o&&(u.normal=ci.getInterpolatedAttribute(o,a,l,c,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};ci.getNormal(Pa,La,Da,d.normal),u.face=d,u.barycoord=h}return u}class is extends Ei{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new fn(c,3)),this.setAttribute("normal",new fn(u,3)),this.setAttribute("uv",new fn(h,2));function _(g,p,m,M,x,S,C,b,E,R,F){const v=S/E,T=C/R,U=S/2,z=C/2,$=b/2,J=E+1,G=R+1;let K=0,k=0;const ut=new L;for(let P=0;P<G;P++){const lt=P*T-z;for(let Vt=0;Vt<J;Vt++){const Yt=Vt*v-U;ut[g]=Yt*M,ut[p]=lt*x,ut[m]=$,c.push(ut.x,ut.y,ut.z),ut[g]=0,ut[p]=0,ut[m]=b>0?1:-1,u.push(ut.x,ut.y,ut.z),h.push(Vt/E),h.push(1-P/R),K+=1}}for(let P=0;P<R;P++)for(let lt=0;lt<E;lt++){const Vt=d+lt+J*P,Yt=d+lt+J*(P+1),X=d+(lt+1)+J*(P+1),et=d+(lt+1)+J*P;l.push(Vt,Yt,et),l.push(Yt,X,et),k+=6}a.addGroup(f,k,F),f+=k,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new is(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Qs(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function _n(r){const t={};for(let e=0;e<r.length;e++){const n=Qs(r[e]);for(const i in n)t[i]=n[i]}return t}function uv(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Dm(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}const hv={clone:Qs,merge:_n};var fv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _r extends no{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fv,this.fragmentShader=dv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qs(t.uniforms),this.uniformsGroups=uv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Im extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=zi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ji=new L,Yf=new zt,qf=new zt;class zn extends Im{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ta*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ta*2*Math.atan(Math.tan(zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z)}getViewSize(t,e){return this.getViewBounds(t,Yf,qf),e.subVectors(qf,Yf)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(zo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const xs=-90,Ms=1;class pv extends Qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new zn(xs,Ms,t,e);i.layers=this.layers,this.add(i);const s=new zn(xs,Ms,t,e);s.layers=this.layers,this.add(s);const o=new zn(xs,Ms,t,e);o.layers=this.layers,this.add(o);const a=new zn(xs,Ms,t,e);a.layers=this.layers,this.add(a);const l=new zn(xs,Ms,t,e);l.layers=this.layers,this.add(l);const c=new zn(xs,Ms,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===zi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===yl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Um extends je{constructor(t,e,n,i,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Ks,super(t,e,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class mv extends ts{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Um(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Vn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new is(5,5,5),s=new _r({name:"CubemapFromEquirect",uniforms:Qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:lr});s.uniforms.tEquirect.value=e;const o=new fe(i,s),a=e.minFilter;return e.minFilter===kr&&(e.minFilter=Vn),new pv(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const _c=new L,_v=new L,gv=new jt;class Pr{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=_c.subVectors(n,e).cross(_v.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(_c),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||gv.getNormalMatrix(t),i=this.coplanarPoint(_c).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new sa,Oa=new L;class Lh{constructor(t=new Pr,e=new Pr,n=new Pr,i=new Pr,s=new Pr,o=new Pr){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zi){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],_=i[9],g=i[10],p=i[11],m=i[12],M=i[13],x=i[14],S=i[15];if(n[0].setComponents(l-s,d-c,p-f,S-m).normalize(),n[1].setComponents(l+s,d+c,p+f,S+m).normalize(),n[2].setComponents(l+o,d+u,p+_,S+M).normalize(),n[3].setComponents(l-o,d-u,p-_,S-M).normalize(),n[4].setComponents(l-a,d-h,p-g,S-x).normalize(),e===zi)n[5].setComponents(l+a,d+h,p+g,S+x).normalize();else if(e===yl)n[5].setComponents(a,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Tr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(t){return Tr.center.set(0,0,0),Tr.radius=.7071067811865476,Tr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Oa.x=i.normal.x>0?t.max.x:t.min.x,Oa.y=i.normal.y>0?t.max.y:t.min.y,Oa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Oa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nm(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function vv(r){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<h.length;f++){const _=h[d],g=h[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,h[d]=g)}h.length=d+1;for(let f=0,_=h.length;f<_;f++){const g=h[f];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class $r extends Ei{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=t/a,d=e/l,f=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const M=m*d-o;for(let x=0;x<c;x++){const S=x*h-s;_.push(S,-M,0),g.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const x=M+c*m,S=M+c*(m+1),C=M+1+c*(m+1),b=M+1+c*m;f.push(x,S,b),f.push(S,C,b)}this.setIndex(f),this.setAttribute("position",new fn(_,3)),this.setAttribute("normal",new fn(g,3)),this.setAttribute("uv",new fn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $r(t.width,t.height,t.widthSegments,t.heightSegments)}}var xv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Sv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ev=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Av=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Cv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Dv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Iv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Uv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ov=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Vv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$v=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zv=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ex=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ix=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ox=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ax=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ux=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,px=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_x=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ex=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ax=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Px=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ix=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ux=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Nx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ox=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Fx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Vx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$x=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,eM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,iM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,oM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_M=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,AM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,CM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,IM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,FM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,GM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$M=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ZM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jt={alphahash_fragment:xv,alphahash_pars_fragment:Mv,alphamap_fragment:Sv,alphamap_pars_fragment:yv,alphatest_fragment:Ev,alphatest_pars_fragment:Tv,aomap_fragment:wv,aomap_pars_fragment:bv,batching_pars_vertex:Av,batching_vertex:Cv,begin_vertex:Rv,beginnormal_vertex:Pv,bsdfs:Lv,iridescence_fragment:Dv,bumpmap_pars_fragment:Iv,clipping_planes_fragment:Uv,clipping_planes_pars_fragment:Nv,clipping_planes_pars_vertex:Ov,clipping_planes_vertex:Fv,color_fragment:Bv,color_pars_fragment:zv,color_pars_vertex:kv,color_vertex:Hv,common:Vv,cube_uv_reflection_fragment:Gv,defaultnormal_vertex:Wv,displacementmap_pars_vertex:Xv,displacementmap_vertex:Yv,emissivemap_fragment:qv,emissivemap_pars_fragment:$v,colorspace_fragment:Kv,colorspace_pars_fragment:Zv,envmap_fragment:Jv,envmap_common_pars_fragment:jv,envmap_pars_fragment:Qv,envmap_pars_vertex:tx,envmap_physical_pars_fragment:hx,envmap_vertex:ex,fog_vertex:nx,fog_pars_vertex:ix,fog_fragment:rx,fog_pars_fragment:sx,gradientmap_pars_fragment:ox,lightmap_pars_fragment:ax,lights_lambert_fragment:lx,lights_lambert_pars_fragment:cx,lights_pars_begin:ux,lights_toon_fragment:fx,lights_toon_pars_fragment:dx,lights_phong_fragment:px,lights_phong_pars_fragment:mx,lights_physical_fragment:_x,lights_physical_pars_fragment:gx,lights_fragment_begin:vx,lights_fragment_maps:xx,lights_fragment_end:Mx,logdepthbuf_fragment:Sx,logdepthbuf_pars_fragment:yx,logdepthbuf_pars_vertex:Ex,logdepthbuf_vertex:Tx,map_fragment:wx,map_pars_fragment:bx,map_particle_fragment:Ax,map_particle_pars_fragment:Cx,metalnessmap_fragment:Rx,metalnessmap_pars_fragment:Px,morphinstance_vertex:Lx,morphcolor_vertex:Dx,morphnormal_vertex:Ix,morphtarget_pars_vertex:Ux,morphtarget_vertex:Nx,normal_fragment_begin:Ox,normal_fragment_maps:Fx,normal_pars_fragment:Bx,normal_pars_vertex:zx,normal_vertex:kx,normalmap_pars_fragment:Hx,clearcoat_normal_fragment_begin:Vx,clearcoat_normal_fragment_maps:Gx,clearcoat_pars_fragment:Wx,iridescence_pars_fragment:Xx,opaque_fragment:Yx,packing:qx,premultiplied_alpha_fragment:$x,project_vertex:Kx,dithering_fragment:Zx,dithering_pars_fragment:Jx,roughnessmap_fragment:jx,roughnessmap_pars_fragment:Qx,shadowmap_pars_fragment:tM,shadowmap_pars_vertex:eM,shadowmap_vertex:nM,shadowmask_pars_fragment:iM,skinbase_vertex:rM,skinning_pars_vertex:sM,skinning_vertex:oM,skinnormal_vertex:aM,specularmap_fragment:lM,specularmap_pars_fragment:cM,tonemapping_fragment:uM,tonemapping_pars_fragment:hM,transmission_fragment:fM,transmission_pars_fragment:dM,uv_pars_fragment:pM,uv_pars_vertex:mM,uv_vertex:_M,worldpos_vertex:gM,background_vert:vM,background_frag:xM,backgroundCube_vert:MM,backgroundCube_frag:SM,cube_vert:yM,cube_frag:EM,depth_vert:TM,depth_frag:wM,distanceRGBA_vert:bM,distanceRGBA_frag:AM,equirect_vert:CM,equirect_frag:RM,linedashed_vert:PM,linedashed_frag:LM,meshbasic_vert:DM,meshbasic_frag:IM,meshlambert_vert:UM,meshlambert_frag:NM,meshmatcap_vert:OM,meshmatcap_frag:FM,meshnormal_vert:BM,meshnormal_frag:zM,meshphong_vert:kM,meshphong_frag:HM,meshphysical_vert:VM,meshphysical_frag:GM,meshtoon_vert:WM,meshtoon_frag:XM,points_vert:YM,points_frag:qM,shadow_vert:$M,shadow_frag:KM,sprite_vert:ZM,sprite_frag:JM},xt={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},_i={basic:{uniforms:_n([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:_n([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new re(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:_n([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:_n([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:_n([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new re(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:_n([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:_n([xt.points,xt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:_n([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:_n([xt.common,xt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:_n([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:_n([xt.sprite,xt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:_n([xt.common,xt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:_n([xt.lights,xt.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};_i.physical={uniforms:_n([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const Fa={r:0,b:0,g:0},wr=new fi,jM=new ce;function QM(r,t,e,n,i,s,o){const a=new re(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function _(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function g(M){let x=!1;const S=_(M);S===null?m(a,l):S&&S.isColor&&(m(S,1),x=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(M,x){const S=_(x);S&&(S.isCubeTexture||S.mapping===Cl)?(u===void 0&&(u=new fe(new is(1,1,1),new _r({name:"BackgroundCubeMaterial",uniforms:Qs(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),wr.copy(x.backgroundRotation),wr.x*=-1,wr.y*=-1,wr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(jM.makeRotationFromEuler(wr)),u.material.toneMapped=me.getTransfer(S.colorSpace)!==be,(h!==S||d!==S.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=S,d=S.version,f=r.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new fe(new $r(2,2),new _r({name:"BackgroundMaterial",uniforms:Qs(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=me.getTransfer(S.colorSpace)!==be,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,f=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,x){M.getRGB(Fa,Dm(r)),n.buffers.color.setClear(Fa.r,Fa.g,Fa.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(a,l)},render:g,addToRenderList:p}}function tS(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(v,T,U,z,$){let J=!1;const G=h(z,U,T);s!==G&&(s=G,c(s.object)),J=f(v,z,U,$),J&&_(v,z,U,$),$!==null&&t.update($,r.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,S(v,T,U,z),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function h(v,T,U){const z=U.wireframe===!0;let $=n[v.id];$===void 0&&($={},n[v.id]=$);let J=$[T.id];J===void 0&&(J={},$[T.id]=J);let G=J[z];return G===void 0&&(G=d(l()),J[z]=G),G}function d(v){const T=[],U=[],z=[];for(let $=0;$<e;$++)T[$]=0,U[$]=0,z[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:U,attributeDivisors:z,object:v,attributes:{},index:null}}function f(v,T,U,z){const $=s.attributes,J=T.attributes;let G=0;const K=U.getAttributes();for(const k in K)if(K[k].location>=0){const P=$[k];let lt=J[k];if(lt===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(lt=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(lt=v.instanceColor)),P===void 0||P.attribute!==lt||lt&&P.data!==lt.data)return!0;G++}return s.attributesNum!==G||s.index!==z}function _(v,T,U,z){const $={},J=T.attributes;let G=0;const K=U.getAttributes();for(const k in K)if(K[k].location>=0){let P=J[k];P===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(P=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(P=v.instanceColor));const lt={};lt.attribute=P,P&&P.data&&(lt.data=P.data),$[k]=lt,G++}s.attributes=$,s.attributesNum=G,s.index=z}function g(){const v=s.newAttributes;for(let T=0,U=v.length;T<U;T++)v[T]=0}function p(v){m(v,0)}function m(v,T){const U=s.newAttributes,z=s.enabledAttributes,$=s.attributeDivisors;U[v]=1,z[v]===0&&(r.enableVertexAttribArray(v),z[v]=1),$[v]!==T&&(r.vertexAttribDivisor(v,T),$[v]=T)}function M(){const v=s.newAttributes,T=s.enabledAttributes;for(let U=0,z=T.length;U<z;U++)T[U]!==v[U]&&(r.disableVertexAttribArray(U),T[U]=0)}function x(v,T,U,z,$,J,G){G===!0?r.vertexAttribIPointer(v,T,U,$,J):r.vertexAttribPointer(v,T,U,z,$,J)}function S(v,T,U,z){g();const $=z.attributes,J=U.getAttributes(),G=T.defaultAttributeValues;for(const K in J){const k=J[K];if(k.location>=0){let ut=$[K];if(ut===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(ut=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(ut=v.instanceColor)),ut!==void 0){const P=ut.normalized,lt=ut.itemSize,Vt=t.get(ut);if(Vt===void 0)continue;const Yt=Vt.buffer,X=Vt.type,et=Vt.bytesPerElement,dt=X===r.INT||X===r.UNSIGNED_INT||ut.gpuType===Sh;if(ut.isInterleavedBufferAttribute){const ot=ut.data,bt=ot.stride,Tt=ut.offset;if(ot.isInstancedInterleavedBuffer){for(let qt=0;qt<k.locationSize;qt++)m(k.location+qt,ot.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let qt=0;qt<k.locationSize;qt++)p(k.location+qt);r.bindBuffer(r.ARRAY_BUFFER,Yt);for(let qt=0;qt<k.locationSize;qt++)x(k.location+qt,lt/k.locationSize,X,P,bt*et,(Tt+lt/k.locationSize*qt)*et,dt)}else{if(ut.isInstancedBufferAttribute){for(let ot=0;ot<k.locationSize;ot++)m(k.location+ot,ut.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let ot=0;ot<k.locationSize;ot++)p(k.location+ot);r.bindBuffer(r.ARRAY_BUFFER,Yt);for(let ot=0;ot<k.locationSize;ot++)x(k.location+ot,lt/k.locationSize,X,P,lt*et,lt/k.locationSize*ot*et,dt)}}else if(G!==void 0){const P=G[K];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(k.location,P);break;case 3:r.vertexAttrib3fv(k.location,P);break;case 4:r.vertexAttrib4fv(k.location,P);break;default:r.vertexAttrib1fv(k.location,P)}}}}M()}function C(){R();for(const v in n){const T=n[v];for(const U in T){const z=T[U];for(const $ in z)u(z[$].object),delete z[$];delete T[U]}delete n[v]}}function b(v){if(n[v.id]===void 0)return;const T=n[v.id];for(const U in T){const z=T[U];for(const $ in z)u(z[$].object),delete z[$];delete T[U]}delete n[v.id]}function E(v){for(const T in n){const U=n[T];if(U[v.id]===void 0)continue;const z=U[v.id];for(const $ in z)u(z[$].object),delete z[$];delete U[v.id]}}function R(){F(),o=!0,s!==i&&(s=i,c(s.object))}function F(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:F,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:p,disableUnusedAttributes:M}}function eS(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];e.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g];for(let g=0;g<d.length;g++)e.update(_,n,d[g])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function nS(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==ui&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const R=E===ra&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Gi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Mi&&!R)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const E=t.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,b=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:C,maxSamples:b}}function iS(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Pr,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,m=r.get(h);if(!i||_===null||_.length===0||s&&!p)s?u(null):c();else{const M=s?0:n,x=M*4;let S=m.clippingState||null;l.value=S,S=u(_,d,x,f);for(let C=0;C!==x;++C)S[C]=e[C];m.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=f+g*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,S=f;x!==g;++x,S+=4)o.copy(h[x]).applyMatrix4(M,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function rS(r){let t=new WeakMap;function e(o,a){return a===uu?o.mapping=Ks:a===hu&&(o.mapping=Zs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===uu||a===hu)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new mv(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Om extends Im{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ls=4,$f=[.125,.215,.35,.446,.526,.582],Ur=20,gc=new Om,Kf=new re;let vc=null,xc=0,Mc=0,Sc=!1;const Lr=(1+Math.sqrt(5))/2,Ss=1/Lr,Zf=[new L(-Lr,Ss,0),new L(Lr,Ss,0),new L(-Ss,0,Lr),new L(Ss,0,Lr),new L(0,Lr,-Ss),new L(0,Lr,Ss),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class ku{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){vc=this._renderer.getRenderTarget(),xc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vc,xc,Mc),this._renderer.xr.enabled=Sc,t.scissorTest=!1,Ba(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ks||t.mapping===Zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vc=this._renderer.getRenderTarget(),xc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:ra,format:ui,colorSpace:vr,depthBuffer:!1},i=Jf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jf(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sS(s)),this._blurMaterial=oS(s,t,e)}return i}_compileMaterial(t){const e=new fe(this._lodPlanes[0],t);this._renderer.compile(e,gc)}_sceneToCubeUV(t,e,n,i){const a=new zn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Kf),u.toneMapping=cr,u.autoClear=!1;const f=new na({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),_=new fe(new is,f);let g=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,g=!0):(f.color.copy(Kf),g=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):M===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;Ba(i,M*x,m>2?x:0,x,x),u.setRenderTarget(i),g&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ks||t.mapping===Zs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jf());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new fe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Ba(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,gc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Zf[(i-s-1)%Zf.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new fe(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ur-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):Ur;p>Ur&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ur}`);const m=[];let M=0;for(let E=0;E<Ur;++E){const R=E/g,F=Math.exp(-R*R/2);m.push(F),E===0?M+=F:E<p&&(M+=2*F)}for(let E=0;E<m.length;E++)m[E]=m[E]/M;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-n;const S=this._sizeLods[i],C=3*S*(i>x-Ls?i-x+Ls:0),b=4*(this._cubeSize-S);Ba(e,C,b,3*S,2*S),l.setRenderTarget(e),l.render(h,gc)}}function sS(r){const t=[],e=[],n=[];let i=r;const s=r-Ls+1+$f.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Ls?l=$f[o-r+Ls-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,g=3,p=2,m=1,M=new Float32Array(g*_*f),x=new Float32Array(p*_*f),S=new Float32Array(m*_*f);for(let b=0;b<f;b++){const E=b%3*2/3-1,R=b>2?0:-1,F=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];M.set(F,g*_*b),x.set(d,p*_*b);const v=[b,b,b,b,b,b];S.set(v,m*_*b)}const C=new Ei;C.setAttribute("position",new hi(M,g)),C.setAttribute("uv",new hi(x,p)),C.setAttribute("faceIndex",new hi(S,m)),t.push(C),i>Ls&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Jf(r,t,e){const n=new ts(r,t,e);return n.texture.mapping=Cl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ba(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function oS(r,t,e){const n=new Float32Array(Ur),i=new L(0,1,0);return new _r({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function jf(){return new _r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Qf(){return new _r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Dh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function aS(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===uu||l===hu,u=l===Ks||l===Zs;if(c||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new ku(r)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(e===null&&(e=new ku(r)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function lS(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&sl("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function cS(r,t,e,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)t.remove(g[p])}d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)t.update(d[_],r.ARRAY_BUFFER);const f=h.morphAttributes;for(const _ in f){const g=f[_];for(let p=0,m=g.length;p<m;p++)t.update(g[p],r.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,_=h.attributes.position;let g=0;if(f!==null){const M=f.array;g=f.version;for(let x=0,S=M.length;x<S;x+=3){const C=M[x+0],b=M[x+1],E=M[x+2];d.push(C,b,b,E,E,C)}}else if(_!==void 0){const M=_.array;g=_.version;for(let x=0,S=M.length/3-1;x<S;x+=3){const C=x+0,b=x+1,E=x+2;d.push(C,b,b,E,E,C)}}else return;const p=new(wm(d)?Lm:Pm)(d,1);p.version=g;const m=s.get(h);m&&t.remove(m),s.set(h,p)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function uS(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),e.update(f,n,1)}function c(d,f,_){_!==0&&(r.drawElementsInstanced(n,f,s,d*o,_),e.update(f,n,_))}function u(d,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,_);let p=0;for(let m=0;m<_;m++)p+=f[m];e.update(p,n,1)}function h(d,f,_,g){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,g,0,_);let m=0;for(let M=0;M<_;M++)m+=f[M];for(let M=0;M<g.length;M++)e.update(m,n,g[M])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function hS(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function fS(r,t,e){const n=new WeakMap,i=new ve;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let v=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var f=v;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),g===!0&&(S=2),p===!0&&(S=3);let C=a.attributes.position.count*S,b=1;C>t.maxTextureSize&&(b=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const E=new Float32Array(C*b*4*h),R=new Am(E,C,b,h);R.type=Mi,R.needsUpdate=!0;const F=S*4;for(let T=0;T<h;T++){const U=m[T],z=M[T],$=x[T],J=C*b*4*T;for(let G=0;G<U.count;G++){const K=G*F;_===!0&&(i.fromBufferAttribute(U,G),E[J+K+0]=i.x,E[J+K+1]=i.y,E[J+K+2]=i.z,E[J+K+3]=0),g===!0&&(i.fromBufferAttribute(z,G),E[J+K+4]=i.x,E[J+K+5]=i.y,E[J+K+6]=i.z,E[J+K+7]=0),p===!0&&(i.fromBufferAttribute($,G),E[J+K+8]=i.x,E[J+K+9]=i.y,E[J+K+10]=i.z,E[J+K+11]=$.itemSize===4?i.w:1)}}d={count:h,texture:R,size:new zt(C,b)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function dS(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Fm extends je{constructor(t,e,n,i,s,o,a,l,c,u=zs){if(u!==zs&&u!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===zs&&(n=Qr),n===void 0&&u===js&&(n=Js),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:wn,this.minFilter=l!==void 0?l:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Bm=new je,td=new Fm(1,1),zm=new Am,km=new Q0,Hm=new Um,ed=[],nd=[],id=new Float32Array(16),rd=new Float32Array(9),sd=new Float32Array(4);function io(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=ed[i];if(s===void 0&&(s=new Float32Array(i),ed[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function We(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Xe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Pl(r,t){let e=nd[t];e===void 0&&(e=new Int32Array(t),nd[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function pS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function mS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;r.uniform2fv(this.addr,t),Xe(e,t)}}function _S(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;r.uniform3fv(this.addr,t),Xe(e,t)}}function gS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;r.uniform4fv(this.addr,t),Xe(e,t)}}function vS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;sd.set(n),r.uniformMatrix2fv(this.addr,!1,sd),Xe(e,n)}}function xS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;rd.set(n),r.uniformMatrix3fv(this.addr,!1,rd),Xe(e,n)}}function MS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;id.set(n),r.uniformMatrix4fv(this.addr,!1,id),Xe(e,n)}}function SS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function yS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;r.uniform2iv(this.addr,t),Xe(e,t)}}function ES(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;r.uniform3iv(this.addr,t),Xe(e,t)}}function TS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;r.uniform4iv(this.addr,t),Xe(e,t)}}function wS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function bS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;r.uniform2uiv(this.addr,t),Xe(e,t)}}function AS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;r.uniform3uiv(this.addr,t),Xe(e,t)}}function CS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;r.uniform4uiv(this.addr,t),Xe(e,t)}}function RS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(td.compareFunction=Tm,s=td):s=Bm,e.setTexture2D(t||s,i)}function PS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||km,i)}function LS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Hm,i)}function DS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||zm,i)}function IS(r){switch(r){case 5126:return pS;case 35664:return mS;case 35665:return _S;case 35666:return gS;case 35674:return vS;case 35675:return xS;case 35676:return MS;case 5124:case 35670:return SS;case 35667:case 35671:return yS;case 35668:case 35672:return ES;case 35669:case 35673:return TS;case 5125:return wS;case 36294:return bS;case 36295:return AS;case 36296:return CS;case 35678:case 36198:case 36298:case 36306:case 35682:return RS;case 35679:case 36299:case 36307:return PS;case 35680:case 36300:case 36308:case 36293:return LS;case 36289:case 36303:case 36311:case 36292:return DS}}function US(r,t){r.uniform1fv(this.addr,t)}function NS(r,t){const e=io(t,this.size,2);r.uniform2fv(this.addr,e)}function OS(r,t){const e=io(t,this.size,3);r.uniform3fv(this.addr,e)}function FS(r,t){const e=io(t,this.size,4);r.uniform4fv(this.addr,e)}function BS(r,t){const e=io(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function zS(r,t){const e=io(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function kS(r,t){const e=io(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function HS(r,t){r.uniform1iv(this.addr,t)}function VS(r,t){r.uniform2iv(this.addr,t)}function GS(r,t){r.uniform3iv(this.addr,t)}function WS(r,t){r.uniform4iv(this.addr,t)}function XS(r,t){r.uniform1uiv(this.addr,t)}function YS(r,t){r.uniform2uiv(this.addr,t)}function qS(r,t){r.uniform3uiv(this.addr,t)}function $S(r,t){r.uniform4uiv(this.addr,t)}function KS(r,t,e){const n=this.cache,i=t.length,s=Pl(e,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Bm,s[o])}function ZS(r,t,e){const n=this.cache,i=t.length,s=Pl(e,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||km,s[o])}function JS(r,t,e){const n=this.cache,i=t.length,s=Pl(e,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Hm,s[o])}function jS(r,t,e){const n=this.cache,i=t.length,s=Pl(e,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||zm,s[o])}function QS(r){switch(r){case 5126:return US;case 35664:return NS;case 35665:return OS;case 35666:return FS;case 35674:return BS;case 35675:return zS;case 35676:return kS;case 5124:case 35670:return HS;case 35667:case 35671:return VS;case 35668:case 35672:return GS;case 35669:case 35673:return WS;case 5125:return XS;case 36294:return YS;case 36295:return qS;case 36296:return $S;case 35678:case 36198:case 36298:case 36306:case 35682:return KS;case 35679:case 36299:case 36307:return ZS;case 35680:case 36300:case 36308:case 36293:return JS;case 36289:case 36303:case 36311:case 36292:return jS}}class ty{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=IS(e.type)}}class ey{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=QS(e.type)}}class ny{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const yc=/(\w+)(\])?(\[|\.)?/g;function od(r,t){r.seq.push(t),r.map[t.id]=t}function iy(r,t,e){const n=r.name,i=n.length;for(yc.lastIndex=0;;){const s=yc.exec(n),o=yc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){od(e,c===void 0?new ty(a,r,t):new ey(a,r,t));break}else{let h=e.map[a];h===void 0&&(h=new ny(a),od(e,h)),e=h}}}class ol{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);iy(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function ad(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const ry=37297;let sy=0;function oy(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function ay(r){const t=me.getPrimaries(me.workingColorSpace),e=me.getPrimaries(r);let n;switch(t===e?n="":t===Sl&&e===Ml?n="LinearDisplayP3ToLinearSRGB":t===Ml&&e===Sl&&(n="LinearSRGBToLinearDisplayP3"),r){case vr:case Rl:return[n,"LinearTransferOETF"];case Tn:case Ch:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function ld(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+oy(r.getShaderSource(t),o)}else return i}function ly(r,t){const e=ay(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function cy(r,t){let e;switch(t){case u0:e="Linear";break;case h0:e="Reinhard";break;case f0:e="Cineon";break;case d0:e="ACESFilmic";break;case m0:e="AgX";break;case fm:e="Neutral";break;case p0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const za=new L;function uy(){me.getLuminanceCoefficients(za);const r=za.x.toFixed(4),t=za.y.toFixed(4),e=za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hy(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wo).join(`
`)}function fy(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function dy(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function wo(r){return r!==""}function cd(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ud(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const py=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hu(r){return r.replace(py,_y)}const my=new Map;function _y(r,t){let e=Jt[t];if(e===void 0){const n=my.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Hu(e)}const gy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hd(r){return r.replace(gy,vy)}function vy(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function fd(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function xy(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===cm?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===um?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Di&&(t="SHADOWMAP_TYPE_VSM"),t}function My(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ks:case Zs:t="ENVMAP_TYPE_CUBE";break;case Cl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Sy(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Zs:t="ENVMAP_MODE_REFRACTION";break}return t}function yy(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case hm:t="ENVMAP_BLENDING_MULTIPLY";break;case l0:t="ENVMAP_BLENDING_MIX";break;case c0:t="ENVMAP_BLENDING_ADD";break}return t}function Ey(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ty(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=xy(e),c=My(e),u=Sy(e),h=yy(e),d=Ey(e),f=hy(e),_=fy(s),g=i.createProgram();let p,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(wo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(wo).join(`
`),m.length>0&&(m+=`
`)):(p=[fd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),m=[fd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==cr?"#define TONE_MAPPING":"",e.toneMapping!==cr?Jt.tonemapping_pars_fragment:"",e.toneMapping!==cr?cy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,ly("linearToOutputTexel",e.outputColorSpace),uy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(wo).join(`
`)),o=Hu(o),o=cd(o,e),o=ud(o,e),a=Hu(a),a=cd(a,e),a=ud(a,e),o=hd(o),a=hd(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Rf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=M+p+o,S=M+m+a,C=ad(i,i.VERTEX_SHADER,x),b=ad(i,i.FRAGMENT_SHADER,S);i.attachShader(g,C),i.attachShader(g,b),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(T){if(r.debug.checkShaderErrors){const U=i.getProgramInfoLog(g).trim(),z=i.getShaderInfoLog(C).trim(),$=i.getShaderInfoLog(b).trim();let J=!0,G=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,C,b);else{const K=ld(i,C,"vertex"),k=ld(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+U+`
`+K+`
`+k)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(z===""||$==="")&&(G=!1);G&&(T.diagnostics={runnable:J,programLog:U,vertexShader:{log:z,prefix:p},fragmentShader:{log:$,prefix:m}})}i.deleteShader(C),i.deleteShader(b),R=new ol(i,g),F=dy(i,g)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let F;this.getAttributes=function(){return F===void 0&&E(this),F};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(g,ry)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sy++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=b,this}let wy=0;class by{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ay(t),e.set(t,n)),n}}class Ay{constructor(t){this.id=wy++,this.code=t,this.usedTimes=0}}function Cy(r,t,e,n,i,s,o){const a=new Ph,l=new by,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.reverseDepthBuffer,f=i.vertexTextures;let _=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,T,U,z,$){const J=z.fog,G=$.geometry,K=v.isMeshStandardMaterial?z.environment:null,k=(v.isMeshStandardMaterial?e:t).get(v.envMap||K),ut=k&&k.mapping===Cl?k.image.height:null,P=g[v.type];v.precision!==null&&(_=i.getMaxPrecision(v.precision),_!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",_,"instead."));const lt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Vt=lt!==void 0?lt.length:0;let Yt=0;G.morphAttributes.position!==void 0&&(Yt=1),G.morphAttributes.normal!==void 0&&(Yt=2),G.morphAttributes.color!==void 0&&(Yt=3);let X,et,dt,ot;if(P){const Dt=_i[P];X=Dt.vertexShader,et=Dt.fragmentShader}else X=v.vertexShader,et=v.fragmentShader,l.update(v),dt=l.getVertexShaderID(v),ot=l.getFragmentShaderID(v);const bt=r.getRenderTarget(),Tt=$.isInstancedMesh===!0,qt=$.isBatchedMesh===!0,Wt=!!v.map,Bt=!!v.matcap,D=!!k,se=!!v.aoMap,kt=!!v.lightMap,Ut=!!v.bumpMap,B=!!v.normalMap,$t=!!v.displacementMap,Pt=!!v.emissiveMap,A=!!v.metalnessMap,y=!!v.roughnessMap,H=v.anisotropy>0,nt=v.clearcoat>0,st=v.dispersion>0,j=v.iridescence>0,Et=v.sheen>0,q=v.transmission>0,it=H&&!!v.anisotropyMap,St=nt&&!!v.clearcoatMap,Q=nt&&!!v.clearcoatNormalMap,pt=nt&&!!v.clearcoatRoughnessMap,at=j&&!!v.iridescenceMap,ct=j&&!!v.iridescenceThicknessMap,rt=Et&&!!v.sheenColorMap,yt=Et&&!!v.sheenRoughnessMap,wt=!!v.specularMap,Nt=!!v.specularColorMap,I=!!v.specularIntensityMap,tt=q&&!!v.transmissionMap,Y=q&&!!v.thicknessMap,Z=!!v.gradientMap,ft=!!v.alphaMap,mt=v.alphaTest>0,Kt=!!v.alphaHash,xe=!!v.extensions;let Ae=cr;v.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(Ae=r.toneMapping);const oe={shaderID:P,shaderType:v.type,shaderName:v.name,vertexShader:X,fragmentShader:et,defines:v.defines,customVertexShaderID:dt,customFragmentShaderID:ot,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_,batching:qt,batchingColor:qt&&$._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&$.instanceColor!==null,instancingMorph:Tt&&$.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:bt===null?r.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:vr,alphaToCoverage:!!v.alphaToCoverage,map:Wt,matcap:Bt,envMap:D,envMapMode:D&&k.mapping,envMapCubeUVHeight:ut,aoMap:se,lightMap:kt,bumpMap:Ut,normalMap:B,displacementMap:f&&$t,emissiveMap:Pt,normalMapObjectSpace:B&&v.normalMapType===x0,normalMapTangentSpace:B&&v.normalMapType===Em,metalnessMap:A,roughnessMap:y,anisotropy:H,anisotropyMap:it,clearcoat:nt,clearcoatMap:St,clearcoatNormalMap:Q,clearcoatRoughnessMap:pt,dispersion:st,iridescence:j,iridescenceMap:at,iridescenceThicknessMap:ct,sheen:Et,sheenColorMap:rt,sheenRoughnessMap:yt,specularMap:wt,specularColorMap:Nt,specularIntensityMap:I,transmission:q,transmissionMap:tt,thicknessMap:Y,gradientMap:Z,opaque:v.transparent===!1&&v.blending===Bs&&v.alphaToCoverage===!1,alphaMap:ft,alphaTest:mt,alphaHash:Kt,combine:v.combine,mapUv:Wt&&p(v.map.channel),aoMapUv:se&&p(v.aoMap.channel),lightMapUv:kt&&p(v.lightMap.channel),bumpMapUv:Ut&&p(v.bumpMap.channel),normalMapUv:B&&p(v.normalMap.channel),displacementMapUv:$t&&p(v.displacementMap.channel),emissiveMapUv:Pt&&p(v.emissiveMap.channel),metalnessMapUv:A&&p(v.metalnessMap.channel),roughnessMapUv:y&&p(v.roughnessMap.channel),anisotropyMapUv:it&&p(v.anisotropyMap.channel),clearcoatMapUv:St&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:Q&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:yt&&p(v.sheenRoughnessMap.channel),specularMapUv:wt&&p(v.specularMap.channel),specularColorMapUv:Nt&&p(v.specularColorMap.channel),specularIntensityMapUv:I&&p(v.specularIntensityMap.channel),transmissionMapUv:tt&&p(v.transmissionMap.channel),thicknessMapUv:Y&&p(v.thicknessMap.channel),alphaMapUv:ft&&p(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(B||H),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!G.attributes.uv&&(Wt||ft),fog:!!J,useFog:v.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:$.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Vt,morphTextureStride:Yt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&U.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Wt&&v.map.isVideoTexture===!0&&me.getTransfer(v.map.colorSpace)===be,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Oi,flipSided:v.side===yn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:xe&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&v.extensions.multiDraw===!0||qt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return oe.vertexUv1s=c.has(1),oe.vertexUv2s=c.has(2),oe.vertexUv3s=c.has(3),c.clear(),oe}function M(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const U in v.defines)T.push(U),T.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(x(T,v),S(T,v),T.push(r.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function x(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function S(v,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),v.push(a.mask)}function C(v){const T=g[v.type];let U;if(T){const z=_i[T];U=hv.clone(z.uniforms)}else U=v.uniforms;return U}function b(v,T){let U;for(let z=0,$=u.length;z<$;z++){const J=u[z];if(J.cacheKey===T){U=J,++U.usedTimes;break}}return U===void 0&&(U=new Ty(r,T,v,s),u.push(U)),U}function E(v){if(--v.usedTimes===0){const T=u.indexOf(v);u[T]=u[u.length-1],u.pop(),v.destroy()}}function R(v){l.remove(v)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:C,acquireProgram:b,releaseProgram:E,releaseShaderCache:R,programs:u,dispose:F}}function Ry(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Py(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function dd(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function pd(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(h,d,f,_,g,p){let m=r[t];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},r[t]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=g,m.group=p),t++,m}function a(h,d,f,_,g,p){const m=o(h,d,f,_,g,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):e.push(m)}function l(h,d,f,_,g,p){const m=o(h,d,f,_,g,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):e.unshift(m)}function c(h,d){e.length>1&&e.sort(h||Py),n.length>1&&n.sort(d||dd),i.length>1&&i.sort(d||dd)}function u(){for(let h=t,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function Ly(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new pd,r.set(n,[o])):i>=s.length?(o=new pd,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Dy(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new re};break;case"SpotLight":e={position:new L,direction:new L,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new re,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new re,groundColor:new re};break;case"RectAreaLight":e={color:new re,position:new L,halfWidth:new L,halfHeight:new L};break}return r[t.id]=e,e}}}function Iy(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Uy=0;function Ny(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Oy(r){const t=new Dy,e=Iy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,s=new ce,o=new ce;function a(c){let u=0,h=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,_=0,g=0,p=0,m=0,M=0,x=0,S=0,C=0,b=0,E=0;c.sort(Ny);for(let F=0,v=c.length;F<v;F++){const T=c[F],U=T.color,z=T.intensity,$=T.distance,J=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=U.r*z,h+=U.g*z,d+=U.b*z;else if(T.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(T.sh.coefficients[G],z);E++}else if(T.isDirectionalLight){const G=t.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const K=T.shadow,k=e.get(T);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=J,n.directionalShadowMatrix[f]=T.shadow.matrix,M++}n.directional[f]=G,f++}else if(T.isSpotLight){const G=t.get(T);G.position.setFromMatrixPosition(T.matrixWorld),G.color.copy(U).multiplyScalar(z),G.distance=$,G.coneCos=Math.cos(T.angle),G.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),G.decay=T.decay,n.spot[g]=G;const K=T.shadow;if(T.map&&(n.spotLightMap[C]=T.map,C++,K.updateMatrices(T),T.castShadow&&b++),n.spotLightMatrix[g]=K.matrix,T.castShadow){const k=e.get(T);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,n.spotShadow[g]=k,n.spotShadowMap[g]=J,S++}g++}else if(T.isRectAreaLight){const G=t.get(T);G.color.copy(U).multiplyScalar(z),G.halfWidth.set(T.width*.5,0,0),G.halfHeight.set(0,T.height*.5,0),n.rectArea[p]=G,p++}else if(T.isPointLight){const G=t.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),G.distance=T.distance,G.decay=T.decay,T.castShadow){const K=T.shadow,k=e.get(T);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,k.shadowCameraNear=K.camera.near,k.shadowCameraFar=K.camera.far,n.pointShadow[_]=k,n.pointShadowMap[_]=J,n.pointShadowMatrix[_]=T.shadow.matrix,x++}n.point[_]=G,_++}else if(T.isHemisphereLight){const G=t.get(T);G.skyColor.copy(T.color).multiplyScalar(z),G.groundColor.copy(T.groundColor).multiplyScalar(z),n.hemi[m]=G,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==f||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==p||R.hemiLength!==m||R.numDirectionalShadows!==M||R.numPointShadows!==x||R.numSpotShadows!==S||R.numSpotMaps!==C||R.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=S+C-b,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=E,R.directionalLength=f,R.pointLength=_,R.spotLength=g,R.rectAreaLength=p,R.hemiLength=m,R.numDirectionalShadows=M,R.numPointShadows=x,R.numSpotShadows=S,R.numSpotMaps=C,R.numLightProbes=E,n.version=Uy++)}function l(c,u){let h=0,d=0,f=0,_=0,g=0;const p=u.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const x=c[m];if(x.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),h++}else if(x.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),f++}else if(x.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function md(r){const t=new Oy(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Fy(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new md(r),t.set(i,[a])):s>=o.length?(a=new md(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class By extends no{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=g0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zy extends no{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ky=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Vy(r,t,e){let n=new Lh;const i=new zt,s=new zt,o=new ve,a=new By({depthPacking:v0}),l=new zy,c={},u=e.maxTextureSize,h={[mr]:yn,[yn]:mr,[Oi]:Oi},d=new _r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:ky,fragmentShader:Hy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new Ei;_.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new fe(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cm;let m=this.type;this.render=function(b,E,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const F=r.getRenderTarget(),v=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),U=r.state;U.setBlending(lr),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=m!==Di&&this.type===Di,$=m===Di&&this.type!==Di;for(let J=0,G=b.length;J<G;J++){const K=b[J],k=K.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const ut=k.getFrameExtents();if(i.multiply(ut),s.copy(k.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ut.x),i.x=s.x*ut.x,k.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ut.y),i.y=s.y*ut.y,k.mapSize.y=s.y)),k.map===null||z===!0||$===!0){const lt=this.type!==Di?{minFilter:wn,magFilter:wn}:{};k.map!==null&&k.map.dispose(),k.map=new ts(i.x,i.y,lt),k.map.texture.name=K.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const P=k.getViewportCount();for(let lt=0;lt<P;lt++){const Vt=k.getViewport(lt);o.set(s.x*Vt.x,s.y*Vt.y,s.x*Vt.z,s.y*Vt.w),U.viewport(o),k.updateMatrices(K,lt),n=k.getFrustum(),S(E,R,k.camera,K,this.type)}k.isPointLightShadow!==!0&&this.type===Di&&M(k,R),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(F,v,T)};function M(b,E){const R=t.update(g);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ts(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(E,null,R,d,g,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(E,null,R,f,g,null)}function x(b,E,R,F){let v=null;const T=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(T!==void 0)v=T;else if(v=R.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const U=v.uuid,z=E.uuid;let $=c[U];$===void 0&&($={},c[U]=$);let J=$[z];J===void 0&&(J=v.clone(),$[z]=J,E.addEventListener("dispose",C)),v=J}if(v.visible=E.visible,v.wireframe=E.wireframe,F===Di?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:h[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const U=r.properties.get(v);U.light=R}return v}function S(b,E,R,F,v){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===Di)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const z=t.update(b),$=b.material;if(Array.isArray($)){const J=z.groups;for(let G=0,K=J.length;G<K;G++){const k=J[G],ut=$[k.materialIndex];if(ut&&ut.visible){const P=x(b,ut,F,v);b.onBeforeShadow(r,b,E,R,z,P,k),r.renderBufferDirect(R,null,z,P,b,k),b.onAfterShadow(r,b,E,R,z,P,k)}}}else if($.visible){const J=x(b,$,F,v);b.onBeforeShadow(r,b,E,R,z,J,null),r.renderBufferDirect(R,null,z,J,b,null),b.onAfterShadow(r,b,E,R,z,J,null)}}const U=b.children;for(let z=0,$=U.length;z<$;z++)S(U[z],E,R,F,v)}function C(b){b.target.removeEventListener("dispose",C);for(const R in c){const F=c[R],v=b.target.uuid;v in F&&(F[v].dispose(),delete F[v])}}}const Gy={[iu]:ru,[su]:lu,[ou]:cu,[$s]:au,[ru]:iu,[lu]:su,[cu]:ou,[au]:$s};function Wy(r){function t(){let I=!1;const tt=new ve;let Y=null;const Z=new ve(0,0,0,0);return{setMask:function(ft){Y!==ft&&!I&&(r.colorMask(ft,ft,ft,ft),Y=ft)},setLocked:function(ft){I=ft},setClear:function(ft,mt,Kt,xe,Ae){Ae===!0&&(ft*=xe,mt*=xe,Kt*=xe),tt.set(ft,mt,Kt,xe),Z.equals(tt)===!1&&(r.clearColor(ft,mt,Kt,xe),Z.copy(tt))},reset:function(){I=!1,Y=null,Z.set(-1,0,0,0)}}}function e(){let I=!1,tt=!1,Y=null,Z=null,ft=null;return{setReversed:function(mt){tt=mt},setTest:function(mt){mt?dt(r.DEPTH_TEST):ot(r.DEPTH_TEST)},setMask:function(mt){Y!==mt&&!I&&(r.depthMask(mt),Y=mt)},setFunc:function(mt){if(tt&&(mt=Gy[mt]),Z!==mt){switch(mt){case iu:r.depthFunc(r.NEVER);break;case ru:r.depthFunc(r.ALWAYS);break;case su:r.depthFunc(r.LESS);break;case $s:r.depthFunc(r.LEQUAL);break;case ou:r.depthFunc(r.EQUAL);break;case au:r.depthFunc(r.GEQUAL);break;case lu:r.depthFunc(r.GREATER);break;case cu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Z=mt}},setLocked:function(mt){I=mt},setClear:function(mt){ft!==mt&&(r.clearDepth(mt),ft=mt)},reset:function(){I=!1,Y=null,Z=null,ft=null}}}function n(){let I=!1,tt=null,Y=null,Z=null,ft=null,mt=null,Kt=null,xe=null,Ae=null;return{setTest:function(oe){I||(oe?dt(r.STENCIL_TEST):ot(r.STENCIL_TEST))},setMask:function(oe){tt!==oe&&!I&&(r.stencilMask(oe),tt=oe)},setFunc:function(oe,Dt,Ct){(Y!==oe||Z!==Dt||ft!==Ct)&&(r.stencilFunc(oe,Dt,Ct),Y=oe,Z=Dt,ft=Ct)},setOp:function(oe,Dt,Ct){(mt!==oe||Kt!==Dt||xe!==Ct)&&(r.stencilOp(oe,Dt,Ct),mt=oe,Kt=Dt,xe=Ct)},setLocked:function(oe){I=oe},setClear:function(oe){Ae!==oe&&(r.clearStencil(oe),Ae=oe)},reset:function(){I=!1,tt=null,Y=null,Z=null,ft=null,mt=null,Kt=null,xe=null,Ae=null}}}const i=new t,s=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],f=null,_=!1,g=null,p=null,m=null,M=null,x=null,S=null,C=null,b=new re(0,0,0),E=0,R=!1,F=null,v=null,T=null,U=null,z=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,G=0;const K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(K)[1]),J=G>=1):K.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),J=G>=2);let k=null,ut={};const P=r.getParameter(r.SCISSOR_BOX),lt=r.getParameter(r.VIEWPORT),Vt=new ve().fromArray(P),Yt=new ve().fromArray(lt);function X(I,tt,Y,Z){const ft=new Uint8Array(4),mt=r.createTexture();r.bindTexture(I,mt),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Kt=0;Kt<Y;Kt++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(tt,0,r.RGBA,1,1,Z,0,r.RGBA,r.UNSIGNED_BYTE,ft):r.texImage2D(tt+Kt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ft);return mt}const et={};et[r.TEXTURE_2D]=X(r.TEXTURE_2D,r.TEXTURE_2D,1),et[r.TEXTURE_CUBE_MAP]=X(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[r.TEXTURE_2D_ARRAY]=X(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),et[r.TEXTURE_3D]=X(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),dt(r.DEPTH_TEST),s.setFunc($s),kt(!1),Ut(Ef),dt(r.CULL_FACE),D(lr);function dt(I){c[I]!==!0&&(r.enable(I),c[I]=!0)}function ot(I){c[I]!==!1&&(r.disable(I),c[I]=!1)}function bt(I,tt){return u[I]!==tt?(r.bindFramebuffer(I,tt),u[I]=tt,I===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=tt),I===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=tt),!0):!1}function Tt(I,tt){let Y=d,Z=!1;if(I){Y=h.get(tt),Y===void 0&&(Y=[],h.set(tt,Y));const ft=I.textures;if(Y.length!==ft.length||Y[0]!==r.COLOR_ATTACHMENT0){for(let mt=0,Kt=ft.length;mt<Kt;mt++)Y[mt]=r.COLOR_ATTACHMENT0+mt;Y.length=ft.length,Z=!0}}else Y[0]!==r.BACK&&(Y[0]=r.BACK,Z=!0);Z&&r.drawBuffers(Y)}function qt(I){return f!==I?(r.useProgram(I),f=I,!0):!1}const Wt={[Ir]:r.FUNC_ADD,[Xg]:r.FUNC_SUBTRACT,[Yg]:r.FUNC_REVERSE_SUBTRACT};Wt[qg]=r.MIN,Wt[$g]=r.MAX;const Bt={[Kg]:r.ZERO,[Zg]:r.ONE,[Jg]:r.SRC_COLOR,[eu]:r.SRC_ALPHA,[i0]:r.SRC_ALPHA_SATURATE,[e0]:r.DST_COLOR,[Qg]:r.DST_ALPHA,[jg]:r.ONE_MINUS_SRC_COLOR,[nu]:r.ONE_MINUS_SRC_ALPHA,[n0]:r.ONE_MINUS_DST_COLOR,[t0]:r.ONE_MINUS_DST_ALPHA,[r0]:r.CONSTANT_COLOR,[s0]:r.ONE_MINUS_CONSTANT_COLOR,[o0]:r.CONSTANT_ALPHA,[a0]:r.ONE_MINUS_CONSTANT_ALPHA};function D(I,tt,Y,Z,ft,mt,Kt,xe,Ae,oe){if(I===lr){_===!0&&(ot(r.BLEND),_=!1);return}if(_===!1&&(dt(r.BLEND),_=!0),I!==Wg){if(I!==g||oe!==R){if((p!==Ir||x!==Ir)&&(r.blendEquation(r.FUNC_ADD),p=Ir,x=Ir),oe)switch(I){case Bs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Tf:r.blendFunc(r.ONE,r.ONE);break;case wf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case bf:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Bs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Tf:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case wf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case bf:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}m=null,M=null,S=null,C=null,b.set(0,0,0),E=0,g=I,R=oe}return}ft=ft||tt,mt=mt||Y,Kt=Kt||Z,(tt!==p||ft!==x)&&(r.blendEquationSeparate(Wt[tt],Wt[ft]),p=tt,x=ft),(Y!==m||Z!==M||mt!==S||Kt!==C)&&(r.blendFuncSeparate(Bt[Y],Bt[Z],Bt[mt],Bt[Kt]),m=Y,M=Z,S=mt,C=Kt),(xe.equals(b)===!1||Ae!==E)&&(r.blendColor(xe.r,xe.g,xe.b,Ae),b.copy(xe),E=Ae),g=I,R=!1}function se(I,tt){I.side===Oi?ot(r.CULL_FACE):dt(r.CULL_FACE);let Y=I.side===yn;tt&&(Y=!Y),kt(Y),I.blending===Bs&&I.transparent===!1?D(lr):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),i.setMask(I.colorWrite);const Z=I.stencilWrite;o.setTest(Z),Z&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),$t(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?dt(r.SAMPLE_ALPHA_TO_COVERAGE):ot(r.SAMPLE_ALPHA_TO_COVERAGE)}function kt(I){F!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),F=I)}function Ut(I){I!==Vg?(dt(r.CULL_FACE),I!==v&&(I===Ef?r.cullFace(r.BACK):I===Gg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ot(r.CULL_FACE),v=I}function B(I){I!==T&&(J&&r.lineWidth(I),T=I)}function $t(I,tt,Y){I?(dt(r.POLYGON_OFFSET_FILL),(U!==tt||z!==Y)&&(r.polygonOffset(tt,Y),U=tt,z=Y)):ot(r.POLYGON_OFFSET_FILL)}function Pt(I){I?dt(r.SCISSOR_TEST):ot(r.SCISSOR_TEST)}function A(I){I===void 0&&(I=r.TEXTURE0+$-1),k!==I&&(r.activeTexture(I),k=I)}function y(I,tt,Y){Y===void 0&&(k===null?Y=r.TEXTURE0+$-1:Y=k);let Z=ut[Y];Z===void 0&&(Z={type:void 0,texture:void 0},ut[Y]=Z),(Z.type!==I||Z.texture!==tt)&&(k!==Y&&(r.activeTexture(Y),k=Y),r.bindTexture(I,tt||et[I]),Z.type=I,Z.texture=tt)}function H(){const I=ut[k];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function nt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Et(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function St(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function at(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ct(I){Vt.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),Vt.copy(I))}function rt(I){Yt.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),Yt.copy(I))}function yt(I,tt){let Y=l.get(tt);Y===void 0&&(Y=new WeakMap,l.set(tt,Y));let Z=Y.get(I);Z===void 0&&(Z=r.getUniformBlockIndex(tt,I.name),Y.set(I,Z))}function wt(I,tt){const Z=l.get(tt).get(I);a.get(tt)!==Z&&(r.uniformBlockBinding(tt,Z,I.__bindingPointIndex),a.set(tt,Z))}function Nt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},k=null,ut={},u={},h=new WeakMap,d=[],f=null,_=!1,g=null,p=null,m=null,M=null,x=null,S=null,C=null,b=new re(0,0,0),E=0,R=!1,F=null,v=null,T=null,U=null,z=null,Vt.set(0,0,r.canvas.width,r.canvas.height),Yt.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:dt,disable:ot,bindFramebuffer:bt,drawBuffers:Tt,useProgram:qt,setBlending:D,setMaterial:se,setFlipSided:kt,setCullFace:Ut,setLineWidth:B,setPolygonOffset:$t,setScissorTest:Pt,activeTexture:A,bindTexture:y,unbindTexture:H,compressedTexImage2D:nt,compressedTexImage3D:st,texImage2D:pt,texImage3D:at,updateUBOMapping:yt,uniformBlockBinding:wt,texStorage2D:St,texStorage3D:Q,texSubImage2D:j,texSubImage3D:Et,compressedTexSubImage2D:q,compressedTexSubImage3D:it,scissor:ct,viewport:rt,reset:Nt}}function _d(r,t,e,n){const i=Xy(n);switch(e){case gm:return r*t;case xm:return r*t;case Mm:return r*t*2;case Th:return r*t/i.components*i.byteLength;case wh:return r*t/i.components*i.byteLength;case Sm:return r*t*2/i.components*i.byteLength;case bh:return r*t*2/i.components*i.byteLength;case vm:return r*t*3/i.components*i.byteLength;case ui:return r*t*4/i.components*i.byteLength;case Ah:return r*t*4/i.components*i.byteLength;case tl:case el:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case nl:case il:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case mu:case gu:return Math.max(r,16)*Math.max(t,8)/4;case pu:case _u:return Math.max(r,8)*Math.max(t,8)/2;case vu:case xu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Mu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Su:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case yu:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Eu:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Tu:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case wu:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case bu:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Au:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Cu:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ru:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Pu:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Lu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Du:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Iu:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Uu:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case rl:case Nu:case Ou:return Math.ceil(r/4)*Math.ceil(t/4)*16;case ym:case Fu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Bu:case zu:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xy(r){switch(r){case Gi:case pm:return{byteLength:1,components:1};case Qo:case mm:case ra:return{byteLength:2,components:1};case yh:case Eh:return{byteLength:2,components:4};case Qr:case Sh:case Mi:return{byteLength:4,components:1};case _m:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Yy(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new zt,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,y){return f?new OffscreenCanvas(A,y):ea("canvas")}function g(A,y,H){let nt=1;const st=Pt(A);if((st.width>H||st.height>H)&&(nt=H/Math.max(st.width,st.height)),nt<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const j=Math.floor(nt*st.width),Et=Math.floor(nt*st.height);h===void 0&&(h=_(j,Et));const q=y?_(j,Et):h;return q.width=j,q.height=Et,q.getContext("2d").drawImage(A,0,0,j,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+j+"x"+Et+")."),q}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==wn&&A.minFilter!==Vn}function m(A){r.generateMipmap(A)}function M(A,y,H,nt,st=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j=y;if(y===r.RED&&(H===r.FLOAT&&(j=r.R32F),H===r.HALF_FLOAT&&(j=r.R16F),H===r.UNSIGNED_BYTE&&(j=r.R8)),y===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(j=r.R8UI),H===r.UNSIGNED_SHORT&&(j=r.R16UI),H===r.UNSIGNED_INT&&(j=r.R32UI),H===r.BYTE&&(j=r.R8I),H===r.SHORT&&(j=r.R16I),H===r.INT&&(j=r.R32I)),y===r.RG&&(H===r.FLOAT&&(j=r.RG32F),H===r.HALF_FLOAT&&(j=r.RG16F),H===r.UNSIGNED_BYTE&&(j=r.RG8)),y===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(j=r.RG8UI),H===r.UNSIGNED_SHORT&&(j=r.RG16UI),H===r.UNSIGNED_INT&&(j=r.RG32UI),H===r.BYTE&&(j=r.RG8I),H===r.SHORT&&(j=r.RG16I),H===r.INT&&(j=r.RG32I)),y===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(j=r.RGB8UI),H===r.UNSIGNED_SHORT&&(j=r.RGB16UI),H===r.UNSIGNED_INT&&(j=r.RGB32UI),H===r.BYTE&&(j=r.RGB8I),H===r.SHORT&&(j=r.RGB16I),H===r.INT&&(j=r.RGB32I)),y===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),H===r.UNSIGNED_INT&&(j=r.RGBA32UI),H===r.BYTE&&(j=r.RGBA8I),H===r.SHORT&&(j=r.RGBA16I),H===r.INT&&(j=r.RGBA32I)),y===r.RGB&&H===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),y===r.RGBA){const Et=st?xl:me.getTransfer(nt);H===r.FLOAT&&(j=r.RGBA32F),H===r.HALF_FLOAT&&(j=r.RGBA16F),H===r.UNSIGNED_BYTE&&(j=Et===be?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function x(A,y){let H;return A?y===null||y===Qr||y===Js?H=r.DEPTH24_STENCIL8:y===Mi?H=r.DEPTH32F_STENCIL8:y===Qo&&(H=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Qr||y===Js?H=r.DEPTH_COMPONENT24:y===Mi?H=r.DEPTH_COMPONENT32F:y===Qo&&(H=r.DEPTH_COMPONENT16),H}function S(A,y){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==wn&&A.minFilter!==Vn?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function C(A){const y=A.target;y.removeEventListener("dispose",C),E(y),y.isVideoTexture&&u.delete(y)}function b(A){const y=A.target;y.removeEventListener("dispose",b),F(y)}function E(A){const y=n.get(A);if(y.__webglInit===void 0)return;const H=A.source,nt=d.get(H);if(nt){const st=nt[y.__cacheKey];st.usedTimes--,st.usedTimes===0&&R(A),Object.keys(nt).length===0&&d.delete(H)}n.remove(A)}function R(A){const y=n.get(A);r.deleteTexture(y.__webglTexture);const H=A.source,nt=d.get(H);delete nt[y.__cacheKey],o.memory.textures--}function F(A){const y=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(y.__webglFramebuffer[nt]))for(let st=0;st<y.__webglFramebuffer[nt].length;st++)r.deleteFramebuffer(y.__webglFramebuffer[nt][st]);else r.deleteFramebuffer(y.__webglFramebuffer[nt]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[nt])}else{if(Array.isArray(y.__webglFramebuffer))for(let nt=0;nt<y.__webglFramebuffer.length;nt++)r.deleteFramebuffer(y.__webglFramebuffer[nt]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let nt=0;nt<y.__webglColorRenderbuffer.length;nt++)y.__webglColorRenderbuffer[nt]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[nt]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const H=A.textures;for(let nt=0,st=H.length;nt<st;nt++){const j=n.get(H[nt]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(H[nt])}n.remove(A)}let v=0;function T(){v=0}function U(){const A=v;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),v+=1,A}function z(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function $(A,y){const H=n.get(A);if(A.isVideoTexture&&B(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const nt=A.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Yt(H,A,y);return}}e.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+y)}function J(A,y){const H=n.get(A);if(A.version>0&&H.__version!==A.version){Yt(H,A,y);return}e.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+y)}function G(A,y){const H=n.get(A);if(A.version>0&&H.__version!==A.version){Yt(H,A,y);return}e.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+y)}function K(A,y){const H=n.get(A);if(A.version>0&&H.__version!==A.version){X(H,A,y);return}e.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+y)}const k={[fu]:r.REPEAT,[zr]:r.CLAMP_TO_EDGE,[du]:r.MIRRORED_REPEAT},ut={[wn]:r.NEAREST,[_0]:r.NEAREST_MIPMAP_NEAREST,[xa]:r.NEAREST_MIPMAP_LINEAR,[Vn]:r.LINEAR,[Kl]:r.LINEAR_MIPMAP_NEAREST,[kr]:r.LINEAR_MIPMAP_LINEAR},P={[M0]:r.NEVER,[b0]:r.ALWAYS,[S0]:r.LESS,[Tm]:r.LEQUAL,[y0]:r.EQUAL,[w0]:r.GEQUAL,[E0]:r.GREATER,[T0]:r.NOTEQUAL};function lt(A,y){if(y.type===Mi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Vn||y.magFilter===Kl||y.magFilter===xa||y.magFilter===kr||y.minFilter===Vn||y.minFilter===Kl||y.minFilter===xa||y.minFilter===kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,k[y.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,k[y.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,k[y.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,ut[y.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,ut[y.minFilter]),y.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,P[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===wn||y.minFilter!==xa&&y.minFilter!==kr||y.type===Mi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");r.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Vt(A,y){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",C));const nt=y.source;let st=d.get(nt);st===void 0&&(st={},d.set(nt,st));const j=z(y);if(j!==A.__cacheKey){st[j]===void 0&&(st[j]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),st[j].usedTimes++;const Et=st[A.__cacheKey];Et!==void 0&&(st[A.__cacheKey].usedTimes--,Et.usedTimes===0&&R(y)),A.__cacheKey=j,A.__webglTexture=st[j].texture}return H}function Yt(A,y,H){let nt=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(nt=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(nt=r.TEXTURE_3D);const st=Vt(A,y),j=y.source;e.bindTexture(nt,A.__webglTexture,r.TEXTURE0+H);const Et=n.get(j);if(j.version!==Et.__version||st===!0){e.activeTexture(r.TEXTURE0+H);const q=me.getPrimaries(me.workingColorSpace),it=y.colorSpace===Qi?null:me.getPrimaries(y.colorSpace),St=y.colorSpace===Qi||q===it?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let Q=g(y.image,!1,i.maxTextureSize);Q=$t(y,Q);const pt=s.convert(y.format,y.colorSpace),at=s.convert(y.type);let ct=M(y.internalFormat,pt,at,y.colorSpace,y.isVideoTexture);lt(nt,y);let rt;const yt=y.mipmaps,wt=y.isVideoTexture!==!0,Nt=Et.__version===void 0||st===!0,I=j.dataReady,tt=S(y,Q);if(y.isDepthTexture)ct=x(y.format===js,y.type),Nt&&(wt?e.texStorage2D(r.TEXTURE_2D,1,ct,Q.width,Q.height):e.texImage2D(r.TEXTURE_2D,0,ct,Q.width,Q.height,0,pt,at,null));else if(y.isDataTexture)if(yt.length>0){wt&&Nt&&e.texStorage2D(r.TEXTURE_2D,tt,ct,yt[0].width,yt[0].height);for(let Y=0,Z=yt.length;Y<Z;Y++)rt=yt[Y],wt?I&&e.texSubImage2D(r.TEXTURE_2D,Y,0,0,rt.width,rt.height,pt,at,rt.data):e.texImage2D(r.TEXTURE_2D,Y,ct,rt.width,rt.height,0,pt,at,rt.data);y.generateMipmaps=!1}else wt?(Nt&&e.texStorage2D(r.TEXTURE_2D,tt,ct,Q.width,Q.height),I&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Q.width,Q.height,pt,at,Q.data)):e.texImage2D(r.TEXTURE_2D,0,ct,Q.width,Q.height,0,pt,at,Q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){wt&&Nt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,tt,ct,yt[0].width,yt[0].height,Q.depth);for(let Y=0,Z=yt.length;Y<Z;Y++)if(rt=yt[Y],y.format!==ui)if(pt!==null)if(wt){if(I)if(y.layerUpdates.size>0){const ft=_d(rt.width,rt.height,y.format,y.type);for(const mt of y.layerUpdates){const Kt=rt.data.subarray(mt*ft/rt.data.BYTES_PER_ELEMENT,(mt+1)*ft/rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,mt,rt.width,rt.height,1,pt,Kt,0,0)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,rt.width,rt.height,Q.depth,pt,rt.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Y,ct,rt.width,rt.height,Q.depth,0,rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else wt?I&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,rt.width,rt.height,Q.depth,pt,at,rt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,Y,ct,rt.width,rt.height,Q.depth,0,pt,at,rt.data)}else{wt&&Nt&&e.texStorage2D(r.TEXTURE_2D,tt,ct,yt[0].width,yt[0].height);for(let Y=0,Z=yt.length;Y<Z;Y++)rt=yt[Y],y.format!==ui?pt!==null?wt?I&&e.compressedTexSubImage2D(r.TEXTURE_2D,Y,0,0,rt.width,rt.height,pt,rt.data):e.compressedTexImage2D(r.TEXTURE_2D,Y,ct,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?I&&e.texSubImage2D(r.TEXTURE_2D,Y,0,0,rt.width,rt.height,pt,at,rt.data):e.texImage2D(r.TEXTURE_2D,Y,ct,rt.width,rt.height,0,pt,at,rt.data)}else if(y.isDataArrayTexture)if(wt){if(Nt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,tt,ct,Q.width,Q.height,Q.depth),I)if(y.layerUpdates.size>0){const Y=_d(Q.width,Q.height,y.format,y.type);for(const Z of y.layerUpdates){const ft=Q.data.subarray(Z*Y/Q.data.BYTES_PER_ELEMENT,(Z+1)*Y/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,pt,at,ft)}y.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pt,at,Q.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,ct,Q.width,Q.height,Q.depth,0,pt,at,Q.data);else if(y.isData3DTexture)wt?(Nt&&e.texStorage3D(r.TEXTURE_3D,tt,ct,Q.width,Q.height,Q.depth),I&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pt,at,Q.data)):e.texImage3D(r.TEXTURE_3D,0,ct,Q.width,Q.height,Q.depth,0,pt,at,Q.data);else if(y.isFramebufferTexture){if(Nt)if(wt)e.texStorage2D(r.TEXTURE_2D,tt,ct,Q.width,Q.height);else{let Y=Q.width,Z=Q.height;for(let ft=0;ft<tt;ft++)e.texImage2D(r.TEXTURE_2D,ft,ct,Y,Z,0,pt,at,null),Y>>=1,Z>>=1}}else if(yt.length>0){if(wt&&Nt){const Y=Pt(yt[0]);e.texStorage2D(r.TEXTURE_2D,tt,ct,Y.width,Y.height)}for(let Y=0,Z=yt.length;Y<Z;Y++)rt=yt[Y],wt?I&&e.texSubImage2D(r.TEXTURE_2D,Y,0,0,pt,at,rt):e.texImage2D(r.TEXTURE_2D,Y,ct,pt,at,rt);y.generateMipmaps=!1}else if(wt){if(Nt){const Y=Pt(Q);e.texStorage2D(r.TEXTURE_2D,tt,ct,Y.width,Y.height)}I&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,pt,at,Q)}else e.texImage2D(r.TEXTURE_2D,0,ct,pt,at,Q);p(y)&&m(nt),Et.__version=j.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function X(A,y,H){if(y.image.length!==6)return;const nt=Vt(A,y),st=y.source;e.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+H);const j=n.get(st);if(st.version!==j.__version||nt===!0){e.activeTexture(r.TEXTURE0+H);const Et=me.getPrimaries(me.workingColorSpace),q=y.colorSpace===Qi?null:me.getPrimaries(y.colorSpace),it=y.colorSpace===Qi||Et===q?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);const St=y.isCompressedTexture||y.image[0].isCompressedTexture,Q=y.image[0]&&y.image[0].isDataTexture,pt=[];for(let Z=0;Z<6;Z++)!St&&!Q?pt[Z]=g(y.image[Z],!0,i.maxCubemapSize):pt[Z]=Q?y.image[Z].image:y.image[Z],pt[Z]=$t(y,pt[Z]);const at=pt[0],ct=s.convert(y.format,y.colorSpace),rt=s.convert(y.type),yt=M(y.internalFormat,ct,rt,y.colorSpace),wt=y.isVideoTexture!==!0,Nt=j.__version===void 0||nt===!0,I=st.dataReady;let tt=S(y,at);lt(r.TEXTURE_CUBE_MAP,y);let Y;if(St){wt&&Nt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,tt,yt,at.width,at.height);for(let Z=0;Z<6;Z++){Y=pt[Z].mipmaps;for(let ft=0;ft<Y.length;ft++){const mt=Y[ft];y.format!==ui?ct!==null?wt?I&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ft,0,0,mt.width,mt.height,ct,mt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ft,yt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):wt?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ft,0,0,mt.width,mt.height,ct,rt,mt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ft,yt,mt.width,mt.height,0,ct,rt,mt.data)}}}else{if(Y=y.mipmaps,wt&&Nt){Y.length>0&&tt++;const Z=Pt(pt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,tt,yt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Q){wt?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,pt[Z].width,pt[Z].height,ct,rt,pt[Z].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,yt,pt[Z].width,pt[Z].height,0,ct,rt,pt[Z].data);for(let ft=0;ft<Y.length;ft++){const Kt=Y[ft].image[Z].image;wt?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ft+1,0,0,Kt.width,Kt.height,ct,rt,Kt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ft+1,yt,Kt.width,Kt.height,0,ct,rt,Kt.data)}}else{wt?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ct,rt,pt[Z]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,yt,ct,rt,pt[Z]);for(let ft=0;ft<Y.length;ft++){const mt=Y[ft];wt?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ft+1,0,0,ct,rt,mt.image[Z]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ft+1,yt,ct,rt,mt.image[Z])}}}p(y)&&m(r.TEXTURE_CUBE_MAP),j.__version=st.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function et(A,y,H,nt,st,j){const Et=s.convert(H.format,H.colorSpace),q=s.convert(H.type),it=M(H.internalFormat,Et,q,H.colorSpace);if(!n.get(y).__hasExternalTextures){const Q=Math.max(1,y.width>>j),pt=Math.max(1,y.height>>j);st===r.TEXTURE_3D||st===r.TEXTURE_2D_ARRAY?e.texImage3D(st,j,it,Q,pt,y.depth,0,Et,q,null):e.texImage2D(st,j,it,Q,pt,0,Et,q,null)}e.bindFramebuffer(r.FRAMEBUFFER,A),Ut(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,st,n.get(H).__webglTexture,0,kt(y)):(st===r.TEXTURE_2D||st>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,nt,st,n.get(H).__webglTexture,j),e.bindFramebuffer(r.FRAMEBUFFER,null)}function dt(A,y,H){if(r.bindRenderbuffer(r.RENDERBUFFER,A),y.depthBuffer){const nt=y.depthTexture,st=nt&&nt.isDepthTexture?nt.type:null,j=x(y.stencilBuffer,st),Et=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=kt(y);Ut(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,q,j,y.width,y.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,q,j,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,j,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,A)}else{const nt=y.textures;for(let st=0;st<nt.length;st++){const j=nt[st],Et=s.convert(j.format,j.colorSpace),q=s.convert(j.type),it=M(j.internalFormat,Et,q,j.colorSpace),St=kt(y);H&&Ut(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,St,it,y.width,y.height):Ut(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,St,it,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,it,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ot(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),$(y.depthTexture,0);const nt=n.get(y.depthTexture).__webglTexture,st=kt(y);if(y.depthTexture.format===zs)Ut(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,nt,0,st):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,nt,0);else if(y.depthTexture.format===js)Ut(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,nt,0,st):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function bt(A){const y=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const nt=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),nt){const st=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,nt.removeEventListener("dispose",st)};nt.addEventListener("dispose",st),y.__depthDisposeCallback=st}y.__boundDepthTexture=nt}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ot(y.__webglFramebuffer,A)}else if(H){y.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[nt]),y.__webglDepthbuffer[nt]===void 0)y.__webglDepthbuffer[nt]=r.createRenderbuffer(),dt(y.__webglDepthbuffer[nt],A,!1);else{const st=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[nt];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,st,r.RENDERBUFFER,j)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),dt(y.__webglDepthbuffer,A,!1);else{const nt=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,st=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,st),r.framebufferRenderbuffer(r.FRAMEBUFFER,nt,r.RENDERBUFFER,st)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Tt(A,y,H){const nt=n.get(A);y!==void 0&&et(nt.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&bt(A)}function qt(A){const y=A.texture,H=n.get(A),nt=n.get(y);A.addEventListener("dispose",b);const st=A.textures,j=A.isWebGLCubeRenderTarget===!0,Et=st.length>1;if(Et||(nt.__webglTexture===void 0&&(nt.__webglTexture=r.createTexture()),nt.__version=y.version,o.memory.textures++),j){H.__webglFramebuffer=[];for(let q=0;q<6;q++)if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer[q]=[];for(let it=0;it<y.mipmaps.length;it++)H.__webglFramebuffer[q][it]=r.createFramebuffer()}else H.__webglFramebuffer[q]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer=[];for(let q=0;q<y.mipmaps.length;q++)H.__webglFramebuffer[q]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(Et)for(let q=0,it=st.length;q<it;q++){const St=n.get(st[q]);St.__webglTexture===void 0&&(St.__webglTexture=r.createTexture(),o.memory.textures++)}if(A.samples>0&&Ut(A)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let q=0;q<st.length;q++){const it=st[q];H.__webglColorRenderbuffer[q]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[q]);const St=s.convert(it.format,it.colorSpace),Q=s.convert(it.type),pt=M(it.internalFormat,St,Q,it.colorSpace,A.isXRRenderTarget===!0),at=kt(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,at,pt,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+q,r.RENDERBUFFER,H.__webglColorRenderbuffer[q])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),dt(H.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){e.bindTexture(r.TEXTURE_CUBE_MAP,nt.__webglTexture),lt(r.TEXTURE_CUBE_MAP,y);for(let q=0;q<6;q++)if(y.mipmaps&&y.mipmaps.length>0)for(let it=0;it<y.mipmaps.length;it++)et(H.__webglFramebuffer[q][it],A,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+q,it);else et(H.__webglFramebuffer[q],A,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);p(y)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let q=0,it=st.length;q<it;q++){const St=st[q],Q=n.get(St);e.bindTexture(r.TEXTURE_2D,Q.__webglTexture),lt(r.TEXTURE_2D,St),et(H.__webglFramebuffer,A,St,r.COLOR_ATTACHMENT0+q,r.TEXTURE_2D,0),p(St)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let q=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(q=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(q,nt.__webglTexture),lt(q,y),y.mipmaps&&y.mipmaps.length>0)for(let it=0;it<y.mipmaps.length;it++)et(H.__webglFramebuffer[it],A,y,r.COLOR_ATTACHMENT0,q,it);else et(H.__webglFramebuffer,A,y,r.COLOR_ATTACHMENT0,q,0);p(y)&&m(q),e.unbindTexture()}A.depthBuffer&&bt(A)}function Wt(A){const y=A.textures;for(let H=0,nt=y.length;H<nt;H++){const st=y[H];if(p(st)){const j=A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Et=n.get(st).__webglTexture;e.bindTexture(j,Et),m(j),e.unbindTexture()}}}const Bt=[],D=[];function se(A){if(A.samples>0){if(Ut(A)===!1){const y=A.textures,H=A.width,nt=A.height;let st=r.COLOR_BUFFER_BIT;const j=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Et=n.get(A),q=y.length>1;if(q)for(let it=0;it<y.length;it++)e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+it,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+it,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let it=0;it<y.length;it++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(st|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(st|=r.STENCIL_BUFFER_BIT)),q){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Et.__webglColorRenderbuffer[it]);const St=n.get(y[it]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,St,0)}r.blitFramebuffer(0,0,H,nt,0,0,H,nt,st,r.NEAREST),l===!0&&(Bt.length=0,D.length=0,Bt.push(r.COLOR_ATTACHMENT0+it),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Bt.push(j),D.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,D)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Bt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),q)for(let it=0;it<y.length;it++){e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+it,r.RENDERBUFFER,Et.__webglColorRenderbuffer[it]);const St=n.get(y[it]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+it,r.TEXTURE_2D,St,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const y=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function kt(A){return Math.min(i.maxSamples,A.samples)}function Ut(A){const y=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function B(A){const y=o.render.frame;u.get(A)!==y&&(u.set(A,y),A.update())}function $t(A,y){const H=A.colorSpace,nt=A.format,st=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==vr&&H!==Qi&&(me.getTransfer(H)===be?(nt!==ui||st!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),y}function Pt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=T,this.setTexture2D=$,this.setTexture2DArray=J,this.setTexture3D=G,this.setTextureCube=K,this.rebindTextures=Tt,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=Ut}function qy(r,t){function e(n,i=Qi){let s;const o=me.getTransfer(i);if(n===Gi)return r.UNSIGNED_BYTE;if(n===yh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Eh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===_m)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===pm)return r.BYTE;if(n===mm)return r.SHORT;if(n===Qo)return r.UNSIGNED_SHORT;if(n===Sh)return r.INT;if(n===Qr)return r.UNSIGNED_INT;if(n===Mi)return r.FLOAT;if(n===ra)return r.HALF_FLOAT;if(n===gm)return r.ALPHA;if(n===vm)return r.RGB;if(n===ui)return r.RGBA;if(n===xm)return r.LUMINANCE;if(n===Mm)return r.LUMINANCE_ALPHA;if(n===zs)return r.DEPTH_COMPONENT;if(n===js)return r.DEPTH_STENCIL;if(n===Th)return r.RED;if(n===wh)return r.RED_INTEGER;if(n===Sm)return r.RG;if(n===bh)return r.RG_INTEGER;if(n===Ah)return r.RGBA_INTEGER;if(n===tl||n===el||n===nl||n===il)if(o===be)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===tl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===el)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===tl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===el)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===nl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===il)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pu||n===mu||n===_u||n===gu)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===pu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_u)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vu||n===xu||n===Mu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===vu||n===xu)return o===be?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Mu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Su||n===yu||n===Eu||n===Tu||n===wu||n===bu||n===Au||n===Cu||n===Ru||n===Pu||n===Lu||n===Du||n===Iu||n===Uu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Su)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Eu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Au)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ru)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Du)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Iu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rl||n===Nu||n===Ou)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===rl)return o===be?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ou)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ym||n===Fu||n===Bu||n===zu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===rl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Fu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Js?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class $y extends zn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Fi extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ky={type:"move"};class Ec{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ky)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Fi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Zy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new je,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new _r({vertexShader:Zy,fragmentShader:Jy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fe(new $r(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qy extends to{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,_=null;const g=new jy,p=e.getContextAttributes();let m=null,M=null;const x=[],S=[],C=new zt;let b=null;const E=new zn;E.layers.enable(1),E.viewport=new ve;const R=new zn;R.layers.enable(2),R.viewport=new ve;const F=[E,R],v=new $y;v.layers.enable(1),v.layers.enable(2);let T=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let et=x[X];return et===void 0&&(et=new Ec,x[X]=et),et.getTargetRaySpace()},this.getControllerGrip=function(X){let et=x[X];return et===void 0&&(et=new Ec,x[X]=et),et.getGripSpace()},this.getHand=function(X){let et=x[X];return et===void 0&&(et=new Ec,x[X]=et),et.getHandSpace()};function z(X){const et=S.indexOf(X.inputSource);if(et===-1)return;const dt=x[et];dt!==void 0&&(dt.update(X.inputSource,X.frame,c||o),dt.dispatchEvent({type:X.type,data:X.inputSource}))}function $(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",J);for(let X=0;X<x.length;X++){const et=S[X];et!==null&&(S[X]=null,x[X].disconnect(et))}T=null,U=null,g.reset(),t.setRenderTarget(m),f=null,d=null,h=null,i=null,M=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",$),i.addEventListener("inputsourceschange",J),p.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){const et={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new ts(f.framebufferWidth,f.framebufferHeight,{format:ui,type:Gi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let et=null,dt=null,ot=null;p.depth&&(ot=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=p.stencil?js:zs,dt=p.stencil?Js:Qr);const bt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:s};h=new XRWebGLBinding(i,e),d=h.createProjectionLayer(bt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new ts(d.textureWidth,d.textureHeight,{format:ui,type:Gi,depthTexture:new Fm(d.textureWidth,d.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Yt.setContext(i),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(X){for(let et=0;et<X.removed.length;et++){const dt=X.removed[et],ot=S.indexOf(dt);ot>=0&&(S[ot]=null,x[ot].disconnect(dt))}for(let et=0;et<X.added.length;et++){const dt=X.added[et];let ot=S.indexOf(dt);if(ot===-1){for(let Tt=0;Tt<x.length;Tt++)if(Tt>=S.length){S.push(dt),ot=Tt;break}else if(S[Tt]===null){S[Tt]=dt,ot=Tt;break}if(ot===-1)break}const bt=x[ot];bt&&bt.connect(dt)}}const G=new L,K=new L;function k(X,et,dt){G.setFromMatrixPosition(et.matrixWorld),K.setFromMatrixPosition(dt.matrixWorld);const ot=G.distanceTo(K),bt=et.projectionMatrix.elements,Tt=dt.projectionMatrix.elements,qt=bt[14]/(bt[10]-1),Wt=bt[14]/(bt[10]+1),Bt=(bt[9]+1)/bt[5],D=(bt[9]-1)/bt[5],se=(bt[8]-1)/bt[0],kt=(Tt[8]+1)/Tt[0],Ut=qt*se,B=qt*kt,$t=ot/(-se+kt),Pt=$t*-se;if(et.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Pt),X.translateZ($t),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),bt[10]===-1)X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const A=qt+$t,y=Wt+$t,H=Ut-Pt,nt=B+(ot-Pt),st=Bt*Wt/y*A,j=D*Wt/y*A;X.projectionMatrix.makePerspective(H,nt,st,j,A,y),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ut(X,et){et===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(et.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let et=X.near,dt=X.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(dt=g.depthFar)),v.near=R.near=E.near=et,v.far=R.far=E.far=dt,(T!==v.near||U!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,U=v.far);const ot=X.parent,bt=v.cameras;ut(v,ot);for(let Tt=0;Tt<bt.length;Tt++)ut(bt[Tt],ot);bt.length===2?k(v,E,R):v.projectionMatrix.copy(E.projectionMatrix),P(X,v,ot)};function P(X,et,dt){dt===null?X.matrix.copy(et.matrixWorld):(X.matrix.copy(dt.matrixWorld),X.matrix.invert(),X.matrix.multiply(et.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ta*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let lt=null;function Vt(X,et){if(u=et.getViewerPose(c||o),_=et,u!==null){const dt=u.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let ot=!1;dt.length!==v.cameras.length&&(v.cameras.length=0,ot=!0);for(let Tt=0;Tt<dt.length;Tt++){const qt=dt[Tt];let Wt=null;if(f!==null)Wt=f.getViewport(qt);else{const D=h.getViewSubImage(d,qt);Wt=D.viewport,Tt===0&&(t.setRenderTargetTextures(M,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(M))}let Bt=F[Tt];Bt===void 0&&(Bt=new zn,Bt.layers.enable(Tt),Bt.viewport=new ve,F[Tt]=Bt),Bt.matrix.fromArray(qt.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(qt.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),Tt===0&&(v.matrix.copy(Bt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ot===!0&&v.cameras.push(Bt)}const bt=i.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const Tt=h.getDepthInformation(dt[0]);Tt&&Tt.isValid&&Tt.texture&&g.init(t,Tt,i.renderState)}}for(let dt=0;dt<x.length;dt++){const ot=S[dt],bt=x[dt];ot!==null&&bt!==void 0&&bt.update(ot,et,c||o)}lt&&lt(X,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),_=null}const Yt=new Nm;Yt.setAnimationLoop(Vt),this.setAnimationLoop=function(X){lt=X},this.dispose=function(){}}}const br=new fi,tE=new ce;function eE(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Dm(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,M,x,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,S)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,M,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===yn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===yn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=t.get(m),x=M.envMap,S=M.envMapRotation;x&&(p.envMap.value=x,br.copy(S),br.x*=-1,br.y*=-1,br.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),p.envMapRotation.value.setFromMatrix4(tE.makeRotationFromEuler(br)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===yn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function nE(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const S=x.program;n.uniformBlockBinding(M,S)}function c(M,x){let S=i[M.id];S===void 0&&(_(M),S=u(M),i[M.id]=S,M.addEventListener("dispose",p));const C=x.program;n.updateUBOMapping(M,C);const b=t.render.frame;s[M.id]!==b&&(d(M),s[M.id]=b)}function u(M){const x=h();M.__bindingPointIndex=x;const S=r.createBuffer(),C=M.__size,b=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,C,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,S),S}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=i[M.id],S=M.uniforms,C=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let b=0,E=S.length;b<E;b++){const R=Array.isArray(S[b])?S[b]:[S[b]];for(let F=0,v=R.length;F<v;F++){const T=R[F];if(f(T,b,F,C)===!0){const U=T.__offset,z=Array.isArray(T.value)?T.value:[T.value];let $=0;for(let J=0;J<z.length;J++){const G=z[J],K=g(G);typeof G=="number"||typeof G=="boolean"?(T.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,U+$,T.__data)):G.isMatrix3?(T.__data[0]=G.elements[0],T.__data[1]=G.elements[1],T.__data[2]=G.elements[2],T.__data[3]=0,T.__data[4]=G.elements[3],T.__data[5]=G.elements[4],T.__data[6]=G.elements[5],T.__data[7]=0,T.__data[8]=G.elements[6],T.__data[9]=G.elements[7],T.__data[10]=G.elements[8],T.__data[11]=0):(G.toArray(T.__data,$),$+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,T.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(M,x,S,C){const b=M.value,E=x+"_"+S;if(C[E]===void 0)return typeof b=="number"||typeof b=="boolean"?C[E]=b:C[E]=b.clone(),!0;{const R=C[E];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return C[E]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function _(M){const x=M.uniforms;let S=0;const C=16;for(let E=0,R=x.length;E<R;E++){const F=Array.isArray(x[E])?x[E]:[x[E]];for(let v=0,T=F.length;v<T;v++){const U=F[v],z=Array.isArray(U.value)?U.value:[U.value];for(let $=0,J=z.length;$<J;$++){const G=z[$],K=g(G),k=S%C,ut=k%K.boundary,P=k+ut;S+=ut,P!==0&&C-P<K.storage&&(S+=C-P),U.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=K.storage}}}const b=S%C;return b>0&&(S+=C-b),M.__size=S,M.__cache={},this}function g(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){const x=M.target;x.removeEventListener("dispose",p);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function m(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class iE{constructor(t={}){const{canvas:e=W0(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tn,this.toneMapping=cr,this.toneMappingExposure=1;const x=this;let S=!1,C=0,b=0,E=null,R=-1,F=null;const v=new ve,T=new ve;let U=null;const z=new re(0);let $=0,J=e.width,G=e.height,K=1,k=null,ut=null;const P=new ve(0,0,J,G),lt=new ve(0,0,J,G);let Vt=!1;const Yt=new Lh;let X=!1,et=!1;const dt=new ce,ot=new ce,bt=new L,Tt=new ve,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function Bt(){return E===null?K:1}let D=n;function se(w,O){return e.getContext(w,O)}try{const w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Mh}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",mt,!1),D===null){const O="webgl2";if(D=se(O,w),D===null)throw se(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let kt,Ut,B,$t,Pt,A,y,H,nt,st,j,Et,q,it,St,Q,pt,at,ct,rt,yt,wt,Nt,I;function tt(){kt=new lS(D),kt.init(),wt=new qy(D,kt),Ut=new nS(D,kt,t,wt),B=new Wy(D),Ut.reverseDepthBuffer&&B.buffers.depth.setReversed(!0),$t=new hS(D),Pt=new Ry,A=new Yy(D,kt,B,Pt,Ut,wt,$t),y=new rS(x),H=new aS(x),nt=new vv(D),Nt=new tS(D,nt),st=new cS(D,nt,$t,Nt),j=new dS(D,st,nt,$t),ct=new fS(D,Ut,A),Q=new iS(Pt),Et=new Cy(x,y,H,kt,Ut,Nt,Q),q=new eE(x,Pt),it=new Ly,St=new Fy(kt),at=new QM(x,y,H,B,j,d,l),pt=new Vy(x,j,Ut),I=new nE(D,$t,Ut,B),rt=new eS(D,kt,$t),yt=new uS(D,kt,$t),$t.programs=Et.programs,x.capabilities=Ut,x.extensions=kt,x.properties=Pt,x.renderLists=it,x.shadowMap=pt,x.state=B,x.info=$t}tt();const Y=new Qy(x,D);this.xr=Y,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=kt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=kt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(w){w!==void 0&&(K=w,this.setSize(J,G,!1))},this.getSize=function(w){return w.set(J,G)},this.setSize=function(w,O,V=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=w,G=O,e.width=Math.floor(w*K),e.height=Math.floor(O*K),V===!0&&(e.style.width=w+"px",e.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(J*K,G*K).floor()},this.setDrawingBufferSize=function(w,O,V){J=w,G=O,K=V,e.width=Math.floor(w*V),e.height=Math.floor(O*V),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(v)},this.getViewport=function(w){return w.copy(P)},this.setViewport=function(w,O,V,W){w.isVector4?P.set(w.x,w.y,w.z,w.w):P.set(w,O,V,W),B.viewport(v.copy(P).multiplyScalar(K).round())},this.getScissor=function(w){return w.copy(lt)},this.setScissor=function(w,O,V,W){w.isVector4?lt.set(w.x,w.y,w.z,w.w):lt.set(w,O,V,W),B.scissor(T.copy(lt).multiplyScalar(K).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(w){B.setScissorTest(Vt=w)},this.setOpaqueSort=function(w){k=w},this.setTransparentSort=function(w){ut=w},this.getClearColor=function(w){return w.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(w=!0,O=!0,V=!0){let W=0;if(w){let N=!1;if(E!==null){const ht=E.texture.format;N=ht===Ah||ht===bh||ht===wh}if(N){const ht=E.texture.type,Mt=ht===Gi||ht===Qr||ht===Qo||ht===Js||ht===yh||ht===Eh,gt=at.getClearColor(),_t=at.getClearAlpha(),Lt=gt.r,Gt=gt.g,Rt=gt.b;Mt?(f[0]=Lt,f[1]=Gt,f[2]=Rt,f[3]=_t,D.clearBufferuiv(D.COLOR,0,f)):(_[0]=Lt,_[1]=Gt,_[2]=Rt,_[3]=_t,D.clearBufferiv(D.COLOR,0,_))}else W|=D.COLOR_BUFFER_BIT}O&&(W|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),it.dispose(),St.dispose(),Pt.dispose(),y.dispose(),H.dispose(),j.dispose(),Nt.dispose(),I.dispose(),Et.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",he),Y.removeEventListener("sessionend",vt),Ht.stop()};function Z(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=$t.autoReset,O=pt.enabled,V=pt.autoUpdate,W=pt.needsUpdate,N=pt.type;tt(),$t.autoReset=w,pt.enabled=O,pt.autoUpdate=V,pt.needsUpdate=W,pt.type=N}function mt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Kt(w){const O=w.target;O.removeEventListener("dispose",Kt),xe(O)}function xe(w){Ae(w),Pt.remove(w)}function Ae(w){const O=Pt.get(w).programs;O!==void 0&&(O.forEach(function(V){Et.releaseProgram(V)}),w.isShaderMaterial&&Et.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,V,W,N,ht){O===null&&(O=qt);const Mt=N.isMesh&&N.matrixWorld.determinant()<0,gt=_e(w,O,V,W,N);B.setMaterial(W,Mt);let _t=V.index,Lt=1;if(W.wireframe===!0){if(_t=st.getWireframeAttribute(V),_t===void 0)return;Lt=2}const Gt=V.drawRange,Rt=V.attributes.position;let le=Gt.start*Lt,ae=(Gt.start+Gt.count)*Lt;ht!==null&&(le=Math.max(le,ht.start*Lt),ae=Math.min(ae,(ht.start+ht.count)*Lt)),_t!==null?(le=Math.max(le,0),ae=Math.min(ae,_t.count)):Rt!=null&&(le=Math.max(le,0),ae=Math.min(ae,Rt.count));const ge=ae-le;if(ge<0||ge===1/0)return;Nt.setup(N,W,gt,V,_t);let Ye,te=rt;if(_t!==null&&(Ye=nt.get(_t),te=yt,te.setIndex(Ye)),N.isMesh)W.wireframe===!0?(B.setLineWidth(W.wireframeLinewidth*Bt()),te.setMode(D.LINES)):te.setMode(D.TRIANGLES);else if(N.isLine){let Ft=W.linewidth;Ft===void 0&&(Ft=1),B.setLineWidth(Ft*Bt()),N.isLineSegments?te.setMode(D.LINES):N.isLineLoop?te.setMode(D.LINE_LOOP):te.setMode(D.LINE_STRIP)}else N.isPoints?te.setMode(D.POINTS):N.isSprite&&te.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)te.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))te.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ft=N._multiDrawStarts,en=N._multiDrawCounts,de=N._multiDrawCount,ri=_t?nt.get(_t).bytesPerElement:1,rs=Pt.get(W).currentProgram.getUniforms();for(let Dn=0;Dn<de;Dn++)rs.setValue(D,"_gl_DrawID",Dn),te.render(Ft[Dn]/ri,en[Dn])}else if(N.isInstancedMesh)te.renderInstances(le,ge,N.count);else if(V.isInstancedBufferGeometry){const Ft=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,en=Math.min(V.instanceCount,Ft);te.renderInstances(le,ge,en)}else te.render(le,ge)};function oe(w,O,V){w.transparent===!0&&w.side===Oi&&w.forceSinglePass===!1?(w.side=yn,w.needsUpdate=!0,Ue(w,O,V),w.side=mr,w.needsUpdate=!0,Ue(w,O,V),w.side=Oi):Ue(w,O,V)}this.compile=function(w,O,V=null){V===null&&(V=w),p=St.get(V),p.init(O),M.push(p),V.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),w!==V&&w.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const W=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ht=N.material;if(ht)if(Array.isArray(ht))for(let Mt=0;Mt<ht.length;Mt++){const gt=ht[Mt];oe(gt,V,N),W.add(gt)}else oe(ht,V,N),W.add(ht)}),M.pop(),p=null,W},this.compileAsync=function(w,O,V=null){const W=this.compile(w,O,V);return new Promise(N=>{function ht(){if(W.forEach(function(Mt){Pt.get(Mt).currentProgram.isReady()&&W.delete(Mt)}),W.size===0){N(w);return}setTimeout(ht,10)}kt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Dt=null;function Ct(w){Dt&&Dt(w)}function he(){Ht.stop()}function vt(){Ht.start()}const Ht=new Nm;Ht.setAnimationLoop(Ct),typeof self<"u"&&Ht.setContext(self),this.setAnimationLoop=function(w){Dt=w,Y.setAnimationLoop(w),w===null?Ht.stop():Ht.start()},Y.addEventListener("sessionstart",he),Y.addEventListener("sessionend",vt),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(O),O=Y.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,O,E),p=St.get(w,M.length),p.init(O),M.push(p),ot.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Yt.setFromProjectionMatrix(ot),et=this.localClippingEnabled,X=Q.init(this.clippingPlanes,et),g=it.get(w,m.length),g.init(),m.push(g),Y.enabled===!0&&Y.isPresenting===!0){const ht=x.xr.getDepthSensingMesh();ht!==null&&Ot(ht,O,-1/0,x.sortObjects)}Ot(w,O,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(k,ut),Wt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Wt&&at.addToRenderList(g,w),this.info.render.frame++,X===!0&&Q.beginShadows();const V=p.state.shadowsArray;pt.render(V,w,O),X===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=g.opaque,N=g.transmissive;if(p.setupLights(),O.isArrayCamera){const ht=O.cameras;if(N.length>0)for(let Mt=0,gt=ht.length;Mt<gt;Mt++){const _t=ht[Mt];Ie(W,N,w,_t)}Wt&&at.render(w);for(let Mt=0,gt=ht.length;Mt<gt;Mt++){const _t=ht[Mt];Xt(g,w,_t,_t.viewport)}}else N.length>0&&Ie(W,N,w,O),Wt&&at.render(w),Xt(g,w,O);E!==null&&(A.updateMultisampleRenderTarget(E),A.updateRenderTargetMipmap(E)),w.isScene===!0&&w.onAfterRender(x,w,O),Nt.resetDefaultState(),R=-1,F=null,M.pop(),M.length>0?(p=M[M.length-1],X===!0&&Q.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function Ot(w,O,V,W){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Yt.intersectsSprite(w)){W&&Tt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ot);const Mt=j.update(w),gt=w.material;gt.visible&&g.push(w,Mt,gt,V,Tt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Yt.intersectsObject(w))){const Mt=j.update(w),gt=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Tt.copy(w.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Tt.copy(Mt.boundingSphere.center)),Tt.applyMatrix4(w.matrixWorld).applyMatrix4(ot)),Array.isArray(gt)){const _t=Mt.groups;for(let Lt=0,Gt=_t.length;Lt<Gt;Lt++){const Rt=_t[Lt],le=gt[Rt.materialIndex];le&&le.visible&&g.push(w,Mt,le,V,Tt.z,Rt)}}else gt.visible&&g.push(w,Mt,gt,V,Tt.z,null)}}const ht=w.children;for(let Mt=0,gt=ht.length;Mt<gt;Mt++)Ot(ht[Mt],O,V,W)}function Xt(w,O,V,W){const N=w.opaque,ht=w.transmissive,Mt=w.transparent;p.setupLightsView(V),X===!0&&Q.setGlobalState(x.clippingPlanes,V),W&&B.viewport(v.copy(W)),N.length>0&&Zt(N,O,V),ht.length>0&&Zt(ht,O,V),Mt.length>0&&Zt(Mt,O,V),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function Ie(w,O,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new ts(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?ra:Gi,minFilter:kr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:me.workingColorSpace}));const ht=p.state.transmissionRenderTarget[W.id],Mt=W.viewport||v;ht.setSize(Mt.z,Mt.w);const gt=x.getRenderTarget();x.setRenderTarget(ht),x.getClearColor(z),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear(),Wt&&at.render(V);const _t=x.toneMapping;x.toneMapping=cr;const Lt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),X===!0&&Q.setGlobalState(x.clippingPlanes,W),Zt(w,V,W),A.updateMultisampleRenderTarget(ht),A.updateRenderTargetMipmap(ht),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Rt=0,le=O.length;Rt<le;Rt++){const ae=O[Rt],ge=ae.object,Ye=ae.geometry,te=ae.material,Ft=ae.group;if(te.side===Oi&&ge.layers.test(W.layers)){const en=te.side;te.side=yn,te.needsUpdate=!0,Ce(ge,V,W,Ye,te,Ft),te.side=en,te.needsUpdate=!0,Gt=!0}}Gt===!0&&(A.updateMultisampleRenderTarget(ht),A.updateRenderTargetMipmap(ht))}x.setRenderTarget(gt),x.setClearColor(z,$),Lt!==void 0&&(W.viewport=Lt),x.toneMapping=_t}function Zt(w,O,V){const W=O.isScene===!0?O.overrideMaterial:null;for(let N=0,ht=w.length;N<ht;N++){const Mt=w[N],gt=Mt.object,_t=Mt.geometry,Lt=W===null?Mt.material:W,Gt=Mt.group;gt.layers.test(V.layers)&&Ce(gt,O,V,_t,Lt,Gt)}}function Ce(w,O,V,W,N,ht){w.onBeforeRender(x,O,V,W,N,ht),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(x,O,V,W,w,ht),N.transparent===!0&&N.side===Oi&&N.forceSinglePass===!1?(N.side=yn,N.needsUpdate=!0,x.renderBufferDirect(V,O,W,N,w,ht),N.side=mr,N.needsUpdate=!0,x.renderBufferDirect(V,O,W,N,w,ht),N.side=Oi):x.renderBufferDirect(V,O,W,N,w,ht),w.onAfterRender(x,O,V,W,N,ht)}function Ue(w,O,V){O.isScene!==!0&&(O=qt);const W=Pt.get(w),N=p.state.lights,ht=p.state.shadowsArray,Mt=N.state.version,gt=Et.getParameters(w,N.state,ht,O,V),_t=Et.getProgramCacheKey(gt);let Lt=W.programs;W.environment=w.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(w.isMeshStandardMaterial?H:y).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Lt===void 0&&(w.addEventListener("dispose",Kt),Lt=new Map,W.programs=Lt);let Gt=Lt.get(_t);if(Gt!==void 0){if(W.currentProgram===Gt&&W.lightsStateVersion===Mt)return Me(w,gt),Gt}else gt.uniforms=Et.getUniforms(w),w.onBeforeCompile(gt,x),Gt=Et.acquireProgram(gt,_t),Lt.set(_t,Gt),W.uniforms=gt.uniforms;const Rt=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Rt.clippingPlanes=Q.uniform),Me(w,gt),W.needsLights=we(w),W.lightsStateVersion=Mt,W.needsLights&&(Rt.ambientLightColor.value=N.state.ambient,Rt.lightProbe.value=N.state.probe,Rt.directionalLights.value=N.state.directional,Rt.directionalLightShadows.value=N.state.directionalShadow,Rt.spotLights.value=N.state.spot,Rt.spotLightShadows.value=N.state.spotShadow,Rt.rectAreaLights.value=N.state.rectArea,Rt.ltc_1.value=N.state.rectAreaLTC1,Rt.ltc_2.value=N.state.rectAreaLTC2,Rt.pointLights.value=N.state.point,Rt.pointLightShadows.value=N.state.pointShadow,Rt.hemisphereLights.value=N.state.hemi,Rt.directionalShadowMap.value=N.state.directionalShadowMap,Rt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Rt.spotShadowMap.value=N.state.spotShadowMap,Rt.spotLightMatrix.value=N.state.spotLightMatrix,Rt.spotLightMap.value=N.state.spotLightMap,Rt.pointShadowMap.value=N.state.pointShadowMap,Rt.pointShadowMatrix.value=N.state.pointShadowMatrix),W.currentProgram=Gt,W.uniformsList=null,Gt}function Te(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=ol.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Me(w,O){const V=Pt.get(w);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.batchingColor=O.batchingColor,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function _e(w,O,V,W,N){O.isScene!==!0&&(O=qt),A.resetTextureUnits();const ht=O.fog,Mt=W.isMeshStandardMaterial?O.environment:null,gt=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:vr,_t=(W.isMeshStandardMaterial?H:y).get(W.envMap||Mt),Lt=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Gt=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Rt=!!V.morphAttributes.position,le=!!V.morphAttributes.normal,ae=!!V.morphAttributes.color;let ge=cr;W.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(ge=x.toneMapping);const Ye=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,te=Ye!==void 0?Ye.length:0,Ft=Pt.get(W),en=p.state.lights;if(X===!0&&(et===!0||w!==F)){const qn=w===F&&W.id===R;Q.setState(W,w,qn)}let de=!1;W.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==en.state.version||Ft.outputColorSpace!==gt||N.isBatchedMesh&&Ft.batching===!1||!N.isBatchedMesh&&Ft.batching===!0||N.isBatchedMesh&&Ft.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ft.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ft.instancing===!1||!N.isInstancedMesh&&Ft.instancing===!0||N.isSkinnedMesh&&Ft.skinning===!1||!N.isSkinnedMesh&&Ft.skinning===!0||N.isInstancedMesh&&Ft.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ft.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ft.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ft.instancingMorph===!1&&N.morphTexture!==null||Ft.envMap!==_t||W.fog===!0&&Ft.fog!==ht||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==Q.numPlanes||Ft.numIntersection!==Q.numIntersection)||Ft.vertexAlphas!==Lt||Ft.vertexTangents!==Gt||Ft.morphTargets!==Rt||Ft.morphNormals!==le||Ft.morphColors!==ae||Ft.toneMapping!==ge||Ft.morphTargetsCount!==te)&&(de=!0):(de=!0,Ft.__version=W.version);let ri=Ft.currentProgram;de===!0&&(ri=Ue(W,O,N));let rs=!1,Dn=!1,Ll=!1;const Ne=ri.getUniforms(),Wi=Ft.uniforms;if(B.useProgram(ri.program)&&(rs=!0,Dn=!0,Ll=!0),W.id!==R&&(R=W.id,Dn=!0),rs||F!==w){Ut.reverseDepthBuffer?(dt.copy(w.projectionMatrix),Y0(dt),q0(dt),Ne.setValue(D,"projectionMatrix",dt)):Ne.setValue(D,"projectionMatrix",w.projectionMatrix),Ne.setValue(D,"viewMatrix",w.matrixWorldInverse);const qn=Ne.map.cameraPosition;qn!==void 0&&qn.setValue(D,bt.setFromMatrixPosition(w.matrixWorld)),Ut.logarithmicDepthBuffer&&Ne.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ne.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),F!==w&&(F=w,Dn=!0,Ll=!0)}if(N.isSkinnedMesh){Ne.setOptional(D,N,"bindMatrix"),Ne.setOptional(D,N,"bindMatrixInverse");const qn=N.skeleton;qn&&(qn.boneTexture===null&&qn.computeBoneTexture(),Ne.setValue(D,"boneTexture",qn.boneTexture,A))}N.isBatchedMesh&&(Ne.setOptional(D,N,"batchingTexture"),Ne.setValue(D,"batchingTexture",N._matricesTexture,A),Ne.setOptional(D,N,"batchingIdTexture"),Ne.setValue(D,"batchingIdTexture",N._indirectTexture,A),Ne.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&Ne.setValue(D,"batchingColorTexture",N._colorsTexture,A));const Dl=V.morphAttributes;if((Dl.position!==void 0||Dl.normal!==void 0||Dl.color!==void 0)&&ct.update(N,V,ri),(Dn||Ft.receiveShadow!==N.receiveShadow)&&(Ft.receiveShadow=N.receiveShadow,Ne.setValue(D,"receiveShadow",N.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Wi.envMap.value=_t,Wi.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(Wi.envMapIntensity.value=O.environmentIntensity),Dn&&(Ne.setValue(D,"toneMappingExposure",x.toneMappingExposure),Ft.needsLights&&Ln(Wi,Ll),ht&&W.fog===!0&&q.refreshFogUniforms(Wi,ht),q.refreshMaterialUniforms(Wi,W,K,G,p.state.transmissionRenderTarget[w.id]),ol.upload(D,Te(Ft),Wi,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ol.upload(D,Te(Ft),Wi,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ne.setValue(D,"center",N.center),Ne.setValue(D,"modelViewMatrix",N.modelViewMatrix),Ne.setValue(D,"normalMatrix",N.normalMatrix),Ne.setValue(D,"modelMatrix",N.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const qn=W.uniformsGroups;for(let Il=0,Jm=qn.length;Il<Jm;Il++){const Bh=qn[Il];I.update(Bh,ri),I.bind(Bh,ri)}}return ri}function Ln(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function we(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(w,O,V){Pt.get(w.texture).__webglTexture=O,Pt.get(w.depthTexture).__webglTexture=V;const W=Pt.get(w);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){const V=Pt.get(w);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,V=0){E=w,C=O,b=V;let W=!0,N=null,ht=!1,Mt=!1;if(w){const _t=Pt.get(w);if(_t.__useDefaultFramebuffer!==void 0)B.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(_t.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(_t.__hasExternalTextures)A.rebindTextures(w,Pt.get(w.texture).__webglTexture,Pt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Rt=w.depthTexture;if(_t.__boundDepthTexture!==Rt){if(Rt!==null&&Pt.has(Rt)&&(w.width!==Rt.image.width||w.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}const Lt=w.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(Mt=!0);const Gt=Pt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Gt[O])?N=Gt[O][V]:N=Gt[O],ht=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?N=Pt.get(w).__webglMultisampledFramebuffer:Array.isArray(Gt)?N=Gt[V]:N=Gt,v.copy(w.viewport),T.copy(w.scissor),U=w.scissorTest}else v.copy(P).multiplyScalar(K).floor(),T.copy(lt).multiplyScalar(K).floor(),U=Vt;if(B.bindFramebuffer(D.FRAMEBUFFER,N)&&W&&B.drawBuffers(w,N),B.viewport(v),B.scissor(T),B.setScissorTest(U),ht){const _t=Pt.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,_t.__webglTexture,V)}else if(Mt){const _t=Pt.get(w.texture),Lt=O||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,_t.__webglTexture,V||0,Lt)}R=-1},this.readRenderTargetPixels=function(w,O,V,W,N,ht,Mt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=Pt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(gt=gt[Mt]),gt){B.bindFramebuffer(D.FRAMEBUFFER,gt);try{const _t=w.texture,Lt=_t.format,Gt=_t.type;if(!Ut.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-W&&V>=0&&V<=w.height-N&&D.readPixels(O,V,W,N,wt.convert(Lt),wt.convert(Gt),ht)}finally{const _t=E!==null?Pt.get(E).__webglFramebuffer:null;B.bindFramebuffer(D.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(w,O,V,W,N,ht,Mt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=Pt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(gt=gt[Mt]),gt){const _t=w.texture,Lt=_t.format,Gt=_t.type;if(!Ut.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-W&&V>=0&&V<=w.height-N){B.bindFramebuffer(D.FRAMEBUFFER,gt);const Rt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Rt),D.bufferData(D.PIXEL_PACK_BUFFER,ht.byteLength,D.STREAM_READ),D.readPixels(O,V,W,N,wt.convert(Lt),wt.convert(Gt),0);const le=E!==null?Pt.get(E).__webglFramebuffer:null;B.bindFramebuffer(D.FRAMEBUFFER,le);const ae=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await X0(D,ae,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Rt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ht),D.deleteBuffer(Rt),D.deleteSync(ae),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,O=null,V=0){w.isTexture!==!0&&(sl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);const W=Math.pow(2,-V),N=Math.floor(w.image.width*W),ht=Math.floor(w.image.height*W),Mt=O!==null?O.x:0,gt=O!==null?O.y:0;A.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,Mt,gt,N,ht),B.unbindTexture()},this.copyTextureToTexture=function(w,O,V=null,W=null,N=0){w.isTexture!==!0&&(sl("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,w=arguments[1],O=arguments[2],N=arguments[3]||0,V=null);let ht,Mt,gt,_t,Lt,Gt;V!==null?(ht=V.max.x-V.min.x,Mt=V.max.y-V.min.y,gt=V.min.x,_t=V.min.y):(ht=w.image.width,Mt=w.image.height,gt=0,_t=0),W!==null?(Lt=W.x,Gt=W.y):(Lt=0,Gt=0);const Rt=wt.convert(O.format),le=wt.convert(O.type);A.setTexture2D(O,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const ae=D.getParameter(D.UNPACK_ROW_LENGTH),ge=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ye=D.getParameter(D.UNPACK_SKIP_PIXELS),te=D.getParameter(D.UNPACK_SKIP_ROWS),Ft=D.getParameter(D.UNPACK_SKIP_IMAGES),en=w.isCompressedTexture?w.mipmaps[N]:w.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,en.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,en.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,gt),D.pixelStorei(D.UNPACK_SKIP_ROWS,_t),w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,N,Lt,Gt,ht,Mt,Rt,le,en.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,N,Lt,Gt,en.width,en.height,Rt,en.data):D.texSubImage2D(D.TEXTURE_2D,N,Lt,Gt,ht,Mt,Rt,le,en),D.pixelStorei(D.UNPACK_ROW_LENGTH,ae),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ge),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ye),D.pixelStorei(D.UNPACK_SKIP_ROWS,te),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ft),N===0&&O.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),B.unbindTexture()},this.copyTextureToTexture3D=function(w,O,V=null,W=null,N=0){w.isTexture!==!0&&(sl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,w=arguments[2],O=arguments[3],N=arguments[4]||0);let ht,Mt,gt,_t,Lt,Gt,Rt,le,ae;const ge=w.isCompressedTexture?w.mipmaps[N]:w.image;V!==null?(ht=V.max.x-V.min.x,Mt=V.max.y-V.min.y,gt=V.max.z-V.min.z,_t=V.min.x,Lt=V.min.y,Gt=V.min.z):(ht=ge.width,Mt=ge.height,gt=ge.depth,_t=0,Lt=0,Gt=0),W!==null?(Rt=W.x,le=W.y,ae=W.z):(Rt=0,le=0,ae=0);const Ye=wt.convert(O.format),te=wt.convert(O.type);let Ft;if(O.isData3DTexture)A.setTexture3D(O,0),Ft=D.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)A.setTexture2DArray(O,0),Ft=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const en=D.getParameter(D.UNPACK_ROW_LENGTH),de=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ri=D.getParameter(D.UNPACK_SKIP_PIXELS),rs=D.getParameter(D.UNPACK_SKIP_ROWS),Dn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ge.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ge.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,_t),D.pixelStorei(D.UNPACK_SKIP_ROWS,Lt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Gt),w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Ft,N,Rt,le,ae,ht,Mt,gt,Ye,te,ge.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Ft,N,Rt,le,ae,ht,Mt,gt,Ye,ge.data):D.texSubImage3D(Ft,N,Rt,le,ae,ht,Mt,gt,Ye,te,ge),D.pixelStorei(D.UNPACK_ROW_LENGTH,en),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,de),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ri),D.pixelStorei(D.UNPACK_SKIP_ROWS,rs),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Dn),N===0&&O.generateMipmaps&&D.generateMipmap(Ft),B.unbindTexture()},this.initRenderTarget=function(w){Pt.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),B.unbindTexture()},this.resetState=function(){C=0,b=0,E=null,B.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ch?"display-p3":"srgb",e.unpackColorSpace=me.workingColorSpace===Rl?"display-p3":"srgb"}}class Vm extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class rE extends je{constructor(t=null,e=1,n=1,i,s,o,a,l,c=wn,u=wn,h,d){super(null,o,a,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gd extends hi{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ys=new ce,vd=new ce,ka=[],xd=new ns,sE=new ce,fo=new fe,po=new sa;class Ha extends fe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new gd(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,sE)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ns),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ys),xd.copy(t.boundingBox).applyMatrix4(ys),this.boundingBox.union(xd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new sa),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ys),po.copy(t.boundingSphere).applyMatrix4(ys),this.boundingSphere.union(po)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(fo.geometry=this.geometry,fo.material=this.material,fo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),po.copy(this.boundingSphere),po.applyMatrix4(n),t.ray.intersectsSphere(po)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ys),vd.multiplyMatrices(n,ys),fo.matrixWorld=vd,fo.raycast(t,ka);for(let o=0,a=ka.length;o<a;o++){const l=ka[o];l.instanceId=s,l.object=this,e.push(l)}ka.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new gd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new rE(new Float32Array(i*this.count),i,this.count,Th,Mi));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class oE extends je{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:Vn,this.magFilter=s!==void 0?s:Vn,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,t.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class aE extends je{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ti{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new zt:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,i=[],s=[],o=[],a=new L,l=new ce;for(let f=0;f<=t;f++){const _=f/t;i[f]=this.getTangentAt(_,new L)}s[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Je(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,_))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(Je(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],f*_)),o[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Gm extends Ti{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new zt){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class lE extends Gm{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ih(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const Va=new L,Tc=new Ih,wc=new Ih,bc=new Ih;class Wm extends Ti{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(Va.subVectors(i[0],i[1]).add(i[0]),c=Va);const h=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(Va.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Va),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(u),f);g<1e-4&&(g=1),_<1e-4&&(_=g),p<1e-4&&(p=g),Tc.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,_,g,p),wc.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,_,g,p),bc.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,_,g,p)}else this.curveType==="catmullrom"&&(Tc.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),wc.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),bc.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Tc.calc(l),wc.calc(l),bc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Md(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function cE(r,t){const e=1-r;return e*e*t}function uE(r,t){return 2*(1-r)*r*t}function hE(r,t){return r*r*t}function Ho(r,t,e,n){return cE(r,t)+uE(r,e)+hE(r,n)}function fE(r,t){const e=1-r;return e*e*e*t}function dE(r,t){const e=1-r;return 3*e*e*r*t}function pE(r,t){return 3*(1-r)*r*r*t}function mE(r,t){return r*r*r*t}function Vo(r,t,e,n,i){return fE(r,t)+dE(r,e)+pE(r,n)+mE(r,i)}class _E extends Ti{constructor(t=new zt,e=new zt,n=new zt,i=new zt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new zt){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Vo(t,i.x,s.x,o.x,a.x),Vo(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gE extends Ti{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Vo(t,i.x,s.x,o.x,a.x),Vo(t,i.y,s.y,o.y,a.y),Vo(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class vE extends Ti{constructor(t=new zt,e=new zt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new zt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new zt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xE extends Ti{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ME extends Ti{constructor(t=new zt,e=new zt,n=new zt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new zt){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Ho(t,i.x,s.x,o.x),Ho(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xm extends Ti{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Ho(t,i.x,s.x,o.x),Ho(t,i.y,s.y,o.y),Ho(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class SE extends Ti{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new zt){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Md(a,l.x,c.x,u.x,h.x),Md(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new zt().fromArray(i))}return this}}var yE=Object.freeze({__proto__:null,ArcCurve:lE,CatmullRomCurve3:Wm,CubicBezierCurve:_E,CubicBezierCurve3:gE,EllipseCurve:Gm,LineCurve:vE,LineCurve3:xE,QuadraticBezierCurve:ME,QuadraticBezierCurve3:Xm,SplineCurve:SE});class Uh extends Ei{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new L,d=new L,f=[],_=[],g=[],p=[];for(let m=0;m<=n;m++){const M=[],x=m/n;let S=0;m===0&&o===0?S=.5/e:m===n&&l===Math.PI&&(S=-.5/e);for(let C=0;C<=e;C++){const b=C/e;h.x=-t*Math.cos(i+b*s)*Math.sin(o+x*a),h.y=t*Math.cos(o+x*a),h.z=t*Math.sin(i+b*s)*Math.sin(o+x*a),_.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),p.push(b+S,1-x),M.push(c++)}u.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){const x=u[m][M+1],S=u[m][M],C=u[m+1][M],b=u[m+1][M+1];(m!==0||o>0)&&f.push(x,S,b),(m!==n-1||l<Math.PI)&&f.push(S,C,b)}this.setIndex(f),this.setAttribute("position",new fn(_,3)),this.setAttribute("normal",new fn(g,3)),this.setAttribute("uv",new fn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Nh extends Ei{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new L,h=new L,d=new L;for(let f=0;f<=n;f++)for(let _=0;_<=i;_++){const g=_/i*s,p=f/n*Math.PI*2;h.x=(t+e*Math.cos(p))*Math.cos(g),h.y=(t+e*Math.cos(p))*Math.sin(g),h.z=e*Math.sin(p),a.push(h.x,h.y,h.z),u.x=t*Math.cos(g),u.y=t*Math.sin(g),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(_/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=i;_++){const g=(i+1)*f+_-1,p=(i+1)*(f-1)+_-1,m=(i+1)*(f-1)+_,M=(i+1)*f+_;o.push(g,p,M),o.push(p,m,M)}this.setIndex(o),this.setAttribute("position",new fn(a,3)),this.setAttribute("normal",new fn(l,3)),this.setAttribute("uv",new fn(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nh(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class El extends Ei{constructor(t=new Xm(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,l=new L,c=new zt;let u=new L;const h=[],d=[],f=[],_=[];g(),this.setIndex(_),this.setAttribute("position",new fn(h,3)),this.setAttribute("normal",new fn(d,3)),this.setAttribute("uv",new fn(f,2));function g(){for(let x=0;x<e;x++)p(x);p(s===!1?e:0),M(),m()}function p(x){u=t.getPointAt(x/e,u);const S=o.normals[x],C=o.binormals[x];for(let b=0;b<=i;b++){const E=b/i*Math.PI*2,R=Math.sin(E),F=-Math.cos(E);l.x=F*S.x+R*C.x,l.y=F*S.y+R*C.y,l.z=F*S.z+R*C.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function m(){for(let x=1;x<=e;x++)for(let S=1;S<=i;S++){const C=(i+1)*(x-1)+(S-1),b=(i+1)*x+(S-1),E=(i+1)*x+S,R=(i+1)*(x-1)+S;_.push(C,b,R),_.push(b,E,R)}}function M(){for(let x=0;x<=e;x++)for(let S=0;S<=i;S++)c.x=x/e,c.y=S/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new El(new yE[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class EE extends no{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new re(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class Vu extends no{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Em,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ym extends Vu{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new zt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const Sd={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class TE{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],_=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null}}}const wE=new TE;class Oh{constructor(t){this.manager=t!==void 0?t:wE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Oh.DEFAULT_MATERIAL_NAME="__DEFAULT";class bE extends Oh{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Sd.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=ea("img");function l(){u(),Sd.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){u(),i&&i(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class AE extends Oh{constructor(t){super(t)}load(t,e,n,i){const s=new je,o=new bE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Fh extends Qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new re(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class CE extends Fh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ac=new ce,yd=new L,Ed=new L;class qm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lh,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;yd.setFromMatrixPosition(t.matrixWorld),e.position.copy(yd),Ed.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ed),e.updateMatrixWorld(),Ac.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ac),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ac)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Td=new ce,mo=new L,Cc=new L;class RE extends qm{constructor(){super(new zn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new zt(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),mo.setFromMatrixPosition(t.matrixWorld),n.position.copy(mo),Cc.copy(n.position),Cc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Cc),n.updateMatrixWorld(),i.makeTranslation(-mo.x,-mo.y,-mo.z),Td.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Td)}}class PE extends Fh{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new RE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class LE extends qm{constructor(){super(new Om(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class DE extends Fh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new LE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const wd=new ce;class IE{constructor(t,e,n=0,i=1/0){this.ray=new Cm(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Ph,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return wd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wd),this}intersectObject(t,e=!0,n=[]){return Gu(t,this,n,e),n.sort(bd),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Gu(t[i],this,n,e);return n.sort(bd),n}}function bd(r,t){return r.distance-t.distance}function Gu(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)Gu(s[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mh);class UE extends Vm{constructor(){super();const t=new is;t.deleteAttribute("uv");const e=new Vu({side:yn}),n=new Vu,i=new PE(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new fe(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new fe(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new fe(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new fe(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new fe(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const u=new fe(t,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const h=new fe(t,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const d=new fe(t,Es(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new fe(t,Es(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const _=new fe(t,Es(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const g=new fe(t,Es(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);const p=new fe(t,Es(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);const m=new fe(t,Es(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Es(r){const t=new na;return t.color.setScalar(r),t}const _o=new L;function Kn(r,t,e,n,i,s){const o=2*Math.PI*i/4,a=Math.max(s-2*i,0),l=Math.PI/4;_o.copy(t),_o[n]=0,_o.normalize();const c=.5*o/(o+a),u=1-_o.angleTo(r)/l;return Math.sign(_o[e])===1?u*c:a/(o+a)+c+c*(1-u)}class Pi extends is{constructor(t=1,e=1,n=1,i=2,s=.1){if(i=i*2+1,s=Math.min(t/2,e/2,n/2,s),super(1,1,1,i,i,i),i===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new L,l=new L,c=new L(t,e,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,f=u.length/6,_=new L,g=.5/i;for(let p=0,m=0;p<u.length;p+=3,m+=2)switch(a.fromArray(u,p),l.copy(a),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),u[p+0]=c.x*Math.sign(a.x)+l.x*s,u[p+1]=c.y*Math.sign(a.y)+l.y*s,u[p+2]=c.z*Math.sign(a.z)+l.z*s,h[p+0]=l.x,h[p+1]=l.y,h[p+2]=l.z,Math.floor(p/f)){case 0:_.set(1,0,0),d[m+0]=Kn(_,l,"z","y",s,n),d[m+1]=1-Kn(_,l,"y","z",s,e);break;case 1:_.set(-1,0,0),d[m+0]=1-Kn(_,l,"z","y",s,n),d[m+1]=1-Kn(_,l,"y","z",s,e);break;case 2:_.set(0,1,0),d[m+0]=1-Kn(_,l,"x","z",s,t),d[m+1]=Kn(_,l,"z","x",s,n);break;case 3:_.set(0,-1,0),d[m+0]=1-Kn(_,l,"x","z",s,t),d[m+1]=1-Kn(_,l,"z","x",s,n);break;case 4:_.set(0,0,1),d[m+0]=1-Kn(_,l,"x","y",s,t),d[m+1]=1-Kn(_,l,"y","x",s,e);break;case 5:_.set(0,0,-1),d[m+0]=Kn(_,l,"x","y",s,t),d[m+1]=1-Kn(_,l,"y","x",s,e);break}}}class Ad extends Qe{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new zt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const Ts=new L,Cd=new ce,Rd=new ce,Pd=new L,Ld=new L;class NE{constructor(t={}){const e=this;let n,i,s,o;const a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:i}},this.render=function(_,g){_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),Cd.copy(g.matrixWorldInverse),Rd.multiplyMatrices(g.projectionMatrix,Cd),u(_,_,g),f(_)},this.setSize=function(_,g){n=_,i=g,s=n/2,o=i/2,l.style.width=_+"px",l.style.height=g+"px"};function c(_){_.isCSS2DObject&&(_.element.style.display="none");for(let g=0,p=_.children.length;g<p;g++)c(_.children[g])}function u(_,g,p){if(_.visible===!1){c(_);return}if(_.isCSS2DObject){Ts.setFromMatrixPosition(_.matrixWorld),Ts.applyMatrix4(Rd);const m=Ts.z>=-1&&Ts.z<=1&&_.layers.test(p.layers)===!0,M=_.element;M.style.display=m===!0?"":"none",m===!0&&(_.onBeforeRender(e,g,p),M.style.transform="translate("+-100*_.center.x+"%,"+-100*_.center.y+"%)translate("+(Ts.x*s+s)+"px,"+(-Ts.y*o+o)+"px)",M.parentNode!==l&&l.appendChild(M),_.onAfterRender(e,g,p));const x={distanceToCameraSquared:h(p,_)};a.objects.set(_,x)}for(let m=0,M=_.children.length;m<M;m++)u(_.children[m],g,p)}function h(_,g){return Pd.setFromMatrixPosition(_.matrixWorld),Ld.setFromMatrixPosition(g.matrixWorld),Pd.distanceToSquared(Ld)}function d(_){const g=[];return _.traverseVisible(function(p){p.isCSS2DObject&&g.push(p)}),g}function f(_){const g=d(_).sort(function(m,M){if(m.renderOrder!==M.renderOrder)return M.renderOrder-m.renderOrder;const x=a.objects.get(m).distanceToCameraSquared,S=a.objects.get(M).distanceToCameraSquared;return x-S}),p=g.length;for(let m=0,M=g.length;m<M;m++)g[m].element.style.zIndex=p-m}}}const bo="/sushant-singh/",Wu=document.createElement("canvas");Wu.width=Wu.height=1;const Ga=Wu.getContext("2d",{willReadFrequently:!0});function $m(r){return getComputedStyle(document.documentElement).getPropertyValue(r).trim()}function Li(r){Ga.clearRect(0,0,1,1),Ga.fillStyle=$m(r),Ga.fillRect(0,0,1,1);const[t,e,n]=Ga.getImageData(0,0,1,1).data;return new re().setRGB(t/255,e/255,n/255,Tn)}const OE={globe:'<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',shield:'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',plug:'<path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>',chart:'<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',calendar:'<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/>',search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',layers:'<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',user:'<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',mic:'<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v3"/>',film:'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/><path d="M17 16.5h4"/>',check:'<path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/>',send:'<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>'},Dd=[{id:"s1",tint:"--color-sky",extra:"inboxes",nodes:[{name:"Domains",icon:"globe",line:"Sending domains, set up from scratch"},{name:"DNS records",icon:"shield",line:"SPF, DKIM and DMARC on every domain"},{name:"MailDoso",logo:"maildoso.png",tile:!0,line:"50+ inboxes, kept healthy"},{name:"Instantly",logo:"instantly.svg",line:"Sequences across every inbox"}]},{id:"s2",tint:"--color-lime",extra:"rates",nodes:[{name:"Apollo",logo:"apollo.png",tile:!0,line:"Leads sourced on buying signals"},{name:"Claude",logo:"claude.svg",line:"Research and the personal line"},{name:"MCP and API",icon:"plug",line:"One pipe from data to senders"},{name:"Instantly",logo:"instantly.svg",line:"Personal sequences go out"},{name:"Live reports",icon:"chart",line:"Opens and replies, in real time"}]},{id:"s3",tint:"--color-pink",extra:"wave",nodes:[{name:"Prospects",icon:"users",line:"Sorted by time zone"},{name:"ElevenLabs",logo:"elevenlabs.svg",line:"The voice"},{name:"SuperAGI",logo:"superagi.svg",wide:!0,line:"The agent"},{name:"Hooman Labs",logo:"hoomanlabs.svg",line:"The calling layer"},{name:"The meeting",icon:"calendar",line:"Qualified and booked"}]},{id:"s4",tint:"--color-accent",extra:"firms",nodes:[{name:"Segments",icon:"layers",line:"Four B2B segments, 20 people or fewer"},{name:"Site scan",icon:"search",line:"Every website visited by script"},{name:"Stack check",icon:"chart",line:"HubSpot, Calendly, Mailchimp detected"},{name:"Founder",icon:"user",line:"The person to write to"},{name:"Pitch angle",logo:"claude.svg",line:"A reason to write, per firm"}]},{id:"s5",tint:"--color-sky",extra:"reels",nodes:[{name:"Script",logo:"claude.svg",line:"Written with Claude, fact-checked"},{name:"Voice",icon:"mic",line:"AI voiceover, paced by hand"},{name:"Remotion",logo:"remotion.png",line:"Motion coded, new style each time"},{name:"QC",icon:"check",line:"Every render checked frame by frame"},{name:"Metricool",logo:"metricool.png",tile:!0,line:"Posted daily, on schedule"}]}];function di(r,t={}){return new Ym({color:r,roughness:.2,metalness:0,clearcoat:1,clearcoatRoughness:.08,...t})}class FE extends Ti{getPoint(t,e=new L){const n=t*Math.PI*2,i=Math.sin(n),s=Math.cos(n),o=1+i*i;return e.set(2.6*s/o,2.6*i*s/o,.7*i)}}function Id(r){return new Promise((t,e)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>t(n),n.onerror=e,n.src=r})}function BE(r,t,e){const i=document.createElement("canvas");i.width=i.height=512;const s=i.getContext("2d"),o=new aE(i);o.colorSpace=Tn,o.anisotropy=e.capabilities.getMaxAnisotropy();const a=(l,c,u,h)=>{const d=(512-c)/2,f=(512-u)/2;s.clearRect(0,0,512,512),s.save(),r.tile&&(s.beginPath(),s.roundRect(d,f,c,u,c*.22),s.clip()),s.drawImage(l,d,f,c,u),s.restore(),h&&(s.globalCompositeOperation="source-in",s.fillStyle=t,s.fillRect(0,0,512,512),s.globalCompositeOperation="source-over"),o.needsUpdate=!0};if(r.logo)Id(`${bo}logos/${r.logo}`).then(l=>{const c=r.wide?300:240,u=l.width/l.height||1;a(l,u>=1?c:c*u,u>=1?c/u:c)}).catch(()=>{});else{const l=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="256" height="256" fill="none" stroke="black" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${OE[r.icon]}</svg>`;Id(`data:image/svg+xml;charset=utf-8,${encodeURIComponent(l)}`).then(c=>a(c,230,230,!0)).catch(()=>{})}return o}const zE=r=>r*r*(3-2*r);function kE(r,t){const e=new iE({canvas:r,antialias:!0,alpha:!0,powerPreference:"high-performance"});e.setClearColor(0,0),e.outputColorSpace=Tn,e.toneMapping=fm;const n=new NE({element:t}),i=new Vm,s=new ku(e);i.environment=s.fromScene(new UE,.04).texture,e.shadowMap.enabled=!0,e.shadowMap.type=um;const o=new DE(16777215,1.5);o.castShadow=!0,o.shadow.mapSize.set(2048,2048),Object.assign(o.shadow.camera,{left:-11,right:11,top:11,bottom:-11,near:.5,far:60}),o.shadow.radius=6,o.shadow.bias=-4e-4,i.add(o,o.target);const a={accent:Li("--color-accent"),lime:Li("--color-lime"),pink:Li("--color-pink"),sky:Li("--color-sky"),ink:Li("--color-ink"),card:Li("--color-card"),paper3:Li("--color-paper-3")},l=$m("--color-ink");i.add(new CE(Li("--color-sky-soft"),Li("--color-accent-soft"),.7));const c=new zn(30,1,.1,400);c.position.set(0,1,18);const u=new Fi;i.add(u);const h=new FE,d=di(a.accent.clone(),{iridescence:.2,sheen:.4,sheenColor:a.pink});u.add(new fe(new El(h,720,.46,64,!0),d));const f=[a.sky,a.pink,a.lime].map(q=>{const it=new fe(new Pi(.96,.64,.12,5,.06),di(q));return u.add(it),it}),_=Array.from({length:8},(q,it)=>{const St=[new Uh(.22,40,28),new Pi(.36,.36,.36,4,.08),new Nh(.22,.08,20,48)],Q=new fe(St[it%3],di([a.lime,a.pink,a.sky,a.accent][it%4]));return Q.userData={a:it/8*Math.PI*2,r:3.6+it%3*.5,y:it*37%9/9-.5,s:.08+it%4*.02},u.add(Q),Q}),g=[],p=[],m=[],M=new Pi(1.7,1.7,.72,8,.18),x=new $r(1.2,1.2),S=()=>new Ym({color:a.card.clone(),roughness:.32,clearcoat:.7,clearcoatRoughness:.18,sheen:.3,sheenColor:a.paper3}),C=[];Dd.forEach((q,it)=>{const St=new L(20*(it+1),it%2?1.2:-.6,it%2?-5:0),Q=new Fi;Q.position.copy(St),i.add(Q),m.push({group:Q,origin:St,station:q});const pt=q.nodes.length,at=new fe(new $r(30,18),new EE({opacity:.16}));if(at.rotation.x=-Math.PI/2,at.position.set(0,-1.25,-2),at.receiveShadow=!0,Q.add(at),q.world=[],q.nodes.forEach((ct,rt)=>{const yt=pt>1?-.7+1.4*rt/(pt-1):0,wt=8,Nt=new L(Math.sin(yt)*wt,rt%2?.45:-.15,(Math.cos(yt)-1)*wt),I=new Fi;I.position.copy(Nt),I.rotation.y=-yt*.7,Q.add(I);const tt=new fe(M,S());tt.castShadow=!0,tt.receiveShadow=!0,I.add(tt);const Y=new fe(x,new na({map:BE(ct,l,e),transparent:!0,toneMapped:!1}));Y.position.z=.362,I.add(Y);const Z=document.createElement("div");Z.className="node-label",Z.innerHTML='<span class="node-label__name"></span><span class="node-label__line"></span>',Z.querySelector(".node-label__name").textContent=ct.name,Z.querySelector(".node-label__line").textContent=ct.line;const ft=new Ad(Z);ft.position.set(0,-1.3,.2),I.add(ft),tt.userData={holder:I,label:Z,station:it,hover:0,baseZ:Nt.z},g.push(tt),i.updateMatrixWorld(),q.world[rt]=I.getWorldPosition(new L)}),q.extra==="inboxes"){const ct=new Pi(.34,.34,.34,3,.07),rt=new Ha(ct,di(16777215),50),yt=new ce;for(let Nt=0;Nt<50;Nt++)yt.makeTranslation(Nt%10*.48-2.16,Math.floor(Nt/10)*.48+2.6,-3.2),rt.setMatrixAt(Nt,yt),rt.setColorAt(Nt,a.card);rt.castShadow=!0,Q.add(rt),b(Q,new L(0,5.3,-3.2),"50+ inboxes, ~100% deliverability");const wt=new re;C.push(Nt=>{for(let I=0;I<50;I++){const tt=.5+.5*Math.sin(Nt*2-I%10*.55-Math.floor(I/10)*.35);rt.setColorAt(I,wt.copy(a.card).lerp(a.lime,tt*tt))}rt.instanceColor.needsUpdate=!0})}if(q.extra==="rates"&&[["Opened 50 to 60%",55,a.lime],["Clicked 25 to 35%",30,a.sky],["Replied 5 to 7%",6,a.pink]].forEach(([rt,yt,wt],Nt)=>{const I=Math.max(.12,yt*.07),tt=new fe(new Pi(1.1,I,1.1,4,.1),di(wt));tt.position.set(-2+Nt*2,-1.25+I/2,-4.2),tt.castShadow=!0,Q.add(tt),b(Q,new L(-2+Nt*2,-1.25+I+.5,-4.2),rt)}),q.extra==="wave"){const ct=new Pi(.16,1,.16,2,.05),rt=new Ha(ct,di(a.pink),40),yt=new ce,wt=new ur,Nt=new L,I=new L;Q.add(rt),b(Q,new L(0,5,-3.4),"~1,000 called, 10 qualified meetings"),C.push(tt=>{for(let Y=0;Y<40;Y++){const Z=.25+1.9*Math.abs(Math.sin(tt*3.1+Y*.42)*Math.sin(tt*1.3+Y*.17));yt.compose(I.set(Y*.2-3.9,2.9,-3.6),wt,Nt.set(1,Z,1)),rt.setMatrixAt(Y,yt)}rt.instanceMatrix.needsUpdate=!0})}if(q.extra==="firms"){const ct=new Pi(.42,.58,.04,2,.04),rt=new Ha(ct,di(16777215),115),yt=new Fi;yt.position.set(0,2.2,-4),Q.add(yt),yt.add(rt);const wt=new ce,Nt=new ur,I=new fi,tt=new L,Y=new L(1,1,1);for(let Z=0;Z<115;Z++){const ft=Z*.32;tt.set(Math.cos(ft)*2.6,Z*.03,Math.sin(ft)*2.6),Nt.setFromEuler(I.set(0,-ft+Math.PI/2,0)),wt.compose(tt,Nt,Y),rt.setMatrixAt(Z,wt),rt.setColorAt(Z,Math.floor((Z+1)*33/115)>Math.floor(Z*33/115)?a.accent:a.card)}b(Q,new L(0,6.4,-4),"115 firms researched, 33 founders named"),C.push(Z=>{yt.rotation.y=Z*.12})}if(q.extra==="reels"){const ct=new Pi(1.86,3.24,.1,4,.08),rt=new $r(1.7,3.02),yt=new AE,wt=document.createElement("video");Object.assign(wt,{src:`${bo}work/reel-clip.mp4`,muted:!0,loop:!0,playsInline:!0,crossOrigin:"anonymous"}),wt.setAttribute("muted","");const I=[yt.load(`${bo}work/reel-1.jpg`),new oE(wt),yt.load(`${bo}work/reel-3.jpg`),yt.load(`${bo}work/reel-4.jpg`)].map((tt,Y)=>{tt.colorSpace=Tn;const Z=new Fi;Z.add(new fe(ct,di(a.card)));const ft=new fe(rt,new na({map:tt,toneMapped:!1}));return ft.position.z=.056,Z.add(ft),Z.position.set(-3.3+Y*2.2,3.4+Y%2*.4,-3.4),Z.rotation.y=.25-Y*.12,Q.add(Z),Z});b(Q,new L(0,5.9,-3.4),"The Sneaky MBA, 21 reels made with AI"),q.video=wt,C.push(tt=>I.forEach((Y,Z)=>{Y.position.y=3.4+Z%2*.4+Math.sin(tt*.8+Z)*.08}))}});function b(q,it,St){const Q=document.createElement("div");Q.className="scene-tag",Q.textContent=St;const pt=new Ad(Q);return pt.position.copy(it),q.add(pt),p.push({el:Q,obj:pt}),pt}i.updateMatrixWorld(!0);const E=[new L(3.2,0,0)];m.forEach(({station:q})=>q.world.forEach(it=>E.push(it.clone().add(new L(0,0,-.5)))));const R=new Wm(E,!1,"centripetal");i.add(new fe(new El(R,2400,.07,12,!1),di(a.ink,{roughness:.3})));const F=90,v=new Ha(new Pi(.46,.3,.07,3,.04),di(16777215),F),T=[a.accent,a.lime,a.pink,a.sky];for(let q=0;q<F;q++)v.setColorAt(q,T[q%4]);i.add(v);const U=new ce,z=new ur,$=new L,J=new L,G=new L(1,1,1),K=new L(1,0,0),k={core:{pos:new L(0,.6,19),look:new L(0,0,0),span:9},story:{pos:new L(-8,6,20),look:new L(1,0,0),span:9},overview:{pos:new L(30,38,70),look:new L(58,0,-2)},close:{pos:new L(2,-1,15),look:new L(0,.5,0),span:9}};m.forEach(({origin:q,station:it})=>{k[it.id]={pos:q.clone().add(new L(-2.5,4.6,19)),look:q.clone().add(new L(0,1.2,-2)),span:13.5}});const ut=new L(-7,14,9),P=k.core.pos.clone(),lt=k.core.look.clone(),Vt=P.clone(),Yt=lt.clone(),X={yaw:0,pitch:0,tYaw:0,tPitch:0,active:!1,x:0,y:0},et={shiftX:0,shiftY:0,tShiftX:0,tShiftY:0,span:9,tSpan:9,fit:1,tFit:1};let dt=1,ot=1,bt=null;function Tt(){dt=r.clientWidth||window.innerWidth,ot=r.clientHeight||window.innerHeight;const q=Math.sqrt(83e5/(dt*ot));e.setPixelRatio(Math.min(window.devicePixelRatio||1,2,Math.max(1,q))),e.setSize(dt,ot,!1),n.setSize(dt,ot),c.aspect=dt/ot,c.updateProjectionMatrix()}Tt();function qt(q,it,St,Q,pt,at=1){const ct=k[q]||k.core,rt=k[it]||ct,yt=zE(Math.min(1,Math.max(0,St)));Vt.lerpVectors(ct.pos,rt.pos,yt),Yt.lerpVectors(ct.look,rt.look,yt),et.tSpan=(ct.span||0)+((rt.span||0)-(ct.span||0))*yt,et.tFit=at,et.tShiftX=Q,et.tShiftY=pt}const Wt=new IE,Bt=new zt;function D(q){X.active=!0,X.x=q.clientX,X.y=q.clientY}function se(q){X.active&&(X.tYaw=Math.max(-.6,Math.min(.6,X.tYaw-(q.clientX-X.x)*.004)),X.tPitch=Math.max(-.3,Math.min(.35,X.tPitch+(q.clientY-X.y)*.003)),X.x=q.clientX,X.y=q.clientY),Bt.set(q.clientX/dt*2-1,-(q.clientY/ot)*2+1),Wt.setFromCamera(Bt,c);const it=Wt.intersectObjects(g,!1)[0],St=it?it.object:null;St!==bt&&(bt==null||bt.userData.label.classList.remove("is-open"),St==null||St.userData.label.classList.add("is-open"),bt=St,r.style.cursor=St?"pointer":"")}function kt(){X.active=!1}const Ut=new L,B=new L(0,1,0),$t=new L,Pt=new L,A=new ce,y=new L,H=new L,nt=new L(0,0,1);function st(q,it,St){const Q=St?1-Math.exp(-it*3.2):1;if(P.lerp(Vt,Q),lt.lerp(Yt,Q),et.shiftX+=(et.tShiftX-et.shiftX)*Q,et.shiftY+=(et.tShiftY-et.shiftY)*Q,X.active||(X.tYaw*=St?.96:0,X.tPitch*=St?.96:0),X.yaw+=(X.tYaw-X.yaw)*(St?.12:1),X.pitch+=(X.tPitch-X.pitch)*(St?.12:1),et.span+=(et.tSpan-et.span)*Q,et.fit+=(et.tFit-et.fit)*Q,Ut.subVectors(P,lt),et.span>0){const at=et.span/(et.fit*2*Math.tan(G0.degToRad(c.fov/2))*c.aspect);at>Ut.length()&&Ut.setLength(at)}Ut.applyAxisAngle(B,X.yaw);const pt=new L().crossVectors(B,Ut).normalize();Ut.applyAxisAngle(pt,X.pitch),c.position.copy(lt).add(Ut),c.lookAt(lt),o.target.position.copy(lt),o.position.copy(lt).add(ut),c.setViewOffset(dt,ot,-dt*et.shiftX,ot*et.shiftY,dt,ot),u.rotation.set(.45+Math.sin(q*.4)*.05,-.5+q*.08,-.12),f.forEach((at,ct)=>{const rt=(q*.035+ct/3)%1;h.getPoint(rt,y),h.getTangent(rt,H),$t.crossVectors(nt,H).normalize(),Pt.crossVectors(H,$t).normalize(),A.makeBasis(H,Pt,$t),at.position.copy(y).addScaledVector(Pt,.62),at.quaternion.setFromRotationMatrix(A)}),_.forEach(at=>{const ct=at.userData,rt=ct.a+q*ct.s;at.position.set(Math.cos(rt)*ct.r,ct.y*2.6+Math.sin(q*.6+ct.a)*.18,Math.sin(rt)*ct.r*.55),at.rotation.set(q*.4,q*.3,0)});for(let at=0;at<F;at++){const ct=(q*.012+at/F)%1;R.getPointAt(ct,$),R.getTangentAt(ct,J),z.setFromUnitVectors(K,J),U.compose($,z,G),v.setMatrixAt(at,U)}v.instanceMatrix.needsUpdate=!0,C.forEach(at=>at(q)),g.forEach(at=>{const ct=at.userData;ct.hover+=((at===bt?1:0)-ct.hover)*(St?.15:1),ct.holder.scale.setScalar(1+ct.hover*.12),ct.holder.position.z=ct.baseZ+ct.hover*.6;const yt=lt.distanceTo(ct.holder.getWorldPosition(Ut))<11;ct.label.style.opacity=yt?"1":"0",ct.label.style.visibility=yt?"visible":"hidden"}),p.forEach(({el:at,obj:ct})=>{const rt=lt.distanceTo(ct.getWorldPosition(Ut))<11;at.style.opacity=rt?"1":"0",at.style.visibility=rt?"visible":"hidden"}),e.render(i,c),n.render(i,c)}function j(q,it){Bt.set(q/dt*2-1,-(it/ot)*2+1),Wt.setFromCamera(Bt,c);const St=Wt.intersectObjects(g,!1)[0];return St?St.object.userData.station:-1}function Et(q){const it=Dd[4].video;it&&(q?it.play().catch(()=>{}):it.pause())}return{render:st,resize:Tt,setTarget:qt,onDown:D,onMove:se,onUp:kt,pickStation:j,setVideoPlaying:Et,poses:k}}function HE(){try{const r=document.createElement("canvas");return!!(r.getContext("webgl2")||r.getContext("webgl"))}catch{return!1}}$e.registerPlugin(Qt);const Xu=document.documentElement,hr=!window.matchMedia("(prefers-reduced-motion: reduce)").matches,Wa=document.querySelector(".motion-toggle"),VE=()=>window.matchMedia("(min-width: 64rem)").matches;let Go=null;const Km=r=>Go?Go.scrollTo(r,{offset:0}):r.scrollIntoView();let Jn=null;const Nr=document.getElementById("engine");if(Nr&&HE())try{Jn=kE(Nr,document.getElementById("engine-labels")),Xu.classList.add("js-engine")}catch(r){console.warn("3D engine disabled:",r)}let Dr=[];function Rc(){GE();const r=window.innerHeight;Dr=[...document.querySelectorAll("[data-cam]")].map(t=>{const e=t.getBoundingClientRect().top+window.scrollY;return{el:t,cam:t.dataset.cam,at:Math.max(0,e+t.offsetHeight/2-r/2)}})}let Yu=.45,qu=.6;function GE(){const r=document.querySelector(".chapter__card");r&&(Yu=(r.getBoundingClientRect().right+32)/window.innerWidth);const t=document.createRange(),e=[...document.querySelectorAll(".hero__a")].map(n=>(t.selectNodeContents(n),t.getBoundingClientRect().right));e.length&&(qu=(Math.max(...e)+48)/window.innerWidth)}function Ud(r){if(VE()){const t=1-Yu;if(r==="overview")return[0,0,1];if(r==="story")return[.3,0,.42];if(r==="core"){const e=1-qu;return[qu+e/2-.5,0,e*.9]}return[Yu+t/2-.5,0,t*.9]}return r==="overview"?[0,.1,1]:r==="story"?[0,-.25,.9]:[0,.24,.92]}let Zm="core";function WE(){if(!Jn||!Dr.length)return;const r=window.scrollY;let t=0;for(;t<Dr.length-1&&Dr[t+1].at<=r;)t++;const e=Dr[t],n=Dr[Math.min(t+1,Dr.length-1)],i=Math.max(1,n.at-e.at);let s=Math.min(1,Math.max(0,(r-e.at)/i));s=Math.min(1,Math.max(0,(s-.08)/.5)),hr||(s=s<.5?0:1);const[o,a,l]=Ud(e.cam),[c,u,h]=Ud(n.cam);Jn.setTarget(e.cam,n.cam,s,o+(c-o)*s,a+(u-a)*s,l+(h-l)*s),Zm=s<.5?e.cam:n.cam}let Or=!1,Nd=0,Od=performance.now();function go(){const r=performance.now(),t=Math.min(.05,(r-Od)/1e3);Od=r,hr&&!Or&&(Nd+=t),WE(),Jn.render(Nd,t,hr),Jn.setVideoPlaying(hr&&!Or&&Zm==="s5")}if(Jn){Rc(),hr?$e.ticker.add(go):(go(),window.addEventListener("scroll",go,{passive:!0})),window.addEventListener("resize",()=>{Jn.resize(),Rc(),hr||go()}),Qt.addEventListener("refresh",Rc);let r=null;Nr.addEventListener("pointerdown",t=>{r=[t.clientX,t.clientY],Jn.onDown(t),Nr.setPointerCapture(t.pointerId)}),Nr.addEventListener("pointermove",t=>{Jn.onMove(t),hr||go()}),Nr.addEventListener("pointerup",t=>{Jn.onUp();const e=r&&Math.hypot(t.clientX-r[0],t.clientY-r[1])>6;if(r=null,e)return;const n=Jn.pickStation(t.clientX,t.clientY),i=n>=0&&document.querySelector(`[data-cam="s${n+1}"]`);i&&Km(i)}),Nr.addEventListener("pointercancel",()=>Jn.onUp())}var Fd;if(hr){Xu.classList.add("js-motion"),Go=new Hg({duration:1.15,smoothWheel:!0}),Go.on("scroll",Qt.update),$e.ticker.add(o=>Go.raf(o*1e3)),$e.ticker.lagSmoothing(0),document.querySelectorAll('a[href^="#"]').forEach(o=>{o.addEventListener("click",a=>{const l=document.querySelector(o.getAttribute("href"));l&&(a.preventDefault(),Km(l))})}),Wa.hidden=!1,Wa.addEventListener("click",()=>{Or=!Or,Wa.setAttribute("aria-pressed",String(Or)),Wa.textContent=Or?"Play motion":"Pause motion",Xu.classList.toggle("is-paused",Or)});const r=(o,a)=>{const l=o.textContent.trim().split(/\s+/);return o.textContent="",l.map((c,u)=>{const h=document.createElement("span");return h.className=a,h.style.display="inline-block",h.textContent=c,o.append(h),u<l.length-1&&o.append(" "),h})};$e.timeline({defaults:{ease:"expo.out"}}).from(".nav__pill",{y:-30,opacity:0,duration:.9},0).from(".hero__q",{y:16,opacity:0,duration:.8,stagger:.25},.1).from(".hero__a",{yPercent:60,opacity:0,duration:1.1,stagger:.25},.2).from(".hero__lead, .hero__actions, .hero__hint",{y:20,opacity:0,duration:.9,stagger:.08},.6);const t=document.querySelector(".swap");if(t){const o=t.querySelector(".swap__track"),a=[...o.children],l=u=>a[u].scrollWidth;$e.set(t,{width:l(0)});const c=$e.timeline({delay:1.3,defaults:{duration:.7,ease:"expo.inOut"}});a.slice(1).forEach((u,h)=>{const d=h+1;c.to(o,{yPercent:-100*d/a.length},`+=${d===1?0:.9}`).to(t,{width:l(d)},"<")}),c.eventCallback("onComplete",()=>{a.slice(0,-1).forEach(u=>u.remove()),$e.set(o,{clearProps:"transform"}),$e.set(t,{clearProps:"width"})})}const e=document.querySelector("[data-words]");if(e){const o=r(e,"w");$e.to(o,{opacity:1,stagger:.08,ease:"none",scrollTrigger:{trigger:e,start:"top 80%",end:"bottom 45%",scrub:!0}})}$e.utils.toArray(".chapter__card").forEach(o=>{$e.timeline({scrollTrigger:{trigger:o.closest(".chapter"),start:"top 70%"}}).from(o,{y:60,opacity:0,duration:.9,ease:"expo.out"}).from(o.querySelectorAll(".steps li"),{x:-20,opacity:0,duration:.6,stagger:.07,ease:"expo.out"},.25).from(o.querySelectorAll(".figures > div, .sample, .reels li"),{y:20,opacity:0,duration:.6,stagger:.06,ease:"expo.out"},.45)}),$e.utils.toArray(".live__card, .value h2, .stack h2, .record__card").forEach(o=>{$e.from(o,{y:60,opacity:0,duration:1,ease:"expo.out",scrollTrigger:{trigger:o,start:"top 88%"}})}),$e.from(".live__steps li",{x:50,opacity:0,duration:.8,stagger:.1,ease:"expo.out",scrollTrigger:{trigger:".live__steps",start:"top 85%"}}),$e.from(".value__grid li",{y:50,opacity:0,duration:.9,stagger:.06,ease:"expo.out",scrollTrigger:{trigger:".value__grid",start:"top 85%"}});const n=document.querySelector(".marquee"),i=n==null?void 0:n.querySelector(".marquee__row");i&&n.append(i.cloneNode(!0));const s=document.querySelector("[data-split]");if(s){const o=r(s,"cw");$e.from(o,{yPercent:80,opacity:0,duration:1,stagger:.06,ease:"expo.out",scrollTrigger:{trigger:s,start:"top 85%"}})}(Fd=document.fonts)==null||Fd.ready.then(()=>Qt.refresh())}
