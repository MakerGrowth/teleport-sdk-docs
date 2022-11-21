"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3784],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(r),m=n,k=c["".concat(i,".").concat(m)]||c[m]||u[m]||l;return r?a.createElement(k,o(o({ref:t},d),{},{components:r})):a.createElement(k,o({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9304:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const l={},o=void 0,p={unversionedId:"sdk/teleport-sdk.signrelaypayload",id:"sdk/teleport-sdk.signrelaypayload",title:"teleport-sdk.signrelaypayload",description:"Home &gt; teleport-sdk &gt; signRelayPayload",source:"@site/docs/sdk/teleport-sdk.signrelaypayload.md",sourceDirName:"sdk",slug:"/sdk/teleport-sdk.signrelaypayload",permalink:"/teleport-sdk-docs/docs/sdk/teleport-sdk.signrelaypayload",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sdk/teleport-sdk.signrelaypayload.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"teleport-sdk.signrelayopts.teleportguid",permalink:"/teleport-sdk-docs/docs/sdk/teleport-sdk.signrelayopts.teleportguid"},next:{title:"teleport-sdk.sleep",permalink:"/teleport-sdk-docs/docs/sdk/teleport-sdk.sleep"}},i={},s=[{value:"signRelayPayload() function",id:"signrelaypayload-function",level:2},{value:"Parameters",id:"parameters",level:2}],d={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/teleport-sdk-docs/docs/sdk/"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/teleport-sdk-docs/docs/sdk/teleport-sdk"},"teleport-sdk")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/teleport-sdk-docs/docs/sdk/teleport-sdk.signrelaypayload"},"signRelayPayload")),(0,n.kt)("h2",{id:"signrelaypayload-function"},"signRelayPayload() function"),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare function signRelayPayload(receiver: Signer, teleportGUID: TeleportGUID, gasFee: BigNumberish, maxFeePercentage?: BigNumberish, expiry?: BigNumberish): Promise<Signature & {\n    payload: string;\n}>;\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"receiver"),(0,n.kt)("td",{parentName:"tr",align:null},"Signer"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"teleportGUID"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/teleport-sdk-docs/docs/sdk/teleport-sdk.teleportguid"},"TeleportGUID")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"gasFee"),(0,n.kt)("td",{parentName:"tr",align:null},"BigNumberish"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"maxFeePercentage"),(0,n.kt)("td",{parentName:"tr",align:null},"BigNumberish"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("i",null,"(Optional)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"expiry"),(0,n.kt)("td",{parentName:"tr",align:null},"BigNumberish"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("i",null,"(Optional)"))))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,"Promise","<","Signature ","&"," { payload: string; }",">"))}u.isMDXComponent=!0}}]);