"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[72],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>d});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),p=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=p(r),d=n,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(k,l(l({ref:e},c),{},{components:r})):a.createElement(k,l({ref:e},c))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7285:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={},l=void 0,i={unversionedId:"sdk/teleport-sdk.waitforrelaytaskconfirmation",id:"sdk/teleport-sdk.waitforrelaytaskconfirmation",title:"teleport-sdk.waitforrelaytaskconfirmation",description:"Home &gt; teleport-sdk &gt; waitForRelayTaskConfirmation",source:"@site/docs/sdk/teleport-sdk.waitforrelaytaskconfirmation.md",sourceDirName:"sdk",slug:"/sdk/teleport-sdk.waitforrelaytaskconfirmation",permalink:"/docs/sdk/teleport-sdk.waitforrelaytaskconfirmation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sdk/teleport-sdk.waitforrelaytaskconfirmation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"teleport-sdk.waitforrelaytask",permalink:"/docs/sdk/teleport-sdk.waitforrelaytask"},next:{title:"teleport-sdk.waitfortxreceipt",permalink:"/docs/sdk/teleport-sdk.waitfortxreceipt"}},s={},p=[{value:"waitForRelayTaskConfirmation() function",id:"waitforrelaytaskconfirmation-function",level:2},{value:"Parameters",id:"parameters",level:2}],c={toc:p};function u(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sdk/"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/sdk/teleport-sdk"},"teleport-sdk")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/sdk/teleport-sdk.waitforrelaytaskconfirmation"},"waitForRelayTaskConfirmation")),(0,n.kt)("h2",{id:"waitforrelaytaskconfirmation-function"},"waitForRelayTaskConfirmation() function"),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare function waitForRelayTaskConfirmation(taskId: string, pollingIntervalMs?: number, timeoutMs?: number): Promise<string>;\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"taskId"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pollingIntervalMs"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("i",null,"(Optional)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeoutMs"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("i",null,"(Optional)"))))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,"Promise","<","string",">"))}u.isMDXComponent=!0}}]);