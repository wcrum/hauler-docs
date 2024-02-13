"use strict";(self.webpackChunkhauler_docs=self.webpackChunkhauler_docs||[]).push([[6008],{5788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>y});var r=n(1504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8040:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(5072),o=(n(1504),n(5788));const a={title:"Core Concepts",description:"Core Concepts Documentation for Hauler",sidebar_label:"Core Concepts"},i=void 0,l={unversionedId:"core-concepts",id:"version-0.4.3/core-concepts",title:"Core Concepts",description:"Core Concepts Documentation for Hauler",source:"@site/versioned_docs/version-0.4.3/core-concepts.md",sourceDirName:".",slug:"/core-concepts",permalink:"/hauler-docs/docs/0.4.3/core-concepts",draft:!1,editUrl:"https://github.com/rancherfederal/hauler-docs/edit/main/versioned_docs/version-0.4.3/core-concepts.md",tags:[],version:"0.4.3",frontMatter:{title:"Core Concepts",description:"Core Concepts Documentation for Hauler",sidebar_label:"Core Concepts"},sidebar:"haulerSidebar",previous:{title:"Introduction",permalink:"/hauler-docs/docs/0.4.3/intro"},next:{title:"Airgap Workflow",permalink:"/hauler-docs/docs/0.4.3/airgap-workflow"}},c={},s=[{value:"Haul",id:"haul",level:2},{value:"Collections",id:"collections",level:2},{value:"Community Collections",id:"community-collections",level:3},{value:"RGS Carbide Collections",id:"rgs-carbide-collections",level:3},{value:"Content",id:"content",level:2},{value:"Declaritive Content",id:"declaritive-content",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.yg)(u,(0,r.c)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"hauler-diagram",src:n(5764).c,width:"2290",height:"1160"})),(0,o.yg)("h2",{id:"haul"},"Haul"),(0,o.yg)("admonition",{title:"SUMMARY:",type:"tip"},(0,o.yg)("p",{parentName:"admonition"},(0,o.yg)("inlineCode",{parentName:"p"},"Hauls")," are Compressed Archive (Tarball) of Hauler Collections and Content.")),(0,o.yg)("p",null,"At the heart of Hauler lies the concept of a ",(0,o.yg)("inlineCode",{parentName:"p"},"Haul"),". A ",(0,o.yg)("inlineCode",{parentName:"p"},"Haul")," is a compressed archive, often in the form of a tarball, containing Hauler collections and content. It serves as a container for grouping and transporting various data types, making it a fundamental element in the Hauler ecosystem."),(0,o.yg)("h2",{id:"collections"},"Collections"),(0,o.yg)("admonition",{title:"SUMMARY:",type:"tip"},(0,o.yg)("p",{parentName:"admonition"},(0,o.yg)("inlineCode",{parentName:"p"},"Collections")," are Grouping of one or more Hauler Contents.")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"Collections")," are the building blocks of Hauler. These are groupings of one or more Hauler ",(0,o.yg)("inlineCode",{parentName:"p"},"contents"),". Think of ",(0,o.yg)("inlineCode",{parentName:"p"},"collections")," as organized sets of data that collectively represent something desirable."),(0,o.yg)("h3",{id:"community-collections"},"Community Collections"),(0,o.yg)("p",null,"While ",(0,o.yg)("inlineCode",{parentName:"p"},"collections")," (and ",(0,o.yg)("inlineCode",{parentName:"p"},"contents"),") are built into Hauler, our goal is to empower users to define their own ",(0,o.yg)("inlineCode",{parentName:"p"},"collections"),". This way, you can tailor Hauler to your unique requirements and take full control of your artifacts."),(0,o.yg)("h3",{id:"rgs-carbide-collections"},"RGS Carbide Collections"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"Hauler")," provides the ability to import ",(0,o.yg)("inlineCode",{parentName:"p"},"collections")," for the Rancher products, making it seamless for RGS Supported Customers to airgap any of the Rancher products or projects. If you haven't heard of Rancher Government Carbide, check it out ",(0,o.yg)("a",{parentName:"p",href:"https://ranchergovernment.com/carbide"},"here"),"!"),(0,o.yg)("h2",{id:"content"},"Content"),(0,o.yg)("admonition",{title:"SUMMARY:",type:"tip"},(0,o.yg)("p",{parentName:"admonition"},(0,o.yg)("inlineCode",{parentName:"p"},"Contents")," are Artifacts such as Images, Charts, or Files.")),(0,o.yg)("p",null,"In Hauler's terminology, ",(0,o.yg)("inlineCode",{parentName:"p"},"content")," refers to artifacts such as images, charts, or files. These are the fundamental types of resources that Hauler understands and manages. To understand the term better, let's break it down:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"Content"),": The fundamental type of artifacts that Hauler recognizes (images, charts, and files)."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"Artifact"),": Anything that can be represented as an OCI (Open Container Initiative) artifact.",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"OCI Artifacts provide a standardized way to store arbitrary files, making it easier to manage content efficiently.")))),(0,o.yg)("h3",{id:"declaritive-content"},"Declaritive Content"),(0,o.yg)("p",null,"While manually adding content to ",(0,o.yg)("inlineCode",{parentName:"p"},"Hauler")," is a straightforward way to get started, we recommend a much more sustainable approach. ",(0,o.yg)("inlineCode",{parentName:"p"},"Hauler")," provides a declaritive approach for each ",(0,o.yg)("inlineCode",{parentName:"p"},"content")," type, allowing you to define all the ",(0,o.yg)("inlineCode",{parentName:"p"},"content")," within a manifest. This approach ensures a more reproducable workflow for managing the lifecycle of your ",(0,o.yg)("inlineCode",{parentName:"p"},"hauls"),"."))}d.isMDXComponent=!0},5764:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/hauler-diagram-8361a431b8453b8031cc13aa7a90e69d.png"}}]);