(()=>{var t={485:(t,e,n)=>{t.exports=n(894)},894:function(t,e){var n,r,o;(function(){var i,u,s,a,l,c,f,p,y,h,v,d,m,b,g;s=Math.floor,h=Math.min,u=function(t,e){return t<e?-1:t>e?1:0},y=function(t,e,n,r,o){var i;if(null==n&&(n=0),null==o&&(o=u),n<0)throw new Error("lo must be non-negative");for(null==r&&(r=t.length);n<r;)o(e,t[i=s((n+r)/2)])<0?r=i:n=i+1;return[].splice.apply(t,[n,n-n].concat(e)),e},c=function(t,e,n){return null==n&&(n=u),t.push(e),b(t,0,t.length-1,n)},l=function(t,e){var n,r;return null==e&&(e=u),n=t.pop(),t.length?(r=t[0],t[0]=n,g(t,0,e)):r=n,r},p=function(t,e,n){var r;return null==n&&(n=u),r=t[0],t[0]=e,g(t,0,n),r},f=function(t,e,n){var r;return null==n&&(n=u),t.length&&n(t[0],e)<0&&(e=(r=[t[0],e])[0],t[0]=r[1],g(t,0,n)),e},a=function(t,e){var n,r,o,i,a,l;for(null==e&&(e=u),a=[],r=0,o=(i=function(){l=[];for(var e=0,n=s(t.length/2);0<=n?e<n:e>n;0<=n?e++:e--)l.push(e);return l}.apply(this).reverse()).length;r<o;r++)n=i[r],a.push(g(t,n,e));return a},m=function(t,e,n){var r;if(null==n&&(n=u),-1!==(r=t.indexOf(e)))return b(t,0,r,n),g(t,r,n)},v=function(t,e,n){var r,o,i,s,l;if(null==n&&(n=u),!(o=t.slice(0,e)).length)return o;for(a(o,n),i=0,s=(l=t.slice(e)).length;i<s;i++)r=l[i],f(o,r,n);return o.sort(n).reverse()},d=function(t,e,n){var r,o,i,s,c,f,p,v,d;if(null==n&&(n=u),10*e<=t.length){if(!(i=t.slice(0,e).sort(n)).length)return i;for(o=i[i.length-1],s=0,f=(p=t.slice(e)).length;s<f;s++)n(r=p[s],o)<0&&(y(i,r,0,null,n),i.pop(),o=i[i.length-1]);return i}for(a(t,n),d=[],c=0,v=h(e,t.length);0<=v?c<v:c>v;0<=v?++c:--c)d.push(l(t,n));return d},b=function(t,e,n,r){var o,i,s;for(null==r&&(r=u),o=t[n];n>e&&r(o,i=t[s=n-1>>1])<0;)t[n]=i,n=s;return t[n]=o},g=function(t,e,n){var r,o,i,s,a;for(null==n&&(n=u),o=t.length,a=e,i=t[e],r=2*e+1;r<o;)(s=r+1)<o&&!(n(t[r],t[s])<0)&&(r=s),t[e]=t[r],r=2*(e=r)+1;return t[e]=i,b(t,a,e,n)},i=function(){function t(t){this.cmp=null!=t?t:u,this.nodes=[]}return t.push=c,t.pop=l,t.replace=p,t.pushpop=f,t.heapify=a,t.updateItem=m,t.nlargest=v,t.nsmallest=d,t.prototype.push=function(t){return c(this.nodes,t,this.cmp)},t.prototype.pop=function(){return l(this.nodes,this.cmp)},t.prototype.peek=function(){return this.nodes[0]},t.prototype.contains=function(t){return-1!==this.nodes.indexOf(t)},t.prototype.replace=function(t){return p(this.nodes,t,this.cmp)},t.prototype.pushpop=function(t){return f(this.nodes,t,this.cmp)},t.prototype.heapify=function(){return a(this.nodes,this.cmp)},t.prototype.updateItem=function(t){return m(this.nodes,t,this.cmp)},t.prototype.clear=function(){return this.nodes=[]},t.prototype.empty=function(){return 0===this.nodes.length},t.prototype.size=function(){return this.nodes.length},t.prototype.clone=function(){var e;return(e=new t).nodes=this.nodes.slice(0),e},t.prototype.toArray=function(){return this.nodes.slice(0)},t.prototype.insert=t.prototype.push,t.prototype.top=t.prototype.peek,t.prototype.front=t.prototype.peek,t.prototype.has=t.prototype.contains,t.prototype.copy=t.prototype.clone,t}(),r=[],void 0===(o="function"==typeof(n=function(){return i})?n.apply(e,r):n)||(t.exports=o)}).call(this)}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t,e,r,o,i,u,s,a;function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function c(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===l(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function p(t,e){return"z"in t?"z"in e&&t.x===e.x&&t.y===e.y&&t.z===e.z:t.x===e.x&&t.y===e.y}function y(t,e){Object.entries(t).forEach((function(t,n){var r,o,i=(o=2,function(t){if(Array.isArray(t))return t}(r=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,s=[],a=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(s.push(r.value),s.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return s}}(r,o)||function(t,e){if(t){if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}(r,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=i[0],s=i[1];e(u,s,n)}))}function h(t,e){var n=e.x-t.x,r=e.y-t.y;return Math.sqrt(n*n+r*r)}function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}!function(t){t.CREATE_TASK="create_task",t.COMPLETE_TASK="complete_task",t.CANCEL_TASK="cancel_task",t.UPDATE_POINTS_COST="update_points_cost"}(t||(t={})),function(t){t.MIDGAME="midgame",t.REWARDED="rewarded"}(e||(e={})),function(t){t.SYSTEM="SYSTEM",t.GAMEOVER="GAMEOVER",t.WORLD="WORLD",t.SCREEN="SCREEN",t.MENU="MENU"}(r||(r={})),function(t){t.START="start",t.FINISH="finish",t.UPDATE_SETTINGS="update_settings"}(o||(o={})),function(t){t.AUDIO="AUDIO",t.EFFECTS="EFFECTS",t.TUTORIAL="TUTORIAL"}(i||(i={})),function(t){t.EASY="EASY",t.NORMAL="NORMAL",t.HARD="HARD"}(u||(u={})),function(t){t.NO_BLOOD="NO_BLOOD",t.ADS="ADS"}(s||(s={})),c(a={},i.TUTORIAL,{description:"Tutorial",values:["on","off"],default:"on"}),c(a,i.AUDIO,{description:"Audio",values:["on","off"],default:"on"}),c(a,i.EFFECTS,{description:"Effects",values:["on","off"],default:"on"});var m=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.pointsCost=[],this.taskQueue=[]}var e,n;return e=t,(n=[{key:"createTask",value:function(t){this.taskQueue.push(t)}},{key:"cancelTask",value:function(t){var e=this.taskQueue.findIndex((function(e){return e.id===t}));-1!==e&&this.taskQueue.splice(e,1)}},{key:"updatePointsCost",value:function(t){this.pointsCost=t}},{key:"processing",value:function(){for(var t=this,e=function(){var e=t.taskQueue[0],n=e.takeLastNode();return n?p(e.to,n)?(t.taskQueue.shift(),e.complete(n),0):(n.closeList(),void function(t,e){var n={},r=[];return y({R:{x:1,y:0},L:{x:-1,y:0},D:{x:0,y:1},U:{x:0,y:-1}},(function(o,i){var u,s=e.x+i.x,a=e.y+i.y;!1===(null===(u=t[a])||void 0===u?void 0:u[s])&&(n[o]=!0,r.push(i))})),y({RD:{x:1,y:1},RU:{x:1,y:-1},LU:{x:-1,y:-1},LD:{x:-1,y:1}},(function(o,i){var u,s=o.split("").every((function(t){return n[t]})),a=e.x+i.x,l=e.y+i.y;s&&!1===(null===(u=t[l])||void 0===u?void 0:u[a])&&r.push(i)})),r}(e.grid,n).forEach((function(r){e.checkAdjacentNode(n,r,t.pointsCost)}))):(t.taskQueue.shift(),e.failure(),0)};this.taskQueue.length>0;)e()}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),b=n(485),g=n.n(b);function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}var k=function(){function t(e,n){var r=n.position,o=n.cost,i=void 0===o?1:o,u=n.distance;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.listOpened=null,this.x=r.x,this.y=r.y,this.distance=u,this.cost=i,this.parent=e}var e,n;return e=t,(n=[{key:"bestGuessDistance",value:function(){return this.cost+this.distance}},{key:"getCost",value:function(){return this.cost}},{key:"setCost",value:function(t){this.cost=t}},{key:"getParent",value:function(){return this.parent}},{key:"setParent",value:function(t){this.parent=t}},{key:"isNewList",value:function(){return null===this.listOpened}},{key:"isListOpened",value:function(){return!0===this.listOpened}},{key:"openList",value:function(){this.listOpened=!0}},{key:"closeList",value:function(){this.listOpened=!1}},{key:"getPath",value:function(){for(var t=[{x:this.x,y:this.y}],e=this.getParent();e;)t.push({x:e.x,y:e.y}),e=e.getParent();return t.reverse(),t}}])&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}var T=function(){function e(t){var n=t.id,r=t.from,o=t.to,i=t.grid,u=t.compress,s=void 0!==u&&u;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.tree=[],this.compress=!1,this.id=n,this.from=r,this.to=o,this.grid=i,this.compress=s,this.nodes=new(g())((function(t,e){return t.bestGuessDistance()-e.bestGuessDistance()}));var a=new k(null,{position:r,distance:h(r,o)});this.addNode(a)}var n,r,o;return n=e,o=[{key:"CompressPath",value:function(t){if(t.length<3)return t;var n=[],r=Object.assign({},t[0]),o=Object.assign({},t[1]),i={x:0,y:0};i=e.GetDirection(o,r),n.push(r);for(var u=2;u<t.length;u++){var s=Object.assign({},o),a=Object.assign({},i);o=Object.assign({},t[u]),p(i=e.GetDirection(o,s),a)||n.push(s)}return n.push(o),n}},{key:"GetDirection",value:function(t,e){var n={x:t.x-e.x,y:t.y-e.y},r=Math.sqrt(Math.pow(n.x,2)+Math.pow(n.y,2));return n.x/=r,n.y/=r,n}}],(r=[{key:"takeLastNode",value:function(){var t;return null!==(t=this.nodes.pop())&&void 0!==t?t:null}},{key:"addNode",value:function(t){this.nodes.push(t),this.tree[t.y]||(this.tree[t.y]=[]),this.tree[t.y][t.x]=t}},{key:"pickNode",value:function(t){var e;return null===(e=this.tree[t.y])||void 0===e?void 0:e[t.x]}},{key:"upNode",value:function(t){this.nodes.updateItem(t)}},{key:"failure",value:function(){self.postMessage({event:t.COMPLETE_TASK,payload:{id:this.id,path:null}})}},{key:"complete",value:function(n){var r=n.getPath();this.compress&&(r=e.CompressPath(r)),self.postMessage({event:t.COMPLETE_TASK,payload:{id:this.id,path:r}})}},{key:"checkAdjacentNode",value:function(t,e,n){var r={x:t.x+e.x,y:t.y+e.y},o=t.getCost()+function(t,e,n){var r,o,i,u,s,a,l=t.x+e.x,c=t.y+e.y,f=null!==(o=null===(r=n[c])||void 0===r?void 0:r[l])&&void 0!==o?o:1;return Math.abs(e.x)+Math.abs(e.y)!==1?f*Math.SQRT2+(null!==(u=null===(i=n[t.y])||void 0===i?void 0:i[l])&&void 0!==u?u:0)+(null!==(a=null===(s=n[c])||void 0===s?void 0:s[t.x])&&void 0!==a?a:0):f}(t,e,n),i=this.pickNode(r);if(i)o<i.getCost()&&(i.setCost(o),i.setParent(t),this.upNode(i));else{var u=new k(t,{position:r,cost:o,distance:h(r,this.to)});u.openList(),this.addNode(u)}}}])&&x(n.prototype,r),o&&x(n,o),Object.defineProperty(n,"prototype",{writable:!1}),e}(),A=new m;setInterval((function(){A.processing()}),100),self.onmessage=function(e){var n=e.data;switch(n.event){case t.CREATE_TASK:var r=new T(n.payload);A.createTask(r);break;case t.CANCEL_TASK:A.cancelTask(n.payload.id);break;case t.UPDATE_POINTS_COST:A.updatePointsCost(n.payload)}}})()})();
//# sourceMappingURL=bundle.63c0e4c45b0937f7bb04.worker.js.map