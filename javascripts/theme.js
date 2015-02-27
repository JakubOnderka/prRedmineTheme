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

  Subject: 'Předmět',
  Assignee: 'Přiřazeno',
  Status: 'Stav',
  Done: 'Hotovo',
  'Due date': 'Uzavřít do',

  // Timey
  'Open Timey': 'Otevřít Timey',

  // Absences
  maybe: 'možná',
  'Show details': 'Zobrazit detaily',
  'Planned absences': 'Plánované absence',
  refresh: 'obnovit',

  // Assign select author
  'issue author': 'autor issue',

  months : {
    1: 'Leden',
    2: 'Únor',
    3: 'Březen',
    4: 'Duben',
    5: 'Květen',
    6: 'Červen',
    7: 'Červenec',
    8: 'Srpen',
    9: 'Zaří',
    10: 'Říjen',
    11: 'Listopad',
    12: 'Prosinec'
  }
});
define('translation/en',{
  months : {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'Jun',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
  }
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
    return _(key);
  });
});
define('template/helper/dayFromDate',['vendor/handlebars.runtime'], function (handlebars) {
  handlebars.registerHelper('dayFromDate', function(key) {
    return key.split('-')[2];
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
define('template/helper/monthFromDate',['vendor/handlebars.runtime', 'lib/translate'], function (handlebars, _) {
  handlebars.registerHelper('monthFromDate', function(key) {
    var id = key.split('-')[1];
    return _('months')[id];
  });
});


define('lib/local_storage',[],function() {
  var ls = window.localStorage,
    NS = 'theme';

  return {
    _key: function (key, sub) {
      if (key.indexOf('.') !== -1) {
        throw new Error('Key cannot contains dot character, "' + key + '" given.');
      }

      if (sub !== undefined) {
        return NS + '.' + key + '.' + sub;
      } else {
        return NS + '.' + key;
      }
    },

    _isExpired: function (key) {
      var expirationTime;

      if ((expirationTime = ls.getItem(this._key(key, 'expire'))) !== null) {
        if (new Date() > new Date(expirationTime)) {
          return true;
        }
      }

      return false;
    },

    set: function (key, value, expireInHours) {
      if (expireInHours !== undefined) {
        var expirationTime = new Date().getTime() + expireInHours * 3600 * 1000;
        ls.setItem(this._key(key, 'expire'), new Date(expirationTime));
      }

      return ls.setItem(this._key(key), value);
    },

    get: function (key) {
      if (this._isExpired(key)) {
        ls.removeItem(this._key(key, 'expire'));
        ls.removeItem(this._key(key));
        return null;
      }

      return ls.getItem(this._key(key));
    },

    remove: function (key) {
      ls.removeItem(this._key(key, 'expire'));
      return ls.removeItem(this._key(key));
    },

    removeExpired: function() {
      for (var lsItem in localStorage) {
        var parts = lsItem.split('.');
        if (parts.length === 2 && parts[0] === NS) {
          var key = parts[1];
          if (this._isExpired(key)) {
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
define('module/key_shortcuts',['lib/page_property_miner', 'vendor/keymaster'], function (ppp, key) {
  return {
    init: function () {
      var $mainMenu = $('#main-menu');

      function linkFromMainMenu(type) {
        var href = $mainMenu.find('.' + type).attr('href');
        if (href) {
          window.location.href = href;
          return false;
        }
        return true;
      }

      if (ppp.matchPage('issues', 'show')) {
        key('e', function() {
          showAndScrollTo("update", "issue_notes");
          return false;
        });
        /*key('left', function() {
         $('#content .next-prev-links a').each(function() {
         if ($(this).text() == '« Předchozí') {
         window.location.href = $(this).attr('href');
         }
         });
         return false;
         });
         key('right', function() {
         $('#content .next-prev-links a').each(function() {
         if ($(this).text() == 'Další »') {
         window.location.href = $(this).attr('href');
         }
         });
         return false;
         });*/

      } else if (ppp.matchPage('issues', 'index')) {
        /*key('esc', function() {
         var $link = $('.buttons .icon-reload');
         if ($link.length > 0) {
         window.location.href = $link.attr('href');
         return false;
         }
         });

         key('left', function() {
         var href = $('ul.pagination .prev').attr('href');
         if (href) {
         window.location.href = href;
         }
         return false;
         });

         key('right', function() {
         var href = $('ul.pagination .next').attr('href');
         if (href) {
         window.location.href = href;
         }
         return false;
         });*/
      }

      /*key('i', function() {
       return linkFromMainMenu('issues');
       });

       key('n', function() {
       return linkFromMainMenu('new-issue');
       });

       key('w', function() {
       return linkFromMainMenu('wiki');
       });

       key('p', function() {
       $('#s2id_project_quick_jump_box').select2("open");
       return false;
       });

       key('a', function() {
       return linkFromMainMenu('activity');
       });*/
    }
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
return templates;
});


define('module/timey_integration',['lib/page_property_miner', 'templates'], function (ppp, themes) {
  return {

    init: function () {
      $(themes['open_timey']()).insertBefore('#loggedas');

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

        var timeyLogger = '<div class="timeyLoggerWrapper"><span class="close"><i class="bootstrap-icon-remove"></i></span><iframe style="border:0; width: 100%; height: 220px" src="' +
          url + '"></iframe></div>';

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
        $issueTree = $issue.find('#issue_tree table.list.issues'),
        $issueRelations = $issue.find('#relations table.list.issues');

      if ($issueTree.length) {
        $issueTree.prepend(templates['issue_tree_header']());
      }

      if ($issueRelations.length) {
        $issueRelations.prepend(templates['relations_header']());
      }
    }
  }
});


define('module/absences',['lib/page_property_miner', 'lib/local_storage', 'templates'], function (ppp, ls, templates) {
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
      this.absencesInfoUrl = window.location.hostname == 'localhost' ?
        'holidays.html' : // test
        '/projects/pm/wiki/Holidays'; // production

      if (ppp.matchPage('welcome', 'index')) {
        $('div.projects.box').after('<div id="plannedAbsences"></div>');

      } else if (ppp.matchPage('issues', 'index')) {
        $('#sidebar').append('<div id="plannedAbsences"></div>');
      }

      if ($('#plannedAbsences').length) {
        if (ls.get('absencesObject')) {
          var absences = JSON.parse(ls.get('absencesObject'));
          this.put(absences);
        } else {
          this.load();
        }
      }
    },

    fixDate: function (date) {
      var parts = date.split('-');
      if (parts[1] < 10) {
        parts[1] = '0' + parts[1];
      }
      if (parts[2] < 10) {
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
        return a.month > b.month;
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
        self.load();
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
              absence.to = date + (day - 1);
              person.push(absence);
              absence = null;
            }

            if (!absence) {
              absence = {
                from: date + day,
                to: -1,
                type: tdContent
              };
            }
          } else if (absence) {
            absence.to = date + (day - 1);
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
          absence.to = date + (day - 1);
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

    load: function () {
      var self = this;
      this.loadAbsencesData(function (absences) {
        self.put(absences)
      });
    },

    put: function (absences) {
      ls.set('absencesObject', JSON.stringify(absences), 24);

      var html = this.createHtml(absences);
      this.putHtmlIntoDocument(html);
    }
  }
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

    var h2Content = $('h2').text(),
      $issueDiv = $('div.issue'),
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
      projectName: ppp.getProjectName(),

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
          $(this).text($(this).text() + ' (' +  _('issue author') + ')');
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
      $(document).on('keydown', 'textarea#issue_notes, textarea#issue_description', function (event) {
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


// Register handlebars helpers
require([
  'template/helper/translate',
  'template/helper/dayFromDate',
  'template/helper/trim',
  'template/helper/is',
  'template/helper/monthFromDate'
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
  'module/cmd_enter_form_submit'
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
    this.BetterHeader.init();
    this.BetterSidebar.init();
    this.BetterUpdateForm.init();
    this.BetterTimeline.init();
    this.AutoReturnToOwner.init();
    this.AlternateCellFormats.init();
    this.BetterIssuesContextualMenu.init();
    this.ZenMode.init();
    this.MobileRedmine.init();
    this.MakeMoney.init();
    this.ClickableIssueNames.init();
    this.SingleClickSelect.init();
  },

  tools: {
    dateFromRedmineString: function (issueDate) {
      var issueDateArray = issueDate.replace(" ", '-').replace(":", '-').split("-");

      var year = issueDateArray[0];
      var month = issueDateArray[1] - 1;
      var day = issueDateArray[2];
      var hours = issueDateArray[3] ? issueDateArray[3] : 17;
      var minutes = issueDateArray[4] ? issueDateArray[4] : 0;

      return new Date(year, month, day, hours, minutes);
    },

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

  BetterHeader: {
    init: function () {
      // header links
      $('#header h1').prepend('<a class="go-to-my-issues" href="https://redmine.proofreason.com/issues?query_id=135">My issues</a><a class="go-to-projects" href="/projects">Projects</a>');
      //standard link for my issues: /issues?assigned_to_id=me&set_filter=1&sort=priority%3Adesc%2Cupdated_on%3Adesc

      if ($(window).width() > 640) {
        $('#q').focus();
      }
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
        this.tools.cookie('sidebarHidden', true); //extend expiration
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
      } else {
        this.showSidebar();
      }
    },

    showSidebar: function () {
      $('#sidebar').show();
      $('button.toggleSidebar').html('&times;');
      $('#main').removeClass('nosidebar');
      this.tools.removeCookie('sidebarHidden');
    },

    hideSidebar: function () {
      $('#sidebar').hide();
      $('button.toggleSidebar').html('&larr;');
      $('#main').addClass('nosidebar');
      this.tools.cookie('sidebarHidden', true);
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

  BetterUpdateForm: {
    init: function () {
      this.tools = ProofReasonRedmineTheme.tools;

      $('#update #issue_subject').closest('fieldset').addClass('issueAttributes');
      $("#update #time_entry_hours").closest('fieldset').addClass('timeLogging');
      $('#update #issue_notes').closest('fieldset').addClass('issueJournalNotes');

      // hide logging part of the form
      $("#update .timeLogging").closest('fieldset').hide();

      // better functioning update, mainly on mobile
      $('.icon-edit').filter(function () {
        return $(this).attr('onclick') === 'showAndScrollTo("update", "issue_notes"); return false;';
      }).addClass('updateButton').attr('onclick', '');

      $('.updateButton').click(function (e) {
        e.preventDefault();
        $('#update').show();
        $('#issue_notes').focus();
        $('html, body').animate({scrollTop: $('#issue-form').offset().top}, 100);
      });


      $('#update').prepend('<span class="minimize"><span class="glyphicon glyphicon-minus"></span> <span class="glyphicon glyphicon-plus"></span></span>');
      $('#update span.minimize').click(function () {
        ProofReasonRedmineTheme.BetterUpdateForm.toggleUpdateForm();
        return false;
      });
      if (this.tools.cookie('updateFormMinimized')) {
        $('#update span.minimize').click();
      }

      // Remove delimiter for minimized form
      $('#issue-form')
        .contents()
        .filter(function() { return this.nodeType === 3 && this.textContent.trim() === '|'})
        .remove();
      $('<span class="delimiter"> | </span>').insertBefore('#issue-form a:last');
    },

    toggleUpdateForm: function () {
      if ($('#update').hasClass('minimized')) {
        $('#update').removeClass('minimized');
        this.tools.removeCookie('updateFormMinimized');
      } else {
        $('#update').addClass('minimized');
        this.tools.cookie('updateFormMinimized', true);
      }
    }
  },

  AutoReturnToOwner: {
    init: function () {
      // return closed ticket to its author ans set closing time automatically where possible

      var $allAttributes = $('#all_attributes');
      $allAttributes.on('change', 'select#issue_status_id', function () {
        var value = $(this).val();
        if (value == 3) { // Solved
          $allAttributes.one('DOMSubtreeModified', function () {
            console.debug('All attributes DOMSubtreeModified event.');

            setTimeout(function () {
              ProofReasonRedmineTheme.AutoReturnToOwner.returnToOwner();
            }, 100);

          });
        } else if (value == 17 || value == 5) { // Closed (on baufinder) OR Closed anywhere else
          $allAttributes.one('DOMSubtreeModified', function () {
            console.debug('All attributes DOMSubtreeModified event.');

            setTimeout(function () {
              ProofReasonRedmineTheme.AutoReturnToOwner.setClosingDate();
            }, 100);
          });
        }
      });
    },

    returnToOwner: function () {
      var author = $('p.author a').first().attr('href').substring(7);

      var $issueAssignedToId = $('select#issue_assigned_to_id');
      $issueAssignedToId.val(author);
      $issueAssignedToId.prev('label').highlight();
    },

    setClosingDate: function () {
      var $issueCustomFieldValues24 = $('#issue_custom_field_values_24');
      if ($issueCustomFieldValues24.size() > 0) {
        $issueCustomFieldValues24.val((new Date).yyyymmdd());
        $issueCustomFieldValues24.prev('label').highlight();
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

  AlternateCellFormats: {
    init: function () {
      this.tools = ProofReasonRedmineTheme.tools;

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

    setFormatUp: function (cellSelector, alternateFormats, originalFormat) {
      this.prepareCells(cellSelector);
      for (var format in alternateFormats) {
        this.addAlternateFormat(cellSelector, format, alternateFormats[format]);

        if (originalFormat == null) {
          originalFormat = format;
        }
      }
      this.showAlternateFormat(cellSelector, this.tools.cookie(cellSelector) ? this.tools.cookie(cellSelector) : originalFormat);
    },

    prepareCells: function (cells) {
      $(cells).each(function () {
        $(this).data('format.' + 'originalFormat', $(this).text());
        $(this).attr('title', $(this).text());
        $(this).data('currentlyDisplayed', 'originalFormat');
      });

      $(cells).click(function () {
        ProofReasonRedmineTheme.AlternateCellFormats.toggleFormats(cells);
      });
    },

    addAlternateFormat: function (cells, format, procedure) {
      $(cells).each(function () {
        $(this).data('format.' + format, procedure($(this).text()));
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

      this.tools.cookie(cells, variants[nextFormat]);
      this.showAlternateFormat(cells, variants[nextFormat]);
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
          var date = ProofReasonRedmineTheme.tools.dateFromRedmineString(value);
          var daysCount = daysFromToday(date);
          var textualDueDate = '';

          switch (daysCount) {
            case 0:
              textualDueDate = 'Yesterday';
              break;
            case 1:
              textualDueDate = ProofReasonRedmineTheme.AlternateCellFormats.format.relativeTime(value);
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
        var date = ProofReasonRedmineTheme.tools.dateFromRedmineString(value);
        return date.toRelativeTime(new Date(), 5000, true);
      },

      shortIssueType: function (value) {
        var types = {
          'Požadavek': '<span style="opacity:.4">&fnof;</span>',
          'Feature Request': '<span style="opacity:.4">&fnof;</span>',
          'Error': '<img src="/themes/prRedmineTheme/stylesheets/img/error.png" width="16" height="16" style="opacity:.4">'
        };

        if (value in types) {
          return types[value];
        } else {
          return value;
        }
      }
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
  },

  SingleClickSelect: {
    init: function () {
      this.issueId();
      this.codeElement();
    },

    issueId: function () {
      if (ProofReasonRedmineTheme.PagePropertyMiner.matchPage('issues', 'show')) {
        $('#content h2').click(function () {
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


// http://stackoverflow.com/questions/2270910/how-to-convert-sequence-of-numbers-in-an-array-to-range-of-numbers
function getRanges(array) {
  var ranges = [], rstart, rend;
  for (var i = 0; i < array.length; i++) {
    rstart = array[i];
    rend = rstart;
    while (array[i + 1] - array[i] == 1) {
      rend = array[i + 1]; // increment the index if the numbers sequential
      i++;
    }
    ranges.push(rstart == rend ? rstart+'' : rstart + '-' + rend);
  }
  return ranges;
}


// http://stackoverflow.com/questions/1810984/number-of-days-in-any-month
function getDaysInMonth(m, y) {
   return /8|3|5|10/.test(--m)?30:m==1?(!(y%4)&&y%100)||!(y%400)?29:28:31;
}

// http://stackoverflow.com/questions/3066586/get-string-in-yyyymmdd-format-from-js-date-object
Date.prototype.yyyymmdd = function() {
   var yyyy = this.getFullYear().toString();
   var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
   var dd  = this.getDate().toString();
   return yyyy + '-' + (mm[1]?mm:"0"+mm[0]) + '-' + (dd[1]?dd:"0"+dd[0]); // padding
  };

//http://stackoverflow.com/a/7616484
String.prototype.hashCode = function(){
    var hash = 0, i, char;
    if (this.length == 0) return hash;
    for (i = 0; i < this.length; i++) {
        char = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
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
