(this["webpackJsonpsimulation-app-public"]=this["webpackJsonpsimulation-app-public"]||[]).push([[0],{11:function(e,t,n){},29:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(22),o=n.n(r),a=(n(29),n.p,n(11),n(4)),s=n.n(a),l=n(10),u=n.n(l),h=n(23),d=n(3),j=n(24),p=n(1);var b=function(){var e="https://shrouded-hamlet-51189.herokuapp.com",t=Array.from(Array(100).keys()),n=Object(c.useState)(!1),i=Object(d.a)(n,2),r=i[0],o=i[1],a=Object(c.useState)([]),l=Object(d.a)(a,2),b=l[0],f=l[1],O=Object(c.useState)([]),v=Object(d.a)(O,2),x=v[0],g=v[1],m=Object(c.useState)("0.0"),k=Object(d.a)(m,2),S=k[0],C=k[1];function w(){return y.apply(this,arguments)}function y(){return(y=Object(h.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get(e+"/pins").then((function(e){return g(e.data)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(c.useEffect)((function(){w();var t=null;return r?t=setInterval((function(){return t=S,s.a.patch(e+"/sensors/heightSensor",{sensorValue:t}).catch((function(e){return console.log("Error: ",e)})),void b.push(t);var t}),1e3):clearInterval(t),function(){return clearInterval(t)}}),[r,S]),Object(p.jsxs)("div",{class:"main",children:[Object(p.jsxs)("div",{class:"half",children:[Object(p.jsx)("h1",{children:"Pin simulation"}),Object(p.jsxs)("p",{children:['The boolean value of the pin is rendered from the api (via GET call). If the value happens to be "true", then we can see the pin is ',Object(p.jsx)("b",{children:"On"})," and vice versa. When the button is clicked, an api call is made to update the value to an opposite boolean value."]}),x.map((function(t){return Object(p.jsx)("ul",{class:"pinDisplay",children:Object(p.jsxs)("ul",{children:["Pin ",t.pinName," is",t.pinValue?Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"On"}),Object(p.jsx)("button",{class:"off",onClick:function(){return n=t.pinName,s.a.patch(e+"/pins/"+n,{pinValue:!1}).catch((function(e){return console.log("Error: ",e)})),void w();var n},children:"Double click to Turn off"})]}):Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Off"}),Object(p.jsx)("button",{class:"on",onClick:function(){return n=t.pinName,s.a.patch(e+"/pins/"+n,{pinValue:!0}).catch((function(e){return console.log("Error: ",e)})),void w();var n},children:"Double click to Turn on"})]})]},t.id)})}))]}),Object(p.jsxs)("div",{class:"half",children:[Object(p.jsx)("h1",{children:"Sensor simulation"}),Object(p.jsx)("p",{children:"Instead of a temperature sensor, the following simulation will measure the position of the y coordinate of the mouse at a specified field (below). Clicking the button will trigger a panel to open up - every second the y coordinate of the cursor with regards to the panel is collected and the sensor value is changed in the API (via a PATCH call). The process will last from clicking 'start' to clicking 'stop'. A CSV file containing the values can then be downloaded."}),Object(p.jsx)("button",{onClick:function(){o(!0)},children:"Start"}),Object(p.jsx)("button",{onClick:function(){return f([]),void o(!1)},children:"Stop"}),Object(p.jsx)(j.CSVLink,{data:b.toString(),children:"Download the changes"}),Object(p.jsxs)("p",{children:["Current sensor value: ",S]}),Object(p.jsxs)("p",{children:["Current collected information ",b.toString()]}),t.map((function(e){return Object(p.jsx)("div",{style:{backgroundColor:"rgba(200, 0, 0,"+parseFloat((e/100).toFixed(2)).toString()+")",height:"2px"},class:"strip",onMouseOver:function(){return t=parseFloat((e/100).toFixed(2)),void C(t);var t},children:e%10==0?Object(p.jsxs)("small",{children:["0.",e]}):null})}))]})]})};var f=function(){return Object(p.jsx)("div",{class:"main",children:Object(p.jsx)(b,{})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),r(e),o(e)}))},v=n(9);o.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(v.a,{children:Object(p.jsx)(f,{})})}),document.getElementById("root")),O()}},[[56,1,2]]]);
//# sourceMappingURL=main.6b931ac0.chunk.js.map