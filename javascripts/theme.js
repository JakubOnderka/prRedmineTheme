/*
 RequireJS 2.1.16 Copyright (c) 2010-2015, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
var requirejs,require,define;
(function(ba){function G(b){return"[object Function]"===K.call(b)}function H(b){return"[object Array]"===K.call(b)}function v(b,c){if(b){var d;for(d=0;d<b.length&&(!b[d]||!c(b[d],d,b));d+=1);}}function T(b,c){if(b){var d;for(d=b.length-1;-1<d&&(!b[d]||!c(b[d],d,b));d-=1);}}function t(b,c){return fa.call(b,c)}function m(b,c){return t(b,c)&&b[c]}function B(b,c){for(var d in b)if(t(b,d)&&c(b[d],d))break}function U(b,c,d,e){c&&B(c,function(c,g){if(d||!t(b,g))e&&"object"===typeof c&&c&&!H(c)&&!G(c)&&!(c instanceof
RegExp)?(b[g]||(b[g]={}),U(b[g],c,d,e)):b[g]=c});return b}function u(b,c){return function(){return c.apply(b,arguments)}}function ca(b){throw b;}function da(b){if(!b)return b;var c=ba;v(b.split("."),function(b){c=c[b]});return c}function C(b,c,d,e){c=Error(c+"\nhttp://requirejs.org/docs/errors.html#"+b);c.requireType=b;c.requireModules=e;d&&(c.originalError=d);return c}function ga(b){function c(a,k,b){var f,l,c,d,e,g,i,p,k=k&&k.split("/"),h=j.map,n=h&&h["*"];if(a){a=a.split("/");l=a.length-1;j.nodeIdCompat&&
Q.test(a[l])&&(a[l]=a[l].replace(Q,""));"."===a[0].charAt(0)&&k&&(l=k.slice(0,k.length-1),a=l.concat(a));l=a;for(c=0;c<l.length;c++)if(d=l[c],"."===d)l.splice(c,1),c-=1;else if(".."===d&&!(0===c||1==c&&".."===l[2]||".."===l[c-1])&&0<c)l.splice(c-1,2),c-=2;a=a.join("/")}if(b&&h&&(k||n)){l=a.split("/");c=l.length;a:for(;0<c;c-=1){e=l.slice(0,c).join("/");if(k)for(d=k.length;0<d;d-=1)if(b=m(h,k.slice(0,d).join("/")))if(b=m(b,e)){f=b;g=c;break a}!i&&(n&&m(n,e))&&(i=m(n,e),p=c)}!f&&i&&(f=i,g=p);f&&(l.splice(0,
g,f),a=l.join("/"))}return(f=m(j.pkgs,a))?f:a}function d(a){z&&v(document.getElementsByTagName("script"),function(k){if(k.getAttribute("data-requiremodule")===a&&k.getAttribute("data-requirecontext")===i.contextName)return k.parentNode.removeChild(k),!0})}function e(a){var k=m(j.paths,a);if(k&&H(k)&&1<k.length)return k.shift(),i.require.undef(a),i.makeRequire(null,{skipMap:!0})([a]),!0}function n(a){var k,c=a?a.indexOf("!"):-1;-1<c&&(k=a.substring(0,c),a=a.substring(c+1,a.length));return[k,a]}function p(a,
k,b,f){var l,d,e=null,g=k?k.name:null,j=a,p=!0,h="";a||(p=!1,a="_@r"+(K+=1));a=n(a);e=a[0];a=a[1];e&&(e=c(e,g,f),d=m(r,e));a&&(e?h=d&&d.normalize?d.normalize(a,function(a){return c(a,g,f)}):-1===a.indexOf("!")?c(a,g,f):a:(h=c(a,g,f),a=n(h),e=a[0],h=a[1],b=!0,l=i.nameToUrl(h)));b=e&&!d&&!b?"_unnormalized"+(O+=1):"";return{prefix:e,name:h,parentMap:k,unnormalized:!!b,url:l,originalName:j,isDefine:p,id:(e?e+"!"+h:h)+b}}function s(a){var k=a.id,b=m(h,k);b||(b=h[k]=new i.Module(a));return b}function q(a,
k,b){var f=a.id,c=m(h,f);if(t(r,f)&&(!c||c.defineEmitComplete))"defined"===k&&b(r[f]);else if(c=s(a),c.error&&"error"===k)b(c.error);else c.on(k,b)}function w(a,b){var c=a.requireModules,f=!1;if(b)b(a);else if(v(c,function(b){if(b=m(h,b))b.error=a,b.events.error&&(f=!0,b.emit("error",a))}),!f)g.onError(a)}function x(){R.length&&(ha.apply(A,[A.length,0].concat(R)),R=[])}function y(a){delete h[a];delete V[a]}function F(a,b,c){var f=a.map.id;a.error?a.emit("error",a.error):(b[f]=!0,v(a.depMaps,function(f,
d){var e=f.id,g=m(h,e);g&&(!a.depMatched[d]&&!c[e])&&(m(b,e)?(a.defineDep(d,r[e]),a.check()):F(g,b,c))}),c[f]=!0)}function D(){var a,b,c=(a=1E3*j.waitSeconds)&&i.startTime+a<(new Date).getTime(),f=[],l=[],g=!1,h=!0;if(!W){W=!0;B(V,function(a){var i=a.map,j=i.id;if(a.enabled&&(i.isDefine||l.push(a),!a.error))if(!a.inited&&c)e(j)?g=b=!0:(f.push(j),d(j));else if(!a.inited&&(a.fetched&&i.isDefine)&&(g=!0,!i.prefix))return h=!1});if(c&&f.length)return a=C("timeout","Load timeout for modules: "+f,null,
f),a.contextName=i.contextName,w(a);h&&v(l,function(a){F(a,{},{})});if((!c||b)&&g)if((z||ea)&&!X)X=setTimeout(function(){X=0;D()},50);W=!1}}function E(a){t(r,a[0])||s(p(a[0],null,!0)).init(a[1],a[2])}function I(a){var a=a.currentTarget||a.srcElement,b=i.onScriptLoad;a.detachEvent&&!Y?a.detachEvent("onreadystatechange",b):a.removeEventListener("load",b,!1);b=i.onScriptError;(!a.detachEvent||Y)&&a.removeEventListener("error",b,!1);return{node:a,id:a&&a.getAttribute("data-requiremodule")}}function J(){var a;
for(x();A.length;){a=A.shift();if(null===a[0])return w(C("mismatch","Mismatched anonymous define() module: "+a[a.length-1]));E(a)}}var W,Z,i,L,X,j={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},h={},V={},$={},A=[],r={},S={},aa={},K=1,O=1;L={require:function(a){return a.require?a.require:a.require=i.makeRequire(a.map)},exports:function(a){a.usingExports=!0;if(a.map.isDefine)return a.exports?r[a.map.id]=a.exports:a.exports=r[a.map.id]={}},module:function(a){return a.module?
a.module:a.module={id:a.map.id,uri:a.map.url,config:function(){return m(j.config,a.map.id)||{}},exports:a.exports||(a.exports={})}}};Z=function(a){this.events=m($,a.id)||{};this.map=a;this.shim=m(j.shim,a.id);this.depExports=[];this.depMaps=[];this.depMatched=[];this.pluginMaps={};this.depCount=0};Z.prototype={init:function(a,b,c,f){f=f||{};if(!this.inited){this.factory=b;if(c)this.on("error",c);else this.events.error&&(c=u(this,function(a){this.emit("error",a)}));this.depMaps=a&&a.slice(0);this.errback=
c;this.inited=!0;this.ignore=f.ignore;f.enabled||this.enabled?this.enable():this.check()}},defineDep:function(a,b){this.depMatched[a]||(this.depMatched[a]=!0,this.depCount-=1,this.depExports[a]=b)},fetch:function(){if(!this.fetched){this.fetched=!0;i.startTime=(new Date).getTime();var a=this.map;if(this.shim)i.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],u(this,function(){return a.prefix?this.callPlugin():this.load()}));else return a.prefix?this.callPlugin():this.load()}},load:function(){var a=
this.map.url;S[a]||(S[a]=!0,i.load(this.map.id,a))},check:function(){if(this.enabled&&!this.enabling){var a,b,c=this.map.id;b=this.depExports;var f=this.exports,l=this.factory;if(this.inited)if(this.error)this.emit("error",this.error);else{if(!this.defining){this.defining=!0;if(1>this.depCount&&!this.defined){if(G(l)){if(this.events.error&&this.map.isDefine||g.onError!==ca)try{f=i.execCb(c,l,b,f)}catch(d){a=d}else f=i.execCb(c,l,b,f);this.map.isDefine&&void 0===f&&((b=this.module)?f=b.exports:this.usingExports&&
(f=this.exports));if(a)return a.requireMap=this.map,a.requireModules=this.map.isDefine?[this.map.id]:null,a.requireType=this.map.isDefine?"define":"require",w(this.error=a)}else f=l;this.exports=f;if(this.map.isDefine&&!this.ignore&&(r[c]=f,g.onResourceLoad))g.onResourceLoad(i,this.map,this.depMaps);y(c);this.defined=!0}this.defining=!1;this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else this.fetch()}},callPlugin:function(){var a=
this.map,b=a.id,d=p(a.prefix);this.depMaps.push(d);q(d,"defined",u(this,function(f){var l,d;d=m(aa,this.map.id);var e=this.map.name,P=this.map.parentMap?this.map.parentMap.name:null,n=i.makeRequire(a.parentMap,{enableBuildCallback:!0});if(this.map.unnormalized){if(f.normalize&&(e=f.normalize(e,function(a){return c(a,P,!0)})||""),f=p(a.prefix+"!"+e,this.map.parentMap),q(f,"defined",u(this,function(a){this.init([],function(){return a},null,{enabled:!0,ignore:!0})})),d=m(h,f.id)){this.depMaps.push(f);
if(this.events.error)d.on("error",u(this,function(a){this.emit("error",a)}));d.enable()}}else d?(this.map.url=i.nameToUrl(d),this.load()):(l=u(this,function(a){this.init([],function(){return a},null,{enabled:!0})}),l.error=u(this,function(a){this.inited=!0;this.error=a;a.requireModules=[b];B(h,function(a){0===a.map.id.indexOf(b+"_unnormalized")&&y(a.map.id)});w(a)}),l.fromText=u(this,function(f,c){var d=a.name,e=p(d),P=M;c&&(f=c);P&&(M=!1);s(e);t(j.config,b)&&(j.config[d]=j.config[b]);try{g.exec(f)}catch(h){return w(C("fromtexteval",
"fromText eval for "+b+" failed: "+h,h,[b]))}P&&(M=!0);this.depMaps.push(e);i.completeLoad(d);n([d],l)}),f.load(a.name,n,l,j))}));i.enable(d,this);this.pluginMaps[d.id]=d},enable:function(){V[this.map.id]=this;this.enabling=this.enabled=!0;v(this.depMaps,u(this,function(a,b){var c,f;if("string"===typeof a){a=p(a,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap);this.depMaps[b]=a;if(c=m(L,a.id)){this.depExports[b]=c(this);return}this.depCount+=1;q(a,"defined",u(this,function(a){this.defineDep(b,
a);this.check()}));this.errback?q(a,"error",u(this,this.errback)):this.events.error&&q(a,"error",u(this,function(a){this.emit("error",a)}))}c=a.id;f=h[c];!t(L,c)&&(f&&!f.enabled)&&i.enable(a,this)}));B(this.pluginMaps,u(this,function(a){var b=m(h,a.id);b&&!b.enabled&&i.enable(a,this)}));this.enabling=!1;this.check()},on:function(a,b){var c=this.events[a];c||(c=this.events[a]=[]);c.push(b)},emit:function(a,b){v(this.events[a],function(a){a(b)});"error"===a&&delete this.events[a]}};i={config:j,contextName:b,
registry:h,defined:r,urlFetched:S,defQueue:A,Module:Z,makeModuleMap:p,nextTick:g.nextTick,onError:w,configure:function(a){a.baseUrl&&"/"!==a.baseUrl.charAt(a.baseUrl.length-1)&&(a.baseUrl+="/");var b=j.shim,c={paths:!0,bundles:!0,config:!0,map:!0};B(a,function(a,b){c[b]?(j[b]||(j[b]={}),U(j[b],a,!0,!0)):j[b]=a});a.bundles&&B(a.bundles,function(a,b){v(a,function(a){a!==b&&(aa[a]=b)})});a.shim&&(B(a.shim,function(a,c){H(a)&&(a={deps:a});if((a.exports||a.init)&&!a.exportsFn)a.exportsFn=i.makeShimExports(a);
b[c]=a}),j.shim=b);a.packages&&v(a.packages,function(a){var b,a="string"===typeof a?{name:a}:a;b=a.name;a.location&&(j.paths[b]=a.location);j.pkgs[b]=a.name+"/"+(a.main||"main").replace(ia,"").replace(Q,"")});B(h,function(a,b){!a.inited&&!a.map.unnormalized&&(a.map=p(b))});if(a.deps||a.callback)i.require(a.deps||[],a.callback)},makeShimExports:function(a){return function(){var b;a.init&&(b=a.init.apply(ba,arguments));return b||a.exports&&da(a.exports)}},makeRequire:function(a,e){function j(c,d,m){var n,
q;e.enableBuildCallback&&(d&&G(d))&&(d.__requireJsBuild=!0);if("string"===typeof c){if(G(d))return w(C("requireargs","Invalid require call"),m);if(a&&t(L,c))return L[c](h[a.id]);if(g.get)return g.get(i,c,a,j);n=p(c,a,!1,!0);n=n.id;return!t(r,n)?w(C("notloaded",'Module name "'+n+'" has not been loaded yet for context: '+b+(a?"":". Use require([])"))):r[n]}J();i.nextTick(function(){J();q=s(p(null,a));q.skipMap=e.skipMap;q.init(c,d,m,{enabled:!0});D()});return j}e=e||{};U(j,{isBrowser:z,toUrl:function(b){var d,
e=b.lastIndexOf("."),k=b.split("/")[0];if(-1!==e&&(!("."===k||".."===k)||1<e))d=b.substring(e,b.length),b=b.substring(0,e);return i.nameToUrl(c(b,a&&a.id,!0),d,!0)},defined:function(b){return t(r,p(b,a,!1,!0).id)},specified:function(b){b=p(b,a,!1,!0).id;return t(r,b)||t(h,b)}});a||(j.undef=function(b){x();var c=p(b,a,!0),e=m(h,b);d(b);delete r[b];delete S[c.url];delete $[b];T(A,function(a,c){a[0]===b&&A.splice(c,1)});e&&(e.events.defined&&($[b]=e.events),y(b))});return j},enable:function(a){m(h,a.id)&&
s(a).enable()},completeLoad:function(a){var b,c,d=m(j.shim,a)||{},g=d.exports;for(x();A.length;){c=A.shift();if(null===c[0]){c[0]=a;if(b)break;b=!0}else c[0]===a&&(b=!0);E(c)}c=m(h,a);if(!b&&!t(r,a)&&c&&!c.inited){if(j.enforceDefine&&(!g||!da(g)))return e(a)?void 0:w(C("nodefine","No define call for "+a,null,[a]));E([a,d.deps||[],d.exportsFn])}D()},nameToUrl:function(a,b,c){var d,e,h;(d=m(j.pkgs,a))&&(a=d);if(d=m(aa,a))return i.nameToUrl(d,b,c);if(g.jsExtRegExp.test(a))d=a+(b||"");else{d=j.paths;
a=a.split("/");for(e=a.length;0<e;e-=1)if(h=a.slice(0,e).join("/"),h=m(d,h)){H(h)&&(h=h[0]);a.splice(0,e,h);break}d=a.join("/");d+=b||(/^data\:|\?/.test(d)||c?"":".js");d=("/"===d.charAt(0)||d.match(/^[\w\+\.\-]+:/)?"":j.baseUrl)+d}return j.urlArgs?d+((-1===d.indexOf("?")?"?":"&")+j.urlArgs):d},load:function(a,b){g.load(i,a,b)},execCb:function(a,b,c,d){return b.apply(d,c)},onScriptLoad:function(a){if("load"===a.type||ja.test((a.currentTarget||a.srcElement).readyState))N=null,a=I(a),i.completeLoad(a.id)},
onScriptError:function(a){var b=I(a);if(!e(b.id))return w(C("scripterror","Script error for: "+b.id,a,[b.id]))}};i.require=i.makeRequire();return i}var g,x,y,D,I,E,N,J,s,O,ka=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,la=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,Q=/\.js$/,ia=/^\.\//;x=Object.prototype;var K=x.toString,fa=x.hasOwnProperty,ha=Array.prototype.splice,z=!!("undefined"!==typeof window&&"undefined"!==typeof navigator&&window.document),ea=!z&&"undefined"!==typeof importScripts,ja=
z&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,Y="undefined"!==typeof opera&&"[object Opera]"===opera.toString(),F={},q={},R=[],M=!1;if("undefined"===typeof define){if("undefined"!==typeof requirejs){if(G(requirejs))return;q=requirejs;requirejs=void 0}"undefined"!==typeof require&&!G(require)&&(q=require,require=void 0);g=requirejs=function(b,c,d,e){var n,p="_";!H(b)&&"string"!==typeof b&&(n=b,H(c)?(b=c,c=d,d=e):b=[]);n&&n.context&&(p=n.context);(e=m(F,p))||(e=F[p]=g.s.newContext(p));
n&&e.configure(n);return e.require(b,c,d)};g.config=function(b){return g(b)};g.nextTick="undefined"!==typeof setTimeout?function(b){setTimeout(b,4)}:function(b){b()};require||(require=g);g.version="2.1.16";g.jsExtRegExp=/^\/|:|\?|\.js$/;g.isBrowser=z;x=g.s={contexts:F,newContext:ga};g({});v(["toUrl","undef","defined","specified"],function(b){g[b]=function(){var c=F._;return c.require[b].apply(c,arguments)}});if(z&&(y=x.head=document.getElementsByTagName("head")[0],D=document.getElementsByTagName("base")[0]))y=
x.head=D.parentNode;g.onError=ca;g.createNode=function(b){var c=b.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");c.type=b.scriptType||"text/javascript";c.charset="utf-8";c.async=!0;return c};g.load=function(b,c,d){var e=b&&b.config||{};if(z)return e=g.createNode(e,c,d),e.setAttribute("data-requirecontext",b.contextName),e.setAttribute("data-requiremodule",c),e.attachEvent&&!(e.attachEvent.toString&&0>e.attachEvent.toString().indexOf("[native code"))&&
!Y?(M=!0,e.attachEvent("onreadystatechange",b.onScriptLoad)):(e.addEventListener("load",b.onScriptLoad,!1),e.addEventListener("error",b.onScriptError,!1)),e.src=d,J=e,D?y.insertBefore(e,D):y.appendChild(e),J=null,e;if(ea)try{importScripts(d),b.completeLoad(c)}catch(m){b.onError(C("importscripts","importScripts failed for "+c+" at "+d,m,[c]))}};z&&!q.skipDataMain&&T(document.getElementsByTagName("script"),function(b){y||(y=b.parentNode);if(I=b.getAttribute("data-main"))return s=I,q.baseUrl||(E=s.split("/"),
s=E.pop(),O=E.length?E.join("/")+"/":"./",q.baseUrl=O),s=s.replace(Q,""),g.jsExtRegExp.test(s)&&(s=I),q.deps=q.deps?q.deps.concat(s):[s],!0});define=function(b,c,d){var e,g;"string"!==typeof b&&(d=c,c=b,b=null);H(c)||(d=c,c=null);!c&&G(d)&&(c=[],d.length&&(d.toString().replace(ka,"").replace(la,function(b,d){c.push(d)}),c=(1===d.length?["require"]:["require","exports","module"]).concat(c)));if(M){if(!(e=J))N&&"interactive"===N.readyState||T(document.getElementsByTagName("script"),function(b){if("interactive"===
b.readyState)return N=b}),e=N;e&&(b||(b=e.getAttribute("data-requiremodule")),g=F[e.getAttribute("data-requirecontext")])}(g?g.defQueue:R).push([b,c,d])};define.amd={jQuery:!0};g.exec=function(b){return eval(b)};g(q)}})(this);
//! moment.js
//! version : 2.9.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

(function (undefined) {
    /************************************
        Constants
    ************************************/

    var moment,
        VERSION = '2.9.0',
        // the global-scope this is NOT the global object in Node.js
        globalScope = (typeof global !== 'undefined' && (typeof window === 'undefined' || window === global.window)) ? global : this,
        oldGlobalMoment,
        round = Math.round,
        hasOwnProperty = Object.prototype.hasOwnProperty,
        i,

        YEAR = 0,
        MONTH = 1,
        DATE = 2,
        HOUR = 3,
        MINUTE = 4,
        SECOND = 5,
        MILLISECOND = 6,

        // internal storage for locale config files
        locales = {},

        // extra moment internal properties (plugins register props here)
        momentProperties = [],

        // check for nodeJS
        hasModule = (typeof module !== 'undefined' && module && module.exports),

        // ASP.NET json date format regex
        aspNetJsonRegex = /^\/?Date\((\-?\d+)/i,
        aspNetTimeSpanJsonRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,

        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
        isoDurationRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,

        // format tokens
        formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,

        // parsing token regexes
        parseTokenOneOrTwoDigits = /\d\d?/, // 0 - 99
        parseTokenOneToThreeDigits = /\d{1,3}/, // 0 - 999
        parseTokenOneToFourDigits = /\d{1,4}/, // 0 - 9999
        parseTokenOneToSixDigits = /[+\-]?\d{1,6}/, // -999,999 - 999,999
        parseTokenDigits = /\d+/, // nonzero number of digits
        parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, // any word (or two) characters or numbers including two/three word month in arabic.
        parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
        parseTokenT = /T/i, // T (ISO separator)
        parseTokenOffsetMs = /[\+\-]?\d+/, // 1234567890123
        parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123

        //strict parsing regexes
        parseTokenOneDigit = /\d/, // 0 - 9
        parseTokenTwoDigits = /\d\d/, // 00 - 99
        parseTokenThreeDigits = /\d{3}/, // 000 - 999
        parseTokenFourDigits = /\d{4}/, // 0000 - 9999
        parseTokenSixDigits = /[+-]?\d{6}/, // -999,999 - 999,999
        parseTokenSignedNumber = /[+-]?\d+/, // -inf - inf

        // iso 8601 regex
        // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
        isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,

        isoFormat = 'YYYY-MM-DDTHH:mm:ssZ',

        isoDates = [
            ['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/],
            ['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/],
            ['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/],
            ['GGGG-[W]WW', /\d{4}-W\d{2}/],
            ['YYYY-DDD', /\d{4}-\d{3}/]
        ],

        // iso time formats and regexes
        isoTimes = [
            ['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/],
            ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
            ['HH:mm', /(T| )\d\d:\d\d/],
            ['HH', /(T| )\d\d/]
        ],

        // timezone chunker '+10:00' > ['10', '00'] or '-1530' > ['-', '15', '30']
        parseTimezoneChunker = /([\+\-]|\d\d)/gi,

        // getter and setter names
        proxyGettersAndSetters = 'Date|Hours|Minutes|Seconds|Milliseconds'.split('|'),
        unitMillisecondFactors = {
            'Milliseconds' : 1,
            'Seconds' : 1e3,
            'Minutes' : 6e4,
            'Hours' : 36e5,
            'Days' : 864e5,
            'Months' : 2592e6,
            'Years' : 31536e6
        },

        unitAliases = {
            ms : 'millisecond',
            s : 'second',
            m : 'minute',
            h : 'hour',
            d : 'day',
            D : 'date',
            w : 'week',
            W : 'isoWeek',
            M : 'month',
            Q : 'quarter',
            y : 'year',
            DDD : 'dayOfYear',
            e : 'weekday',
            E : 'isoWeekday',
            gg: 'weekYear',
            GG: 'isoWeekYear'
        },

        camelFunctions = {
            dayofyear : 'dayOfYear',
            isoweekday : 'isoWeekday',
            isoweek : 'isoWeek',
            weekyear : 'weekYear',
            isoweekyear : 'isoWeekYear'
        },

        // format function strings
        formatFunctions = {},

        // default relative time thresholds
        relativeTimeThresholds = {
            s: 45,  // seconds to minute
            m: 45,  // minutes to hour
            h: 22,  // hours to day
            d: 26,  // days to month
            M: 11   // months to year
        },

        // tokens to ordinalize and pad
        ordinalizeTokens = 'DDD w W M D d'.split(' '),
        paddedTokens = 'M D H h m s w W'.split(' '),

        formatTokenFunctions = {
            M    : function () {
                return this.month() + 1;
            },
            MMM  : function (format) {
                return this.localeData().monthsShort(this, format);
            },
            MMMM : function (format) {
                return this.localeData().months(this, format);
            },
            D    : function () {
                return this.date();
            },
            DDD  : function () {
                return this.dayOfYear();
            },
            d    : function () {
                return this.day();
            },
            dd   : function (format) {
                return this.localeData().weekdaysMin(this, format);
            },
            ddd  : function (format) {
                return this.localeData().weekdaysShort(this, format);
            },
            dddd : function (format) {
                return this.localeData().weekdays(this, format);
            },
            w    : function () {
                return this.week();
            },
            W    : function () {
                return this.isoWeek();
            },
            YY   : function () {
                return leftZeroFill(this.year() % 100, 2);
            },
            YYYY : function () {
                return leftZeroFill(this.year(), 4);
            },
            YYYYY : function () {
                return leftZeroFill(this.year(), 5);
            },
            YYYYYY : function () {
                var y = this.year(), sign = y >= 0 ? '+' : '-';
                return sign + leftZeroFill(Math.abs(y), 6);
            },
            gg   : function () {
                return leftZeroFill(this.weekYear() % 100, 2);
            },
            gggg : function () {
                return leftZeroFill(this.weekYear(), 4);
            },
            ggggg : function () {
                return leftZeroFill(this.weekYear(), 5);
            },
            GG   : function () {
                return leftZeroFill(this.isoWeekYear() % 100, 2);
            },
            GGGG : function () {
                return leftZeroFill(this.isoWeekYear(), 4);
            },
            GGGGG : function () {
                return leftZeroFill(this.isoWeekYear(), 5);
            },
            e : function () {
                return this.weekday();
            },
            E : function () {
                return this.isoWeekday();
            },
            a    : function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), true);
            },
            A    : function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), false);
            },
            H    : function () {
                return this.hours();
            },
            h    : function () {
                return this.hours() % 12 || 12;
            },
            m    : function () {
                return this.minutes();
            },
            s    : function () {
                return this.seconds();
            },
            S    : function () {
                return toInt(this.milliseconds() / 100);
            },
            SS   : function () {
                return leftZeroFill(toInt(this.milliseconds() / 10), 2);
            },
            SSS  : function () {
                return leftZeroFill(this.milliseconds(), 3);
            },
            SSSS : function () {
                return leftZeroFill(this.milliseconds(), 3);
            },
            Z    : function () {
                var a = this.utcOffset(),
                    b = '+';
                if (a < 0) {
                    a = -a;
                    b = '-';
                }
                return b + leftZeroFill(toInt(a / 60), 2) + ':' + leftZeroFill(toInt(a) % 60, 2);
            },
            ZZ   : function () {
                var a = this.utcOffset(),
                    b = '+';
                if (a < 0) {
                    a = -a;
                    b = '-';
                }
                return b + leftZeroFill(toInt(a / 60), 2) + leftZeroFill(toInt(a) % 60, 2);
            },
            z : function () {
                return this.zoneAbbr();
            },
            zz : function () {
                return this.zoneName();
            },
            x    : function () {
                return this.valueOf();
            },
            X    : function () {
                return this.unix();
            },
            Q : function () {
                return this.quarter();
            }
        },

        deprecations = {},

        lists = ['months', 'monthsShort', 'weekdays', 'weekdaysShort', 'weekdaysMin'],

        updateInProgress = false;

    // Pick the first defined of two or three arguments. dfl comes from
    // default.
    function dfl(a, b, c) {
        switch (arguments.length) {
            case 2: return a != null ? a : b;
            case 3: return a != null ? a : b != null ? b : c;
            default: throw new Error('Implement me');
        }
    }

    function hasOwnProp(a, b) {
        return hasOwnProperty.call(a, b);
    }

    function defaultParsingFlags() {
        // We need to deep clone this object, and es5 standard is not very
        // helpful.
        return {
            empty : false,
            unusedTokens : [],
            unusedInput : [],
            overflow : -2,
            charsLeftOver : 0,
            nullInput : false,
            invalidMonth : null,
            invalidFormat : false,
            userInvalidated : false,
            iso: false
        };
    }

    function printMsg(msg) {
        if (moment.suppressDeprecationWarnings === false &&
                typeof console !== 'undefined' && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;
        return extend(function () {
            if (firstTime) {
                printMsg(msg);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    function deprecateSimple(name, msg) {
        if (!deprecations[name]) {
            printMsg(msg);
            deprecations[name] = true;
        }
    }

    function padToken(func, count) {
        return function (a) {
            return leftZeroFill(func.call(this, a), count);
        };
    }
    function ordinalizeToken(func, period) {
        return function (a) {
            return this.localeData().ordinal(func.call(this, a), period);
        };
    }

    function monthDiff(a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        return -(wholeMonthDiff + adjust);
    }

    while (ordinalizeTokens.length) {
        i = ordinalizeTokens.pop();
        formatTokenFunctions[i + 'o'] = ordinalizeToken(formatTokenFunctions[i], i);
    }
    while (paddedTokens.length) {
        i = paddedTokens.pop();
        formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2);
    }
    formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);


    function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // thie is not supposed to happen
            return hour;
        }
    }

    /************************************
        Constructors
    ************************************/

    function Locale() {
    }

    // Moment prototype object
    function Moment(config, skipOverflow) {
        if (skipOverflow !== false) {
            checkOverflow(config);
        }
        copyConfig(this, config);
        this._d = new Date(+config._d);
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            moment.updateOffset(this);
            updateInProgress = false;
        }
    }

    // Duration Constructor
    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 36e5; // 1000 * 60 * 60
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = moment.localeData();

        this._bubble();
    }

    /************************************
        Helpers
    ************************************/


    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function copyConfig(to, from) {
        var i, prop, val;

        if (typeof from._isAMomentObject !== 'undefined') {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (typeof from._i !== 'undefined') {
            to._i = from._i;
        }
        if (typeof from._f !== 'undefined') {
            to._f = from._f;
        }
        if (typeof from._l !== 'undefined') {
            to._l = from._l;
        }
        if (typeof from._strict !== 'undefined') {
            to._strict = from._strict;
        }
        if (typeof from._tzm !== 'undefined') {
            to._tzm = from._tzm;
        }
        if (typeof from._isUTC !== 'undefined') {
            to._isUTC = from._isUTC;
        }
        if (typeof from._offset !== 'undefined') {
            to._offset = from._offset;
        }
        if (typeof from._pf !== 'undefined') {
            to._pf = from._pf;
        }
        if (typeof from._locale !== 'undefined') {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i in momentProperties) {
                prop = momentProperties[i];
                val = from[prop];
                if (typeof val !== 'undefined') {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.ceil(number);
        } else {
            return Math.floor(number);
        }
    }

    // left zero fill a number
    // see http://jsperf.com/left-zero-filling for performance comparison
    function leftZeroFill(number, targetLength, forceSign) {
        var output = '' + Math.abs(number),
            sign = number >= 0;

        while (output.length < targetLength) {
            output = '0' + output;
        }
        return (sign ? (forceSign ? '+' : '') : '-') + output;
    }

    function positiveMomentsDifference(base, other) {
        var res = {milliseconds: 0, months: 0};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        other = makeAs(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = moment.duration(val, period);
            addOrSubtractDurationFromMoment(this, dur, direction);
            return this;
        };
    }

    function addOrSubtractDurationFromMoment(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = duration._days,
            months = duration._months;
        updateOffset = updateOffset == null ? true : updateOffset;

        if (milliseconds) {
            mom._d.setTime(+mom._d + milliseconds * isAdding);
        }
        if (days) {
            rawSetter(mom, 'Date', rawGetter(mom, 'Date') + days * isAdding);
        }
        if (months) {
            rawMonthSetter(mom, rawGetter(mom, 'Month') + months * isAdding);
        }
        if (updateOffset) {
            moment.updateOffset(mom, days || months);
        }
    }

    // check if is an array
    function isArray(input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    }

    function isDate(input) {
        return Object.prototype.toString.call(input) === '[object Date]' ||
            input instanceof Date;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function normalizeUnits(units) {
        if (units) {
            var lowered = units.toLowerCase().replace(/(.)s$/, '$1');
            units = unitAliases[units] || camelFunctions[lowered] || lowered;
        }
        return units;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    function makeList(field) {
        var count, setter;

        if (field.indexOf('week') === 0) {
            count = 7;
            setter = 'day';
        }
        else if (field.indexOf('month') === 0) {
            count = 12;
            setter = 'month';
        }
        else {
            return;
        }

        moment[field] = function (format, index) {
            var i, getter,
                method = moment._locale[field],
                results = [];

            if (typeof format === 'number') {
                index = format;
                format = undefined;
            }

            getter = function (i) {
                var m = moment().utc().set(setter, i);
                return method.call(moment._locale, m, format || '');
            };

            if (index != null) {
                return getter(index);
            }
            else {
                for (i = 0; i < count; i++) {
                    results.push(getter(i));
                }
                return results;
            }
        };
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            if (coercedNumber >= 0) {
                value = Math.floor(coercedNumber);
            } else {
                value = Math.ceil(coercedNumber);
            }
        }

        return value;
    }

    function daysInMonth(year, month) {
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    }

    function weeksInYear(year, dow, doy) {
        return weekOfYear(moment([year, 11, 31 + dow - doy]), dow, doy).week;
    }

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    function checkOverflow(m) {
        var overflow;
        if (m._a && m._pf.overflow === -2) {
            overflow =
                m._a[MONTH] < 0 || m._a[MONTH] > 11 ? MONTH :
                m._a[DATE] < 1 || m._a[DATE] > daysInMonth(m._a[YEAR], m._a[MONTH]) ? DATE :
                m._a[HOUR] < 0 || m._a[HOUR] > 24 ||
                    (m._a[HOUR] === 24 && (m._a[MINUTE] !== 0 ||
                                           m._a[SECOND] !== 0 ||
                                           m._a[MILLISECOND] !== 0)) ? HOUR :
                m._a[MINUTE] < 0 || m._a[MINUTE] > 59 ? MINUTE :
                m._a[SECOND] < 0 || m._a[SECOND] > 59 ? SECOND :
                m._a[MILLISECOND] < 0 || m._a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (m._pf._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }

            m._pf.overflow = overflow;
        }
    }

    function isValid(m) {
        if (m._isValid == null) {
            m._isValid = !isNaN(m._d.getTime()) &&
                m._pf.overflow < 0 &&
                !m._pf.empty &&
                !m._pf.invalidMonth &&
                !m._pf.nullInput &&
                !m._pf.invalidFormat &&
                !m._pf.userInvalidated;

            if (m._strict) {
                m._isValid = m._isValid &&
                    m._pf.charsLeftOver === 0 &&
                    m._pf.unusedTokens.length === 0 &&
                    m._pf.bigHour === undefined;
            }
        }
        return m._isValid;
    }

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return null;
    }

    function loadLocale(name) {
        var oldLocale = null;
        if (!locales[name] && hasModule) {
            try {
                oldLocale = moment.locale();
                require('./locale/' + name);
                // because defineLocale currently also sets the global locale, we want to undo that for lazy loaded locales
                moment.locale(oldLocale);
            } catch (e) { }
        }
        return locales[name];
    }

    // Return a moment from input, that is local/utc/utcOffset equivalent to
    // model.
    function makeAs(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (moment.isMoment(input) || isDate(input) ?
                    +input : +moment(input)) - (+res);
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(+res._d + diff);
            moment.updateOffset(res, false);
            return res;
        } else {
            return moment(input).local();
        }
    }

    /************************************
        Locale
    ************************************/


    extend(Locale.prototype, {

        set : function (config) {
            var prop, i;
            for (i in config) {
                prop = config[i];
                if (typeof prop === 'function') {
                    this[i] = prop;
                } else {
                    this['_' + i] = prop;
                }
            }
            // Lenient ordinal parsing accepts just a number in addition to
            // number + (possibly) stuff coming from _ordinalParseLenient.
            this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + /\d{1,2}/.source);
        },

        _months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        months : function (m) {
            return this._months[m.month()];
        },

        _monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        monthsShort : function (m) {
            return this._monthsShort[m.month()];
        },

        monthsParse : function (monthName, format, strict) {
            var i, mom, regex;

            if (!this._monthsParse) {
                this._monthsParse = [];
                this._longMonthsParse = [];
                this._shortMonthsParse = [];
            }

            for (i = 0; i < 12; i++) {
                // make the regex if we don't have it already
                mom = moment.utc([2000, i]);
                if (strict && !this._longMonthsParse[i]) {
                    this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                    this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
                }
                if (!strict && !this._monthsParse[i]) {
                    regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                    this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                    return i;
                } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                    return i;
                } else if (!strict && this._monthsParse[i].test(monthName)) {
                    return i;
                }
            }
        },

        _weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdays : function (m) {
            return this._weekdays[m.day()];
        },

        _weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysShort : function (m) {
            return this._weekdaysShort[m.day()];
        },

        _weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        weekdaysMin : function (m) {
            return this._weekdaysMin[m.day()];
        },

        weekdaysParse : function (weekdayName) {
            var i, mom, regex;

            if (!this._weekdaysParse) {
                this._weekdaysParse = [];
            }

            for (i = 0; i < 7; i++) {
                // make the regex if we don't have it already
                if (!this._weekdaysParse[i]) {
                    mom = moment([2000, 1]).day(i);
                    regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                    this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (this._weekdaysParse[i].test(weekdayName)) {
                    return i;
                }
            }
        },

        _longDateFormat : {
            LTS : 'h:mm:ss A',
            LT : 'h:mm A',
            L : 'MM/DD/YYYY',
            LL : 'MMMM D, YYYY',
            LLL : 'MMMM D, YYYY LT',
            LLLL : 'dddd, MMMM D, YYYY LT'
        },
        longDateFormat : function (key) {
            var output = this._longDateFormat[key];
            if (!output && this._longDateFormat[key.toUpperCase()]) {
                output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (val) {
                    return val.slice(1);
                });
                this._longDateFormat[key] = output;
            }
            return output;
        },

        isPM : function (input) {
            // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
            // Using charAt should be more compatible.
            return ((input + '').toLowerCase().charAt(0) === 'p');
        },

        _meridiemParse : /[ap]\.?m?\.?/i,
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'pm' : 'PM';
            } else {
                return isLower ? 'am' : 'AM';
            }
        },


        _calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        calendar : function (key, mom, now) {
            var output = this._calendar[key];
            return typeof output === 'function' ? output.apply(mom, [now]) : output;
        },

        _relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },

        relativeTime : function (number, withoutSuffix, string, isFuture) {
            var output = this._relativeTime[string];
            return (typeof output === 'function') ?
                output(number, withoutSuffix, string, isFuture) :
                output.replace(/%d/i, number);
        },

        pastFuture : function (diff, output) {
            var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
            return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
        },

        ordinal : function (number) {
            return this._ordinal.replace('%d', number);
        },
        _ordinal : '%d',
        _ordinalParse : /\d{1,2}/,

        preparse : function (string) {
            return string;
        },

        postformat : function (string) {
            return string;
        },

        week : function (mom) {
            return weekOfYear(mom, this._week.dow, this._week.doy).week;
        },

        _week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        },

        firstDayOfWeek : function () {
            return this._week.dow;
        },

        firstDayOfYear : function () {
            return this._week.doy;
        },

        _invalidDate: 'Invalid date',
        invalidDate: function () {
            return this._invalidDate;
        }
    });

    /************************************
        Formatting
    ************************************/


    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '';
            for (i = 0; i < length; i++) {
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());

        if (!formatFunctions[format]) {
            formatFunctions[format] = makeFormatFunction(format);
        }

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }


    /************************************
        Parsing
    ************************************/


    // get the regex to find the next token
    function getParseRegexForToken(token, config) {
        var a, strict = config._strict;
        switch (token) {
        case 'Q':
            return parseTokenOneDigit;
        case 'DDDD':
            return parseTokenThreeDigits;
        case 'YYYY':
        case 'GGGG':
        case 'gggg':
            return strict ? parseTokenFourDigits : parseTokenOneToFourDigits;
        case 'Y':
        case 'G':
        case 'g':
            return parseTokenSignedNumber;
        case 'YYYYYY':
        case 'YYYYY':
        case 'GGGGG':
        case 'ggggg':
            return strict ? parseTokenSixDigits : parseTokenOneToSixDigits;
        case 'S':
            if (strict) {
                return parseTokenOneDigit;
            }
            /* falls through */
        case 'SS':
            if (strict) {
                return parseTokenTwoDigits;
            }
            /* falls through */
        case 'SSS':
            if (strict) {
                return parseTokenThreeDigits;
            }
            /* falls through */
        case 'DDD':
            return parseTokenOneToThreeDigits;
        case 'MMM':
        case 'MMMM':
        case 'dd':
        case 'ddd':
        case 'dddd':
            return parseTokenWord;
        case 'a':
        case 'A':
            return config._locale._meridiemParse;
        case 'x':
            return parseTokenOffsetMs;
        case 'X':
            return parseTokenTimestampMs;
        case 'Z':
        case 'ZZ':
            return parseTokenTimezone;
        case 'T':
            return parseTokenT;
        case 'SSSS':
            return parseTokenDigits;
        case 'MM':
        case 'DD':
        case 'YY':
        case 'GG':
        case 'gg':
        case 'HH':
        case 'hh':
        case 'mm':
        case 'ss':
        case 'ww':
        case 'WW':
            return strict ? parseTokenTwoDigits : parseTokenOneOrTwoDigits;
        case 'M':
        case 'D':
        case 'd':
        case 'H':
        case 'h':
        case 'm':
        case 's':
        case 'w':
        case 'W':
        case 'e':
        case 'E':
            return parseTokenOneOrTwoDigits;
        case 'Do':
            return strict ? config._locale._ordinalParse : config._locale._ordinalParseLenient;
        default :
            a = new RegExp(regexpEscape(unescapeFormat(token.replace('\\', '')), 'i'));
            return a;
        }
    }

    function utcOffsetFromString(string) {
        string = string || '';
        var possibleTzMatches = (string.match(parseTokenTimezone) || []),
            tzChunk = possibleTzMatches[possibleTzMatches.length - 1] || [],
            parts = (tzChunk + '').match(parseTimezoneChunker) || ['-', 0, 0],
            minutes = +(parts[1] * 60) + toInt(parts[2]);

        return parts[0] === '+' ? minutes : -minutes;
    }

    // function to convert string input to date
    function addTimeToArrayFromToken(token, input, config) {
        var a, datePartArray = config._a;

        switch (token) {
        // QUARTER
        case 'Q':
            if (input != null) {
                datePartArray[MONTH] = (toInt(input) - 1) * 3;
            }
            break;
        // MONTH
        case 'M' : // fall through to MM
        case 'MM' :
            if (input != null) {
                datePartArray[MONTH] = toInt(input) - 1;
            }
            break;
        case 'MMM' : // fall through to MMMM
        case 'MMMM' :
            a = config._locale.monthsParse(input, token, config._strict);
            // if we didn't find a month name, mark the date as invalid.
            if (a != null) {
                datePartArray[MONTH] = a;
            } else {
                config._pf.invalidMonth = input;
            }
            break;
        // DAY OF MONTH
        case 'D' : // fall through to DD
        case 'DD' :
            if (input != null) {
                datePartArray[DATE] = toInt(input);
            }
            break;
        case 'Do' :
            if (input != null) {
                datePartArray[DATE] = toInt(parseInt(
                            input.match(/\d{1,2}/)[0], 10));
            }
            break;
        // DAY OF YEAR
        case 'DDD' : // fall through to DDDD
        case 'DDDD' :
            if (input != null) {
                config._dayOfYear = toInt(input);
            }

            break;
        // YEAR
        case 'YY' :
            datePartArray[YEAR] = moment.parseTwoDigitYear(input);
            break;
        case 'YYYY' :
        case 'YYYYY' :
        case 'YYYYYY' :
            datePartArray[YEAR] = toInt(input);
            break;
        // AM / PM
        case 'a' : // fall through to A
        case 'A' :
            config._meridiem = input;
            // config._isPm = config._locale.isPM(input);
            break;
        // HOUR
        case 'h' : // fall through to hh
        case 'hh' :
            config._pf.bigHour = true;
            /* falls through */
        case 'H' : // fall through to HH
        case 'HH' :
            datePartArray[HOUR] = toInt(input);
            break;
        // MINUTE
        case 'm' : // fall through to mm
        case 'mm' :
            datePartArray[MINUTE] = toInt(input);
            break;
        // SECOND
        case 's' : // fall through to ss
        case 'ss' :
            datePartArray[SECOND] = toInt(input);
            break;
        // MILLISECOND
        case 'S' :
        case 'SS' :
        case 'SSS' :
        case 'SSSS' :
            datePartArray[MILLISECOND] = toInt(('0.' + input) * 1000);
            break;
        // UNIX OFFSET (MILLISECONDS)
        case 'x':
            config._d = new Date(toInt(input));
            break;
        // UNIX TIMESTAMP WITH MS
        case 'X':
            config._d = new Date(parseFloat(input) * 1000);
            break;
        // TIMEZONE
        case 'Z' : // fall through to ZZ
        case 'ZZ' :
            config._useUTC = true;
            config._tzm = utcOffsetFromString(input);
            break;
        // WEEKDAY - human
        case 'dd':
        case 'ddd':
        case 'dddd':
            a = config._locale.weekdaysParse(input);
            // if we didn't get a weekday name, mark the date as invalid
            if (a != null) {
                config._w = config._w || {};
                config._w['d'] = a;
            } else {
                config._pf.invalidWeekday = input;
            }
            break;
        // WEEK, WEEK DAY - numeric
        case 'w':
        case 'ww':
        case 'W':
        case 'WW':
        case 'd':
        case 'e':
        case 'E':
            token = token.substr(0, 1);
            /* falls through */
        case 'gggg':
        case 'GGGG':
        case 'GGGGG':
            token = token.substr(0, 2);
            if (input) {
                config._w = config._w || {};
                config._w[token] = toInt(input);
            }
            break;
        case 'gg':
        case 'GG':
            config._w = config._w || {};
            config._w[token] = moment.parseTwoDigitYear(input);
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = dfl(w.GG, config._a[YEAR], weekOfYear(moment(), 1, 4).year);
            week = dfl(w.W, 1);
            weekday = dfl(w.E, 1);
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            weekYear = dfl(w.gg, config._a[YEAR], weekOfYear(moment(), dow, doy).year);
            week = dfl(w.w, 1);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < dow) {
                    ++week;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from begining of week
                weekday = w.e + dow;
            } else {
                // default to begining of week
                weekday = dow;
            }
        }
        temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);

        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function dateFromConfig(config) {
        var i, date, input = [], currentDate, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear) {
            yearToUse = dfl(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse)) {
                config._pf._overflowDayOfYear = true;
            }

            date = makeUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? makeUTCDate : makeDate).apply(null, input);
        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }
    }

    function dateFromObject(config) {
        var normalizedInput;

        if (config._d) {
            return;
        }

        normalizedInput = normalizeObjectUnits(config._i);
        config._a = [
            normalizedInput.year,
            normalizedInput.month,
            normalizedInput.day || normalizedInput.date,
            normalizedInput.hour,
            normalizedInput.minute,
            normalizedInput.second,
            normalizedInput.millisecond
        ];

        dateFromConfig(config);
    }

    function currentDateArray(config) {
        var now = new Date();
        if (config._useUTC) {
            return [
                now.getUTCFullYear(),
                now.getUTCMonth(),
                now.getUTCDate()
            ];
        } else {
            return [now.getFullYear(), now.getMonth(), now.getDate()];
        }
    }

    // date from string and format string
    function makeDateFromStringAndFormat(config) {
        if (config._f === moment.ISO_8601) {
            parseISO(config);
            return;
        }

        config._a = [];
        config._pf.empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    config._pf.unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    config._pf.empty = false;
                }
                else {
                    config._pf.unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                config._pf.unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        config._pf.charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            config._pf.unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (config._pf.bigHour === true && config._a[HOUR] <= 12) {
            config._pf.bigHour = undefined;
        }
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR],
                config._meridiem);
        dateFromConfig(config);
        checkOverflow(config);
    }

    function unescapeFormat(s) {
        return s.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        });
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function regexpEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    // date from string and array of format strings
    function makeDateFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            config._pf.invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._pf = defaultParsingFlags();
            tempConfig._f = config._f[i];
            makeDateFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += tempConfig._pf.charsLeftOver;

            //or tokens
            currentScore += tempConfig._pf.unusedTokens.length * 10;

            tempConfig._pf.score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    // date from iso format
    function parseISO(config) {
        var i, l,
            string = config._i,
            match = isoRegex.exec(string);

        if (match) {
            config._pf.iso = true;
            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(string)) {
                    // match[5] should be 'T' or undefined
                    config._f = isoDates[i][0] + (match[6] || ' ');
                    break;
                }
            }
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(string)) {
                    config._f += isoTimes[i][0];
                    break;
                }
            }
            if (string.match(parseTokenTimezone)) {
                config._f += 'Z';
            }
            makeDateFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function makeDateFromString(config) {
        parseISO(config);
        if (config._isValid === false) {
            delete config._isValid;
            moment.createFromInputFallback(config);
        }
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function makeDateFromInput(config) {
        var input = config._i, matched;
        if (input === undefined) {
            config._d = new Date();
        } else if (isDate(input)) {
            config._d = new Date(+input);
        } else if ((matched = aspNetJsonRegex.exec(input)) !== null) {
            config._d = new Date(+matched[1]);
        } else if (typeof input === 'string') {
            makeDateFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            dateFromConfig(config);
        } else if (typeof(input) === 'object') {
            dateFromObject(config);
        } else if (typeof(input) === 'number') {
            // from milliseconds
            config._d = new Date(input);
        } else {
            moment.createFromInputFallback(config);
        }
    }

    function makeDate(y, m, d, h, M, s, ms) {
        //can't just apply() to create a date:
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var date = new Date(y, m, d, h, M, s, ms);

        //the date constructor doesn't accept years < 1970
        if (y < 1970) {
            date.setFullYear(y);
        }
        return date;
    }

    function makeUTCDate(y) {
        var date = new Date(Date.UTC.apply(null, arguments));
        if (y < 1970) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    function parseWeekday(input, locale) {
        if (typeof input === 'string') {
            if (!isNaN(input)) {
                input = parseInt(input, 10);
            }
            else {
                input = locale.weekdaysParse(input);
                if (typeof input !== 'number') {
                    return null;
                }
            }
        }
        return input;
    }

    /************************************
        Relative Time
    ************************************/


    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime(posNegDuration, withoutSuffix, locale) {
        var duration = moment.duration(posNegDuration).abs(),
            seconds = round(duration.as('s')),
            minutes = round(duration.as('m')),
            hours = round(duration.as('h')),
            days = round(duration.as('d')),
            months = round(duration.as('M')),
            years = round(duration.as('y')),

            args = seconds < relativeTimeThresholds.s && ['s', seconds] ||
                minutes === 1 && ['m'] ||
                minutes < relativeTimeThresholds.m && ['mm', minutes] ||
                hours === 1 && ['h'] ||
                hours < relativeTimeThresholds.h && ['hh', hours] ||
                days === 1 && ['d'] ||
                days < relativeTimeThresholds.d && ['dd', days] ||
                months === 1 && ['M'] ||
                months < relativeTimeThresholds.M && ['MM', months] ||
                years === 1 && ['y'] || ['yy', years];

        args[2] = withoutSuffix;
        args[3] = +posNegDuration > 0;
        args[4] = locale;
        return substituteTimeAgo.apply({}, args);
    }


    /************************************
        Week of Year
    ************************************/


    // firstDayOfWeek       0 = sun, 6 = sat
    //                      the day of the week that starts the week
    //                      (usually sunday or monday)
    // firstDayOfWeekOfYear 0 = sun, 6 = sat
    //                      the first week is the week that contains the first
    //                      of this day of the week
    //                      (eg. ISO weeks use thursday (4))
    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
        var end = firstDayOfWeekOfYear - firstDayOfWeek,
            daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
            adjustedMoment;


        if (daysToDayOfWeek > end) {
            daysToDayOfWeek -= 7;
        }

        if (daysToDayOfWeek < end - 7) {
            daysToDayOfWeek += 7;
        }

        adjustedMoment = moment(mom).add(daysToDayOfWeek, 'd');
        return {
            week: Math.ceil(adjustedMoment.dayOfYear() / 7),
            year: adjustedMoment.year()
        };
    }

    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
        var d = makeUTCDate(year, 0, 1).getUTCDay(), daysToAdd, dayOfYear;

        d = d === 0 ? 7 : d;
        weekday = weekday != null ? weekday : firstDayOfWeek;
        daysToAdd = firstDayOfWeek - d + (d > firstDayOfWeekOfYear ? 7 : 0) - (d < firstDayOfWeek ? 7 : 0);
        dayOfYear = 7 * (week - 1) + (weekday - firstDayOfWeek) + daysToAdd + 1;

        return {
            year: dayOfYear > 0 ? year : year - 1,
            dayOfYear: dayOfYear > 0 ?  dayOfYear : daysInYear(year - 1) + dayOfYear
        };
    }

    /************************************
        Top Level Functions
    ************************************/

    function makeMoment(config) {
        var input = config._i,
            format = config._f,
            res;

        config._locale = config._locale || moment.localeData(config._l);

        if (input === null || (format === undefined && input === '')) {
            return moment.invalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (moment.isMoment(input)) {
            return new Moment(input, true);
        } else if (format) {
            if (isArray(format)) {
                makeDateFromStringAndArray(config);
            } else {
                makeDateFromStringAndFormat(config);
            }
        } else {
            makeDateFromInput(config);
        }

        res = new Moment(config);
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    moment = function (input, format, locale, strict) {
        var c;

        if (typeof(locale) === 'boolean') {
            strict = locale;
            locale = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c = {};
        c._isAMomentObject = true;
        c._i = input;
        c._f = format;
        c._l = locale;
        c._strict = strict;
        c._isUTC = false;
        c._pf = defaultParsingFlags();

        return makeMoment(c);
    };

    moment.suppressDeprecationWarnings = false;

    moment.createFromInputFallback = deprecate(
        'moment construction falls back to js Date. This is ' +
        'discouraged and will be removed in upcoming major ' +
        'release. Please refer to ' +
        'https://github.com/moment/moment/issues/1407 for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return moment();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    moment.min = function () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    };

    moment.max = function () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    };

    // creating with utc
    moment.utc = function (input, format, locale, strict) {
        var c;

        if (typeof(locale) === 'boolean') {
            strict = locale;
            locale = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c = {};
        c._isAMomentObject = true;
        c._useUTC = true;
        c._isUTC = true;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;
        c._pf = defaultParsingFlags();

        return makeMoment(c).utc();
    };

    // creating with unix timestamp (in seconds)
    moment.unix = function (input) {
        return moment(input * 1000);
    };

    // duration
    moment.duration = function (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            parseIso,
            diffRes;

        if (moment.isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months
            };
        } else if (typeof input === 'number') {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetTimeSpanJsonRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(match[MILLISECOND]) * sign
            };
        } else if (!!(match = isoDurationRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            parseIso = function (inp) {
                // We'd normally use ~~inp for this, but unfortunately it also
                // converts floats to ints.
                // inp may be undefined, so careful calling replace on it.
                var res = inp && parseFloat(inp.replace(',', '.'));
                // apply sign while we're at it
                return (isNaN(res) ? 0 : res) * sign;
            };
            duration = {
                y: parseIso(match[2]),
                M: parseIso(match[3]),
                d: parseIso(match[4]),
                h: parseIso(match[5]),
                m: parseIso(match[6]),
                s: parseIso(match[7]),
                w: parseIso(match[8])
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' &&
                ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(moment(duration.from), moment(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (moment.isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    };

    // version number
    moment.version = VERSION;

    // default format
    moment.defaultFormat = isoFormat;

    // constant that refers to the ISO standard
    moment.ISO_8601 = function () {};

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    moment.momentProperties = momentProperties;

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    moment.updateOffset = function () {};

    // This function allows you to set a threshold for relative time strings
    moment.relativeTimeThreshold = function (threshold, limit) {
        if (relativeTimeThresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return relativeTimeThresholds[threshold];
        }
        relativeTimeThresholds[threshold] = limit;
        return true;
    };

    moment.lang = deprecate(
        'moment.lang is deprecated. Use moment.locale instead.',
        function (key, value) {
            return moment.locale(key, value);
        }
    );

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    moment.locale = function (key, values) {
        var data;
        if (key) {
            if (typeof(values) !== 'undefined') {
                data = moment.defineLocale(key, values);
            }
            else {
                data = moment.localeData(key);
            }

            if (data) {
                moment.duration._locale = moment._locale = data;
            }
        }

        return moment._locale._abbr;
    };

    moment.defineLocale = function (name, values) {
        if (values !== null) {
            values.abbr = name;
            if (!locales[name]) {
                locales[name] = new Locale();
            }
            locales[name].set(values);

            // backwards compat for now: also set the locale
            moment.locale(name);

            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    };

    moment.langData = deprecate(
        'moment.langData is deprecated. Use moment.localeData instead.',
        function (key) {
            return moment.localeData(key);
        }
    );

    // returns locale data
    moment.localeData = function (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return moment._locale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    };

    // compare moment object
    moment.isMoment = function (obj) {
        return obj instanceof Moment ||
            (obj != null && hasOwnProp(obj, '_isAMomentObject'));
    };

    // for typechecking Duration objects
    moment.isDuration = function (obj) {
        return obj instanceof Duration;
    };

    for (i = lists.length - 1; i >= 0; --i) {
        makeList(lists[i]);
    }

    moment.normalizeUnits = function (units) {
        return normalizeUnits(units);
    };

    moment.invalid = function (flags) {
        var m = moment.utc(NaN);
        if (flags != null) {
            extend(m._pf, flags);
        }
        else {
            m._pf.userInvalidated = true;
        }

        return m;
    };

    moment.parseZone = function () {
        return moment.apply(null, arguments).parseZone();
    };

    moment.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    moment.isDate = isDate;

    /************************************
        Moment Prototype
    ************************************/


    extend(moment.fn = Moment.prototype, {

        clone : function () {
            return moment(this);
        },

        valueOf : function () {
            return +this._d - ((this._offset || 0) * 60000);
        },

        unix : function () {
            return Math.floor(+this / 1000);
        },

        toString : function () {
            return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
        },

        toDate : function () {
            return this._offset ? new Date(+this) : this._d;
        },

        toISOString : function () {
            var m = moment(this).utc();
            if (0 < m.year() && m.year() <= 9999) {
                if ('function' === typeof Date.prototype.toISOString) {
                    // native implementation is ~50x faster, use it when we can
                    return this.toDate().toISOString();
                } else {
                    return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
                }
            } else {
                return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            }
        },

        toArray : function () {
            var m = this;
            return [
                m.year(),
                m.month(),
                m.date(),
                m.hours(),
                m.minutes(),
                m.seconds(),
                m.milliseconds()
            ];
        },

        isValid : function () {
            return isValid(this);
        },

        isDSTShifted : function () {
            if (this._a) {
                return this.isValid() && compareArrays(this._a, (this._isUTC ? moment.utc(this._a) : moment(this._a)).toArray()) > 0;
            }

            return false;
        },

        parsingFlags : function () {
            return extend({}, this._pf);
        },

        invalidAt: function () {
            return this._pf.overflow;
        },

        utc : function (keepLocalTime) {
            return this.utcOffset(0, keepLocalTime);
        },

        local : function (keepLocalTime) {
            if (this._isUTC) {
                this.utcOffset(0, keepLocalTime);
                this._isUTC = false;

                if (keepLocalTime) {
                    this.subtract(this._dateUtcOffset(), 'm');
                }
            }
            return this;
        },

        format : function (inputString) {
            var output = formatMoment(this, inputString || moment.defaultFormat);
            return this.localeData().postformat(output);
        },

        add : createAdder(1, 'add'),

        subtract : createAdder(-1, 'subtract'),

        diff : function (input, units, asFloat) {
            var that = makeAs(input, this),
                zoneDiff = (that.utcOffset() - this.utcOffset()) * 6e4,
                anchor, diff, output, daysAdjust;

            units = normalizeUnits(units);

            if (units === 'year' || units === 'month' || units === 'quarter') {
                output = monthDiff(this, that);
                if (units === 'quarter') {
                    output = output / 3;
                } else if (units === 'year') {
                    output = output / 12;
                }
            } else {
                diff = this - that;
                output = units === 'second' ? diff / 1e3 : // 1000
                    units === 'minute' ? diff / 6e4 : // 1000 * 60
                    units === 'hour' ? diff / 36e5 : // 1000 * 60 * 60
                    units === 'day' ? (diff - zoneDiff) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
                    units === 'week' ? (diff - zoneDiff) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
                    diff;
            }
            return asFloat ? output : absRound(output);
        },

        from : function (time, withoutSuffix) {
            return moment.duration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        },

        fromNow : function (withoutSuffix) {
            return this.from(moment(), withoutSuffix);
        },

        calendar : function (time) {
            // We want to compare the start of today, vs this.
            // Getting start-of-today depends on whether we're locat/utc/offset
            // or not.
            var now = time || moment(),
                sod = makeAs(now, this).startOf('day'),
                diff = this.diff(sod, 'days', true),
                format = diff < -6 ? 'sameElse' :
                    diff < -1 ? 'lastWeek' :
                    diff < 0 ? 'lastDay' :
                    diff < 1 ? 'sameDay' :
                    diff < 2 ? 'nextDay' :
                    diff < 7 ? 'nextWeek' : 'sameElse';
            return this.format(this.localeData().calendar(format, this, moment(now)));
        },

        isLeapYear : function () {
            return isLeapYear(this.year());
        },

        isDST : function () {
            return (this.utcOffset() > this.clone().month(0).utcOffset() ||
                this.utcOffset() > this.clone().month(5).utcOffset());
        },

        day : function (input) {
            var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            if (input != null) {
                input = parseWeekday(input, this.localeData());
                return this.add(input - day, 'd');
            } else {
                return day;
            }
        },

        month : makeAccessor('Month', true),

        startOf : function (units) {
            units = normalizeUnits(units);
            // the following switch intentionally omits break keywords
            // to utilize falling through the cases.
            switch (units) {
            case 'year':
                this.month(0);
                /* falls through */
            case 'quarter':
            case 'month':
                this.date(1);
                /* falls through */
            case 'week':
            case 'isoWeek':
            case 'day':
                this.hours(0);
                /* falls through */
            case 'hour':
                this.minutes(0);
                /* falls through */
            case 'minute':
                this.seconds(0);
                /* falls through */
            case 'second':
                this.milliseconds(0);
                /* falls through */
            }

            // weeks are a special case
            if (units === 'week') {
                this.weekday(0);
            } else if (units === 'isoWeek') {
                this.isoWeekday(1);
            }

            // quarters are also special
            if (units === 'quarter') {
                this.month(Math.floor(this.month() / 3) * 3);
            }

            return this;
        },

        endOf: function (units) {
            units = normalizeUnits(units);
            if (units === undefined || units === 'millisecond') {
                return this;
            }
            return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
        },

        isAfter: function (input, units) {
            var inputMs;
            units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
            if (units === 'millisecond') {
                input = moment.isMoment(input) ? input : moment(input);
                return +this > +input;
            } else {
                inputMs = moment.isMoment(input) ? +input : +moment(input);
                return inputMs < +this.clone().startOf(units);
            }
        },

        isBefore: function (input, units) {
            var inputMs;
            units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
            if (units === 'millisecond') {
                input = moment.isMoment(input) ? input : moment(input);
                return +this < +input;
            } else {
                inputMs = moment.isMoment(input) ? +input : +moment(input);
                return +this.clone().endOf(units) < inputMs;
            }
        },

        isBetween: function (from, to, units) {
            return this.isAfter(from, units) && this.isBefore(to, units);
        },

        isSame: function (input, units) {
            var inputMs;
            units = normalizeUnits(units || 'millisecond');
            if (units === 'millisecond') {
                input = moment.isMoment(input) ? input : moment(input);
                return +this === +input;
            } else {
                inputMs = +moment(input);
                return +(this.clone().startOf(units)) <= inputMs && inputMs <= +(this.clone().endOf(units));
            }
        },

        min: deprecate(
                 'moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',
                 function (other) {
                     other = moment.apply(null, arguments);
                     return other < this ? this : other;
                 }
         ),

        max: deprecate(
                'moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',
                function (other) {
                    other = moment.apply(null, arguments);
                    return other > this ? this : other;
                }
        ),

        zone : deprecate(
                'moment().zone is deprecated, use moment().utcOffset instead. ' +
                'https://github.com/moment/moment/issues/1779',
                function (input, keepLocalTime) {
                    if (input != null) {
                        if (typeof input !== 'string') {
                            input = -input;
                        }

                        this.utcOffset(input, keepLocalTime);

                        return this;
                    } else {
                        return -this.utcOffset();
                    }
                }
        ),

        // keepLocalTime = true means only change the timezone, without
        // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
        // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
        // +0200, so we adjust the time as needed, to be valid.
        //
        // Keeping the time actually adds/subtracts (one hour)
        // from the actual represented time. That is why we call updateOffset
        // a second time. In case it wants us to change the offset again
        // _changeInProgress == true case, then we have to adjust, because
        // there is no such time in the given timezone.
        utcOffset : function (input, keepLocalTime) {
            var offset = this._offset || 0,
                localAdjust;
            if (input != null) {
                if (typeof input === 'string') {
                    input = utcOffsetFromString(input);
                }
                if (Math.abs(input) < 16) {
                    input = input * 60;
                }
                if (!this._isUTC && keepLocalTime) {
                    localAdjust = this._dateUtcOffset();
                }
                this._offset = input;
                this._isUTC = true;
                if (localAdjust != null) {
                    this.add(localAdjust, 'm');
                }
                if (offset !== input) {
                    if (!keepLocalTime || this._changeInProgress) {
                        addOrSubtractDurationFromMoment(this,
                                moment.duration(input - offset, 'm'), 1, false);
                    } else if (!this._changeInProgress) {
                        this._changeInProgress = true;
                        moment.updateOffset(this, true);
                        this._changeInProgress = null;
                    }
                }

                return this;
            } else {
                return this._isUTC ? offset : this._dateUtcOffset();
            }
        },

        isLocal : function () {
            return !this._isUTC;
        },

        isUtcOffset : function () {
            return this._isUTC;
        },

        isUtc : function () {
            return this._isUTC && this._offset === 0;
        },

        zoneAbbr : function () {
            return this._isUTC ? 'UTC' : '';
        },

        zoneName : function () {
            return this._isUTC ? 'Coordinated Universal Time' : '';
        },

        parseZone : function () {
            if (this._tzm) {
                this.utcOffset(this._tzm);
            } else if (typeof this._i === 'string') {
                this.utcOffset(utcOffsetFromString(this._i));
            }
            return this;
        },

        hasAlignedHourOffset : function (input) {
            if (!input) {
                input = 0;
            }
            else {
                input = moment(input).utcOffset();
            }

            return (this.utcOffset() - input) % 60 === 0;
        },

        daysInMonth : function () {
            return daysInMonth(this.year(), this.month());
        },

        dayOfYear : function (input) {
            var dayOfYear = round((moment(this).startOf('day') - moment(this).startOf('year')) / 864e5) + 1;
            return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
        },

        quarter : function (input) {
            return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
        },

        weekYear : function (input) {
            var year = weekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
            return input == null ? year : this.add((input - year), 'y');
        },

        isoWeekYear : function (input) {
            var year = weekOfYear(this, 1, 4).year;
            return input == null ? year : this.add((input - year), 'y');
        },

        week : function (input) {
            var week = this.localeData().week(this);
            return input == null ? week : this.add((input - week) * 7, 'd');
        },

        isoWeek : function (input) {
            var week = weekOfYear(this, 1, 4).week;
            return input == null ? week : this.add((input - week) * 7, 'd');
        },

        weekday : function (input) {
            var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return input == null ? weekday : this.add(input - weekday, 'd');
        },

        isoWeekday : function (input) {
            // behaves the same as moment#day except
            // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
            // as a setter, sunday should belong to the previous week.
            return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
        },

        isoWeeksInYear : function () {
            return weeksInYear(this.year(), 1, 4);
        },

        weeksInYear : function () {
            var weekInfo = this.localeData()._week;
            return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
        },

        get : function (units) {
            units = normalizeUnits(units);
            return this[units]();
        },

        set : function (units, value) {
            var unit;
            if (typeof units === 'object') {
                for (unit in units) {
                    this.set(unit, units[unit]);
                }
            }
            else {
                units = normalizeUnits(units);
                if (typeof this[units] === 'function') {
                    this[units](value);
                }
            }
            return this;
        },

        // If passed a locale key, it will set the locale for this
        // instance.  Otherwise, it will return the locale configuration
        // variables for this instance.
        locale : function (key) {
            var newLocaleData;

            if (key === undefined) {
                return this._locale._abbr;
            } else {
                newLocaleData = moment.localeData(key);
                if (newLocaleData != null) {
                    this._locale = newLocaleData;
                }
                return this;
            }
        },

        lang : deprecate(
            'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
            function (key) {
                if (key === undefined) {
                    return this.localeData();
                } else {
                    return this.locale(key);
                }
            }
        ),

        localeData : function () {
            return this._locale;
        },

        _dateUtcOffset : function () {
            // On Firefox.24 Date#getTimezoneOffset returns a floating point.
            // https://github.com/moment/moment/pull/1871
            return -Math.round(this._d.getTimezoneOffset() / 15) * 15;
        }

    });

    function rawMonthSetter(mom, value) {
        var dayOfMonth;

        // TODO: Move this out of here!
        if (typeof value === 'string') {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (typeof value !== 'number') {
                return mom;
            }
        }

        dayOfMonth = Math.min(mom.date(),
                daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function rawGetter(mom, unit) {
        return mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]();
    }

    function rawSetter(mom, unit, value) {
        if (unit === 'Month') {
            return rawMonthSetter(mom, value);
        } else {
            return mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }

    function makeAccessor(unit, keepTime) {
        return function (value) {
            if (value != null) {
                rawSetter(this, unit, value);
                moment.updateOffset(this, keepTime);
                return this;
            } else {
                return rawGetter(this, unit);
            }
        };
    }

    moment.fn.millisecond = moment.fn.milliseconds = makeAccessor('Milliseconds', false);
    moment.fn.second = moment.fn.seconds = makeAccessor('Seconds', false);
    moment.fn.minute = moment.fn.minutes = makeAccessor('Minutes', false);
    // Setting the hour should keep the time, because the user explicitly
    // specified which hour he wants. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    moment.fn.hour = moment.fn.hours = makeAccessor('Hours', true);
    // moment.fn.month is defined separately
    moment.fn.date = makeAccessor('Date', true);
    moment.fn.dates = deprecate('dates accessor is deprecated. Use date instead.', makeAccessor('Date', true));
    moment.fn.year = makeAccessor('FullYear', true);
    moment.fn.years = deprecate('years accessor is deprecated. Use year instead.', makeAccessor('FullYear', true));

    // add plural methods
    moment.fn.days = moment.fn.day;
    moment.fn.months = moment.fn.month;
    moment.fn.weeks = moment.fn.week;
    moment.fn.isoWeeks = moment.fn.isoWeek;
    moment.fn.quarters = moment.fn.quarter;

    // add aliased format methods
    moment.fn.toJSON = moment.fn.toISOString;

    // alias isUtc for dev-friendliness
    moment.fn.isUTC = moment.fn.isUtc;

    /************************************
        Duration Prototype
    ************************************/


    function daysToYears (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        return days * 400 / 146097;
    }

    function yearsToDays (years) {
        // years * 365 + absRound(years / 4) -
        //     absRound(years / 100) + absRound(years / 400);
        return years * 146097 / 400;
    }

    extend(moment.duration.fn = Duration.prototype, {

        _bubble : function () {
            var milliseconds = this._milliseconds,
                days = this._days,
                months = this._months,
                data = this._data,
                seconds, minutes, hours, years = 0;

            // The following code bubbles up values, see the tests for
            // examples of what that means.
            data.milliseconds = milliseconds % 1000;

            seconds = absRound(milliseconds / 1000);
            data.seconds = seconds % 60;

            minutes = absRound(seconds / 60);
            data.minutes = minutes % 60;

            hours = absRound(minutes / 60);
            data.hours = hours % 24;

            days += absRound(hours / 24);

            // Accurately convert days to years, assume start from year 0.
            years = absRound(daysToYears(days));
            days -= absRound(yearsToDays(years));

            // 30 days to a month
            // TODO (iskren): Use anchor date (like 1st Jan) to compute this.
            months += absRound(days / 30);
            days %= 30;

            // 12 months -> 1 year
            years += absRound(months / 12);
            months %= 12;

            data.days = days;
            data.months = months;
            data.years = years;
        },

        abs : function () {
            this._milliseconds = Math.abs(this._milliseconds);
            this._days = Math.abs(this._days);
            this._months = Math.abs(this._months);

            this._data.milliseconds = Math.abs(this._data.milliseconds);
            this._data.seconds = Math.abs(this._data.seconds);
            this._data.minutes = Math.abs(this._data.minutes);
            this._data.hours = Math.abs(this._data.hours);
            this._data.months = Math.abs(this._data.months);
            this._data.years = Math.abs(this._data.years);

            return this;
        },

        weeks : function () {
            return absRound(this.days() / 7);
        },

        valueOf : function () {
            return this._milliseconds +
              this._days * 864e5 +
              (this._months % 12) * 2592e6 +
              toInt(this._months / 12) * 31536e6;
        },

        humanize : function (withSuffix) {
            var output = relativeTime(this, !withSuffix, this.localeData());

            if (withSuffix) {
                output = this.localeData().pastFuture(+this, output);
            }

            return this.localeData().postformat(output);
        },

        add : function (input, val) {
            // supports only 2.0-style add(1, 's') or add(moment)
            var dur = moment.duration(input, val);

            this._milliseconds += dur._milliseconds;
            this._days += dur._days;
            this._months += dur._months;

            this._bubble();

            return this;
        },

        subtract : function (input, val) {
            var dur = moment.duration(input, val);

            this._milliseconds -= dur._milliseconds;
            this._days -= dur._days;
            this._months -= dur._months;

            this._bubble();

            return this;
        },

        get : function (units) {
            units = normalizeUnits(units);
            return this[units.toLowerCase() + 's']();
        },

        as : function (units) {
            var days, months;
            units = normalizeUnits(units);

            if (units === 'month' || units === 'year') {
                days = this._days + this._milliseconds / 864e5;
                months = this._months + daysToYears(days) * 12;
                return units === 'month' ? months : months / 12;
            } else {
                // handle milliseconds separately because of floating point math errors (issue #1867)
                days = this._days + Math.round(yearsToDays(this._months / 12));
                switch (units) {
                    case 'week': return days / 7 + this._milliseconds / 6048e5;
                    case 'day': return days + this._milliseconds / 864e5;
                    case 'hour': return days * 24 + this._milliseconds / 36e5;
                    case 'minute': return days * 24 * 60 + this._milliseconds / 6e4;
                    case 'second': return days * 24 * 60 * 60 + this._milliseconds / 1000;
                    // Math.floor prevents floating point math errors here
                    case 'millisecond': return Math.floor(days * 24 * 60 * 60 * 1000) + this._milliseconds;
                    default: throw new Error('Unknown unit ' + units);
                }
            }
        },

        lang : moment.fn.lang,
        locale : moment.fn.locale,

        toIsoString : deprecate(
            'toIsoString() is deprecated. Please use toISOString() instead ' +
            '(notice the capitals)',
            function () {
                return this.toISOString();
            }
        ),

        toISOString : function () {
            // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
            var years = Math.abs(this.years()),
                months = Math.abs(this.months()),
                days = Math.abs(this.days()),
                hours = Math.abs(this.hours()),
                minutes = Math.abs(this.minutes()),
                seconds = Math.abs(this.seconds() + this.milliseconds() / 1000);

            if (!this.asSeconds()) {
                // this is the same as C#'s (Noda) and python (isodate)...
                // but not other JS (goog.date)
                return 'P0D';
            }

            return (this.asSeconds() < 0 ? '-' : '') +
                'P' +
                (years ? years + 'Y' : '') +
                (months ? months + 'M' : '') +
                (days ? days + 'D' : '') +
                ((hours || minutes || seconds) ? 'T' : '') +
                (hours ? hours + 'H' : '') +
                (minutes ? minutes + 'M' : '') +
                (seconds ? seconds + 'S' : '');
        },

        localeData : function () {
            return this._locale;
        },

        toJSON : function () {
            return this.toISOString();
        }
    });

    moment.duration.fn.toString = moment.duration.fn.toISOString;

    function makeDurationGetter(name) {
        moment.duration.fn[name] = function () {
            return this._data[name];
        };
    }

    for (i in unitMillisecondFactors) {
        if (hasOwnProp(unitMillisecondFactors, i)) {
            makeDurationGetter(i.toLowerCase());
        }
    }

    moment.duration.fn.asMilliseconds = function () {
        return this.as('ms');
    };
    moment.duration.fn.asSeconds = function () {
        return this.as('s');
    };
    moment.duration.fn.asMinutes = function () {
        return this.as('m');
    };
    moment.duration.fn.asHours = function () {
        return this.as('h');
    };
    moment.duration.fn.asDays = function () {
        return this.as('d');
    };
    moment.duration.fn.asWeeks = function () {
        return this.as('weeks');
    };
    moment.duration.fn.asMonths = function () {
        return this.as('M');
    };
    moment.duration.fn.asYears = function () {
        return this.as('y');
    };

    /************************************
        Default Locale
    ************************************/


    // Set default locale, other locale will inherit from English.
    moment.locale('en', {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

  // moment.js locale configuration
// locale : czech (cs)
// author : petrbela : https://github.com/petrbela

  (function (factory) {
    factory(moment);
  }(function (moment) {
    var months = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
      monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');

    function plural(n) {
      return (n > 1) && (n < 5) && (~~(n / 10) !== 1);
    }

    function translate(number, withoutSuffix, key, isFuture) {
      var result = number + ' ';
      switch (key) {
        case 's':  // a few seconds / in a few seconds / a few seconds ago
          return (withoutSuffix || isFuture) ? 'pár sekund' : 'pár sekundami';
        case 'm':  // a minute / in a minute / a minute ago
          return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');
        case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
          if (withoutSuffix || isFuture) {
            return result + (plural(number) ? 'minuty' : 'minut');
          } else {
            return result + 'minutami';
          }
          break;
        case 'h':  // an hour / in an hour / an hour ago
          return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
        case 'hh': // 9 hours / in 9 hours / 9 hours ago
          if (withoutSuffix || isFuture) {
            return result + (plural(number) ? 'hodiny' : 'hodin');
          } else {
            return result + 'hodinami';
          }
          break;
        case 'd':  // a day / in a day / a day ago
          return (withoutSuffix || isFuture) ? 'den' : 'dnem';
        case 'dd': // 9 days / in 9 days / 9 days ago
          if (withoutSuffix || isFuture) {
            return result + (plural(number) ? 'dny' : 'dní');
          } else {
            return result + 'dny';
          }
          break;
        case 'M':  // a month / in a month / a month ago
          return (withoutSuffix || isFuture) ? 'měsíc' : 'měsícem';
        case 'MM': // 9 months / in 9 months / 9 months ago
          if (withoutSuffix || isFuture) {
            return result + (plural(number) ? 'měsíce' : 'měsíců');
          } else {
            return result + 'měsíci';
          }
          break;
        case 'y':  // a year / in a year / a year ago
          return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
        case 'yy': // 9 years / in 9 years / 9 years ago
          if (withoutSuffix || isFuture) {
            return result + (plural(number) ? 'roky' : 'let');
          } else {
            return result + 'lety';
          }
          break;
      }
    }

    return moment.defineLocale('cs', {
      months : months,
      monthsShort : monthsShort,
      monthsParse : (function (months, monthsShort) {
        var i, _monthsParse = [];
        for (i = 0; i < 12; i++) {
          // use custom parser to solve problem with July (červenec)
          _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
        }
        return _monthsParse;
      }(months, monthsShort)),
      weekdays : 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
      weekdaysShort : 'ne_po_út_st_čt_pá_so'.split('_'),
      weekdaysMin : 'ne_po_út_st_čt_pá_so'.split('_'),
      longDateFormat : {
        LT: 'H:mm',
        LTS : 'LT:ss',
        L : 'DD.MM.YYYY',
        LL : 'D. MMMM YYYY',
        LLL : 'D. MMMM YYYY LT',
        LLLL : 'dddd D. MMMM YYYY LT'
      },
      calendar : {
        sameDay: '[dnes v] LT',
        nextDay: '[zítra v] LT',
        nextWeek: function () {
          switch (this.day()) {
            case 0:
              return '[v neděli v] LT';
            case 1:
            case 2:
              return '[v] dddd [v] LT';
            case 3:
              return '[ve středu v] LT';
            case 4:
              return '[ve čtvrtek v] LT';
            case 5:
              return '[v pátek v] LT';
            case 6:
              return '[v sobotu v] LT';
          }
        },
        lastDay: '[včera v] LT',
        lastWeek: function () {
          switch (this.day()) {
            case 0:
              return '[minulou neděli v] LT';
            case 1:
            case 2:
              return '[minulé] dddd [v] LT';
            case 3:
              return '[minulou středu v] LT';
            case 4:
            case 5:
              return '[minulý] dddd [v] LT';
            case 6:
              return '[minulou sobotu v] LT';
          }
        },
        sameElse: 'L'
      },
      relativeTime : {
        future : 'za %s',
        past : 'před %s',
        s : translate,
        m : translate,
        mm : translate,
        h : translate,
        hh : translate,
        d : translate,
        dd : translate,
        M : translate,
        MM : translate,
        y : translate,
        yy : translate
      },
      ordinalParse : /\d{1,2}\./,
      ordinal : '%d.',
      week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
      }
    });
  }));

  moment.locale('en');

    /************************************
        Exposing Moment
    ************************************/

    function makeGlobal(shouldDeprecate) {
        /*global ender:false */
        if (typeof ender !== 'undefined') {
            return;
        }
        oldGlobalMoment = globalScope.moment;
        if (shouldDeprecate) {
            globalScope.moment = deprecate(
                    'Accessing Moment through the global scope is ' +
                    'deprecated, and will be removed in an upcoming ' +
                    'release.',
                    moment);
        } else {
            globalScope.moment = moment;
        }
    }

    // CommonJS module is defined
    if (hasModule) {
        module.exports = moment;
    } else if (typeof define === 'function' && define.amd) {
        define('vendor/moment',['require','exports','module'],function (require, exports, module) {
            if (module.config && module.config() && module.config().noGlobal === true) {
                // release the global variable
                globalScope.moment = oldGlobalMoment;
            }

            return moment;
        });
        makeGlobal(true);
    } else {
        makeGlobal();
    }
}).call(this);
/*!

 handlebars v3.0.0

Copyright (C) 2011-2014 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
/* exported Handlebars */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define('vendor/handlebars.runtime',[], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Handlebars = factory();
  }
}(this, function () {
// handlebars/utils.js
var __module2__ = (function() {
  
  var __exports__ = {};
  /*jshint -W004 */
  var escape = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;"
  };

  var badChars = /[&<>"'`]/g;
  var possible = /[&<>"'`]/;

  function escapeChar(chr) {
    return escape[chr];
  }

  function extend(obj /* , ...source */) {
    for (var i = 1; i < arguments.length; i++) {
      for (var key in arguments[i]) {
        if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
          obj[key] = arguments[i][key];
        }
      }
    }

    return obj;
  }

  __exports__.extend = extend;var toString = Object.prototype.toString;
  __exports__.toString = toString;
  // Sourced from lodash
  // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
  var isFunction = function(value) {
    return typeof value === 'function';
  };
  // fallback for older versions of Chrome and Safari
  /* istanbul ignore next */
  if (isFunction(/x/)) {
    isFunction = function(value) {
      return typeof value === 'function' && toString.call(value) === '[object Function]';
    };
  }
  var isFunction;
  __exports__.isFunction = isFunction;
  /* istanbul ignore next */
  var isArray = Array.isArray || function(value) {
    return (value && typeof value === 'object') ? toString.call(value) === '[object Array]' : false;
  };
  __exports__.isArray = isArray;
  // Older IE versions do not directly support indexOf so we must implement our own, sadly.
  function indexOf(array, value) {
    for (var i = 0, len = array.length; i < len; i++) {
      if (array[i] === value) {
        return i;
      }
    }
    return -1;
  }

  __exports__.indexOf = indexOf;
  function escapeExpression(string) {
    // don't escape SafeStrings, since they're already safe
    if (string && string.toHTML) {
      return string.toHTML();
    } else if (string == null) {
      return "";
    } else if (!string) {
      return string + '';
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = "" + string;

    if(!possible.test(string)) { return string; }
    return string.replace(badChars, escapeChar);
  }

  __exports__.escapeExpression = escapeExpression;function isEmpty(value) {
    if (!value && value !== 0) {
      return true;
    } else if (isArray(value) && value.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  __exports__.isEmpty = isEmpty;function blockParams(params, ids) {
    params.path = ids;
    return params;
  }

  __exports__.blockParams = blockParams;function appendContextPath(contextPath, id) {
    return (contextPath ? contextPath + '.' : '') + id;
  }

  __exports__.appendContextPath = appendContextPath;
  return __exports__;
})();

// handlebars/exception.js
var __module3__ = (function() {
  
  var __exports__;

  var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

  function Exception(message, node) {
    var loc = node && node.loc,
        line,
        column;
    if (loc) {
      line = loc.start.line;
      column = loc.start.column;

      message += ' - ' + line + ':' + column;
    }

    var tmp = Error.prototype.constructor.call(this, message);

    // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
    for (var idx = 0; idx < errorProps.length; idx++) {
      this[errorProps[idx]] = tmp[errorProps[idx]];
    }

    if (loc) {
      this.lineNumber = line;
      this.column = column;
    }
  }

  Exception.prototype = new Error();

  __exports__ = Exception;
  return __exports__;
})();

// handlebars/base.js
var __module1__ = (function(__dependency1__, __dependency2__) {
  
  var __exports__ = {};
  var Utils = __dependency1__;
  var Exception = __dependency2__;

  var VERSION = "3.0.0";
  __exports__.VERSION = VERSION;var COMPILER_REVISION = 6;
  __exports__.COMPILER_REVISION = COMPILER_REVISION;
  var REVISION_CHANGES = {
    1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
    2: '== 1.0.0-rc.3',
    3: '== 1.0.0-rc.4',
    4: '== 1.x.x',
    5: '== 2.0.0-alpha.x',
    6: '>= 2.0.0-beta.1'
  };
  __exports__.REVISION_CHANGES = REVISION_CHANGES;
  var isArray = Utils.isArray,
      isFunction = Utils.isFunction,
      toString = Utils.toString,
      objectType = '[object Object]';

  function HandlebarsEnvironment(helpers, partials) {
    this.helpers = helpers || {};
    this.partials = partials || {};

    registerDefaultHelpers(this);
  }

  __exports__.HandlebarsEnvironment = HandlebarsEnvironment;HandlebarsEnvironment.prototype = {
    constructor: HandlebarsEnvironment,

    logger: logger,
    log: log,

    registerHelper: function(name, fn) {
      if (toString.call(name) === objectType) {
        if (fn) { throw new Exception('Arg not supported with multiple helpers'); }
        Utils.extend(this.helpers, name);
      } else {
        this.helpers[name] = fn;
      }
    },
    unregisterHelper: function(name) {
      delete this.helpers[name];
    },

    registerPartial: function(name, partial) {
      if (toString.call(name) === objectType) {
        Utils.extend(this.partials,  name);
      } else {
        if (typeof partial === 'undefined') {
          throw new Exception('Attempting to register a partial as undefined');
        }
        this.partials[name] = partial;
      }
    },
    unregisterPartial: function(name) {
      delete this.partials[name];
    }
  };

  function registerDefaultHelpers(instance) {
    instance.registerHelper('helperMissing', function(/* [args, ]options */) {
      if(arguments.length === 1) {
        // A missing field in a {{foo}} constuct.
        return undefined;
      } else {
        // Someone is actually trying to call something, blow up.
        throw new Exception("Missing helper: '" + arguments[arguments.length-1].name + "'");
      }
    });

    instance.registerHelper('blockHelperMissing', function(context, options) {
      var inverse = options.inverse,
          fn = options.fn;

      if(context === true) {
        return fn(this);
      } else if(context === false || context == null) {
        return inverse(this);
      } else if (isArray(context)) {
        if(context.length > 0) {
          if (options.ids) {
            options.ids = [options.name];
          }

          return instance.helpers.each(context, options);
        } else {
          return inverse(this);
        }
      } else {
        if (options.data && options.ids) {
          var data = createFrame(options.data);
          data.contextPath = Utils.appendContextPath(options.data.contextPath, options.name);
          options = {data: data};
        }

        return fn(context, options);
      }
    });

    instance.registerHelper('each', function(context, options) {
      if (!options) {
        throw new Exception('Must pass iterator to #each');
      }

      var fn = options.fn, inverse = options.inverse;
      var i = 0, ret = "", data;

      var contextPath;
      if (options.data && options.ids) {
        contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
      }

      if (isFunction(context)) { context = context.call(this); }

      if (options.data) {
        data = createFrame(options.data);
      }

      function execIteration(key, i, last) {
        if (data) {
          data.key = key;
          data.index = i;
          data.first = i === 0;
          data.last  = !!last;

          if (contextPath) {
            data.contextPath = contextPath + key;
          }
        }

        ret = ret + fn(context[key], {
          data: data,
          blockParams: Utils.blockParams([context[key], key], [contextPath + key, null])
        });
      }

      if(context && typeof context === 'object') {
        if (isArray(context)) {
          for(var j = context.length; i<j; i++) {
            execIteration(i, i, i === context.length-1);
          }
        } else {
          var priorKey;

          for(var key in context) {
            if(context.hasOwnProperty(key)) {
              // We're running the iterations one step out of sync so we can detect
              // the last iteration without have to scan the object twice and create
              // an itermediate keys array. 
              if (priorKey) {
                execIteration(priorKey, i-1);
              }
              priorKey = key;
              i++;
            }
          }
          if (priorKey) {
            execIteration(priorKey, i-1, true);
          }
        }
      }

      if(i === 0){
        ret = inverse(this);
      }

      return ret;
    });

    instance.registerHelper('if', function(conditional, options) {
      if (isFunction(conditional)) { conditional = conditional.call(this); }

      // Default behavior is to render the positive path if the value is truthy and not empty.
      // The `includeZero` option may be set to treat the condtional as purely not empty based on the
      // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
      if ((!options.hash.includeZero && !conditional) || Utils.isEmpty(conditional)) {
        return options.inverse(this);
      } else {
        return options.fn(this);
      }
    });

    instance.registerHelper('unless', function(conditional, options) {
      return instance.helpers['if'].call(this, conditional, {fn: options.inverse, inverse: options.fn, hash: options.hash});
    });

    instance.registerHelper('with', function(context, options) {
      if (isFunction(context)) { context = context.call(this); }

      var fn = options.fn;

      if (!Utils.isEmpty(context)) {
        if (options.data && options.ids) {
          var data = createFrame(options.data);
          data.contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]);
          options = {data:data};
        }

        return fn(context, options);
      } else {
        return options.inverse(this);
      }
    });

    instance.registerHelper('log', function(message, options) {
      var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
      instance.log(level, message);
    });

    instance.registerHelper('lookup', function(obj, field) {
      return obj && obj[field];
    });
  }

  var logger = {
    methodMap: { 0: 'debug', 1: 'info', 2: 'warn', 3: 'error' },

    // State enum
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
    level: 1,

    // Can be overridden in the host environment
    log: function(level, message) {
      if (typeof console !== 'undefined' && logger.level <= level) {
        var method = logger.methodMap[level];
        (console[method] || console.log).call(console, message);
      }
    }
  };
  __exports__.logger = logger;
  var log = logger.log;
  __exports__.log = log;
  var createFrame = function(object) {
    var frame = Utils.extend({}, object);
    frame._parent = object;
    return frame;
  };
  __exports__.createFrame = createFrame;
  return __exports__;
})(__module2__, __module3__);

// handlebars/safe-string.js
var __module4__ = (function() {
  
  var __exports__;
  // Build out our basic SafeString type
  function SafeString(string) {
    this.string = string;
  }

  SafeString.prototype.toString = SafeString.prototype.toHTML = function() {
    return "" + this.string;
  };

  __exports__ = SafeString;
  return __exports__;
})();

// handlebars/runtime.js
var __module5__ = (function(__dependency1__, __dependency2__, __dependency3__) {
  
  var __exports__ = {};
  var Utils = __dependency1__;
  var Exception = __dependency2__;
  var COMPILER_REVISION = __dependency3__.COMPILER_REVISION;
  var REVISION_CHANGES = __dependency3__.REVISION_CHANGES;
  var createFrame = __dependency3__.createFrame;

  function checkRevision(compilerInfo) {
    var compilerRevision = compilerInfo && compilerInfo[0] || 1,
        currentRevision = COMPILER_REVISION;

    if (compilerRevision !== currentRevision) {
      if (compilerRevision < currentRevision) {
        var runtimeVersions = REVISION_CHANGES[currentRevision],
            compilerVersions = REVISION_CHANGES[compilerRevision];
        throw new Exception("Template was precompiled with an older version of Handlebars than the current runtime. "+
              "Please update your precompiler to a newer version ("+runtimeVersions+") or downgrade your runtime to an older version ("+compilerVersions+").");
      } else {
        // Use the embedded version info since the runtime doesn't know about this revision yet
        throw new Exception("Template was precompiled with a newer version of Handlebars than the current runtime. "+
              "Please update your runtime to a newer version ("+compilerInfo[1]+").");
      }
    }
  }

  __exports__.checkRevision = checkRevision;// TODO: Remove this line and break up compilePartial

  function template(templateSpec, env) {
    /* istanbul ignore next */
    if (!env) {
      throw new Exception("No environment passed to template");
    }
    if (!templateSpec || !templateSpec.main) {
      throw new Exception('Unknown template object: ' + typeof templateSpec);
    }

    // Note: Using env.VM references rather than local var references throughout this section to allow
    // for external users to override these as psuedo-supported APIs.
    env.VM.checkRevision(templateSpec.compiler);

    var invokePartialWrapper = function(partial, context, options) {
      if (options.hash) {
        context = Utils.extend({}, context, options.hash);
      }

      partial = env.VM.resolvePartial.call(this, partial, context, options);
      var result = env.VM.invokePartial.call(this, partial, context, options);

      if (result == null && env.compile) {
        options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
        result = options.partials[options.name](context, options);
      }
      if (result != null) {
        if (options.indent) {
          var lines = result.split('\n');
          for (var i = 0, l = lines.length; i < l; i++) {
            if (!lines[i] && i + 1 === l) {
              break;
            }

            lines[i] = options.indent + lines[i];
          }
          result = lines.join('\n');
        }
        return result;
      } else {
        throw new Exception("The partial " + options.name + " could not be compiled when running in runtime-only mode");
      }
    };

    // Just add water
    var container = {
      strict: function(obj, name) {
        if (!(name in obj)) {
          throw new Exception('"' + name + '" not defined in ' + obj);
        }
        return obj[name];
      },
      lookup: function(depths, name) {
        var len = depths.length;
        for (var i = 0; i < len; i++) {
          if (depths[i] && depths[i][name] != null) {
            return depths[i][name];
          }
        }
      },
      lambda: function(current, context) {
        return typeof current === 'function' ? current.call(context) : current;
      },

      escapeExpression: Utils.escapeExpression,
      invokePartial: invokePartialWrapper,

      fn: function(i) {
        return templateSpec[i];
      },

      programs: [],
      program: function(i, data, declaredBlockParams, blockParams, depths) {
        var programWrapper = this.programs[i],
            fn = this.fn(i);
        if (data || depths || blockParams || declaredBlockParams) {
          programWrapper = program(this, i, fn, data, declaredBlockParams, blockParams, depths);
        } else if (!programWrapper) {
          programWrapper = this.programs[i] = program(this, i, fn);
        }
        return programWrapper;
      },

      data: function(data, depth) {
        while (data && depth--) {
          data = data._parent;
        }
        return data;
      },
      merge: function(param, common) {
        var ret = param || common;

        if (param && common && (param !== common)) {
          ret = Utils.extend({}, common, param);
        }

        return ret;
      },

      noop: env.VM.noop,
      compilerInfo: templateSpec.compiler
    };

    var ret = function(context, options) {
      options = options || {};
      var data = options.data;

      ret._setup(options);
      if (!options.partial && templateSpec.useData) {
        data = initData(context, data);
      }
      var depths,
          blockParams = templateSpec.useBlockParams ? [] : undefined;
      if (templateSpec.useDepths) {
        depths = options.depths ? [context].concat(options.depths) : [context];
      }

      return templateSpec.main.call(container, context, container.helpers, container.partials, data, blockParams, depths);
    };
    ret.isTop = true;

    ret._setup = function(options) {
      if (!options.partial) {
        container.helpers = container.merge(options.helpers, env.helpers);

        if (templateSpec.usePartial) {
          container.partials = container.merge(options.partials, env.partials);
        }
      } else {
        container.helpers = options.helpers;
        container.partials = options.partials;
      }
    };

    ret._child = function(i, data, blockParams, depths) {
      if (templateSpec.useBlockParams && !blockParams) {
        throw new Exception('must pass block params');
      }
      if (templateSpec.useDepths && !depths) {
        throw new Exception('must pass parent depths');
      }

      return program(container, i, templateSpec[i], data, 0, blockParams, depths);
    };
    return ret;
  }

  __exports__.template = template;function program(container, i, fn, data, declaredBlockParams, blockParams, depths) {
    var prog = function(context, options) {
      options = options || {};

      return fn.call(container,
          context,
          container.helpers, container.partials,
          options.data || data,
          blockParams && [options.blockParams].concat(blockParams),
          depths && [context].concat(depths));
    };
    prog.program = i;
    prog.depth = depths ? depths.length : 0;
    prog.blockParams = declaredBlockParams || 0;
    return prog;
  }

  __exports__.program = program;function resolvePartial(partial, context, options) {
    if (!partial) {
      partial = options.partials[options.name];
    } else if (!partial.call && !options.name) {
      // This is a dynamic partial that returned a string
      options.name = partial;
      partial = options.partials[partial];
    }
    return partial;
  }

  __exports__.resolvePartial = resolvePartial;function invokePartial(partial, context, options) {
    options.partial = true;

    if(partial === undefined) {
      throw new Exception("The partial " + options.name + " could not be found");
    } else if(partial instanceof Function) {
      return partial(context, options);
    }
  }

  __exports__.invokePartial = invokePartial;function noop() { return ""; }

  __exports__.noop = noop;function initData(context, data) {
    if (!data || !('root' in data)) {
      data = data ? createFrame(data) : {};
      data.root = context;
    }
    return data;
  }
  return __exports__;
})(__module2__, __module3__, __module1__);

// handlebars.runtime.js
var __module0__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
  
  var __exports__;
  /*globals Handlebars: true */
  var base = __dependency1__;

  // Each of these augment the Handlebars object. No need to setup here.
  // (This is done to easily share code between commonjs and browse envs)
  var SafeString = __dependency2__;
  var Exception = __dependency3__;
  var Utils = __dependency4__;
  var runtime = __dependency5__;

  // For compatibility and usage outside of module systems, make the Handlebars object a namespace
  var create = function() {
    var hb = new base.HandlebarsEnvironment();

    Utils.extend(hb, base);
    hb.SafeString = SafeString;
    hb.Exception = Exception;
    hb.Utils = Utils;
    hb.escapeExpression = Utils.escapeExpression;

    hb.VM = runtime;
    hb.template = function(spec) {
      return runtime.template(spec, hb);
    };

    return hb;
  };

  var Handlebars = create();
  Handlebars.create = create;

  /*jshint -W040 */
  /* istanbul ignore next */
  var root = typeof global !== 'undefined' ? global : window,
      $Handlebars = root.Handlebars;
  /* istanbul ignore next */
  Handlebars.noConflict = function() {
    if (root.Handlebars === Handlebars) {
      root.Handlebars = $Handlebars;
    }
  };

  Handlebars['default'] = Handlebars;

  __exports__ = Handlebars;
  return __exports__;
})(__module1__, __module4__, __module3__, __module2__, __module5__);

  return __module0__;
}));

define('translation/cs',{

  Project: 'Projekt',
  Subject: 'Předmět',
  Assignee: 'Přiřazeno',
  Status: 'Stav',
  Done: 'Hotovo',
  'Due date': 'Uzavřít do',
  'Updated on': 'Aktualizováno',
  'Assigned to': 'Přiřazeno',

  // Timey
  'Open Timey': 'Otevřít Timey',

  // Absences
  maybe: 'možná',
  'Show details': 'Zobrazit detaily',
  'Planned absences': 'Plánované nepřítomnosti',
  refresh: 'obnovit',
  'Not available from %0 to %1': 'Nedostupný od %0 do %1',
  'Not available %0': 'Nedostupný %0',

  // Assign select author
  'author': 'autor',

  // Issues
  'My issues': 'Mé úkoly',
  'No issues': 'Žádné úkoly',
  'Overdue issues': 'Úkoly s vypršeným Uzavřít do',
  'select random': 'zobrazit náhodný',
  'show all': 'zobrazit všechny',

  // Attachments
  'Add to editor': 'Přidat do editoru',

  // Last issue
  'Last viewed issue': 'Poslední zobrazený úkol'
});
define('translation/en',{

});
define('lib/translate',['translation/cs', 'translation/en'], function(cs, en) {
  var language = $('html').attr('lang');

  return function(key) {
    if (language === 'cs' && key in cs) {
      return cs[key];
    } else if (language === 'en' && key in en) {
      return en[key];
    } else {
      return key;
    }
  }
});
define('template/helper/translate',['vendor/handlebars.runtime', 'lib/translate'], function (handlebars, _) {
  handlebars.registerHelper('_', function(key) {
    var translated = _(key);

    for (var i = 1; i < (arguments.length - 1); i++) {
      translated = translated.replace('%' + (i - 1), arguments[i]);
    }

    return translated;
  });
});
define('template/helper/dayFromDate',['vendor/handlebars.runtime'], function (handlebars) {
  handlebars.registerHelper('dayFromDate', function(key) {
    return parseInt(key.split('-')[2]);
  });
});
define('template/helper/trim',['vendor/handlebars.runtime'], function (handlebars) {
  handlebars.registerHelper('trim', function(key) {
    return key.trim();
  });
});
define('template/helper/is',['vendor/handlebars.runtime'], function (handlebars) {
  handlebars.registerHelper('is', function(first, second,  options) {
    if (first === second) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });
});
define('template/helper/isEven',['vendor/handlebars.runtime'], function (handlebars) {
  handlebars.registerHelper('isEven', function(first,  options) {
    if (first % 2 === 0) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });
});
define('template/helper/isNotEmpty',['vendor/handlebars.runtime'], function (handlebars) {
  handlebars.registerHelper('isNotEmpty', function(first,  options) {
    if (first && first.length !== 0) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });
});
define('template/helper/monthFromDate',['vendor/handlebars.runtime', 'vendor/moment'], function (handlebars, moment) {
  handlebars.registerHelper('monthFromDate', function(key) {
    var parts = key.split('-'),
      month = parts[1],
      year = parts[0];

    var date = moment().year(parseInt(year, 10)).month(parseInt(month, 10) - 1).format('MMMM');
    return date.charAt(0).toUpperCase() + date.slice(1)
  });
});
define('template/helper/redmineTime',['vendor/handlebars.runtime', 'vendor/moment'], function (handlebars, moment) {
  handlebars.registerHelper('redmineTime', function(key) {
    return moment(key).format('YYYY-MM-DD HH:mm');
  });
});


define('lib/local_storage',[],function() {
  var ls = window.localStorage,
    NS = 'theme';

  function hashCode(string) {
    var hash = 0;
    if (string == 0) return hash;
    for (var i = 0; i < string.length; i++) {
      var char = string.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
  }

  function generateKey(key, sub) {
    if (key.indexOf('.') !== -1) {
      throw new Error('Key cannot contains dot character, "' + key + '" given.');
    }

    if (sub !== undefined) {
      return NS + '.' + key + '.' + sub;
    } else {
      return NS + '.' + key;
    }
  }

  function isExpired(key) {
    var expirationTime;

    if ((expirationTime = ls.getItem(generateKey(key, 'expire'))) !== null) {
      if (new Date() > new Date(parseInt(expirationTime))) {
        return true;
      }
    }

    return false;
  }

  return {
    set: function (key, value, expireInHours) {
      if (expireInHours !== undefined) {
        var expirationTime = new Date().getTime() + expireInHours * 3600 * 1000;
        ls.setItem(generateKey(key, 'expire'), expirationTime);
      }

      return ls.setItem(generateKey(key), value);
    },

    setJsonCache: function (type, uri, data, expireInHours) {
      return this.set(type + ':' + hashCode(uri), JSON.stringify(data), expireInHours);
    },

    get: function (key) {
      if (isExpired(key)) {
        this.remove(key);
        return null;
      }

      return ls.getItem(generateKey(key));
    },

    getJsonCache: function (type, uri) {
      var data = this.get(type + ':' + hashCode(uri));
      if (data) {
        return JSON.parse(data);
      }
      return null;
    },

    remove: function (key) {
      ls.removeItem(generateKey(key, 'expire'));
      return ls.removeItem(generateKey(key));
    },

    removeExpired: function() {
      for (var lsItem in localStorage) {
        var parts = lsItem.split('.');
        if (parts.length === 2 && parts[0] === NS) {
          var key = parts[1];
          if (isExpired(key)) {
            this.remove(key);
          }
        }
      }
    }
  }
});


define('lib/redmine_api',['lib/local_storage'], function (ls) {
  return function() {
    if (typeof jQuery === 'undefined') {
      throw new Error('Redmine API require jQuery library');
    }

    var $ = jQuery;

    function hashCode(string) {
      var hash = 0;
      if (string == 0) return hash;
      for (var i = 0; i < string.length; i++) {
        var char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
      }
      return hash;
    }

    // Load Redmine API key from my account page and save to local storage
    this.getRedmineApiKey = function (callback) {
      var redmineApiKey = ls.get('rma:redmineApiKey');
      if (!redmineApiKey) {
        $.get('/my/account').done(function (html) {
          redmineApiKey = $(html).find('#api-access-key').text();

          if (!redmineApiKey) {
            throw new Error('Cannot find Redmine API access key in element #api-access-key on page /my/account.');
          }

          ls.set('rma:redmineApiKey', redmineApiKey);
          callback(redmineApiKey);
        }).fail(function () {
          throw new Error('Cannot load page /my/account for getting Redmine API access key.');
        });
        return;
      }
      callback(redmineApiKey);
    };

    this.get = function (uri, params, callback) {
      this.getRedmineApiKey(function (key) {
        params.key = key;
        uri += '?' + $.param(params);

        $.ajax({
          url: uri,
          dataType: 'text',
          global: false

        }).done(function (data) {
          callback(JSON.parse(data), data);

        }).fail(function (jqXHR, textStatus) {
          if (jqXHR.statusCode() === 401) {
            throw new Error('Redmine API access key is invalid.');
          } else {
            throw new Error('Cannot load URL ' + uri + ' from Redmine API. ' + textStatus);
          }
        });
      });
    };

    this.getWithCache = function (uri, params, callback) {
      var cacheKey = 'rma:cache:' + hashCode(uri + '?' + $.param(params)),
        cached = ls.get(cacheKey);

      if (cached) {
        callback(JSON.parse(cached));
      }

      this.get(uri, params, function (json, data) {
        if (cached != data) {
          ls.set(cacheKey, data, 1);
          callback(json);
        }
      });
    };

    this.getIssuesWithCache = function (params, callback) {
      this.getWithCache('/issues.json', params, callback);
    };

    this.getProject = function (projectId, callback) {
      this.getWithCache('/projects/' + projectId + '.json', {}, callback);
    };

    this.getAttachment = function(attachmentId, callback) {
      this.get('/attachments/' + attachmentId + '.json', {}, callback);
    }
  }
});


define('lib/page_property_miner',['lib/redmine_api'], function(RedmineApi) {
  return {
    projectId: null,
    issueId: null,
    userId: null,
    lang: null,

    matchPage: function (controller, action) {
      var $body = $('body');

      return $body.hasClass('controller-' + controller) && $body.hasClass('action-' + action);
    },

    getProjectName: function() {
      var bodyClassList = document.body.className.split(/\s+/);
      for (var i = 0; i < bodyClassList.length; i++) {
        var className = bodyClassList[i];
        if (className.indexOf('project-') === 0) {
          return className.substr(8);
        }
      }

      return false;
    },

    getTopProjectName: function() {
      var $root = $('#header').find('h1 .root');
      if ($root.size()) {
        var href = $root.attr('href');
        return href.split('/')[2].split('?')[0];
      } else {
       return this.getProjectName();
      }
    },

    getProjectId: function (callback) {
      if (this.projectId === null) {
        if (this.matchPage('issues', 'show')) {
          this.projectId = $('#issue_project_id option[selected="selected"]').val();
          callback(this.projectId);
        } else {
          var redmineApi = new RedmineApi(),
            self = this;

          redmineApi.getProject(this.getProjectName(), function (data) {
            self.projectId = data.project.id;
            callback(self.projectId);
          });
        }
      } else {
        callback(this.projectId);
      }
    },

    getIssueId: function () {
      if (this.issueId === null) {

        if (this.matchPage('issues', 'show')) {
          if ($('h2').eq(0).text().match(/^.+\#([0-9]+)/)) {
            this.issueId = /^.+\#([0-9]+)/.exec($('h2').eq(0).text()).pop();
          }
        }

        if (this.matchPage('timelog', 'new')) {
          if ($('input[name="back_url"]').attr('value').match(/^.+issues\/([0-9]+)\/?$/)) {
            this.issueId = /^.+issues\/([0-9]+)\/?$/.exec($('input[name="back_url"]').attr('value')).pop();
          }
        }

        if (console) console.log('issue id recognized: ' + this.issueId);
      }

      return this.issueId;
    },

    getUserId: function () {
      if (this.userId === null) {
        this.userId = /users\/([0-9]+)$/.exec($('#loggedas a').attr('href')).pop();

        if (console) console.log('user id recognized: ' + this.userId);
      }

      return this.userId;
    },

    assessUsedLanguage: function () {
      if (this.lang === null) {

        if ($('#top-menu a.home').text() == 'Úvodní') {
          this.lang = 'cs';
        } else {
          this.lang = 'en';
        }

        if (console) console.log('used language recognized: ' + this.lang);
      }

      return this.lang;
    },

    debug: function () {
      this.getProjectId(function (projectId) {
        if (console) console.log('Project ID recognized: ' + projectId);
      });
      this.getIssueId();
      this.getUserId();
      this.assessUsedLanguage();
    }
  }
});



define('module/remove_issue_type_from_title',['lib/page_property_miner'], function (ppp) {
  return {
    init: function () {
      if (ppp.matchPage('issues', 'show')) {
        document.title = document.title.replace(/^([^#]*)/, '');
      }
    }
  }
});


define('module/high_res_gravatars',{
  init: function () {
    // devicePixelRatio is not supported
    if (window.devicePixelRatio === undefined) {
      return;
    }

    if (window.devicePixelRatio === 2) {
      $('.gravatar').each(function () {
        var img = this;

        img.src = img.src.replace(/size=([0-9]*)/, function (match, contents) {
          img.width = contents;
          img.height = contents;

          return 'size=' + (contents * 2);
        });
      })
    }
  }
});


/**
 * Auto login when password is filled in login form when page is loaded
 */
define('module/autologin',['lib/page_property_miner'], function (ppp) {
  return {
    init: function() {
      if (!ppp.matchPage('account', 'login')) {
        return;
      }

      // Login credentials are invalid, do not log again
      if (document.getElementById('flash_error')) {
        return;
      }

      if (
        document.getElementById('username').value === 'jakub' && // TODO: Currently only for me
        document.getElementById('password').value
      ) {
        document.querySelector('#login-form form').submit();
      }
    }
  }
});
//     keymaster.js
//     (c) 2011-2013 Thomas Fuchs
//     keymaster.js may be freely distributed under the MIT license.
define('vendor/keymaster',['require','exports','module'],function(require, exports, module) {
  (function (global) {
    var k,
      _handlers = {},
      _mods = {16: false, 18: false, 17: false, 91: false},
      _scope = 'all',
    // modifier keys
      _MODIFIERS = {
        '⇧': 16, shift: 16,
        '⌥': 18, alt: 18, option: 18,
        '⌃': 17, ctrl: 17, control: 17,
        '⌘': 91, command: 91
      },
    // special keys
      _MAP = {
        backspace: 8, tab: 9, clear: 12,
        enter: 13, 'return': 13,
        esc: 27, escape: 27, space: 32,
        left: 37, up: 38,
        right: 39, down: 40,
        del: 46, 'delete': 46,
        home: 36, end: 35,
        pageup: 33, pagedown: 34,
        ',': 188, '.': 190, '/': 191,
        '`': 192, '-': 189, '=': 187,
        ';': 186, '\'': 222,
        '[': 219, ']': 221, '\\': 220
      },
      code = function (x) {
        return _MAP[x] || x.toUpperCase().charCodeAt(0);
      },
      _downKeys = [];

    for (k = 1; k < 20; k++) _MAP['f' + k] = 111 + k;

    // IE doesn't support Array#indexOf, so have a simple replacement
    function index(array, item) {
      var i = array.length;
      while (i--) if (array[i] === item) return i;
      return -1;
    }

    // for comparing mods before unassignment
    function compareArray(a1, a2) {
      if (a1.length != a2.length) return false;
      for (var i = 0; i < a1.length; i++) {
        if (a1[i] !== a2[i]) return false;
      }
      return true;
    }

    var modifierMap = {
      16: 'shiftKey',
      18: 'altKey',
      17: 'ctrlKey',
      91: 'metaKey'
    };

    function updateModifierKey(event) {
      for (k in _mods) _mods[k] = event[modifierMap[k]];
    };

    // handle keydown event
    function dispatch(event) {
      var key, handler, k, i, modifiersMatch, scope;
      key = event.keyCode;

      if (index(_downKeys, key) == -1) {
        _downKeys.push(key);
      }

      // if a modifier key, set the key.<modifierkeyname> property to true and return
      if (key == 93 || key == 224) key = 91; // right command on webkit, command on Gecko
      if (key in _mods) {
        _mods[key] = true;
        // 'assignKey' from inside this closure is exported to window.key
        for (k in _MODIFIERS) if (_MODIFIERS[k] == key) assignKey[k] = true;
        return;
      }
      updateModifierKey(event);

      // see if we need to ignore the keypress (filter() can can be overridden)
      // by default ignore key presses if a select, textarea, or input is focused
      if (!assignKey.filter.call(this, event)) return;

      // abort if no potentially matching shortcuts found
      if (!(key in _handlers)) return;

      scope = getScope();

      // for each potential shortcut
      for (i = 0; i < _handlers[key].length; i++) {
        handler = _handlers[key][i];

        // see if it's in the current scope
        if (handler.scope == scope || handler.scope == 'all') {
          // check if modifiers match if any
          modifiersMatch = handler.mods.length > 0;
          for (k in _mods)
            if ((!_mods[k] && index(handler.mods, +k) > -1) ||
              (_mods[k] && index(handler.mods, +k) == -1)) modifiersMatch = false;
          // call the handler and stop the event if neccessary
          if ((handler.mods.length == 0 && !_mods[16] && !_mods[18] && !_mods[17] && !_mods[91]) || modifiersMatch) {
            if (handler.method(event, handler) === false) {
              if (event.preventDefault) event.preventDefault();
              else event.returnValue = false;
              if (event.stopPropagation) event.stopPropagation();
              if (event.cancelBubble) event.cancelBubble = true;
            }
          }
        }
      }
    };

    // unset modifier keys on keyup
    function clearModifier(event) {
      var key = event.keyCode, k,
        i = index(_downKeys, key);

      // remove key from _downKeys
      if (i >= 0) {
        _downKeys.splice(i, 1);
      }

      if (key == 93 || key == 224) key = 91;
      if (key in _mods) {
        _mods[key] = false;
        for (k in _MODIFIERS) if (_MODIFIERS[k] == key) assignKey[k] = false;
      }
    };

    function resetModifiers() {
      for (k in _mods) _mods[k] = false;
      for (k in _MODIFIERS) assignKey[k] = false;
    };

    // parse and assign shortcut
    function assignKey(key, scope, method) {
      var keys, mods;
      keys = getKeys(key);
      if (method === undefined) {
        method = scope;
        scope = 'all';
      }

      // for each shortcut
      for (var i = 0; i < keys.length; i++) {
        // set modifier keys if any
        mods = [];
        key = keys[i].split('+');
        if (key.length > 1) {
          mods = getMods(key);
          key = [key[key.length - 1]];
        }
        // convert to keycode and...
        key = key[0]
        key = code(key);
        // ...store handler
        if (!(key in _handlers)) _handlers[key] = [];
        _handlers[key].push({shortcut: keys[i], scope: scope, method: method, key: keys[i], mods: mods});
      }
    };

    // unbind all handlers for given key in current scope
    function unbindKey(key, scope) {
      var multipleKeys, keys,
        mods = [],
        i, j, obj;

      multipleKeys = getKeys(key);

      for (j = 0; j < multipleKeys.length; j++) {
        keys = multipleKeys[j].split('+');

        if (keys.length > 1) {
          mods = getMods(keys);
        }

        key = keys[keys.length - 1];
        key = code(key);

        if (scope === undefined) {
          scope = getScope();
        }
        if (!_handlers[key]) {
          return;
        }
        for (i = 0; i < _handlers[key].length; i++) {
          obj = _handlers[key][i];
          // only clear handlers if correct scope and mods match
          if (obj.scope === scope && compareArray(obj.mods, mods)) {
            _handlers[key][i] = {};
          }
        }
      }
    };

    // Returns true if the key with code 'keyCode' is currently down
    // Converts strings into key codes.
    function isPressed(keyCode) {
      if (typeof(keyCode) == 'string') {
        keyCode = code(keyCode);
      }
      return index(_downKeys, keyCode) != -1;
    }

    function getPressedKeyCodes() {
      return _downKeys.slice(0);
    }

    function filter(event) {
      var tagName = (event.target || event.srcElement).tagName;
      // ignore keypressed in any elements that support keyboard data input
      return !(tagName == 'INPUT' || tagName == 'SELECT' || tagName == 'TEXTAREA');
    }

    // initialize key.<modifier> to false
    for (k in _MODIFIERS) assignKey[k] = false;

    // set current scope (default 'all')
    function setScope(scope) {
      _scope = scope || 'all'
    };
    function getScope() {
      return _scope || 'all'
    };

    // delete all handlers for a given scope
    function deleteScope(scope) {
      var key, handlers, i;

      for (key in _handlers) {
        handlers = _handlers[key];
        for (i = 0; i < handlers.length;) {
          if (handlers[i].scope === scope) handlers.splice(i, 1);
          else i++;
        }
      }
    };

    // abstract key logic for assign and unassign
    function getKeys(key) {
      var keys;
      key = key.replace(/\s/g, '');
      keys = key.split(',');
      if ((keys[keys.length - 1]) == '') {
        keys[keys.length - 2] += ',';
      }
      return keys;
    }

    // abstract mods logic for assign and unassign
    function getMods(key) {
      var mods = key.slice(0, key.length - 1);
      for (var mi = 0; mi < mods.length; mi++)
        mods[mi] = _MODIFIERS[mods[mi]];
      return mods;
    }

    // cross-browser events
    function addEvent(object, event, method) {
      if (object.addEventListener)
        object.addEventListener(event, method, false);
      else if (object.attachEvent)
        object.attachEvent('on' + event, function () {
          method(window.event)
        });
    };

    // set the handlers globally on document
    addEvent(document, 'keydown', function (event) {
      dispatch(event)
    }); // Passing _scope to a callback to ensure it remains the same by execution. Fixes #48
    addEvent(document, 'keyup', clearModifier);

    // reset modifiers to false whenever the window is (re)focused.
    addEvent(window, 'focus', resetModifiers);

    // store previously defined key
    var previousKey = global.key;

    // restore previously defined key and return reference to our key object
    function noConflict() {
      var k = global.key;
      global.key = previousKey;
      return k;
    }

    // set window.key and window.key.set/get/deleteScope, and the default filter
    global.key = assignKey;
    global.key.setScope = setScope;
    global.key.getScope = getScope;
    global.key.deleteScope = deleteScope;
    global.key.filter = filter;
    global.key.isPressed = isPressed;
    global.key.getPressedKeyCodes = getPressedKeyCodes;
    global.key.noConflict = noConflict;
    global.key.unbind = unbindKey;

    if (typeof module !== 'undefined') module.exports = assignKey;

  })(this);
});
define('lib/issue_property_miner',['lib/page_property_miner'], function (ppp) {

  function getIdAndName($link) {
    if ($link.length === 0) {
      return null;
    }

    var href = $link.attr('href'),
      id = href.split('/')[2];

    return {
      id: id,
      name: $link.text()
    }
  }

  var properties;

  return function () {
    if (typeof properties !== 'undefined') {
      return properties;
    }

    if (!ppp.matchPage('issues', 'show')) {
      properties = null;
      return null;
    }

    var h1ChildNodes = $('h1')[0].childNodes,
      projectTitle = h1ChildNodes[h1ChildNodes.length - 1].textContent.replace(' » ', ''),
      rootProjectTitle = $('h1 .root').text(),
      h2Content = $('h2:eq(0)').text(),
      $issueDiv = $('div.issue'),
      title = $issueDiv.find('h3').text(),
      authorLinks = $issueDiv.find('p.author a'),
      issueDivClassList = $issueDiv[0].className.split(/\s+/),
      dueDate = $issueDiv.find('td.due-date').text(),
      startDate = $issueDiv.find('td.start-date').text(),
      assignedTo = getIdAndName($issueDiv.find('td.assigned-to a'));

    var trackerId, statusId, priorityId, priorityType;
    for (var i = 0; i < issueDivClassList.length; i++) {
      var className = issueDivClassList[i];
      if (className.indexOf('tracker-') === 0) {
        trackerId = className.replace('tracker-', '');
      } else if (className.indexOf('status-') === 0) {
        statusId = className.replace('status-', '');
      } else if (className.indexOf('priority-') === 0) {
        var after = className.replace('priority-', '');
        if (/\d/.test(after)) {
          priorityId = after;
        } else {
          priorityType = after;
        }
      }
    }

    return properties = {
      id: h2Content.substr(h2Content.indexOf('#') + 1),
      title: title,

      projectName: ppp.getProjectName(),
      projectTitle: projectTitle,

      topProjectName: ppp.getTopProjectName(),
      topProjectTitle: rootProjectTitle,

      createdBy: getIdAndName($(authorLinks[0])),
      assignedTo: assignedTo,

      isCreatedByMe: $issueDiv.hasClass('created-by-me'),
      isAssignedToMe: $issueDiv.hasClass('assigned-to-me'),
      isOverDueDate: $issueDiv.hasClass('overdue'),

      trackerId: trackerId,
      statusId: statusId,
      priority: {
        id: priorityId,
        type: priorityType
      },

      addedAt: authorLinks[1].title,
      actualizedAt: authorLinks[2] ? authorLinks[2].title : null,
      startDate: startDate,
      dueDate: dueDate
    };
  }
});
define('templates',['vendor/handlebars.runtime'], function(Handlebars) {
  Handlebars = Handlebars["default"];  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['absences'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "    <h4 style=\"margin: 10px 0 0\">"
    + this.escapeExpression((helpers.monthFromDate || (depth0 && depth0.monthFromDate) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.month : depth0),{"name":"monthFromDate","hash":{},"data":data}))
    + "</h4>\n    <ul>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.persons : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "            <li style=\"margin: 0 0;\"><b>"
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</b>:\n\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.absences : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n            </li>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1;

  return "                    "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.actual : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n\n"
    + ((stack1 = (helpers.is || (depth0 && depth0.is) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.from : depth0),(depth0 != null ? depth0.to : depth0),{"name":"is","hash":{},"fn":this.program(6, data, 0),"inverse":this.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "\n                    "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.actual : depth0),{"name":"if","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.type : depth0),{"name":"if","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(depth0,(data && data.last),{"name":"unless","hash":{},"fn":this.program(21, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"4":function(depth0,helpers,partials,data) {
    return "<span style=\"color:red\">";
},"6":function(depth0,helpers,partials,data) {
    return "                        "
    + this.escapeExpression((helpers.dayFromDate || (depth0 && depth0.dayFromDate) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.from : depth0),{"name":"dayFromDate","hash":{},"data":data}))
    + ".\n";
},"8":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "                        "
    + alias2((helpers.dayFromDate || (depth0 && depth0.dayFromDate) || alias1).call(depth0,(depth0 != null ? depth0.from : depth0),{"name":"dayFromDate","hash":{},"data":data}))
    + ".–"
    + alias2((helpers.dayFromDate || (depth0 && depth0.dayFromDate) || alias1).call(depth0,(depth0 != null ? depth0.to : depth0),{"name":"dayFromDate","hash":{},"data":data}))
    + ".\n";
},"10":function(depth0,helpers,partials,data) {
    return "</span>";
},"12":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.is || (depth0 && depth0.is) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.type : depth0),"-",{"name":"is","hash":{},"fn":this.program(13, data, 0),"inverse":this.program(15, data, 0),"data":data})) != null ? stack1 : "");
},"13":function(depth0,helpers,partials,data) {
    return "";
},"15":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.is || (depth0 && depth0.is) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.type : depth0),"/",{"name":"is","hash":{},"fn":this.program(13, data, 0),"inverse":this.program(16, data, 0),"data":data})) != null ? stack1 : "");
},"16":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.is || (depth0 && depth0.is) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.type : depth0),"?",{"name":"is","hash":{},"fn":this.program(17, data, 0),"inverse":this.program(19, data, 0),"data":data})) != null ? stack1 : "");
},"17":function(depth0,helpers,partials,data) {
    return "("
    + this.escapeExpression((helpers._ || (depth0 && depth0._) || helpers.helperMissing).call(depth0,"maybe",{"name":"_","hash":{},"data":data}))
    + ")";
},"19":function(depth0,helpers,partials,data) {
    return "("
    + this.escapeExpression((helpers.trim || (depth0 && depth0.trim) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.type : depth0),{"name":"trim","hash":{},"data":data}))
    + ")";
},"21":function(depth0,helpers,partials,data) {
    return ", ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<h3 style=\"margin-top: 30px\">"
    + alias2((helpers._ || (depth0 && depth0._) || alias1).call(depth0,"Planned absences",{"name":"_","hash":{},"data":data}))
    + " (<a href=\"#\" class=\"refresh\">"
    + alias2((helpers._ || (depth0 && depth0._) || alias1).call(depth0,"refresh",{"name":"_","hash":{},"data":data}))
    + "</a>)</h3>\n\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.months : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n<p><a href=\""
    + alias2(((helper = (helper = helpers.detailsUri || (depth0 != null ? depth0.detailsUri : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"detailsUri","hash":{},"data":data}) : helper)))
    + "\">"
    + alias2((helpers._ || (depth0 && depth0._) || alias1).call(depth0,"Show details",{"name":"_","hash":{},"data":data}))
    + "</a></p>";
},"useData":true});
templates['issue_tree_header'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<thead>\n    <tr>\n        <th>"
    + alias2((helpers._ || (depth0 && depth0._) || alias1).call(depth0,"Subject",{"name":"_","hash":{},"data":data}))
    + "</th>\n        <th>"
    + alias2((helpers._ || (depth0 && depth0._) || alias1).call(depth0,"Status",{"name":"_","hash":{},"data":data}))
    + "</th>\n        <th>"
    + alias2((helpers._ || (depth0 && depth0._) || alias1).call(depth0,"Assignee",{"name":"_","hash":{},"data":data}))
    + "</th>\n        <th>"
    + alias2((helpers._ || (depth0 && depth0._) || alias1).call(depth0,"Done",{"name":"_","hash":{},"data":data}))
    + "</th>\n    </tr>\n</thead>";
},"useData":true});
templates['issues'] = template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<table class=\"list issues\">\n    <thead>\n    <tr>\n        <th>#</th>\n        "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.withProject : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n        "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.withAssigned : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n        <th>"
    + alias2((helpers._ || (depth0 && depth0._) || alias1).call(depth0,"Status",{"name":"_","hash":{},"data":data}))
    + "</th>\n        <th>"
    + alias2((helpers._ || (depth0 && depth0._) || alias1).call(depth0,"Subject",{"name":"_","hash":{},"data":data}))
    + "</th>\n        <th>"
    + alias2((helpers._ || (depth0 && depth0._) || alias1).call(depth0,"Updated on",{"name":"_","hash":{},"data":data}))
    + "</th>\n        <th>"
    + alias2((helpers._ || (depth0 && depth0._) || alias1).call(depth0,"Due date",{"name":"_","hash":{},"data":data}))
    + "</th>\n    </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.issues : depth0),{"name":"each","hash":{},"fn":this.program(6, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>\n";
},"2":function(depth0,helpers,partials,data) {
    return "<th>"
    + this.escapeExpression((helpers._ || (depth0 && depth0._) || helpers.helperMissing).call(depth0,"Project",{"name":"_","hash":{},"data":data}))
    + "</th>";
},"4":function(depth0,helpers,partials,data) {
    return "<th>"
    + this.escapeExpression((helpers._ || (depth0 && depth0._) || helpers.helperMissing).call(depth0,"Assigned to",{"name":"_","hash":{},"data":data}))
    + "</th>";
},"6":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.lambda, alias3=this.escapeExpression, alias4="function";

  return "        <tr class=\"issue "
    + ((stack1 = (helpers.isEven || (depth0 && depth0.isEven) || alias1).call(depth0,(data && data.index),{"name":"isEven","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.program(9, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + " priority-"
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.priority : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n            <td class=\"id\"><a href=\"/issues/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias4 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias4 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "</a></td>\n            "
    + ((stack1 = helpers['if'].call(depth0,(depths[1] != null ? depths[1].withProject : depths[1]),{"name":"if","hash":{},"fn":this.program(11, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = helpers['if'].call(depth0,(depths[1] != null ? depths[1].withAssigned : depths[1]),{"name":"if","hash":{},"fn":this.program(13, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n            <td class=\"status\" title=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.status : depth0)) != null ? stack1.name : stack1), depth0))
    + "\">"
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.status : depth0)) != null ? stack1.name : stack1), depth0))
    + "</td>\n            <td class=\"subject\"><a href=\"/issues/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias4 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.subject || (depth0 != null ? depth0.subject : depth0)) != null ? helper : alias1),(typeof helper === alias4 ? helper.call(depth0,{"name":"subject","hash":{},"data":data}) : helper)))
    + "</a></td>\n            <td class=\"updated_on\">"
    + alias3((helpers.redmineTime || (depth0 && depth0.redmineTime) || alias1).call(depth0,(depth0 != null ? depth0.updated_on : depth0),{"name":"redmineTime","hash":{},"data":data}))
    + "</td>\n            <td class=\"due_date\">"
    + alias3(((helper = (helper = helpers.due_date || (depth0 != null ? depth0.due_date : depth0)) != null ? helper : alias1),(typeof helper === alias4 ? helper.call(depth0,{"name":"due_date","hash":{},"data":data}) : helper)))
    + "</td>\n        </tr>\n";
},"7":function(depth0,helpers,partials,data) {
    return "even";
},"9":function(depth0,helpers,partials,data) {
    return "odd";
},"11":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<td class=\"project\"><a href=\"/projects/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.project : depth0)) != null ? stack1.name : stack1), depth0))
    + "</a></td>";
},"13":function(depth0,helpers,partials,data) {
    var stack1;

  return "<td class=\"assigned_to\">"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.assigned_to : depth0)) != null ? stack1.name : stack1), depth0))
    + "</td>";
},"15":function(depth0,helpers,partials,data) {
    return this.escapeExpression((helpers._ || (depth0 && depth0._) || helpers.helperMissing).call(depth0,"No issues",{"name":"_","hash":{},"data":data}))
    + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isNotEmpty || (depth0 && depth0.isNotEmpty) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.issues : depth0),{"name":"isNotEmpty","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.program(15, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});
templates['issues_project'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"box issues\" id=\"my-issues\">\n    <h3>"
    + alias2((helpers._ || (depth0 && depth0._) || alias1).call(depth0,"My issues",{"name":"_","hash":{},"data":data}))
    + " <span class=\"count\"></span></h3>\n    <a href=\"#\" class=\"select-random\" style=\"display: none;\">"
    + alias2((helpers._ || (depth0 && depth0._) || alias1).call(depth0,"select random",{"name":"_","hash":{},"data":data}))
    + "</a>\n    <div class=\"content\"></div>\n</div>\n\n<div class=\"box issues\"  id=\"due-date-issues\">\n    <h3>"
    + alias2((helpers._ || (depth0 && depth0._) || alias1).call(depth0,"Overdue issues",{"name":"_","hash":{},"data":data}))
    + "</h3>\n    <div class=\"content\"></div>\n</div>";
},"useData":true});
templates['issues_welcome'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"box issues\" id=\"my-issues\">\n    <h3>"
    + alias2((helpers._ || (depth0 && depth0._) || alias1).call(depth0,"My issues",{"name":"_","hash":{},"data":data}))
    + " <span class=\"count\"></span></h3>\n    <a href=\"#\" class=\"select-random\" style=\"display: none;\">"
    + alias2((helpers._ || (depth0 && depth0._) || alias1).call(depth0,"select random",{"name":"_","hash":{},"data":data}))
    + "</a>\n    <div class=\"content\"></div>\n    <a href=\"/issues?assigned_to_id=me&amp;set_filter=1&amp;sort=priority%3Adesc%2Cupdated_on%3Adesc\">"
    + alias2((helpers._ || (depth0 && depth0._) || alias1).call(depth0,"show all",{"name":"_","hash":{},"data":data}))
    + "</a>\n</div>";
},"useData":true});
templates['last_issue'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return "<h3>"
    + alias2((helpers._ || (depth0 && depth0._) || alias1).call(depth0,"Last viewed issue",{"name":"_","hash":{},"data":data}))
    + "</h3>\n<p><a href=\"/issues/"
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">#"
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " – "
    + alias2(((helper = (helper = helpers.projectTitle || (depth0 != null ? depth0.projectTitle : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"projectTitle","hash":{},"data":data}) : helper)))
    + ": "
    + alias2(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a></p>";
},"useData":true});
templates['not_available_user'] = template({"1":function(depth0,helpers,partials,data) {
    return this.escapeExpression((helpers._ || (depth0 && depth0._) || helpers.helperMissing).call(depth0,"Not available %0",(depth0 != null ? depth0.from : depth0),{"name":"_","hash":{},"data":data}));
},"3":function(depth0,helpers,partials,data) {
    return this.escapeExpression((helpers._ || (depth0 && depth0._) || helpers.helperMissing).call(depth0,"Not available from %0 to %1",(depth0 != null ? depth0.from : depth0),(depth0 != null ? depth0.to : depth0),{"name":"_","hash":{},"data":data}));
},"5":function(depth0,helpers,partials,data) {
    var helper;

  return ": "
    + this.escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)));
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return " <span class=\"glyphicon glyphicon-warning-sign\" style=\"color: #d9534f;padding-right:3px;\" title=\""
    + ((stack1 = (helpers.is || (depth0 && depth0.is) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.from : depth0),(depth0 != null ? depth0.to : depth0),{"name":"is","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.type : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\"></span>";
},"useData":true});
templates['open_timey'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"enterTimey\" style=\"float: right\">\n    <a href=\"https://timey.proofreason.com\" target=\"_blank\">"
    + this.escapeExpression((helpers._ || (depth0 && depth0._) || helpers.helperMissing).call(depth0,"Open Timey",{"name":"_","hash":{},"data":data}))
    + "</a>\n</div>";
},"useData":true});
templates['relations_header'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<thead>\n<tr>\n    <th>"
    + alias2((helpers._ || (depth0 && depth0._) || alias1).call(depth0,"Subject",{"name":"_","hash":{},"data":data}))
    + "</th>\n    <th>"
    + alias2((helpers._ || (depth0 && depth0._) || alias1).call(depth0,"Status",{"name":"_","hash":{},"data":data}))
    + "</th>\n    <th>"
    + alias2((helpers._ || (depth0 && depth0._) || alias1).call(depth0,"Assignee",{"name":"_","hash":{},"data":data}))
    + "</th>\n    <th>"
    + alias2((helpers._ || (depth0 && depth0._) || alias1).call(depth0,"Due date",{"name":"_","hash":{},"data":data}))
    + "</th>\n    <th></th>\n</tr>\n</thead>";
},"useData":true});
templates['timey_loger'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"timeyLoggerWrapper\">\n    <span class=\"close\"><i class=\"glyphicon glypicon-remove\"></i></span>\n    <iframe style=\"border:0; width: 100%; height: 220px\" src=\""
    + this.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\"></iframe>\n</div>";
},"useData":true});
return templates;
});


