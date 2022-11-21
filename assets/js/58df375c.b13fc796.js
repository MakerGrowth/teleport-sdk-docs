"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6660],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,k=u["".concat(i,".").concat(m)]||u[m]||c[m]||o;return r?a.createElement(k,l(l({ref:t},d),{},{components:r})):a.createElement(k,l({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2586:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={},l=void 0,p={unversionedId:"sdk/teleport-sdk.teleportbridge.approvesrcgateway",id:"sdk/teleport-sdk.teleportbridge.approvesrcgateway",title:"teleport-sdk.teleportbridge.approvesrcgateway",description:"Home &gt; teleport-sdk &gt; TeleportBridge &gt; approveSrcGateway",source:"@site/docs/sdk/teleport-sdk.teleportbridge.approvesrcgateway.md",sourceDirName:"sdk",slug:"/sdk/teleport-sdk.teleportbridge.approvesrcgateway",permalink:"/docs/sdk/teleport-sdk.teleportbridge.approvesrcgateway",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sdk/teleport-sdk.teleportbridge.approvesrcgateway.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"teleport-sdk.teleportbridge._constructor_",permalink:"/docs/sdk/teleport-sdk.teleportbridge._constructor_"},next:{title:"teleport-sdk.teleportbridge.canmintwithoutoracle",permalink:"/docs/sdk/teleport-sdk.teleportbridge.canmintwithoutoracle"}},i={},s=[{value:"TeleportBridge.approveSrcGateway() method",id:"teleportbridgeapprovesrcgateway-method",level:2},{value:"Parameters",id:"parameters",level:2}],d={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sdk/"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/sdk/teleport-sdk"},"teleport-sdk")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/sdk/teleport-sdk.teleportbridge"},"TeleportBridge")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/sdk/teleport-sdk.teleportbridge.approvesrcgateway"},"approveSrcGateway")),(0,n.kt)("h2",{id:"teleportbridgeapprovesrcgateway-method"},"TeleportBridge.approveSrcGateway() method"),(0,n.kt)("p",null,"Approve the source domain's Gateway contract to spend tokens."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"approveSrcGateway(sender?: Signer, amount?: BigNumberish, overrides?: Overrides): Promise<Call>;\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sender"),(0,n.kt)("td",{parentName:"tr",align:null},"Signer"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("i",null,"(Optional)")," address from wchich tokens will be teleported")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"amount"),(0,n.kt)("td",{parentName:"tr",align:null},"BigNumberish"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("i",null,"(Optional)")," amount to approve")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"overrides"),(0,n.kt)("td",{parentName:"tr",align:null},"Overrides"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("i",null,"(Optional)")," ethers.js transaction overrides")))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",{parentName:"p",href:"/docs/sdk/teleport-sdk.call"},"Call"),">"),(0,n.kt)("p",null,"Promise containing a contract call"))}c.isMDXComponent=!0}}]);