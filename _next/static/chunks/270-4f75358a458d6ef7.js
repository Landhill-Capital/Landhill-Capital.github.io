"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[270],{8206:function(e,t,n){n.d(t,{Z:function(){return k}});var r=n(3366),o=n(7462),a=n(7294),i=n(512),l=n(4780),s=n(2101),c=n(948),u=n(8628),d=n(629),f=n(1588),h=n(4867);function getSnackbarContentUtilityClass(e){return(0,h.ZP)("MuiSnackbarContent",e)}(0,f.Z)("MuiSnackbarContent",["root","message","action"]);var p=n(5893);let g=["action","className","message","role"],useUtilityClasses=e=>{let{classes:t}=e;return(0,l.Z)({root:["root"],action:["action"],message:["message"]},getSnackbarContentUtilityClass,t)},m=(0,c.ZP)(d.Z,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>{let t="light"===e.palette.mode?.8:.98,n=(0,s._4)(e.palette.background.default,t);return(0,o.Z)({},e.typography.body2,{color:e.vars?e.vars.palette.SnackbarContent.color:e.palette.getContrastText(n),backgroundColor:e.vars?e.vars.palette.SnackbarContent.bg:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,flexGrow:1,[e.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),v=(0,c.ZP)("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0"}),Z=(0,c.ZP)("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),E=a.forwardRef(function(e,t){let n=(0,u.i)({props:e,name:"MuiSnackbarContent"}),{action:a,className:l,message:s,role:c="alert"}=n,d=(0,r.Z)(n,g),f=useUtilityClasses(n);return(0,p.jsxs)(m,(0,o.Z)({role:c,square:!0,elevation:6,className:(0,i.Z)(f.root,l),ownerState:n,ref:t},d,{children:[(0,p.jsx)(v,{className:f.message,ownerState:n,children:s}),a?(0,p.jsx)(Z,{className:f.action,ownerState:n,children:a}):null]}))});var k=E},2270:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(3366),o=n(7462),a=n(7294),i=n(4780),l=n(2963),s=n(6271),c=n(9948),u=n(9113),Snackbar_useSnackbar=function(e={}){let{autoHideDuration:t=null,disableWindowBlurListener:n=!1,onClose:r,open:i,resumeHideDuration:l}=e,d=(0,s.Z)();a.useEffect(()=>{if(i)return document.addEventListener("keydown",handleKeyDown),()=>{document.removeEventListener("keydown",handleKeyDown)};function handleKeyDown(e){e.defaultPrevented||"Escape"!==e.key&&"Esc"!==e.key||null==r||r(e,"escapeKeyDown")}},[i,r]);let f=(0,c.Z)((e,t)=>{null==r||r(e,t)}),h=(0,c.Z)(e=>{r&&null!=e&&d.start(e,()=>{f(null,"timeout")})});a.useEffect(()=>(i&&h(t),d.clear),[i,t,h,d]);let p=d.clear,g=a.useCallback(()=>{null!=t&&h(null!=l?l:.5*t)},[t,l,h]),createHandleBlur=e=>t=>{let n=e.onBlur;null==n||n(t),g()},createHandleFocus=e=>t=>{let n=e.onFocus;null==n||n(t),p()},createMouseEnter=e=>t=>{let n=e.onMouseEnter;null==n||n(t),p()},createMouseLeave=e=>t=>{let n=e.onMouseLeave;null==n||n(t),g()};return a.useEffect(()=>{if(!n&&i)return window.addEventListener("focus",g),window.addEventListener("blur",p),()=>{window.removeEventListener("focus",g),window.removeEventListener("blur",p)}},[n,i,g,p]),{getRootProps:(t={})=>{let n=(0,o.Z)({},(0,u.Z)(e),(0,u.Z)(t));return(0,o.Z)({role:"presentation"},t,n,{onBlur:createHandleBlur(n),onFocus:createHandleFocus(n),onMouseEnter:createMouseEnter(n),onMouseLeave:createMouseLeave(n)})},onClickAway:e=>{null==r||r(e,"clickaway")}}},d=n(3703),f=n(2690),h=n(5893);function mapEventPropToEvent(e){return e.substring(2).toLowerCase()}function ClickAwayListener(e){let{children:t,disableReactTree:n=!1,mouseEvent:r="onClick",onClickAway:o,touchEvent:i="onTouchEnd"}=e,l=a.useRef(!1),s=a.useRef(null),u=a.useRef(!1),p=a.useRef(!1);a.useEffect(()=>(setTimeout(()=>{u.current=!0},0),()=>{u.current=!1}),[]);let g=(0,d.Z)(t.ref,s),m=(0,c.Z)(e=>{let t=p.current;p.current=!1;let r=(0,f.Z)(s.current);if(u.current&&s.current&&(!("clientX"in e)||!(r.documentElement.clientWidth<e.clientX)&&!(r.documentElement.clientHeight<e.clientY))){if(l.current){l.current=!1;return}(e.composedPath?e.composedPath().indexOf(s.current)>-1:!r.documentElement.contains(e.target)||s.current.contains(e.target))||!n&&t||o(e)}}),createHandleSynthetic=e=>n=>{p.current=!0;let r=t.props[e];r&&r(n)},v={ref:g};return!1!==i&&(v[i]=createHandleSynthetic(i)),a.useEffect(()=>{if(!1!==i){let e=mapEventPropToEvent(i),t=(0,f.Z)(s.current),handleTouchMove=()=>{l.current=!0};return t.addEventListener(e,m),t.addEventListener("touchmove",handleTouchMove),()=>{t.removeEventListener(e,m),t.removeEventListener("touchmove",handleTouchMove)}}},[m,i]),!1!==r&&(v[r]=createHandleSynthetic(r)),a.useEffect(()=>{if(!1!==r){let e=mapEventPropToEvent(r),t=(0,f.Z)(s.current);return t.addEventListener(e,m),()=>{t.removeEventListener(e,m)}}},[m,r]),(0,h.jsx)(a.Fragment,{children:a.cloneElement(t,v)})}var p=n(948),g=n(2734),m=n(8628),v=n(8216),Z=n(6514),E=n(8206),k=n(1588),b=n(4867);function getSnackbarUtilityClass(e){return(0,b.ZP)("MuiSnackbar",e)}(0,k.Z)("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);let C=["onEnter","onExited"],y=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],useUtilityClasses=e=>{let{classes:t,anchorOrigin:n}=e,r={root:["root",`anchorOrigin${(0,v.Z)(n.vertical)}${(0,v.Z)(n.horizontal)}`]};return(0,i.Z)(r,getSnackbarUtilityClass,t)},w=(0,p.ZP)("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[`anchorOrigin${(0,v.Z)(n.anchorOrigin.vertical)}${(0,v.Z)(n.anchorOrigin.horizontal)}`]]}})(({theme:e,ownerState:t})=>(0,o.Z)({zIndex:(e.vars||e).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},"top"===t.anchorOrigin.vertical?{top:8}:{bottom:8},"left"===t.anchorOrigin.horizontal&&{justifyContent:"flex-start"},"right"===t.anchorOrigin.horizontal&&{justifyContent:"flex-end"},{[e.breakpoints.up("sm")]:(0,o.Z)({},"top"===t.anchorOrigin.vertical?{top:24}:{bottom:24},"center"===t.anchorOrigin.horizontal&&{left:"50%",right:"auto",transform:"translateX(-50%)"},"left"===t.anchorOrigin.horizontal&&{left:24,right:"auto"},"right"===t.anchorOrigin.horizontal&&{right:24,left:"auto"})})),S=a.forwardRef(function(e,t){let n=(0,m.i)({props:e,name:"MuiSnackbar"}),i=(0,g.Z)(),s={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{action:c,anchorOrigin:{vertical:u,horizontal:d}={vertical:"bottom",horizontal:"left"},autoHideDuration:f=null,children:p,className:v,ClickAwayListenerProps:k,ContentProps:b,disableWindowBlurListener:S=!1,message:x,open:L,TransitionComponent:M=Z.Z,transitionDuration:O=s,TransitionProps:{onEnter:P,onExited:R}={}}=n,T=(0,r.Z)(n.TransitionProps,C),j=(0,r.Z)(n,y),z=(0,o.Z)({},n,{anchorOrigin:{vertical:u,horizontal:d},autoHideDuration:f,disableWindowBlurListener:S,TransitionComponent:M,transitionDuration:O}),H=useUtilityClasses(z),{getRootProps:B,onClickAway:N}=Snackbar_useSnackbar((0,o.Z)({},z)),[U,D]=a.useState(!0),F=(0,l.Z)({elementType:w,getSlotProps:B,externalForwardedProps:j,ownerState:z,additionalProps:{ref:t},className:[H.root,v]});return!L&&U?null:(0,h.jsx)(ClickAwayListener,(0,o.Z)({onClickAway:N},k,{children:(0,h.jsx)(w,(0,o.Z)({},F,{children:(0,h.jsx)(M,(0,o.Z)({appear:!0,in:L,timeout:O,direction:"top"===u?"down":"up",onEnter:(e,t)=>{D(!1),P&&P(e,t)},onExited:e=>{D(!0),R&&R(e)}},T,{children:p||(0,h.jsx)(E.Z,(0,o.Z)({message:x,action:c},b))}))}))}))});var x=S}}]);