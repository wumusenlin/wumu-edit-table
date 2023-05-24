"use strict";(self.webpackChunkwumu_edit_table=self.webpackChunkwumu_edit_table||[]).push([[433],{99895:function(pt,Z,j){j.r(Z),j.d(Z,{default:function(){return mt}});var et=j(27424),m=j.n(et),f=j(67294),nt=j(42122),x=j.n(nt),o=j(85893);function at(e){var t=e.columns,n=e.headerHeight,r=t.map(function(d,i){var a=d.title,l=d.dataIndex,u=d.align,h=u===void 0?"left":u,C={textAlign:h,borderRight:"1px solid #ccc"},v="".concat(l,"-").concat(i);return(0,o.jsxs)("th",{className:"table-th",style:C,children:[i,a]},v)}),s={height:n};return(0,o.jsx)("thead",{children:(0,o.jsx)("tr",{style:s,className:"table-header",children:r})})}var ot=at;function z(e){return Array.isArray(e)?e:[]}function St(e){return e!=null&&e!==""}var dt=function(t){var n=t.initValue,r=t.inputChange,s=r===void 0?function(){}:r,d=t.onEdit,i=d===void 0?function(){}:d;return(0,o.jsx)("input",{className:"wumu-input",defaultValue:n,onChange:function(l){s(l.target.value)},autoFocus:!0,onBlur:function(){return i("")}})},rt=dt;function it(e){var t=e.columns,n=e.record,r=e.rowHeight,s=e.editId,d=e.onEdit,i=d===void 0?function(){}:d,a=e.handleChange,l=a===void 0?function(){}:a,u=n.rowKey;return(0,o.jsx)("tr",{className:"table-tr",children:t.map(function(h,C){var v=h.dataIndex,p="".concat(C,"-").concat(v),c="".concat(u,"-").concat(v),g=c===s,B={height:r,boxShadow:g?"inset 0px 0px 0px 1px var(--primary-color)":"",padding:g?" 0 8px":"0 12px"},S=function(I){l(I,{rowIndex:u,dataIndex:v,record:n,cellId:c})},E=n[v],y=g?(0,o.jsx)(rt,{initValue:E,inputChange:S,onEdit:i}):E;return(0,o.jsx)("td",{id:c,style:B,className:"table-td",onClick:function(){return typeof i=="function"?i(c):void 0},children:y},p)})})}var lt=it;function ut(e){var t=e.dataSource,n=e.columns,r=e.rowHeight,s=r===void 0?40:r,d=e.onEdit,i=e.editId,a=e.handleChange,l=a===void 0?function(){}:a,u=e.notFoundContent,h=z(t).length===0;return h?u:(0,o.jsx)("tbody",{className:"table-tbody",children:z(t).map(function(C){return lt({record:C,columns:n,rowHeight:s,onEdit:d,editId:i,handleChange:l})})})}var st=ut,ct=function(t,n){var r,s=n.overscan,d=s===void 0?0:s,i=n.itemHeight,a=i===void 0?40:i,l=n.maxHeight,u=l===void 0?400:l,h=n.onScrolled,C=h===void 0?function(){}:h,v=n.wrapperPropsStyle,p=v===void 0?{}:v,c=(0,f.useRef)(),g=(0,f.useState)(0),B=m()(g,2),S=B[0],E=B[1],y=(0,f.useState)((t==null?void 0:t.length)*a),_=m()(y,2),I=_[0],P=_[1],K=(0,f.useState)(Math.ceil(u/a)),M=m()(K,1),R=M[0],W=(0,f.useState)({offsetWidth:0,clientWidth:0}),L=m()(W,2),G=L[0],k=L[1],H=S*a,O=function(D){var w=D.target,F=w.scrollTop,N=F===void 0?0:F,V=w.scrollLeft,$=V===void 0?0:V;C({scrollLeft:$}),k(function(Y){return x()(x()({},Y),{},{scrollTop:N,scrollLeft:$})});var A=d>0?Math.floor(N/a)-Math.ceil(d/2):Math.floor(N/a);E(A>0?A:0)},b={style:x()(x()({},p),{},{width:"100%",height:I,transform:"translateZ(0)",paddingTop:H})},U={onScroll:O,ref:function(D){return c.current=D},style:{overflowY:"overlay",overflowX:"auto",maxHeight:u,backgroundColor:"#fff",overflow:"auto"}};(0,f.useEffect)(function(){P((t==null?void 0:t.length)*a)},[t==null?void 0:t.length]),(0,f.useEffect)(function(){c!=null&&c.current&&k({offsetWidth:c.current.offsetWidth,clientWidth:c.current.clientWidth})},[c==null?void 0:c.current]);var T=t.slice(S,S+R+d);return{list:T,wrapperProps:b,containerProps:U,topHeight:H,bottomHeight:I-H-((r=T.length)!==null&&r!==void 0?r:0)*a,containerInfo:G}},ht=ct;function J(e){var t=e.columns,n=e.autoCol,r=e.scrollBar,s=n.autoWidthColIndex,d=n.autoColWidth,i=r?t.concat([{width:r}]):t;return(0,o.jsx)("colgroup",{children:i.map(function(a,l){var u=a.width,h="col-".concat(l);return s===l?(0,o.jsx)("col",{style:{width:d!=null?d:120}},h):(0,o.jsx)("col",{style:{width:u!=null?u:120}},h)})})}function ft(e){var t=e.columns,n=e.clientWidth,r=n===void 0?0:n,s=null;t.forEach(function(i,a){var l=i.fixed;l!=="right"&&(s=a)});var d=r-1-t.reduce(function(i,a,l){var u;return i+(l===s?0:(u=a.width)!==null&&u!==void 0?u:120)},0);return{autoWidthColIndex:s,autoColWidth:d}}function gt(e){return e.map(function(t,n){return x()(x()({},t),{},{rowKey:n})})}function Q(){return(0,o.jsx)("div",{className:"wumu-deafult-not-found-content",children:"\u6682\u65E0\u6570\u636E~"})}function q(e){var t=e.containerInfo,n=e.children,r=n===void 0?Q():n,s={width:t.offsetWidth,marginLeft:t.scrollLeft};return(0,o.jsx)("div",{children:(0,o.jsx)("div",{style:s,children:r})})}function vt(){return 16}var Ct=function(t){var n=t.columns,r=t.dataSource,s=t.editId,d=t.onEdit,i=d===void 0?function(){}:d,a=t.rowHeight,l=a===void 0?40:a,u=t.maxHeight,h=u===void 0?400:u,C=t.headerHeight,v=C===void 0?55:C,p=t.onChange,c=p===void 0?function(){}:p,g=t.hiddenHerder,B=g===void 0?!1:g,S=t.notFoundContent,E=S===void 0?null:S,y=(0,f.useRef)(null),_=(0,f.useState)([]),I=m()(_,2),P=I[0],K=I[1],M=(0,f.useState)([]),R=m()(M,2),W=R[0],L=R[1],G=(0,f.useState)({autoWidthColIndex:null,autoColWidth:120}),k=m()(G,2),H=k[0],O=k[1],b=ht(P,{itemHeight:l,maxHeight:h,overscan:0,onScrolled:function($){var A=$.scrollLeft;y.current&&(y.current.scrollLeft=A),i("")},wrapperPropsStyle:{borderSpacing:0,boxShadow:"inset 0px 0px 10px 0px #dadada"}}),U=b.list,T=b.wrapperProps,X=b.containerProps,D=b.bottomHeight,w=b.containerInfo,F=function($,A){var Y=A.rowIndex,jt=A.dataIndex,tt=P;tt[Y][jt]=$,c(tt,{})};(0,f.useEffect)(function(){console.log("process.env",{NODE_ENV:"production",PUBLIC_PATH:"/wumu-edit-table/"}),K(gt(r))},[r.length]),(0,f.useEffect)(function(){L(n)},[n]),(0,f.useLayoutEffect)(function(){w.clientWidth&&O(ft({columns:W,clientWidth:w.clientWidth}))},[w]);var N=B?null:(0,o.jsx)("div",{className:"wumu-table-header",ref:y,children:(0,o.jsxs)("table",{children:[J({columns:W,autoCol:H,scrollBar:vt()}),ot({columns:W,headerHeight:v})]})});return(0,o.jsxs)("div",{className:"wumu-table",children:[N,(0,o.jsx)("div",x()(x()({className:"wumu-table-body"},X),{},{children:(0,o.jsxs)("table",x()(x()({},T),{},{children:[J({columns:n,autoCol:H}),st({dataSource:U,columns:W,rowHeight:l,onEdit:i,editId:s,handleChange:F,notFoundContent:q(E?{containerInfo:w,children:E}:{containerInfo:w,children:Q()}),autoCol:H}),(0,o.jsx)("div",{style:{height:D}})]}))}))]})},xt=Ct,mt=function(){var e={height:32,color:"var(--primary-color)",marginRight:32},t=(0,f.useState)(""),n=m()(t,2),r=n[0],s=n[1],d=[{title:"A",dataIndex:"A",width:300},{title:"B",dataIndex:"B"},{title:"C",dataIndex:"C",width:300},{title:"D",dataIndex:"D"},{title:"E",dataIndex:"E",width:380},{title:"F",dataIndex:"F",width:300}],i=[{A:"\u5E72\u561B",B:"\u54CE\u54DF",C:"haha",D:"\u5676\u901F\u5EA6\u8FDB\u6765\u770B\u54C8\u6D41\u53E3\u6C34\u7684\u4EFD",E:"guaiosdjlkgjasdgasdg"},{A:"fasdfasdf",B:"asdfasd",C:"ghjfgh"},{A:"adsfasdf",B:"fasdf",C:"rsfgsdf"},{A:"khjkghj",B:"\u54CE\u54DF",C:"8iuk",D:"\u5676\u901F\u5EA6\u8FDB\u6765\u770B\u54C8\u6D41\u53E3\u6C34\u7684\u4EFD",E:"guaiosdjlkgjasdgasdg"},{A:"wts",B:"vbn",C:"fhj"},{A:"fhjf",B:"\u54CE\u54DF",C:"haha",D:"\u5676\u901F\u5EA6\u8FDB\u6765\u770B\u54C8\u6D41\u53E3\u6C34\u7684\u4EFD",E:"guaiosdjlkgjasdgasdg"},{A:"\u5E72\u561B",B:"shshsdfgsdfgsdfgsdfgsdfgsdfg",C:"khjkghjk"},{A:"adsfads",B:"ghdfgjgh",C:"adsfasdfad"},{A:"adsfads",B:"ghdfgjgh",C:"adsfasdfad",D:"\u5676\u901F\u5EA6\u8FDB\u6765\u770B\u54C8\u6D41\u53E3\u6C34\u7684\u4EFD",E:"guaiosdjlkgjasdgasdg"},{A:"adsfads",B:"ghdfgjgh",C:"adsfasdfad",D:"\u5676\u901F\u5EA6\u8FDB\u6765\u770B\u54C8\u6D41\u53E3\u6C34\u7684\u4EFD",E:"guaiosdjlkgjasdgasdg"},{A:"fhjf",B:"\u54CE\u54DF",C:"haha",D:"\u5676\u901F\u5EA6\u8FDB\u6765\u770B\u54C8\u6D41\u53E3\u6C34\u7684\u4EFD",E:"guaiosdjlkgjasdgasdg"},{A:"adsfads",B:"ghdfgjgh",C:"adsfasdfad",D:"\u5676\u901F\u5EA6\u8FDB\u6765\u770B\u54C8\u6D41\u53E3\u6C34\u7684\u4EFD",E:"guaiosdjlkgjasdgasdg"},{A:"adsfads",B:"ghdfgjgh",C:"adsfasdfad",D:"\u5676\u901F\u5EA6\u8FDB\u6765\u770B\u54C8\u6D41\u53E3\u6C34\u7684\u4EFD",E:"guaiosdjlkgjasdgasdg"},{A:"fhjf",B:"\u54CE\u54DF",C:"haha",D:"\u5676\u901F\u5EA6\u8FDB\u6765\u770B\u54C8\u6D41\u53E3\u6C34\u7684\u4EFD",E:"guaiosdjlkgjasdgasdg"},{A:"adsfads",B:"ghdfgjgh",C:"adsfasdfad",D:"\u5676\u901F\u5EA6\u8FDB\u6765\u770B\u54C8\u6D41\u53E3\u6C34\u7684\u4EFD",E:"guaiosdjlkgjasdgasdg"},{A:"adsfads",B:"ghdfgjgh",C:"adsfasdfad"},{A:"fhjf",B:"\u54CE\u54DF",C:"haha",D:"\u5676\u901F\u5EA6\u8FDB\u6765\u770B\u54C8\u6D41\u53E3\u6C34\u7684\u4EFD",E:"guaiosdjlkgjasdgasdg"}],a=(0,f.useState)(i),l=m()(a,2),u=l[0],h=l[1],C=function(){h(function(g){return g.concat([{}])})},v=function(){h(function(g){return g.slice(0,-1)})},p=function(){h([])};return(0,o.jsxs)("div",{className:"wumu-table",children:[(0,o.jsxs)("div",{style:{display:"flex",marginBottom:"16px"},children:[(0,o.jsx)("button",{onClick:C,type:"button",style:e,children:"\u65B0\u589E\u4E00\u884C\u5230\u6700\u540E"}),(0,o.jsx)("button",{onClick:v,type:"button",style:e,children:"\u5220\u9664\u6700\u540E\u4E00\u884C"}),(0,o.jsx)("button",{onClick:p,type:"button",style:e,children:"\u5220\u9664\u6240\u6709\u6570\u636E"})]}),(0,o.jsx)(xt,{editId:r,onEdit:s,columns:d,dataSource:u,maxHeight:320,onChange:function(g){return h(g)},rowHeight:55})]})}}}]);
