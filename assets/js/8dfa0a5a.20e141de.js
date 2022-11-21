"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9589],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var i=n.createContext({}),p=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},s=function(t){var e=p(t.components);return n.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),d=p(r),m=a,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(k,l(l({ref:e},s),{},{components:r})):n.createElement(k,l({ref:e},s))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=d;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:a,l[1]=c;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},926:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},l=void 0,c={unversionedId:"sdk/teleport-sdk.canmintwithoutoracle",id:"sdk/teleport-sdk.canmintwithoutoracle",title:"teleport-sdk.canmintwithoutoracle",description:"Home &gt; teleport-sdk &gt; canMintWithoutOracle",source:"@site/docs/sdk/teleport-sdk.canmintwithoutoracle.md",sourceDirName:"sdk",slug:"/sdk/teleport-sdk.canmintwithoutoracle",permalink:"/docs/sdk/teleport-sdk.canmintwithoutoracle",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sdk/teleport-sdk.canmintwithoutoracle.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"teleport-sdk.call.tx",permalink:"/docs/sdk/teleport-sdk.call.tx"},next:{title:"teleport-sdk.decodeteleportdata",permalink:"/docs/sdk/teleport-sdk.decodeteleportdata"}},i={},p=[{value:"canMintWithoutOracle() function",id:"canmintwithoutoracle-function",level:2},{value:"Parameters",id:"parameters",level:2}],s={toc:p};function u(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/sdk/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/sdk/teleport-sdk"},"teleport-sdk")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/sdk/teleport-sdk.canmintwithoutoracle"},"canMintWithoutOracle")),(0,a.kt)("h2",{id:"canmintwithoutoracle-function"},"canMintWithoutOracle() function"),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare function canMintWithoutOracle(opts: {\n    txHash: string;\n} & DomainContext): ReturnType<TeleportBridge['canMintWithoutOracle']>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"opts"),(0,a.kt)("td",{parentName:"tr",align:null},"{ txHash: string; } ","&"," ",(0,a.kt)("a",{parentName:"td",href:"/docs/sdk/teleport-sdk.domaincontext"},"DomainContext")),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,"ReturnType","<",(0,a.kt)("a",{parentName:"p",href:"/docs/sdk/teleport-sdk.teleportbridge"},"TeleportBridge"),"[","'canMintWithoutOracle'","]",">"))}u.isMDXComponent=!0}}]);