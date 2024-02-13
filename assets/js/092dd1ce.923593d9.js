"use strict";(self.webpackChunkhauler_docs=self.webpackChunkhauler_docs||[]).push([[9e3],{5788:(e,r,n)=>{n.d(r,{Iu:()=>u,yg:()=>f});var t=n(1504);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),s=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},u=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),p=o,f=d["".concat(c,".").concat(p)]||d[p]||m[p]||a;return n?t.createElement(f,l(l({ref:r},u),{},{components:n})):t.createElement(f,l({ref:r},u))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8192:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var t=n(5072),o=(n(1504),n(5788));const a={title:"Hauler (Command)",description:"Hauler CLI Reference for hauler",sidebar_label:"Hauler"},l=void 0,i={unversionedId:"guides-references/command-line/hauler",id:"version-0.4.4/guides-references/command-line/hauler",title:"Hauler (Command)",description:"Hauler CLI Reference for hauler",source:"@site/versioned_docs/version-0.4.4/guides-references/command-line/hauler.md",sourceDirName:"guides-references/command-line",slug:"/guides-references/command-line/hauler",permalink:"/hauler-docs/docs/guides-references/command-line/hauler",draft:!1,editUrl:"https://github.com/rancherfederal/hauler-docs/edit/main/versioned_docs/version-0.4.4/guides-references/command-line/hauler.md",tags:[],version:"0.4.4",frontMatter:{title:"Hauler (Command)",description:"Hauler CLI Reference for hauler",sidebar_label:"Hauler"},sidebar:"haulerSidebar",previous:{title:"Files",permalink:"/hauler-docs/docs/guides-references/hauler-content/files"},next:{title:"Hauler Store",permalink:"/hauler-docs/docs/guides-references/command-line/hauler-store"}},c={},s=[{value:"Command Overview",id:"command-overview",level:3}],u={toc:s},d="wrapper";function m(e){let{components:r,...n}=e;return(0,o.yg)(d,(0,t.c)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h3",{id:"command-overview"},"Command Overview"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Interact with Hauler's command line.")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},'Usage:\n  hauler [flags]\n  hauler [command]\n\nAvailable Commands:\n  completion  Generates completion scripts for various shells\n  download    Download OCI content from a registry and populate it on disk\n  help        Help about any command\n  serve       Run one or more of hauler\'s embedded servers types\n  store       Interact with hauler\'s embedded content store\n  version     Print the current version\n\nFlags:\n  -h, --help               help for hauler\n  -l, --log-level string    (default "info")\n\nUse "hauler [command] --help" for more information about a command.\n')))}m.isMDXComponent=!0}}]);