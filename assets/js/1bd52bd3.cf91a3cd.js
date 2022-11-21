"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9010],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,g=u["".concat(p,".").concat(m)]||u[m]||c[m]||l;return r?a.createElement(g,o(o({ref:t},d),{},{components:r})):a.createElement(g,o({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9937:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const l={},o=void 0,i={unversionedId:"sdk/teleport-sdk.teleportbridge.getrelayfee",id:"sdk/teleport-sdk.teleportbridge.getrelayfee",title:"teleport-sdk.teleportbridge.getrelayfee",description:"Home &gt; teleport-sdk &gt; TeleportBridge &gt; getRelayFee",source:"@site/docs/sdk/teleport-sdk.teleportbridge.getrelayfee.md",sourceDirName:"sdk",slug:"/sdk/teleport-sdk.teleportbridge.getrelayfee",permalink:"/docs/sdk/teleport-sdk.teleportbridge.getrelayfee",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sdk/teleport-sdk.teleportbridge.getrelayfee.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"teleport-sdk.teleportbridge.getdstbalance",permalink:"/docs/sdk/teleport-sdk.teleportbridge.getdstbalance"},next:{title:"teleport-sdk.teleportbridge.getsrcbalance",permalink:"/docs/sdk/teleport-sdk.teleportbridge.getsrcbalance"}},p={},s=[{value:"TeleportBridge.getRelayFee() method",id:"teleportbridgegetrelayfee-method",level:2},{value:"Parameters",id:"parameters",level:2}],d={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sdk/"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/sdk/teleport-sdk"},"teleport-sdk")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/sdk/teleport-sdk.teleportbridge"},"TeleportBridge")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/sdk/teleport-sdk.teleportbridge.getrelayfee"},"getRelayFee")),(0,n.kt)("h2",{id:"teleportbridgegetrelayfee-method"},"TeleportBridge.getRelayFee() method"),(0,n.kt)("p",null,"Get the relayer fee for a certain transaction"),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"getRelayFee(isHighPriority?: boolean, relayParams?: RelayParams, relayAddress?: string): Promise<string>;\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"isHighPriority"),(0,n.kt)("td",{parentName:"tr",align:null},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("i",null,"(Optional)")," whether this transaction is to be expedited")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"relayParams"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/sdk/teleport-sdk.relayparams"},"RelayParams")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("i",null,"(Optional)")," parameters for the relaid transaction")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"relayAddress"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("i",null,"(Optional)")," relayer's address")))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,"Promise","<","string",">"),(0,n.kt)("p",null,"Promise containing the token fee (in wei) to be paid to the relayer"))}c.isMDXComponent=!0}}]);