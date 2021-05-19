(this["webpackJsonpdrop-crop-save-image"]=this["webpackJsonpdrop-crop-save-image"]||[]).push([[0],{52:function(e,n,t){},53:function(e,n,t){},71:function(e,n,t){"use strict";t.r(n);var a,r,c,i=t(0),o=t.n(i),s=t(18),l=t.n(s),d=(t(52),t(53),t(15)),j=t(32),u=t(43),b=t(41),h=t.n(b),p=t(8),g=t(9),O=t(86),f=g.a.div(a||(a=Object(p.a)(["\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),x=g.a.div(r||(r=Object(p.a)(["\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px;\n    border-width: 5px;\n    border-radius: 2px;\n    border-color: ",";\n    border-style: dashed;\n    background-color: #fafafa;\n    color: #bdbdbd;\n    outline: none;\n    transition: border .24s ease-in-out;\n    width: 50vw;\n    margin: 10px;\n"])),(function(e){return v(e)})),m=Object(g.a)(O.a)(c||(c=Object(p.a)(["\n    && {\n        margin-top: 10px;\n    }\n\n"]))),v=function(e){return e.isDragAccept?"rgba(116,103,239, 0.15)":e.isDragReject?"#ff1744":e.isDragActive?"#2196f3":"#eeeeee"},C=t(2),w=function(e){var n=e.setImg,t=e.handlerStep,a=e.handlerCancel,r=Object(i.useCallback)((function(e){var a=e[0];n(a),t(3)}),[n,t]),c=Object(u.a)({onDrop:r}),o=c.getRootProps,s=c.getInputProps,l=c.isDragActive,d=c.isDragAccept,b=c.isDragReject;return Object(C.jsxs)(f,{children:[Object(C.jsxs)(x,Object(j.a)(Object(j.a)({},o({isDragActive:l,isDragAccept:d,isDragReject:b})),{},{children:[Object(C.jsx)("input",Object(j.a)({},s())),Object(C.jsx)(h.a,{style:{fontSize:80}}),l?Object(C.jsx)("p",{children:"Drop the files here ..."}):Object(C.jsxs)("p",{children:["Drag 'n' drop some files here, or ",Object(C.jsx)("u",{children:"click"})," to select files"]})]})),Object(C.jsx)(m,{onClick:a,variant:"contained",color:"primary",children:"Cancel"})]})},D=t(20),y=t.n(D),k=t(29),I=t(44),S=function(e){return new Promise((function(n,t){var a=new Image;a.addEventListener("load",(function(){return n(a)})),a.addEventListener("error",(function(e){return t(e)})),a.setAttribute("crossOrigin","anonymous"),a.src=e}))};function A(e){return e*Math.PI/180}function L(e,n){return R.apply(this,arguments)}function R(){return(R=Object(k.a)(y.a.mark((function e(n,t){var a,r,c,i,o,s,l,d=arguments;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=d.length>2&&void 0!==d[2]?d[2]:0,e.next=3,S(n);case 3:return r=e.sent,c=document.createElement("canvas"),i=c.getContext("2d"),o=Math.max(r.width,r.height),s=o/2*Math.sqrt(2)*2,c.width=s,c.height=s,i.translate(s/2,s/2),i.rotate(A(a)),i.translate(-s/2,-s/2),i.drawImage(r,s/2-.5*r.width,s/2-.5*r.height),l=i.getImageData(0,0,s,s),c.width=t.width,c.height=t.height,i.putImageData(l,Math.round(0-s/2+.5*r.width-t.x),Math.round(0-s/2+.5*r.height-t.y)),e.abrupt("return",c.toDataURL("image/jpeg"));case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E,M,P,F,z,Z,U,q,B,J,T,N,G=t(87),H=g.a.div(E||(E=Object(p.a)(["\n    margin: 50px 50px;\n"]))),K=g.a.div(M||(M=Object(p.a)(["\n    position: relative;\n    width: 100%;\n    height: 300px;\n    background: #333;\n"]))),Q=g.a.div(P||(P=Object(p.a)(["\n    padding: 16:\n    display: flex;\n    flexDirection: column;\n    alignItems: center;\n    flex: 1;\n"]))),V=Object(g.a)(G.a)(F||(F=Object(p.a)(["\n    && {\n    padding: 22px 0px;\n    marginLeft: 16;\n    }\n"]))),W=g.a.div(z||(z=Object(p.a)(["\n    \n"]))),X=Object(g.a)(O.a)(Z||(Z=Object(p.a)(["\n    && {\n        margin-left: 1.5em;\n        width: 100px;\n    }\n"]))),Y=Object(g.a)(O.a)(U||(U=Object(p.a)(["\n    && {\n        background: gray;\n        margin-right: 1.5em;\n        width: 100px;\n    }\n"]))),$=function(e){var n=e.image,t=e.handlerCancel,a=e.setCroppedImage,r=Object(i.useState)({x:0,y:0}),c=Object(d.a)(r,2),o=c[0],s=c[1],l=Object(i.useState)(1),j=Object(d.a)(l,2),u=j[0],b=j[1],h=Object(i.useState)(""),p=Object(d.a)(h,2),g=p[0],O=p[1],f=Object(i.useState)(null),x=Object(d.a)(f,2),m=x[0],v=x[1],w=Object(i.useCallback)((function(e,n){v(n),console.log(e,n)}),[]),D=Object(i.useCallback)(Object(k.a)(y.a.mark((function e(){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L(g,m);case 3:n=e.sent,a(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[g,m,a]);return Object(i.useEffect)((function(){!function(){var e=new FileReader;e.onabort=function(){return console.log("file reading was aborted")},e.onerror=function(){return console.log("file reading has failed")},e.readAsDataURL(n),e.onload=function(){return O(e.result)}}()}),[n]),Object(C.jsxs)(H,{children:[Object(C.jsx)(K,{children:Object(C.jsx)(I.a,{image:g,crop:o,zoom:u,aspect:4/3,onCropChange:s,onCropComplete:w,onZoomChange:b})}),Object(C.jsxs)(Q,{children:[Object(C.jsx)("h3",{children:"Zoom"}),Object(C.jsx)(V,{value:u,min:1,max:3,step:.1,"aria-labelledby":"Zoom",onChange:function(e,n){return b(n)}})]}),Object(C.jsxs)(W,{children:[Object(C.jsx)(Y,{onClick:t,variant:"contained",color:"primary",children:"Cancel"}),Object(C.jsx)(X,{onClick:D,variant:"contained",color:"primary",children:"Done"})]})]})},_=g.a.div(q||(q=Object(p.a)(["\n\n"]))),ee=g.a.div(B||(B=Object(p.a)(["\n\n"]))),ne=g.a.div(J||(J=Object(p.a)(["\n\n"]))),te=g.a.div(T||(T=Object(p.a)(["\n\n"]))),ae=Object(g.a)(O.a)(N||(N=Object(p.a)(["\n    && {\n        margin-top: 1.5em;\n    }\n"]))),re=function(e){e.logo;var n=Object(i.useState)(null),t=Object(d.a)(n,2),a=t[0],r=t[1],c=Object(i.useState)(1),o=Object(d.a)(c,2),s=o[0],l=o[1],j=Object(i.useState)(null),u=Object(d.a)(j,2),b=u[0],h=u[1],p=function(e){return l(e)},g=function(){r(null),p(1)};return Object(i.useEffect)((function(){console.log("base64 CroppedImage: ",b)}),[b]),Object(C.jsxs)(_,{children:[1===s&&Object(C.jsx)(ee,{children:Object(C.jsx)(ae,{onClick:function(){p(2)},variant:"contained",color:"primary",children:"Upload"})}),2===s&&Object(C.jsxs)(ne,{children:[Object(C.jsx)("h2",{children:"Dropzone"}),Object(C.jsx)(w,{setImg:r,handlerStep:p,handlerCancel:g})]}),3===s&&a&&Object(C.jsxs)(te,{children:[Object(C.jsx)("h2",{children:"CropZone"}),Object(C.jsx)($,{image:a,handlerCancel:g,setCroppedImage:h})]})]})};var ce=function(){return Object(C.jsx)("div",{className:"App",children:Object(C.jsx)(re,{logo:"https://res.cloudinary.com/blahbox/image/upload/v1621289402/fbuvsjx5lg2yqd1xd0zl.jpg"})})},ie=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,89)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),a(e),r(e),c(e),i(e)}))};l.a.render(Object(C.jsx)(o.a.StrictMode,{children:Object(C.jsx)(ce,{})}),document.getElementById("root")),ie()}},[[71,1,2]]]);
//# sourceMappingURL=main.ff7a7ed2.chunk.js.map