"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2974],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),i=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=i(r),k=o,m=c["".concat(d,".").concat(k)]||c[k]||u[k]||a;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=c;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3615:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const a={},l=void 0,p={unversionedId:"sdk/teleport-sdk.getteleportguid",id:"sdk/teleport-sdk.getteleportguid",title:"teleport-sdk.getteleportguid",description:"Home &gt; teleport-sdk &gt; getTeleportGuid",source:"@site/docs/sdk/teleport-sdk.getteleportguid.md",sourceDirName:"sdk",slug:"/sdk/teleport-sdk.getteleportguid",permalink:"/teleport-sdk-docs/docs/sdk/teleport-sdk.getteleportguid",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sdk/teleport-sdk.getteleportguid.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"teleport-sdk.getteleportbridge",permalink:"/teleport-sdk-docs/docs/sdk/teleport-sdk.getteleportbridge"},next:{title:"teleport-sdk.getteleportguidfromtxhash",permalink:"/teleport-sdk-docs/docs/sdk/teleport-sdk.getteleportguidfromtxhash"}},d={},i=[{value:"getTeleportGuid() function",id:"getteleportguid-function",level:2},{value:"Parameters",id:"parameters",level:2}],s={toc:i};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/teleport-sdk-docs/docs/sdk/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/teleport-sdk-docs/docs/sdk/teleport-sdk"},"teleport-sdk")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/teleport-sdk-docs/docs/sdk/teleport-sdk.getteleportguid"},"getTeleportGuid")),(0,o.kt)("h2",{id:"getteleportguid-function"},"getTeleportGuid() function"),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare function getTeleportGuid(txHash: string, srcDomainProvider: providers.Provider, teleportOutboundGatewayInterface: TeleportOutboundGatewayInterface): Promise<TeleportGUID>;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"txHash"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"srcDomainProvider"),(0,o.kt)("td",{parentName:"tr",align:null},"providers.Provider"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"teleportOutboundGatewayInterface"),(0,o.kt)("td",{parentName:"tr",align:null},"TeleportOutboundGatewayInterface"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"Promise","<",(0,o.kt)("a",{parentName:"p",href:"/teleport-sdk-docs/docs/sdk/teleport-sdk.teleportguid"},"TeleportGUID"),">"))}u.isMDXComponent=!0}}]);