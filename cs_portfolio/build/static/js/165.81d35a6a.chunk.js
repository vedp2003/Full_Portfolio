/*! For license information please see 165.81d35a6a.chunk.js.LICENSE.txt */
(self.webpackChunkalgorithm_visualizer=self.webpackChunkalgorithm_visualizer||[]).push([[165],{7654:function(e,t){var n,o,r;!function(i){"use strict";var a=i.setTimeout,s=i.clearTimeout,d=i.XMLHttpRequest,c=i.XDomainRequest,u=i.ActiveXObject,h=i.EventSource,l=i.document,p=i.Promise,f=i.fetch,v=i.Response,y=i.TextDecoder,g=i.TextEncoder,w=i.AbortController;if("undefined"===typeof window||"undefined"===typeof l||"readyState"in l||null!=l.body||(l.readyState="loading",window.addEventListener("load",(function(e){l.readyState="complete"}),!1)),null==d&&null!=u&&(d=function(){return new u("Microsoft.XMLHTTP")}),void 0==Object.create&&(Object.create=function(e){function t(){}return t.prototype=e,new t}),Date.now||(Date.now=function(){return(new Date).getTime()}),void 0==w){var b=f;f=function(e,t){var n=t.signal;return b(e,{headers:t.headers,credentials:t.credentials,cache:t.cache}).then((function(e){var t=e.body.getReader();return n._reader=t,n._aborted&&n._reader.cancel(),{status:e.status,statusText:e.statusText,headers:e.headers,body:{getReader:function(){return t}}}}))},w=function(){this.signal={_reader:null,_aborted:!1},this.abort=function(){null!=this.signal._reader&&this.signal._reader.cancel(),this.signal._aborted=!0}}}function E(){this.bitsNeeded=0,this.codePoint=0}E.prototype.decode=function(e){function t(e,t,n){if(1===n)return e>=128>>t&&e<<t<=2047;if(2===n)return e>=2048>>t&&e<<t<=55295||e>=57344>>t&&e<<t<=65535;if(3===n)return e>=65536>>t&&e<<t<=1114111;throw new Error}function n(e,t){if(6===e)return t>>6>15?3:t>31?2:1;if(12===e)return t>15?3:2;if(18===e)return 3;throw new Error}for(var o=65533,r="",i=this.bitsNeeded,a=this.codePoint,s=0;s<e.length;s+=1){var d=e[s];0!==i&&(d<128||d>191||!t(a<<6|63&d,i-6,n(i,a)))&&(i=0,a=o,r+=String.fromCharCode(a)),0===i?(d>=0&&d<=127?(i=0,a=d):d>=192&&d<=223?(i=6,a=31&d):d>=224&&d<=239?(i=12,a=15&d):d>=240&&d<=247?(i=18,a=7&d):(i=0,a=o),0===i||t(a,i,n(i,a))||(i=0,a=o)):(i-=6,a=a<<6|63&d),0===i&&(a<=65535?r+=String.fromCharCode(a):(r+=String.fromCharCode(55296+(a-65535-1>>10)),r+=String.fromCharCode(56320+(a-65535-1&1023))))}return this.bitsNeeded=i,this.codePoint=a,r};void 0!=y&&void 0!=g&&function(){try{return"test"===(new y).decode((new g).encode("test"),{stream:!0})}catch(e){console.debug("TextDecoder does not support streaming option. Using polyfill instead: "+e)}return!1}()||(y=E);var C=function(){};function T(e){this.withCredentials=!1,this.readyState=0,this.status=0,this.statusText="",this.responseText="",this.onprogress=C,this.onload=C,this.onerror=C,this.onreadystatechange=C,this._contentType="",this._xhr=e,this._sendTimeout=0,this._abort=C}function m(e){return e.replace(/[A-Z]/g,(function(e){return String.fromCharCode(e.charCodeAt(0)+32)}))}function _(e){for(var t=Object.create(null),n=e.split("\r\n"),o=0;o<n.length;o+=1){var r=n[o].split(": "),i=r.shift(),a=r.join(": ");t[m(i)]=a}this._map=t}function S(){}function x(e){this._headers=e}function A(){}function R(){this._listeners=Object.create(null)}function O(e){a((function(){throw e}),0)}function D(e){this.type=e,this.target=void 0}function H(e,t){D.call(this,e),this.data=t.data,this.lastEventId=t.lastEventId}function N(e,t){D.call(this,e),this.status=t.status,this.statusText=t.statusText,this.headers=t.headers}function j(e,t){D.call(this,e),this.error=t.error}T.prototype.open=function(e,t){this._abort(!0);var n=this,o=this._xhr,r=1,i=0;this._abort=function(e){0!==n._sendTimeout&&(s(n._sendTimeout),n._sendTimeout=0),1!==r&&2!==r&&3!==r||(r=4,o.onload=C,o.onerror=C,o.onabort=C,o.onprogress=C,o.onreadystatechange=C,o.abort(),0!==i&&(s(i),i=0),e||(n.readyState=4,n.onabort(null),n.onreadystatechange())),r=0};var c=function(){if(1===r){var e=0,t="",i=void 0;if("contentType"in o)e=200,t="OK",i=o.contentType;else try{e=o.status,t=o.statusText,i=o.getResponseHeader("Content-Type")}catch(a){e=0,t="",i=void 0}0!==e&&(r=2,n.readyState=2,n.status=e,n.statusText=t,n._contentType=i,n.onreadystatechange())}},u=function(){if(c(),2===r||3===r){r=3;var e="";try{e=o.responseText}catch(t){}n.readyState=3,n.responseText=e,n.onprogress()}},h=function(e,t){if(null!=t&&null!=t.preventDefault||(t={preventDefault:C}),u(),1===r||2===r||3===r){if(r=4,0!==i&&(s(i),i=0),n.readyState=4,"load"===e)n.onload(t);else if("error"===e)n.onerror(t);else{if("abort"!==e)throw new TypeError;n.onabort(t)}n.onreadystatechange()}},l=function(){i=a((function(){l()}),500),3===o.readyState&&u()};"onload"in o&&(o.onload=function(e){h("load",e)}),"onerror"in o&&(o.onerror=function(e){h("error",e)}),"onabort"in o&&(o.onabort=function(e){h("abort",e)}),"onprogress"in o&&(o.onprogress=u),"onreadystatechange"in o&&(o.onreadystatechange=function(e){!function(e){void 0!=o&&(4===o.readyState?"onload"in o&&"onerror"in o&&"onabort"in o||h(""===o.responseText?"error":"load",e):3===o.readyState?"onprogress"in o||u():2===o.readyState&&c())}(e)}),!("contentType"in o)&&"ontimeout"in d.prototype||(t+=(-1===t.indexOf("?")?"?":"&")+"padding=true"),o.open(e,t,!0),"readyState"in o&&(i=a((function(){l()}),0))},T.prototype.abort=function(){this._abort(!1)},T.prototype.getResponseHeader=function(e){return this._contentType},T.prototype.setRequestHeader=function(e,t){var n=this._xhr;"setRequestHeader"in n&&n.setRequestHeader(e,t)},T.prototype.getAllResponseHeaders=function(){return void 0!=this._xhr.getAllResponseHeaders&&this._xhr.getAllResponseHeaders()||""},T.prototype.send=function(){if("ontimeout"in d.prototype&&("sendAsBinary"in d.prototype||"mozAnon"in d.prototype)||void 0==l||void 0==l.readyState||"complete"===l.readyState){var e=this._xhr;"withCredentials"in e&&(e.withCredentials=this.withCredentials);try{e.send(void 0)}catch(n){throw n}}else{var t=this;t._sendTimeout=a((function(){t._sendTimeout=0,t.send()}),4)}},_.prototype.get=function(e){return this._map[m(e)]},null!=d&&null==d.HEADERS_RECEIVED&&(d.HEADERS_RECEIVED=2),S.prototype.open=function(e,t,n,o,r,i,a){e.open("GET",r);var s=0;for(var c in e.onprogress=function(){var t=e.responseText.slice(s);s+=t.length,n(t)},e.onerror=function(e){e.preventDefault(),o(new Error("NetworkError"))},e.onload=function(){o(null)},e.onabort=function(){o(null)},e.onreadystatechange=function(){if(e.readyState===d.HEADERS_RECEIVED){var n=e.status,o=e.statusText,r=e.getResponseHeader("Content-Type"),i=e.getAllResponseHeaders();t(n,o,r,new _(i))}},e.withCredentials=i,a)Object.prototype.hasOwnProperty.call(a,c)&&e.setRequestHeader(c,a[c]);return e.send(),e},x.prototype.get=function(e){return this._headers.get(e)},A.prototype.open=function(e,t,n,o,r,i,a){var s=null,d=new w,c=d.signal,u=new y;return f(r,{headers:a,credentials:i?"include":"same-origin",signal:c,cache:"no-store"}).then((function(e){return s=e.body.getReader(),t(e.status,e.statusText,e.headers.get("Content-Type"),new x(e.headers)),new p((function(e,t){var o=function(){s.read().then((function(t){if(t.done)e(void 0);else{var r=u.decode(t.value,{stream:!0});n(r),o()}})).catch((function(e){t(e)}))};o()}))})).catch((function(e){return"AbortError"===e.name?void 0:e})).then((function(e){o(e)})),{abort:function(){null!=s&&s.cancel(),d.abort()}}},R.prototype.dispatchEvent=function(e){e.target=this;var t=this._listeners[e.type];if(void 0!=t)for(var n=t.length,o=0;o<n;o+=1){var r=t[o];try{"function"===typeof r.handleEvent?r.handleEvent(e):r.call(this,e)}catch(i){O(i)}}},R.prototype.addEventListener=function(e,t){e=String(e);var n=this._listeners,o=n[e];void 0==o&&(o=[],n[e]=o);for(var r=!1,i=0;i<o.length;i+=1)o[i]===t&&(r=!0);r||o.push(t)},R.prototype.removeEventListener=function(e,t){e=String(e);var n=this._listeners,o=n[e];if(void 0!=o){for(var r=[],i=0;i<o.length;i+=1)o[i]!==t&&r.push(o[i]);0===r.length?delete n[e]:n[e]=r}},H.prototype=Object.create(D.prototype),N.prototype=Object.create(D.prototype),j.prototype=Object.create(D.prototype);var I=-1,P=-1,L=/^text\/event\-stream(;.*)?$/i,M=function(e,t){var n=null==e?t:parseInt(e,10);return n!==n&&(n=t),q(n)},q=function(e){return Math.min(Math.max(e,1e3),18e6)},k=function(e,t,n){try{"function"===typeof t&&t.call(e,n)}catch(o){O(o)}};function X(e,t){R.call(this),t=t||{},this.onopen=void 0,this.onmessage=void 0,this.onerror=void 0,this.url=void 0,this.readyState=void 0,this.withCredentials=void 0,this.headers=void 0,this._close=void 0,function(e,t,n){t=String(t);var o=Boolean(n.withCredentials),r=n.lastEventIdQueryParameterName||"lastEventId",i=q(1e3),u=M(n.heartbeatTimeout,45e3),h="",l=i,p=!1,f=0,v=n.headers||{},y=n.Transport,g=z&&void 0==y?void 0:new T(void 0!=y?new y:void 0!=d&&"withCredentials"in d.prototype||void 0==c?new d:new c),w=null!=y&&"string"!==typeof y?new y:void 0==g?new A:new S,b=void 0,E=0,C=I,m="",_="",x="",R="",O=0,D=0,X=0,G=function(t,n,o,r){if(0===C)if(200===t&&void 0!=o&&L.test(o)){C=1,p=Date.now(),l=i,e.readyState=1;var a=new N("open",{status:t,statusText:n,headers:r});e.dispatchEvent(a),k(e,e.onopen,a)}else{var s="";200!==t?(n&&(n=n.replace(/\s+/g," ")),s="EventSource's response has a status "+t+" "+n+" that is not 200. Aborting the connection."):s="EventSource's response has a Content-Type specifying an unsupported type: "+(void 0==o?"-":o.replace(/\s+/g," "))+". Aborting the connection.",U();a=new N("error",{status:t,statusText:n,headers:r});e.dispatchEvent(a),k(e,e.onerror,a),console.error(s)}},V=function(t){if(1===C){for(var n=-1,o=0;o<t.length;o+=1){(c=t.charCodeAt(o))!=="\n".charCodeAt(0)&&c!=="\r".charCodeAt(0)||(n=o)}var r=(-1!==n?R:"")+t.slice(0,n+1);R=(-1===n?R:"")+t.slice(n+1),""!==t&&(p=Date.now(),f+=t.length);for(var d=0;d<r.length;d+=1){var c=r.charCodeAt(d);if(O===P&&c==="\n".charCodeAt(0))O=0;else if(O===P&&(O=0),c==="\r".charCodeAt(0)||c==="\n".charCodeAt(0)){if(0!==O){1===O&&(X=d+1);var v=r.slice(D,X-1),y=r.slice(X+(X<d&&r.charCodeAt(X)===" ".charCodeAt(0)?1:0),d);"data"===v?(m+="\n",m+=y):"id"===v?_=y:"event"===v?x=y:"retry"===v?(i=M(y,i),l=i):"heartbeatTimeout"===v&&(u=M(y,u),0!==E&&(s(E),E=a((function(){K()}),u)))}if(0===O){if(""!==m){h=_,""===x&&(x="message");var g=new H(x,{data:m.slice(1),lastEventId:_});if(e.dispatchEvent(g),"open"===x?k(e,e.onopen,g):"message"===x?k(e,e.onmessage,g):"error"===x&&k(e,e.onerror,g),2===C)return}m="",x=""}O=c==="\r".charCodeAt(0)?P:0}else 0===O&&(D=d,O=1),1===O?c===":".charCodeAt(0)&&(X=d+1,O=2):2===O&&(O=3)}}},B=function(t){if(1===C||0===C){C=I,0!==E&&(s(E),E=0),E=a((function(){K()}),l),l=q(Math.min(16*i,2*l)),e.readyState=0;var n=new j("error",{error:t});e.dispatchEvent(n),k(e,e.onerror,n),void 0!=t&&console.error(t)}},U=function(){C=2,void 0!=b&&(b.abort(),b=void 0),0!==E&&(s(E),E=0),e.readyState=2},K=function(){if(E=0,C===I){p=!1,f=0,E=a((function(){K()}),u),C=0,m="",x="",_=h,R="",D=0,X=0,O=0;var n=t;if("data:"!==t.slice(0,5)&&"blob:"!==t.slice(0,5)&&""!==h){var o=t.indexOf("?");n=-1===o?t:t.slice(0,o+1)+t.slice(o+1).replace(/(?:^|&)([^=&]*)(?:=[^&]*)?/g,(function(e,t){return t===r?"":e})),n+=(-1===t.indexOf("?")?"?":"&")+r+"="+encodeURIComponent(h)}var i=e.withCredentials,s={Accept:"text/event-stream"},d=e.headers;if(void 0!=d)for(var c in d)Object.prototype.hasOwnProperty.call(d,c)&&(s[c]=d[c]);try{b=w.open(g,G,V,B,n,i,s)}catch(v){throw U(),v}}else if(p||void 0==b){var l=Math.max((p||Date.now())+u-Date.now(),1);p=!1,E=a((function(){K()}),l)}else B(new Error("No activity within "+u+" milliseconds. "+(0===C?"No response received.":f+" chars received.")+" Reconnecting.")),void 0!=b&&(b.abort(),b=void 0)};e.url=t,e.readyState=0,e.withCredentials=o,e.headers=v,e._close=U,K()}(this,e,t)}var z=void 0!=f&&void 0!=v&&"body"in v.prototype;X.prototype=Object.create(R.prototype),X.prototype.CONNECTING=0,X.prototype.OPEN=1,X.prototype.CLOSED=2,X.prototype.close=function(){this._close()},X.CONNECTING=0,X.OPEN=1,X.CLOSED=2,X.prototype.withCredentials=void 0;var G=h;void 0==d||void 0!=h&&"withCredentials"in h.prototype||(G=X),function(i){if("object"===typeof e.exports){var a=i(t);void 0!==a&&(e.exports=a)}else o=[t],void 0===(r="function"===typeof(n=i)?n.apply(t,o):n)||(e.exports=r)}((function(e){e.EventSourcePolyfill=X,e.NativeEventSource=h,e.EventSource=G}))}("undefined"===typeof globalThis?"undefined"!==typeof window?window:"undefined"!==typeof self?self:this:globalThis)},2165:(e,t,n)=>{e.exports=n(7654).EventSourcePolyfill}}]);
//# sourceMappingURL=165.81d35a6a.chunk.js.map