define('module/last_issue',[
  'lib/page_property_miner',
  'lib/issue_property_miner',
  'lib/local_storage',
  'templates'
], function (ppp, ipm, ls, templates) {
  return {
    init: function () {
      var properties = ipm();
      if (properties) {
        var lastIssueJson = JSON.stringify({
          id: properties.id,
          projectTitle: properties.projectTitle,
          title: properties.title
        });

        ls.set('last_issue', lastIssueJson, 168);
        ls.set('last_issue[' + properties.projectName + ']', lastIssueJson, 168)
      }

      var lastIssue, template;

      if (ppp.matchPage('welcome', 'index')) {
        lastIssue = ls.get('last_issue');
        if (lastIssue) {
          template = templates['last_issue'](JSON.parse(lastIssue));
          $('#content .splitcontentright').prepend(template);
        }

      } else if (ppp.matchPage('projects', 'show')) {
        lastIssue = ls.get('last_issue[' + ppp.getProjectName() +']');
        if (lastIssue) {
          template = templates['last_issue'](JSON.parse(lastIssue));
          $('#content .splitcontentright').prepend(template);
        }
      }
    },

    getLastIssue: function () {
      var lastIssue,
        projectName = ppp.getProjectName();

      if (projectName) {
        lastIssue = ls.get('last_issue[' + projectName +']');
        if (lastIssue) {
          return lastIssue;
        }

      } else {
        lastIssue = ls.get('last_issue');
        if (lastIssue) {
          return lastIssue;
        }
      }
    },
  }
});
define('lib/textarea_insert_at_cursor',[],function() {
  return function (myField, toAdd) {
    // IE support
    if (document.selection) {
      myField.focus();
      var sel = document.selection.createRange();
      sel.text = toAdd;

    } else if (myField.selectionStart || myField.selectionStart == '0') {
      var startPos = myField.selectionStart,
        endPos = myField.selectionEnd,
        value = myField.value;

      if (startPos > 1 && value.substring(startPos - 1, startPos) != "\n") {
        toAdd = "\n" + toAdd;
      }

      myField.value = value.substring(0, startPos)
        + toAdd
        + value.substring(endPos, value.length);

      myField.selectionStart = myField.selectionEnd = startPos + toAdd.length;

    } else {
      myField.value += toAdd;
    }
  }
});
define('module/key_shortcuts',[
  'lib/page_property_miner',
  'vendor/keymaster',
  'lib/local_storage',
  'module/last_issue',
  'lib/textarea_insert_at_cursor'
], function (ppp, key, ls, lastIssueModule, insertAtCursor) {
  return {
    init: function () {
      var $q = $('#q');

      if (!ls.get('enabled:keyShortcuts')) {
        if ($(window).width() > 640 && !ppp.matchPage('issues', 'show') && !this.isTouchDevice()) {
          $q.focus();
        }

        return;
      }

      var $mainMenu = $('#main-menu');

      function goTo(href) {
        window.location.href = href;
      }

      function link($element) {
        var href = $element.attr('href');
        if (href) {
          goTo(href);
          return false;
        }
        return true;
      }

      function linkFromMainMenu(type) {
        return link($mainMenu.find('.' + type));
      }

      $q.keypress(function (e) {
        if (e.keyCode === 27) { // esc
          $(this).blur();
          return false;
        }
      });

      /*
      Go
       */
      key('g', function() {
        key.setScope('go');

        setTimeout(function () {
          key.setScope('all');
        }, 1000);

        return false;
      });

      key('p', 'go', function () {
        goTo('/projects');
        return false;
      });

      key('o', 'go', function() {
        return linkFromMainMenu('overview');
      });

      key('i', 'go', function() {
        return linkFromMainMenu('issues');
      });

      key('w', 'go', function() {
        return linkFromMainMenu('wiki');
      });

      key('n', 'go', function() {
        return linkFromMainMenu('new-issue');
      });

      key('a', 'go', function() {
        return linkFromMainMenu('activity');
      });

      key('l', 'go', function () {
        var lastIssue = lastIssueModule.getLastIssue();
        if (lastIssue) {
          goTo('/issues/' + lastIssue.id);
          return false;
        }
        return true;
      });

      // Focus search input
      key('s', function () {
        $q.focus();
        return false;
      });

      // Focus project select
      key('p', function () {
        $('#s2id_project_quick_jump_box').select2('open');
        return false;
      });

      if (ppp.matchPage('issues', 'show')) {
        // Show edit issue form
        key('e', function () {
          $('.updateButton:eq(0)').click();
          return false;
        });

        // Hide update form on escape
        key('esc', function () {
          $('#update').hide();
          return false;
        });

        var $issueNotes = $('#issue_notes');
        $issueNotes.keypress(function (e) {
          if (e.keyCode === 27) { // esc
            $('#update').hide();
            $issueNotes.blur();
            return false;
          }
        });

        // Previous issue
        key('left', function () {
          var $first = $('#content .next-prev-links *').slice(0, 1);
          if ($first.is('a')) {
            return link($first);
          }
          return false;
        });

        // Next issue
        key('right', function () {
          var $last = $('#content .next-prev-links *').slice(-1);
          if ($last.is('a')) {
            return link($last);
          }
          return false;
        });

        // Reply
        key('r', function () {
          var text = window.getSelection().toString();
          if (text) {
            text = text.split("\n").join("\n> ");

            $('.updateButton:eq(0)').click(); // open update form
            insertAtCursor(document.getElementById('issue_notes'), '> ' + text + "\n\n");
            return false;
          }
        });

      } else if (ppp.matchPage('issues', 'index')) {
        /*key('esc', function() {
         var $link = $('.buttons .icon-reload');
         if ($link.length > 0) {
         window.location.href = $link.attr('href');
         return false;
         }
         });*/

        key('left', function () {
          return link($('ul.pagination .prev'));
        });

        key('right', function () {
          return link($('ul.pagination .next'));
        });
      }
    },

    isTouchDevice: function () {
      return ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;
    }
  }
});


