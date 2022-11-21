"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1427],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>u});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var d=a.createContext({}),s=function(t){var e=a.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=s(t.components);return a.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),k=s(r),u=n,c=k["".concat(d,".").concat(u)]||k[u]||m[u]||l;return r?a.createElement(c,i(i({ref:e},p),{},{components:r})):a.createElement(c,i({ref:e},p))}));function u(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=k;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},2889:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const l={},i=void 0,o={unversionedId:"sdk/teleport-sdk.teleportbridge.relaymintwithoracles",id:"sdk/teleport-sdk.teleportbridge.relaymintwithoracles",title:"teleport-sdk.teleportbridge.relaymintwithoracles",description:"Home &gt; teleport-sdk &gt; TeleportBridge &gt; relayMintWithOracles",source:"@site/docs/sdk/teleport-sdk.teleportbridge.relaymintwithoracles.md",sourceDirName:"sdk",slug:"/sdk/teleport-sdk.teleportbridge.relaymintwithoracles",permalink:"/teleport-sdk-docs/docs/sdk/teleport-sdk.teleportbridge.relaymintwithoracles",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sdk/teleport-sdk.teleportbridge.relaymintwithoracles.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"teleport-sdk.teleportbridge.mintwithoutoracles",permalink:"/teleport-sdk-docs/docs/sdk/teleport-sdk.teleportbridge.mintwithoutoracles"},next:{title:"teleport-sdk.teleportbridge.requestfaucetdai",permalink:"/teleport-sdk-docs/docs/sdk/teleport-sdk.teleportbridge.requestfaucetdai"}},d={},s=[{value:"TeleportBridge.relayMintWithOracles() method",id:"teleportbridgerelaymintwithoracles-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],p={toc:s};function m(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/teleport-sdk-docs/docs/sdk/"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/teleport-sdk-docs/docs/sdk/teleport-sdk"},"teleport-sdk")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/teleport-sdk-docs/docs/sdk/teleport-sdk.teleportbridge"},"TeleportBridge")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/teleport-sdk-docs/docs/sdk/teleport-sdk.teleportbridge.relaymintwithoracles"},"relayMintWithOracles")),(0,n.kt)("h2",{id:"teleportbridgerelaymintwithoracles-method"},"TeleportBridge.relayMintWithOracles() method"),(0,n.kt)("p",null,"Relay a mint transaction on the target domain using oracle attestations"),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"relayMintWithOracles(receiver: Signer, teleportGUID: TeleportGUID, signatures: string, relayFee: BigNumberish, maxFeePercentage?: BigNumberish, expiry?: BigNumberish, to?: string, data?: string, relayAddress?: string, pollingIntervalMs?: number, timeoutMs?: number, onPayloadSigned?: (payload: string, r: string, s: string, v: number) => void, onRelayTaskCreated?: (taskId: string) => void): Promise<string>;\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"receiver"),(0,n.kt)("td",{parentName:"tr",align:null},"Signer"),(0,n.kt)("td",{parentName:"tr",align:null},"address that will receive funds on the target domain")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"teleportGUID"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/teleport-sdk-docs/docs/sdk/teleport-sdk.teleportguid"},"TeleportGUID")),(0,n.kt)("td",{parentName:"tr",align:null},"linked ",(0,n.kt)("a",{parentName:"td",href:"/teleport-sdk-docs/docs/sdk/teleport-sdk.teleportguid"},"TeleportGUID"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"signatures"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"oracle signatures from ",(0,n.kt)("a",{parentName:"td",href:"/teleport-sdk-docs/docs/sdk/teleport-sdk.getattestations"},"getAttestations()"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"relayFee"),(0,n.kt)("td",{parentName:"tr",align:null},"BigNumberish"),(0,n.kt)("td",{parentName:"tr",align:null},"fee to be paid to the relayer from ",(0,n.kt)("a",{parentName:"td",href:"/teleport-sdk-docs/docs/sdk/teleport-sdk.getrelayfee"},"getRelayFee()"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"maxFeePercentage"),(0,n.kt)("td",{parentName:"tr",align:null},"BigNumberish"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("i",null,"(Optional)")," maximum fee specified by the user")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"expiry"),(0,n.kt)("td",{parentName:"tr",align:null},"BigNumberish"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("i",null,"(Optional)")," expiration timestamp for this teleport action")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"to"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("i",null,"(Optional)")," address to call after token minting (only available when using a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"data"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("i",null,"(Optional)")," data to call contract at ",(0,n.kt)("code",null,"to")," with")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"relayAddress"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("i",null,"(Optional)")," relayer's address")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pollingIntervalMs"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("i",null,"(Optional)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeoutMs"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("i",null,"(Optional)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"onPayloadSigned"),(0,n.kt)("td",{parentName:"tr",align:null},"(payload: string, r: string, s: string, v: number) =",">"," void"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("i",null,"(Optional)")," callback")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"onRelayTaskCreated"),(0,n.kt)("td",{parentName:"tr",align:null},"(taskId: string) =",">"," void"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("i",null,"(Optional)"))))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,"Promise","<","string",">"),(0,n.kt)("p",null,"Promise containing relayed transaction's hash"),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"Functionally identical to ",(0,n.kt)("a",{parentName:"p",href:"/teleport-sdk-docs/docs/sdk/teleport-sdk.mintwithoracles"},"mintWithOracles()"),", but relaying the transaction on the target domain"))}m.isMDXComponent=!0}}]);