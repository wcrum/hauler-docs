"use strict";(self.webpackChunkhauler=self.webpackChunkhauler||[]).push([[7378],{4137:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>f});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=o,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||a;return n?t.createElement(f,i(i({ref:r},u),{},{components:n})):t.createElement(f,i({ref:r},u))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9291:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=n(7462),o=(n(7294),n(4137));const a={title:"Hauler Version (Command)",description:"Hauler CLI Reference for hauler version",sidebar_label:"Hauler Version"},i=void 0,l={unversionedId:"guides-references/command-line/hauler-version",id:"version-0.4.3/guides-references/command-line/hauler-version",title:"Hauler Version (Command)",description:"Hauler CLI Reference for hauler version",source:"@site/versioned_docs/version-0.4.3/guides-references/command-line/hauler-version.md",sourceDirName:"guides-references/command-line",slug:"/guides-references/command-line/hauler-version",permalink:"/hauler-docs/docs/guides-references/command-line/hauler-version",draft:!1,editUrl:"https://github.com/rancherfederal/hauler-docs/edit/main/versioned_docs/version-0.4.3/guides-references/command-line/hauler-version.md",tags:[],version:"0.4.3",frontMatter:{title:"Hauler Version (Command)",description:"Hauler CLI Reference for hauler version",sidebar_label:"Hauler Version"},sidebar:"haulerSidebar",previous:{title:"Hauler Completion",permalink:"/hauler-docs/docs/guides-references/command-line/hauler-completion"},next:{title:"Known Issues/Limits",permalink:"/hauler-docs/docs/known-limits"}},s={},c=[{value:"Command Overview",id:"command-overview",level:3}],u={toc:c},m="wrapper";function d(e){let{components:r,...n}=e;return(0,o.kt)(m,(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"command-overview"},"Command Overview"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Print Hauler's current version.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'Usage:\n  hauler version [flags]\n\nAliases:\n  version, v\n\nFlags:\n  -h, --help   help for version\n      --json   toggle output in JSON\n\nGlobal Flags:\n  -l, --log-level string    (default "info")\n')))}d.isMDXComponent=!0}}]);