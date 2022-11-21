"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[372],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return r?o.createElement(m,i(i({ref:t},l),{},{components:r})):o.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3164:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const a={},i=void 0,p={unversionedId:"sdk/teleport-sdk.waitfortxreceipt",id:"sdk/teleport-sdk.waitfortxreceipt",title:"teleport-sdk.waitfortxreceipt",description:"Home &gt; teleport-sdk &gt; waitForTxReceipt",source:"@site/docs/sdk/teleport-sdk.waitfortxreceipt.md",sourceDirName:"sdk",slug:"/sdk/teleport-sdk.waitfortxreceipt",permalink:"/teleport-sdk-docs/docs/sdk/teleport-sdk.waitfortxreceipt",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sdk/teleport-sdk.waitfortxreceipt.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"teleport-sdk.waitforrelaytaskconfirmation",permalink:"/teleport-sdk-docs/docs/sdk/teleport-sdk.waitforrelaytaskconfirmation"}},c={},s=[{value:"waitForTxReceipt variable",id:"waitfortxreceipt-variable",level:2}],l={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/teleport-sdk-docs/docs/sdk/"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/teleport-sdk-docs/docs/sdk/teleport-sdk"},"teleport-sdk")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/teleport-sdk-docs/docs/sdk/teleport-sdk.waitfortxreceipt"},"waitForTxReceipt")),(0,n.kt)("h2",{id:"waitfortxreceipt-variable"},"waitForTxReceipt variable"),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"waitForTxReceipt: (provider: providers.Provider, txHash: string, txDescription?: string, maxAttempts?: number) => Promise<providers.TransactionReceipt>\n")))}d.isMDXComponent=!0}}]);