define('module/timey_integration',['lib/page_property_miner', 'templates'], function (ppp, templates) {
  return {

    init: function () {
      $(templates['open_timey']()).insertBefore('#loggedas');

      if (ppp.matchPage('timelog', 'new')) {
        this.insertTimeyLogger();

      } else if (ppp.matchPage('timelog', 'index')) {
        $('#context-menu').remove();
        $('td.buttons').hide();
      }

      var self = this;
      $('#main>#content>.contextual .icon-time-add, .timeySwitch').click(function () {
        self.insertTimeyLogger();
        return false;
      });
    },

    insertTimeyLogger: function () {
      var self = this;
      ppp.getProjectId(function (projectId) {
        var issueId = ppp.getIssueId();

        var url = 'https://timey.proofreason.com/';
        if (projectId > 0) {
          url = url + '?redmine[project_id]=' + projectId;
          if (issueId > 0) url = url + '&redmine[issue_id]=' + issueId;
        }
        url = url + '#/logs/new';

        var timeyLogger = templates['timey_loger']({
          url: url
        });

        if (ppp.matchPage('timelog', 'new')) {
          $('#new_time_entry').after(timeyLogger).hide();

        } else if (ppp.matchPage('issues', 'show')) {
          $('body').append(timeyLogger);
          $('.timeyLoggerWrapper .close').click(function () {
            self.removeTimeyLogger();
          });
        }
      });
    },

    removeTimeyLogger: function () {
      $('.timeyLoggerWrapper').remove();
    }
  }
});


