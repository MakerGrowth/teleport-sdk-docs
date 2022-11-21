"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5046],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=i(r),k=a,m=u["".concat(p,".").concat(k)]||u[k]||d[k]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},999:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={},l=void 0,s={unversionedId:"sdk/teleport-sdk.signrelay",id:"sdk/teleport-sdk.signrelay",title:"teleport-sdk.signrelay",description:"Home &gt; teleport-sdk &gt; signRelay",source:"@site/docs/sdk/teleport-sdk.signrelay.md",sourceDirName:"sdk",slug:"/sdk/teleport-sdk.signrelay",permalink:"/docs/sdk/teleport-sdk.signrelay",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sdk/teleport-sdk.signrelay.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"teleport-sdk.signandcreaterelaytask",permalink:"/docs/sdk/teleport-sdk.signandcreaterelaytask"},next:{title:"teleport-sdk.signrelayopts.expiry",permalink:"/docs/sdk/teleport-sdk.signrelayopts.expiry"}},p={},i=[{value:"signRelay() function",id:"signrelay-function",level:2},{value:"Parameters",id:"parameters",level:2}],c={toc:i};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/sdk/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/sdk/teleport-sdk"},"teleport-sdk")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/sdk/teleport-sdk.signrelay"},"signRelay")),(0,a.kt)("h2",{id:"signrelay-function"},"signRelay() function"),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare function signRelay(opts: SignRelayOpts & DomainContext): ReturnType<TeleportBridge['signRelay']>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"opts"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/sdk/teleport-sdk.signrelayopts"},"SignRelayOpts")," ","&"," ",(0,a.kt)("a",{parentName:"td",href:"/docs/sdk/teleport-sdk.domaincontext"},"DomainContext")),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,"ReturnType","<",(0,a.kt)("a",{parentName:"p",href:"/docs/sdk/teleport-sdk.teleportbridge"},"TeleportBridge"),"[","'signRelay'","]",">"))}d.isMDXComponent=!0}}]);