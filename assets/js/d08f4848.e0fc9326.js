"use strict";(self.webpackChunkhauler=self.webpackChunkhauler||[]).push([[9569],{4137:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var a=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return a.createElement(s.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},f=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||n;return t?a.createElement(m,i(i({ref:r},u),{},{components:t})):a.createElement(m,i({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=f;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4394:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=t(7462),o=(t(7294),t(4137));const n={title:"RGS Carbide Customers",description:"RGS Carbide Customers Documentation",sidebar_label:"RGS Carbide Customers"},i=void 0,l={unversionedId:"guides-references/carbide-customers",id:"version-0.4.2/guides-references/carbide-customers",title:"RGS Carbide Customers",description:"RGS Carbide Customers Documentation",source:"@site/versioned_docs/version-0.4.2/guides-references/carbide-customers.md",sourceDirName:"guides-references",slug:"/guides-references/carbide-customers",permalink:"/hauler-docs/docs/0.4.2/guides-references/carbide-customers",draft:!1,editUrl:"https://github.com/rancherfederal/hauler-docs/edit/main/versioned_docs/version-0.4.2/guides-references/carbide-customers.md",tags:[],version:"0.4.2",frontMatter:{title:"RGS Carbide Customers",description:"RGS Carbide Customers Documentation",sidebar_label:"RGS Carbide Customers"},sidebar:"haulerSidebar",previous:{title:"Fetch Cluster Images",permalink:"/hauler-docs/docs/0.4.2/guides-references/cluster-images"},next:{title:"Overview",permalink:"/hauler-docs/docs/0.4.2/guides-references/hauler-collections/overview"}},s={},c=[{value:"Example Workflow for Carbide",id:"example-workflow-for-carbide",level:3},{value:"Example Workflow for RKE2",id:"example-workflow-for-rke2",level:3},{value:"Example Workflow for K3S",id:"example-workflow-for-k3s",level:3},{value:"Example Workflow for Rancher",id:"example-workflow-for-rancher",level:3},{value:"Example Workflow for Cert-Manager",id:"example-workflow-for-cert-manager",level:3},{value:"Example Workflow for Longhorn",id:"example-workflow-for-longhorn",level:3},{value:"Example Workflow for NeuVector",id:"example-workflow-for-neuvector",level:3}],u={toc:c},p="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For all supported customers of Rancher Government Solutions, under the umbrella of Rancher Government Carbide, there is addon functionality within ",(0,o.kt)("inlineCode",{parentName:"p"},"Hauler"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Hauler")," has the the ability to reference pre-defined ",(0,o.kt)("inlineCode",{parentName:"p"},"Hauler")," manifests from the Carbide Secured Registry (CSR). ",(0,o.kt)("inlineCode",{parentName:"p"},"Hauler")," is built to allow users to fetch, store, package, and distribute content and collections, but most users may be unsure of what to fetch, store, package, and distribue and that is where our supported customers are able to leverage these pre-defined manifests for all of the Rancher products. Below are some of the available ",(0,o.kt)("inlineCode",{parentName:"p"},"product")," flags."),(0,o.kt)("p",null,"RGS Carbide Setup Documentation: ",(0,o.kt)("a",{parentName:"p",href:"https://rancherfederal.github.io/carbide-docs/docs/intro"},"https://rancherfederal.github.io/carbide-docs/docs/intro")),(0,o.kt)("p",null,"RGS Carbide Public Key: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancherfederal/carbide-releases/releases/download/0.1.1/carbide-key.pub"},"https://github.com/rancherfederal/carbide-releases/releases/download/0.1.1/carbide-key.pub")),(0,o.kt)("h3",{id:"example-workflow-for-carbide"},"Example Workflow for Carbide"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# with signature verification\nhauler store sync --products carbide=v0.1.1 --key carbide-key.pub\n\n# without signature verification\nhauler store sync --products carbie=v0.1.1\n")),(0,o.kt)("h3",{id:"example-workflow-for-rke2"},"Example Workflow for RKE2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# with signature verification\nhauler store sync --products rke2=v1.26.11+rke2r1 --key carbide-key.pub\n\n# without signature verification\nhauler store sync --products rke2=v1.26.11+rke2r1\n")),(0,o.kt)("h3",{id:"example-workflow-for-k3s"},"Example Workflow for K3S"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# with signature verification\nhauler store sync --products k3s=v1.26.11-k3s2 --key carbide-key.pub\n\n# without signature verification\nhauler store sync --products k3s=v1.26.11-k3s2\n")),(0,o.kt)("h3",{id:"example-workflow-for-rancher"},"Example Workflow for Rancher"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# with signature verification\nhauler store sync --products rancher=v2.7.9 --key carbide-key.pub\n\n# without signature verification\nhauler store sync --products rancher=v2.7.9\n")),(0,o.kt)("h3",{id:"example-workflow-for-cert-manager"},"Example Workflow for Cert-Manager"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# with signature verification\nhauler store sync --products cert-manager=v1.13.3 --key carbide-key.pub\n\n# without signature verification\nhauler store sync --products cert-manager=v1.13.3\n")),(0,o.kt)("h3",{id:"example-workflow-for-longhorn"},"Example Workflow for Longhorn"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# with signature verification\nhauler store sync --products longhorn=v1.5.3 --key carbide-key.pub\n\n# without signature verification\nhauler store sync --products longhorn=v1.5.3\n")),(0,o.kt)("h3",{id:"example-workflow-for-neuvector"},"Example Workflow for NeuVector"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# with signature verification\nhauler store sync --products neuvector=v2.6.6 --key carbide-key.pub\n\n# without signature verification\nhauler store sync --products neuvector=v2.6.6\n")))}d.isMDXComponent=!0}}]);