define('module/related_issues_header',['lib/page_property_miner', 'templates'], function (ppp, templates) {
  return {
    init: function () {
      if (!ppp.matchPage('issues', 'show')) {
        return;
      }

      var $issue = $('#content .issue'),
        $relations = $issue.find('#relations'),
        $issueTree = $issue.find('#issue_tree table.list.issues'),
        $issueRelations = $relations.find('table.list.issues');

      function update() {
        if ($issueTree.length && $issueTree.find('thead').length === 0) {
          $issueTree.prepend(templates['issue_tree_header']());
        }

        if ($issueRelations.length && $issueRelations.find('thead').length === 0) {
          $issueRelations.prepend(templates['relations_header']());
        }
      }

      update();

      $relations.on('ajax:success', '#new-relation-form', function () {
        update();
      });

      $relations.on('change', '#relation_issue_to_id', function () {
        update();
      });
    }
  }
});
define('lib/replace_issue_form_proxy',[],function() {
  var proxied = replaceIssueFormWith,
    callbacks = [];

  replaceIssueFormWith = function () {
    console.log('replaceIssueFormWith proxy called');
    var output = proxied.apply(this, arguments);
    for (var i = 0; i < callbacks.length; i++) {
      callbacks[i]();
    }
    return output;
  };

  return function (callback) {
    callbacks.push(callback);
  }
});


