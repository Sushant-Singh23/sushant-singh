var l_=Object.defineProperty;var c_=(r,t,e)=>t in r?l_(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Lt=(r,t,e)=>c_(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ku="169",u_=0,Wh=1,h_=2,Od=1,Fd=2,Oi=3,gr=0,wn=1,zi=2,Wi=0,Is=1,Uc=2,Xh=3,Yh=4,f_=5,Fr=100,d_=101,p_=102,m_=103,__=104,g_=200,v_=201,x_=202,S_=203,Nc=204,Oc=205,M_=206,y_=207,E_=208,T_=209,b_=210,w_=211,A_=212,C_=213,R_=214,Fc=0,Bc=1,zc=2,Ws=3,kc=4,Hc=5,Vc=6,Gc=7,Bd=0,P_=1,L_=2,dr=0,zd=1,kd=2,Hd=3,Zu=4,D_=5,Vd=6,Gd=7,Wd=300,Xs=301,Ys=302,Wc=303,Xc=304,wl=306,Yc=1e3,kr=1001,qc=1002,ei=1003,I_=1004,ca=1005,hi=1006,kl=1007,Hr=1008,qi=1009,Xd=1010,Yd=1011,Vo=1012,Ju=1013,jr=1014,Hi=1015,Xi=1016,ju=1017,Qu=1018,qs=1020,qd=35902,$d=1021,Kd=1022,di=1023,Zd=1024,Jd=1025,Us=1026,$s=1027,jd=1028,th=1029,Qd=1030,eh=1031,nh=1033,Ya=33776,qa=33777,$a=33778,Ka=33779,$c=35840,Kc=35841,Zc=35842,Jc=35843,jc=36196,Qc=37492,tu=37496,eu=37808,nu=37809,iu=37810,ru=37811,su=37812,ou=37813,au=37814,lu=37815,cu=37816,uu=37817,hu=37818,fu=37819,du=37820,pu=37821,Za=36492,mu=36494,_u=36495,tp=36283,gu=36284,vu=36285,xu=36286,U_=3200,N_=3201,ep=0,O_=1,ar="",vi="srgb",yr="srgb-linear",ih="display-p3",Al="display-p3-linear",cl="linear",Ee="srgb",ul="rec709",hl="p3",os=7680,qh=519,F_=512,B_=513,z_=514,np=515,k_=516,H_=517,V_=518,G_=519,$h=35044,Kh="300 es",Vi=2e3,fl=2001;class io{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zh=1234567;const wo=Math.PI/180,Go=180/Math.PI;function is(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[r&255]+nn[r>>8&255]+nn[r>>16&255]+nn[r>>24&255]+"-"+nn[t&255]+nn[t>>8&255]+"-"+nn[t>>16&15|64]+nn[t>>24&255]+"-"+nn[e&63|128]+nn[e>>8&255]+"-"+nn[e>>16&255]+nn[e>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function Qe(r,t,e){return Math.max(t,Math.min(e,r))}function rh(r,t){return(r%t+t)%t}function W_(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function X_(r,t,e){return r!==t?(e-r)/(t-r):0}function Ao(r,t,e){return(1-e)*r+e*t}function Y_(r,t,e,n){return Ao(r,t,1-Math.exp(-e*n))}function q_(r,t=1){return t-Math.abs(rh(r,t*2)-t)}function $_(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function K_(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Z_(r,t){return r+Math.floor(Math.random()*(t-r+1))}function J_(r,t){return r+Math.random()*(t-r)}function j_(r){return r*(.5-Math.random())}function Q_(r){r!==void 0&&(Zh=r);let t=Zh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function tg(r){return r*wo}function eg(r){return r*Go}function ng(r){return(r&r-1)===0&&r!==0}function ig(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function rg(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function sg(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),u=o((t+n)/2),h=s((t-n)/2),f=o((t-n)/2),d=s((n-t)/2),_=o((n-t)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*_,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*_,a*c);break;case"ZYZ":r.set(l*_,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ts(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function pn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const og={DEG2RAD:wo,RAD2DEG:Go,generateUUID:is,clamp:Qe,euclideanModulo:rh,mapLinear:W_,inverseLerp:X_,lerp:Ao,damp:Y_,pingpong:q_,smoothstep:$_,smootherstep:K_,randInt:Z_,randFloat:J_,randFloatSpread:j_,seededRandom:Q_,degToRad:tg,radToDeg:eg,isPowerOfTwo:ng,ceilPowerOfTwo:ig,floorPowerOfTwo:rg,setQuaternionFromProperEuler:sg,normalize:pn,denormalize:Ts};class ft{constructor(t=0,e=0){ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(t,e,n,i,s,o,a,l,c){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],p=i[3],m=i[6],y=i[1],x=i[4],S=i[7],R=i[2],A=i[5],E=i[8];return s[0]=o*g+a*y+l*R,s[3]=o*p+a*x+l*A,s[6]=o*m+a*S+l*E,s[1]=c*g+u*y+h*R,s[4]=c*p+u*x+h*A,s[7]=c*m+u*S+h*E,s[2]=f*g+d*y+_*R,s[5]=f*p+d*x+_*A,s[8]=f*m+d*S+_*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,_=e*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=h*g,t[1]=(i*c-u*n)*g,t[2]=(a*n-i*o)*g,t[3]=f*g,t[4]=(u*e-i*l)*g,t[5]=(i*s-a*e)*g,t[6]=d*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Hl.makeScale(t,e)),this}rotate(t){return this.premultiply(Hl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Hl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Hl=new Qt;function ip(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function dl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ag(){const r=dl("canvas");return r.style.display="block",r}const Jh={};function Ja(r){r in Jh||(Jh[r]=!0,console.warn(r))}function lg(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function cg(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ug(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const jh=new Qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qh=new Qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),lo={[yr]:{transfer:cl,primaries:ul,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[vi]:{transfer:Ee,primaries:ul,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Al]:{transfer:cl,primaries:hl,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(Qh),fromReference:r=>r.applyMatrix3(jh)},[ih]:{transfer:Ee,primaries:hl,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(Qh),fromReference:r=>r.applyMatrix3(jh).convertLinearToSRGB()}},hg=new Set([yr,Al]),fe={enabled:!0,_workingColorSpace:yr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!hg.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=lo[t].toReference,i=lo[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return lo[r].primaries},getTransfer:function(r){return r===ar?cl:lo[r].transfer},getLuminanceCoefficients:function(r,t=this._workingColorSpace){return r.fromArray(lo[t].luminanceCoefficients)}};function Ns(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Vl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let as;class fg{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{as===void 0&&(as=dl("canvas")),as.width=t.width,as.height=t.height;const n=as.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=as}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=dl("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ns(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ns(e[n]/255)*255):e[n]=Ns(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let dg=0;class rp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=is(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Gl(i[o].image)):s.push(Gl(i[o]))}else s=Gl(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Gl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?fg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pg=0;class An extends io{constructor(t=An.DEFAULT_IMAGE,e=An.DEFAULT_MAPPING,n=kr,i=kr,s=hi,o=Hr,a=di,l=qi,c=An.DEFAULT_ANISOTROPY,u=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=is(),this.name="",this.source=new rp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yc:t.x=t.x-Math.floor(t.x);break;case kr:t.x=t.x<0?0:1;break;case qc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yc:t.y=t.y-Math.floor(t.y);break;case kr:t.y=t.y<0?0:1;break;case qc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Wd;An.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,i=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,S=(d+1)/2,R=(m+1)/2,A=(u+f)/4,E=(h+g)/4,P=(_+p)/4;return x>S&&x>R?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=A/n,s=E/n):S>R?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=A/i,s=P/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=E/s,i=P/s),this.set(n,i,s,e),this}let y=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(h-g)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mg extends io{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new An(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new rp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends mg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class sp extends An{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ei,this.minFilter=ei,this.wrapR=kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _g extends An{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ei,this.minFilter=ei,this.wrapR=kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ra{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let p=1-a;const m=l*f+c*d+u*_+h*g,y=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const R=Math.sqrt(x),A=Math.atan2(R,m*y);p=Math.sin(p*A)/R,a=Math.sin(a*A)/R}const S=a*y;if(l=l*p+f*S,c=c*p+d*S,u=u*p+_*S,h=h*p+g*S,p===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],_=s[o+3];return t[e]=a*_+u*h+l*d-c*f,t[e+1]=l*_+u*f+c*h-a*d,t[e+2]=c*_+u*d+a*f-l*h,t[e+3]=u*_-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,n=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-s*i),h=2*(s*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wl.copy(this).projectOnVector(t),this.sub(Wl)}reflect(t){return this.sub(Wl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wl=new B,tf=new ra;class sa{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(oi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(oi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=oi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,oi):oi.fromBufferAttribute(s,o),oi.applyMatrix4(t.matrixWorld),this.expandByPoint(oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ua.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ua.copy(n.boundingBox)),ua.applyMatrix4(t.matrixWorld),this.union(ua)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,oi),oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(co),ha.subVectors(this.max,co),ls.subVectors(t.a,co),cs.subVectors(t.b,co),us.subVectors(t.c,co),Qi.subVectors(cs,ls),tr.subVectors(us,cs),Tr.subVectors(ls,us);let e=[0,-Qi.z,Qi.y,0,-tr.z,tr.y,0,-Tr.z,Tr.y,Qi.z,0,-Qi.x,tr.z,0,-tr.x,Tr.z,0,-Tr.x,-Qi.y,Qi.x,0,-tr.y,tr.x,0,-Tr.y,Tr.x,0];return!Xl(e,ls,cs,us,ha)||(e=[1,0,0,0,1,0,0,0,1],!Xl(e,ls,cs,us,ha))?!1:(fa.crossVectors(Qi,tr),e=[fa.x,fa.y,fa.z],Xl(e,ls,cs,us,ha))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Pi=[new B,new B,new B,new B,new B,new B,new B,new B],oi=new B,ua=new sa,ls=new B,cs=new B,us=new B,Qi=new B,tr=new B,Tr=new B,co=new B,ha=new B,fa=new B,br=new B;function Xl(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){br.fromArray(r,s);const a=i.x*Math.abs(br.x)+i.y*Math.abs(br.y)+i.z*Math.abs(br.z),l=t.dot(br),c=e.dot(br),u=n.dot(br);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const gg=new sa,uo=new B,Yl=new B;class sh{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):gg.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;uo.subVectors(t,this.center);const e=uo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(uo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(uo.copy(t.center).add(Yl)),this.expandByPoint(uo.copy(t.center).sub(Yl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new B,ql=new B,da=new B,er=new B,$l=new B,pa=new B,Kl=new B;class vg{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Li.copy(this.origin).addScaledVector(this.direction,e),Li.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ql.copy(t).add(e).multiplyScalar(.5),da.copy(e).sub(t).normalize(),er.copy(this.origin).sub(ql);const s=t.distanceTo(e)*.5,o=-this.direction.dot(da),a=er.dot(this.direction),l=-er.dot(da),c=er.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ql).addScaledVector(da,f),d}intersectSphere(t,e){Li.subVectors(t.center,this.origin);const n=Li.dot(this.direction),i=Li.dot(Li)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Li)!==null}intersectTriangle(t,e,n,i,s){$l.subVectors(e,t),pa.subVectors(n,t),Kl.crossVectors($l,pa);let o=this.direction.dot(Kl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;er.subVectors(this.origin,t);const l=a*this.direction.dot(pa.crossVectors(er,pa));if(l<0)return null;const c=a*this.direction.dot($l.cross(er));if(c<0||l+c>o)return null;const u=-a*er.dot(Kl);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Re{constructor(t,e,n,i,s,o,a,l,c,u,h,f,d,_,g,p){Re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,u,h,f,d,_,g,p)}set(t,e,n,i,s,o,a,l,c,u,h,f,d,_,g,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/hs.setFromMatrixColumn(t,0).length(),s=1/hs.setFromMatrixColumn(t,1).length(),o=1/hs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,d=o*h,_=a*u,g=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+_*c,e[5]=f-g*c,e[9]=-a*l,e[2]=g-f*c,e[6]=_+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;e[0]=f+g*a,e[4]=_*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-_,e[6]=g+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;e[0]=f-g*a,e[4]=-o*h,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*u,e[9]=g-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,d=o*h,_=a*u,g=a*h;e[0]=l*u,e[4]=_*c-d,e[8]=f*c+g,e[1]=l*h,e[5]=g*c+f,e[9]=d*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=g-f*h,e[8]=_*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+_,e[10]=f-g*h}else if(t.order==="XZY"){const f=o*l,d=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+g,e[5]=o*u,e[9]=d*h-_,e[2]=_*h-d,e[6]=a*u,e[10]=g*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xg,t,Sg)}lookAt(t,e,n){const i=this.elements;return On.subVectors(t,e),On.lengthSq()===0&&(On.z=1),On.normalize(),nr.crossVectors(n,On),nr.lengthSq()===0&&(Math.abs(n.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),nr.crossVectors(n,On)),nr.normalize(),ma.crossVectors(On,nr),i[0]=nr.x,i[4]=ma.x,i[8]=On.x,i[1]=nr.y,i[5]=ma.y,i[9]=On.y,i[2]=nr.z,i[6]=ma.z,i[10]=On.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],p=n[10],m=n[14],y=n[3],x=n[7],S=n[11],R=n[15],A=i[0],E=i[4],P=i[8],N=i[12],v=i[1],T=i[5],O=i[9],k=i[13],W=i[2],q=i[6],z=i[10],Y=i[14],X=i[3],ot=i[7],L=i[11],ut=i[15];return s[0]=o*A+a*v+l*W+c*X,s[4]=o*E+a*T+l*q+c*ot,s[8]=o*P+a*O+l*z+c*L,s[12]=o*N+a*k+l*Y+c*ut,s[1]=u*A+h*v+f*W+d*X,s[5]=u*E+h*T+f*q+d*ot,s[9]=u*P+h*O+f*z+d*L,s[13]=u*N+h*k+f*Y+d*ut,s[2]=_*A+g*v+p*W+m*X,s[6]=_*E+g*T+p*q+m*ot,s[10]=_*P+g*O+p*z+m*L,s[14]=_*N+g*k+p*Y+m*ut,s[3]=y*A+x*v+S*W+R*X,s[7]=y*E+x*T+S*q+R*ot,s[11]=y*P+x*O+S*z+R*L,s[15]=y*N+x*k+S*Y+R*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],_=t[3],g=t[7],p=t[11],m=t[15];return _*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*d-n*l*d)+g*(+e*l*d-e*c*f+s*o*f-i*o*d+i*c*u-s*l*u)+p*(+e*c*h-e*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+m*(-i*a*u-e*l*h+e*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],_=t[12],g=t[13],p=t[14],m=t[15],y=h*p*c-g*f*c+g*l*d-a*p*d-h*l*m+a*f*m,x=_*f*c-u*p*c-_*l*d+o*p*d+u*l*m-o*f*m,S=u*g*c-_*h*c+_*a*d-o*g*d-u*a*m+o*h*m,R=_*h*l-u*g*l-_*a*f+o*g*f+u*a*p-o*h*p,A=e*y+n*x+i*S+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return t[0]=y*E,t[1]=(g*f*s-h*p*s-g*i*d+n*p*d+h*i*m-n*f*m)*E,t[2]=(a*p*s-g*l*s+g*i*c-n*p*c-a*i*m+n*l*m)*E,t[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*E,t[4]=x*E,t[5]=(u*p*s-_*f*s+_*i*d-e*p*d-u*i*m+e*f*m)*E,t[6]=(_*l*s-o*p*s-_*i*c+e*p*c+o*i*m-e*l*m)*E,t[7]=(o*f*s-u*l*s+u*i*c-e*f*c-o*i*d+e*l*d)*E,t[8]=S*E,t[9]=(_*h*s-u*g*s-_*n*d+e*g*d+u*n*m-e*h*m)*E,t[10]=(o*g*s-_*a*s+_*n*c-e*g*c-o*n*m+e*a*m)*E,t[11]=(u*a*s-o*h*s-u*n*c+e*h*c+o*n*d-e*a*d)*E,t[12]=R*E,t[13]=(u*g*i-_*h*i+_*n*f-e*g*f-u*n*p+e*h*p)*E,t[14]=(_*a*i-o*g*i-_*n*l+e*g*l+o*n*p-e*a*p)*E,t[15]=(o*h*i-u*a*i+u*n*l-e*h*l-o*n*f+e*a*f)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,_=s*h,g=o*u,p=o*h,m=a*h,y=l*c,x=l*u,S=l*h,R=n.x,A=n.y,E=n.z;return i[0]=(1-(g+m))*R,i[1]=(d+S)*R,i[2]=(_-x)*R,i[3]=0,i[4]=(d-S)*A,i[5]=(1-(f+m))*A,i[6]=(p+y)*A,i[7]=0,i[8]=(_+x)*E,i[9]=(p-y)*E,i[10]=(1-(f+g))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=hs.set(i[0],i[1],i[2]).length();const o=hs.set(i[4],i[5],i[6]).length(),a=hs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],ai.copy(this);const c=1/s,u=1/o,h=1/a;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=u,ai.elements[5]*=u,ai.elements[6]*=u,ai.elements[8]*=h,ai.elements[9]*=h,ai.elements[10]*=h,e.setFromRotationMatrix(ai),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Vi){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i);let d,_;if(a===Vi)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===fl)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Vi){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(o-s),f=(e+t)*c,d=(n+i)*u;let _,g;if(a===Vi)_=(o+s)*h,g=-2*h;else if(a===fl)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const hs=new B,ai=new Re,xg=new B(0,0,0),Sg=new B(1,1,1),nr=new B,ma=new B,On=new B,ef=new Re,nf=new ra;class Ai{constructor(t=0,e=0,n=0,i=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ef.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ef,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nf.setFromEuler(this),this.setFromQuaternion(nf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class op{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Mg=0;const rf=new B,fs=new ra,Di=new Re,_a=new B,ho=new B,yg=new B,Eg=new ra,sf=new B(1,0,0),of=new B(0,1,0),af=new B(0,0,1),lf={type:"added"},Tg={type:"removed"},ds={type:"childadded",child:null},Zl={type:"childremoved",child:null};class hn extends io{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const t=new B,e=new Ai,n=new ra,i=new B(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Re},normalMatrix:{value:new Qt}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new op,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(sf,t)}rotateY(t){return this.rotateOnAxis(of,t)}rotateZ(t){return this.rotateOnAxis(af,t)}translateOnAxis(t,e){return rf.copy(t).applyQuaternion(this.quaternion),this.position.add(rf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sf,t)}translateY(t){return this.translateOnAxis(of,t)}translateZ(t){return this.translateOnAxis(af,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_a.copy(t):_a.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(ho,_a,this.up):Di.lookAt(_a,ho,this.up),this.quaternion.setFromRotationMatrix(Di),i&&(Di.extractRotation(i.matrixWorld),fs.setFromRotationMatrix(Di),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lf),ds.child=t,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tg),Zl.child=t,this.dispatchEvent(Zl),Zl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Di.multiply(t.parent.matrixWorld)),t.applyMatrix4(Di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lf),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,t,yg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,Eg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}hn.DEFAULT_UP=new B(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new B,Ii=new B,Jl=new B,Ui=new B,ps=new B,ms=new B,cf=new B,jl=new B,Ql=new B,tc=new B,ec=new ve,nc=new ve,ic=new ve;class fi{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),li.subVectors(t,e),i.cross(li);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){li.subVectors(i,e),Ii.subVectors(n,e),Jl.subVectors(t,e);const o=li.dot(li),a=li.dot(Ii),l=li.dot(Jl),c=Ii.dot(Ii),u=Ii.dot(Jl),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-d-_,_,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ui.x),l.addScaledVector(o,Ui.y),l.addScaledVector(a,Ui.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return ec.setScalar(0),nc.setScalar(0),ic.setScalar(0),ec.fromBufferAttribute(t,e),nc.fromBufferAttribute(t,n),ic.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(ec,s.x),o.addScaledVector(nc,s.y),o.addScaledVector(ic,s.z),o}static isFrontFacing(t,e,n,i){return li.subVectors(n,e),Ii.subVectors(t,e),li.cross(Ii).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),li.cross(Ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return fi.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return fi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;ps.subVectors(i,n),ms.subVectors(s,n),jl.subVectors(t,n);const l=ps.dot(jl),c=ms.dot(jl);if(l<=0&&c<=0)return e.copy(n);Ql.subVectors(t,i);const u=ps.dot(Ql),h=ms.dot(Ql);if(u>=0&&h<=u)return e.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(ps,o);tc.subVectors(t,s);const d=ps.dot(tc),_=ms.dot(tc);if(_>=0&&d<=_)return e.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(ms,a);const p=u*_-d*h;if(p<=0&&h-u>=0&&d-_>=0)return cf.subVectors(s,i),a=(h-u)/(h-u+(d-_)),e.copy(i).addScaledVector(cf,a);const m=1/(p+g+f);return o=g*m,a=f*m,e.copy(n).addScaledVector(ps,o).addScaledVector(ms,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},ga={h:0,s:0,l:0};function rc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=vi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=fe.workingColorSpace){if(t=rh(t,1),e=Qe(e,0,1),n=Qe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=rc(o,s,t+1/3),this.g=rc(o,s,t),this.b=rc(o,s,t-1/3)}return fe.toWorkingColorSpace(this,i),this}setStyle(t,e=vi){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=vi){const n=ap[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}copyLinearToSRGB(t){return this.r=Vl(t.r),this.g=Vl(t.g),this.b=Vl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vi){return fe.fromWorkingColorSpace(rn.copy(this),t),Math.round(Qe(rn.r*255,0,255))*65536+Math.round(Qe(rn.g*255,0,255))*256+Math.round(Qe(rn.b*255,0,255))}getHexString(t=vi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.fromWorkingColorSpace(rn.copy(this),e);const n=rn.r,i=rn.g,s=rn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=fe.workingColorSpace){return fe.fromWorkingColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=vi){fe.fromWorkingColorSpace(rn.copy(this),t);const e=rn.r,n=rn.g,i=rn.b;return t!==vi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ir),this.setHSL(ir.h+t,ir.s+e,ir.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ir),t.getHSL(ga);const n=Ao(ir.h,ga.h,e),i=Ao(ir.s,ga.s,e),s=Ao(ir.l,ga.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new Zt;Zt.NAMES=ap;let bg=0;class oa extends io{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=is(),this.name="",this.type="Material",this.blending=Is,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nc,this.blendDst=Oc,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(n.blending=this.blending),this.side!==gr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nc&&(n.blendSrc=this.blendSrc),this.blendDst!==Oc&&(n.blendDst=this.blendDst),this.blendEquation!==Fr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class oh extends oa{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=Bd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ke=new B,va=new ft;class bi{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$h,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)va.fromBufferAttribute(this,e),va.applyMatrix3(t),this.setXY(e,va.x,va.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ts(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ts(e,this.array)),e}setX(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ts(e,this.array)),e}setY(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ts(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ts(e,this.array)),e}setW(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array),i=pn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array),i=pn(i,this.array),s=pn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$h&&(t.usage=this.usage),t}}class lp extends bi{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class cp extends bi{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class mi extends bi{constructor(t,e,n){super(new Float32Array(t),e,n)}}let wg=0;const Jn=new Re,sc=new hn,_s=new B,Fn=new sa,fo=new sa,$e=new B;class Ji extends io{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ip(t)?cp:lp)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Jn.makeRotationFromQuaternion(t),this.applyMatrix4(Jn),this}rotateX(t){return Jn.makeRotationX(t),this.applyMatrix4(Jn),this}rotateY(t){return Jn.makeRotationY(t),this.applyMatrix4(Jn),this}rotateZ(t){return Jn.makeRotationZ(t),this.applyMatrix4(Jn),this}translate(t,e,n){return Jn.makeTranslation(t,e,n),this.applyMatrix4(Jn),this}scale(t,e,n){return Jn.makeScale(t,e,n),this.applyMatrix4(Jn),this}lookAt(t){return sc.lookAt(t),sc.updateMatrix(),this.applyMatrix4(sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new mi(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Fn.setFromBufferAttribute(s),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sh);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];fo.setFromBufferAttribute(a),this.morphTargetsRelative?($e.addVectors(Fn.min,fo.min),Fn.expandByPoint($e),$e.addVectors(Fn.max,fo.max),Fn.expandByPoint($e)):(Fn.expandByPoint(fo.min),Fn.expandByPoint(fo.max))}Fn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)$e.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared($e));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)$e.fromBufferAttribute(a,c),l&&(_s.fromBufferAttribute(t,c),$e.add(_s)),i=Math.max(i,n.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new B,l[P]=new B;const c=new B,u=new B,h=new B,f=new ft,d=new ft,_=new ft,g=new B,p=new B;function m(P,N,v){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,N),h.fromBufferAttribute(n,v),f.fromBufferAttribute(s,P),d.fromBufferAttribute(s,N),_.fromBufferAttribute(s,v),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const T=1/(d.x*_.y-_.x*d.y);isFinite(T)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(T),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(T),a[P].add(g),a[N].add(g),a[v].add(g),l[P].add(p),l[N].add(p),l[v].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,N=y.length;P<N;++P){const v=y[P],T=v.start,O=v.count;for(let k=T,W=T+O;k<W;k+=3)m(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const x=new B,S=new B,R=new B,A=new B;function E(P){R.fromBufferAttribute(i,P),A.copy(R);const N=a[P];x.copy(N),x.sub(R.multiplyScalar(R.dot(N))).normalize(),S.crossVectors(A,N);const T=S.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,T)}for(let P=0,N=y.length;P<N;++P){const v=y[P],T=v.start,O=v.count;for(let k=T,W=T+O;k<W;k+=3)E(t.getX(k+0)),E(t.getX(k+1)),E(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new B,s=new B,o=new B,a=new B,l=new B,c=new B,u=new B,h=new B;if(t)for(let f=0,d=t.count;f<d;f+=3){const _=t.getX(f+0),g=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,p),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let m=0;m<u;m++)f[_++]=c[d++]}return new bi(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ji,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uf=new Re,wr=new vg,xa=new sh,hf=new B,Sa=new B,Ma=new B,ya=new B,oc=new B,Ea=new B,ff=new B,Ta=new B;class bn extends hn{constructor(t=new Ji,e=new oh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Ea.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(oc.fromBufferAttribute(h,t),o?Ea.addScaledVector(oc,u):Ea.addScaledVector(oc.sub(e),u))}e.add(Ea)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(s),wr.copy(t.ray).recast(t.near),!(xa.containsPoint(wr.origin)===!1&&(wr.intersectSphere(xa,hf)===null||wr.origin.distanceToSquared(hf)>(t.far-t.near)**2))&&(uf.copy(s).invert(),wr.copy(t.ray).applyMatrix4(uf),!(n.boundingBox!==null&&wr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wr)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=o[p.materialIndex],y=Math.max(p.start,d.start),x=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let S=y,R=x;S<R;S+=3){const A=a.getX(S),E=a.getX(S+1),P=a.getX(S+2);i=ba(this,m,t,n,c,u,h,A,E,P),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const y=a.getX(p),x=a.getX(p+1),S=a.getX(p+2);i=ba(this,o,t,n,c,u,h,y,x,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=o[p.materialIndex],y=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let S=y,R=x;S<R;S+=3){const A=S,E=S+1,P=S+2;i=ba(this,m,t,n,c,u,h,A,E,P),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const y=p,x=p+1,S=p+2;i=ba(this,o,t,n,c,u,h,y,x,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Ag(r,t,e,n,i,s,o,a){let l;if(t.side===wn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===gr,a),l===null)return null;Ta.copy(a),Ta.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Ta);return c<e.near||c>e.far?null:{distance:c,point:Ta.clone(),object:r}}function ba(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Sa),r.getVertexPosition(l,Ma),r.getVertexPosition(c,ya);const u=Ag(r,t,e,n,Sa,Ma,ya,ff);if(u){const h=new B;fi.getBarycoord(ff,Sa,Ma,ya,h),i&&(u.uv=fi.getInterpolatedAttribute(i,a,l,c,h,new ft)),s&&(u.uv1=fi.getInterpolatedAttribute(s,a,l,c,h,new ft)),o&&(u.normal=fi.getInterpolatedAttribute(o,a,l,c,h,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new B,materialIndex:0};fi.getNormal(Sa,Ma,ya,f.normal),u.face=f,u.barycoord=h}return u}class ro extends Ji{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new mi(c,3)),this.setAttribute("normal",new mi(u,3)),this.setAttribute("uv",new mi(h,2));function _(g,p,m,y,x,S,R,A,E,P,N){const v=S/E,T=R/P,O=S/2,k=R/2,W=A/2,q=E+1,z=P+1;let Y=0,X=0;const ot=new B;for(let L=0;L<z;L++){const ut=L*T-k;for(let zt=0;zt<q;zt++){const qt=zt*v-O;ot[g]=qt*y,ot[p]=ut*x,ot[m]=W,c.push(ot.x,ot.y,ot.z),ot[g]=0,ot[p]=0,ot[m]=A>0?1:-1,u.push(ot.x,ot.y,ot.z),h.push(zt/E),h.push(1-L/P),Y+=1}}for(let L=0;L<P;L++)for(let ut=0;ut<E;ut++){const zt=f+ut+q*L,qt=f+ut+q*(L+1),$=f+(ut+1)+q*(L+1),et=f+(ut+1)+q*L;l.push(zt,qt,et),l.push(qt,$,et),X+=6}a.addGroup(d,X,N),d+=X,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ro(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ks(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function _n(r){const t={};for(let e=0;e<r.length;e++){const n=Ks(r[e]);for(const i in n)t[i]=n[i]}return t}function Cg(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function up(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}const Wo={clone:Ks,merge:_n};var Rg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends oa{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rg,this.fragmentShader=Pg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ks(t.uniforms),this.uniformsGroups=Cg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class hp extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=Vi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rr=new B,df=new ft,pf=new ft;class Hn extends hp{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Go*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Go*2*Math.atan(Math.tan(wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(rr.x,rr.y).multiplyScalar(-t/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rr.x,rr.y).multiplyScalar(-t/rr.z)}getViewSize(t,e){return this.getViewBounds(t,df,pf),e.subVectors(pf,df)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(wo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const gs=-90,vs=1;class Lg extends hn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Hn(gs,vs,t,e);i.layers=this.layers,this.add(i);const s=new Hn(gs,vs,t,e);s.layers=this.layers,this.add(s);const o=new Hn(gs,vs,t,e);o.layers=this.layers,this.add(o);const a=new Hn(gs,vs,t,e);a.layers=this.layers,this.add(a);const l=new Hn(gs,vs,t,e);l.layers=this.layers,this.add(l);const c=new Hn(gs,vs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Vi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class fp extends An{constructor(t,e,n,i,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Xs,super(t,e,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Dg extends pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new fp(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ro(5,5,5),s=new un({name:"CubemapFromEquirect",uniforms:Ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wn,blending:Wi});s.uniforms.tEquirect.value=e;const o=new bn(i,s),a=e.minFilter;return e.minFilter===Hr&&(e.minFilter=hi),new Lg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const ac=new B,Ig=new B,Ug=new Qt;class Dr{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ac.subVectors(n,e).cross(Ig.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ac),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ug.getNormalMatrix(t),i=this.coplanarPoint(ac).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ar=new sh,wa=new B;class ah{constructor(t=new Dr,e=new Dr,n=new Dr,i=new Dr,s=new Dr,o=new Dr){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vi){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],_=i[9],g=i[10],p=i[11],m=i[12],y=i[13],x=i[14],S=i[15];if(n[0].setComponents(l-s,f-c,p-d,S-m).normalize(),n[1].setComponents(l+s,f+c,p+d,S+m).normalize(),n[2].setComponents(l+o,f+u,p+_,S+y).normalize(),n[3].setComponents(l-o,f-u,p-_,S-y).normalize(),n[4].setComponents(l-a,f-h,p-g,S-x).normalize(),e===Vi)n[5].setComponents(l+a,f+h,p+g,S+x).normalize();else if(e===fl)n[5].setComponents(a,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ar.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ar.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(t){return Ar.center.set(0,0,0),Ar.radius=.7071067811865476,Ar.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(wa.x=i.normal.x>0?t.max.x:t.min.x,wa.y=i.normal.y>0?t.max.y:t.min.y,wa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(wa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dp(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Ng(r){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],g=h[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const g=h[d];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class so extends Ji{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=t/a,f=e/l,d=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const y=m*f-o;for(let x=0;x<c;x++){const S=x*h-s;_.push(S,-y,0),g.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const x=y+c*m,S=y+c*(m+1),R=y+1+c*(m+1),A=y+1+c*m;d.push(x,S,A),d.push(S,R,A)}this.setIndex(d),this.setAttribute("position",new mi(_,3)),this.setAttribute("normal",new mi(g,3)),this.setAttribute("uv",new mi(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new so(t.width,t.height,t.widthSegments,t.heightSegments)}}var Og=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fg=`#ifdef USE_ALPHAHASH
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
#endif`,Bg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vg=`#ifdef USE_AOMAP
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
#endif`,Gg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wg=`#ifdef USE_BATCHING
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
#endif`,Xg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$g=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kg=`#ifdef USE_IRIDESCENCE
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
#endif`,Zg=`#ifdef USE_BUMPMAP
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
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,n0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,r0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,s0=`#define PI 3.141592653589793
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
} // validated`,o0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,a0=`vec3 transformedNormal = objectNormal;
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
#endif`,l0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,h0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f0="gl_FragColor = linearToOutputTexel( gl_FragColor );",d0=`
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
}`,p0=`#ifdef USE_ENVMAP
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
#endif`,m0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_0=`#ifdef USE_ENVMAP
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
#endif`,g0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v0=`#ifdef USE_ENVMAP
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
#endif`,x0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,y0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E0=`#ifdef USE_GRADIENTMAP
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
}`,T0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,w0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A0=`uniform bool receiveShadow;
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
#endif`,C0=`#ifdef USE_ENVMAP
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
#endif`,R0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,L0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,I0=`PhysicalMaterial material;
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
#endif`,U0=`struct PhysicalMaterial {
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
}`,N0=`
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
#endif`,O0=`#if defined( RE_IndirectDiffuse )
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
#endif`,F0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,V0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,W0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,X0=`#if defined( USE_POINTS_UV )
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
#endif`,Y0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,q0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,K0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J0=`#ifdef USE_MORPHTARGETS
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
#endif`,j0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ev=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rv=`#ifdef USE_NORMALMAP
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
#endif`,sv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ov=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,av=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_v=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sv=`float getShadowMask() {
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
}`,Mv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yv=`#ifdef USE_SKINNING
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
#endif`,Ev=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tv=`#ifdef USE_SKINNING
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
#endif`,bv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Av=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rv=`#ifdef USE_TRANSMISSION
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
#endif`,Pv=`#ifdef USE_TRANSMISSION
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
#endif`,Lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ov=`uniform sampler2D t2D;
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
}`,Fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hv=`#include <common>
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
}`,Vv=`#if DEPTH_PACKING == 3200
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
}`,Gv=`#define DISTANCE
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
}`,Wv=`#define DISTANCE
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
}`,Xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qv=`uniform float scale;
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
}`,$v=`uniform vec3 diffuse;
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
}`,Kv=`#include <common>
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
}`,Zv=`uniform vec3 diffuse;
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
}`,Jv=`#define LAMBERT
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
}`,jv=`#define LAMBERT
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
}`,Qv=`#define MATCAP
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
}`,tx=`#define MATCAP
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
}`,ex=`#define NORMAL
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
}`,nx=`#define NORMAL
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
}`,ix=`#define PHONG
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
}`,rx=`#define PHONG
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
}`,sx=`#define STANDARD
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
}`,ox=`#define STANDARD
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
}`,ax=`#define TOON
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
}`,lx=`#define TOON
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
}`,cx=`uniform float size;
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
}`,ux=`uniform vec3 diffuse;
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
}`,hx=`#include <common>
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
}`,fx=`uniform vec3 color;
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
}`,dx=`uniform float rotation;
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
}`,px=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:Og,alphahash_pars_fragment:Fg,alphamap_fragment:Bg,alphamap_pars_fragment:zg,alphatest_fragment:kg,alphatest_pars_fragment:Hg,aomap_fragment:Vg,aomap_pars_fragment:Gg,batching_pars_vertex:Wg,batching_vertex:Xg,begin_vertex:Yg,beginnormal_vertex:qg,bsdfs:$g,iridescence_fragment:Kg,bumpmap_pars_fragment:Zg,clipping_planes_fragment:Jg,clipping_planes_pars_fragment:jg,clipping_planes_pars_vertex:Qg,clipping_planes_vertex:t0,color_fragment:e0,color_pars_fragment:n0,color_pars_vertex:i0,color_vertex:r0,common:s0,cube_uv_reflection_fragment:o0,defaultnormal_vertex:a0,displacementmap_pars_vertex:l0,displacementmap_vertex:c0,emissivemap_fragment:u0,emissivemap_pars_fragment:h0,colorspace_fragment:f0,colorspace_pars_fragment:d0,envmap_fragment:p0,envmap_common_pars_fragment:m0,envmap_pars_fragment:_0,envmap_pars_vertex:g0,envmap_physical_pars_fragment:C0,envmap_vertex:v0,fog_vertex:x0,fog_pars_vertex:S0,fog_fragment:M0,fog_pars_fragment:y0,gradientmap_pars_fragment:E0,lightmap_pars_fragment:T0,lights_lambert_fragment:b0,lights_lambert_pars_fragment:w0,lights_pars_begin:A0,lights_toon_fragment:R0,lights_toon_pars_fragment:P0,lights_phong_fragment:L0,lights_phong_pars_fragment:D0,lights_physical_fragment:I0,lights_physical_pars_fragment:U0,lights_fragment_begin:N0,lights_fragment_maps:O0,lights_fragment_end:F0,logdepthbuf_fragment:B0,logdepthbuf_pars_fragment:z0,logdepthbuf_pars_vertex:k0,logdepthbuf_vertex:H0,map_fragment:V0,map_pars_fragment:G0,map_particle_fragment:W0,map_particle_pars_fragment:X0,metalnessmap_fragment:Y0,metalnessmap_pars_fragment:q0,morphinstance_vertex:$0,morphcolor_vertex:K0,morphnormal_vertex:Z0,morphtarget_pars_vertex:J0,morphtarget_vertex:j0,normal_fragment_begin:Q0,normal_fragment_maps:tv,normal_pars_fragment:ev,normal_pars_vertex:nv,normal_vertex:iv,normalmap_pars_fragment:rv,clearcoat_normal_fragment_begin:sv,clearcoat_normal_fragment_maps:ov,clearcoat_pars_fragment:av,iridescence_pars_fragment:lv,opaque_fragment:cv,packing:uv,premultiplied_alpha_fragment:hv,project_vertex:fv,dithering_fragment:dv,dithering_pars_fragment:pv,roughnessmap_fragment:mv,roughnessmap_pars_fragment:_v,shadowmap_pars_fragment:gv,shadowmap_pars_vertex:vv,shadowmap_vertex:xv,shadowmask_pars_fragment:Sv,skinbase_vertex:Mv,skinning_pars_vertex:yv,skinning_vertex:Ev,skinnormal_vertex:Tv,specularmap_fragment:bv,specularmap_pars_fragment:wv,tonemapping_fragment:Av,tonemapping_pars_fragment:Cv,transmission_fragment:Rv,transmission_pars_fragment:Pv,uv_pars_fragment:Lv,uv_pars_vertex:Dv,uv_vertex:Iv,worldpos_vertex:Uv,background_vert:Nv,background_frag:Ov,backgroundCube_vert:Fv,backgroundCube_frag:Bv,cube_vert:zv,cube_frag:kv,depth_vert:Hv,depth_frag:Vv,distanceRGBA_vert:Gv,distanceRGBA_frag:Wv,equirect_vert:Xv,equirect_frag:Yv,linedashed_vert:qv,linedashed_frag:$v,meshbasic_vert:Kv,meshbasic_frag:Zv,meshlambert_vert:Jv,meshlambert_frag:jv,meshmatcap_vert:Qv,meshmatcap_frag:tx,meshnormal_vert:ex,meshnormal_frag:nx,meshphong_vert:ix,meshphong_frag:rx,meshphysical_vert:sx,meshphysical_frag:ox,meshtoon_vert:ax,meshtoon_frag:lx,points_vert:cx,points_frag:ux,shadow_vert:hx,shadow_frag:fx,sprite_vert:dx,sprite_frag:px},Mt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Mi={basic:{uniforms:_n([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:_n([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:_n([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:_n([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:_n([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:_n([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:_n([Mt.points,Mt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:_n([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:_n([Mt.common,Mt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:_n([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:_n([Mt.sprite,Mt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:_n([Mt.common,Mt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:_n([Mt.lights,Mt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Mi.physical={uniforms:_n([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Aa={r:0,b:0,g:0},Cr=new Ai,mx=new Re;function _x(r,t,e,n,i,s,o){const a=new Zt(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function _(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function g(y){let x=!1;const S=_(y);S===null?m(a,l):S&&S.isColor&&(m(S,1),x=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(y,x){const S=_(x);S&&(S.isCubeTexture||S.mapping===wl)?(u===void 0&&(u=new bn(new ro(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Ks(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Cr.copy(x.backgroundRotation),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(mx.makeRotationFromEuler(Cr)),u.material.toneMapped=fe.getTransfer(S.colorSpace)!==Ee,(h!==S||f!==S.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,d=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new bn(new so(2,2),new un({name:"BackgroundMaterial",uniforms:Ks(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=fe.getTransfer(S.colorSpace)!==Ee,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,d=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,x){y.getRGB(Aa,up(r)),n.buffers.color.setClear(Aa.r,Aa.g,Aa.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:g,addToRenderList:p}}function gx(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(v,T,O,k,W){let q=!1;const z=h(k,O,T);s!==z&&(s=z,c(s.object)),q=d(v,k,O,W),q&&_(v,k,O,W),W!==null&&t.update(W,r.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,S(v,T,O,k),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function h(v,T,O){const k=O.wireframe===!0;let W=n[v.id];W===void 0&&(W={},n[v.id]=W);let q=W[T.id];q===void 0&&(q={},W[T.id]=q);let z=q[k];return z===void 0&&(z=f(l()),q[k]=z),z}function f(v){const T=[],O=[],k=[];for(let W=0;W<e;W++)T[W]=0,O[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:O,attributeDivisors:k,object:v,attributes:{},index:null}}function d(v,T,O,k){const W=s.attributes,q=T.attributes;let z=0;const Y=O.getAttributes();for(const X in Y)if(Y[X].location>=0){const L=W[X];let ut=q[X];if(ut===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(ut=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(ut=v.instanceColor)),L===void 0||L.attribute!==ut||ut&&L.data!==ut.data)return!0;z++}return s.attributesNum!==z||s.index!==k}function _(v,T,O,k){const W={},q=T.attributes;let z=0;const Y=O.getAttributes();for(const X in Y)if(Y[X].location>=0){let L=q[X];L===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(L=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(L=v.instanceColor));const ut={};ut.attribute=L,L&&L.data&&(ut.data=L.data),W[X]=ut,z++}s.attributes=W,s.attributesNum=z,s.index=k}function g(){const v=s.newAttributes;for(let T=0,O=v.length;T<O;T++)v[T]=0}function p(v){m(v,0)}function m(v,T){const O=s.newAttributes,k=s.enabledAttributes,W=s.attributeDivisors;O[v]=1,k[v]===0&&(r.enableVertexAttribArray(v),k[v]=1),W[v]!==T&&(r.vertexAttribDivisor(v,T),W[v]=T)}function y(){const v=s.newAttributes,T=s.enabledAttributes;for(let O=0,k=T.length;O<k;O++)T[O]!==v[O]&&(r.disableVertexAttribArray(O),T[O]=0)}function x(v,T,O,k,W,q,z){z===!0?r.vertexAttribIPointer(v,T,O,W,q):r.vertexAttribPointer(v,T,O,k,W,q)}function S(v,T,O,k){g();const W=k.attributes,q=O.getAttributes(),z=T.defaultAttributeValues;for(const Y in q){const X=q[Y];if(X.location>=0){let ot=W[Y];if(ot===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(ot=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(ot=v.instanceColor)),ot!==void 0){const L=ot.normalized,ut=ot.itemSize,zt=t.get(ot);if(zt===void 0)continue;const qt=zt.buffer,$=zt.type,et=zt.bytesPerElement,pt=$===r.INT||$===r.UNSIGNED_INT||ot.gpuType===Ju;if(ot.isInterleavedBufferAttribute){const lt=ot.data,Pt=lt.stride,Ct=ot.offset;if(lt.isInstancedInterleavedBuffer){for(let kt=0;kt<X.locationSize;kt++)m(X.location+kt,lt.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let kt=0;kt<X.locationSize;kt++)p(X.location+kt);r.bindBuffer(r.ARRAY_BUFFER,qt);for(let kt=0;kt<X.locationSize;kt++)x(X.location+kt,ut/X.locationSize,$,L,Pt*et,(Ct+ut/X.locationSize*kt)*et,pt)}else{if(ot.isInstancedBufferAttribute){for(let lt=0;lt<X.locationSize;lt++)m(X.location+lt,ot.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let lt=0;lt<X.locationSize;lt++)p(X.location+lt);r.bindBuffer(r.ARRAY_BUFFER,qt);for(let lt=0;lt<X.locationSize;lt++)x(X.location+lt,ut/X.locationSize,$,L,ut*et,ut/X.locationSize*lt*et,pt)}}else if(z!==void 0){const L=z[Y];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(X.location,L);break;case 3:r.vertexAttrib3fv(X.location,L);break;case 4:r.vertexAttrib4fv(X.location,L);break;default:r.vertexAttrib1fv(X.location,L)}}}}y()}function R(){P();for(const v in n){const T=n[v];for(const O in T){const k=T[O];for(const W in k)u(k[W].object),delete k[W];delete T[O]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const T=n[v.id];for(const O in T){const k=T[O];for(const W in k)u(k[W].object),delete k[W];delete T[O]}delete n[v.id]}function E(v){for(const T in n){const O=n[T];if(O[v.id]===void 0)continue;const k=O[v.id];for(const W in k)u(k[W].object),delete k[W];delete O[v.id]}}function P(){N(),o=!0,s!==i&&(s=i,c(s.object))}function N(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:N,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:p,disableUnusedAttributes:y}}function vx(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];e.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g];for(let g=0;g<f.length;g++)e.update(_,n,f[g])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function xx(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==di&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const P=E===Xi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==qi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Hi&&!P)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const E=t.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}const d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:R,maxSamples:A}}function Sx(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Dr,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,m=r.get(h);if(!i||_===null||_.length===0||s&&!p)s?u(null):c();else{const y=s?0:n,x=y*4;let S=m.clippingState||null;l.value=S,S=u(_,f,x,d);for(let R=0;R!==x;++R)S[R]=e[R];m.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=d+g*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,S=d;x!==g;++x,S+=4)o.copy(h[x]).applyMatrix4(y,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function Mx(r){let t=new WeakMap;function e(o,a){return a===Wc?o.mapping=Xs:a===Xc&&(o.mapping=Ys),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wc||a===Xc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Dg(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class lh extends hp{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const As=4,mf=[.125,.215,.35,.446,.526,.582],Br=20,lc=new lh,_f=new Zt;let cc=null,uc=0,hc=0,fc=!1;const Ir=(1+Math.sqrt(5))/2,xs=1/Ir,gf=[new B(-Ir,xs,0),new B(Ir,xs,0),new B(-xs,0,Ir),new B(xs,0,Ir),new B(0,Ir,-xs),new B(0,Ir,xs),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class vf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){cc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(cc,uc,hc),this._renderer.xr.enabled=fc,t.scissorTest=!1,Ca(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xs||t.mapping===Ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:Xi,format:di,colorSpace:yr,depthBuffer:!1},i=xf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xf(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yx(s)),this._blurMaterial=Ex(s,t,e)}return i}_compileMaterial(t){const e=new bn(this._lodPlanes[0],t);this._renderer.compile(e,lc)}_sceneToCubeUV(t,e,n,i){const a=new Hn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(_f),u.toneMapping=dr,u.autoClear=!1;const d=new oh({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),_=new bn(new ro,d);let g=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,g=!0):(d.color.copy(_f),g=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;Ca(i,y*x,m>2?x:0,x,x),u.setRenderTarget(i),g&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Xs||t.mapping===Ys;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sf());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new bn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Ca(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,lc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=gf[(i-s-1)%gf.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new bn(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Br-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):Br;p>Br&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Br}`);const m=[];let y=0;for(let E=0;E<Br;++E){const P=E/g,N=Math.exp(-P*P/2);m.push(N),E===0?y+=N:E<p&&(y+=2*N)}for(let E=0;E<m.length;E++)m[E]=m[E]/y;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-n;const S=this._sizeLods[i],R=3*S*(i>x-As?i-x+As:0),A=4*(this._cubeSize-S);Ca(e,R,A,3*S,2*S),l.setRenderTarget(e),l.render(h,lc)}}function yx(r){const t=[],e=[],n=[];let i=r;const s=r-As+1+mf.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-As?l=mf[o-r+As-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,p=2,m=1,y=new Float32Array(g*_*d),x=new Float32Array(p*_*d),S=new Float32Array(m*_*d);for(let A=0;A<d;A++){const E=A%3*2/3-1,P=A>2?0:-1,N=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];y.set(N,g*_*A),x.set(f,p*_*A);const v=[A,A,A,A,A,A];S.set(v,m*_*A)}const R=new Ji;R.setAttribute("position",new bi(y,g)),R.setAttribute("uv",new bi(x,p)),R.setAttribute("faceIndex",new bi(S,m)),t.push(R),i>As&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function xf(r,t,e){const n=new pi(r,t,e);return n.texture.mapping=wl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ca(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Ex(r,t,e){const n=new Float32Array(Br),i=new B(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ch(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Sf(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ch(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Mf(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function ch(){return`

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
	`}function Tx(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Wc||l===Xc,u=l===Xs||l===Ys;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new vf(r)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(e===null&&(e=new vf(r)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function bx(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Ja("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function wx(r,t,e,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)t.remove(g[p])}f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)t.update(f[_],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const g=d[_];for(let p=0,m=g.length;p<m;p++)t.update(g[p],r.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const y=d.array;g=d.version;for(let x=0,S=y.length;x<S;x+=3){const R=y[x+0],A=y[x+1],E=y[x+2];f.push(R,A,A,E,E,R)}}else if(_!==void 0){const y=_.array;g=_.version;for(let x=0,S=y.length/3-1;x<S;x+=3){const R=x+0,A=x+1,E=x+2;f.push(R,A,A,E,E,R)}}else return;const p=new(ip(f)?cp:lp)(f,1);p.version=g;const m=s.get(h);m&&t.remove(m),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Ax(r,t,e){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),e.update(d,n,1)}function c(f,d,_){_!==0&&(r.drawElementsInstanced(n,d,s,f*o,_),e.update(d,n,_))}function u(f,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,_);let p=0;for(let m=0;m<_;m++)p+=d[m];e.update(p,n,1)}function h(f,d,_,g){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,g,0,_);let m=0;for(let y=0;y<_;y++)m+=d[y];for(let y=0;y<g.length;y++)e.update(m,n,g[y])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Cx(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Rx(r,t,e){const n=new WeakMap,i=new ve;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let v=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var d=v;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),g===!0&&(S=2),p===!0&&(S=3);let R=a.attributes.position.count*S,A=1;R>t.maxTextureSize&&(A=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const E=new Float32Array(R*A*4*h),P=new sp(E,R,A,h);P.type=Hi,P.needsUpdate=!0;const N=S*4;for(let T=0;T<h;T++){const O=m[T],k=y[T],W=x[T],q=R*A*4*T;for(let z=0;z<O.count;z++){const Y=z*N;_===!0&&(i.fromBufferAttribute(O,z),E[q+Y+0]=i.x,E[q+Y+1]=i.y,E[q+Y+2]=i.z,E[q+Y+3]=0),g===!0&&(i.fromBufferAttribute(k,z),E[q+Y+4]=i.x,E[q+Y+5]=i.y,E[q+Y+6]=i.z,E[q+Y+7]=0),p===!0&&(i.fromBufferAttribute(W,z),E[q+Y+8]=i.x,E[q+Y+9]=i.y,E[q+Y+10]=i.z,E[q+Y+11]=W.itemSize===4?i.w:1)}}f={count:h,texture:P,size:new ft(R,A)},n.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Px(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class pp extends An{constructor(t,e,n,i,s,o,a,l,c,u=Us){if(u!==Us&&u!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Us&&(n=jr),n===void 0&&u===$s&&(n=qs),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ei,this.minFilter=l!==void 0?l:ei,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const mp=new An,yf=new pp(1,1),_p=new sp,gp=new _g,vp=new fp,Ef=[],Tf=[],bf=new Float32Array(16),wf=new Float32Array(9),Af=new Float32Array(4);function oo(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Ef[i];if(s===void 0&&(s=new Float32Array(i),Ef[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Xe(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ye(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Cl(r,t){let e=Tf[t];e===void 0&&(e=new Int32Array(t),Tf[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Lx(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Dx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;r.uniform2fv(this.addr,t),Ye(e,t)}}function Ix(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;r.uniform3fv(this.addr,t),Ye(e,t)}}function Ux(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;r.uniform4fv(this.addr,t),Ye(e,t)}}function Nx(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(Xe(e,n))return;Af.set(n),r.uniformMatrix2fv(this.addr,!1,Af),Ye(e,n)}}function Ox(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(Xe(e,n))return;wf.set(n),r.uniformMatrix3fv(this.addr,!1,wf),Ye(e,n)}}function Fx(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(Xe(e,n))return;bf.set(n),r.uniformMatrix4fv(this.addr,!1,bf),Ye(e,n)}}function Bx(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function zx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;r.uniform2iv(this.addr,t),Ye(e,t)}}function kx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;r.uniform3iv(this.addr,t),Ye(e,t)}}function Hx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;r.uniform4iv(this.addr,t),Ye(e,t)}}function Vx(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Gx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;r.uniform2uiv(this.addr,t),Ye(e,t)}}function Wx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;r.uniform3uiv(this.addr,t),Ye(e,t)}}function Xx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;r.uniform4uiv(this.addr,t),Ye(e,t)}}function Yx(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(yf.compareFunction=np,s=yf):s=mp,e.setTexture2D(t||s,i)}function qx(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||gp,i)}function $x(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||vp,i)}function Kx(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||_p,i)}function Zx(r){switch(r){case 5126:return Lx;case 35664:return Dx;case 35665:return Ix;case 35666:return Ux;case 35674:return Nx;case 35675:return Ox;case 35676:return Fx;case 5124:case 35670:return Bx;case 35667:case 35671:return zx;case 35668:case 35672:return kx;case 35669:case 35673:return Hx;case 5125:return Vx;case 36294:return Gx;case 36295:return Wx;case 36296:return Xx;case 35678:case 36198:case 36298:case 36306:case 35682:return Yx;case 35679:case 36299:case 36307:return qx;case 35680:case 36300:case 36308:case 36293:return $x;case 36289:case 36303:case 36311:case 36292:return Kx}}function Jx(r,t){r.uniform1fv(this.addr,t)}function jx(r,t){const e=oo(t,this.size,2);r.uniform2fv(this.addr,e)}function Qx(r,t){const e=oo(t,this.size,3);r.uniform3fv(this.addr,e)}function tS(r,t){const e=oo(t,this.size,4);r.uniform4fv(this.addr,e)}function eS(r,t){const e=oo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function nS(r,t){const e=oo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function iS(r,t){const e=oo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function rS(r,t){r.uniform1iv(this.addr,t)}function sS(r,t){r.uniform2iv(this.addr,t)}function oS(r,t){r.uniform3iv(this.addr,t)}function aS(r,t){r.uniform4iv(this.addr,t)}function lS(r,t){r.uniform1uiv(this.addr,t)}function cS(r,t){r.uniform2uiv(this.addr,t)}function uS(r,t){r.uniform3uiv(this.addr,t)}function hS(r,t){r.uniform4uiv(this.addr,t)}function fS(r,t,e){const n=this.cache,i=t.length,s=Cl(e,i);Xe(n,s)||(r.uniform1iv(this.addr,s),Ye(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||mp,s[o])}function dS(r,t,e){const n=this.cache,i=t.length,s=Cl(e,i);Xe(n,s)||(r.uniform1iv(this.addr,s),Ye(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||gp,s[o])}function pS(r,t,e){const n=this.cache,i=t.length,s=Cl(e,i);Xe(n,s)||(r.uniform1iv(this.addr,s),Ye(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||vp,s[o])}function mS(r,t,e){const n=this.cache,i=t.length,s=Cl(e,i);Xe(n,s)||(r.uniform1iv(this.addr,s),Ye(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||_p,s[o])}function _S(r){switch(r){case 5126:return Jx;case 35664:return jx;case 35665:return Qx;case 35666:return tS;case 35674:return eS;case 35675:return nS;case 35676:return iS;case 5124:case 35670:return rS;case 35667:case 35671:return sS;case 35668:case 35672:return oS;case 35669:case 35673:return aS;case 5125:return lS;case 36294:return cS;case 36295:return uS;case 36296:return hS;case 35678:case 36198:case 36298:case 36306:case 35682:return fS;case 35679:case 36299:case 36307:return dS;case 35680:case 36300:case 36308:case 36293:return pS;case 36289:case 36303:case 36311:case 36292:return mS}}class gS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zx(e.type)}}class vS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_S(e.type)}}class xS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const dc=/(\w+)(\])?(\[|\.)?/g;function Cf(r,t){r.seq.push(t),r.map[t.id]=t}function SS(r,t,e){const n=r.name,i=n.length;for(dc.lastIndex=0;;){const s=dc.exec(n),o=dc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Cf(e,c===void 0?new gS(a,r,t):new vS(a,r,t));break}else{let h=e.map[a];h===void 0&&(h=new xS(a),Cf(e,h)),e=h}}}class ja{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);SS(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Rf(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const MS=37297;let yS=0;function ES(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function TS(r){const t=fe.getPrimaries(fe.workingColorSpace),e=fe.getPrimaries(r);let n;switch(t===e?n="":t===hl&&e===ul?n="LinearDisplayP3ToLinearSRGB":t===ul&&e===hl&&(n="LinearSRGBToLinearDisplayP3"),r){case yr:case Al:return[n,"LinearTransferOETF"];case vi:case ih:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Pf(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+ES(r.getShaderSource(t),o)}else return i}function bS(r,t){const e=TS(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function wS(r,t){let e;switch(t){case zd:e="Linear";break;case kd:e="Reinhard";break;case Hd:e="Cineon";break;case Zu:e="ACESFilmic";break;case Vd:e="AgX";break;case Gd:e="Neutral";break;case D_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ra=new B;function AS(){fe.getLuminanceCoefficients(Ra);const r=Ra.x.toFixed(4),t=Ra.y.toFixed(4),e=Ra.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vo).join(`
`)}function RS(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function PS(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function vo(r){return r!==""}function Lf(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Df(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const LS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Su(r){return r.replace(LS,IS)}const DS=new Map;function IS(r,t){let e=jt[t];if(e===void 0){const n=DS.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Su(e)}const US=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function If(r){return r.replace(US,NS)}function NS(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Uf(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function OS(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Od?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Fd?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Oi&&(t="SHADOWMAP_TYPE_VSM"),t}function FS(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Xs:case Ys:t="ENVMAP_TYPE_CUBE";break;case wl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function BS(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ys:t="ENVMAP_MODE_REFRACTION";break}return t}function zS(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Bd:t="ENVMAP_BLENDING_MULTIPLY";break;case P_:t="ENVMAP_BLENDING_MIX";break;case L_:t="ENVMAP_BLENDING_ADD";break}return t}function kS(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function HS(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=OS(e),c=FS(e),u=BS(e),h=zS(e),f=kS(e),d=CS(e),_=RS(s),g=i.createProgram();let p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(vo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(vo).join(`
`),m.length>0&&(m+=`
`)):(p=[Uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vo).join(`
`),m=[Uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==dr?"#define TONE_MAPPING":"",e.toneMapping!==dr?jt.tonemapping_pars_fragment:"",e.toneMapping!==dr?wS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,bS("linearToOutputTexel",e.outputColorSpace),AS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vo).join(`
`)),o=Su(o),o=Lf(o,e),o=Df(o,e),a=Su(a),a=Lf(a,e),a=Df(a,e),o=If(o),a=If(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=y+p+o,S=y+m+a,R=Rf(i,i.VERTEX_SHADER,x),A=Rf(i,i.FRAGMENT_SHADER,S);i.attachShader(g,R),i.attachShader(g,A),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(T){if(r.debug.checkShaderErrors){const O=i.getProgramInfoLog(g).trim(),k=i.getShaderInfoLog(R).trim(),W=i.getShaderInfoLog(A).trim();let q=!0,z=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,R,A);else{const Y=Pf(i,R,"vertex"),X=Pf(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+O+`
`+Y+`
`+X)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(k===""||W==="")&&(z=!1);z&&(T.diagnostics={runnable:q,programLog:O,vertexShader:{log:k,prefix:p},fragmentShader:{log:W,prefix:m}})}i.deleteShader(R),i.deleteShader(A),P=new ja(i,g),N=PS(i,g)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let N;this.getAttributes=function(){return N===void 0&&E(this),N};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(g,MS)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yS++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=A,this}let VS=0;class GS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new WS(t),e.set(t,n)),n}}class WS{constructor(t){this.id=VS++,this.code=t,this.usedTimes=0}}function XS(r,t,e,n,i,s,o){const a=new op,l=new GS,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.reverseDepthBuffer,d=i.vertexTextures;let _=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,T,O,k,W){const q=k.fog,z=W.geometry,Y=v.isMeshStandardMaterial?k.environment:null,X=(v.isMeshStandardMaterial?e:t).get(v.envMap||Y),ot=X&&X.mapping===wl?X.image.height:null,L=g[v.type];v.precision!==null&&(_=i.getMaxPrecision(v.precision),_!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",_,"instead."));const ut=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,zt=ut!==void 0?ut.length:0;let qt=0;z.morphAttributes.position!==void 0&&(qt=1),z.morphAttributes.normal!==void 0&&(qt=2),z.morphAttributes.color!==void 0&&(qt=3);let $,et,pt,lt;if(L){const Nt=Mi[L];$=Nt.vertexShader,et=Nt.fragmentShader}else $=v.vertexShader,et=v.fragmentShader,l.update(v),pt=l.getVertexShaderID(v),lt=l.getFragmentShaderID(v);const Pt=r.getRenderTarget(),Ct=W.isInstancedMesh===!0,kt=W.isBatchedMesh===!0,Bt=!!v.map,j=!!v.matcap,w=!!X,rt=!!v.aoMap,ct=!!v.lightMap,it=!!v.bumpMap,D=!!v.normalMap,bt=!!v.displacementMap,xt=!!v.emissiveMap,C=!!v.metalnessMap,M=!!v.roughnessMap,H=v.anisotropy>0,J=v.clearcoat>0,tt=v.dispersion>0,Z=v.iridescence>0,wt=v.sheen>0,at=v.transmission>0,gt=H&&!!v.anisotropyMap,Xt=J&&!!v.clearcoatMap,st=J&&!!v.clearcoatNormalMap,Tt=J&&!!v.clearcoatRoughnessMap,At=Z&&!!v.iridescenceMap,Vt=Z&&!!v.iridescenceThicknessMap,Et=wt&&!!v.sheenColorMap,$t=wt&&!!v.sheenRoughnessMap,Wt=!!v.specularMap,le=!!v.specularColorMap,I=!!v.specularIntensityMap,nt=at&&!!v.transmissionMap,K=at&&!!v.thicknessMap,Q=!!v.gradientMap,dt=!!v.alphaMap,mt=v.alphaTest>0,Kt=!!v.alphaHash,xe=!!v.extensions;let we=dr;v.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(we=r.toneMapping);const se={shaderID:L,shaderType:v.type,shaderName:v.name,vertexShader:$,fragmentShader:et,defines:v.defines,customVertexShaderID:pt,customFragmentShaderID:lt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_,batching:kt,batchingColor:kt&&W._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&W.instanceColor!==null,instancingMorph:Ct&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Pt===null?r.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:yr,alphaToCoverage:!!v.alphaToCoverage,map:Bt,matcap:j,envMap:w,envMapMode:w&&X.mapping,envMapCubeUVHeight:ot,aoMap:rt,lightMap:ct,bumpMap:it,normalMap:D,displacementMap:d&&bt,emissiveMap:xt,normalMapObjectSpace:D&&v.normalMapType===O_,normalMapTangentSpace:D&&v.normalMapType===ep,metalnessMap:C,roughnessMap:M,anisotropy:H,anisotropyMap:gt,clearcoat:J,clearcoatMap:Xt,clearcoatNormalMap:st,clearcoatRoughnessMap:Tt,dispersion:tt,iridescence:Z,iridescenceMap:At,iridescenceThicknessMap:Vt,sheen:wt,sheenColorMap:Et,sheenRoughnessMap:$t,specularMap:Wt,specularColorMap:le,specularIntensityMap:I,transmission:at,transmissionMap:nt,thicknessMap:K,gradientMap:Q,opaque:v.transparent===!1&&v.blending===Is&&v.alphaToCoverage===!1,alphaMap:dt,alphaTest:mt,alphaHash:Kt,combine:v.combine,mapUv:Bt&&p(v.map.channel),aoMapUv:rt&&p(v.aoMap.channel),lightMapUv:ct&&p(v.lightMap.channel),bumpMapUv:it&&p(v.bumpMap.channel),normalMapUv:D&&p(v.normalMap.channel),displacementMapUv:bt&&p(v.displacementMap.channel),emissiveMapUv:xt&&p(v.emissiveMap.channel),metalnessMapUv:C&&p(v.metalnessMap.channel),roughnessMapUv:M&&p(v.roughnessMap.channel),anisotropyMapUv:gt&&p(v.anisotropyMap.channel),clearcoatMapUv:Xt&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:st&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:$t&&p(v.sheenRoughnessMap.channel),specularMapUv:Wt&&p(v.specularMap.channel),specularColorMapUv:le&&p(v.specularColorMap.channel),specularIntensityMapUv:I&&p(v.specularIntensityMap.channel),transmissionMapUv:nt&&p(v.transmissionMap.channel),thicknessMapUv:K&&p(v.thicknessMap.channel),alphaMapUv:dt&&p(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(D||H),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!z.attributes.uv&&(Bt||dt),fog:!!q,useFog:v.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:W.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:zt,morphTextureStride:qt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:we,decodeVideoTexture:Bt&&v.map.isVideoTexture===!0&&fe.getTransfer(v.map.colorSpace)===Ee,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===zi,flipSided:v.side===wn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:xe&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&v.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return se.vertexUv1s=c.has(1),se.vertexUv2s=c.has(2),se.vertexUv3s=c.has(3),c.clear(),se}function y(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const O in v.defines)T.push(O),T.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(x(T,v),S(T,v),T.push(r.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function x(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function S(v,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),v.push(a.mask)}function R(v){const T=g[v.type];let O;if(T){const k=Mi[T];O=Wo.clone(k.uniforms)}else O=v.uniforms;return O}function A(v,T){let O;for(let k=0,W=u.length;k<W;k++){const q=u[k];if(q.cacheKey===T){O=q,++O.usedTimes;break}}return O===void 0&&(O=new HS(r,T,v,s),u.push(O)),O}function E(v){if(--v.usedTimes===0){const T=u.indexOf(v);u[T]=u[u.length-1],u.pop(),v.destroy()}}function P(v){l.remove(v)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:R,acquireProgram:A,releaseProgram:E,releaseShaderCache:P,programs:u,dispose:N}}function YS(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function qS(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Nf(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Of(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(h,f,d,_,g,p){let m=r[t];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},r[t]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=g,m.group=p),t++,m}function a(h,f,d,_,g,p){const m=o(h,f,d,_,g,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):e.push(m)}function l(h,f,d,_,g,p){const m=o(h,f,d,_,g,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):e.unshift(m)}function c(h,f){e.length>1&&e.sort(h||qS),n.length>1&&n.sort(f||Nf),i.length>1&&i.sort(f||Nf)}function u(){for(let h=t,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function $S(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Of,r.set(n,[o])):i>=s.length?(o=new Of,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function KS(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new Zt};break;case"SpotLight":e={position:new B,direction:new B,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new B,halfWidth:new B,halfHeight:new B};break}return r[t.id]=e,e}}}function ZS(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let JS=0;function jS(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function QS(r){const t=new KS,e=ZS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const i=new B,s=new Re,o=new Re;function a(c){let u=0,h=0,f=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let d=0,_=0,g=0,p=0,m=0,y=0,x=0,S=0,R=0,A=0,E=0;c.sort(jS);for(let N=0,v=c.length;N<v;N++){const T=c[N],O=T.color,k=T.intensity,W=T.distance,q=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=O.r*k,h+=O.g*k,f+=O.b*k;else if(T.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(T.sh.coefficients[z],k);E++}else if(T.isDirectionalLight){const z=t.get(T);if(z.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const Y=T.shadow,X=e.get(T);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,n.directionalShadow[d]=X,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=T.shadow.matrix,y++}n.directional[d]=z,d++}else if(T.isSpotLight){const z=t.get(T);z.position.setFromMatrixPosition(T.matrixWorld),z.color.copy(O).multiplyScalar(k),z.distance=W,z.coneCos=Math.cos(T.angle),z.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),z.decay=T.decay,n.spot[g]=z;const Y=T.shadow;if(T.map&&(n.spotLightMap[R]=T.map,R++,Y.updateMatrices(T),T.castShadow&&A++),n.spotLightMatrix[g]=Y.matrix,T.castShadow){const X=e.get(T);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,n.spotShadow[g]=X,n.spotShadowMap[g]=q,S++}g++}else if(T.isRectAreaLight){const z=t.get(T);z.color.copy(O).multiplyScalar(k),z.halfWidth.set(T.width*.5,0,0),z.halfHeight.set(0,T.height*.5,0),n.rectArea[p]=z,p++}else if(T.isPointLight){const z=t.get(T);if(z.color.copy(T.color).multiplyScalar(T.intensity),z.distance=T.distance,z.decay=T.decay,T.castShadow){const Y=T.shadow,X=e.get(T);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,X.shadowCameraNear=Y.camera.near,X.shadowCameraFar=Y.camera.far,n.pointShadow[_]=X,n.pointShadowMap[_]=q,n.pointShadowMatrix[_]=T.shadow.matrix,x++}n.point[_]=z,_++}else if(T.isHemisphereLight){const z=t.get(T);z.skyColor.copy(T.color).multiplyScalar(k),z.groundColor.copy(T.groundColor).multiplyScalar(k),n.hemi[m]=z,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==d||P.pointLength!==_||P.spotLength!==g||P.rectAreaLength!==p||P.hemiLength!==m||P.numDirectionalShadows!==y||P.numPointShadows!==x||P.numSpotShadows!==S||P.numSpotMaps!==R||P.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=S+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=E,P.directionalLength=d,P.pointLength=_,P.spotLength=g,P.rectAreaLength=p,P.hemiLength=m,P.numDirectionalShadows=y,P.numPointShadows=x,P.numSpotShadows=S,P.numSpotMaps=R,P.numLightProbes=E,n.version=JS++)}function l(c,u){let h=0,f=0,d=0,_=0,g=0;const p=u.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const x=c[m];if(x.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),h++}else if(x.isSpotLight){const S=n.spot[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),d++}else if(x.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function Ff(r){const t=new QS(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function tM(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new Ff(r),t.set(i,[a])):s>=o.length?(a=new Ff(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class eM extends oa{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=U_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class nM extends oa{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const iM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rM=`uniform sampler2D shadow_pass;
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
}`;function sM(r,t,e){let n=new ah;const i=new ft,s=new ft,o=new ve,a=new eM({depthPacking:N_}),l=new nM,c={},u=e.maxTextureSize,h={[gr]:wn,[wn]:gr,[zi]:zi},f=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:iM,fragmentShader:rM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Ji;_.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new bn(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Od;let m=this.type;this.render=function(A,E,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const N=r.getRenderTarget(),v=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),O=r.state;O.setBlending(Wi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const k=m!==Oi&&this.type===Oi,W=m===Oi&&this.type!==Oi;for(let q=0,z=A.length;q<z;q++){const Y=A[q],X=Y.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const ot=X.getFrameExtents();if(i.multiply(ot),s.copy(X.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ot.x),i.x=s.x*ot.x,X.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ot.y),i.y=s.y*ot.y,X.mapSize.y=s.y)),X.map===null||k===!0||W===!0){const ut=this.type!==Oi?{minFilter:ei,magFilter:ei}:{};X.map!==null&&X.map.dispose(),X.map=new pi(i.x,i.y,ut),X.map.texture.name=Y.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();const L=X.getViewportCount();for(let ut=0;ut<L;ut++){const zt=X.getViewport(ut);o.set(s.x*zt.x,s.y*zt.y,s.x*zt.z,s.y*zt.w),O.viewport(o),X.updateMatrices(Y,ut),n=X.getFrustum(),S(E,P,X.camera,Y,this.type)}X.isPointLightShadow!==!0&&this.type===Oi&&y(X,P),X.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(N,v,T)};function y(A,E){const P=t.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new pi(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(E,null,P,f,g,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(E,null,P,d,g,null)}function x(A,E,P,N){let v=null;const T=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)v=T;else if(v=P.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const O=v.uuid,k=E.uuid;let W=c[O];W===void 0&&(W={},c[O]=W);let q=W[k];q===void 0&&(q=v.clone(),W[k]=q,E.addEventListener("dispose",R)),v=q}if(v.visible=E.visible,v.wireframe=E.wireframe,N===Oi?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:h[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const O=r.properties.get(v);O.light=P}return v}function S(A,E,P,N,v){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===Oi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const k=t.update(A),W=A.material;if(Array.isArray(W)){const q=k.groups;for(let z=0,Y=q.length;z<Y;z++){const X=q[z],ot=W[X.materialIndex];if(ot&&ot.visible){const L=x(A,ot,N,v);A.onBeforeShadow(r,A,E,P,k,L,X),r.renderBufferDirect(P,null,k,L,A,X),A.onAfterShadow(r,A,E,P,k,L,X)}}}else if(W.visible){const q=x(A,W,N,v);A.onBeforeShadow(r,A,E,P,k,q,null),r.renderBufferDirect(P,null,k,q,A,null),A.onAfterShadow(r,A,E,P,k,q,null)}}const O=A.children;for(let k=0,W=O.length;k<W;k++)S(O[k],E,P,N,v)}function R(A){A.target.removeEventListener("dispose",R);for(const P in c){const N=c[P],v=A.target.uuid;v in N&&(N[v].dispose(),delete N[v])}}}const oM={[Fc]:Bc,[zc]:Vc,[kc]:Gc,[Ws]:Hc,[Bc]:Fc,[Vc]:zc,[Gc]:kc,[Hc]:Ws};function aM(r){function t(){let I=!1;const nt=new ve;let K=null;const Q=new ve(0,0,0,0);return{setMask:function(dt){K!==dt&&!I&&(r.colorMask(dt,dt,dt,dt),K=dt)},setLocked:function(dt){I=dt},setClear:function(dt,mt,Kt,xe,we){we===!0&&(dt*=xe,mt*=xe,Kt*=xe),nt.set(dt,mt,Kt,xe),Q.equals(nt)===!1&&(r.clearColor(dt,mt,Kt,xe),Q.copy(nt))},reset:function(){I=!1,K=null,Q.set(-1,0,0,0)}}}function e(){let I=!1,nt=!1,K=null,Q=null,dt=null;return{setReversed:function(mt){nt=mt},setTest:function(mt){mt?pt(r.DEPTH_TEST):lt(r.DEPTH_TEST)},setMask:function(mt){K!==mt&&!I&&(r.depthMask(mt),K=mt)},setFunc:function(mt){if(nt&&(mt=oM[mt]),Q!==mt){switch(mt){case Fc:r.depthFunc(r.NEVER);break;case Bc:r.depthFunc(r.ALWAYS);break;case zc:r.depthFunc(r.LESS);break;case Ws:r.depthFunc(r.LEQUAL);break;case kc:r.depthFunc(r.EQUAL);break;case Hc:r.depthFunc(r.GEQUAL);break;case Vc:r.depthFunc(r.GREATER);break;case Gc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Q=mt}},setLocked:function(mt){I=mt},setClear:function(mt){dt!==mt&&(r.clearDepth(mt),dt=mt)},reset:function(){I=!1,K=null,Q=null,dt=null}}}function n(){let I=!1,nt=null,K=null,Q=null,dt=null,mt=null,Kt=null,xe=null,we=null;return{setTest:function(se){I||(se?pt(r.STENCIL_TEST):lt(r.STENCIL_TEST))},setMask:function(se){nt!==se&&!I&&(r.stencilMask(se),nt=se)},setFunc:function(se,Nt,Dt){(K!==se||Q!==Nt||dt!==Dt)&&(r.stencilFunc(se,Nt,Dt),K=se,Q=Nt,dt=Dt)},setOp:function(se,Nt,Dt){(mt!==se||Kt!==Nt||xe!==Dt)&&(r.stencilOp(se,Nt,Dt),mt=se,Kt=Nt,xe=Dt)},setLocked:function(se){I=se},setClear:function(se){we!==se&&(r.clearStencil(se),we=se)},reset:function(){I=!1,nt=null,K=null,Q=null,dt=null,mt=null,Kt=null,xe=null,we=null}}}const i=new t,s=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],d=null,_=!1,g=null,p=null,m=null,y=null,x=null,S=null,R=null,A=new Zt(0,0,0),E=0,P=!1,N=null,v=null,T=null,O=null,k=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,z=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),q=z>=1):Y.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),q=z>=2);let X=null,ot={};const L=r.getParameter(r.SCISSOR_BOX),ut=r.getParameter(r.VIEWPORT),zt=new ve().fromArray(L),qt=new ve().fromArray(ut);function $(I,nt,K,Q){const dt=new Uint8Array(4),mt=r.createTexture();r.bindTexture(I,mt),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Kt=0;Kt<K;Kt++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(nt,0,r.RGBA,1,1,Q,0,r.RGBA,r.UNSIGNED_BYTE,dt):r.texImage2D(nt+Kt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,dt);return mt}const et={};et[r.TEXTURE_2D]=$(r.TEXTURE_2D,r.TEXTURE_2D,1),et[r.TEXTURE_CUBE_MAP]=$(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[r.TEXTURE_2D_ARRAY]=$(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),et[r.TEXTURE_3D]=$(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),pt(r.DEPTH_TEST),s.setFunc(Ws),ct(!1),it(Wh),pt(r.CULL_FACE),w(Wi);function pt(I){c[I]!==!0&&(r.enable(I),c[I]=!0)}function lt(I){c[I]!==!1&&(r.disable(I),c[I]=!1)}function Pt(I,nt){return u[I]!==nt?(r.bindFramebuffer(I,nt),u[I]=nt,I===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=nt),I===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=nt),!0):!1}function Ct(I,nt){let K=f,Q=!1;if(I){K=h.get(nt),K===void 0&&(K=[],h.set(nt,K));const dt=I.textures;if(K.length!==dt.length||K[0]!==r.COLOR_ATTACHMENT0){for(let mt=0,Kt=dt.length;mt<Kt;mt++)K[mt]=r.COLOR_ATTACHMENT0+mt;K.length=dt.length,Q=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,Q=!0);Q&&r.drawBuffers(K)}function kt(I){return d!==I?(r.useProgram(I),d=I,!0):!1}const Bt={[Fr]:r.FUNC_ADD,[d_]:r.FUNC_SUBTRACT,[p_]:r.FUNC_REVERSE_SUBTRACT};Bt[m_]=r.MIN,Bt[__]=r.MAX;const j={[g_]:r.ZERO,[v_]:r.ONE,[x_]:r.SRC_COLOR,[Nc]:r.SRC_ALPHA,[b_]:r.SRC_ALPHA_SATURATE,[E_]:r.DST_COLOR,[M_]:r.DST_ALPHA,[S_]:r.ONE_MINUS_SRC_COLOR,[Oc]:r.ONE_MINUS_SRC_ALPHA,[T_]:r.ONE_MINUS_DST_COLOR,[y_]:r.ONE_MINUS_DST_ALPHA,[w_]:r.CONSTANT_COLOR,[A_]:r.ONE_MINUS_CONSTANT_COLOR,[C_]:r.CONSTANT_ALPHA,[R_]:r.ONE_MINUS_CONSTANT_ALPHA};function w(I,nt,K,Q,dt,mt,Kt,xe,we,se){if(I===Wi){_===!0&&(lt(r.BLEND),_=!1);return}if(_===!1&&(pt(r.BLEND),_=!0),I!==f_){if(I!==g||se!==P){if((p!==Fr||x!==Fr)&&(r.blendEquation(r.FUNC_ADD),p=Fr,x=Fr),se)switch(I){case Is:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Uc:r.blendFunc(r.ONE,r.ONE);break;case Xh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Is:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Uc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Xh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}m=null,y=null,S=null,R=null,A.set(0,0,0),E=0,g=I,P=se}return}dt=dt||nt,mt=mt||K,Kt=Kt||Q,(nt!==p||dt!==x)&&(r.blendEquationSeparate(Bt[nt],Bt[dt]),p=nt,x=dt),(K!==m||Q!==y||mt!==S||Kt!==R)&&(r.blendFuncSeparate(j[K],j[Q],j[mt],j[Kt]),m=K,y=Q,S=mt,R=Kt),(xe.equals(A)===!1||we!==E)&&(r.blendColor(xe.r,xe.g,xe.b,we),A.copy(xe),E=we),g=I,P=!1}function rt(I,nt){I.side===zi?lt(r.CULL_FACE):pt(r.CULL_FACE);let K=I.side===wn;nt&&(K=!K),ct(K),I.blending===Is&&I.transparent===!1?w(Wi):w(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),i.setMask(I.colorWrite);const Q=I.stencilWrite;o.setTest(Q),Q&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),bt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?pt(r.SAMPLE_ALPHA_TO_COVERAGE):lt(r.SAMPLE_ALPHA_TO_COVERAGE)}function ct(I){N!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),N=I)}function it(I){I!==u_?(pt(r.CULL_FACE),I!==v&&(I===Wh?r.cullFace(r.BACK):I===h_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):lt(r.CULL_FACE),v=I}function D(I){I!==T&&(q&&r.lineWidth(I),T=I)}function bt(I,nt,K){I?(pt(r.POLYGON_OFFSET_FILL),(O!==nt||k!==K)&&(r.polygonOffset(nt,K),O=nt,k=K)):lt(r.POLYGON_OFFSET_FILL)}function xt(I){I?pt(r.SCISSOR_TEST):lt(r.SCISSOR_TEST)}function C(I){I===void 0&&(I=r.TEXTURE0+W-1),X!==I&&(r.activeTexture(I),X=I)}function M(I,nt,K){K===void 0&&(X===null?K=r.TEXTURE0+W-1:K=X);let Q=ot[K];Q===void 0&&(Q={type:void 0,texture:void 0},ot[K]=Q),(Q.type!==I||Q.texture!==nt)&&(X!==K&&(r.activeTexture(K),X=K),r.bindTexture(I,nt||et[I]),Q.type=I,Q.texture=nt)}function H(){const I=ot[X];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function J(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function wt(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function at(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Xt(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Vt(I){zt.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),zt.copy(I))}function Et(I){qt.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),qt.copy(I))}function $t(I,nt){let K=l.get(nt);K===void 0&&(K=new WeakMap,l.set(nt,K));let Q=K.get(I);Q===void 0&&(Q=r.getUniformBlockIndex(nt,I.name),K.set(I,Q))}function Wt(I,nt){const Q=l.get(nt).get(I);a.get(nt)!==Q&&(r.uniformBlockBinding(nt,Q,I.__bindingPointIndex),a.set(nt,Q))}function le(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},X=null,ot={},u={},h=new WeakMap,f=[],d=null,_=!1,g=null,p=null,m=null,y=null,x=null,S=null,R=null,A=new Zt(0,0,0),E=0,P=!1,N=null,v=null,T=null,O=null,k=null,zt.set(0,0,r.canvas.width,r.canvas.height),qt.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:pt,disable:lt,bindFramebuffer:Pt,drawBuffers:Ct,useProgram:kt,setBlending:w,setMaterial:rt,setFlipSided:ct,setCullFace:it,setLineWidth:D,setPolygonOffset:bt,setScissorTest:xt,activeTexture:C,bindTexture:M,unbindTexture:H,compressedTexImage2D:J,compressedTexImage3D:tt,texImage2D:Tt,texImage3D:At,updateUBOMapping:$t,uniformBlockBinding:Wt,texStorage2D:Xt,texStorage3D:st,texSubImage2D:Z,texSubImage3D:wt,compressedTexSubImage2D:at,compressedTexSubImage3D:gt,scissor:Vt,viewport:Et,reset:le}}function Bf(r,t,e,n){const i=lM(n);switch(e){case $d:return r*t;case Zd:return r*t;case Jd:return r*t*2;case jd:return r*t/i.components*i.byteLength;case th:return r*t/i.components*i.byteLength;case Qd:return r*t*2/i.components*i.byteLength;case eh:return r*t*2/i.components*i.byteLength;case Kd:return r*t*3/i.components*i.byteLength;case di:return r*t*4/i.components*i.byteLength;case nh:return r*t*4/i.components*i.byteLength;case Ya:case qa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case $a:case Ka:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Kc:case Jc:return Math.max(r,16)*Math.max(t,8)/4;case $c:case Zc:return Math.max(r,8)*Math.max(t,8)/2;case jc:case Qc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case tu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case eu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case nu:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case iu:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case ru:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case su:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case ou:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case au:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case lu:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case cu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case uu:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case hu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case fu:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case du:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case pu:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Za:case mu:case _u:return Math.ceil(r/4)*Math.ceil(t/4)*16;case tp:case gu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case vu:case xu:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function lM(r){switch(r){case qi:case Xd:return{byteLength:1,components:1};case Vo:case Yd:case Xi:return{byteLength:2,components:1};case ju:case Qu:return{byteLength:2,components:4};case jr:case Ju:case Hi:return{byteLength:4,components:1};case qd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function cM(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,M){return d?new OffscreenCanvas(C,M):dl("canvas")}function g(C,M,H){let J=1;const tt=xt(C);if((tt.width>H||tt.height>H)&&(J=H/Math.max(tt.width,tt.height)),J<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Z=Math.floor(J*tt.width),wt=Math.floor(J*tt.height);h===void 0&&(h=_(Z,wt));const at=M?_(Z,wt):h;return at.width=Z,at.height=wt,at.getContext("2d").drawImage(C,0,0,Z,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Z+"x"+wt+")."),at}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==ei&&C.minFilter!==hi}function m(C){r.generateMipmap(C)}function y(C,M,H,J,tt=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=M;if(M===r.RED&&(H===r.FLOAT&&(Z=r.R32F),H===r.HALF_FLOAT&&(Z=r.R16F),H===r.UNSIGNED_BYTE&&(Z=r.R8)),M===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(Z=r.R8UI),H===r.UNSIGNED_SHORT&&(Z=r.R16UI),H===r.UNSIGNED_INT&&(Z=r.R32UI),H===r.BYTE&&(Z=r.R8I),H===r.SHORT&&(Z=r.R16I),H===r.INT&&(Z=r.R32I)),M===r.RG&&(H===r.FLOAT&&(Z=r.RG32F),H===r.HALF_FLOAT&&(Z=r.RG16F),H===r.UNSIGNED_BYTE&&(Z=r.RG8)),M===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(Z=r.RG8UI),H===r.UNSIGNED_SHORT&&(Z=r.RG16UI),H===r.UNSIGNED_INT&&(Z=r.RG32UI),H===r.BYTE&&(Z=r.RG8I),H===r.SHORT&&(Z=r.RG16I),H===r.INT&&(Z=r.RG32I)),M===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),H===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),H===r.UNSIGNED_INT&&(Z=r.RGB32UI),H===r.BYTE&&(Z=r.RGB8I),H===r.SHORT&&(Z=r.RGB16I),H===r.INT&&(Z=r.RGB32I)),M===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),H===r.UNSIGNED_INT&&(Z=r.RGBA32UI),H===r.BYTE&&(Z=r.RGBA8I),H===r.SHORT&&(Z=r.RGBA16I),H===r.INT&&(Z=r.RGBA32I)),M===r.RGB&&H===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),M===r.RGBA){const wt=tt?cl:fe.getTransfer(J);H===r.FLOAT&&(Z=r.RGBA32F),H===r.HALF_FLOAT&&(Z=r.RGBA16F),H===r.UNSIGNED_BYTE&&(Z=wt===Ee?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(C,M){let H;return C?M===null||M===jr||M===qs?H=r.DEPTH24_STENCIL8:M===Hi?H=r.DEPTH32F_STENCIL8:M===Vo&&(H=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===jr||M===qs?H=r.DEPTH_COMPONENT24:M===Hi?H=r.DEPTH_COMPONENT32F:M===Vo&&(H=r.DEPTH_COMPONENT16),H}function S(C,M){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==ei&&C.minFilter!==hi?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function R(C){const M=C.target;M.removeEventListener("dispose",R),E(M),M.isVideoTexture&&u.delete(M)}function A(C){const M=C.target;M.removeEventListener("dispose",A),N(M)}function E(C){const M=n.get(C);if(M.__webglInit===void 0)return;const H=C.source,J=f.get(H);if(J){const tt=J[M.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&P(C),Object.keys(J).length===0&&f.delete(H)}n.remove(C)}function P(C){const M=n.get(C);r.deleteTexture(M.__webglTexture);const H=C.source,J=f.get(H);delete J[M.__cacheKey],o.memory.textures--}function N(C){const M=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let tt=0;tt<M.__webglFramebuffer[J].length;tt++)r.deleteFramebuffer(M.__webglFramebuffer[J][tt]);else r.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)r.deleteFramebuffer(M.__webglFramebuffer[J]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=C.textures;for(let J=0,tt=H.length;J<tt;J++){const Z=n.get(H[J]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(H[J])}n.remove(C)}let v=0;function T(){v=0}function O(){const C=v;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),v+=1,C}function k(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function W(C,M){const H=n.get(C);if(C.isVideoTexture&&D(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const J=C.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{qt(H,C,M);return}}e.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+M)}function q(C,M){const H=n.get(C);if(C.version>0&&H.__version!==C.version){qt(H,C,M);return}e.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+M)}function z(C,M){const H=n.get(C);if(C.version>0&&H.__version!==C.version){qt(H,C,M);return}e.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+M)}function Y(C,M){const H=n.get(C);if(C.version>0&&H.__version!==C.version){$(H,C,M);return}e.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+M)}const X={[Yc]:r.REPEAT,[kr]:r.CLAMP_TO_EDGE,[qc]:r.MIRRORED_REPEAT},ot={[ei]:r.NEAREST,[I_]:r.NEAREST_MIPMAP_NEAREST,[ca]:r.NEAREST_MIPMAP_LINEAR,[hi]:r.LINEAR,[kl]:r.LINEAR_MIPMAP_NEAREST,[Hr]:r.LINEAR_MIPMAP_LINEAR},L={[F_]:r.NEVER,[G_]:r.ALWAYS,[B_]:r.LESS,[np]:r.LEQUAL,[z_]:r.EQUAL,[V_]:r.GEQUAL,[k_]:r.GREATER,[H_]:r.NOTEQUAL};function ut(C,M){if(M.type===Hi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===hi||M.magFilter===kl||M.magFilter===ca||M.magFilter===Hr||M.minFilter===hi||M.minFilter===kl||M.minFilter===ca||M.minFilter===Hr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,X[M.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,X[M.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,X[M.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,ot[M.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,ot[M.minFilter]),M.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,L[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ei||M.minFilter!==ca&&M.minFilter!==Hr||M.type===Hi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function zt(C,M){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",R));const J=M.source;let tt=f.get(J);tt===void 0&&(tt={},f.set(J,tt));const Z=k(M);if(Z!==C.__cacheKey){tt[Z]===void 0&&(tt[Z]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),tt[Z].usedTimes++;const wt=tt[C.__cacheKey];wt!==void 0&&(tt[C.__cacheKey].usedTimes--,wt.usedTimes===0&&P(M)),C.__cacheKey=Z,C.__webglTexture=tt[Z].texture}return H}function qt(C,M,H){let J=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=r.TEXTURE_3D);const tt=zt(C,M),Z=M.source;e.bindTexture(J,C.__webglTexture,r.TEXTURE0+H);const wt=n.get(Z);if(Z.version!==wt.__version||tt===!0){e.activeTexture(r.TEXTURE0+H);const at=fe.getPrimaries(fe.workingColorSpace),gt=M.colorSpace===ar?null:fe.getPrimaries(M.colorSpace),Xt=M.colorSpace===ar||at===gt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let st=g(M.image,!1,i.maxTextureSize);st=bt(M,st);const Tt=s.convert(M.format,M.colorSpace),At=s.convert(M.type);let Vt=y(M.internalFormat,Tt,At,M.colorSpace,M.isVideoTexture);ut(J,M);let Et;const $t=M.mipmaps,Wt=M.isVideoTexture!==!0,le=wt.__version===void 0||tt===!0,I=Z.dataReady,nt=S(M,st);if(M.isDepthTexture)Vt=x(M.format===$s,M.type),le&&(Wt?e.texStorage2D(r.TEXTURE_2D,1,Vt,st.width,st.height):e.texImage2D(r.TEXTURE_2D,0,Vt,st.width,st.height,0,Tt,At,null));else if(M.isDataTexture)if($t.length>0){Wt&&le&&e.texStorage2D(r.TEXTURE_2D,nt,Vt,$t[0].width,$t[0].height);for(let K=0,Q=$t.length;K<Q;K++)Et=$t[K],Wt?I&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,Et.width,Et.height,Tt,At,Et.data):e.texImage2D(r.TEXTURE_2D,K,Vt,Et.width,Et.height,0,Tt,At,Et.data);M.generateMipmaps=!1}else Wt?(le&&e.texStorage2D(r.TEXTURE_2D,nt,Vt,st.width,st.height),I&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,st.width,st.height,Tt,At,st.data)):e.texImage2D(r.TEXTURE_2D,0,Vt,st.width,st.height,0,Tt,At,st.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Wt&&le&&e.texStorage3D(r.TEXTURE_2D_ARRAY,nt,Vt,$t[0].width,$t[0].height,st.depth);for(let K=0,Q=$t.length;K<Q;K++)if(Et=$t[K],M.format!==di)if(Tt!==null)if(Wt){if(I)if(M.layerUpdates.size>0){const dt=Bf(Et.width,Et.height,M.format,M.type);for(const mt of M.layerUpdates){const Kt=Et.data.subarray(mt*dt/Et.data.BYTES_PER_ELEMENT,(mt+1)*dt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,mt,Et.width,Et.height,1,Tt,Kt,0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,Et.width,Et.height,st.depth,Tt,Et.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,K,Vt,Et.width,Et.height,st.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?I&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,Et.width,Et.height,st.depth,Tt,At,Et.data):e.texImage3D(r.TEXTURE_2D_ARRAY,K,Vt,Et.width,Et.height,st.depth,0,Tt,At,Et.data)}else{Wt&&le&&e.texStorage2D(r.TEXTURE_2D,nt,Vt,$t[0].width,$t[0].height);for(let K=0,Q=$t.length;K<Q;K++)Et=$t[K],M.format!==di?Tt!==null?Wt?I&&e.compressedTexSubImage2D(r.TEXTURE_2D,K,0,0,Et.width,Et.height,Tt,Et.data):e.compressedTexImage2D(r.TEXTURE_2D,K,Vt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?I&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,Et.width,Et.height,Tt,At,Et.data):e.texImage2D(r.TEXTURE_2D,K,Vt,Et.width,Et.height,0,Tt,At,Et.data)}else if(M.isDataArrayTexture)if(Wt){if(le&&e.texStorage3D(r.TEXTURE_2D_ARRAY,nt,Vt,st.width,st.height,st.depth),I)if(M.layerUpdates.size>0){const K=Bf(st.width,st.height,M.format,M.type);for(const Q of M.layerUpdates){const dt=st.data.subarray(Q*K/st.data.BYTES_PER_ELEMENT,(Q+1)*K/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,st.width,st.height,1,Tt,At,dt)}M.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,Tt,At,st.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Vt,st.width,st.height,st.depth,0,Tt,At,st.data);else if(M.isData3DTexture)Wt?(le&&e.texStorage3D(r.TEXTURE_3D,nt,Vt,st.width,st.height,st.depth),I&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,Tt,At,st.data)):e.texImage3D(r.TEXTURE_3D,0,Vt,st.width,st.height,st.depth,0,Tt,At,st.data);else if(M.isFramebufferTexture){if(le)if(Wt)e.texStorage2D(r.TEXTURE_2D,nt,Vt,st.width,st.height);else{let K=st.width,Q=st.height;for(let dt=0;dt<nt;dt++)e.texImage2D(r.TEXTURE_2D,dt,Vt,K,Q,0,Tt,At,null),K>>=1,Q>>=1}}else if($t.length>0){if(Wt&&le){const K=xt($t[0]);e.texStorage2D(r.TEXTURE_2D,nt,Vt,K.width,K.height)}for(let K=0,Q=$t.length;K<Q;K++)Et=$t[K],Wt?I&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,Tt,At,Et):e.texImage2D(r.TEXTURE_2D,K,Vt,Tt,At,Et);M.generateMipmaps=!1}else if(Wt){if(le){const K=xt(st);e.texStorage2D(r.TEXTURE_2D,nt,Vt,K.width,K.height)}I&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Tt,At,st)}else e.texImage2D(r.TEXTURE_2D,0,Vt,Tt,At,st);p(M)&&m(J),wt.__version=Z.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function $(C,M,H){if(M.image.length!==6)return;const J=zt(C,M),tt=M.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+H);const Z=n.get(tt);if(tt.version!==Z.__version||J===!0){e.activeTexture(r.TEXTURE0+H);const wt=fe.getPrimaries(fe.workingColorSpace),at=M.colorSpace===ar?null:fe.getPrimaries(M.colorSpace),gt=M.colorSpace===ar||wt===at?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Xt=M.isCompressedTexture||M.image[0].isCompressedTexture,st=M.image[0]&&M.image[0].isDataTexture,Tt=[];for(let Q=0;Q<6;Q++)!Xt&&!st?Tt[Q]=g(M.image[Q],!0,i.maxCubemapSize):Tt[Q]=st?M.image[Q].image:M.image[Q],Tt[Q]=bt(M,Tt[Q]);const At=Tt[0],Vt=s.convert(M.format,M.colorSpace),Et=s.convert(M.type),$t=y(M.internalFormat,Vt,Et,M.colorSpace),Wt=M.isVideoTexture!==!0,le=Z.__version===void 0||J===!0,I=tt.dataReady;let nt=S(M,At);ut(r.TEXTURE_CUBE_MAP,M);let K;if(Xt){Wt&&le&&e.texStorage2D(r.TEXTURE_CUBE_MAP,nt,$t,At.width,At.height);for(let Q=0;Q<6;Q++){K=Tt[Q].mipmaps;for(let dt=0;dt<K.length;dt++){const mt=K[dt];M.format!==di?Vt!==null?Wt?I&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt,0,0,mt.width,mt.height,Vt,mt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt,$t,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt,0,0,mt.width,mt.height,Vt,Et,mt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt,$t,mt.width,mt.height,0,Vt,Et,mt.data)}}}else{if(K=M.mipmaps,Wt&&le){K.length>0&&nt++;const Q=xt(Tt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,nt,$t,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(st){Wt?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Tt[Q].width,Tt[Q].height,Vt,Et,Tt[Q].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,$t,Tt[Q].width,Tt[Q].height,0,Vt,Et,Tt[Q].data);for(let dt=0;dt<K.length;dt++){const Kt=K[dt].image[Q].image;Wt?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt+1,0,0,Kt.width,Kt.height,Vt,Et,Kt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt+1,$t,Kt.width,Kt.height,0,Vt,Et,Kt.data)}}else{Wt?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Vt,Et,Tt[Q]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,$t,Vt,Et,Tt[Q]);for(let dt=0;dt<K.length;dt++){const mt=K[dt];Wt?I&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt+1,0,0,Vt,Et,mt.image[Q]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt+1,$t,Vt,Et,mt.image[Q])}}}p(M)&&m(r.TEXTURE_CUBE_MAP),Z.__version=tt.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function et(C,M,H,J,tt,Z){const wt=s.convert(H.format,H.colorSpace),at=s.convert(H.type),gt=y(H.internalFormat,wt,at,H.colorSpace);if(!n.get(M).__hasExternalTextures){const st=Math.max(1,M.width>>Z),Tt=Math.max(1,M.height>>Z);tt===r.TEXTURE_3D||tt===r.TEXTURE_2D_ARRAY?e.texImage3D(tt,Z,gt,st,Tt,M.depth,0,wt,at,null):e.texImage2D(tt,Z,gt,st,Tt,0,wt,at,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),it(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,tt,n.get(H).__webglTexture,0,ct(M)):(tt===r.TEXTURE_2D||tt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,tt,n.get(H).__webglTexture,Z),e.bindFramebuffer(r.FRAMEBUFFER,null)}function pt(C,M,H){if(r.bindRenderbuffer(r.RENDERBUFFER,C),M.depthBuffer){const J=M.depthTexture,tt=J&&J.isDepthTexture?J.type:null,Z=x(M.stencilBuffer,tt),wt=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,at=ct(M);it(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,at,Z,M.width,M.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,at,Z,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Z,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,wt,r.RENDERBUFFER,C)}else{const J=M.textures;for(let tt=0;tt<J.length;tt++){const Z=J[tt],wt=s.convert(Z.format,Z.colorSpace),at=s.convert(Z.type),gt=y(Z.internalFormat,wt,at,Z.colorSpace),Xt=ct(M);H&&it(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Xt,gt,M.width,M.height):it(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Xt,gt,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,gt,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function lt(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const J=n.get(M.depthTexture).__webglTexture,tt=ct(M);if(M.depthTexture.format===Us)it(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(M.depthTexture.format===$s)it(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Pt(C){const M=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const J=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){const tt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",tt)};J.addEventListener("dispose",tt),M.__depthDisposeCallback=tt}M.__boundDepthTexture=J}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");lt(M.__webglFramebuffer,C)}else if(H){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=r.createRenderbuffer(),pt(M.__webglDepthbuffer[J],C,!1);else{const tt=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,tt,r.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),pt(M.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,tt=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,tt),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,tt)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ct(C,M,H){const J=n.get(C);M!==void 0&&et(J.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&Pt(C)}function kt(C){const M=C.texture,H=n.get(C),J=n.get(M);C.addEventListener("dispose",A);const tt=C.textures,Z=C.isWebGLCubeRenderTarget===!0,wt=tt.length>1;if(wt||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=M.version,o.memory.textures++),Z){H.__webglFramebuffer=[];for(let at=0;at<6;at++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[at]=[];for(let gt=0;gt<M.mipmaps.length;gt++)H.__webglFramebuffer[at][gt]=r.createFramebuffer()}else H.__webglFramebuffer[at]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let at=0;at<M.mipmaps.length;at++)H.__webglFramebuffer[at]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(wt)for(let at=0,gt=tt.length;at<gt;at++){const Xt=n.get(tt[at]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&it(C)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let at=0;at<tt.length;at++){const gt=tt[at];H.__webglColorRenderbuffer[at]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[at]);const Xt=s.convert(gt.format,gt.colorSpace),st=s.convert(gt.type),Tt=y(gt.internalFormat,Xt,st,gt.colorSpace,C.isXRRenderTarget===!0),At=ct(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,At,Tt,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.RENDERBUFFER,H.__webglColorRenderbuffer[at])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),pt(H.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){e.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),ut(r.TEXTURE_CUBE_MAP,M);for(let at=0;at<6;at++)if(M.mipmaps&&M.mipmaps.length>0)for(let gt=0;gt<M.mipmaps.length;gt++)et(H.__webglFramebuffer[at][gt],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,gt);else et(H.__webglFramebuffer[at],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(M)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let at=0,gt=tt.length;at<gt;at++){const Xt=tt[at],st=n.get(Xt);e.bindTexture(r.TEXTURE_2D,st.__webglTexture),ut(r.TEXTURE_2D,Xt),et(H.__webglFramebuffer,C,Xt,r.COLOR_ATTACHMENT0+at,r.TEXTURE_2D,0),p(Xt)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let at=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(at=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(at,J.__webglTexture),ut(at,M),M.mipmaps&&M.mipmaps.length>0)for(let gt=0;gt<M.mipmaps.length;gt++)et(H.__webglFramebuffer[gt],C,M,r.COLOR_ATTACHMENT0,at,gt);else et(H.__webglFramebuffer,C,M,r.COLOR_ATTACHMENT0,at,0);p(M)&&m(at),e.unbindTexture()}C.depthBuffer&&Pt(C)}function Bt(C){const M=C.textures;for(let H=0,J=M.length;H<J;H++){const tt=M[H];if(p(tt)){const Z=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,wt=n.get(tt).__webglTexture;e.bindTexture(Z,wt),m(Z),e.unbindTexture()}}}const j=[],w=[];function rt(C){if(C.samples>0){if(it(C)===!1){const M=C.textures,H=C.width,J=C.height;let tt=r.COLOR_BUFFER_BIT;const Z=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,wt=n.get(C),at=M.length>1;if(at)for(let gt=0;gt<M.length;gt++)e.bindFramebuffer(r.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let gt=0;gt<M.length;gt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(tt|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(tt|=r.STENCIL_BUFFER_BIT)),at){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,wt.__webglColorRenderbuffer[gt]);const Xt=n.get(M[gt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Xt,0)}r.blitFramebuffer(0,0,H,J,0,0,H,J,tt,r.NEAREST),l===!0&&(j.length=0,w.length=0,j.push(r.COLOR_ATTACHMENT0+gt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(j.push(Z),w.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,w)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,j))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),at)for(let gt=0;gt<M.length;gt++){e.bindFramebuffer(r.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.RENDERBUFFER,wt.__webglColorRenderbuffer[gt]);const Xt=n.get(M[gt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.TEXTURE_2D,Xt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function ct(C){return Math.min(i.maxSamples,C.samples)}function it(C){const M=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function D(C){const M=o.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function bt(C,M){const H=C.colorSpace,J=C.format,tt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==yr&&H!==ar&&(fe.getTransfer(H)===Ee?(J!==di||tt!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function xt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=T,this.setTexture2D=W,this.setTexture2DArray=q,this.setTexture3D=z,this.setTextureCube=Y,this.rebindTextures=Ct,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=it}function uM(r,t){function e(n,i=ar){let s;const o=fe.getTransfer(i);if(n===qi)return r.UNSIGNED_BYTE;if(n===ju)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Qu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===qd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Xd)return r.BYTE;if(n===Yd)return r.SHORT;if(n===Vo)return r.UNSIGNED_SHORT;if(n===Ju)return r.INT;if(n===jr)return r.UNSIGNED_INT;if(n===Hi)return r.FLOAT;if(n===Xi)return r.HALF_FLOAT;if(n===$d)return r.ALPHA;if(n===Kd)return r.RGB;if(n===di)return r.RGBA;if(n===Zd)return r.LUMINANCE;if(n===Jd)return r.LUMINANCE_ALPHA;if(n===Us)return r.DEPTH_COMPONENT;if(n===$s)return r.DEPTH_STENCIL;if(n===jd)return r.RED;if(n===th)return r.RED_INTEGER;if(n===Qd)return r.RG;if(n===eh)return r.RG_INTEGER;if(n===nh)return r.RGBA_INTEGER;if(n===Ya||n===qa||n===$a||n===Ka)if(o===Ee)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ya)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ya)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$a)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ka)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$c||n===Kc||n===Zc||n===Jc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===$c)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Kc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jc||n===Qc||n===tu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===jc||n===Qc)return o===Ee?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===tu)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===eu||n===nu||n===iu||n===ru||n===su||n===ou||n===au||n===lu||n===cu||n===uu||n===hu||n===fu||n===du||n===pu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===eu)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nu)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===iu)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ru)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===su)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ou)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===au)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lu)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cu)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uu)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hu)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fu)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===du)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pu)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Za||n===mu||n===_u)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Za)return o===Ee?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_u)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tp||n===gu||n===vu||n===xu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Za)return s.COMPRESSED_RED_RGTC1_EXT;if(n===gu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class hM extends Hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Cs extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fM={type:"move"};class pc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fM)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Cs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const dM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pM=`
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

}`;class mM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new An,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new un({vertexShader:dM,fragmentShader:pM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new bn(new so(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _M extends io{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=new mM,p=e.getContextAttributes();let m=null,y=null;const x=[],S=[],R=new ft;let A=null;const E=new Hn;E.layers.enable(1),E.viewport=new ve;const P=new Hn;P.layers.enable(2),P.viewport=new ve;const N=[E,P],v=new hM;v.layers.enable(1),v.layers.enable(2);let T=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let et=x[$];return et===void 0&&(et=new pc,x[$]=et),et.getTargetRaySpace()},this.getControllerGrip=function($){let et=x[$];return et===void 0&&(et=new pc,x[$]=et),et.getGripSpace()},this.getHand=function($){let et=x[$];return et===void 0&&(et=new pc,x[$]=et),et.getHandSpace()};function k($){const et=S.indexOf($.inputSource);if(et===-1)return;const pt=x[et];pt!==void 0&&(pt.update($.inputSource,$.frame,c||o),pt.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",q);for(let $=0;$<x.length;$++){const et=S[$];et!==null&&(S[$]=null,x[$].disconnect(et))}T=null,O=null,g.reset(),t.setRenderTarget(m),d=null,f=null,h=null,i=null,y=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",W),i.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){const et={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new pi(d.framebufferWidth,d.framebufferHeight,{format:di,type:qi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let et=null,pt=null,lt=null;p.depth&&(lt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=p.stencil?$s:Us,pt=p.stencil?qs:jr);const Pt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:s};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer(Pt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new pi(f.textureWidth,f.textureHeight,{format:di,type:qi,depthTexture:new pp(f.textureWidth,f.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),qt.setContext(i),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q($){for(let et=0;et<$.removed.length;et++){const pt=$.removed[et],lt=S.indexOf(pt);lt>=0&&(S[lt]=null,x[lt].disconnect(pt))}for(let et=0;et<$.added.length;et++){const pt=$.added[et];let lt=S.indexOf(pt);if(lt===-1){for(let Ct=0;Ct<x.length;Ct++)if(Ct>=S.length){S.push(pt),lt=Ct;break}else if(S[Ct]===null){S[Ct]=pt,lt=Ct;break}if(lt===-1)break}const Pt=x[lt];Pt&&Pt.connect(pt)}}const z=new B,Y=new B;function X($,et,pt){z.setFromMatrixPosition(et.matrixWorld),Y.setFromMatrixPosition(pt.matrixWorld);const lt=z.distanceTo(Y),Pt=et.projectionMatrix.elements,Ct=pt.projectionMatrix.elements,kt=Pt[14]/(Pt[10]-1),Bt=Pt[14]/(Pt[10]+1),j=(Pt[9]+1)/Pt[5],w=(Pt[9]-1)/Pt[5],rt=(Pt[8]-1)/Pt[0],ct=(Ct[8]+1)/Ct[0],it=kt*rt,D=kt*ct,bt=lt/(-rt+ct),xt=bt*-rt;if(et.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(xt),$.translateZ(bt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Pt[10]===-1)$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const C=kt+bt,M=Bt+bt,H=it-xt,J=D+(lt-xt),tt=j*Bt/M*C,Z=w*Bt/M*C;$.projectionMatrix.makePerspective(H,J,tt,Z,C,M),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ot($,et){et===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(et.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let et=$.near,pt=$.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(pt=g.depthFar)),v.near=P.near=E.near=et,v.far=P.far=E.far=pt,(T!==v.near||O!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,O=v.far);const lt=$.parent,Pt=v.cameras;ot(v,lt);for(let Ct=0;Ct<Pt.length;Ct++)ot(Pt[Ct],lt);Pt.length===2?X(v,E,P):v.projectionMatrix.copy(E.projectionMatrix),L($,v,lt)};function L($,et,pt){pt===null?$.matrix.copy(et.matrixWorld):($.matrix.copy(pt.matrixWorld),$.matrix.invert(),$.matrix.multiply(et.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Go*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let ut=null;function zt($,et){if(u=et.getViewerPose(c||o),_=et,u!==null){const pt=u.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let lt=!1;pt.length!==v.cameras.length&&(v.cameras.length=0,lt=!0);for(let Ct=0;Ct<pt.length;Ct++){const kt=pt[Ct];let Bt=null;if(d!==null)Bt=d.getViewport(kt);else{const w=h.getViewSubImage(f,kt);Bt=w.viewport,Ct===0&&(t.setRenderTargetTextures(y,w.colorTexture,f.ignoreDepthValues?void 0:w.depthStencilTexture),t.setRenderTarget(y))}let j=N[Ct];j===void 0&&(j=new Hn,j.layers.enable(Ct),j.viewport=new ve,N[Ct]=j),j.matrix.fromArray(kt.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(kt.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),Ct===0&&(v.matrix.copy(j.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),lt===!0&&v.cameras.push(j)}const Pt=i.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const Ct=h.getDepthInformation(pt[0]);Ct&&Ct.isValid&&Ct.texture&&g.init(t,Ct,i.renderState)}}for(let pt=0;pt<x.length;pt++){const lt=S[pt],Pt=x[pt];lt!==null&&Pt!==void 0&&Pt.update(lt,et,c||o)}ut&&ut($,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),_=null}const qt=new dp;qt.setAnimationLoop(zt),this.setAnimationLoop=function($){ut=$},this.dispose=function(){}}}const Rr=new Ai,gM=new Re;function vM(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,up(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,x,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,S)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===wn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===wn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),x=y.envMap,S=y.envMapRotation;x&&(p.envMap.value=x,Rr.copy(S),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),p.envMapRotation.value.setFromMatrix4(gM.makeRotationFromEuler(Rr)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===wn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function xM(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const S=x.program;n.uniformBlockBinding(y,S)}function c(y,x){let S=i[y.id];S===void 0&&(_(y),S=u(y),i[y.id]=S,y.addEventListener("dispose",p));const R=x.program;n.updateUBOMapping(y,R);const A=t.render.frame;s[y.id]!==A&&(f(y),s[y.id]=A)}function u(y){const x=h();y.__bindingPointIndex=x;const S=r.createBuffer(),R=y.__size,A=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,R,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,S),S}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=i[y.id],S=y.uniforms,R=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let A=0,E=S.length;A<E;A++){const P=Array.isArray(S[A])?S[A]:[S[A]];for(let N=0,v=P.length;N<v;N++){const T=P[N];if(d(T,A,N,R)===!0){const O=T.__offset,k=Array.isArray(T.value)?T.value:[T.value];let W=0;for(let q=0;q<k.length;q++){const z=k[q],Y=g(z);typeof z=="number"||typeof z=="boolean"?(T.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,O+W,T.__data)):z.isMatrix3?(T.__data[0]=z.elements[0],T.__data[1]=z.elements[1],T.__data[2]=z.elements[2],T.__data[3]=0,T.__data[4]=z.elements[3],T.__data[5]=z.elements[4],T.__data[6]=z.elements[5],T.__data[7]=0,T.__data[8]=z.elements[6],T.__data[9]=z.elements[7],T.__data[10]=z.elements[8],T.__data[11]=0):(z.toArray(T.__data,W),W+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,T.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,x,S,R){const A=y.value,E=x+"_"+S;if(R[E]===void 0)return typeof A=="number"||typeof A=="boolean"?R[E]=A:R[E]=A.clone(),!0;{const P=R[E];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return R[E]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function _(y){const x=y.uniforms;let S=0;const R=16;for(let E=0,P=x.length;E<P;E++){const N=Array.isArray(x[E])?x[E]:[x[E]];for(let v=0,T=N.length;v<T;v++){const O=N[v],k=Array.isArray(O.value)?O.value:[O.value];for(let W=0,q=k.length;W<q;W++){const z=k[W],Y=g(z),X=S%R,ot=X%Y.boundary,L=X+ot;S+=ot,L!==0&&R-L<Y.storage&&(S+=R-L),O.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=Y.storage}}}const A=S%R;return A>0&&(S+=R-A),y.__size=S,y.__cache={},this}function g(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function p(y){const x=y.target;x.removeEventListener("dispose",p);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function m(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class SM{constructor(t={}){const{canvas:e=ag(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vi,this.toneMapping=dr,this.toneMappingExposure=1;const x=this;let S=!1,R=0,A=0,E=null,P=-1,N=null;const v=new ve,T=new ve;let O=null;const k=new Zt(0);let W=0,q=e.width,z=e.height,Y=1,X=null,ot=null;const L=new ve(0,0,q,z),ut=new ve(0,0,q,z);let zt=!1;const qt=new ah;let $=!1,et=!1;const pt=new Re,lt=new Re,Pt=new B,Ct=new ve,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function j(){return E===null?Y:1}let w=n;function rt(b,F){return e.getContext(b,F)}try{const b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ku}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),w===null){const F="webgl2";if(w=rt(F,b),w===null)throw rt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ct,it,D,bt,xt,C,M,H,J,tt,Z,wt,at,gt,Xt,st,Tt,At,Vt,Et,$t,Wt,le,I;function nt(){ct=new bx(w),ct.init(),Wt=new uM(w,ct),it=new xx(w,ct,t,Wt),D=new aM(w),it.reverseDepthBuffer&&D.buffers.depth.setReversed(!0),bt=new Cx(w),xt=new YS,C=new cM(w,ct,D,xt,it,Wt,bt),M=new Mx(x),H=new Tx(x),J=new Ng(w),le=new gx(w,J),tt=new wx(w,J,bt,le),Z=new Px(w,tt,J,bt),Vt=new Rx(w,it,C),st=new Sx(xt),wt=new XS(x,M,H,ct,it,le,st),at=new vM(x,xt),gt=new $S,Xt=new tM(ct),At=new _x(x,M,H,D,Z,f,l),Tt=new sM(x,Z,it),I=new xM(w,bt,it,D),Et=new vx(w,ct,bt),$t=new Ax(w,ct,bt),bt.programs=wt.programs,x.capabilities=it,x.extensions=ct,x.properties=xt,x.renderLists=gt,x.shadowMap=Tt,x.state=D,x.info=bt}nt();const K=new _M(x,w);this.xr=K,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const b=ct.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ct.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(q,z,!1))},this.getSize=function(b){return b.set(q,z)},this.setSize=function(b,F,V=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=b,z=F,e.width=Math.floor(b*Y),e.height=Math.floor(F*Y),V===!0&&(e.style.width=b+"px",e.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(q*Y,z*Y).floor()},this.setDrawingBufferSize=function(b,F,V){q=b,z=F,Y=V,e.width=Math.floor(b*V),e.height=Math.floor(F*V),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(v)},this.getViewport=function(b){return b.copy(L)},this.setViewport=function(b,F,V,G){b.isVector4?L.set(b.x,b.y,b.z,b.w):L.set(b,F,V,G),D.viewport(v.copy(L).multiplyScalar(Y).round())},this.getScissor=function(b){return b.copy(ut)},this.setScissor=function(b,F,V,G){b.isVector4?ut.set(b.x,b.y,b.z,b.w):ut.set(b,F,V,G),D.scissor(T.copy(ut).multiplyScalar(Y).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(b){D.setScissorTest(zt=b)},this.setOpaqueSort=function(b){X=b},this.setTransparentSort=function(b){ot=b},this.getClearColor=function(b){return b.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(b=!0,F=!0,V=!0){let G=0;if(b){let U=!1;if(E!==null){const ht=E.texture.format;U=ht===nh||ht===eh||ht===th}if(U){const ht=E.texture.type,yt=ht===qi||ht===jr||ht===Vo||ht===qs||ht===ju||ht===Qu,vt=At.getClearColor(),_t=At.getClearAlpha(),Ut=vt.r,Gt=vt.g,It=vt.b;yt?(d[0]=Ut,d[1]=Gt,d[2]=It,d[3]=_t,w.clearBufferuiv(w.COLOR,0,d)):(_[0]=Ut,_[1]=Gt,_[2]=It,_[3]=_t,w.clearBufferiv(w.COLOR,0,_))}else G|=w.COLOR_BUFFER_BIT}F&&(G|=w.DEPTH_BUFFER_BIT,w.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(G|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),gt.dispose(),Xt.dispose(),xt.dispose(),M.dispose(),H.dispose(),Z.dispose(),le.dispose(),I.dispose(),wt.dispose(),K.dispose(),K.removeEventListener("sessionstart",he),K.removeEventListener("sessionend",St),Ht.stop()};function Q(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=bt.autoReset,F=Tt.enabled,V=Tt.autoUpdate,G=Tt.needsUpdate,U=Tt.type;nt(),bt.autoReset=b,Tt.enabled=F,Tt.autoUpdate=V,Tt.needsUpdate=G,Tt.type=U}function mt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Kt(b){const F=b.target;F.removeEventListener("dispose",Kt),xe(F)}function xe(b){we(b),xt.remove(b)}function we(b){const F=xt.get(b).programs;F!==void 0&&(F.forEach(function(V){wt.releaseProgram(V)}),b.isShaderMaterial&&wt.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,V,G,U,ht){F===null&&(F=kt);const yt=U.isMesh&&U.matrixWorld.determinant()<0,vt=me(b,F,V,G,U);D.setMaterial(G,yt);let _t=V.index,Ut=1;if(G.wireframe===!0){if(_t=tt.getWireframeAttribute(V),_t===void 0)return;Ut=2}const Gt=V.drawRange,It=V.attributes.position;let ce=Gt.start*Ut,ae=(Gt.start+Gt.count)*Ut;ht!==null&&(ce=Math.max(ce,ht.start*Ut),ae=Math.min(ae,(ht.start+ht.count)*Ut)),_t!==null?(ce=Math.max(ce,0),ae=Math.min(ae,_t.count)):It!=null&&(ce=Math.max(ce,0),ae=Math.min(ae,It.count));const ge=ae-ce;if(ge<0||ge===1/0)return;le.setup(U,G,vt,V,_t);let qe,ee=Et;if(_t!==null&&(qe=J.get(_t),ee=$t,ee.setIndex(qe)),U.isMesh)G.wireframe===!0?(D.setLineWidth(G.wireframeLinewidth*j()),ee.setMode(w.LINES)):ee.setMode(w.TRIANGLES);else if(U.isLine){let Ft=G.linewidth;Ft===void 0&&(Ft=1),D.setLineWidth(Ft*j()),U.isLineSegments?ee.setMode(w.LINES):U.isLineLoop?ee.setMode(w.LINE_LOOP):ee.setMode(w.LINE_STRIP)}else U.isPoints?ee.setMode(w.POINTS):U.isSprite&&ee.setMode(w.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ee.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))ee.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ft=U._multiDrawStarts,je=U._multiDrawCounts,de=U._multiDrawCount,si=_t?J.get(_t).bytesPerElement:1,ss=xt.get(G).currentProgram.getUniforms();for(let Nn=0;Nn<de;Nn++)ss.setValue(w,"_gl_DrawID",Nn),ee.render(Ft[Nn]/si,je[Nn])}else if(U.isInstancedMesh)ee.renderInstances(ce,ge,U.count);else if(V.isInstancedBufferGeometry){const Ft=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,je=Math.min(V.instanceCount,Ft);ee.renderInstances(ce,ge,je)}else ee.render(ce,ge)};function se(b,F,V){b.transparent===!0&&b.side===zi&&b.forceSinglePass===!1?(b.side=wn,b.needsUpdate=!0,Oe(b,F,V),b.side=gr,b.needsUpdate=!0,Oe(b,F,V),b.side=zi):Oe(b,F,V)}this.compile=function(b,F,V=null){V===null&&(V=b),p=Xt.get(V),p.init(F),y.push(p),V.traverseVisible(function(U){U.isLight&&U.layers.test(F.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),b!==V&&b.traverseVisible(function(U){U.isLight&&U.layers.test(F.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const G=new Set;return b.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ht=U.material;if(ht)if(Array.isArray(ht))for(let yt=0;yt<ht.length;yt++){const vt=ht[yt];se(vt,V,U),G.add(vt)}else se(ht,V,U),G.add(ht)}),y.pop(),p=null,G},this.compileAsync=function(b,F,V=null){const G=this.compile(b,F,V);return new Promise(U=>{function ht(){if(G.forEach(function(yt){xt.get(yt).currentProgram.isReady()&&G.delete(yt)}),G.size===0){U(b);return}setTimeout(ht,10)}ct.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Nt=null;function Dt(b){Nt&&Nt(b)}function he(){Ht.stop()}function St(){Ht.start()}const Ht=new dp;Ht.setAnimationLoop(Dt),typeof self<"u"&&Ht.setContext(self),this.setAnimationLoop=function(b){Nt=b,K.setAnimationLoop(b),b===null?Ht.stop():Ht.start()},K.addEventListener("sessionstart",he),K.addEventListener("sessionend",St),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(F),F=K.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,F,E),p=Xt.get(b,y.length),p.init(F),y.push(p),lt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),qt.setFromProjectionMatrix(lt),et=this.localClippingEnabled,$=st.init(this.clippingPlanes,et),g=gt.get(b,m.length),g.init(),m.push(g),K.enabled===!0&&K.isPresenting===!0){const ht=x.xr.getDepthSensingMesh();ht!==null&&Ot(ht,F,-1/0,x.sortObjects)}Ot(b,F,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(X,ot),Bt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Bt&&At.addToRenderList(g,b),this.info.render.frame++,$===!0&&st.beginShadows();const V=p.state.shadowsArray;Tt.render(V,b,F),$===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=g.opaque,U=g.transmissive;if(p.setupLights(),F.isArrayCamera){const ht=F.cameras;if(U.length>0)for(let yt=0,vt=ht.length;yt<vt;yt++){const _t=ht[yt];Ne(G,U,b,_t)}Bt&&At.render(b);for(let yt=0,vt=ht.length;yt<vt;yt++){const _t=ht[yt];Yt(g,b,_t,_t.viewport)}}else U.length>0&&Ne(G,U,b,F),Bt&&At.render(b),Yt(g,b,F);E!==null&&(C.updateMultisampleRenderTarget(E),C.updateRenderTargetMipmap(E)),b.isScene===!0&&b.onAfterRender(x,b,F),le.resetDefaultState(),P=-1,N=null,y.pop(),y.length>0?(p=y[y.length-1],$===!0&&st.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function Ot(b,F,V,G){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||qt.intersectsSprite(b)){G&&Ct.setFromMatrixPosition(b.matrixWorld).applyMatrix4(lt);const yt=Z.update(b),vt=b.material;vt.visible&&g.push(b,yt,vt,V,Ct.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||qt.intersectsObject(b))){const yt=Z.update(b),vt=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ct.copy(b.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Ct.copy(yt.boundingSphere.center)),Ct.applyMatrix4(b.matrixWorld).applyMatrix4(lt)),Array.isArray(vt)){const _t=yt.groups;for(let Ut=0,Gt=_t.length;Ut<Gt;Ut++){const It=_t[Ut],ce=vt[It.materialIndex];ce&&ce.visible&&g.push(b,yt,ce,V,Ct.z,It)}}else vt.visible&&g.push(b,yt,vt,V,Ct.z,null)}}const ht=b.children;for(let yt=0,vt=ht.length;yt<vt;yt++)Ot(ht[yt],F,V,G)}function Yt(b,F,V,G){const U=b.opaque,ht=b.transmissive,yt=b.transparent;p.setupLightsView(V),$===!0&&st.setGlobalState(x.clippingPlanes,V),G&&D.viewport(v.copy(G)),U.length>0&&Jt(U,F,V),ht.length>0&&Jt(ht,F,V),yt.length>0&&Jt(yt,F,V),D.buffers.depth.setTest(!0),D.buffers.depth.setMask(!0),D.buffers.color.setMask(!0),D.setPolygonOffset(!1)}function Ne(b,F,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new pi(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?Xi:qi,minFilter:Hr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:fe.workingColorSpace}));const ht=p.state.transmissionRenderTarget[G.id],yt=G.viewport||v;ht.setSize(yt.z,yt.w);const vt=x.getRenderTarget();x.setRenderTarget(ht),x.getClearColor(k),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),Bt&&At.render(V);const _t=x.toneMapping;x.toneMapping=dr;const Ut=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),$===!0&&st.setGlobalState(x.clippingPlanes,G),Jt(b,V,G),C.updateMultisampleRenderTarget(ht),C.updateRenderTargetMipmap(ht),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let It=0,ce=F.length;It<ce;It++){const ae=F[It],ge=ae.object,qe=ae.geometry,ee=ae.material,Ft=ae.group;if(ee.side===zi&&ge.layers.test(G.layers)){const je=ee.side;ee.side=wn,ee.needsUpdate=!0,Ae(ge,V,G,qe,ee,Ft),ee.side=je,ee.needsUpdate=!0,Gt=!0}}Gt===!0&&(C.updateMultisampleRenderTarget(ht),C.updateRenderTargetMipmap(ht))}x.setRenderTarget(vt),x.setClearColor(k,W),Ut!==void 0&&(G.viewport=Ut),x.toneMapping=_t}function Jt(b,F,V){const G=F.isScene===!0?F.overrideMaterial:null;for(let U=0,ht=b.length;U<ht;U++){const yt=b[U],vt=yt.object,_t=yt.geometry,Ut=G===null?yt.material:G,Gt=yt.group;vt.layers.test(V.layers)&&Ae(vt,F,V,_t,Ut,Gt)}}function Ae(b,F,V,G,U,ht){b.onBeforeRender(x,F,V,G,U,ht),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),U.onBeforeRender(x,F,V,G,b,ht),U.transparent===!0&&U.side===zi&&U.forceSinglePass===!1?(U.side=wn,U.needsUpdate=!0,x.renderBufferDirect(V,F,G,U,b,ht),U.side=gr,U.needsUpdate=!0,x.renderBufferDirect(V,F,G,U,b,ht),U.side=zi):x.renderBufferDirect(V,F,G,U,b,ht),b.onAfterRender(x,F,V,G,U,ht)}function Oe(b,F,V){F.isScene!==!0&&(F=kt);const G=xt.get(b),U=p.state.lights,ht=p.state.shadowsArray,yt=U.state.version,vt=wt.getParameters(b,U.state,ht,F,V),_t=wt.getProgramCacheKey(vt);let Ut=G.programs;G.environment=b.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(b.isMeshStandardMaterial?H:M).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Ut===void 0&&(b.addEventListener("dispose",Kt),Ut=new Map,G.programs=Ut);let Gt=Ut.get(_t);if(Gt!==void 0){if(G.currentProgram===Gt&&G.lightsStateVersion===yt)return Se(b,vt),Gt}else vt.uniforms=wt.getUniforms(b),b.onBeforeCompile(vt,x),Gt=wt.acquireProgram(vt,_t),Ut.set(_t,Gt),G.uniforms=vt.uniforms;const It=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(It.clippingPlanes=st.uniform),Se(b,vt),G.needsLights=be(b),G.lightsStateVersion=yt,G.needsLights&&(It.ambientLightColor.value=U.state.ambient,It.lightProbe.value=U.state.probe,It.directionalLights.value=U.state.directional,It.directionalLightShadows.value=U.state.directionalShadow,It.spotLights.value=U.state.spot,It.spotLightShadows.value=U.state.spotShadow,It.rectAreaLights.value=U.state.rectArea,It.ltc_1.value=U.state.rectAreaLTC1,It.ltc_2.value=U.state.rectAreaLTC2,It.pointLights.value=U.state.point,It.pointLightShadows.value=U.state.pointShadow,It.hemisphereLights.value=U.state.hemi,It.directionalShadowMap.value=U.state.directionalShadowMap,It.directionalShadowMatrix.value=U.state.directionalShadowMatrix,It.spotShadowMap.value=U.state.spotShadowMap,It.spotLightMatrix.value=U.state.spotLightMatrix,It.spotLightMap.value=U.state.spotLightMap,It.pointShadowMap.value=U.state.pointShadowMap,It.pointShadowMatrix.value=U.state.pointShadowMatrix),G.currentProgram=Gt,G.uniformsList=null,Gt}function Te(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=ja.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function Se(b,F){const V=xt.get(b);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function me(b,F,V,G,U){F.isScene!==!0&&(F=kt),C.resetTextureUnits();const ht=F.fog,yt=G.isMeshStandardMaterial?F.environment:null,vt=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:yr,_t=(G.isMeshStandardMaterial?H:M).get(G.envMap||yt),Ut=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Gt=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),It=!!V.morphAttributes.position,ce=!!V.morphAttributes.normal,ae=!!V.morphAttributes.color;let ge=dr;G.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(ge=x.toneMapping);const qe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ee=qe!==void 0?qe.length:0,Ft=xt.get(G),je=p.state.lights;if($===!0&&(et===!0||b!==N)){const Zn=b===N&&G.id===P;st.setState(G,b,Zn)}let de=!1;G.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==je.state.version||Ft.outputColorSpace!==vt||U.isBatchedMesh&&Ft.batching===!1||!U.isBatchedMesh&&Ft.batching===!0||U.isBatchedMesh&&Ft.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ft.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ft.instancing===!1||!U.isInstancedMesh&&Ft.instancing===!0||U.isSkinnedMesh&&Ft.skinning===!1||!U.isSkinnedMesh&&Ft.skinning===!0||U.isInstancedMesh&&Ft.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ft.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ft.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ft.instancingMorph===!1&&U.morphTexture!==null||Ft.envMap!==_t||G.fog===!0&&Ft.fog!==ht||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==st.numPlanes||Ft.numIntersection!==st.numIntersection)||Ft.vertexAlphas!==Ut||Ft.vertexTangents!==Gt||Ft.morphTargets!==It||Ft.morphNormals!==ce||Ft.morphColors!==ae||Ft.toneMapping!==ge||Ft.morphTargetsCount!==ee)&&(de=!0):(de=!0,Ft.__version=G.version);let si=Ft.currentProgram;de===!0&&(si=Oe(G,F,U));let ss=!1,Nn=!1,Fl=!1;const Fe=si.getUniforms(),ji=Ft.uniforms;if(D.useProgram(si.program)&&(ss=!0,Nn=!0,Fl=!0),G.id!==P&&(P=G.id,Nn=!0),ss||N!==b){it.reverseDepthBuffer?(pt.copy(b.projectionMatrix),cg(pt),ug(pt),Fe.setValue(w,"projectionMatrix",pt)):Fe.setValue(w,"projectionMatrix",b.projectionMatrix),Fe.setValue(w,"viewMatrix",b.matrixWorldInverse);const Zn=Fe.map.cameraPosition;Zn!==void 0&&Zn.setValue(w,Pt.setFromMatrixPosition(b.matrixWorld)),it.logarithmicDepthBuffer&&Fe.setValue(w,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Fe.setValue(w,"isOrthographic",b.isOrthographicCamera===!0),N!==b&&(N=b,Nn=!0,Fl=!0)}if(U.isSkinnedMesh){Fe.setOptional(w,U,"bindMatrix"),Fe.setOptional(w,U,"bindMatrixInverse");const Zn=U.skeleton;Zn&&(Zn.boneTexture===null&&Zn.computeBoneTexture(),Fe.setValue(w,"boneTexture",Zn.boneTexture,C))}U.isBatchedMesh&&(Fe.setOptional(w,U,"batchingTexture"),Fe.setValue(w,"batchingTexture",U._matricesTexture,C),Fe.setOptional(w,U,"batchingIdTexture"),Fe.setValue(w,"batchingIdTexture",U._indirectTexture,C),Fe.setOptional(w,U,"batchingColorTexture"),U._colorsTexture!==null&&Fe.setValue(w,"batchingColorTexture",U._colorsTexture,C));const Bl=V.morphAttributes;if((Bl.position!==void 0||Bl.normal!==void 0||Bl.color!==void 0)&&Vt.update(U,V,si),(Nn||Ft.receiveShadow!==U.receiveShadow)&&(Ft.receiveShadow=U.receiveShadow,Fe.setValue(w,"receiveShadow",U.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(ji.envMap.value=_t,ji.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(ji.envMapIntensity.value=F.environmentIntensity),Nn&&(Fe.setValue(w,"toneMappingExposure",x.toneMappingExposure),Ft.needsLights&&Un(ji,Fl),ht&&G.fog===!0&&at.refreshFogUniforms(ji,ht),at.refreshMaterialUniforms(ji,G,Y,z,p.state.transmissionRenderTarget[b.id]),ja.upload(w,Te(Ft),ji,C)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ja.upload(w,Te(Ft),ji,C),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Fe.setValue(w,"center",U.center),Fe.setValue(w,"modelViewMatrix",U.modelViewMatrix),Fe.setValue(w,"normalMatrix",U.normalMatrix),Fe.setValue(w,"modelMatrix",U.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Zn=G.uniformsGroups;for(let zl=0,a_=Zn.length;zl<a_;zl++){const Gh=Zn[zl];I.update(Gh,si),I.bind(Gh,si)}}return si}function Un(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function be(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(b,F,V){xt.get(b.texture).__webglTexture=F,xt.get(b.depthTexture).__webglTexture=V;const G=xt.get(b);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,F){const V=xt.get(b);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,V=0){E=b,R=F,A=V;let G=!0,U=null,ht=!1,yt=!1;if(b){const _t=xt.get(b);if(_t.__useDefaultFramebuffer!==void 0)D.bindFramebuffer(w.FRAMEBUFFER,null),G=!1;else if(_t.__webglFramebuffer===void 0)C.setupRenderTarget(b);else if(_t.__hasExternalTextures)C.rebindTextures(b,xt.get(b.texture).__webglTexture,xt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const It=b.depthTexture;if(_t.__boundDepthTexture!==It){if(It!==null&&xt.has(It)&&(b.width!==It.image.width||b.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(b)}}const Ut=b.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(yt=!0);const Gt=xt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Gt[F])?U=Gt[F][V]:U=Gt[F],ht=!0):b.samples>0&&C.useMultisampledRTT(b)===!1?U=xt.get(b).__webglMultisampledFramebuffer:Array.isArray(Gt)?U=Gt[V]:U=Gt,v.copy(b.viewport),T.copy(b.scissor),O=b.scissorTest}else v.copy(L).multiplyScalar(Y).floor(),T.copy(ut).multiplyScalar(Y).floor(),O=zt;if(D.bindFramebuffer(w.FRAMEBUFFER,U)&&G&&D.drawBuffers(b,U),D.viewport(v),D.scissor(T),D.setScissorTest(O),ht){const _t=xt.get(b.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+F,_t.__webglTexture,V)}else if(yt){const _t=xt.get(b.texture),Ut=F||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,_t.__webglTexture,V||0,Ut)}P=-1},this.readRenderTargetPixels=function(b,F,V,G,U,ht,yt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=xt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&yt!==void 0&&(vt=vt[yt]),vt){D.bindFramebuffer(w.FRAMEBUFFER,vt);try{const _t=b.texture,Ut=_t.format,Gt=_t.type;if(!it.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-G&&V>=0&&V<=b.height-U&&w.readPixels(F,V,G,U,Wt.convert(Ut),Wt.convert(Gt),ht)}finally{const _t=E!==null?xt.get(E).__webglFramebuffer:null;D.bindFramebuffer(w.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(b,F,V,G,U,ht,yt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=xt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&yt!==void 0&&(vt=vt[yt]),vt){const _t=b.texture,Ut=_t.format,Gt=_t.type;if(!it.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=b.width-G&&V>=0&&V<=b.height-U){D.bindFramebuffer(w.FRAMEBUFFER,vt);const It=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,It),w.bufferData(w.PIXEL_PACK_BUFFER,ht.byteLength,w.STREAM_READ),w.readPixels(F,V,G,U,Wt.convert(Ut),Wt.convert(Gt),0);const ce=E!==null?xt.get(E).__webglFramebuffer:null;D.bindFramebuffer(w.FRAMEBUFFER,ce);const ae=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await lg(w,ae,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,It),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,ht),w.deleteBuffer(It),w.deleteSync(ae),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,F=null,V=0){b.isTexture!==!0&&(Ja("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,b=arguments[1]);const G=Math.pow(2,-V),U=Math.floor(b.image.width*G),ht=Math.floor(b.image.height*G),yt=F!==null?F.x:0,vt=F!==null?F.y:0;C.setTexture2D(b,0),w.copyTexSubImage2D(w.TEXTURE_2D,V,0,0,yt,vt,U,ht),D.unbindTexture()},this.copyTextureToTexture=function(b,F,V=null,G=null,U=0){b.isTexture!==!0&&(Ja("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1],F=arguments[2],U=arguments[3]||0,V=null);let ht,yt,vt,_t,Ut,Gt;V!==null?(ht=V.max.x-V.min.x,yt=V.max.y-V.min.y,vt=V.min.x,_t=V.min.y):(ht=b.image.width,yt=b.image.height,vt=0,_t=0),G!==null?(Ut=G.x,Gt=G.y):(Ut=0,Gt=0);const It=Wt.convert(F.format),ce=Wt.convert(F.type);C.setTexture2D(F,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,F.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,F.unpackAlignment);const ae=w.getParameter(w.UNPACK_ROW_LENGTH),ge=w.getParameter(w.UNPACK_IMAGE_HEIGHT),qe=w.getParameter(w.UNPACK_SKIP_PIXELS),ee=w.getParameter(w.UNPACK_SKIP_ROWS),Ft=w.getParameter(w.UNPACK_SKIP_IMAGES),je=b.isCompressedTexture?b.mipmaps[U]:b.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,je.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,je.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,vt),w.pixelStorei(w.UNPACK_SKIP_ROWS,_t),b.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,U,Ut,Gt,ht,yt,It,ce,je.data):b.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,U,Ut,Gt,je.width,je.height,It,je.data):w.texSubImage2D(w.TEXTURE_2D,U,Ut,Gt,ht,yt,It,ce,je),w.pixelStorei(w.UNPACK_ROW_LENGTH,ae),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ge),w.pixelStorei(w.UNPACK_SKIP_PIXELS,qe),w.pixelStorei(w.UNPACK_SKIP_ROWS,ee),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ft),U===0&&F.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),D.unbindTexture()},this.copyTextureToTexture3D=function(b,F,V=null,G=null,U=0){b.isTexture!==!0&&(Ja("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,b=arguments[2],F=arguments[3],U=arguments[4]||0);let ht,yt,vt,_t,Ut,Gt,It,ce,ae;const ge=b.isCompressedTexture?b.mipmaps[U]:b.image;V!==null?(ht=V.max.x-V.min.x,yt=V.max.y-V.min.y,vt=V.max.z-V.min.z,_t=V.min.x,Ut=V.min.y,Gt=V.min.z):(ht=ge.width,yt=ge.height,vt=ge.depth,_t=0,Ut=0,Gt=0),G!==null?(It=G.x,ce=G.y,ae=G.z):(It=0,ce=0,ae=0);const qe=Wt.convert(F.format),ee=Wt.convert(F.type);let Ft;if(F.isData3DTexture)C.setTexture3D(F,0),Ft=w.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)C.setTexture2DArray(F,0),Ft=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,F.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,F.unpackAlignment);const je=w.getParameter(w.UNPACK_ROW_LENGTH),de=w.getParameter(w.UNPACK_IMAGE_HEIGHT),si=w.getParameter(w.UNPACK_SKIP_PIXELS),ss=w.getParameter(w.UNPACK_SKIP_ROWS),Nn=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,ge.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ge.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,_t),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ut),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Gt),b.isDataTexture||b.isData3DTexture?w.texSubImage3D(Ft,U,It,ce,ae,ht,yt,vt,qe,ee,ge.data):F.isCompressedArrayTexture?w.compressedTexSubImage3D(Ft,U,It,ce,ae,ht,yt,vt,qe,ge.data):w.texSubImage3D(Ft,U,It,ce,ae,ht,yt,vt,qe,ee,ge),w.pixelStorei(w.UNPACK_ROW_LENGTH,je),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,de),w.pixelStorei(w.UNPACK_SKIP_PIXELS,si),w.pixelStorei(w.UNPACK_SKIP_ROWS,ss),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Nn),U===0&&F.generateMipmaps&&w.generateMipmap(Ft),D.unbindTexture()},this.initRenderTarget=function(b){xt.get(b).__webglFramebuffer===void 0&&C.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?C.setTextureCube(b,0):b.isData3DTexture?C.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?C.setTexture2DArray(b,0):C.setTexture2D(b,0),D.unbindTexture()},this.resetState=function(){R=0,A=0,E=null,D.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ih?"display-p3":"srgb",e.unpackColorSpace=fe.workingColorSpace===Al?"display-p3":"srgb"}}class uh{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Zt(t),this.near=e,this.far=n}clone(){return new uh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class MM extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ri{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new ft:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new B,i=[],s=[],o=[],a=new B,l=new Re;for(let d=0;d<=t;d++){const _=d/t;i[d]=this.getTangentAt(_,new B)}s[0]=new B,o[0]=new B;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Qe(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,_))}o[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(Qe(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],d*_)),o[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class hh extends Ri{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ft){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class yM extends hh{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function fh(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const Pa=new B,mc=new fh,_c=new fh,gc=new fh;class EM extends Ri{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new B){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(Pa.subVectors(i[0],i[1]).add(i[0]),c=Pa);const h=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(Pa.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Pa),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);g<1e-4&&(g=1),_<1e-4&&(_=g),p<1e-4&&(p=g),mc.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,_,g,p),_c.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,_,g,p),gc.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,_,g,p)}else this.curveType==="catmullrom"&&(mc.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),_c.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),gc.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(mc.calc(l),_c.calc(l),gc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new B().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function zf(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function TM(r,t){const e=1-r;return e*e*t}function bM(r,t){return 2*(1-r)*r*t}function wM(r,t){return r*r*t}function Co(r,t,e,n){return TM(r,t)+bM(r,e)+wM(r,n)}function AM(r,t){const e=1-r;return e*e*e*t}function CM(r,t){const e=1-r;return 3*e*e*r*t}function RM(r,t){return 3*(1-r)*r*r*t}function PM(r,t){return r*r*r*t}function Ro(r,t,e,n,i){return AM(r,t)+CM(r,e)+RM(r,n)+PM(r,i)}class xp extends Ri{constructor(t=new ft,e=new ft,n=new ft,i=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ft){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ro(t,i.x,s.x,o.x,a.x),Ro(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class LM extends Ri{constructor(t=new B,e=new B,n=new B,i=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new B){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ro(t,i.x,s.x,o.x,a.x),Ro(t,i.y,s.y,o.y,a.y),Ro(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Sp extends Ri{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class DM extends Ri{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mp extends Ri{constructor(t=new ft,e=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ft){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Co(t,i.x,s.x,o.x),Co(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class IM extends Ri{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Co(t,i.x,s.x,o.x),Co(t,i.y,s.y,o.y),Co(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yp extends Ri{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(zf(a,l.x,c.x,u.x,h.x),zf(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ft().fromArray(i))}return this}}var Mu=Object.freeze({__proto__:null,ArcCurve:yM,CatmullRomCurve3:EM,CubicBezierCurve:xp,CubicBezierCurve3:LM,EllipseCurve:hh,LineCurve:Sp,LineCurve3:DM,QuadraticBezierCurve:Mp,QuadraticBezierCurve3:IM,SplineCurve:yp});class UM extends Ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Mu[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Mu[i.type]().fromJSON(i))}return this}}class yu extends UM{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Sp(this.currentPoint.clone(),new ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Mp(this.currentPoint.clone(),new ft(t,e),new ft(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new xp(this.currentPoint.clone(),new ft(t,e),new ft(n,i),new ft(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new yp(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new hh(t,e,n,i,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Qa extends yu{constructor(t){super(t),this.uuid=is(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new yu().fromJSON(i))}return this}}const NM={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=Ep(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,d;if(n&&(s=kM(r,t,s,e)),r.length>80*e){a=c=r[0],l=u=r[1];for(let _=e;_<i;_+=e)h=r[_],f=r[_+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return Xo(s,o,e,a,l,d,0),o}};function Ep(r,t,e,n,i){let s,o;if(i===JM(r,t,e,n)>0)for(s=t;s<e;s+=n)o=kf(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=kf(s,r[s],r[s+1],o);return o&&Rl(o,o.next)&&(qo(o),o=o.next),o}function Qr(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Rl(e,e.next)||De(e.prev,e,e.next)===0)){if(qo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Xo(r,t,e,n,i,s,o){if(!r)return;!o&&s&&XM(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?FM(r,n,i,s):OM(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),qo(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=BM(Qr(r),t,e),Xo(r,t,e,n,i,s,2)):o===2&&zM(r,t,e,n,i,s):Xo(Qr(r),t,e,n,i,s,1);break}}}function OM(r){const t=r.prev,e=r,n=r.next;if(De(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=i<s?i<o?i:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=i>s?i>o?i:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let _=n.next;for(;_!==t;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=d&&Rs(i,a,s,l,o,c,_.x,_.y)&&De(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function FM(r,t,e,n){const i=r.prev,s=r,o=r.next;if(De(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,u=i.y,h=s.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,_=u<h?u<f?u:f:h<f?h:f,g=a>l?a>c?a:c:l>c?l:c,p=u>h?u>f?u:f:h>f?h:f,m=Eu(d,_,t,e,n),y=Eu(g,p,t,e,n);let x=r.prevZ,S=r.nextZ;for(;x&&x.z>=m&&S&&S.z<=y;){if(x.x>=d&&x.x<=g&&x.y>=_&&x.y<=p&&x!==i&&x!==o&&Rs(a,u,l,h,c,f,x.x,x.y)&&De(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=d&&S.x<=g&&S.y>=_&&S.y<=p&&S!==i&&S!==o&&Rs(a,u,l,h,c,f,S.x,S.y)&&De(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=m;){if(x.x>=d&&x.x<=g&&x.y>=_&&x.y<=p&&x!==i&&x!==o&&Rs(a,u,l,h,c,f,x.x,x.y)&&De(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=y;){if(S.x>=d&&S.x<=g&&S.y>=_&&S.y<=p&&S!==i&&S!==o&&Rs(a,u,l,h,c,f,S.x,S.y)&&De(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function BM(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!Rl(i,s)&&Tp(i,n,n.next,s)&&Yo(i,s)&&Yo(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),qo(n),qo(n.next),n=r=s),n=n.next}while(n!==r);return Qr(n)}function zM(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&$M(o,a)){let l=bp(o,a);o=Qr(o,o.next),l=Qr(l,l.next),Xo(o,t,e,n,i,s,0),Xo(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function kM(r,t,e,n){const i=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=Ep(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(qM(c));for(i.sort(HM),s=0;s<i.length;s++)e=VM(i[s],e);return e}function HM(r,t){return r.x-t.x}function VM(r,t){const e=GM(r,t);if(!e)return t;const n=bp(e,r);return Qr(n,n.next),Qr(e,e.next)}function GM(r,t){let e=t,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&Rs(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(s-e.x),Yo(e,r)&&(h<u||h===u&&(e.x>i.x||e.x===i.x&&WM(i,e)))&&(i=e,u=h)),e=e.next;while(e!==a);return i}function WM(r,t){return De(r.prev,r,t.prev)<0&&De(t.next,r,r.next)<0}function XM(r,t,e,n){let i=r;do i.z===0&&(i.z=Eu(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,YM(i)}function YM(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function Eu(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function qM(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Rs(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function $M(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!KM(r,t)&&(Yo(r,t)&&Yo(t,r)&&ZM(r,t)&&(De(r.prev,r,t.prev)||De(r,t.prev,t))||Rl(r,t)&&De(r.prev,r,r.next)>0&&De(t.prev,t,t.next)>0)}function De(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Rl(r,t){return r.x===t.x&&r.y===t.y}function Tp(r,t,e,n){const i=Da(De(r,t,e)),s=Da(De(r,t,n)),o=Da(De(e,n,r)),a=Da(De(e,n,t));return!!(i!==s&&o!==a||i===0&&La(r,e,t)||s===0&&La(r,n,t)||o===0&&La(e,r,n)||a===0&&La(e,t,n))}function La(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Da(r){return r>0?1:r<0?-1:0}function KM(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Tp(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Yo(r,t){return De(r.prev,r,r.next)<0?De(r,t,r.next)>=0&&De(r,r.prev,t)>=0:De(r,t,r.prev)<0||De(r,r.next,t)<0}function ZM(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function bp(r,t){const e=new Tu(r.i,r.x,r.y),n=new Tu(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function kf(r,t,e,n){const i=new Tu(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function qo(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Tu(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function JM(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class Os{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return Os.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];Hf(t),Vf(n,t);let o=t.length;e.forEach(Hf);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Vf(n,e[l]);const a=NM.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Hf(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Vf(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class dh extends Ji{constructor(t=new Qa([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new mi(i,3)),this.setAttribute("uv",new mi(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:d-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:jM;let x,S=!1,R,A,E,P;m&&(x=m.getSpacedPoints(u),S=!0,f=!1,R=m.computeFrenetFrames(u,!1),A=new B,E=new B,P=new B),f||(p=0,d=0,_=0,g=0);const N=a.extractPoints(c);let v=N.shape;const T=N.holes;if(!Os.isClockWise(v)){v=v.reverse();for(let j=0,w=T.length;j<w;j++){const rt=T[j];Os.isClockWise(rt)&&(T[j]=rt.reverse())}}const k=Os.triangulateShape(v,T),W=v;for(let j=0,w=T.length;j<w;j++){const rt=T[j];v=v.concat(rt)}function q(j,w,rt){return w||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(w,rt)}const z=v.length,Y=k.length;function X(j,w,rt){let ct,it,D;const bt=j.x-w.x,xt=j.y-w.y,C=rt.x-j.x,M=rt.y-j.y,H=bt*bt+xt*xt,J=bt*M-xt*C;if(Math.abs(J)>Number.EPSILON){const tt=Math.sqrt(H),Z=Math.sqrt(C*C+M*M),wt=w.x-xt/tt,at=w.y+bt/tt,gt=rt.x-M/Z,Xt=rt.y+C/Z,st=((gt-wt)*M-(Xt-at)*C)/(bt*M-xt*C);ct=wt+bt*st-j.x,it=at+xt*st-j.y;const Tt=ct*ct+it*it;if(Tt<=2)return new ft(ct,it);D=Math.sqrt(Tt/2)}else{let tt=!1;bt>Number.EPSILON?C>Number.EPSILON&&(tt=!0):bt<-Number.EPSILON?C<-Number.EPSILON&&(tt=!0):Math.sign(xt)===Math.sign(M)&&(tt=!0),tt?(ct=-xt,it=bt,D=Math.sqrt(H)):(ct=bt,it=xt,D=Math.sqrt(H/2))}return new ft(ct/D,it/D)}const ot=[];for(let j=0,w=W.length,rt=w-1,ct=j+1;j<w;j++,rt++,ct++)rt===w&&(rt=0),ct===w&&(ct=0),ot[j]=X(W[j],W[rt],W[ct]);const L=[];let ut,zt=ot.concat();for(let j=0,w=T.length;j<w;j++){const rt=T[j];ut=[];for(let ct=0,it=rt.length,D=it-1,bt=ct+1;ct<it;ct++,D++,bt++)D===it&&(D=0),bt===it&&(bt=0),ut[ct]=X(rt[ct],rt[D],rt[bt]);L.push(ut),zt=zt.concat(ut)}for(let j=0;j<p;j++){const w=j/p,rt=d*Math.cos(w*Math.PI/2),ct=_*Math.sin(w*Math.PI/2)+g;for(let it=0,D=W.length;it<D;it++){const bt=q(W[it],ot[it],ct);lt(bt.x,bt.y,-rt)}for(let it=0,D=T.length;it<D;it++){const bt=T[it];ut=L[it];for(let xt=0,C=bt.length;xt<C;xt++){const M=q(bt[xt],ut[xt],ct);lt(M.x,M.y,-rt)}}}const qt=_+g;for(let j=0;j<z;j++){const w=f?q(v[j],zt[j],qt):v[j];S?(E.copy(R.normals[0]).multiplyScalar(w.x),A.copy(R.binormals[0]).multiplyScalar(w.y),P.copy(x[0]).add(E).add(A),lt(P.x,P.y,P.z)):lt(w.x,w.y,0)}for(let j=1;j<=u;j++)for(let w=0;w<z;w++){const rt=f?q(v[w],zt[w],qt):v[w];S?(E.copy(R.normals[j]).multiplyScalar(rt.x),A.copy(R.binormals[j]).multiplyScalar(rt.y),P.copy(x[j]).add(E).add(A),lt(P.x,P.y,P.z)):lt(rt.x,rt.y,h/u*j)}for(let j=p-1;j>=0;j--){const w=j/p,rt=d*Math.cos(w*Math.PI/2),ct=_*Math.sin(w*Math.PI/2)+g;for(let it=0,D=W.length;it<D;it++){const bt=q(W[it],ot[it],ct);lt(bt.x,bt.y,h+rt)}for(let it=0,D=T.length;it<D;it++){const bt=T[it];ut=L[it];for(let xt=0,C=bt.length;xt<C;xt++){const M=q(bt[xt],ut[xt],ct);S?lt(M.x,M.y+x[u-1].y,x[u-1].x+rt):lt(M.x,M.y,h+rt)}}}$(),et();function $(){const j=i.length/3;if(f){let w=0,rt=z*w;for(let ct=0;ct<Y;ct++){const it=k[ct];Pt(it[2]+rt,it[1]+rt,it[0]+rt)}w=u+p*2,rt=z*w;for(let ct=0;ct<Y;ct++){const it=k[ct];Pt(it[0]+rt,it[1]+rt,it[2]+rt)}}else{for(let w=0;w<Y;w++){const rt=k[w];Pt(rt[2],rt[1],rt[0])}for(let w=0;w<Y;w++){const rt=k[w];Pt(rt[0]+z*u,rt[1]+z*u,rt[2]+z*u)}}n.addGroup(j,i.length/3-j,0)}function et(){const j=i.length/3;let w=0;pt(W,w),w+=W.length;for(let rt=0,ct=T.length;rt<ct;rt++){const it=T[rt];pt(it,w),w+=it.length}n.addGroup(j,i.length/3-j,1)}function pt(j,w){let rt=j.length;for(;--rt>=0;){const ct=rt;let it=rt-1;it<0&&(it=j.length-1);for(let D=0,bt=u+p*2;D<bt;D++){const xt=z*D,C=z*(D+1),M=w+ct+xt,H=w+it+xt,J=w+it+C,tt=w+ct+C;Ct(M,H,J,tt)}}}function lt(j,w,rt){l.push(j),l.push(w),l.push(rt)}function Pt(j,w,rt){kt(j),kt(w),kt(rt);const ct=i.length/3,it=y.generateTopUV(n,i,ct-3,ct-2,ct-1);Bt(it[0]),Bt(it[1]),Bt(it[2])}function Ct(j,w,rt,ct){kt(j),kt(w),kt(ct),kt(w),kt(rt),kt(ct);const it=i.length/3,D=y.generateSideWallUV(n,i,it-6,it-3,it-2,it-1);Bt(D[0]),Bt(D[1]),Bt(D[3]),Bt(D[1]),Bt(D[2]),Bt(D[3])}function kt(j){i.push(l[j*3+0]),i.push(l[j*3+1]),i.push(l[j*3+2])}function Bt(j){s.push(j.x),s.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return QM(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Mu[i.type]().fromJSON(i)),new dh(n,t.options)}}const jM={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],u=t[i*3+1];return[new ft(s,o),new ft(a,l),new ft(c,u)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[i*3],d=t[i*3+1],_=t[i*3+2],g=t[s*3],p=t[s*3+1],m=t[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ft(o,1-l),new ft(c,1-h),new ft(f,1-_),new ft(g,1-m)]:[new ft(a,1-l),new ft(u,1-h),new ft(d,1-_),new ft(p,1-m)]}};function QM(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ty extends un{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pl extends oa{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ep,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Gf={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class ey{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const ny=new ey;class ph{constructor(t){this.manager=t!==void 0?t:ny,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ph.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ni={};class iy extends Error{constructor(t,e){super(t),this.response=e}}class ry extends ph{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Gf.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Ni[t]!==void 0){Ni[t].push({onLoad:e,onProgress:n,onError:i});return}Ni[t]=[],Ni[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ni[t],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0;let g=0;const p=new ReadableStream({start(m){y();function y(){h.read().then(({done:x,value:S})=>{if(x)m.close();else{g+=S.byteLength;const R=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let A=0,E=u.length;A<E;A++){const P=u[A];P.onProgress&&P.onProgress(R)}m.enqueue(S),y()}},x=>{m.error(x)})}}});return new Response(p)}else throw new iy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{Gf.add(t,c);const u=Ni[t];delete Ni[t];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Ni[t];if(u===void 0)throw this.manager.itemError(t),c;delete Ni[t];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class mh extends hn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const vc=new Re,Wf=new B,Xf=new B;class wp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ah,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Wf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wf),Xf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xf),e.updateMatrixWorld(),vc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Yf=new Re,po=new B,xc=new B;class sy extends wp{constructor(){super(new Hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),po.setFromMatrixPosition(t.matrixWorld),n.position.copy(po),xc.copy(n.position),xc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(xc),n.updateMatrixWorld(),i.makeTranslation(-po.x,-po.y,-po.z),Yf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yf)}}class oy extends mh{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new sy}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ay extends wp{constructor(){super(new lh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pl extends mh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new ay}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ly extends mh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ap{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=qf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function qf(){return performance.now()}class cy{constructor(){this.type="ShapePath",this.color=new Zt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new yu,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,s,o){return this.currentPath.bezierCurveTo(t,e,n,i,s,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(m){const y=[];for(let x=0,S=m.length;x<S;x++){const R=m[x],A=new Qa;A.curves=R.curves,y.push(A)}return y}function n(m,y){const x=y.length;let S=!1;for(let R=x-1,A=0;A<x;R=A++){let E=y[R],P=y[A],N=P.x-E.x,v=P.y-E.y;if(Math.abs(v)>Number.EPSILON){if(v<0&&(E=y[A],N=-N,P=y[R],v=-v),m.y<E.y||m.y>P.y)continue;if(m.y===E.y){if(m.x===E.x)return!0}else{const T=v*(m.x-E.x)-N*(m.y-E.y);if(T===0)return!0;if(T<0)continue;S=!S}}else{if(m.y!==E.y)continue;if(P.x<=m.x&&m.x<=E.x||E.x<=m.x&&m.x<=P.x)return!0}}return S}const i=Os.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new Qa,l.curves=a.curves,c.push(l),c;let u=!i(s[0].getPoints());u=t?!u:u;const h=[],f=[];let d=[],_=0,g;f[_]=void 0,d[_]=[];for(let m=0,y=s.length;m<y;m++)a=s[m],g=a.getPoints(),o=i(g),o=t?!o:o,o?(!u&&f[_]&&_++,f[_]={s:new Qa,p:g},f[_].s.curves=a.curves,u&&_++,d[_]=[]):d[_].push({h:a,p:g[0]});if(!f[0])return e(s);if(f.length>1){let m=!1,y=0;for(let x=0,S=f.length;x<S;x++)h[x]=[];for(let x=0,S=f.length;x<S;x++){const R=d[x];for(let A=0;A<R.length;A++){const E=R[A];let P=!0;for(let N=0;N<f.length;N++)n(E.p,f[N].p)&&(x!==N&&y++,P?(P=!1,h[N].push(E)):m=!0);P&&h[x].push(E)}}y>0&&m===!1&&(d=h)}let p;for(let m=0,y=f.length;m<y;m++){l=f[m].s,c.push(l),p=d[m];for(let x=0,S=p.length;x<S;x++)l.holes.push(p[x].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ku}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ku);const Cp={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ao{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const uy=new lh(-1,1,1,-1,0,1);class hy extends Ji{constructor(){super(),this.setAttribute("position",new mi([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new mi([0,2,0,0,2,0],2))}}const fy=new hy;class _h{constructor(t){this._mesh=new bn(fy,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,uy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class dy extends ao{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof un?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Wo.clone(t.uniforms),this.material=new un({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new _h(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class $f extends ao{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class py extends ao{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class my{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new ft);this._width=n.width,this._height=n.height,e=new pi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Xi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new dy(Cp),this.copyPass.material.blending=Wi,this.clock=new Ap}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}$f!==void 0&&(o instanceof $f?n=!0:o instanceof py&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ft);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class _y extends ao{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Zt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const gy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Zt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Zs extends ao{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new ft(t.x,t.y):new ft(256,256),this.clearColor=new Zt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new pi(s,o,{type:Xi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new pi(s,o,{type:Xi});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new pi(s,o,{type:Xi});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}const a=gy;this.highPassUniforms=Wo.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new un({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ft(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Cp;this.copyUniforms=Wo.clone(u.uniforms),this.blendMaterial=new un({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Uc,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Zt,this.oldClearAlpha=1,this.basic=new oh,this.fsQuad=new _h(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new ft(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Zs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Zs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new un({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ft(.5,.5)},direction:{value:new ft(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new un({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Zs.BlurDirectionX=new ft(1,0);Zs.BlurDirectionY=new ft(0,1);const vy={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class xy extends ao{constructor(){super();const t=vy;this.uniforms=Wo.clone(t.uniforms),this.material=new ty({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new _h(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},fe.getTransfer(this._outputColorSpace)===Ee&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===zd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===kd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Hd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Zu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Vd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Gd&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}var Kf="1.3.26";function Rp(r,t,e){return Math.max(r,Math.min(t,e))}function Sy(r,t,e){return(1-e)*r+e*t}function My(r,t,e,n){return Sy(r,t,1-Math.exp(-e*n))}function yy(r,t){return(r%t+t)%t}var Ey=class{constructor(){Lt(this,"isRunning",!1);Lt(this,"value",0);Lt(this,"from",0);Lt(this,"to",0);Lt(this,"currentTime",0);Lt(this,"lerp");Lt(this,"duration");Lt(this,"easing");Lt(this,"onUpdate")}advance(r){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=Rp(0,this.currentTime/this.duration,1);t=n>=1;const i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=My(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function Ty(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var by=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){Lt(this,"width",0);Lt(this,"height",0);Lt(this,"scrollHeight",0);Lt(this,"scrollWidth",0);Lt(this,"debouncedResize");Lt(this,"wrapperResizeObserver");Lt(this,"contentResizeObserver");Lt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Lt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Lt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=Ty(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,t;(r=this.wrapperResizeObserver)==null||r.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Pp=class{constructor(){Lt(this,"events",{})}emit(r,...t){var n;const e=this.events[r]||[];for(let i=0,s=e.length;i<s;i++)(n=e[i])==null||n.call(e,...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}}off(r,t){var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}};const wy=100/6,sr={passive:!1};function Zf(r,t){return r===1?wy:r===2?t:1}var Ay=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Lt(this,"touchStart",{x:0,y:0});Lt(this,"lastDelta",{x:0,y:0});Lt(this,"window",{width:0,height:0});Lt(this,"emitter",new Pp);Lt(this,"onTouchStart",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Lt(this,"onTouchMove",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Lt(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Lt(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r;const i=Zf(n,this.window.width),s=Zf(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Lt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,sr),this.element.addEventListener("touchstart",this.onTouchStart,sr),this.element.addEventListener("touchmove",this.onTouchMove,sr),this.element.addEventListener("touchend",this.onTouchEnd,sr)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,sr),this.element.removeEventListener("touchstart",this.onTouchStart,sr),this.element.removeEventListener("touchmove",this.onTouchMove,sr),this.element.removeEventListener("touchend",this.onTouchEnd,sr)}};const Jf=r=>Math.min(1,1.001-2**(-10*r));var Cy=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:f=h==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:p,virtualScroll:m,overscroll:y=!0,autoRaf:x=!1,anchors:S=!1,autoToggle:R=!1,allowNestedScroll:A=!1,__experimental__naiveDimensions:E=!1,naiveDimensions:P=E,stopInertiaOnNavigate:N=!1,respectReducedMotion:v=!0}={}){Lt(this,"_isScrolling",!1);Lt(this,"_isStopped",!1);Lt(this,"_isLocked",!1);Lt(this,"_preventNextNativeScrollEvent",!1);Lt(this,"_resetVelocityTimeout",null);Lt(this,"_rafId",null);Lt(this,"_isDraggingSelection",!1);Lt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Lt(this,"isTouching");Lt(this,"isIos");Lt(this,"time",0);Lt(this,"userData",{});Lt(this,"lastVelocity",0);Lt(this,"velocity",0);Lt(this,"direction",0);Lt(this,"options");Lt(this,"targetScroll");Lt(this,"animatedScroll");Lt(this,"animate",new Ey);Lt(this,"emitter",new Pp);Lt(this,"dimensions");Lt(this,"virtualScroll");Lt(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Lt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Lt(this,"onTransitionEnd",r=>{var t;(t=r.propertyName)!=null&&t.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Lt(this,"onClick",r=>{const t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){const n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Lt(this,"onPointerDown",r=>{r.button===1&&this.reset()});Lt(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(_=>{var g,p,m,y,x;return _ instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(_))||((g=_.hasAttribute)==null?void 0:g.call(_,"data-lenis-prevent"))||u==="vertical"&&((p=_.hasAttribute)==null?void 0:p.call(_,"data-lenis-prevent-vertical"))||u==="horizontal"&&((m=_.hasAttribute)==null?void 0:m.call(_,"data-lenis-prevent-horizontal"))||i&&((y=_.hasAttribute)==null?void 0:y.call(_,"data-lenis-prevent-touch"))||s&&((x=_.hasAttribute)==null?void 0:x.call(_,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(_,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let h=e;this.options.gestureOrientation==="both"?h=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(h=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const f=i&&this.options.syncTouch,d=i&&n.type==="touchend";d&&(h=Math.sign(h)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+h,{programmatic:!1,...f?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Lt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Lt(this,"raf",r=>{const t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Kf,window.lenis||(window.lenis={}),window.lenis.version=Kf,h==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Jf:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:h,touchMultiplier:d,wheelMultiplier:_,autoResize:g,prevent:p,virtualScroll:m,overscroll:y,autoRaf:x,anchors:S,autoToggle:R,allowNestedScroll:A,naiveDimensions:P,stopInertiaOnNavigate:N,respectReducedMotion:v},this.dimensions=new by(r,t,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Ay(e,{touchMultiplier:d,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){const t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;const e=r.targetTouches[0]??r.changedTouches[0];if(!e)return!1;const n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;const i=n[0],s=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:h}={}){if(this.prefersReducedMotion&&(i?e=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let f=r,d=t;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let _=null;if(typeof f=="string"?(_=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),_||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof HTMLElement&&(f!=null&&f.nodeType)&&(_=f),_){if(this.options.wrapper!==window){const S=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?S.left:S.top}const g=_.getBoundingClientRect(),p=getComputedStyle(_),m=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),y=getComputedStyle(this.rootElement),x=this.isHorizontal?Number.parseFloat(y.scrollPaddingLeft):Number.parseFloat(y.scrollPaddingTop);f=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(x)?0:x)}}if(typeof f=="number"){if(f+=d,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const _=f-this.animatedScroll;_>this.limit/2?f-=this.limit:_<-this.limit/2&&(f+=this.limit)}}else f=Rp(0,f,this.limit);if(f===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=h??{},e){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=f),typeof o=="number"&&typeof a!="function"?a=Jf:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(_,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=_-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=_,this.setScroll(this.scroll),i&&(this.targetScroll=_),g||this.emit(),g&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,o,a,l,c,u,h,f,d,_;if(n-(i.time??0)>2e3){i.time=Date.now();const A=window.getComputedStyle(r);if(i.computedStyle=A,s=["auto","overlay","scroll"].includes(A.overflowX),o=["auto","overlay","scroll"].includes(A.overflowY),c=["auto"].includes(A.overscrollBehaviorX),u=["auto"].includes(A.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;h=r.scrollWidth,f=r.scrollHeight,d=r.clientWidth,_=r.clientHeight,a=h>d,l=f>_,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=h,i.scrollHeight=f,i.clientWidth=d,i.clientHeight=_,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=u}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,h=i.scrollWidth,f=i.scrollHeight,d=i.clientWidth,_=i.clientHeight,c=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const g=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";let p,m,y,x,S,R;if(g==="horizontal")p=Math.round(r.scrollLeft),m=h-d,y=t,x=s,S=a,R=c;else if(g==="vertical")p=Math.round(r.scrollTop),m=f-_,y=e,x=o,S=l,R=u;else return!1;return!R&&(p>=m||p<=0)?!0:(y>0?p<m:p>0)&&x&&S}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?yy(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};function Fi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Lp(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var qn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},$o={duration:.5,overwrite:!1,delay:0},gh,en,Ce,ni=1e8,ye=1/ni,bu=Math.PI*2,Ry=bu/4,Py=0,Dp=Math.sqrt,Ly=Math.cos,Dy=Math.sin,Je=function(t){return typeof t=="string"},Ue=function(t){return typeof t=="function"},$i=function(t){return typeof t=="number"},vh=function(t){return typeof t>"u"},Ci=function(t){return typeof t=="object"},Cn=function(t){return t!==!1},xh=function(){return typeof window<"u"},Ia=function(t){return Ue(t)||Je(t)},Ip=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},fn=Array.isArray,Iy=/random\([^)]+\)/g,Uy=/,\s*/g,jf=/(?:-?\.?\d|\.)+/gi,Up=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ps=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Sc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Np=/[+-]=-?[.\d]+/,Ny=/[^,'"\[\]\s]+/gi,Oy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Le,xi,wu,Sh,$n={},ml={},Op,Fp=function(t){return(ml=Js(t,$n))&&Dn},Mh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ko=function(t,e){return!e&&console.warn(t)},Bp=function(t,e){return t&&($n[t]=e)&&ml&&(ml[t]=e)||$n},Zo=function(){return 0},Fy={suppressEvents:!0,isStart:!0,kill:!1},tl={suppressEvents:!0,kill:!1},By={suppressEvents:!0},yh={},pr=[],Au={},zp,kn={},Mc={},Qf=30,el=[],Eh="",Th=function(t){var e=t[0],n,i;if(Ci(e)||Ue(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=el.length;i--&&!el[i].targetTest(e););n=el[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new am(t[i],n)))||t.splice(i,1);return t},Xr=function(t){return t._gsap||Th(ii(t))[0]._gsap},kp=function(t,e,n){return(n=t[e])&&Ue(n)?t[e]():vh(n)&&t.getAttribute&&t.getAttribute(e)||n},Rn=function(t,e){return(t=t.split(",")).forEach(e)||t},Be=function(t){return Math.round(t*1e5)/1e5||0},Pe=function(t){return Math.round(t*1e7)/1e7||0},Fs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},zy=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},_l=function(){var t=pr.length,e=pr.slice(0),n,i;for(Au={},pr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},bh=function(t){return!!(t._initted||t._startAt||t.add)},Hp=function(t,e,n,i){pr.length&&!en&&_l(),t.render(e,n,!!(en&&e<0&&bh(t))),pr.length&&!en&&_l()},Vp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Ny).length<2?e:Je(t)?t.trim():t},Gp=function(t){return t},Kn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},ky=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Js=function(t,e){for(var n in e)t[n]=e[n];return t},td=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Ci(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},gl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Po=function(t){var e=t.parent||Le,n=t.keyframes?ky(fn(t.keyframes)):Kn;if(Cn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Hy=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Wp=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Ll=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},vr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Yr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Vy=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Cu=function(t,e,n,i){return t._startAt&&(en?t._startAt.revert(tl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Gy=function r(t){return!t||t._ts&&r(t.parent)},ed=function(t){return t._repeat?js(t._tTime,t=t.duration()+t._rDelay)*t:0},js=function(t,e){var n=Math.floor(t=Pe(t/e));return t&&n===t?n-1:n},vl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Dl=function(t){return t._end=Pe(t._start+(t._tDur/Math.abs(t._ts||t._rts||ye)||0))},Il=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Pe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Dl(t),n._dirty||Yr(n,t)),t},Xp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=vl(t.rawTime(),e),(!e._dur||aa(0,e.totalDuration(),n)-e._tTime>ye)&&e.render(n,!0)),Yr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ye}},yi=function(t,e,n,i){return e.parent&&vr(e),e._start=Pe(($i(n)?n:n||t!==Le?jn(t,n,e):t._time)+e._delay),e._end=Pe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Wp(t,e,"_first","_last",t._sort?"_start":0),Ru(e)||(t._recent=e),i||Xp(t,e),t._ts<0&&Il(t,t._tTime),t},Yp=function(t,e){return($n.ScrollTrigger||Mh("scrollTrigger",e))&&$n.ScrollTrigger.create(e,t)},qp=function(t,e,n,i,s){if(Ah(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!en&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&zp!==Gn.frame)return pr.push(t),t._lazy=[s,i],1},Wy=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Ru=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Xy=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&Wy(t)&&!(!t._initted&&Ru(t))||(t._ts<0||t._dp._ts<0)&&!Ru(t))?0:1,a=t._rDelay,l=0,c,u,h;if(a&&t._repeat&&(l=aa(0,t._tDur,e),u=js(l,a),t._yoyo&&u&1&&(o=1-o),u!==js(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||en||i||t._zTime===ye||!e&&t._zTime){if(!t._initted&&qp(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?ye:0),n||(n=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Cu(t,e,n,!0),t._onUpdate&&!n&&Xn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Xn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&vr(t,1),!n&&!en&&(Xn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Yy=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Qs=function(t,e,n,i){var s=t._repeat,o=Pe(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Pe(o*(s+1)+t._rDelay*s):o,a>0&&!i&&Il(t,t._tTime=t._tDur*a),t.parent&&Dl(t),n||Yr(t.parent,t),t},nd=function(t){return t instanceof Tn?Yr(t):Qs(t,t._dur)},qy={_start:0,endTime:Zo,totalDuration:Zo},jn=function r(t,e,n){var i=t.labels,s=t._recent||qy,o=t.duration()>=ni?s.endTime(!1):t._dur,a,l,c;return Je(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(fn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Lo=function(t,e,n){var i=$i(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Cn(l.vars.inherit)&&l.parent;o.immediateRender=Cn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Ve(e[0],o,e[s+1])},Er=function(t,e){return t||t===0?e(t):e},aa=function(t,e,n){return n<t?t:n>e?e:n},ln=function(t,e){return!Je(t)||!(e=Oy.exec(t))?"":e[1]},$y=function(t,e,n){return Er(n,function(i){return aa(t,e,i)})},Pu=[].slice,$p=function(t,e){return t&&Ci(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ci(t[0]))&&!t.nodeType&&t!==xi},Ky=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Je(i)&&!e||$p(i,1)?(s=n).push.apply(s,ii(i)):n.push(i)})||n},ii=function(t,e,n){return Ce&&!e&&Ce.selector?Ce.selector(t):Je(t)&&!n&&(wu||!to())?Pu.call((e||Sh).querySelectorAll(t),0):fn(t)?Ky(t,n):$p(t)?Pu.call(t,0):t?[t]:[]},Lu=function(t){return t=ii(t)[0]||Ko("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return ii(e,n.querySelectorAll?n:n===t?Ko("Invalid scope")||Sh.createElement("div"):t)}},Kp=function(t){return t.sort(function(){return .5-Math.random()})},Zp=function(t){if(Ue(t))return t;var e=Ci(t)?t:{each:t},n=qr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,u=i,h=i;return Je(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,_){var g=(_||e).length,p=o[g],m,y,x,S,R,A,E,P,N;if(!p){if(N=e.grid==="auto"?0:(e.grid||[1,ni])[1],!N){for(E=-ni;E<(E=_[N++].getBoundingClientRect().left)&&N<g;);N<g&&N--}for(p=o[g]=[],m=l?Math.min(N,g)*u-.5:i%N,y=N===ni?0:l?g*h/N-.5:i/N|0,E=0,P=ni,A=0;A<g;A++)x=A%N-m,S=y-(A/N|0),p[A]=R=c?Math.abs(c==="y"?S:x):Dp(x*x+S*S),R>E&&(E=R),R<P&&(P=R);i==="random"&&Kp(p),p.max=E-P,p.min=P,p.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(N>g?g-1:c?c==="y"?g/N:N:Math.max(N,g/N))||0)*(i==="edges"?-1:1),p.b=g<0?s-g:s,p.u=ln(e.amount||e.each)||0,n=n&&g<0?lE(n):n}return g=(p[f]-p.min)/p.max||0,Pe(p.b+(n?n(g):g)*p.v)+p.u}},Du=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Pe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+($i(n)?0:ln(n))}},Jp=function(t,e){var n=fn(t),i,s;return!n&&Ci(t)&&(i=n=t.radius||ni,t.values?(t=ii(t.values),(s=!$i(t[0]))&&(i*=i)):t=Du(t.increment)),Er(e,n?Ue(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ni,u=0,h=t.length,f,d;h--;)s?(f=t[h].x-a,d=t[h].y-l,f=f*f+d*d):f=Math.abs(t[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?t[u]:o,s||u===o||$i(o)?u:u+ln(o)}:Du(t))},jp=function(t,e,n,i){return Er(fn(t)?!e:n===!0?!!(n=0):!i,function(){return fn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Zy=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},Jy=function(t,e){return function(n){return t(parseFloat(n))+(e||ln(n))}},jy=function(t,e,n){return tm(t,e,0,1,n)},Qp=function(t,e,n){return Er(n,function(i){return t[~~e(i)]})},Qy=function r(t,e,n){var i=e-t;return fn(t)?Qp(t,r(0,t.length),e):Er(n,function(s){return(i+(s-t)%i)%i+t})},tE=function r(t,e,n){var i=e-t,s=i*2;return fn(t)?Qp(t,r(0,t.length-1),e):Er(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Jo=function(t){return t.replace(Iy,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Uy);return jp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},tm=function(t,e,n,i,s){var o=e-t,a=i-n;return Er(s,function(l){return n+((l-t)/o*a||0)})},eE=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=Je(t),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(fn(t)&&!fn(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(r(t[c-1],t[c]));h--,s=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=e}else i||(t=Js(fn(t)?[]:{},t));if(!u){for(l in e)wh.call(a,t,l,"get",e[l]);s=function(_){return Ph(_,a)||(o?t.p:t)}}}return Er(n,s)},id=function(t,e,n){var i=t.labels,s=ni,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Xn=function(t,e,n){var i=t.vars,s=i[e],o=Ce,a=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&pr.length&&_l(),a&&(Ce=a),u=l?s.apply(c,l):s.call(c),Ce=o,u},xo=function(t){return vr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!en),t.progress()<1&&Xn(t,"onInterrupt"),t},Ls,em=[],nm=function(t){if(t)if(t=!t.name&&t.default||t,xh()||t.headless){var e=t.name,n=Ue(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Zo,render:Ph,add:wh,kill:vE,modifier:gE,rawVars:0},o={targetTest:0,get:0,getSetter:Rh,aliases:{},register:0};if(to(),t!==i){if(kn[e])return;Kn(i,Kn(gl(t,s),o)),Js(i.prototype,Js(s,gl(t,o))),kn[i.prop=e]=i,t.targetTest&&(el.push(i),yh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Bp(e,i),t.register&&t.register(Dn,i,Pn)}else em.push(t)},Me=255,So={aqua:[0,Me,Me],lime:[0,Me,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Me],navy:[0,0,128],white:[Me,Me,Me],olive:[128,128,0],yellow:[Me,Me,0],orange:[Me,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Me,0,0],pink:[Me,192,203],cyan:[0,Me,Me],transparent:[Me,Me,Me,0]},yc=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Me+.5|0},im=function(t,e,n){var i=t?$i(t)?[t>>16,t>>8&Me,t&Me]:0:So.black,s,o,a,l,c,u,h,f,d,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),So[t])i=So[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Me,i&Me,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Me,t&Me]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(jf),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=yc(l+1/3,s,o),i[1]=yc(l,s,o),i[2]=yc(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Up),n&&i.length<4&&(i[3]=1),i}else i=t.match(jf)||So.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/Me,o=i[1]/Me,a=i[2]/Me,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},rm=function(t){var e=[],n=[],i=-1;return t.split(mr).forEach(function(s){var o=s.match(Ps)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},rd=function(t,e,n){var i="",s=(t+i).match(mr),o=e?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=im(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=rm(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(mr,"1").split(Ps),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(mr),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},mr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in So)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),nE=/hsl[a]?\(/,sm=function(t){var e=t.join(" "),n;if(mr.lastIndex=0,mr.test(e))return n=nE.test(e),t[1]=rd(t[1],n),t[0]=rd(t[0],n,rm(t[1])),!0},jo,Gn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,_=function g(p){var m=r()-i,y=p===!0,x,S,R,A;if((m>t||m<0)&&(n+=m-e),i+=m,R=i-n,x=R-o,(x>0||y)&&(A=++h.frame,f=R-h.time*1e3,h.time=R=R/1e3,o+=x+(x>=s?4:s-x),S=1),y||(l=c(g)),S)for(d=0;d<a.length;d++)a[d](R,f,A,p)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Op&&(!wu&&xh()&&(xi=wu=window,Sh=xi.document||{},$n.gsap=Dn,(xi.gsapVersions||(xi.gsapVersions=[])).push(Dn.version),Fp(ml||xi.GreenSockGlobals||!xi.gsap&&xi||{}),em.forEach(nm)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},jo=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),jo=0,c=Zo},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),o=h.time*1e3+s},add:function(p,m,y){var x=m?function(S,R,A,E){p(S,R,A,E),h.remove(x)}:p;return h.remove(p),a[y?"unshift":"push"](x),to(),x},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},h}(),to=function(){return!jo&&Gn.wake()},ue={},iE=/^[\d.\-M][\d.\-,\s]/,rE=/["']/g,sE=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(rE,"").trim():+c,i=l.substr(a+1).trim();return e},oE=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},aE=function(t){var e=(t+"").split("("),n=ue[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[sE(e[1])]:oE(t).split(",").map(Vp)):ue._CE&&iE.test(t)?ue._CE("",t):n},lE=function(t){return function(e){return 1-t(1-e)}},qr=function(t,e){return t&&(Ue(t)?t:ue[t]||aE(t))||e},rs=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Rn(t,function(a){ue[a]=$n[a]=s,ue[o=a.toLowerCase()]=n;for(var l in s)ue[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ue[a+"."+l]=s[l]}),s},om=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ec=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/bu*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Dy((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:om(a);return s=bu/s,l.config=function(c,u){return r(t,c,u)},l},Tc=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:om(n);return i.config=function(s){return r(t,s)},i};Rn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;rs(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ue.Linear.easeNone=ue.none=ue.Linear.easeIn;rs("Elastic",Ec("in"),Ec("out"),Ec());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};rs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);rs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});rs("Circ",function(r){return-(Dp(1-r*r)-1)});rs("Sine",function(r){return r===1?1:-Ly(r*Ry)+1});rs("Back",Tc("in"),Tc("out"),Tc());ue.SteppedEase=ue.steps=$n.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-ye;return function(a){return((i*aa(0,o,a)|0)+s)*n}}};$o.ease=ue["quad.out"];Rn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Eh+=r+","+r+"Params,"});var am=function(t,e){this.id=Py++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:kp,this.set=e?e.getSetter:Rh},Qo=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Qs(this,+e.duration,1,1),this.data=e.data,Ce&&(this._ctx=Ce,Ce.data.push(this)),jo||Gn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Qs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(to(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Il(this,n),!s._dp||s.parent||Xp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&yi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ye||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Hp(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ed(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ed(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?js(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ye?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?vl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ye?0:this._rts,this.totalTime(aa(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Dl(this),Vy(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(to(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ye&&(this._tTime-=ye)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Pe(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&yi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Cn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?vl(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=By);var i=en;return en=n,bh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),en=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,nd(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,nd(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(jn(this,n),Cn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Cn(i)),this._dur||(this._zTime=-ye),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ye:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ye,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ye)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Ue(n)?n:Gp,l=function(){var u=i.then;i.then=null,s&&s(),Ue(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){xo(this)},r}();Kn(Qo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ye,_prom:0,_ps:!1,_rts:1});var Tn=function(r){Lp(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Cn(n.sortChildren),Le&&yi(n.parent||Le,Fi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Yp(Fi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Lo(0,arguments,this),this},e.from=function(i,s,o){return Lo(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Lo(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,Po(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ve(i,s,jn(this,o),1),this},e.call=function(i,s,o){return yi(this,Ve.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Ve(i,o,jn(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Po(o).immediateRender=Cn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},e.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,Po(a).immediateRender=Cn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Pe(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,p,m,y,x,S,R,A,E;if(this!==Le&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,S=this._start,x=this._ts,m=!x,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(f=Pe(u%p),u===l?(g=this._repeat,f=c):(R=Pe(u/p),g=~~R,g&&g===R&&(f=c,g--),f>c&&(f=c)),R=js(this._tTime,p),!a&&this._tTime&&R!==g&&this._tTime-R*p-this._dur<=0&&(R=g),A&&g&1&&(f=c-f,E=1),g!==R&&!this._lock){var P=A&&R&1,N=P===(A&&g&1);if(g<R&&(P=!P),a=P?0:u%c?c:u,this._lock=1,this.render(a||(E?0:Pe(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Xn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,R=g),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,N&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Yy(this,Pe(a),Pe(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!R&&(Xn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!m){y=0,_&&(u+=this._zTime=-ye);break}}d=_}else{d=this._last;for(var v=i<0?i:f;d;){if(_=d._prev,(d._act||v<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,s,o||en&&bh(d)),f!==this._time||!this._ts&&!m){y=0,_&&(u+=this._zTime=v?-ye:ye);break}}d=_}}if(y&&!s&&(this.pause(),y.render(f>=a?0:-ye)._zTime=f>=a?1:-1,this._ts))return this._start=S,Dl(this),this.render(i,s,o);this._onUpdate&&!s&&Xn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&vr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Xn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if($i(s)||(s=jn(this,s,i)),!(i instanceof Qo)){if(fn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Je(i))return this.addLabel(i,s);if(Ue(i))i=Ve.delayedCall(0,i);else return this}return this!==i?yi(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ni);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ve?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return Je(i)?this.removeLabel(i):Ue(i)?this.killTweensOf(i):(i.parent===this&&Ll(this,i),i===this._recent&&(this._recent=this._last),Yr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Pe(Gn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=jn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=Ve.delayedCall(0,s||Zo,o);return a.data="isPause",this._hasPause=1,yi(this,a,jn(this,i))},e.removePause=function(i){var s=this._first;for(i=jn(this,i);s;)s._start===i&&s.data==="isPause"&&vr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)lr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=ii(i),l=this._first,c=$i(s),u;l;)l instanceof Ve?zy(l._targets,a)&&(c?(!lr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=jn(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=Ve.to(o,Kn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ye,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&Qs(_,p,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,Kn({startAt:{time:jn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),id(this,jn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),id(this,jn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ye)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Pe(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Yr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Yr(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=ni,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,yi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Pe(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Qs(o,o===Le&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Le._ts&&(Hp(Le,vl(i,Le)),zp=Gn.frame),Gn.frame>=Qf){Qf+=qn.autoSleep||120;var s=Le._first;if((!s||!s._ts)&&qn.autoSleep&&Gn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Gn.sleep()}}},t}(Qo);Kn(Tn.prototype,{_lock:0,_hasPause:0,_forcing:0});var cE=function(t,e,n,i,s,o,a){var l=new Pn(this._pt,t,e,0,1,dm,null,s),c=0,u=0,h,f,d,_,g,p,m,y;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Jo(i)),o&&(y=[n,i],o(y,t,e),n=y[0],i=y[1]),f=n.match(Sc)||[];h=Sc.exec(i);)_=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?Fs(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=Sc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Np.test(i)||m)&&(l.e=0),this._pt=l,l},wh=function(t,e,n,i,s,o,a,l,c,u){Ue(i)&&(i=i(s||0,t,o));var h=t[e],f=n!=="get"?n:Ue(h)?c?t[e.indexOf("set")||!Ue(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,d=Ue(h)?c?pE:hm:Ch,_;if(Je(i)&&(~i.indexOf("random(")&&(i=Jo(i)),i.charAt(1)==="="&&(_=Fs(f,i)+(ln(f)||0),(_||_===0)&&(i=_))),!u||f!==i||Iu)return!isNaN(f*i)&&i!==""?(_=new Pn(this._pt,t,e,+f||0,i-(f||0),typeof h=="boolean"?_E:fm,0,d),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!h&&!(e in t)&&Mh(e,i),cE.call(this,t,e,f,i,d,l||qn.stringFilter,c))},uE=function(t,e,n,i,s){if(Ue(t)&&(t=Do(t,s,e,n,i)),!Ci(t)||t.style&&t.nodeType||fn(t)||Ip(t))return Je(t)?Do(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Do(t[a],s,e,n,i);return o},lm=function(t,e,n,i,s,o){var a,l,c,u;if(kn[t]&&(a=new kn[t]).init(s,a.rawVars?e[t]:uE(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Pn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Ls))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},lr,Iu,Ah=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=t._dur,g=t._startAt,p=t._targets,m=t.parent,y=m&&m.data==="nested"?m.vars.targets:p,x=t._overwrite==="auto"&&!gh,S=t.timeline,R=i.easeReverse||h,A,E,P,N,v,T,O,k,W,q,z,Y,X;if(S&&(!f||!s)&&(s="none"),t._ease=qr(s,$o.ease),t._rEase=R&&(qr(R)||t._ease),t._from=!S&&!!i.runBackwards,t._from&&(t.ratio=1),!S||f&&!i.stagger){if(k=p[0]?Xr(p[0]).harness:0,Y=k&&i[k.prop],A=gl(i,yh),g&&(g._zTime<0&&g.progress(1),e<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&_?tl:Fy),g._lazy=0),o){if(vr(t._startAt=Ve.set(p,Kn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&Cn(l),startAt:null,delay:0,onUpdate:c&&function(){return Xn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(en||!a&&!d)&&t._startAt.revert(tl),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&_&&!g){if(e&&(a=!1),P=Kn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Cn(l),immediateRender:a,stagger:0,parent:m},A),Y&&(P[k.prop]=Y),vr(t._startAt=Ve.set(p,P)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(en?t._startAt.revert(tl):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,ye,ye);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&Cn(l)||l&&!_,E=0;E<p.length;E++){if(v=p[E],O=v._gsap||Th(p)[E]._gsap,t._ptLookup[E]=q={},Au[O.id]&&pr.length&&_l(),z=y===p?E:y.indexOf(v),k&&(W=new k).init(v,Y||A,t,z,y)!==!1&&(t._pt=N=new Pn(t._pt,v,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(ot){q[ot]=N}),W.priority&&(T=1)),!k||Y)for(P in A)kn[P]&&(W=lm(P,A,t,z,v,y))?W.priority&&(T=1):q[P]=N=wh.call(t,v,P,"get",A[P],z,y,0,i.stringFilter);t._op&&t._op[E]&&t.kill(v,t._op[E]),x&&t._pt&&(lr=t,Le.killTweensOf(v,q,t.globalTime(e)),X=!t.parent,lr=0),t._pt&&l&&(Au[O.id]=1)}T&&pm(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!X,f&&e<=0&&S.render(ni,!0,!0)},hE=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(u=f[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Iu=1,t.vars[e]="+=0",Ah(t,a),Iu=0,l?Ko(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Be(n)+ln(h.e)),h.b&&(h.b=u.s+ln(h.b))},fE=function(t,e){var n=t[0]?Xr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Js({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},dE=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(fn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Do=function(t,e,n,i,s){return Ue(t)?t.call(e,n,i,s):Je(t)&&~t.indexOf("random(")?Jo(t):t},cm=Eh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",um={};Rn(cm+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return um[r]=1});var Ve=function(r){Lp(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Po(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=i.parent||Le,y=(fn(n)||Ip(n)?$i(n[0]):"length"in i)?[n]:ii(n),x,S,R,A,E,P,N,v;if(a._targets=y.length?Th(y):Ko("GSAP target "+n+" not found. https://gsap.com",!qn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||Ia(c)||Ia(u)){i=a.vars;var T=i.easeReverse||i.yoyoEase;if(x=a.timeline=new Tn({data:"nested",defaults:g||{},targets:m&&m.data==="nested"?m.vars.targets:y}),x.kill(),x.parent=x._dp=Fi(a),x._start=0,f||Ia(c)||Ia(u)){if(A=y.length,N=f&&Zp(f),Ci(f))for(E in f)~cm.indexOf(E)&&(v||(v={}),v[E]=f[E]);for(S=0;S<A;S++)R=gl(i,um),R.stagger=0,T&&(R.easeReverse=T),v&&Js(R,v),P=y[S],R.duration=+Do(c,Fi(a),S,P,y),R.delay=(+Do(u,Fi(a),S,P,y)||0)-a._delay,!f&&A===1&&R.delay&&(a._delay=u=R.delay,a._start+=u,R.delay=0),x.to(P,R,N?N(S,P,y):0),x._ease=ue.none;x.duration()?c=u=0:a.timeline=0}else if(_){Po(Kn(x.vars.defaults,{ease:"none"})),x._ease=qr(_.ease||i.ease||"none");var O=0,k,W,q;if(fn(_))_.forEach(function(z){return x.to(y,z,">")}),x.duration();else{R={};for(E in _)E==="ease"||E==="easeEach"||dE(E,_[E],R,_.easeEach);for(E in R)for(k=R[E].sort(function(z,Y){return z.t-Y.t}),O=0,S=0;S<k.length;S++)W=k[S],q={ease:W.e,duration:(W.t-(S?k[S-1].t:0))/100*c},q[E]=W.v,x.to(y,q,O),O+=q.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!gh&&(lr=Fi(a),Le.killTweensOf(y),lr=0),yi(m,Fi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!_&&a._start===Pe(m._time)&&Cn(h)&&Gy(Fi(a))&&m.data!=="nested")&&(a._tTime=-ye,a.render(Math.max(0,-u)||0)),p&&Yp(Fi(a),p),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-ye&&!u?l:i<ye?0:i,f,d,_,g,p,m,y,x;if(!c)Xy(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,o);if(f=Pe(h%g),h===l?(_=this._repeat,f=c):(p=Pe(h/g),_=~~p,_&&_===p?(f=c,_--):f>c&&(f=c)),m=this._yoyo&&_&1,m&&(f=c-f),p=js(this._tTime,g),f===a&&!o&&this._initted&&_===p)return this._tTime=h,this;_!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(Pe(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(qp(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var S=f<a;if(S!==this._inv){var R=S?a:c-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=R?(S?-1:1)/R:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(f/c);if(this._from&&(this.ratio=y=1-y),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!s&&!p&&(Xn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;x&&x.render(i<0?i:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Cu(this,i,s,o),Xn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&Xn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Cu(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&vr(this,1),!s&&!(u&&!a)&&(h||a||m)&&(Xn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){jo||Gn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Ah(this,c),u=this._ease(c/this._dur),hE(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Il(this,0),this.parent||Wp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?xo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!en),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,lr&&lr.vars.overwrite!==!0)._first||xo(this),this.parent&&o!==this.timeline.totalDuration()&&Qs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ii(i):a,c=this._ptLookup,u=this._pt,h,f,d,_,g,p,m;if((!s||s==="all")&&Hy(a,l))return s==="all"&&(this._pt=0),xo(this);for(h=this._op=this._op||[],s!=="all"&&(Je(s)&&(g={},Rn(s,function(y){return g[y]=1}),s=g),s=fE(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],s==="all"?(h[m]=s,_=f,d={}):(d=h[m]=h[m]||{},_=s);for(g in _)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&Ll(this,p,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&xo(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Lo(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Lo(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Le.killTweensOf(i,s,o)},t}(Qo);Kn(Ve.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Rn("staggerTo,staggerFrom,staggerFromTo",function(r){Ve[r]=function(){var t=new Tn,e=Pu.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Ch=function(t,e,n){return t[e]=n},hm=function(t,e,n){return t[e](n)},pE=function(t,e,n,i){return t[e](i.fp,n)},mE=function(t,e,n){return t.setAttribute(e,n)},Rh=function(t,e){return Ue(t[e])?hm:vh(t[e])&&t.setAttribute?mE:Ch},fm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},_E=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},dm=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Ph=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},gE=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},vE=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Ll(this,e,"_pt"):e.dep||(n=1),e=i;return!n},xE=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},pm=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Pn=function(){function r(e,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||fm,this.d=l||this,this.set=c||Ch,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=xE,this.m=n,this.mt=s,this.tween=i},r}();Rn(Eh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return yh[r]=1});$n.TweenMax=$n.TweenLite=Ve;$n.TimelineLite=$n.TimelineMax=Tn;Le=new Tn({sortChildren:!1,defaults:$o,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});qn.stringFilter=sm;var $r=[],nl={},SE=[],sd=0,ME=0,bc=function(t){return(nl[t]||SE).map(function(e){return e()})},Uu=function(){var t=Date.now(),e=[];t-sd>2&&(bc("matchMediaInit"),$r.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=xi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),bc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),sd=t,bc("matchMedia"))},mm=function(){function r(e,n){this.selector=n&&Lu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=ME++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ue(n)&&(s=i,i=n,n=Ue);var o=this,a=function(){var c=Ce,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Lu(s)),Ce=o,h=i.apply(o,arguments),Ue(h)&&o._r.push(h),Ce=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Ue?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Ce;Ce=null,n(this),Ce=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ve&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Tn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ve)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=$r.length;o--;)$r[o].id===this.id&&$r.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),yE=function(){function r(e){this.contexts=[],this.scope=e,Ce&&Ce.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Ci(n)||(n={matches:n});var o=new mm(0,s||this.scope),a=o.conditions={},l,c,u;Ce&&!o.selector&&(o.selector=Ce.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=xi.matchMedia(n[c]),l&&($r.indexOf(o)<0&&$r.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Uu):l.addEventListener("change",Uu)));return u&&i(o,function(h){return o.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),xl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return nm(i)})},timeline:function(t){return new Tn(t)},getTweensOf:function(t,e){return Le.getTweensOf(t,e)},getProperty:function(t,e,n,i){Je(t)&&(t=ii(t)[0]);var s=Xr(t||{}).get,o=n?Gp:Vp;return n==="native"&&(n=""),t&&(e?o((kn[e]&&kn[e].get||s)(t,e,n,i)):function(a,l,c){return o((kn[a]&&kn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=ii(t),t.length>1){var i=t.map(function(u){return Dn.quickSetter(u,e,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}t=t[0]||{};var o=kn[e],a=Xr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var h=new o;Ls._pt=0,h.init(t,n?u+n:u,Ls,0,[t]),h.render(1,h),Ls._pt&&Ph(1,Ls)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var i,s=Dn.to(t,Kn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return Le.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=qr(t.ease,$o.ease)),td($o,t||{})},config:function(t){return td(qn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!kn[a]&&!$n[a]&&Ko(e+" effect requires "+a+" plugin.")}),Mc[e]=function(a,l,c){return n(ii(a),Kn(l||{},s),c)},o&&(Tn.prototype[e]=function(a,l,c){return this.add(Mc[e](a,Ci(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ue[t]=qr(e)},parseEase:function(t,e){return arguments.length?qr(t,e):ue},getById:function(t){return Le.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Tn(t),i,s;for(n.smoothChildTiming=Cn(t.smoothChildTiming),Le.remove(n),n._dp=0,n._time=n._tTime=Le._time,i=Le._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Ve&&i.vars.onComplete===i._targets[0]))&&yi(n,i,i._start-i._delay),i=s;return yi(Le,n,0),n},context:function(t,e){return t?new mm(t,e):Ce},matchMedia:function(t){return new yE(t)},matchMediaRefresh:function(){return $r.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Uu()},addEventListener:function(t,e){var n=nl[t]||(nl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=nl[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Qy,wrapYoyo:tE,distribute:Zp,random:jp,snap:Jp,normalize:jy,getUnit:ln,clamp:$y,splitColor:im,toArray:ii,selector:Lu,mapRange:tm,pipe:Zy,unitize:Jy,interpolate:eE,shuffle:Kp},install:Fp,effects:Mc,ticker:Gn,updateRoot:Tn.updateRoot,plugins:kn,globalTimeline:Le,core:{PropTween:Pn,globals:Bp,Tween:Ve,Timeline:Tn,Animation:Qo,getCache:Xr,_removeLinkedListItem:Ll,reverting:function(){return en},context:function(t){return t&&Ce&&(Ce.data.push(t),t._ctx=Ce),Ce},suppressOverwrites:function(t){return gh=t}}};Rn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return xl[r]=Ve[r]});Gn.add(Tn.updateRoot);Ls=xl.to({},{duration:0});var EE=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},TE=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=EE(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},wc=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Je(s)&&(l={},Rn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}TE(a,s)}}}},Dn=xl.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)en?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},wc("roundProps",Du),wc("modifiers"),wc("snap",Jp))||xl;Ve.version=Tn.version=Dn.version="3.15.0";Op=1;xh()&&to();ue.Power0;ue.Power1;ue.Power2;ue.Power3;ue.Power4;ue.Linear;ue.Quad;ue.Cubic;ue.Quart;ue.Quint;ue.Strong;ue.Elastic;ue.Back;ue.SteppedEase;ue.Bounce;ue.Sine;ue.Expo;ue.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var od,cr,Bs,Lh,Vr,ad,Dh,bE=function(){return typeof window<"u"},Ki={},Ur=180/Math.PI,zs=Math.PI/180,Ss=Math.atan2,ld=1e8,Ih=/([A-Z])/g,wE=/(left|right|width|margin|padding|x)/i,AE=/[\s,\(]\S/,Ei={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Nu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},CE=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},RE=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},PE=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},LE=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},_m=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},gm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},DE=function(t,e,n){return t.style[e]=n},IE=function(t,e,n){return t.style.setProperty(e,n)},UE=function(t,e,n){return t._gsap[e]=n},NE=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},OE=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},FE=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Ie="transform",Ln=Ie+"Origin",BE=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Ki&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Ei[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Bi(i,a)}):this.tfm[t]=o.x?o[t]:Bi(i,t),t===Ln&&(this.tfm.zOrigin=o.zOrigin);else return Ei.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Ie)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ln,e,"")),t=Ie}(s||e)&&this.props.push(t,e,s[t])},vm=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},zE=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Ih,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Dh(),(!s||!s.isStart)&&!n[Ie]&&(vm(n),i.zOrigin&&n[Ln]&&(n[Ln]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},xm=function(t,e){var n={target:t,props:[],revert:zE,save:BE};return t._gsap||Dn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Sm,Ou=function(t,e){var n=cr.createElementNS?cr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):cr.createElement(t);return n&&n.style?n:cr.createElement(t)},Yn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Ih,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,eo(e)||e,1)||""},cd="O,Moz,ms,Ms,Webkit".split(","),eo=function(t,e,n){var i=e||Vr,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(cd[o]+t in s););return o<0?null:(o===3?"ms":o>=0?cd[o]:"")+t},Fu=function(){bE()&&window.document&&(od=window,cr=od.document,Bs=cr.documentElement,Vr=Ou("div")||{style:{}},Ou("div"),Ie=eo(Ie),Ln=Ie+"Origin",Vr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Sm=!!eo("perspective"),Dh=Dn.core.reverting,Lh=1)},ud=function(t){var e=t.ownerSVGElement,n=Ou("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Bs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Bs.removeChild(n),s},hd=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Mm=function(t){var e,n;try{e=t.getBBox()}catch{e=ud(t),n=1}return e&&(e.width||e.height)||n||(e=ud(t)),e&&!e.width&&!e.x&&!e.y?{x:+hd(t,["x","cx","x1"])||0,y:+hd(t,["y","cy","y1"])||0,width:0,height:0}:e},ym=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Mm(t))},xr=function(t,e){if(e){var n=t.style,i;e in Ki&&e!==Ln&&(e=Ie),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Ih,"-$1").toLowerCase())):n.removeAttribute(e)}},ur=function(t,e,n,i,s,o){var a=new Pn(t._pt,e,n,0,1,o?gm:_m);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},fd={deg:1,rad:1,turn:1},kE={grid:1,flex:1},Sr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Vr.style,l=wE.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",_,g,p,m;if(i===o||!s||fd[i]||fd[o])return s;if(o!=="px"&&!f&&(s=r(t,e,n,"px")),m=t.getCTM&&ym(t),(d||o==="%")&&(Ki[e]||~e.indexOf("adius")))return _=m?t.getBBox()[l?"width":"height"]:t[u],Be(d?s/_*h:s/100*_);if(a[l?"width":"height"]=h+(f?o:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===cr||!g.appendChild)&&(g=cr.body),p=g._gsap,p&&d&&p.width&&l&&p.time===Gn.time&&!p.uncache)return Be(s/p.width*h);if(d&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=h+i,_=t[u],y?t.style[e]=y:xr(t,e)}else(d||o==="%")&&!kE[Yn(g,"display")]&&(a.position=Yn(t,"position")),g===t&&(a.position="static"),g.appendChild(Vr),_=Vr[u],g.removeChild(Vr),a.position="absolute";return l&&d&&(p=Xr(g),p.time=Gn.time,p.width=g[u]),Be(f?_*s/h:_&&s?h/_*s:0)},Bi=function(t,e,n,i){var s;return Lh||Fu(),e in Ei&&e!=="transform"&&(e=Ei[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ki[e]&&e!=="transform"?(s=ea(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Ml(Yn(t,Ln))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Sl[e]&&Sl[e](t,e,n)||Yn(t,e)||kp(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Sr(t,e,s,n)+n:s},HE=function(t,e,n,i){if(!n||n==="none"){var s=eo(e,t,1),o=s&&Yn(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=Yn(t,"borderTopColor"))}var a=new Pn(this._pt,t.style,e,0,1,dm),l=0,c=0,u,h,f,d,_,g,p,m,y,x,S,R;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Yn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=Yn(t,e)||i,g?t.style[e]=g:xr(t,e)),u=[n,i],sm(u),n=u[0],i=u[1],f=n.match(Ps)||[],R=i.match(Ps)||[],R.length){for(;h=Ps.exec(i);)p=h[0],y=i.substring(l,h.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),p!==(g=f[c++]||"")&&(d=parseFloat(g)||0,S=g.substr((d+"").length),p.charAt(1)==="="&&(p=Fs(d,p)+S),m=parseFloat(p),x=p.substr((m+"").length),l=Ps.lastIndex-x.length,x||(x=x||qn.units[e]||S,l===i.length&&(i+=x,a.e+=x)),S!==x&&(d=Sr(t,e,g,x)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:m-d,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?gm:_m;return Np.test(i)&&(a.e=0),this._pt=a,a},dd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},VE=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=dd[n]||n,e[1]=dd[i]||i,e.join(" ")},GE=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Ki[a]&&(l=1,a=a==="transformOrigin"?Ln:Ie),xr(n,a);l&&(xr(n,Ie),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ea(n,1),o.uncache=1,vm(i)))}},Sl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Pn(t._pt,e,n,0,0,GE);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},ta=[1,0,0,1,0,0],Em={},Tm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},pd=function(t){var e=Yn(t,Ie);return Tm(e)?ta:e.substr(7).match(Up).map(Be)},Uh=function(t,e){var n=t._gsap||Xr(t),i=t.style,s=pd(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ta:s):(s===ta&&!t.offsetParent&&t!==Bs&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Bs.appendChild(t)),s=pd(t),l?i.display=l:xr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Bs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Bu=function(t,e,n,i,s,o){var a=t._gsap,l=s||Uh(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],_=l[1],g=l[2],p=l[3],m=l[4],y=l[5],x=e.split(" "),S=parseFloat(x[0])||0,R=parseFloat(x[1])||0,A,E,P,N;n?l!==ta&&(E=d*p-_*g)&&(P=S*(p/E)+R*(-g/E)+(g*y-p*m)/E,N=S*(-_/E)+R*(d/E)-(d*y-_*m)/E,S=P,R=N):(A=Mm(t),S=A.x+(~x[0].indexOf("%")?S/100*A.width:S),R=A.y+(~(x[1]||x[0]).indexOf("%")?R/100*A.height:R)),i||i!==!1&&a.smooth?(m=S-c,y=R-u,a.xOffset=h+(m*d+y*g)-m,a.yOffset=f+(m*_+y*p)-y):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=R,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Ln]="0px 0px",o&&(ur(o,a,"xOrigin",c,S),ur(o,a,"yOrigin",u,R),ur(o,a,"xOffset",h,a.xOffset),ur(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",S+" "+R)},ea=function(t,e){var n=t._gsap||new am(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Yn(t,Ln)||"0",u,h,f,d,_,g,p,m,y,x,S,R,A,E,P,N,v,T,O,k,W,q,z,Y,X,ot,L,ut,zt,qt,$,et;return u=h=f=g=p=m=y=x=S=0,d=_=1,n.svg=!!(t.getCTM&&ym(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ie]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ie]!=="none"?l[Ie]:"")),i.scale=i.rotate=i.translate="none"),E=Uh(t,n.svg),n.svg&&(n.uncache?(X=t.getBBox(),c=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",Y=""):Y=!e&&t.getAttribute("data-svg-origin"),Bu(t,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,E)),R=n.xOrigin||0,A=n.yOrigin||0,E!==ta&&(T=E[0],O=E[1],k=E[2],W=E[3],u=q=E[4],h=z=E[5],E.length===6?(d=Math.sqrt(T*T+O*O),_=Math.sqrt(W*W+k*k),g=T||O?Ss(O,T)*Ur:0,y=k||W?Ss(k,W)*Ur+g:0,y&&(_*=Math.abs(Math.cos(y*zs))),n.svg&&(u-=R-(R*T+A*k),h-=A-(R*O+A*W))):(et=E[6],qt=E[7],L=E[8],ut=E[9],zt=E[10],$=E[11],u=E[12],h=E[13],f=E[14],P=Ss(et,zt),p=P*Ur,P&&(N=Math.cos(-P),v=Math.sin(-P),Y=q*N+L*v,X=z*N+ut*v,ot=et*N+zt*v,L=q*-v+L*N,ut=z*-v+ut*N,zt=et*-v+zt*N,$=qt*-v+$*N,q=Y,z=X,et=ot),P=Ss(-k,zt),m=P*Ur,P&&(N=Math.cos(-P),v=Math.sin(-P),Y=T*N-L*v,X=O*N-ut*v,ot=k*N-zt*v,$=W*v+$*N,T=Y,O=X,k=ot),P=Ss(O,T),g=P*Ur,P&&(N=Math.cos(P),v=Math.sin(P),Y=T*N+O*v,X=q*N+z*v,O=O*N-T*v,z=z*N-q*v,T=Y,q=X),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=Be(Math.sqrt(T*T+O*O+k*k)),_=Be(Math.sqrt(z*z+et*et)),P=Ss(q,z),y=Math.abs(P)>2e-4?P*Ur:0,S=$?1/($<0?-$:$):0),n.svg&&(Y=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Tm(Yn(t,Ie)),Y&&t.setAttribute("transform",Y))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Be(d),n.scaleY=Be(_),n.rotation=Be(g)+a,n.rotationX=Be(p)+a,n.rotationY=Be(m)+a,n.skewX=y+a,n.skewY=x+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Ln]=Ml(c)),n.xOffset=n.yOffset=0,n.force3D=qn.force3D,n.renderTransform=n.svg?XE:Sm?bm:WE,n.uncache=0,n},Ml=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ac=function(t,e,n){var i=ln(e);return Be(parseFloat(e)+parseFloat(Sr(t,"x",n+"px",i)))+i},WE=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,bm(t,e)},Pr="0deg",mo="0px",Lr=") ",bm=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,y=n.target,x=n.zOrigin,S="",R=m==="auto"&&t&&t!==1||m===!0;if(x&&(h!==Pr||u!==Pr)){var A=parseFloat(u)*zs,E=Math.sin(A),P=Math.cos(A),N;A=parseFloat(h)*zs,N=Math.cos(A),o=Ac(y,o,E*N*-x),a=Ac(y,a,-Math.sin(A)*-x),l=Ac(y,l,P*N*-x+x)}p!==mo&&(S+="perspective("+p+Lr),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(R||o!==mo||a!==mo||l!==mo)&&(S+=l!==mo||R?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Lr),c!==Pr&&(S+="rotate("+c+Lr),u!==Pr&&(S+="rotateY("+u+Lr),h!==Pr&&(S+="rotateX("+h+Lr),(f!==Pr||d!==Pr)&&(S+="skew("+f+", "+d+Lr),(_!==1||g!==1)&&(S+="scale("+_+", "+g+Lr),y.style[Ie]=S||"translate(0, 0)"},XE=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,y=n.forceCSS,x=parseFloat(o),S=parseFloat(a),R,A,E,P,N;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=zs,c*=zs,R=Math.cos(l)*h,A=Math.sin(l)*h,E=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(u*=zs,N=Math.tan(c-u),N=Math.sqrt(1+N*N),E*=N,P*=N,u&&(N=Math.tan(u),N=Math.sqrt(1+N*N),R*=N,A*=N)),R=Be(R),A=Be(A),E=Be(E),P=Be(P)):(R=h,P=f,A=E=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=Sr(d,"x",o,"px"),S=Sr(d,"y",a,"px")),(_||g||p||m)&&(x=Be(x+_-(_*R+g*E)+p),S=Be(S+g-(_*A+g*P)+m)),(i||s)&&(N=d.getBBox(),x=Be(x+i/100*N.width),S=Be(S+s/100*N.height)),N="matrix("+R+","+A+","+E+","+P+","+x+","+S+")",d.setAttribute("transform",N),y&&(d.style[Ie]=N)},YE=function(t,e,n,i,s){var o=360,a=Je(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ur:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*ld)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*ld)%o-~~(c/o)*o)),t._pt=f=new Pn(t._pt,e,n,i,c,CE),f.e=u,f.u="deg",t._props.push(n),f},md=function(t,e){for(var n in e)t[n]=e[n];return t},qE=function(t,e,n){var i=md({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ie]=e,a=ea(n,1),xr(n,Ie),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ie],o[Ie]=e,a=ea(n,1),o[Ie]=c);for(l in Ki)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=ln(c),_=ln(u),h=d!==_?Sr(n,l,c,_):parseFloat(c),f=parseFloat(u),t._pt=new Pn(t._pt,a,l,h,f-h,Nu),t._pt.u=_||0,t._props.push(l));md(a,i)};Rn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Sl[t>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(_){return Bi(a,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,d,h)}});var wm={name:"css",register:Fu,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,h,f,d,_,g,p,m,y,x,S,R,A,E,P,N;Lh||Fu(),this.styles=this.styles||xm(t),P=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(u=e[g],!(kn[g]&&lm(g,e,n,i,t,s)))){if(d=typeof u,_=Sl[g],d==="function"&&(u=u.call(n,i,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Jo(u)),_)_(this,t,g,u,n)&&(E=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",mr.lastIndex=0,mr.test(c)||(p=ln(c),m=ln(u),m?p!==m&&(c=Sr(t,g,c,m)+m):p&&(u+=p)),this.add(a,"setProperty",c,u,i,s,0,0,g),o.push(g),P.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],Je(c)&&~c.indexOf("random(")&&(c=Jo(c)),ln(c+"")||c==="auto"||(c+=qn.units[g]||ln(Bi(t,g))||""),(c+"").charAt(1)==="="&&(c=Bi(t,g))):c=Bi(t,g),f=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),g in Ei&&(g==="autoAlpha"&&(f===1&&Bi(t,"visibility")==="hidden"&&h&&(f=0),P.push("visibility",0,a.visibility),ur(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Ei[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in Ki,x){if(this.styles.save(g),N=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Yn(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var v=t.style.perspective;t.style.perspective=u,u=Yn(t,"perspective"),v?t.style.perspective=v:xr(t,"perspective")}h=parseFloat(u)}if(S||(R=t._gsap,R.renderTransform&&!e.parseTransform||ea(t,e.parseTransform),A=e.smoothOrigin!==!1&&R.smooth,S=this._pt=new Pn(this._pt,a,Ie,0,1,R.renderTransform,R,0,-1),S.dep=1),g==="scale")this._pt=new Pn(this._pt,R,"scaleY",R.scaleY,(y?Fs(R.scaleY,y+h):h)-R.scaleY||0,Nu),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(Ln,0,a[Ln]),u=VE(u),R.svg?Bu(t,u,0,A,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==R.zOrigin&&ur(this,R,"zOrigin",R.zOrigin,m),ur(this,a,g,Ml(c),Ml(u)));continue}else if(g==="svgOrigin"){Bu(t,u,1,A,0,this);continue}else if(g in Em){YE(this,R,g,f,y?Fs(f,y+u):u);continue}else if(g==="smoothOrigin"){ur(this,R,"smooth",R.smooth,u);continue}else if(g==="force3D"){R[g]=u;continue}else if(g==="transform"){qE(this,u,t);continue}}else g in a||(g=eo(g)||g);if(x||(h||h===0)&&(f||f===0)&&!AE.test(u)&&g in a)p=(c+"").substr((f+"").length),h||(h=0),m=ln(u)||(g in qn.units?qn.units[g]:p),p!==m&&(f=Sr(t,g,c,m)),this._pt=new Pn(this._pt,x?R:a,g,f,(y?Fs(f,y+h):h)-f,!x&&(m==="px"||g==="zIndex")&&e.autoRound!==!1?LE:Nu),this._pt.u=m||0,x&&N!==u?(this._pt.b=c,this._pt.e=N,this._pt.r=PE):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=RE);else if(g in a)HE.call(this,t,g,c,y?y+u:u);else if(g in t)this.add(t,g,c||t[g],y?y+u:u,i,s);else if(g!=="parseTransform"){Mh(g,u);continue}x||(g in a?P.push(g,0,a[g]):typeof t[g]=="function"?P.push(g,2,t[g]()):P.push(g,1,c||t[g])),o.push(g)}}E&&pm(this)},render:function(t,e){if(e.tween._time||!Dh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Bi,aliases:Ei,getSetter:function(t,e,n){var i=Ei[e];return i&&i.indexOf(",")<0&&(e=i),e in Ki&&e!==Ln&&(t._gsap.x||Bi(t,"x"))?n&&ad===n?e==="scale"?NE:UE:(ad=n||{})&&(e==="scale"?OE:FE):t.style&&!vh(t.style[e])?DE:~e.indexOf("-")?IE:Rh(t,e)},core:{_removeProperty:xr,_getMatrix:Uh}};Dn.utils.checkPrefix=eo;Dn.core.getStyleSaver=xm;(function(r,t,e,n){var i=Rn(r+","+t+","+e,function(s){Ki[s]=1});Rn(t,function(s){qn.units[s]="deg",Em[s]=1}),Ei[i[13]]=r+","+t,Rn(n,function(s){var o=s.split(":");Ei[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Rn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){qn.units[r]="px"});Dn.registerPlugin(wm);var Sn=Dn.registerPlugin(wm)||Dn;Sn.core.Tween;function $E(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function KE(r,t,e){return t&&$E(r.prototype,t),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var tn,il,Wn,hr,fr,ks,Am,Nr,Hs,Cm,Gi,ci,Rm,Pm=function(){return tn||typeof window<"u"&&(tn=window.gsap)&&tn.registerPlugin&&tn},Lm=1,Ds=[],re=[],wi=[],Io=Date.now,zu=function(t,e){return e},ZE=function(){var t=Hs.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,re),i.push.apply(i,wi),re=n,wi=i,zu=function(o,a){return e[o](a)}},_r=function(t,e){return~wi.indexOf(t)&&wi[wi.indexOf(t)+1][e]},Uo=function(t){return!!~Cm.indexOf(t)},mn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},dn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Ua="scrollLeft",Na="scrollTop",ku=function(){return Gi&&Gi.isPressed||re.cache++},yl=function(t,e){var n=function i(s){if(s||s===0){Lm&&(Wn.history.scrollRestoration="manual");var o=Gi&&Gi.isPressed;s=i.v=Math.round(s)||(Gi&&Gi.iOS?1:0),t(s),i.cacheID=re.cache,o&&zu("ss",s)}else(e||re.cache!==i.cacheID||zu("ref"))&&(i.cacheID=re.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Mn={s:Ua,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:yl(function(r){return arguments.length?Wn.scrollTo(r,We.sc()):Wn.pageXOffset||hr[Ua]||fr[Ua]||ks[Ua]||0})},We={s:Na,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Mn,sc:yl(function(r){return arguments.length?Wn.scrollTo(Mn.sc(),r):Wn.pageYOffset||hr[Na]||fr[Na]||ks[Na]||0})},En=function(t,e){return(e&&e._ctx&&e._ctx.selector||tn.utils.toArray)(t)[0]||(typeof t=="string"&&tn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},JE=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},Mr=function(t,e){var n=e.s,i=e.sc;Uo(t)&&(t=hr.scrollingElement||fr);var s=re.indexOf(t),o=i===We.sc?1:2;!~s&&(s=re.push(t)-1),re[s+o]||mn(t,"scroll",ku);var a=re[s+o],l=a||(re[s+o]=yl(_r(t,n),!0)||(Uo(t)?i:yl(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=tn.getProperty(t,"scrollBehavior")==="smooth"),l},Hu=function(t,e,n){var i=t,s=t,o=Io(),a=o,l=e||50,c=Math.max(500,l*3),u=function(_,g){var p=Io();g||p-o>l?(s=i,i=_,a=o,o=p):n?i+=_:i=s+(_-s)/(p-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(_){var g=a,p=s,m=Io();return(_||_===0)&&_!==i&&u(_),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-g)*1e3};return{update:u,reset:h,getVelocity:f}},_o=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},_d=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Dm=function(){Hs=tn.core.globals().ScrollTrigger,Hs&&Hs.core&&ZE()},Im=function(t){return tn=t||Pm(),!il&&tn&&typeof document<"u"&&document.body&&(Wn=window,hr=document,fr=hr.documentElement,ks=hr.body,Cm=[Wn,hr,fr,ks],tn.utils.clamp,Rm=tn.core.context||function(){},Nr="onpointerenter"in ks?"pointer":"mouse",Am=ze.isTouch=Wn.matchMedia&&Wn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Wn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ci=ze.eventTypes=("ontouchstart"in fr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in fr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Lm=0},500),il=1),Hs||Dm(),il};Mn.op=We;re.cache=0;var ze=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){il||Im(tn)||console.warn("Please gsap.registerPlugin(Observer)"),Hs||Dm();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,y=n.onDrag,x=n.onPress,S=n.onRelease,R=n.onRight,A=n.onLeft,E=n.onUp,P=n.onDown,N=n.onChangeX,v=n.onChangeY,T=n.onChange,O=n.onToggleX,k=n.onToggleY,W=n.onHover,q=n.onHoverEnd,z=n.onMove,Y=n.ignoreCheck,X=n.isNormalizer,ot=n.onGestureStart,L=n.onGestureEnd,ut=n.onWheel,zt=n.onEnable,qt=n.onDisable,$=n.onClick,et=n.scrollSpeed,pt=n.capture,lt=n.allowClicks,Pt=n.lockAxis,Ct=n.onLockAxis;this.target=a=En(a)||fr,this.vars=n,d&&(d=tn.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,et=et||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Wn.getComputedStyle(ks).lineHeight)||22);var kt,Bt,j,w,rt,ct,it,D=this,bt=0,xt=0,C=n.passive||!u&&n.passive!==!1,M=Mr(a,Mn),H=Mr(a,We),J=M(),tt=H(),Z=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ci[0]==="pointerdown",wt=Uo(a),at=a.ownerDocument||hr,gt=[0,0,0],Xt=[0,0,0],st=0,Tt=function(){return st=Io()},At=function(Dt,he){return(D.event=Dt)&&d&&JE(Dt.target,d)||he&&Z&&Dt.pointerType!=="touch"||Y&&Y(Dt,he)},Vt=function(){D._vx.reset(),D._vy.reset(),Bt.pause(),h&&h(D)},Et=function(){var Dt=D.deltaX=_d(gt),he=D.deltaY=_d(Xt),St=Math.abs(Dt)>=i,Ht=Math.abs(he)>=i;T&&(St||Ht)&&T(D,Dt,he,gt,Xt),St&&(R&&D.deltaX>0&&R(D),A&&D.deltaX<0&&A(D),N&&N(D),O&&D.deltaX<0!=bt<0&&O(D),bt=D.deltaX,gt[0]=gt[1]=gt[2]=0),Ht&&(P&&D.deltaY>0&&P(D),E&&D.deltaY<0&&E(D),v&&v(D),k&&D.deltaY<0!=xt<0&&k(D),xt=D.deltaY,Xt[0]=Xt[1]=Xt[2]=0),(w||j)&&(z&&z(D),j&&(p&&j===1&&p(D),y&&y(D),j=0),w=!1),ct&&!(ct=!1)&&Ct&&Ct(D),rt&&(ut(D),rt=!1),kt=0},$t=function(Dt,he,St){gt[St]+=Dt,Xt[St]+=he,D._vx.update(Dt),D._vy.update(he),c?kt||(kt=requestAnimationFrame(Et)):Et()},Wt=function(Dt,he){Pt&&!it&&(D.axis=it=Math.abs(Dt)>Math.abs(he)?"x":"y",ct=!0),it!=="y"&&(gt[2]+=Dt,D._vx.update(Dt,!0)),it!=="x"&&(Xt[2]+=he,D._vy.update(he,!0)),c?kt||(kt=requestAnimationFrame(Et)):Et()},le=function(Dt){if(!At(Dt,1)){Dt=_o(Dt,u);var he=Dt.clientX,St=Dt.clientY,Ht=he-D.x,Ot=St-D.y,Yt=D.isDragging;D.x=he,D.y=St,(Yt||(Ht||Ot)&&(Math.abs(D.startX-he)>=s||Math.abs(D.startY-St)>=s))&&(j||(j=Yt?2:1),Yt||(D.isDragging=!0),Wt(Ht,Ot))}},I=D.onPress=function(Nt){At(Nt,1)||Nt&&Nt.button||(D.axis=it=null,Bt.pause(),D.isPressed=!0,Nt=_o(Nt),bt=xt=0,D.startX=D.x=Nt.clientX,D.startY=D.y=Nt.clientY,D._vx.reset(),D._vy.reset(),mn(X?a:at,ci[1],le,C,!0),D.deltaX=D.deltaY=0,x&&x(D))},nt=D.onRelease=function(Nt){if(!At(Nt,1)){dn(X?a:at,ci[1],le,!0);var Dt=!isNaN(D.y-D.startY),he=D.isDragging,St=he&&(Math.abs(D.x-D.startX)>3||Math.abs(D.y-D.startY)>3),Ht=_o(Nt);!St&&Dt&&(D._vx.reset(),D._vy.reset(),u&&lt&&tn.delayedCall(.08,function(){if(Io()-st>300&&!Nt.defaultPrevented){if(Nt.target.click)Nt.target.click();else if(at.createEvent){var Ot=at.createEvent("MouseEvents");Ot.initMouseEvent("click",!0,!0,Wn,1,Ht.screenX,Ht.screenY,Ht.clientX,Ht.clientY,!1,!1,!1,!1,0,null),Nt.target.dispatchEvent(Ot)}}})),D.isDragging=D.isGesturing=D.isPressed=!1,h&&he&&!X&&Bt.restart(!0),j&&Et(),m&&he&&m(D),S&&S(D,St)}},K=function(Dt){return Dt.touches&&Dt.touches.length>1&&(D.isGesturing=!0)&&ot(Dt,D.isDragging)},Q=function(){return(D.isGesturing=!1)||L(D)},dt=function(Dt){if(!At(Dt)){var he=M(),St=H();$t((he-J)*et,(St-tt)*et,1),J=he,tt=St,h&&Bt.restart(!0)}},mt=function(Dt){if(!At(Dt)){Dt=_o(Dt,u),ut&&(rt=!0);var he=(Dt.deltaMode===1?l:Dt.deltaMode===2?Wn.innerHeight:1)*_;$t(Dt.deltaX*he,Dt.deltaY*he,0),h&&!X&&Bt.restart(!0)}},Kt=function(Dt){if(!At(Dt)){var he=Dt.clientX,St=Dt.clientY,Ht=he-D.x,Ot=St-D.y;D.x=he,D.y=St,w=!0,h&&Bt.restart(!0),(Ht||Ot)&&Wt(Ht,Ot)}},xe=function(Dt){D.event=Dt,W(D)},we=function(Dt){D.event=Dt,q(D)},se=function(Dt){return At(Dt)||_o(Dt,u)&&$(D)};Bt=D._dc=tn.delayedCall(f||.25,Vt).pause(),D.deltaX=D.deltaY=0,D._vx=Hu(0,50,!0),D._vy=Hu(0,50,!0),D.scrollX=M,D.scrollY=H,D.isDragging=D.isGesturing=D.isPressed=!1,Rm(this),D.enable=function(Nt){return D.isEnabled||(mn(wt?at:a,"scroll",ku),o.indexOf("scroll")>=0&&mn(wt?at:a,"scroll",dt,C,pt),o.indexOf("wheel")>=0&&mn(a,"wheel",mt,C,pt),(o.indexOf("touch")>=0&&Am||o.indexOf("pointer")>=0)&&(mn(a,ci[0],I,C,pt),mn(at,ci[2],nt),mn(at,ci[3],nt),lt&&mn(a,"click",Tt,!0,!0),$&&mn(a,"click",se),ot&&mn(at,"gesturestart",K),L&&mn(at,"gestureend",Q),W&&mn(a,Nr+"enter",xe),q&&mn(a,Nr+"leave",we),z&&mn(a,Nr+"move",Kt)),D.isEnabled=!0,D.isDragging=D.isGesturing=D.isPressed=w=j=!1,D._vx.reset(),D._vy.reset(),J=M(),tt=H(),Nt&&Nt.type&&I(Nt),zt&&zt(D)),D},D.disable=function(){D.isEnabled&&(Ds.filter(function(Nt){return Nt!==D&&Uo(Nt.target)}).length||dn(wt?at:a,"scroll",ku),D.isPressed&&(D._vx.reset(),D._vy.reset(),dn(X?a:at,ci[1],le,!0)),dn(wt?at:a,"scroll",dt,pt),dn(a,"wheel",mt,pt),dn(a,ci[0],I,pt),dn(at,ci[2],nt),dn(at,ci[3],nt),dn(a,"click",Tt,!0),dn(a,"click",se),dn(at,"gesturestart",K),dn(at,"gestureend",Q),dn(a,Nr+"enter",xe),dn(a,Nr+"leave",we),dn(a,Nr+"move",Kt),D.isEnabled=D.isPressed=D.isDragging=!1,qt&&qt(D))},D.kill=D.revert=function(){D.disable();var Nt=Ds.indexOf(D);Nt>=0&&Ds.splice(Nt,1),Gi===D&&(Gi=0)},Ds.push(D),X&&Uo(a)&&(Gi=D),D.enable(g)},KE(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();ze.version="3.15.0";ze.create=function(r){return new ze(r)};ze.register=Im;ze.getAll=function(){return Ds.slice()};ze.getById=function(r){return Ds.filter(function(t){return t.vars.id===r})[0]};Pm()&&tn.registerPlugin(ze);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Rt,bs,ie,_e,Vn,pe,Nh,El,na,No,Mo,Oa,sn,Ul,Vu,vn,gd,vd,ws,Um,Cc,Nm,gn,Gu,Om,Fm,or,Wu,Oh,Vs,Fh,Oo,Xu,Rc,Fa=1,on=Date.now,Pc=on(),ri=0,yo=0,xd=function(t,e,n){var i=zn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Sd=function(t,e){return e&&(!zn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},jE=function r(){return yo&&requestAnimationFrame(r)},Md=function(){return Ul=1},yd=function(){return Ul=0},Si=function(t){return t},Eo=function(t){return Math.round(t*1e5)/1e5||0},Bm=function(){return typeof window<"u"},zm=function(){return Rt||Bm()&&(Rt=window.gsap)&&Rt.registerPlugin&&Rt},ts=function(t){return!!~Nh.indexOf(t)},km=function(t){return(t==="Height"?Fh:ie["inner"+t])||Vn["client"+t]||pe["client"+t]},Hm=function(t){return _r(t,"getBoundingClientRect")||(ts(t)?function(){return ll.width=ie.innerWidth,ll.height=Fh,ll}:function(){return ki(t)})},QE=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=_r(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?km(s):t["client"+s])||0}},tT=function(t,e){return!e||~wi.indexOf(t)?Hm(t):function(){return ll}},Ti=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=_r(t,n))?o()-Hm(t)()[s]:ts(t)?(Vn[n]||pe[n])-km(i):t[n]-t["offset"+i])},Ba=function(t,e){for(var n=0;n<ws.length;n+=3)(!e||~e.indexOf(ws[n+1]))&&t(ws[n],ws[n+1],ws[n+2])},zn=function(t){return typeof t=="string"},cn=function(t){return typeof t=="function"},To=function(t){return typeof t=="number"},Or=function(t){return typeof t=="object"},go=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Ms=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},ys=Math.abs,Vm="left",Gm="top",Bh="right",zh="bottom",Kr="width",Zr="height",Fo="Right",Bo="Left",zo="Top",ko="Bottom",He="padding",Qn="margin",no="Width",kh="Height",Ge="px",ti=function(t){return ie.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},eT=function(t){var e=ti(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Ed=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},ki=function(t,e){var n=e&&ti(t)[Vu]!=="matrix(1, 0, 0, 1, 0, 0)"&&Rt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Tl=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Wm=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},nT=function(t){return function(e){return Rt.utils.snap(Wm(t),e)}},Hh=function(t){var e=Rt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},iT=function(t){return function(e,n){return Hh(Wm(t))(e,n.direction)}},za=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},Ze=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},Ke=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},ka=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Td={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ha={toggleActions:"play",anticipatePin:0},bl={top:0,left:0,center:.5,bottom:1,right:1},rl=function(t,e){if(zn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in bl?bl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Va=function(t,e,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,_=_e.createElement("div"),g=ts(n)||_r(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,m=g?pe:n.tagName==="IFRAME"?n.contentDocument.body:n,y=t.indexOf("start")!==-1,x=y?c:u,S="border-color:"+x+";font-size:"+h+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(S+=(i===We?Bh:zh)+":"+(o+parseFloat(f))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=y,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=S,_.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],sl(_,0,i,y),_},sl=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+no]=1,s["border"+a+no]=0,s[n.p]=e+"px",Rt.set(t,s)},ne=[],Yu={},ia,bd=function(){return on()-ri>34&&(ia||(ia=requestAnimationFrame(Yi)))},Es=function(){(!gn||!gn.isPressed||gn.startX>pe.clientWidth)&&(re.cache++,gn?ia||(ia=requestAnimationFrame(Yi)):Yi(),ri||ns("scrollStart"),ri=on())},Lc=function(){Fm=ie.innerWidth,Om=ie.innerHeight},bo=function(t){re.cache++,(t===!0||!sn&&!Nm&&!_e.fullscreenElement&&!_e.webkitFullscreenElement&&(!Gu||Fm!==ie.innerWidth||Math.abs(ie.innerHeight-Om)>ie.innerHeight*.25))&&El.restart(!0)},es={},rT=[],Xm=function r(){return Ke(te,"scrollEnd",r)||Gr(!0)},ns=function(t){return es[t]&&es[t].map(function(e){return e()})||rT},Bn=[],Ym=function(t){for(var e=0;e<Bn.length;e+=5)(!t||Bn[e+4]&&Bn[e+4].query===t)&&(Bn[e].style.cssText=Bn[e+1],Bn[e].getBBox&&Bn[e].setAttribute("transform",Bn[e+2]||""),Bn[e+3].uncache=1)},qm=function(){return re.forEach(function(t){return cn(t)&&++t.cacheID&&(t.rec=t())})},Vh=function(t,e){var n;for(vn=0;vn<ne.length;vn++)n=ne[vn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Oo=!0,e&&Ym(e),e||ns("revert")},$m=function(t,e){re.cache++,(e||!xn)&&re.forEach(function(n){return cn(n)&&n.cacheID++&&(n.rec=0)}),zn(t)&&(ie.history.scrollRestoration=Oh=t)},xn,Jr=0,wd,sT=function(){if(wd!==Jr){var t=wd=Jr;requestAnimationFrame(function(){return t===Jr&&Gr(!0)})}},Km=function(){pe.appendChild(Vs),Fh=!gn&&Vs.offsetHeight||ie.innerHeight,pe.removeChild(Vs)},Ad=function(t){return na(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Gr=function(t,e){if(Vn=_e.documentElement,pe=_e.body,Nh=[ie,_e,Vn,pe],ri&&!t&&!Oo){Ze(te,"scrollEnd",Xm);return}Km(),xn=te.isRefreshing=!0,Oo||qm();var n=ns("refreshInit");Um&&te.sort(),e||Vh(),re.forEach(function(i){cn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ne.slice(0).forEach(function(i){return i.refresh()}),Oo=!1,ne.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Xu=1,Ad(!0),ne.forEach(function(i){var s=Ti(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Ad(!1),Xu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),re.forEach(function(i){cn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),$m(Oh,1),El.pause(),Jr++,xn=2,Yi(2),ne.forEach(function(i){return cn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),xn=te.isRefreshing=!1,ns("refresh")},qu=0,ol=1,Ho,Yi=function(t){if(t===2||!xn&&!Oo){te.isUpdating=!0,Ho&&Ho.update(0);var e=ne.length,n=on(),i=n-Pc>=50,s=e&&ne[0].scroll();if(ol=qu>s?-1:1,xn||(qu=s),i&&(ri&&!Ul&&n-ri>200&&(ri=0,ns("scrollEnd")),Mo=Pc,Pc=n),ol<0){for(vn=e;vn-- >0;)ne[vn]&&ne[vn].update(0,i);ol=1}else for(vn=0;vn<e;vn++)ne[vn]&&ne[vn].update(0,i);te.isUpdating=!1}ia=0},$u=[Vm,Gm,zh,Bh,Qn+ko,Qn+Fo,Qn+zo,Qn+Bo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],al=$u.concat([Kr,Zr,"boxSizing","max"+no,"max"+kh,"position",Qn,He,He+zo,He+Fo,He+ko,He+Bo]),oT=function(t,e,n){Gs(n);var i=t._gsap;if(i.spacerIsNative)Gs(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Dc=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=$u.length,o=e.style,a=t.style,l;s--;)l=$u[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[zh]=a[Bh]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Kr]=Tl(t,Mn)+Ge,o[Zr]=Tl(t,We)+Ge,o[He]=a[Qn]=a[Gm]=a[Vm]="0",Gs(i),a[Kr]=a["max"+no]=n[Kr],a[Zr]=a["max"+kh]=n[Zr],a[He]=n[He],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},aT=/([A-Z])/g,Gs=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||Rt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(aT,"-$1").toLowerCase())}},Ga=function(t){for(var e=al.length,n=t.style,i=[],s=0;s<e;s++)i.push(al[s],n[al[s]]);return i.t=t,i},lT=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},ll={left:0,top:0},Cd=function(t,e,n,i,s,o,a,l,c,u,h,f,d,_){cn(t)&&(t=t(l)),zn(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?rl("0"+t.substr(3),n):0));var g=d?d.time():0,p,m,y;if(d&&d.seek(0),isNaN(t)||(t=+t),To(t))d&&(t=Rt.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,t)),a&&sl(a,n,i,!0);else{cn(e)&&(e=e(l));var x=(t||"0").split(" "),S,R,A,E;y=En(e,l)||pe,S=ki(y)||{},(!S||!S.left&&!S.top)&&ti(y).display==="none"&&(E=y.style.display,y.style.display="block",S=ki(y),E?y.style.display=E:y.style.removeProperty("display")),R=rl(x[0],S[i.d]),A=rl(x[1]||"0",n),t=S[i.p]-c[i.p]-u+R+s-A,a&&sl(a,A,i,n-A<20||a._isStart&&A>20),n-=n-A}if(_&&(l[_]=t||-.001,t<0&&(t=0)),o){var P=t+n,N=o._isStart;p="scroll"+i.d2,sl(o,P,i,N&&P>20||!N&&(h?Math.max(pe[p],Vn[p]):o.parentNode[p])<=P+1),h&&(c=ki(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Ge))}return d&&y&&(p=ki(y),d.seek(f),m=ki(y),d._caScrollDist=p[i.p]-m[i.p],t=t/d._caScrollDist*f),d&&d.seek(g),d?t:Math.round(t)},cT=/(webkit|moz|length|cssText|inset)/i,Rd=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===pe){t._stOrig=s.cssText,a=ti(t);for(o in a)!+o&&!cT.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;Rt.core.getCache(t).uncache=1,e.appendChild(t)}},Zm=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Wa=function(t,e,n){var i={};i[e.p]="+="+n,Rt.set(t,i)},Pd=function(t,e){var n=Mr(t,e),i="_scroll"+e.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,_={};c=c||n();var g=Zm(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){re.cache++,o.tween&&Yi()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Rt.to(t,l),f};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Ze(t,"wheel",n.wheelHandler),te.isTouch&&Ze(t,"touchmove",n.wheelHandler),s},te=function(){function r(e,n){bs||r.register(Rt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Wu(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!yo){this.update=this.refresh=this.kill=Si;return}n=Ed(zn(n)||To(n)||n.nodeType?{trigger:n}:n,Ha);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,y=s.onSnapComplete,x=s.once,S=s.snap,R=s.pinReparent,A=s.pinSpacer,E=s.containerAnimation,P=s.fastScrollEnd,N=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Mn:We,T=!h&&h!==0,O=En(n.scroller||ie),k=Rt.core.getCache(O),W=ts(O),q=("pinType"in n?n.pinType:_r(O,"pinType")||W&&"fixed")==="fixed",z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=T&&n.toggleActions.split(" "),X="markers"in n?n.markers:Ha.markers,ot=W?0:parseFloat(ti(O)["border"+v.p2+no])||0,L=this,ut=n.onRefreshInit&&function(){return n.onRefreshInit(L)},zt=QE(O,W,v),qt=tT(O,W),$=0,et=0,pt=0,lt=Mr(O,v),Pt,Ct,kt,Bt,j,w,rt,ct,it,D,bt,xt,C,M,H,J,tt,Z,wt,at,gt,Xt,st,Tt,At,Vt,Et,$t,Wt,le,I,nt,K,Q,dt,mt,Kt,xe,we;if(L._startClamp=L._endClamp=!1,L._dir=v,p*=45,L.scroller=O,L.scroll=E?E.time.bind(E):lt,Bt=lt(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(Um=1,n.refreshPriority===-9999&&(Ho=L)),k.tweenScroll=k.tweenScroll||{top:Pd(O,We),left:Pd(O,Mn)},L.tweenTo=Pt=k.tweenScroll[v.p],L.scrubDuration=function(St){K=To(St)&&St,K?nt?nt.duration(St):nt=Rt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:K,paused:!0,onComplete:function(){return m&&m(L)}}):(nt&&nt.progress(1).kill(),nt=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(h),le=0,l||(l=i.vars.id)),S&&((!Or(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in pe.style&&Rt.set(W?[pe,Vn]:O,{scrollBehavior:"auto"}),re.forEach(function(St){return cn(St)&&St.target===(W?_e.scrollingElement||Vn:O)&&(St.smooth=!1)}),kt=cn(S.snapTo)?S.snapTo:S.snapTo==="labels"?nT(i):S.snapTo==="labelsDirectional"?iT(i):S.directional!==!1?function(St,Ht){return Hh(S.snapTo)(St,on()-et<500?0:Ht.direction)}:Rt.utils.snap(S.snapTo),Q=S.duration||{min:.1,max:2},Q=Or(Q)?No(Q.min,Q.max):No(Q,Q),dt=Rt.delayedCall(S.delay||K/2||.1,function(){var St=lt(),Ht=on()-et<500,Ot=Pt.tween;if((Ht||Math.abs(L.getVelocity())<10)&&!Ot&&!Ul&&$!==St){var Yt=(St-w)/M,Ne=i&&!T?i.totalProgress():Yt,Jt=Ht?0:(Ne-I)/(on()-Mo)*1e3||0,Ae=Rt.utils.clamp(-Yt,1-Yt,ys(Jt/2)*Jt/.185),Oe=Yt+(S.inertia===!1?0:Ae),Te,Se,me=S,Un=me.onStart,be=me.onInterrupt,b=me.onComplete;if(Te=kt(Oe,L),To(Te)||(Te=Oe),Se=Math.max(0,Math.round(w+Te*M)),St<=rt&&St>=w&&Se!==St){if(Ot&&!Ot._initted&&Ot.data<=ys(Se-St))return;S.inertia===!1&&(Ae=Te-Yt),Pt(Se,{duration:Q(ys(Math.max(ys(Oe-Ne),ys(Te-Ne))*.185/Jt/.05||0)),ease:S.ease||"power3",data:ys(Se-St),onInterrupt:function(){return dt.restart(!0)&&be&&Ms(L,be)},onComplete:function(){L.update(),$=lt(),i&&!T&&(nt?nt.resetTo("totalProgress",Te,i._tTime/i._tDur):i.progress(Te)),le=I=i&&!T?i.totalProgress():L.progress,y&&y(L),b&&Ms(L,b)}},St,Ae*M,Se-St-Ae*M),Un&&Ms(L,Un,Pt.tween)}}else L.isActive&&$!==St&&dt.restart(!0)}).pause()),l&&(Yu[l]=L),f=L.trigger=En(f||d!==!0&&d),we=f&&f._gsap&&f._gsap.stRevert,we&&(we=we(L)),d=d===!0?f:En(d),zn(a)&&(a={targets:f,className:a}),d&&(_===!1||_===Qn||(_=!_&&d.parentNode&&d.parentNode.style&&ti(d.parentNode).display==="flex"?!1:He),L.pin=d,Ct=Rt.core.getCache(d),Ct.spacer?H=Ct.pinState:(A&&(A=En(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Ct.spacerIsNative=!!A,A&&(Ct.spacerState=Ga(A))),Ct.spacer=Z=A||_e.createElement("div"),Z.classList.add("pin-spacer"),l&&Z.classList.add("pin-spacer-"+l),Ct.pinState=H=Ga(d)),n.force3D!==!1&&Rt.set(d,{force3D:!0}),L.spacer=Z=Ct.spacer,Wt=ti(d),Tt=Wt[_+v.os2],at=Rt.getProperty(d),gt=Rt.quickSetter(d,v.a,Ge),Dc(d,Z,Wt),tt=Ga(d)),X){xt=Or(X)?Ed(X,Td):Td,D=Va("scroller-start",l,O,v,xt,0),bt=Va("scroller-end",l,O,v,xt,0,D),wt=D["offset"+v.op.d2];var se=En(_r(O,"content")||O);ct=this.markerStart=Va("start",l,se,v,xt,wt,0,E),it=this.markerEnd=Va("end",l,se,v,xt,wt,0,E),E&&(xe=Rt.quickSetter([ct,it],v.a,Ge)),!q&&!(wi.length&&_r(O,"fixedMarkers")===!0)&&(eT(W?pe:O),Rt.set([D,bt],{force3D:!0}),Vt=Rt.quickSetter(D,v.a,Ge),$t=Rt.quickSetter(bt,v.a,Ge))}if(E){var Nt=E.vars.onUpdate,Dt=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){L.update(0,0,1),Nt&&Nt.apply(E,Dt||[])})}if(L.previous=function(){return ne[ne.indexOf(L)-1]},L.next=function(){return ne[ne.indexOf(L)+1]},L.revert=function(St,Ht){if(!Ht)return L.kill(!0);var Ot=St!==!1||!L.enabled,Yt=sn;Ot!==L.isReverted&&(Ot&&(mt=Math.max(lt(),L.scroll.rec||0),pt=L.progress,Kt=i&&i.progress()),ct&&[ct,it,D,bt].forEach(function(Ne){return Ne.style.display=Ot?"none":"block"}),Ot&&(sn=L,L.update(Ot)),d&&(!R||!L.isActive)&&(Ot?oT(d,Z,H):Dc(d,Z,ti(d),At)),Ot||L.update(Ot),sn=Yt,L.isReverted=Ot)},L.refresh=function(St,Ht,Ot,Yt){if(!((sn||!L.enabled)&&!Ht)){if(d&&St&&ri){Ze(r,"scrollEnd",Xm);return}!xn&&ut&&ut(L),sn=L,Pt.tween&&!Ot&&(Pt.tween.kill(),Pt.tween=0),nt&&nt.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(ee){return ee.vars.immediateRender&&ee.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Ne=zt(),Jt=qt(),Ae=E?E.duration():Ti(O,v),Oe=M<=.01||!M,Te=0,Se=Yt||0,me=Or(Ot)?Ot.end:n.end,Un=n.endTrigger||f,be=Or(Ot)?Ot.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),b=L.pinnedContainer=n.pinnedContainer&&En(n.pinnedContainer,L),F=f&&Math.max(0,ne.indexOf(L))||0,V=F,G,U,ht,yt,vt,_t,Ut,Gt,It,ce,ae,ge,qe;for(X&&Or(Ot)&&(ge=Rt.getProperty(D,v.p),qe=Rt.getProperty(bt,v.p));V-- >0;)_t=ne[V],_t.end||_t.refresh(0,1)||(sn=L),Ut=_t.pin,Ut&&(Ut===f||Ut===d||Ut===b)&&!_t.isReverted&&(ce||(ce=[]),ce.unshift(_t),_t.revert(!0,!0)),_t!==ne[V]&&(F--,V--);for(cn(be)&&(be=be(L)),be=xd(be,"start",L),w=Cd(be,f,Ne,v,lt(),ct,D,L,Jt,ot,q,Ae,E,L._startClamp&&"_startClamp")||(d?-.001:0),cn(me)&&(me=me(L)),zn(me)&&!me.indexOf("+=")&&(~me.indexOf(" ")?me=(zn(be)?be.split(" ")[0]:"")+me:(Te=rl(me.substr(2),Ne),me=zn(be)?be:(E?Rt.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,w):w)+Te,Un=f)),me=xd(me,"end",L),rt=Math.max(w,Cd(me||(Un?"100% 0":Ae),Un,Ne,v,lt()+Te,it,bt,L,Jt,ot,q,Ae,E,L._endClamp&&"_endClamp"))||-.001,Te=0,V=F;V--;)_t=ne[V]||{},Ut=_t.pin,Ut&&_t.start-_t._pinPush<=w&&!E&&_t.end>0&&(G=_t.end-(L._startClamp?Math.max(0,_t.start):_t.start),(Ut===f&&_t.start-_t._pinPush<w||Ut===b)&&isNaN(be)&&(Te+=G*(1-_t.progress)),Ut===d&&(Se+=G));if(w+=Te,rt+=Te,L._startClamp&&(L._startClamp+=Te),L._endClamp&&!xn&&(L._endClamp=rt||-.001,rt=Math.min(rt,Ti(O,v))),M=rt-w||(w-=.01)&&.001,Oe&&(pt=Rt.utils.clamp(0,1,Rt.utils.normalize(w,rt,mt))),L._pinPush=Se,ct&&Te&&(G={},G[v.a]="+="+Te,b&&(G[v.p]="-="+lt()),Rt.set([ct,it],G)),d&&!(Xu&&L.end>=Ti(O,v)))G=ti(d),yt=v===We,ht=lt(),Xt=parseFloat(at(v.a))+Se,!Ae&&rt>1&&(ae=(W?_e.scrollingElement||Vn:O).style,ae={style:ae,value:ae["overflow"+v.a.toUpperCase()]},W&&ti(pe)["overflow"+v.a.toUpperCase()]!=="scroll"&&(ae.style["overflow"+v.a.toUpperCase()]="scroll")),Dc(d,Z,G),tt=Ga(d),U=ki(d,!0),Gt=q&&Mr(O,yt?Mn:We)(),_?(At=[_+v.os2,M+Se+Ge],At.t=Z,V=_===He?Tl(d,v)+M+Se:0,V&&(At.push(v.d,V+Ge),Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=V+Ge)),Gs(At),b&&ne.forEach(function(ee){ee.pin===b&&ee.vars.pinSpacing!==!1&&(ee._subPinOffset=!0)}),q&&lt(mt)):(V=Tl(d,v),V&&Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=V+Ge)),q&&(vt={top:U.top+(yt?ht-w:Gt)+Ge,left:U.left+(yt?Gt:ht-w)+Ge,boxSizing:"border-box",position:"fixed"},vt[Kr]=vt["max"+no]=Math.ceil(U.width)+Ge,vt[Zr]=vt["max"+kh]=Math.ceil(U.height)+Ge,vt[Qn]=vt[Qn+zo]=vt[Qn+Fo]=vt[Qn+ko]=vt[Qn+Bo]="0",vt[He]=G[He],vt[He+zo]=G[He+zo],vt[He+Fo]=G[He+Fo],vt[He+ko]=G[He+ko],vt[He+Bo]=G[He+Bo],J=lT(H,vt,R),xn&&lt(0)),i?(It=i._initted,Cc(1),i.render(i.duration(),!0,!0),st=at(v.a)-Xt+M+Se,Et=Math.abs(M-st)>1,q&&Et&&J.splice(J.length-2,2),i.render(0,!0,!0),It||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Cc(0)):st=M,ae&&(ae.value?ae.style["overflow"+v.a.toUpperCase()]=ae.value:ae.style.removeProperty("overflow-"+v.a));else if(f&&lt()&&!E)for(U=f.parentNode;U&&U!==pe;)U._pinOffset&&(w-=U._pinOffset,rt-=U._pinOffset),U=U.parentNode;ce&&ce.forEach(function(ee){return ee.revert(!1,!0)}),L.start=w,L.end=rt,Bt=j=xn?mt:lt(),!E&&!xn&&(Bt<mt&&lt(mt),L.scroll.rec=0),L.revert(!1,!0),et=on(),dt&&($=-1,dt.restart(!0)),sn=0,i&&T&&(i._initted||Kt)&&i.progress()!==Kt&&i.progress(Kt||0,!0).render(i.time(),!0,!0),(Oe||pt!==L.progress||E||g||i&&!i._initted)&&(i&&!T&&(i._initted||pt||i.vars.immediateRender!==!1)&&i.totalProgress(E&&w<-.001&&!pt?Rt.utils.normalize(w,rt,0):pt,!0),L.progress=Oe||(Bt-w)/M===pt?0:pt),d&&_&&(Z._pinOffset=Math.round(L.progress*st)),nt&&nt.invalidate(),isNaN(ge)||(ge-=Rt.getProperty(D,v.p),qe-=Rt.getProperty(bt,v.p),Wa(D,v,ge),Wa(ct,v,ge-(Yt||0)),Wa(bt,v,qe),Wa(it,v,qe-(Yt||0))),Oe&&!xn&&L.update(),u&&!xn&&!C&&(C=!0,u(L),C=!1)}},L.getVelocity=function(){return(lt()-j)/(on()-Mo)*1e3||0},L.endAnimation=function(){go(L.callbackAnimation),i&&(nt?nt.progress(1):i.paused()?T||go(i,L.direction<0,1):go(i,i.reversed()))},L.labelToScroll=function(St){return i&&i.labels&&(w||L.refresh()||w)+i.labels[St]/i.duration()*M||0},L.getTrailing=function(St){var Ht=ne.indexOf(L),Ot=L.direction>0?ne.slice(0,Ht).reverse():ne.slice(Ht+1);return(zn(St)?Ot.filter(function(Yt){return Yt.vars.preventOverlaps===St}):Ot).filter(function(Yt){return L.direction>0?Yt.end<=w:Yt.start>=rt})},L.update=function(St,Ht,Ot){if(!(E&&!Ot&&!St)){var Yt=xn===!0?mt:L.scroll(),Ne=St?0:(Yt-w)/M,Jt=Ne<0?0:Ne>1?1:Ne||0,Ae=L.progress,Oe,Te,Se,me,Un,be,b,F;if(Ht&&(j=Bt,Bt=E?lt():Yt,S&&(I=le,le=i&&!T?i.totalProgress():Jt)),p&&d&&!sn&&!Fa&&ri&&(!Jt&&w<Yt+(Yt-j)/(on()-Mo)*p?Jt=1e-4:Jt===1&&rt>Yt+(Yt-j)/(on()-Mo)*p&&(Jt=.9999)),Jt!==Ae&&L.enabled){if(Oe=L.isActive=!!Jt&&Jt<1,Te=!!Ae&&Ae<1,be=Oe!==Te,Un=be||!!Jt!=!!Ae,L.direction=Jt>Ae?1:-1,L.progress=Jt,Un&&!sn&&(Se=Jt&&!Ae?0:Jt===1?1:Ae===1?2:3,T&&(me=!be&&Y[Se+1]!=="none"&&Y[Se+1]||Y[Se],F=i&&(me==="complete"||me==="reset"||me in i))),N&&(be||F)&&(F||h||!i)&&(cn(N)?N(L):L.getTrailing(N).forEach(function(ht){return ht.endAnimation()})),T||(nt&&!sn&&!Fa?(nt._dp._time-nt._start!==nt._time&&nt.render(nt._dp._time-nt._start),nt.resetTo?nt.resetTo("totalProgress",Jt,i._tTime/i._tDur):(nt.vars.totalProgress=Jt,nt.invalidate().restart())):i&&i.totalProgress(Jt,!!(sn&&(et||St)))),d){if(St&&_&&(Z.style[_+v.os2]=Tt),!q)gt(Eo(Xt+st*Jt));else if(Un){if(b=!St&&Jt>Ae&&rt+1>Yt&&Yt+1>=Ti(O,v),R)if(!St&&(Oe||b)){var V=ki(d,!0),G=Yt-w;Rd(d,pe,V.top+(v===We?G:0)+Ge,V.left+(v===We?0:G)+Ge)}else Rd(d,Z);Gs(Oe||b?J:tt),Et&&Jt<1&&Oe||gt(Xt+(Jt===1&&!b?st:0))}}S&&!Pt.tween&&!sn&&!Fa&&dt.restart(!0),a&&(be||x&&Jt&&(Jt<1||!Rc))&&na(a.targets).forEach(function(ht){return ht.classList[Oe||x?"add":"remove"](a.className)}),o&&!T&&!St&&o(L),Un&&!sn?(T&&(F&&(me==="complete"?i.pause().totalProgress(1):me==="reset"?i.restart(!0).pause():me==="restart"?i.restart(!0):i[me]()),o&&o(L)),(be||!Rc)&&(c&&be&&Ms(L,c),z[Se]&&Ms(L,z[Se]),x&&(Jt===1?L.kill(!1,1):z[Se]=0),be||(Se=Jt===1?1:3,z[Se]&&Ms(L,z[Se]))),P&&!Oe&&Math.abs(L.getVelocity())>(To(P)?P:2500)&&(go(L.callbackAnimation),nt?nt.progress(1):go(i,me==="reverse"?1:!Jt,1))):T&&o&&!sn&&o(L)}if($t){var U=E?Yt/E.duration()*(E._caScrollDist||0):Yt;Vt(U+(D._isFlipped?1:0)),$t(U)}xe&&xe(-Yt/E.duration()*(E._caScrollDist||0))}},L.enable=function(St,Ht){L.enabled||(L.enabled=!0,Ze(O,"resize",bo),W||Ze(O,"scroll",Es),ut&&Ze(r,"refreshInit",ut),St!==!1&&(L.progress=pt=0,Bt=j=$=lt()),Ht!==!1&&L.refresh())},L.getTween=function(St){return St&&Pt?Pt.tween:nt},L.setPositions=function(St,Ht,Ot,Yt){if(E){var Ne=E.scrollTrigger,Jt=E.duration(),Ae=Ne.end-Ne.start;St=Ne.start+Ae*St/Jt,Ht=Ne.start+Ae*Ht/Jt}L.refresh(!1,!1,{start:Sd(St,Ot&&!!L._startClamp),end:Sd(Ht,Ot&&!!L._endClamp)},Yt),L.update()},L.adjustPinSpacing=function(St){if(At&&St){var Ht=At.indexOf(v.d)+1;At[Ht]=parseFloat(At[Ht])+St+Ge,At[1]=parseFloat(At[1])+St+Ge,Gs(At)}},L.disable=function(St,Ht){if(St!==!1&&L.revert(!0,!0),L.enabled&&(L.enabled=L.isActive=!1,Ht||nt&&nt.pause(),mt=0,Ct&&(Ct.uncache=1),ut&&Ke(r,"refreshInit",ut),dt&&(dt.pause(),Pt.tween&&Pt.tween.kill()&&(Pt.tween=0)),!W)){for(var Ot=ne.length;Ot--;)if(ne[Ot].scroller===O&&ne[Ot]!==L)return;Ke(O,"resize",bo),W||Ke(O,"scroll",Es)}},L.kill=function(St,Ht){L.disable(St,Ht),nt&&!Ht&&nt.kill(),l&&delete Yu[l];var Ot=ne.indexOf(L);Ot>=0&&ne.splice(Ot,1),Ot===vn&&ol>0&&vn--,Ot=0,ne.forEach(function(Yt){return Yt.scroller===L.scroller&&(Ot=1)}),Ot||xn||(L.scroll.rec=0),i&&(i.scrollTrigger=null,St&&i.revert({kill:!1}),Ht||i.kill()),ct&&[ct,it,D,bt].forEach(function(Yt){return Yt.parentNode&&Yt.parentNode.removeChild(Yt)}),Ho===L&&(Ho=0),d&&(Ct&&(Ct.uncache=1),Ot=0,ne.forEach(function(Yt){return Yt.pin===d&&Ot++}),Ot||(Ct.spacer=0)),n.onKill&&n.onKill(L)},ne.push(L),L.enable(!1,!1),we&&we(L),i&&i.add&&!M){var he=L.update;L.update=function(){L.update=he,re.cache++,w||rt||L.refresh()},Rt.delayedCall(.01,L.update),M=.01,w=rt=0}else L.refresh();d&&sT()},r.register=function(n){return bs||(Rt=n||zm(),Bm()&&window.document&&r.enable(),bs=yo),bs},r.defaults=function(n){if(n)for(var i in n)Ha[i]=n[i];return Ha},r.disable=function(n,i){yo=0,ne.forEach(function(o){return o[i?"kill":"disable"](n)}),Ke(ie,"wheel",Es),Ke(_e,"scroll",Es),clearInterval(Oa),Ke(_e,"touchcancel",Si),Ke(pe,"touchstart",Si),za(Ke,_e,"pointerdown,touchstart,mousedown",Md),za(Ke,_e,"pointerup,touchend,mouseup",yd),El.kill(),Ba(Ke);for(var s=0;s<re.length;s+=3)ka(Ke,re[s],re[s+1]),ka(Ke,re[s],re[s+2])},r.enable=function(){if(ie=window,_e=document,Vn=_e.documentElement,pe=_e.body,Rt){if(na=Rt.utils.toArray,No=Rt.utils.clamp,Wu=Rt.core.context||Si,Cc=Rt.core.suppressOverwrites||Si,Oh=ie.history.scrollRestoration||"auto",qu=ie.pageYOffset||0,Rt.core.globals("ScrollTrigger",r),pe){yo=1,Vs=document.createElement("div"),Vs.style.height="100vh",Vs.style.position="absolute",Km(),jE(),ze.register(Rt),r.isTouch=ze.isTouch,or=ze.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Gu=ze.isTouch===1,Ze(ie,"wheel",Es),Nh=[ie,_e,Vn,pe],Rt.matchMedia?(r.matchMedia=function(u){var h=Rt.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},Rt.addEventListener("matchMediaInit",function(){qm(),Vh()}),Rt.addEventListener("matchMediaRevert",function(){return Ym()}),Rt.addEventListener("matchMedia",function(){Gr(0,1),ns("matchMedia")}),Rt.matchMedia().add("(orientation: portrait)",function(){return Lc(),Lc})):console.warn("Requires GSAP 3.11.0 or later"),Lc(),Ze(_e,"scroll",Es);var n=pe.hasAttribute("style"),i=pe.style,s=i.borderTopStyle,o=Rt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=ki(pe),We.m=Math.round(a.top+We.sc())||0,Mn.m=Math.round(a.left+Mn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(pe.setAttribute("style",""),pe.removeAttribute("style")),Oa=setInterval(bd,250),Rt.delayedCall(.5,function(){return Fa=0}),Ze(_e,"touchcancel",Si),Ze(pe,"touchstart",Si),za(Ze,_e,"pointerdown,touchstart,mousedown",Md),za(Ze,_e,"pointerup,touchend,mouseup",yd),Vu=Rt.utils.checkPrefix("transform"),al.push(Vu),bs=on(),El=Rt.delayedCall(.2,Gr).pause(),ws=[_e,"visibilitychange",function(){var u=ie.innerWidth,h=ie.innerHeight;_e.hidden?(gd=u,vd=h):(gd!==u||vd!==h)&&bo()},_e,"DOMContentLoaded",Gr,ie,"load",Gr,ie,"resize",bo],Ba(Ze),ne.forEach(function(u){return u.enable(0,1)}),l=0;l<re.length;l+=3)ka(Ke,re[l],re[l+1]),ka(Ke,re[l],re[l+2])}else if(_e){var c=function u(){r.enable(),_e.removeEventListener("DOMContentLoaded",u)};_e.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Rc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Oa)||(Oa=i)&&setInterval(bd,i),"ignoreMobileResize"in n&&(Gu=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ba(Ke)||Ba(Ze,n.autoRefreshEvents||"none"),Nm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=En(n),o=re.indexOf(s),a=ts(s);~o&&re.splice(o,a?6:2),i&&(a?wi.unshift(ie,i,pe,i,Vn,i):wi.unshift(s,i))},r.clearMatchMedia=function(n){ne.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(zn(n)?En(n):n).getBoundingClientRect(),a=o[s?Kr:Zr]*i||0;return s?o.right-a>0&&o.left+a<ie.innerWidth:o.bottom-a>0&&o.top+a<ie.innerHeight},r.positionInViewport=function(n,i,s){zn(n)&&(n=En(n));var o=n.getBoundingClientRect(),a=o[s?Kr:Zr],l=i==null?a/2:i in bl?bl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ie.innerWidth:(o.top+l)/ie.innerHeight},r.killAll=function(n){if(ne.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=es.killAll||[];es={},i.forEach(function(s){return s()})}},r}();te.version="3.15.0";te.saveStyles=function(r){return r?na(r).forEach(function(t){if(t&&t.style){var e=Bn.indexOf(t);e>=0&&Bn.splice(e,5),Bn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Rt.core.getCache(t),Wu())}}):Bn};te.revert=function(r,t){return Vh(!r,t)};te.create=function(r,t){return new te(r,t)};te.refresh=function(r){return r?bo(!0):(bs||te.register())&&Gr(!0)};te.update=function(r){return++re.cache&&Yi(r===!0?2:0)};te.clearScrollMemory=$m;te.maxScroll=function(r,t){return Ti(r,t?Mn:We)};te.getScrollFunc=function(r,t){return Mr(En(r),t?Mn:We)};te.getById=function(r){return Yu[r]};te.getAll=function(){return ne.filter(function(r){return r.vars.id!=="ScrollSmoother"})};te.isScrolling=function(){return!!ri};te.snapDirectional=Hh;te.addEventListener=function(r,t){var e=es[r]||(es[r]=[]);~e.indexOf(t)||e.push(t)};te.removeEventListener=function(r,t){var e=es[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};te.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Rt.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(_){h.length||d.restart(!0),h.push(_.trigger),f.push(_),s<=h.length&&d.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&cn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return cn(s)&&(s=s(),Ze(te,"refresh",function(){return s=t.batchMax()})),na(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(te.create(c))}),e};var Ld=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Ic=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(ze.isTouch?" pinch-zoom":""):"none",t===Vn&&r(pe,e)},Xa={auto:1,scroll:1},uT=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Rt.core.getCache(s),a=on(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==pe&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Xa[(l=ti(s)).overflowY]||Xa[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!ts(s)&&(Xa[(l=ti(s)).overflowY]||Xa[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Jm=function(t,e,n,i){return ze.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&uT,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Ze(_e,ze.eventTypes[0],Id,!1,!0)},onDisable:function(){return Ke(_e,ze.eventTypes[0],Id,!0)}})},hT=/(input|label|select|textarea)/i,Dd,Id=function(t){var e=hT.test(t.target.tagName);(e||Dd)&&(t._gsapAllow=!0,Dd=e)},fT=function(t){Or(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=En(t.target)||Vn,u=Rt.core.globals().ScrollSmoother,h=u&&u.get(),f=or&&(t.content&&En(t.content)||h&&t.content!==!1&&!h.smooth()&&h.content()),d=Mr(c,We),_=Mr(c,Mn),g=1,p=(ze.isTouch&&ie.visualViewport?ie.visualViewport.scale*ie.visualViewport.width:ie.outerWidth)/ie.innerWidth,m=0,y=cn(i)?function(){return i(a)}:function(){return i||2.8},x,S,R=Jm(c,t.type,!0,s),A=function(){return S=!1},E=Si,P=Si,N=function(){l=Ti(c,We),P=No(or?1:0,l),n&&(E=No(0,Ti(c,Mn))),x=Jr},v=function(){f._gsap.y=Eo(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},T=function(){if(S){requestAnimationFrame(A);var X=Eo(a.deltaY/2),ot=P(d.v-X);if(f&&ot!==d.v+d.offset){d.offset=ot-d.v;var L=Eo((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",f._gsap.y=L+"px",d.cacheID=re.cache,Yi()}return!0}d.offset&&v(),S=!0},O,k,W,q,z=function(){N(),O.isActive()&&O.vars.scrollY>l&&(d()>l?O.progress(1)&&d(l):O.resetTo("scrollY",l))};return f&&Rt.set(f,{y:"+=0"}),t.ignoreCheck=function(Y){return or&&Y.type==="touchmove"&&T()||g>1.05&&Y.type!=="touchstart"||a.isGesturing||Y.touches&&Y.touches.length>1},t.onPress=function(){S=!1;var Y=g;g=Eo((ie.visualViewport&&ie.visualViewport.scale||1)/p),O.pause(),Y!==g&&Ic(c,g>1.01?!0:n?!1:"x"),k=_(),W=d(),N(),x=Jr},t.onRelease=t.onGestureStart=function(Y,X){if(d.offset&&v(),!X)q.restart(!0);else{re.cache++;var ot=y(),L,ut;n&&(L=_(),ut=L+ot*.05*-Y.velocityX/.227,ot*=Ld(_,L,ut,Ti(c,Mn)),O.vars.scrollX=E(ut)),L=d(),ut=L+ot*.05*-Y.velocityY/.227,ot*=Ld(d,L,ut,Ti(c,We)),O.vars.scrollY=P(ut),O.invalidate().duration(ot).play(.01),(or&&O.vars.scrollY>=l||L>=l-1)&&Rt.to({},{onUpdate:z,duration:ot})}o&&o(Y)},t.onWheel=function(){O._ts&&O.pause(),on()-m>1e3&&(x=0,m=on())},t.onChange=function(Y,X,ot,L,ut){if(Jr!==x&&N(),X&&n&&_(E(L[2]===X?k+(Y.startX-Y.x):_()+X-L[1])),ot){d.offset&&v();var zt=ut[2]===ot,qt=zt?W+Y.startY-Y.y:d()+ot-ut[1],$=P(qt);zt&&qt!==$&&(W+=$-qt),d($)}(ot||X)&&Yi()},t.onEnable=function(){Ic(c,n?!1:"x"),te.addEventListener("refresh",z),Ze(ie,"resize",z),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),R.enable()},t.onDisable=function(){Ic(c,!0),Ke(ie,"resize",z),te.removeEventListener("refresh",z),R.kill()},t.lockAxis=t.lockAxis!==!1,a=new ze(t),a.iOS=or,or&&!d()&&d(1),or&&Rt.ticker.add(Si),q=a._dc,O=Rt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Zm(d,d(),function(){return O.pause()})},onUpdate:Yi,onComplete:q.vars.onComplete}),a};te.sort=function(r){if(cn(r))return ne.sort(r);var t=ie.pageYOffset||0;return te.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ie.innerHeight}),ne.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};te.observe=function(r){return new ze(r)};te.normalizeScroll=function(r){if(typeof r>"u")return gn;if(r===!0&&gn)return gn.enable();if(r===!1){gn&&gn.kill(),gn=r;return}var t=r instanceof ze?r:fT(r);return gn&&gn.target===t.target&&gn.kill(),ts(t.target)&&(gn=t),t};te.core={_getVelocityProp:Hu,_inputObserver:Jm,_scrollers:re,_proxies:wi,bridge:{ss:function(){ri||ns("scrollStart"),ri=on()},ref:function(){return sn}}};zm()&&Rt.registerPlugin(te);const dT={hero:{name:"Sushant Singh",title:"Email Marketing & AI Automation",subline:"Infrastructure, deliverability, and AI-driven campaigns — engineered end to end.",chips:["Email Infrastructure","Deliverability","AI Voice Agents","Hyper-Personalization","Cold Outbound","Clean Data"]},about:{ctaLabel:"Click here",paragraphs:["I'm a marketing professional who builds and runs email-marketing engines end to end. Right now I handle email marketing infrastructure and campaign management for a reputed marketing agency — from domain & DNS setup to live campaigns that convert.","I'm a PGDM postgraduate in Marketing & AI/ML, and I pair classic demand-gen fundamentals with AI agents, automation, and clean data to deliver results I can point to — not just talk about."]},projects:[{index:"01",title:"Email Marketing Engine",kicker:"End-to-end",description:"I run email marketing end to end for a reputed marketing agency — building the sending infrastructure from the ground up: domains, DNS records (SPF, DKIM, DMARC), inbox setup, the works. Today I manage their campaigns end to end.",stats:[{value:"50–60%",label:"Open rate"},{value:"25–35%",label:"Click rate"},{value:"5–7%",label:"Reply rate"}],tags:["Email Infrastructure","DNS / SPF / DKIM / DMARC","Instantly","MailDoso"]},{index:"02",title:"AI Voice Agents for Outbound",kicker:"India + US",description:"I built end-to-end AI voice agents, calibrated with real phone numbers, that cold-call prospects on behalf of companies in both India and the US — each in their own time zone. Built with ElevenLabs, SuperAGI, and Hooman Labs.",stats:[{value:"~1,000",label:"Prospects called"},{value:"10",label:"Qualified meetings"}],tags:["ElevenLabs","SuperAGI","Hooman Labs","Voice AI"]},{index:"03",title:"AI Lead Intelligence & Personalization",kicker:"Custom workflow",description:"I built my own workflow and custom skills for enrichment, signal customization, and personalization — producing hyper-personalized emails at scale. It plugs into Instantly and MailDoso via MCP + API connectors, so enrichment, drafting, and live analytics happen in one place. Claude does the heavy lifting on synthesis.",stats:[{value:"Real-time",label:"Analytics & reports"}],tags:["Claude","MCP","API Integration","Apollo","Personalization"]},{index:"04",title:"Deliverability at Scale",kicker:"Clean data",description:"Across 50+ inboxes, I hold deliverability at ~100% with near-zero bounces on every campaign — because the data I prospect is verified and clean before a single send.",stats:[{value:"50+",label:"Inboxes"},{value:"~100%",label:"Deliverability"},{value:"~0",label:"Bounces"}],tags:["Deliverability","Data Hygiene","Verified Data"]},{index:"05",title:"US Client Outreach",kicker:"Live · 2 months",description:"For the past two months I've been running outreach and lead generation for a US-based client — end to end, powered by my full AI stack: enrichment, personalization, multi-inbox sending, and live reporting.",stats:[{value:"Ongoing",label:"US-based client"}],tags:["Lead Generation","Outreach","AI Automation"]}],skills:[{group:"Marketing & Demand Gen",items:["Lead Generation","Demand Generation","Inbound & Outbound","Email Marketing","Campaign Management","Google Ads","LinkedIn Ads","Client Acquisition","Sales Enablement","Pitch Decks & Proposals"]},{group:"AI & Automation",items:["AI Agents & Conversational AI (SuperAGI)","Voice AI (ElevenLabs, Hooman Labs)","Workflow Automation","MCP & API Integration","Signal-Based Sourcing (Apollo)","Automated Sequencing (Instantly / MailDoso)","Generative AI (Claude)"]},{group:"Data & Analytics",items:["Campaign Performance Analysis","Marketing Analytics","A/B Testing","Reporting Dashboards","Data-Driven Decision Making"]}],platforms:[{name:"Instantly",logo:"logos/instantly-icon.svg",type:"icon"},{name:"MailDoso",logo:"logos/maildoso-icon.png",type:"icon"},{name:"HubSpot",logo:"logos/hubspot.svg",type:"icon"},{name:"Apollo",logo:"logos/apollo.svg",type:"icon"},{name:"MailChimp",logo:"logos/mailchimp.svg",type:"icon"},{name:"ElevenLabs",logo:"logos/elevenlabs.svg",type:"icon"},{name:"SuperAGI",logo:"logos/superagi-icon.svg",type:"icon"},{name:"Hooman Labs",logo:"logos/hoomanlabs.svg",type:"icon"},{name:"Claude",logo:"logos/claude.svg",type:"icon"}],experience:[{role:"Email Marketing & Automation",company:"Marketing Agency",period:"Current",location:"Delhi, India",note:"Built email infrastructure & DNS from scratch; run campaigns end to end with AI-assisted enrichment, personalization, and deliverability management."},{role:"Sales & Marketing Intern",company:"—",period:"May – Jun 2025",location:"Gurugram",note:"Market research, lead generation, and sales enablement; built promotional content and pitch materials."}],education:[{degree:"PGDM, Marketing & AI/ML",school:"New Delhi Institute of Management",period:"Completed"},{degree:"B.Com",school:"Dr. Bhim Rao Ambedkar University, Agra",period:"2020 – 2023"}],certifications:["HubSpot Marketing Hub","HubSpot Inbound","Google Analytics","Google Digital Marketing","Generative AI"],contact:{heading:"Let's build your growth engine.",email:"sushantsingh2305@gmail.com",phone:"+91 98763 96826",phoneHref:"+919876396826",linkedin:"https://linkedin.com/in/sushant--singh",location:"New Delhi, India"}},oe=r=>String(r);function pT(r){const t=dT,e=`
    <nav class="nav">
      <a class="nav-logo" href="#hero">SS<span>/</span></a>
      <div class="nav-links">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#capabilities">Capabilities</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>`,n=`
    <section id="hero" class="section section--hero" data-section="0">
      <div class="hero-chips" aria-hidden="true">
        ${t.hero.chips.map(u=>`<span class="hchip">${oe(u)}</span>`).join("")}
      </div>
      <div class="hero-top reveal">
        <span class="hero-name">${oe(t.hero.name)}</span>
        <span class="hero-role">${oe(t.hero.title)}</span>
      </div>
      <div class="hero-spacer"></div>
      <div class="hero-foot">
        <div class="hero-foot-left">
          <h1 class="hero-title">
            <span class="line"><span class="reveal-up">I build email engines</span></span>
            <span class="line"><span class="reveal-up">that actually</span> <span class="reveal-up accent">convert.</span></span>
          </h1>
          <p class="hero-sub reveal">${oe(t.hero.subline)}</p>
        </div>
        <span class="scroll-hint reveal">Scroll <span class="arrow">↓</span></span>
      </div>
    </section>`,i=`
    <section id="about" class="section section--about" data-section="1">
      <div class="col-label reveal">01 — About</div>
      <div class="about-stage" id="aboutStage">
        <button class="about-cta reveal" id="aboutCta">
          <span class="about-cta-txt">${oe(t.about.ctaLabel)}</span>
          <span class="about-cta-arrow">→</span>
        </button>
        <div class="about-panel" id="aboutPanel" aria-hidden="true">
          <div class="about-panel-inner">
            ${t.about.paragraphs.map((u,h)=>`<p class="${h===0?"about-lead":""}">${oe(u)}</p>`).join("")}
            <button class="about-close" id="aboutClose">Close ✕</button>
          </div>
        </div>
      </div>
    </section>`,s=`
    <section id="work" class="section section--work" data-section="2">
      <div class="col-label reveal">02 — Selected Work</div>
      <div class="projects">
        ${t.projects.map(u=>`
          <article class="project reveal">
            <div class="project-head">
              <span class="project-index">${oe(u.index)}</span>
              <span class="project-kicker">${oe(u.kicker)}</span>
            </div>
            <h3 class="project-title">${oe(u.title)}</h3>
            <p class="project-desc">${oe(u.description)}</p>
            <div class="project-stats">
              ${u.stats.map(h=>`<div class="stat"><span class="stat-val">${oe(h.value)}</span><span class="stat-lab">${oe(h.label)}</span></div>`).join("")}
            </div>
            <div class="project-tags">
              ${u.tags.map(h=>`<span class="tag">${oe(h)}</span>`).join("")}
            </div>
          </article>`).join("")}
      </div>
    </section>`,o=`
    <section id="capabilities" class="section section--skills" data-section="3">
      <div class="col-label reveal">03 — Capabilities</div>
      <div class="skills-grid">
        ${t.skills.map(u=>`
          <div class="skill-group reveal">
            <h4 class="skill-heading">${oe(u.group)}</h4>
            <ul class="skill-list">${u.items.map(h=>`<li>${oe(h)}</li>`).join("")}</ul>
          </div>`).join("")}
      </div>
    </section>`,a=`
    <section id="platforms" class="section section--platforms" data-section="4">
      <div class="col-label reveal">04 — Platforms & Stack</div>
      <div class="platform-grid">
        ${t.platforms.map(u=>{const h=u.type==="wordmark"?"platform-logo platform-logo--wordmark":"platform-logo",f=u.type==="icon"?`<span class="platform-name">${oe(u.name)}</span>`:"";return`<div class="platform platform--${oe(u.type)} reveal" title="${oe(u.name)}">
              <span class="${h}" style="--logo:url('/sushant-singh/${oe(u.logo)}')" role="img" aria-label="${oe(u.name)}"></span>
              ${f}
            </div>`}).join("")}
      </div>
    </section>`,l=`
    <section id="experience" class="section section--exp" data-section="5">
      <div class="col-label reveal">05 — Experience</div>
      <div class="timeline">
        ${t.experience.map(u=>`
          <div class="tl-item reveal">
            <div class="tl-period">${oe(u.period)}</div>
            <div class="tl-body">
              <h4>${oe(u.role)}${u.company&&u.company!=="—"?` <span class="tl-at">· ${oe(u.company)}</span>`:""}</h4>
              <p>${oe(u.note)}</p>
              <span class="tl-loc">${oe(u.location)}</span>
            </div>
          </div>`).join("")}
      </div>
      <div class="edu reveal">
        <div class="edu-col">
          <h5>Education</h5>
          ${t.education.map(u=>`<p><strong>${oe(u.degree)}</strong><br/>${oe(u.school)} · ${oe(u.period)}</p>`).join("")}
        </div>
        <div class="edu-col">
          <h5>Certifications</h5>
          <div class="cert-chips">${t.certifications.map(u=>`<span class="chip">${oe(u)}</span>`).join("")}</div>
        </div>
      </div>
    </section>`,c=`
    <section id="contact" class="section section--contact" data-section="6">
      <div class="col-label reveal">06 — Contact</div>
      <h2 class="contact-head reveal">${oe(t.contact.heading)}</h2>
      <div class="contact-links">
        <a class="contact-link reveal" href="mailto:${oe(t.contact.email)}">
          <span class="cl-label">Email</span><span class="cl-value">${oe(t.contact.email)}</span>
        </a>
        <a class="contact-link reveal" href="tel:${oe(t.contact.phoneHref)}">
          <span class="cl-label">Phone</span><span class="cl-value">${oe(t.contact.phone)}</span>
        </a>
        <a class="contact-link reveal" href="${oe(t.contact.linkedin)}" target="_blank" rel="noopener">
          <span class="cl-label">LinkedIn</span><span class="cl-value">/in/sushant--singh</span>
        </a>
        <div class="contact-link reveal">
          <span class="cl-label">Location</span><span class="cl-value">${oe(t.contact.location)}</span>
        </div>
      </div>
      <footer class="footer">
        <span>© ${new Date().getFullYear()} ${oe(t.hero.name)}</span>
      </footer>
    </section>`;r.innerHTML=e+n+i+s+o+a+l+c}function mT(r){const t=document.getElementById("aboutCta"),e=document.getElementById("aboutPanel"),n=document.getElementById("aboutClose"),i=document.getElementById("aboutStage");if(!t||!e)return;Sn.set(e,{rotationX:-92,opacity:0,transformPerspective:900,transformOrigin:"top center"});const s=()=>{e.classList.add("is-open"),e.setAttribute("aria-hidden","false"),i&&i.classList.add("panel-open"),Sn.to(t,{autoAlpha:0,y:-10,duration:.3,ease:"power2.in"}),Sn.to(e,{rotationX:0,opacity:1,duration:.9,ease:"power3.out",delay:.15,onStart:()=>e.style.pointerEvents="auto",onComplete:r})},o=()=>{Sn.to(e,{rotationX:-92,opacity:0,duration:.5,ease:"power3.in",onComplete:()=>{e.classList.remove("is-open"),e.setAttribute("aria-hidden","true"),e.style.pointerEvents="none",i&&i.classList.remove("panel-open"),Sn.to(t,{autoAlpha:1,y:0,duration:.4,ease:"power2.out"}),r&&r()}})};t.addEventListener("click",s),n&&n.addEventListener("click",o)}class _T extends ph{constructor(t){super(t)}load(t,e,n,i){const s=this,o=new ry(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){const l=s.parse(JSON.parse(a));e&&e(l)},n,i)}parse(t){return new gT(t)}}class gT{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],i=vT(t,e,this.data);for(let s=0,o=i.length;s<o;s++)n.push(...i[s].toShapes());return n}}function vT(r,t,e){const n=Array.from(r),i=t/e.resolution,s=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*i,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const u=n[c];if(u===`
`)a=0,l-=s;else{const h=xT(u,i,a,l,e);a+=h.offsetX,o.push(h.path)}}return o}function xT(r,t,e,n,i){const s=i.glyphs[r]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+r+'" does not exists in font family '+i.familyName+".");return}const o=new cy;let a,l,c,u,h,f,d,_;if(s.o){const g=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let p=0,m=g.length;p<m;)switch(g[p++]){case"m":a=g[p++]*t+e,l=g[p++]*t+n,o.moveTo(a,l);break;case"l":a=g[p++]*t+e,l=g[p++]*t+n,o.lineTo(a,l);break;case"q":c=g[p++]*t+e,u=g[p++]*t+n,h=g[p++]*t+e,f=g[p++]*t+n,o.quadraticCurveTo(h,f,c,u);break;case"b":c=g[p++]*t+e,u=g[p++]*t+n,h=g[p++]*t+e,f=g[p++]*t+n,d=g[p++]*t+e,_=g[p++]*t+n,o.bezierCurveTo(h,f,d,_,c,u);break}}return{offsetX:s.ha*t,path:o}}class ST extends dh{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const i=n.generateShapes(t,e.size);e.depth===void 0&&e.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),e.depth=e.depth!==void 0?e.depth:e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(i,e)}this.type="TextGeometry"}}function MT(r){new _T().load("/sushant-singh/fonts/helvetiker_bold.typeface.json",e=>{const n="MARKETING",o=new pl({color:"#883DFF",metalness:.15,roughness:.38,emissive:"#B45CFF",emissiveIntensity:.1}),a=new pl({color:"#FF74CD",metalness:.25,roughness:.45}),l=new Cs,c=[],u=.08;let h=0;for(const d of n){const _=new ST(d,{font:e,size:1,depth:.42,curveSegments:10,bevelEnabled:!1});_.computeBoundingBox();const g=_.boundingBox,p=g.max.x-g.min.x,m=g.max.y-g.min.y;_.translate(-g.min.x,-g.min.y-m/2,-.42/2);const y=new bn(_,[o,a]);y.castShadow=!0,y.receiveShadow=!1,y.position.x=h,l.add(y),c.push({mesh:y,baseX:h,w:p}),h+=p+u}const f=h-u;c.forEach(d=>{d.mesh.position.x-=f/2,d.baseX-=f/2,d.home={x:d.baseX,y:0,z:0},d.scatter={x:(Math.random()-.5)*12,y:(Math.random()-.5)*6,z:(Math.random()-.5)*6-1,rx:(Math.random()-.5)*.7,ry:(Math.random()-.5)*.9,rz:(Math.random()-.5)*.6}}),l.userData.totalW=f,r({group:l,letters:c,faceMat:o,sideMat:a})})}Sn.registerPlugin(te);const yn={flame:"#883DFF",fire:"#FF74CD",brown:"#2E1A54",sand:"#EFE4FF",smoke:"#100B1F"};pT(document.getElementById("app"));const yT=document.getElementById("webgl"),an={w:window.innerWidth,h:window.innerHeight},In=new MM;In.background=new Zt(yn.smoke);In.fog=new uh(yn.smoke,8,22);const ui=new Hn(40,an.w/an.h,.1,100);ui.position.set(0,.6,7.2);In.add(ui);const Zi=new SM({canvas:yT,antialias:!0});Zi.setSize(an.w,an.h);Zi.setPixelRatio(Math.min(window.devicePixelRatio,2));Zi.shadowMap.enabled=!0;Zi.shadowMap.type=Fd;Zi.toneMapping=Zu;Zi.toneMappingExposure=1.2;const ET=new ly(yn.sand,.62);In.add(ET);const _i=new Pl(yn.sand,3.2);_i.position.set(5,7,5);_i.castShadow=!0;_i.shadow.mapSize.set(2048,2048);_i.shadow.camera.near=1;_i.shadow.camera.far=30;_i.shadow.camera.left=-12;_i.shadow.camera.right=12;_i.shadow.camera.top=12;_i.shadow.camera.bottom=-12;_i.shadow.bias=-4e-4;In.add(_i);const jm=new Pl(yn.flame,2);jm.position.set(-6,4,4);In.add(jm);const Qm=new oy(yn.sand,10,40,2);Qm.position.set(-5,2,4);In.add(Qm);const t_=new Pl(yn.flame,.9);t_.position.set(-3,2,-5);In.add(t_);const e_=new Pl(yn.sand,1.8);e_.position.set(-1,1.5,7);In.add(e_);const TT=new so(60,34),bT=new un({depthWrite:!1,uniforms:{uTop:{value:new Zt(yn.smoke)},uMid:{value:new Zt(yn.brown)},uGlow:{value:new Zt(yn.flame)}},vertexShader:`
    varying vec2 vUv;
    void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }
  `,fragmentShader:`
    uniform vec3 uTop; uniform vec3 uMid; uniform vec3 uGlow;
    varying vec2 vUv;
    void main(){
      // vertical gradient smoke -> brown, plus a warm horizon glow low-center
      vec3 col = mix(uMid, uTop, smoothstep(0.25, 1.0, vUv.y));
      float glow = smoothstep(0.55, 0.0, distance(vUv, vec2(0.5, 0.28)));
      col = mix(col, uGlow, glow * 0.16);
      gl_FragColor = vec4(col, 1.0);
    }
  `}),n_=new bn(TT,bT);n_.position.set(0,2,-12);In.add(n_);const wT=new pl({color:yn.smoke,roughness:.9,metalness:0}),Nl=new bn(new so(60,60),wT);Nl.rotation.x=-Math.PI/2;Nl.position.y=-1.15;Nl.receiveShadow=!0;In.add(Nl);const i_=[],Ud=[yn.brown,yn.fire,yn.sand];for(let r=0;r<7;r++){const t=.4+Math.random()*1.1,e=new ro(t,t*(.4+Math.random()),t*(.2+Math.random()*.3)),n=new pl({color:Ud[r%Ud.length],roughness:.6,metalness:.1}),i=new bn(e,n);i.castShadow=!0,i.position.set((Math.random()-.5)*16,Math.random()*6-1,-2-Math.random()*8),i.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),i.userData.seed=Math.random()*100,i.userData.baseY=i.position.y,In.add(i),i_.push(i)}let Wr=null;const zr=new Cs;In.add(zr);MT(r=>{Wr=r,zr.add(Wr.group),Wr.letters.forEach((t,e)=>{t.mesh.scale.setScalar(0),Sn.to(t.mesh.scale,{x:1,y:1,z:1,duration:.9,ease:"back.out(1.6)",delay:.5+e*.06})}),o_()});const la=new my(Zi);la.addPass(new _y(In,ui));const AT=new Zs(new ft(an.w,an.h),.35,.6,.6);la.addPass(AT);la.addPass(new xy);const Ol=new Cy({lerp:.09});Ol.on("scroll",te.update);Sn.ticker.add(r=>Ol.raf(r*1e3));Sn.ticker.lagSmoothing(0);const CT=(r,t,e)=>{const n=Math.min(1,Math.max(0,(e-r)/(t-r)));return n*n*(3-2*n)};let r_=0;Ol.on("scroll",({scroll:r,limit:t})=>{r_=t>0?r/t:0});const gi={x:0,y:0,tx:0,ty:0};window.addEventListener("pointermove",r=>{gi.tx=(r.clientX/an.w-.5)*2,gi.ty=(r.clientY/an.h-.5)*2});const RT=new Ap;function s_(){const r=RT.getElapsedTime();if(Wr){const t=CT(0,.93,r_),e=1-t;zr.position.set(0,.2-t*.55,-t*.6);const n=og.degToRad(ui.fov),i=Math.abs(ui.position.z-zr.position.z),o=2*Math.tan(n/2)*i*ui.aspect,a=Wr.group.userData.totalW||10,l=o*.82/a;zr.scale.setScalar(l),zr.rotation.y=Math.sin(r*.1)*.05*e,zr.rotation.x=Math.sin(r*.08)*.02*e;const c=(u,h,f)=>u+(h-u)*f;Wr.letters.forEach((u,h)=>{const f=Math.sin(r*.6+h*.7)*.14*e;u.mesh.position.x=c(u.scatter.x,u.home.x,t),u.mesh.position.y=c(u.scatter.y,u.home.y,t)+f,u.mesh.position.z=c(u.scatter.z,u.home.z,t),u.mesh.rotation.x=u.scatter.rx*e,u.mesh.rotation.y=u.scatter.ry*e,u.mesh.rotation.z=u.scatter.rz*e}),Wr.faceMat.emissiveIntensity=.06+t*.1}i_.forEach(t=>{t.rotation.x+=.0015,t.rotation.y+=.001,t.position.y=t.userData.baseY+Math.sin(r*.3+t.userData.seed)*.3}),gi.x+=(gi.tx-gi.x)*.05,gi.y+=(gi.ty-gi.y)*.05,ui.position.x=gi.x*.5,ui.position.y=.6-gi.y*.3,ui.lookAt(0,.2,0),la.render(),requestAnimationFrame(s_)}window.addEventListener("resize",()=>{an.w=window.innerWidth,an.h=window.innerHeight,ui.aspect=an.w/an.h,ui.updateProjectionMatrix(),Zi.setSize(an.w,an.h),Zi.setPixelRatio(Math.min(window.devicePixelRatio,2)),la.setSize(an.w,an.h)});function PT(){Sn.utils.toArray(".reveal").forEach(r=>{Sn.fromTo(r,{y:30,autoAlpha:0},{y:0,autoAlpha:1,duration:.9,ease:"power3.out",scrollTrigger:{trigger:r,start:"top 88%"}})}),Sn.fromTo(".reveal-up",{yPercent:115},{yPercent:0,duration:1,ease:"power4.out",stagger:.1,delay:.3})}document.querySelectorAll(".nav a, .nav-logo").forEach(r=>{r.addEventListener("click",t=>{const e=r.getAttribute("href");if(e&&e.startsWith("#")){t.preventDefault();const n=document.querySelector(e);n&&Ol.scrollTo(n)}})});mT(()=>te.refresh());let Nd=!1;function o_(){if(Nd)return;Nd=!0;const r=document.getElementById("loader");Sn.to(".loader-fill",{scaleX:1,duration:.8,ease:"power2.inOut"}),Sn.to(r,{autoAlpha:0,duration:.7,delay:.7,ease:"power2.inOut",onComplete:()=>{r.style.display="none",PT(),te.refresh()}})}s_();setTimeout(o_,4e3);
