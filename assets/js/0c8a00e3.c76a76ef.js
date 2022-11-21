"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7744],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),k=p(r),u=n,m=k["".concat(i,".").concat(u)]||k[u]||c[u]||o;return r?a.createElement(m,l(l({ref:t},d),{},{components:r})):a.createElement(m,l({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=k;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},1661:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={},l=void 0,s={unversionedId:"sdk/teleport-sdk.waitforrelaytask",id:"sdk/teleport-sdk.waitforrelaytask",title:"teleport-sdk.waitforrelaytask",description:"Home &gt; teleport-sdk &gt; waitForRelayTask",source:"@site/docs/sdk/teleport-sdk.waitforrelaytask.md",sourceDirName:"sdk",slug:"/sdk/teleport-sdk.waitforrelaytask",permalink:"/teleport-sdk-docs/docs/sdk/teleport-sdk.waitforrelaytask",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sdk/teleport-sdk.waitforrelaytask.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"teleport-sdk.waitformintopts.timeoutms",permalink:"/teleport-sdk-docs/docs/sdk/teleport-sdk.waitformintopts.timeoutms"},next:{title:"teleport-sdk.waitforrelaytaskconfirmation",permalink:"/teleport-sdk-docs/docs/sdk/teleport-sdk.waitforrelaytaskconfirmation"}},i={},p=[{value:"waitForRelayTask() function",id:"waitforrelaytask-function",level:2},{value:"Parameters",id:"parameters",level:2}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/teleport-sdk-docs/docs/sdk/"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/teleport-sdk-docs/docs/sdk/teleport-sdk"},"teleport-sdk")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/teleport-sdk-docs/docs/sdk/teleport-sdk.waitforrelaytask"},"waitForRelayTask")),(0,n.kt)("h2",{id:"waitforrelaytask-function"},"waitForRelayTask() function"),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare function waitForRelayTask(opts: {\n    taskId: string;\n    pollingIntervalMs?: number;\n    timeoutMs?: number;\n} & DomainContext): ReturnType<TeleportBridge['waitForRelayTask']>;\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"opts"),(0,n.kt)("td",{parentName:"tr",align:null},"{ taskId: string; pollingIntervalMs?: number; timeoutMs?: number; } ","&"," ",(0,n.kt)("a",{parentName:"td",href:"/teleport-sdk-docs/docs/sdk/teleport-sdk.domaincontext"},"DomainContext")),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,"ReturnType","<",(0,n.kt)("a",{parentName:"p",href:"/teleport-sdk-docs/docs/sdk/teleport-sdk.teleportbridge"},"TeleportBridge"),"[","'waitForRelayTask'","]",">"))}c.isMDXComponent=!0}}]);