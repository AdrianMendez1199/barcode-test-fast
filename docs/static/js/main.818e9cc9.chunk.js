(this["webpackJsonpbarcode-test-fast"]=this["webpackJsonpbarcode-test-fast"]||[]).push([[0],{11:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t.n(c),o=t(3),r=t.n(o),s=t(4),l=function(){var e=null;return Object(c.useEffect)((function(){s.a.BarcodeScanner.createInstance({UIElement:document.getElementById("scanner-container"),onUnduplicatedRead:function(e,n){console.log("text",e),console.log("result",n)}}).then((function(n){(e=n).show().catch((function(n){console.log(n),alert("ex.message || ex"),e.hide()}))}))})),a.a.createElement("div",{id:"scanner-container"},a.a.createElement("video",{className:"dbrScanner-video",playsInline:!0}))};r.a.render(a.a.createElement(l,null),document.getElementById("root"))},5:function(e,n,t){e.exports=t(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.818e9cc9.chunk.js.map