define('module/absences',[
  'lib/page_property_miner',
  'lib/local_storage',
  'templates',
  'vendor/moment',
  'lib/replace_issue_form_proxy'
], function (ppp, ls, templates, moment, proxy) {
  return {
    absencesInfoUrl: null,
    htmlOutput: null,

    czechMonths: {
      Leden: 1,
      Únor: 2,
      Březen: 3,
      Duben: 4,
      Květen: 5,
      Červen: 6,
      Červenec: 7,
      Srpen: 8,
      Září: 9,
      Říjen: 10,
      Listopad: 11,
      Prosinec: 12
    },

    init: function () {
      var self = this;
      this.absencesInfoUrl = window.location.hostname == 'localhost' ?
        'holidays.html' : // test
        '/projects/pm/wiki/Holidays'; // production

      if (ppp.matchPage('welcome', 'index')) {
        $('div.projects.box').after('<div id="plannedAbsences"></div>');

      } else if (ppp.matchPage('issues', 'index')) {
        $('#sidebar').append('<div id="plannedAbsences"></div>');

      } else if (ppp.matchPage('issues', 'show') || ppp.matchPage('issues', 'new')) {
        this.loadWithCache(function(absences) {
          self.markAbsencedUsers(absences);
        });
      }

      if ($('#plannedAbsences').length) {
        this.loadWithCache(function(absences) {
          var html = self.createHtml(absences);
          self.putHtmlIntoDocument(html);
        });
      }
    },

    fixDate: function (date) {
      var parts = date.split('-');
      if (parts[1].length !== 2 && parseInt(parts[1]) < 10) {
        parts[1] = '0' + parts[1];
      }
      if (parts[2].length !== 2 && parseInt(parts[2]) < 10) {
        parts[2] = '0' + parts[2];
      }

      return parts.join('-')
    },

    removeOldAndMarkActual: function (data) {
      var filtered = {};
      var now = new Date();
      var startOfDay = this.fixDate(now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate());

      for (var name in data) {
        for (var i = 0; i < data[name].length; i++) {
          var entry = data[name][i],
            from = this.fixDate(entry.from),
            to = this.fixDate(entry.to);

          // Entry is old
          if (to < startOfDay) {
            continue;
          }

          entry.actual = (from <= startOfDay);

          if (!(name in filtered)) {
            filtered[name] = [];
          }

          filtered[name].push(entry);
        }
      }

      return filtered;
    },

    markAbsencedUsers: function(data) {
      var self = this;
      data = this.removeOldAndMarkActual(data);

      function findCurrentAbsence(name) {
        if (name in data) {
          for (var i = 0; i < data[name].length; i++) {
            var absence = data[name][i];
            if (absence.actual) {
              return absence;
            }
          }
        }

        return false;
      }

      function markUserInUpdateForm() {
        $('#issue_assigned_to_id option').each(function() {
          var $option = $(this),
            name = $option.text(),
            absence = findCurrentAbsence(name);

          if (absence) {
            $option.text($option.text() + ' ⚠');
          }
        });
      }

      markUserInUpdateForm();
      proxy(markUserInUpdateForm);

      $('.user').each(function() {
        var $user = $(this),
          name = $user.text(),
          absence = findCurrentAbsence(name);

        if (absence) {
          $user.after(templates['not_available_user']({
            from: moment(self.fixDate(absence.from)).format('D. MMMM'),
            to: moment(self.fixDate(absence.to)).format('D. MMMM'),
            type: absence.type && absence.type !== '-' ? absence.type : null
          }));
        }
      });

    },

    createHtml: function (data) {
      data = this.removeOldAndMarkActual(data);

      // Group by month
      var grouped = {};
      for (var name in data) {
        for (var i = 0; i < data[name].length; i++) {
          var parts = data[name][i].from.split('-'),
            month = parts[0] + '-' + parts[1];

          if (!(month in grouped)) {
            grouped[month] = {};
          }
          if (!(name in grouped[month])) {
            grouped[month][name] = [];
          }

          grouped[month][name].push(data[name][i]);
        }
      }

      var months = [];
      for (month in grouped) {
        var object = {
          month: month,
          persons: []
        };

        for (var person in grouped[month]) {
          object.persons.push({
            name: person,
            absences: grouped[month][person]
          });
        }

        object.persons.sort(function (a, b) {
          return a.name.split(' ')[1].localeCompare(b.name.split(' ')[1]);
        });

        months.push(object);
      }

      months.sort(function (a, b) {
         if (a.month > b.month) {
           return 1;
         } else if (a.month < b.month) {
           return -1;
         } else {
           return 0;
         }
      });

      return months;
    },

    putHtmlIntoDocument: function (months) {
      $('#plannedAbsences').html(templates['absences']({
        detailsUri: this.absencesInfoUrl,
        months: months
      }));

      var self = this;
      $('#plannedAbsences .refresh').click(function() {
        $('#ajax-indicator').show();
        self.load(function(absences) {
          $('#ajax-indicator').hide();
          var html = self.createHtml(absences);
          self.putHtmlIntoDocument(html);
        });
        return false;
      });
    },

    getAbsencesForTable: function (table, data) {
      var trs = table.querySelectorAll('tr'),
        month = trs[0].querySelector('td strong').textContent,
        date = month.split(' ')[1] + '-' + this.czechMonths[month.split(' ')[0]] + '-';

      for (var i = 2; i < trs.length; i++) {
        var tds = trs[i].querySelectorAll('td'),
          name = tds[0].textContent,
          person;

        if (name in data) {
          person = data[name];
        } else {
          data[name] = [];
          person = data[name];
        }

        var day = 1;
        for (var j = 1; j < tds.length; j++) {
          var td = tds[j],
            tdContent = td.textContent,
            absence;

          if (tdContent !== (day + '.')) {
            if (absence && absence.type !== tdContent) {
              absence.to = this.fixDate(date + (day - 1));
              person.push(absence);
              absence = null;
            }

            if (!absence) {
              absence = {
                from: this.fixDate(date + day),
                to: -1,
                type: tdContent
              };
            }
          } else if (absence) {
            absence.to = this.fixDate(date + (day - 1));
            person.push(absence);
            absence = null;
          }

          if (td.colSpan) {
            day += td.colSpan;
          } else {
            day++;
          }
        }

        if (absence) {
          absence.to = this.fixDate(date + (day - 1));
          person.push(absence);
          absence = null;
        }
      }
    },

    loadAbsencesData: function (callback) {
      var self = this;

      $.ajax({
        url: this.absencesInfoUrl,
        global: false,
        cache: false
      }).success(function (data) {
        var absences = {};

        var tmp = document.createElement('div');
        tmp.innerHTML = data;

        var tables = tmp.querySelectorAll('table');
        for (var i = 0; i < tables.length; i++) {
          self.getAbsencesForTable(tables[i], absences);
        }

        callback(absences);
      });
    },

    loadWithCache: function (callback) {
      if (ls.get('absencesObject')) {
        var absences = JSON.parse(ls.get('absencesObject'));
        callback(absences);
      } else {
        this.load(callback);
      }
    },

    load: function (callback) {
      this.loadAbsencesData(function (absences) {
        ls.set('absencesObject', JSON.stringify(absences), 24);
        callback(absences);
      });
    }
  }
});


