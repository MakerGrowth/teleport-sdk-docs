"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3290],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),i=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=i(r),m=n,k=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return r?a.createElement(k,l(l({ref:t},p),{},{components:r})):a.createElement(k,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=c;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9889:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=r(7462),n=(r(7294),r(3905));const o={},l=void 0,s={unversionedId:"sdk/teleport-sdk.getdefaultdstdomain",id:"sdk/teleport-sdk.getdefaultdstdomain",title:"teleport-sdk.getdefaultdstdomain",description:"Home &gt; teleport-sdk &gt; getDefaultDstDomain",source:"@site/docs/sdk/teleport-sdk.getdefaultdstdomain.md",sourceDirName:"sdk",slug:"/sdk/teleport-sdk.getdefaultdstdomain",permalink:"/docs/sdk/teleport-sdk.getdefaultdstdomain",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sdk/teleport-sdk.getdefaultdstdomain.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"teleport-sdk.getattestationsopts.txhash",permalink:"/docs/sdk/teleport-sdk.getattestationsopts.txhash"},next:{title:"teleport-sdk.getdstbalance",permalink:"/docs/sdk/teleport-sdk.getdstbalance"}},d={},i=[{value:"getDefaultDstDomain() function",id:"getdefaultdstdomain-function",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],p={toc:i};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sdk/"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/sdk/teleport-sdk"},"teleport-sdk")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/sdk/teleport-sdk.getdefaultdstdomain"},"getDefaultDstDomain")),(0,n.kt)("h2",{id:"getdefaultdstdomain-function"},"getDefaultDstDomain() function"),(0,n.kt)("p",null,"Get the default target domain for a given source domain"),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare function getDefaultDstDomain(srcDomain: DomainDescription): DomainId;\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"srcDomain"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/sdk/teleport-sdk.domaindescription"},"DomainDescription")),(0,n.kt)("td",{parentName:"tr",align:null},"source domain's ",(0,n.kt)("a",{parentName:"td",href:"/docs/sdk/teleport-sdk.domainid"},"DomainId"))))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sdk/teleport-sdk.domainid"},"DomainId")),(0,n.kt)("p",null,"target domain's ",(0,n.kt)("a",{parentName:"p",href:"/docs/sdk/teleport-sdk.domainid"},"DomainId")),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"This usually means L2 -",">"," L1 for rollup chains on Ethereum"))}u.isMDXComponent=!0}}]);