define('module/assign_select_author',[
  'lib/page_property_miner',
  'lib/issue_property_miner',
  'lib/translate',
  'lib/replace_issue_form_proxy'
], function (ppp, ipm, _, proxy) {
  return {
    init: function () {
      if (!ppp.matchPage('issues', 'show')) {
        return;
      }

      function addText() {
        $('#issue_assigned_to_id').find('option[value="' + ipm().createdBy.id +'"]').each(function() {
          $(this).text($(this).text() + ' (' +  _('author') + ')');
        });
      }

      if (!ipm().isCreatedByMe) {
        addText();
        proxy(addText);
      }
    }
  }
});


define('module/datepicker_focus',[],function () {
  $('body').on('focus', '.hasDatepicker', function() {
    $(this).datepicker('show');
  });
});


define('module/cmd_enter_form_submit',[],function () {
  return {
    init: function () {
      $(document).on('keydown', 'textarea#issue_notes, textarea#issue_description, #issue-form input', function (event) {
        if (event.keyCode === 13 && (event.metaKey || event.ctrlKey)) {
          // Disable showing warning message
          window.onbeforeunload = null;

          $(this).parents('form').submit();
          event.preventDefault();
        }
      });
    }
  }
});


define('module/better_header',[],function () {
  return {
    init: function () {
      // header links
      $('#header h1').prepend('<a class="go-to-my-issues" href="https://redmine.proofreason.com/issues?query_id=135">My issues</a><a class="go-to-projects" href="/projects">Projects</a>');
      //standard link for my issues: /issues?assigned_to_id=me&set_filter=1&sort=priority%3Adesc%2Cupdated_on%3Adesc
    }
  }
});


define('module/alternate_cell_format',['lib/page_property_miner', 'lib/local_storage', 'vendor/moment'], function (ppp, ls, moment) {

  function lsKey(cellSelector) {
    return 'alternateCellFormat:' + cellSelector.split(' ').join('').split('.').join('_');
  }

  return {
    init: function () {
      this.tools = ProofReasonRedmineTheme.tools;
      this.convertOldFormat();

      // Add class to issue tree table
      $('#issue_tree').find('table.issues tr').each(function () {
        $(this).find('td:eq(2)').addClass('status');
      });

      this.setFormatUp('table.issues .due_date', {'verbalDate': this.format.verbalDate});
      this.setFormatUp('table.issues .updated_on', {'relativeTime': this.format.relativeTime});
      this.setFormatUp('table.issues td.status', {
        'newHighlighted': this.format.newIssuesHighlighted,
        'statusIcon': this.format.statusIcon
      });
      this.setFormatUp('table.issues .tracker', {'shortIssueType': this.format.shortIssueType});

      // Short titles
      /*
       TODO: Disabled for now
       $('table.issues th[title="Sort by \"Priority\""] a').html('P');
       $('table.issues th[title="Sort by \"Tracker\""] a').html('Type');
       $('table.issues th[title="Sort by \"Estimated time\""] a').html('Estimate');*/
    },

    setFormatUp: function (cellSelector, alternateFormats) {
      this.prepareCells(cellSelector, alternateFormats);

      if (ls.get(lsKey(cellSelector))) {
        this.showAlternateFormat(cellSelector, ls.get(lsKey(cellSelector)));
      }
    },

    prepareCells: function (cells, alternateFormats) {
      $(cells).each(function () {
        var $this = $(this),
          text = $this.text();

        if ($this.data('currentlyDisplayed')) {
          return;
        }

        $this.data('format.' + 'originalFormat', text);
        $this.attr('title', text);
        $this.data('currentlyDisplayed', 'originalFormat');

        for (var format in alternateFormats) {
          var procedure = alternateFormats[format];
          $this.data('format.' + format, procedure(text));
        }
      });

      var self = this;
      $(cells).click(function () {
        self.toggleFormats(cells);
      });
    },

    showAlternateFormat: function (cells, format) {
      $(cells).each(function () {
        $(this).html($(this).data('format.' + format));
        $(this).data('currentlyDisplayed', format);
      });
    },

    toggleFormats: function (cells) {
      var cell = $(cells).first();

      var data = cell.data();
      var variants = [];
      for (var param in data) {
        if (param.indexOf('format.') === 0) variants.push(param.substring(7));
      }

      var currentFormat = $.inArray(cell.data('currentlyDisplayed'), variants);
      var nextFormat = (currentFormat < variants.length - 1) ? currentFormat + 1 : 0;

      ls.set(lsKey(cells), variants[nextFormat]);
      this.showAlternateFormat(cells, variants[nextFormat]);
    },

    convertOldFormat: function() {
      var types = ['table.issues .due_date', 'table.issues .updated_on', 'table.issues td.status', 'table.issues .tracker'];
      for (var i in types) {
        var key = types[i];
        var value = window.localStorage.getItem('theme.' + key);
        if (value) {
          ls.set(lsKey(key), value);
          window.localStorage.removeItem('theme.' + key);
        }
      }
    },

    format: {
      statusIcon: function (value) {
        // table cell alternate content creators
        var statusReplacements = {
          'Nový / New': ['inbox'],
          'Přiřazený / Assigned': ['arrow-right'],
          'Vyřešený / Solved': ['ok'],
          'Feedback': ['comment'],
          'Čeká se / Waiting': ['refresh'],
          'Odložený / Postponed': ['stop'],
          'Čeká na klienta': ['eye-open'],
          'Uzavřený / Closed': ['home'],
          'Odmítnutý / Rejected': ['ban-circle'],
          'Needs explanation': ['question-sign'],
          'Needs design': ['picture'],
          'Refused': ['ban-circle'],
          'Needs estimation': ['time'],
          'Needs estimation approval': ['question-sign'],
          'Needs implementation': ['arrow-right'],
          'Needs code review': ['th-list'],
          'Needs deployment': ['upload'],
          'Needs review': ['eye-open'],
          'Closed': ['home']
        };

        // green = work; blue = talk; red = new/accept; gray = outside/no action
        var statusReplacementColors = {
          'Nový / New': ['red'],
          'Přiřazený / Assigned': ['green'],
          'Vyřešený / Solved': ['blue'],
          'Feedback': ['blue'],
          'Needs explanation': ['blue'],
          'Needs design': ['green'],
          'Refused': ['red'],
          'Needs estimation': ['blue'],
          'Needs implementation': ['green'],
          'Needs code review': ['blue'],
          'Needs deployment': ['green']
        };

        if (!(value in statusReplacements)) {
          return value;
        }

        var replacementCell = '';

        for (var i = 0; i < statusReplacements[value].length; i++) {
          var icon = statusReplacements[value][i];
          var color = statusReplacementColors[value] ? statusReplacementColors[value][i] : null;
          var colorReplacement = color ? 'style="background-color: ' + color + '"' : '';
          replacementCell += '<span ' + colorReplacement + ' class="glyphicon glyphicon-' + icon + '"></span>';
        }

        return replacementCell;
      },

      newIssuesHighlighted: function (value) {
        if (value == 'Nový / New') {
          return '<b style="color: red">' + value + '</b>';
        } else return value;
      },

      verbalDate: function (value) {
        var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        if (!value) return '';
        else {
          var date = moment(value).toDate();
          var daysCount = daysFromToday(date);
          var textualDueDate = '';

          switch (daysCount) {
            case 0:
              textualDueDate = 'Yesterday';
              break;
            case 1:
              textualDueDate = date.toRelativeTime(new Date(), 5000, true);
              break;
            case 2:
              textualDueDate = 'Tomorrow';
              break;
            case 3:
            case 4:
            case 5:
              textualDueDate = weekday[date.getDay()].substring(0, 3) + ' ' + date.getDate() + '. ' + (date.getMonth() + 1) + '.';
              break;
            default:
              textualDueDate = date.getDate() + '. ' + (date.getMonth() + 1) + '.';
          }

          if (date < new Date()) {
            return '<b style="color: red">' + date.toRelativeTime(new Date(), 5000, true) + '</b>';
          }

          return textualDueDate;
        }
      },

      relativeTime: function (value) {
        if (!value) return '';
        var date = moment(value).toDate();
        return date.toRelativeTime(new Date(), 5000, true);
      },

      shortIssueType: function (value) {
        var icons = {
          request: '<span style="opacity:.4">&fnof;</span>',
          error: '<img src="/themes/prRedmineTheme/stylesheets/img/error.png" width="16" height="16" style="opacity:.4">',
          support: '<span class="glyphicon glyphicon-question-sign" style="opacity:.4"></span>',
          development: '<span class="glyphicon glyphicon-console" style="opacity:.4"></span>'
        };

        var types = {
          'Požadavek': icons['request'],
          'Feature Request': icons['request'],
          'Error': icons['error'],
          'Error (Baufinder)': icons['error'],
          'Podpora': icons['support'],
          'Development': icons['development']
        };

        if (value in types) {
          return types[value];
        } else {
          return value;
        }
      }
    }
  }
});
define('module/issues',[
  'vendor/moment',
  'lib/redmine_api',
  'lib/page_property_miner',
  'templates',
  'lib/local_storage',
  'module/alternate_cell_format'
], function (moment, RedmineApi, ppp, templates, ls, alternateCellFormat) {

  /**
   * Sort issues by due date and updated on
   * @param issues
   */
  function sortIssues(issues) {
    issues.sort(function(a, b) {
      if (!a.due_date && !b.due_date) {
        return moment(b.updated_on).diff(a.updated_on);
      } else if (!a.due_date) {
        return 1;
      } else if (!b.due_date) {
        return -1;
      }

      return moment(a.due_date).diff(b.due_date);
    });
  }

  function myIssues(data, withProject) {
    sortIssues(data.issues);

    var html = templates['issues']({
      issues: data.issues,
      withProject: withProject,
      withAssigned: false,
      count: data.total_count
    });

    var $myIssues = $('#my-issues'),
      $selectRandom = $myIssues.find('.select-random');

    $myIssues.find('.content').html(html);
    $myIssues.find('.count').html(data.total_count);

    if (data.total_count === 0) {
      $selectRandom.hide();
    } else {
      $selectRandom.show();
    }

    $selectRandom.click(function() {
      var issuePosition = Math.floor(Math.random() * data.issues.length),
        issueId = data.issues[issuePosition].id,
        url = '/issues/' + issueId;

      $(this).attr('href', url);
    });

    alternateCellFormat.init();
  }

  var redmineApi = new RedmineApi();

  return {
    init: function() {

      if (!ls.get('enabled:issues_project')) {
        return;
      }

      if (ppp.matchPage('projects', 'show')) {
        this.project();

      } else if (ppp.matchPage('welcome', 'index')) {
        this.welcome();
      }
    },

    project: function () {
        var projectName = ppp.getProjectName();

        $('#content .splitcontentright')
          .prepend(templates['issues_project']())
          .css('width', '70%')
          .css('margin-top', '-30px');

        $('#content .splitcontentleft')
          .css('width', '28%');

        ProofReasonRedmineTheme.BetterSidebar.hideSidebar();

        redmineApi.getIssuesWithCache({
          project_id: projectName,
          assigned_to_id: 'me',
          sort: 'due_date:desc,updated_on:desc',
          limit: 20
        }, function (data) {
          myIssues(data, false);
        });

        redmineApi.getIssuesWithCache({
          project_id: projectName,
          due_date: '<=' + moment().format('YYYY-MM-DD'),
          sort: 'due_date:desc',
          limit: 20
        }, function(data) {
          sortIssues(data.issues);

          var html = templates['issues']({
            issues: data.issues,
            withProject: false,
            withAssigned: true
          });

          $('#due-date-issues .content').html(html);

          alternateCellFormat.init();
        });
    },

    welcome: function() {
      $('#content .splitcontentright')
        .prepend(templates['issues_welcome']())
        .css('width', '60%');

      $('#content .splitcontentleft')
        .css('width', '38%');

      redmineApi.getIssuesWithCache({
        assigned_to_id: ppp.getUserId(),
        sort: 'due_date:desc,updated_on:desc',
        limit: 20
      }, function(data) {
        myIssues(data, true);
      });
    }
  }

});


define('module/localize',['lib/page_property_miner', 'lib/local_storage', 'lib/replace_issue_form_proxy'], function (ppp, ls, proxy) {
  var lang = $('html').attr('lang');

  return {
    init: function () {
      if (!ls.get('enabled:localize')) {
        return;
      }

      var self = this;

      if (ppp.matchPage('issues', 'show')) {
        this.localizeElementContent($('.issue .attributes td.status'));
        this.localizeElementContent($('.issue .attributes td.priority'));

        var localizeForm = function() {
          self.localizeSelect($('#issue_status_id'));
          self.localizeSelect($('#issue_priority_id'));
        };
        localizeForm();
        proxy(localizeForm);
      }
    },

    localizeSelect: function($element) {
      var self = this;
      $element.find('option').each(function () {
        self.localizeElementContent($(this));
      });
    },

    localizeElementContent: function($element) {
      var text = $element.text();
      if (lang === 'cs') {
        text = this.extractCzechVersion(text);
      } else {
        text = this.extractEnglishVersion(text);
      }
      if (text) {
        $element.text(text);
      }
    },

    extractCzechVersion: function(value) {
      var parts = value.split('/');
      if (parts.length === 2) {
        return parts[0].trim();
      }
      return false;
    },

    extractEnglishVersion: function(value) {
      var parts = value.split('/');
      if (parts.length === 2) {
        return parts[1].trim();
      }
      return false;
    }
  }
});


define('module/paste_issue_number',['lib/local_storage'], function (ls) {

  function isIssueId(value) {
    if (value[0] === '#') {
      value = value.substr(1);
    }

    if (parseInt(value) == value) {
      return value;
    }

    return false;
  }

  function goToIssue(issueId) {
    window.location.href = "/issues/" + issueId;
  }

  return {
    init: function () {
      if (!ls.get('enabled:pasteIssueNumber')) {
        return;
      }

      $('#q').on('paste', function(e) {
        var content = e.originalEvent.clipboardData.getData('text'),
          issueId = isIssueId(content);

        if (issueId) {
          goToIssue(issueId);
        }
      });

      document.addEventListener('paste', function(e) {
        if (e.target.nodeName === 'INPUT' || e.target.nodeName === 'TEXTAREA') {
          return;
        }

        if (e.clipboardData.types.indexOf('text/plain') > -1) {
          var content = e.clipboardData.getData('text/plain'),
            issueId = isIssueId(content);

          if (issueId) {
            goToIssue(issueId);
          }
        }
      });
    }
  }
});


define('module/checkbox',['lib/page_property_miner'], function (ppp) {
  return {
    init: function () {
      if (!ppp.matchPage('issues', 'show')) {
        return;
      }

      if (ppp.getTopProjectName() !== 'baufinder') {
        return;
      }

      var checkboxId = 1,
        $description = $('#issue_description'),
        hasDescription = $description.size() > 0,
        $wiki = $('#content').find('.issue .wiki');

      function createInputNode(id, checked) {
        var input = document.createElement('input');
        input.type = 'checkbox';
        input.name = 'todo';
        input.checked = checked;
        input.value = id;
        input.disabled = !hasDescription;
        return input;
      }

      function replaceWithCheckboxes(element) {
        for (var i = 0; i < element.childNodes.length; i++) {
          var child = element.childNodes[i];
          if (child.nodeType === 3) {
            var content = child.textContent;

            if (content.indexOf('[ ]') === 0) {
              child.textContent = content.substring(3);
              element.insertBefore(createInputNode(checkboxId++), child);

            } else if (content.indexOf('[]') === 0) {
              child.textContent = content.substring(2);
              element.insertBefore(createInputNode(checkboxId++), child);

            } else if (content.indexOf('[X]') === 0 || content.indexOf('[x]') === 0) {
              child.textContent = content.substring(3);
              element.insertBefore(createInputNode(checkboxId++, true), child);

            } else if ( // Skip IDs for characters, which are not converted to checkbox
              content.indexOf('[ ]') > 0 ||
              content.indexOf('[]') > 0 ||
              content.indexOf('[X]') > 0 ||
              content.indexOf('[x]') > 0
            ) {
              checkboxId++;
            }
          } else {
            replaceWithCheckboxes(child);
          }
        }
      }

      function changeDescription(id, checked) {
        var text = $description.text(),
          i = 1;

        text = text.replace(/\[[ Xx]?]/g, function (match) {
          if (id == i++) {
            if (checked) {
              return '[x]';
            } else {
              return '[ ]';
            }
          } else {
            return match;
          }
        });

        $description.text(text);

        // Show warning when leaving page with changed and not saved description
        $description.data('changed', 'changed');
      }

      replaceWithCheckboxes($wiki[0]);

      $wiki.on('change', '[name="todo"]', function (e) {
        var id = e.target.value,
          checked = e.target.checked;

        changeDescription(id, checked);

        $('#issue_description_and_toolbar').show().prev().hide();

        if ($wiki.find('#saveCheckbox').length == 0) {
          $wiki.css('position', 'relative');
          $wiki.append('<input type="submit" value="Uložit" id="saveCheckbox" style="position: absolute; right: 10px; bottom: 10px;">');
        }
      });

      $wiki.on('click', '#saveCheckbox', function () {
        $('#issue-form').submit();
        return false;
      });
    }
  }
});


define('module/cl_ly',['lib/page_property_miner', 'lib/local_storage'], function (ppp, ls) {
  return {
    init: function () {
      if (!ppp.matchPage('issues', 'show')) {
        return;
      }

      if (ppp.getTopProjectName() !== 'baufinder') {
        return;
      }

      var self = this;

      $('#content').find('p > a').each(function () {
        var $a = $(this),
          href = $a.attr('href');
        if (href.indexOf('http://cl.ly/') === 0) {
          var data = ls.getJsonCache('clly', href);
          if (data) {
            self.processLink($a, data);
          } else {
            self.getData($a.attr('href'), function (data) {
              ls.setJsonCache('clly', href, data, 24);
              self.processLink($a, data);
            });
          }
        }
      });
    },


    getData: function(url, callback) {
      var settings = {
        headers: {
          'Accept': 'application/json'
        }
      };

      $.ajax('http://acci.cz/proxy/proxy.php?csurl=' + url, settings).done(function (data) {
        callback(data);
      });
    },

    processLink: function ($a, data) {
      if (data.item_type === 'image') {
        var image = new Image();
        image.src = data.remote_url;
        image.title = image.alt = data.name;

        $a.html(image);
        $a.attr('target', '_blank');
        $a.removeClass('external');
      }
    }
  }
});


// return closed ticket to its author ans set closing time automatically where possible
define('module/auto_return_to_owner',[
  'lib/page_property_miner',
  'lib/replace_issue_form_proxy',
  'lib/issue_property_miner'
], function (ppp, proxy, ipm) {
  return {
    init: function () {

      if (!ppp.matchPage('issues', 'show')) {
        return;
      }

      var returnToOwner = function () {
        var author = ipm().createdBy.id;

        var $issueAssignedToId = $('select#issue_assigned_to_id');
        $issueAssignedToId.val(author);
        $issueAssignedToId.prev('label').highlight();
      },

      setClosingDate = function () {
        var $issueCustomFieldValues24 = $('#issue_custom_field_values_24');
        if ($issueCustomFieldValues24.size() > 0) {
          $issueCustomFieldValues24.val((new Date).yyyymmdd());
          $issueCustomFieldValues24.prev('label').highlight();
        }
      };

      var $allAttributes = $('#all_attributes'),
        assignedToChanged = false;

      $allAttributes.on('change', 'select#issue_assigned_to_id', function () {
        assignedToChanged = true;
      });

      $allAttributes.on('change', 'select#issue_status_id', function () {
        var value = $(this).val();
        if (value == 3) { // Solved
          if (!assignedToChanged) {
            proxy(function () {
              returnToOwner();
            });
          }
        } else if (value == 17 || value == 5) { // Closed (on baufinder) OR Closed anywhere else
          proxy(function () {
            setClosingDate();
          });
        }
      });
    }
  }
});


define('module/attachments',[
  'lib/page_property_miner',
  'lib/local_storage',
  'lib/redmine_api',
  'lib/translate',
  'lib/textarea_insert_at_cursor'
], function (ppp, ls, RedmineApi, _, insertAtCursor) {
  return {
    activeEditor: 'issue_notes',

    init: function () {
      if (ppp.matchPage('issues', 'show') || ppp.matchPage('issues', 'edit')) {
        $('#issue_description').focus(function () {
          self.activeEditor = 'issue_description';
        });
        $('#issue_notes').focus(function () {
          self.activeEditor = 'issue_notes';
        });

      } else if (ppp.matchPage('issues', 'new')) {
        this.activeEditor = 'issue_description';

      } else {
        return;
      }

      var proxied = uploadBlob,
        self = this;

      uploadBlob = function (blob, uploadUrl, attachmentId, options) {
        var output = proxied.apply(this, arguments);
        output.done(function () {
          self.uploaded(attachmentId, blob);
        });
        return output;
      };
    },

    uploaded: function (attachmentId, blob) {
      this.processAttachment($('#attachments_fields').find('#attachments_' + attachmentId), blob);
    },

    processAttachment: function ($attachment, blob) {
      var redmineApi = new RedmineApi(),
        attachmentId = $attachment.find('a.remove-upload').attr('href').split('?')[0].split('/')[2].split('.')[0],
        self = this;

      redmineApi.getAttachment(attachmentId, function (attachment) {
        attachment = attachment.attachment;

        if (attachment.content_type.split('/')[0] === 'image') {
          $('<a href="#">' + _('Add to editor') + '</a>').appendTo($attachment).click(function () {

            var text;
            if (attachment.content_url.indexOf('%') !== -1) {
              // Filename contains special character, so we must use full url to attachment (it is Redmine bug)
              text = '!/attachments/download/';
              text += attachment.id;
              text += '/#';
              text += blob.name.split(' ').join('%20');
              text += '!';

            } else {
              text = '!' + attachment.filename  + '!';
            }

            insertAtCursor(document.getElementById(self.activeEditor), text);
            return false;
          });
        }
      });
    }
  }
});


define('module/issue_update_form',['lib/page_property_miner','lib/local_storage'], function (ppp, ls) {

  return {
    init: function () {
      if (!ppp.matchPage('issues', 'show')) {
        return;
      }

      var $update = $('#update');

      function toggleUpdateForm() {
        if ($update.hasClass('minimized')) {
          $update.removeClass('minimized');
          ls.remove('updateFormMinimized');
        } else {
          $update.addClass('minimized');
          ls.set('updateFormMinimized', true);
        }
      }

      $update.find('#issue_subject').closest('fieldset').addClass('issueAttributes');
      $update.find("#time_entry_hours").closest('fieldset').addClass('timeLogging');
      $update.find('#issue_notes').closest('fieldset').addClass('issueJournalNotes');

      // hide logging part of the form
      $update.find(".timeLogging").closest('fieldset').hide();

      // better functioning update, mainly on mobile
      $('.icon-edit').filter(function () {
        return $(this).attr('onclick') === 'showAndScrollTo("update", "issue_notes"); return false;';
      }).addClass('updateButton').attr('onclick', '');

      $('.updateButton').click(function (e) {
        e.preventDefault();
        $update.show();
        $('#issue_notes').focus();

        if (!$update.hasClass('minimized')) {
          $('html, body').animate({scrollTop: $('#issue-form').offset().top}, 100);
        }
      });


      $update.prepend('<span class="minimize"><span class="glyphicon glyphicon-minus"></span> <span class="glyphicon glyphicon-plus"></span></span>');
      $update.find('span.minimize').click(function () {
        toggleUpdateForm();
        return false;
      });
      if (ls.get('updateFormMinimized')) {
        $update.find('span.minimize').click();
      }

      // Remove delimiter for minimized form
      $('#issue-form')
        .contents()
        .filter(function() { return this.nodeType === 3 && this.textContent.trim() === '|'})
        .remove();
      $('<span class="delimiter"> | </span>').insertBefore('#issue-form a:last');
    }
  }
});


define('module/single_click_select',['lib/page_property_miner'], function (ppp) {
  return {
    init: function () {
      this.issueId();
      this.codeElement();
    },

    issueId: function () {
      if (ppp.matchPage('issues', 'show')) {
        $('#content h2:eq(0)').click(function () {
          for (var i = 0; i < this.childNodes.length; i++) {
            if (this.childNodes[i] instanceof Text) {
              var element = this.childNodes[i],
                startChar = element.nodeValue.indexOf('#'),
                endChar = element.nodeValue.length,
                range = document.createRange();

              range.setStart(element, startChar);
              range.setEnd(element, endChar);

              window.getSelection().removeAllRanges();
              window.getSelection().addRange(range);
              break;
            }
          }
        });
      }
    },

    codeElement: function () {
      var lastMouseDownX = null,
        lastMouseDownY = null,
        $body = $('body');

      $body.on('mousedown', 'code', function (event) {
        lastMouseDownX = event.clientX;
        lastMouseDownY = event.clientY;
      });

      $body.on('mouseup', 'code', function (event) {
        if (lastMouseDownX === null || lastMouseDownX !== event.clientX || lastMouseDownY !== event.clientY) {
          return;
        }

        var element = this.childNodes[0];

        if (!element.nodeValue) {
          return;
        }

        var range = document.createRange();
        range.setStart(element, 0);
        range.setEnd(element, element.nodeValue.length);

        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        lastMouseDownX = lastMouseDownY = null;
      });
    }
  }
});


require(['vendor/moment'], function (moment) {
  var language = $('html').attr('lang');
  if (language === 'cs') {
    moment.locale(language);
  }
});

// Register handlebars helpers
require([
  'template/helper/translate',
  'template/helper/dayFromDate',
  'template/helper/trim',
  'template/helper/is',
  'template/helper/isEven',
  'template/helper/isNotEmpty',
  'template/helper/monthFromDate',
  'template/helper/redmineTime'
]);

require([
  'module/remove_issue_type_from_title',
  'module/high_res_gravatars',
  'module/autologin',
  'module/key_shortcuts',
  'module/timey_integration',
  'module/related_issues_header',
  'module/absences',
  'module/assign_select_author',
  'module/datepicker_focus',
  'module/cmd_enter_form_submit',
  'module/better_header',
  'module/issues',
  'module/last_issue',
  'module/localize',
  'module/alternate_cell_format',
  'module/paste_issue_number',
  'module/checkbox',
  'module/cl_ly',
  'module/auto_return_to_owner',
  'module/attachments',
  'module/issue_update_form',
  'module/single_click_select'
], function () {

  for (var i = 0; i < arguments.length; i++) {
    (function(module) {
      if (module && module.init) {
        $(function () {
          module.init();
        });
      }
    })(arguments[i]);
  }
});

require(['lib/local_storage'], function (module) {
  if (Math.random() > 0.9) {
    if (console) console.log('Deleted expired cached entries in localStorage.');
    module.removeExpired();
  }
});


var ProofReasonRedmineTheme = {
  init: function () {
    this.BetterSidebar.init();
    this.BetterTimeline.init();
    this.BetterIssuesContextualMenu.init();
    this.ZenMode.init();
    this.MobileRedmine.init();
    this.MakeMoney.init();
    this.ClickableIssueNames.init();
  },

  tools: {
    cookie: function (key, value, expireInHours) {
      var ls = window.localStorage;

      if (value === undefined) {
        if ((expirationTime = ls.getItem('theme.' + key + '.expire')) !== null) {
          if (new Date() > new Date(expirationTime)) {
            ls.removeItem('theme.' + key + '.expire');
            ls.removeItem('theme.' + key);
            return null;
          }
        }

        return ls.getItem('theme.' + key);

      } else {
        if (expireInHours !== undefined) {
          var expirationTime = new Date().getTime() + expireInHours * 3600 * 1000;
          ls.setItem('theme.' + key + '.expire', new Date(expirationTime));
        }

        return ls.setItem('theme.' + key, value);
      }
    },

    removeCookie: function (key) {
      window.localStorage.removeItem('theme.' + key + '.expire');
      return window.localStorage.removeItem('theme.' + key);
    }
  },

  debug: function () {
    this.PagePropertyMiner.debug();
  },

  PagePropertyMiner: {
    projectId: null,
    issueId: null,
    userId: null,
    lang: null,

    matchPage: function (controller, action) {
      var body = $('body');

      if (body.hasClass('controller-' + controller) && body.hasClass('action-' + action)) {
        return true;
      }

      return false;
    },

    getProjectId: function (callback) {
      if (this.projectId === null) {
        if (this.matchPage('issues', 'show')) {
          this.projectId = $('#issue_project_id option[selected="selected"]').val();
          callback(this.projectId);
        } else {
          var redmineApi = new RedmineApi(),
            url = $('#project_quick_jump_box option[selected="selected"]').val(),
            textProjectId = url.split('/')[2].split('?')[0],
            self = this;

          redmineApi.getProject(textProjectId, function (data) {
            self.projectId = data.project.id;
            callback(self.projectId);
          });
        }
      } else {
        callback(this.projectId);
      }
    },

    getIssueId: function () {
      if (this.issueId === null) {

        if (this.matchPage('issues', 'show')) {
          if ($('h2').eq(0).text().match(/^.+\#([0-9]+)/)) {
            this.issueId = /^.+\#([0-9]+)/.exec($('h2').eq(0).text()).pop();
          }
        }

        if (this.matchPage('timelog', 'new')) {
          if ($('input[name="back_url"]').attr('value').match(/^.+issues\/([0-9]+)\/?$/)) {
            this.issueId = /^.+issues\/([0-9]+)\/?$/.exec($('input[name="back_url"]').attr('value')).pop();
          }
        }

        console.log('issue id recognized: ' + this.issueId);
      }

      return this.issueId;
    },

    getUserId: function () {
      if (this.userId === null) {
        this.userId = /users\/([0-9]+)$/.exec($('#loggedas a').attr('href')).pop();

        console.log('user id recognized: ' + this.userId);
      }

      return this.userId;
    },

    assessUsedLanguage: function () {
      if (this.lang === null) {

        if ($('#top-menu a.home').text() == 'Úvodní') {
          this.lang = 'cs';
        } else {
          this.lang = 'en';
        }

        console.log('used language recognized: ' + this.lang);
      }

      return this.lang;
    },

    debug: function () {
      this.getProjectId(function (projectId) {
        console.log('Project ID recognized: ' + projectId);
      });
      this.getIssueId();
      this.getUserId();
      this.assessUsedLanguage();
    }

  },

  BetterSidebar: {
    init: function () {
      this.tools = ProofReasonRedmineTheme.tools;

      if ($('#sidebar').children().length > 0) {
        $('#sidebar').before('<button type="button" class="toggleSidebar">&times;</button>');
      }

      if (this.tools.cookie('sidebarHidden')) {
        this.hideSidebar();
      }

      this.setListeners();
    },

    setListeners: function () {
      $('button.toggleSidebar').click(function () {
        ProofReasonRedmineTheme.BetterSidebar.toggleSidebar();
      });
    },

    toggleSidebar: function () {
      if ($('#sidebar').is(':visible')) {
        this.hideSidebar();
        this.tools.cookie('sidebarHidden', true);
      } else {
        this.showSidebar();
        this.tools.removeCookie('sidebarHidden');
      }
    },

    showSidebar: function () {
      $('#sidebar').show();
      $('button.toggleSidebar').html('&times;');
      $('#main').removeClass('nosidebar');
    },

    hideSidebar: function () {
      $('#sidebar').hide();
      $('button.toggleSidebar').html('&larr;');
      $('#main').addClass('nosidebar');
    }
  },

  ClickableIssueNames: {
    init: function () {
      this.ppm = ProofReasonRedmineTheme.PagePropertyMiner;
      if (this.ppm.matchPage('issues', 'show')) {
        $('table.list.issues td.subject').each(function () {
          $(this).html($(this).find('a').html($(this).text()));
        });
      }
    }
  },

  BetterTimeline: {
    init: function () {
      //simplified timeline in issues
      $('#history>.journal').addClass('peekable');
      $('#history .wiki').closest('.journal').removeClass('peekable');
      $('#history h3').append(' <a href="#" class="showStatusChanges">(show all issue status changes)</a>');
      $('.peekable').click(function () {
        $(this).removeClass('peekable');
      });

      $('#history h3 a').click(function () {
        $('#history>.journal').removeClass('peekable');
        $('.showStatusChanges').hide();
        return false;
      });
    }
  },

  MakeMoney: {
    ppm: null,

    init: function () {
      this.ppm = ProofReasonRedmineTheme.PagePropertyMiner;

      $('<div id="makeMoney" style="float: right"><a href="/projects/chci-praci/issues/new?issue[assigned_to_id]=79&issue[priority_id]=5">Chci práci!</a></div>').insertBefore('#loggedas');

      if ($('body').hasClass('project-chci-praci') && this.ppm.matchPage('issues', 'new')) {
        var nextMonday = this.getNextMonday();
        $('#issue_subject').val('Příští týden (od ' + nextMonday.getDate() + '. ' + (nextMonday.getMonth() + 1) + '.) mám X hodin času');

        $('.splitcontentleft, .splitcontentright').css({'float': 'none', 'width': 'auto', 'margin': '0'});
        $('#all_attributes p, #attachments_form, #watchers_form, input[name="continue"], a:contains("Preview")').hide();
        $('#all_attributes #issue_subject').closest('p').show();
        $('#all_attributes #issue_description_and_toolbar').closest('p').show();
        $('#all_attributes #issue_description_and_toolbar textarea').attr('placeholder', 'Upřesněte případné detaily.');
        $('#all_attributes #issue_due_date').closest('p').show();
      }
    },

    getNextMonday: function () {
      var today = new Date();
      var weekday = today.getDay() || 7;
      if (weekday !== 1) today.setDate(-(weekday) + 7);
      return today;
    }
  },

  ZenMode: {
    init: function () {
      $('<div id="enterZenMode" style="float: right"><a href="#">Zen mode</a></div>').insertBefore('#loggedas');
      $('<a id="exitZenMode" href="#">&#9775; Exit zen</a>').appendTo('#main>#content>.contextual');

      // toggle zen mode - cookie intentionally not implemented
      $('body').on('click', '#enterZenMode', function () {
        $('body').addClass('zenMode');
        return false;
      });
      $('body').on('click', '#exitZenMode', function () {
        $('body').removeClass('zenMode');
        return false;
      });
    }
  },

  BetterIssuesContextualMenu: {
    init: function () {
      var menu = document.getElementById('context-menu');
      if (menu) {
        menu.parentNode.removeChild(menu);
        document.body.appendChild(menu);
      }
    }
  },

  MobileRedmine: {
    init: function () {
      $('body').addClass('mobileRedmine');
      $('head').append('<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0">');
      if ($(window).width() <= 480) {
        // just for beta testing, it should be rather prevented than destroyed
        setTimeout(function () {
          $('#project_quick_jump_box').select2('destroy')
        }, 300);
      }
      $('#footer .bgr').append('<br><a id="backToDestop" href="javascript:ProofReasonRedmineTheme.MobileRedmine.remove()">Back to desktop mode</a>');
    },
    remove: function () {
      $('#backToDestop').remove();
      $('body').removeClass('mobileRedmine');
      $('head meta[name="viewport"]').remove();
      $('#project_quick_jump_box').select2();
    }
  }
};

$(function() {
  ProofReasonRedmineTheme.init();
});









//    ##       #### ########   ######
//    ##        ##  ##     ## ##    ##
//    ##        ##  ##     ## ##
//    ##        ##  ########   ######
//    ##        ##  ##     ##       ##
//    ##        ##  ##     ## ##    ##
//    ######## #### ########   ######


// http://stackoverflow.com/questions/3066586/get-string-in-yyyymmdd-format-from-js-date-object
Date.prototype.yyyymmdd = function() {
  var yyyy = this.getFullYear().toString();
  var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
  var dd  = this.getDate().toString();
  return yyyy + '-' + (mm[1]?mm:"0"+mm[0]) + '-' + (dd[1]?dd:"0"+dd[0]); // padding
};

//http://stackoverflow.com/questions/2627473/how-to-calculate-the-number-of-days-between-two-dates-using-javascript
function daysFromToday(date) {

    // The number of milliseconds in one day
    var ONE_DAY = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    var date1_ms = (new Date()).getTime();
    var date2_ms = date.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = date2_ms - date1_ms;

    // Convert back to days and return
    return Math.round(difference_ms/ONE_DAY) + 1;

}

//http://stackoverflow.com/questions/848797/yellow-fade-effect-with-jquery/13106698#13106698
jQuery.fn.highlight = function () {
    $(this).each(function () {
        var el = $(this);

        if (!el.is(':visible')) {
          return;
        }

        var fadingEl = $("<div/>")
        .width(el.outerWidth())
        .height(el.outerHeight())
        .css({
            "position": "absolute",
            "left": el.offset().left,
            "top": el.offset().top,
            "background-color": "#ffff99",
            "opacity": ".7",
            "z-index": "9999999"
        }).appendTo('body');

        setTimeout(function () {
          fadingEl.fadeOut(1500).queue(function () {
            fadingEl.remove();
          });
        }, 1000);
    });
};

// JavaScript Relative Time Helpers
// The MIT License
// Copyright (c) 2009 James F. Herdman
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


/**
 * Returns a description of this date in relative terms.

 * Examples, where new Date().toString() == "Mon Nov 23 2009 17:36:51 GMT-0500 (EST)":
 *
 * new Date().toRelativeTime()
 * --> 'Just now'
 *
 * new Date("Nov 21, 2009").toRelativeTime()
 * --> '2 days ago'
 *
 * new Date("Nov 25, 2009").toRelativeTime()
 * --> '2 days from now'
 *
 * // One second ago
 * new Date("Nov 23 2009 17:36:50 GMT-0500 (EST)").toRelativeTime()
 * --> '1 second ago'
 *
 * toRelativeTime() takes an optional argument - a configuration object.
 * It can have the following properties:
 * - now - Date object that defines "now" for the purpose of conversion.
 *         By default, current date & time is used (i.e. new Date())
 * - nowThreshold - Threshold in milliseconds which is considered "Just now"
 *                  for times in the past or "Right now" for now or the immediate future
 * - smartDays - If enabled, dates within a week of now will use Today/Yesterday/Tomorrow
 *               or weekdays along with time, e.g. "Thursday at 15:10:34"
 *               rather than "4 days ago" or "Tomorrow at 20:12:01"
 *               instead of "1 day from now"
 *
 * If a single number is given as argument, it is interpreted as nowThreshold:
 *
 * // One second ago, now setting a now_threshold to 5 seconds
 * new Date("Nov 23 2009 17:36:50 GMT-0500 (EST)").toRelativeTime(5000)
 * --> 'Just now'
 *
 * // One second in the future, now setting a now_threshold to 5 seconds
 * new Date("Nov 23 2009 17:36:52 GMT-0500 (EST)").toRelativeTime(5000)
 * --> 'Right now'
 *
 */
 Date.prototype.toRelativeTime = (function() {

  var _ = function(options) {
    var opts = processOptions(options);

    var now = opts.now || new Date();
    var delta = now - this;
    var future = (delta <= 0);
    delta = Math.abs(delta);

    // special cases controlled by options
    if (delta <= opts.nowThreshold) {
      return future ? 'Right now' : 'Just now';
    }
    if (opts.smartDays && delta <= 6 * MS_IN_DAY) {
      return toSmartDays(this, now);
    }

    var units = null;
    for (var key in CONVERSIONS) {
      if (delta < CONVERSIONS[key])
        break;
      units = key; // keeps track of the selected key over the iteration
      if (units == 'hour' || units == 'minute'  || units == 'day') {
        units = units.substr(0, 1);
      } else {
        units = ' ' + units;
      }
      delta = delta / CONVERSIONS[key];
    }

    // pluralize a unit when the difference is greater than 1.
    delta = Math.floor(delta);
    if (delta !== 1 && units.length > 1) { units += "s"; }
    return [delta, units, future ? " left" : " ago"].join("");
  };

  var processOptions = function(arg) {
    if (!arg) arg = 0;
    if (typeof arg === 'string') {
      arg = parseInt(arg, 10);
    }
    if (typeof arg === 'number') {
      if (isNaN(arg)) arg = 0;
      return {nowThreshold: arg};
    }
    return arg;
  };

  var toSmartDays = function(date, now) {
    var day;
    var weekday = date.getDay();
    var dayDiff = weekday - now.getDay();
    if (dayDiff === 0)       day = 'Today';
    else if (dayDiff == -1) day = 'Yesterday';
    else if (dayDiff == 1 && date > now)  day = 'Tomorrow';
    else                    day = WEEKDAYS[weekday];
    return day + " at " + date.toLocaleTimeString();
  };

  var CONVERSIONS = {
    millisecond: 1, // ms    -> ms
    second: 1000,   // ms    -> sec
    minute: 60,     // sec   -> min
    hour:   60,     // min   -> hour
    day:    24,     // hour  -> day
    month:  30,     // day   -> month (roughly)
    year:   12      // month -> year
  };
  var MS_IN_DAY = (CONVERSIONS.millisecond * CONVERSIONS.second * CONVERSIONS.minute * CONVERSIONS.hour * CONVERSIONS.day);

  var WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return _;

})();


/*
 * Wraps up a common pattern used with this plugin whereby you take a String
 * representation of a Date, and want back a date object.
 */
Date.fromString = function(str) {
  return new Date(Date.parse(str));
};
define("main", function(){});


define.amd = undefined;
