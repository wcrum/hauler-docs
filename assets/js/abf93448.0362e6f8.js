"use strict";(self.webpackChunkhauler=self.webpackChunkhauler||[]).push([[9563],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=n,p=d["".concat(i,".").concat(f)]||d[f]||h[f]||o;return r?a.createElement(p,l(l({ref:t},u),{},{components:r})):a.createElement(p,l({ref:t},u))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3504:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(4137));const o={title:"Hauler Store (Command)",description:"Hauler CLI Reference for hauler store",sidebar_label:"Hauler Store"},l=void 0,s={unversionedId:"guides-references/command-line/hauler-store",id:"version-0.4.2/guides-references/command-line/hauler-store",title:"Hauler Store (Command)",description:"Hauler CLI Reference for hauler store",source:"@site/versioned_docs/version-0.4.2/guides-references/command-line/hauler-store.md",sourceDirName:"guides-references/command-line",slug:"/guides-references/command-line/hauler-store",permalink:"/hauler-docs/docs/0.4.2/guides-references/command-line/hauler-store",draft:!1,editUrl:"https://github.com/rancherfederal/hauler-docs/edit/main/versioned_docs/version-0.4.2/guides-references/command-line/hauler-store.md",tags:[],version:"0.4.2",frontMatter:{title:"Hauler Store (Command)",description:"Hauler CLI Reference for hauler store",sidebar_label:"Hauler Store"},sidebar:"haulerSidebar",previous:{title:"Hauler",permalink:"/hauler-docs/docs/0.4.2/guides-references/command-line/hauler"},next:{title:"Hauler Completion",permalink:"/hauler-docs/docs/0.4.2/guides-references/command-line/hauler-completion"}},i={},c=[{value:"Command Overview",id:"command-overview",level:3},{value:"<code>hauler store add</code>:",id:"hauler-store-add",level:4},{value:"<code>hauler store copy</code>:",id:"hauler-store-copy",level:4},{value:"<code>hauler store extract</code>:",id:"hauler-store-extract",level:4},{value:"<code>hauler store info</code>:",id:"hauler-store-info",level:4},{value:"<code>hauler store load</code>:",id:"hauler-store-load",level:4},{value:"<code>hauler store save</code>:",id:"hauler-store-save",level:4},{value:"<code>hauler store serve</code>:",id:"hauler-store-serve",level:4},{value:"<code>hauler store sync</code>:",id:"hauler-store-sync",level:4}],u={toc:c},d="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"command-overview"},"Command Overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Interact with Hauler's embedded content store.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'Usage:\n  hauler store [flags]\n  hauler store [command]\n\nAliases:\n  store, s\n\nAvailable Commands:\n  add         Add content to store\n  copy        Copy all store contents to another OCI registry\n  extract     Extract content from the store to disk\n  info        Print out information about the store\n  load        Load a content store from a store archive\n  save        Save a content store to a store archive\n  serve       Expose the content of a local store through an OCI compliant server\n  sync        Sync content to the embedded content store\n\nFlags:\n      --cache string   Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)\n  -h, --help           help for store\n  -s, --store string   Location to create store at (default "store")\n\nGlobal Flags:\n  -l, --log-level string    (default "info")\n\nUse "hauler store [command] --help" for more information about a command.\n')),(0,n.kt)("h4",{id:"hauler-store-add"},(0,n.kt)("inlineCode",{parentName:"h4"},"hauler store add"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add content to store.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'Usage:\n  hauler store add [flags]\n  hauler store add [command]\n\nAvailable Commands:\n  chart       Add a local or remote chart to the content store\n  file        Add a file to the content store\n  image       Add an image to the content store\n\nFlags:\n  -h, --help   help for add\n\nGlobal Flags:\n      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n\nUse "hauler store add [command] --help" for more information about a command.\n')),(0,n.kt)("h4",{id:"hauler-store-copy"},(0,n.kt)("inlineCode",{parentName:"h4"},"hauler store copy"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Copy all store contents to another OCI registry.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'Usage:\n  hauler store copy [flags]\n\nFlags:\n  -h, --help              help for copy\n      --insecure          Toggle allowing insecure connections when copying to a remote registry\n  -p, --password string   Password when copying to an authenticated remote registry\n      --plain-http        Toggle allowing plain http connections when copying to a remote registry\n  -u, --username string   Username when copying to an authenticated remote registry\n\nGlobal Flags:\n      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")h\n')),(0,n.kt)("h4",{id:"hauler-store-extract"},(0,n.kt)("inlineCode",{parentName:"h4"},"hauler store extract"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Extract content from the store to disk.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'Usage:\n  hauler store extract [flags]\n\nAliases:\n  extract, x\n\nFlags:\n  -h, --help            help for extract\n  -o, --output string   Directory to save contents to (defaults to current directory)\n\nGlobal Flags:\n      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n')),(0,n.kt)("h4",{id:"hauler-store-info"},(0,n.kt)("inlineCode",{parentName:"h4"},"hauler store info"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Print out information about the store.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'Usage:\n  hauler store info [flags]\n\nAliases:\n  info, i, list, ls\n\nFlags:\n  -h, --help            help for info\n  -o, --output string   Output format (table, json) (default "table")\n  -t, --type string     Filter on type (image, chart, file) (default "all")\n\nGlobal Flags:\n      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n')),(0,n.kt)("h4",{id:"hauler-store-load"},(0,n.kt)("inlineCode",{parentName:"h4"},"hauler store load"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Load a content store from a store archive.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'Usage:\n  hauler store load [flags]\n\nFlags:\n  -h, --help   help for load\n\nGlobal Flags:\n      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n')),(0,n.kt)("h4",{id:"hauler-store-save"},(0,n.kt)("inlineCode",{parentName:"h4"},"hauler store save"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Save a content store to a store archive.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'Usage:\n  hauler store save [flags]\n\nFlags:\n  -f, --filename string   Name of archive (default "pkg.tar.zst")\n  -h, --help              help for save\n\nGlobal Flags:\n      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n')),(0,n.kt)("h4",{id:"hauler-store-serve"},(0,n.kt)("inlineCode",{parentName:"h4"},"hauler store serve"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Expose the content of a local store through an OCI compliant server.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'Usage:\n  hauler store serve [flags]\n\nFlags:\n  -c, --config string      Path to a config file, will override all other configs\n  -d, --daemon             Toggle serving as a daemon\n      --directory string   Directory to use for registry backend (defaults to \'$PWD/registry\') (default "registry")\n  -h, --help               help for serve\n  -p, --port int           Port to listen on (default 5000)\n\nGlobal Flags:\n      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")\n')),(0,n.kt)("h4",{id:"hauler-store-sync"},(0,n.kt)("inlineCode",{parentName:"h4"},"hauler store sync"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sync content to the embedded content store.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'Usage:\n  hauler store sync [flags]\n\nFlags:\n  -f, --files strings      Path to content files\n  -h, --help               help for sync\n  -k, --key string         (Optional) Path to the key for signature verification\n      --products strings   Used for RGS Carbide customers to supply a product and version and Hauler will retrieve the images. i.e. \'--product rancher=v2.7.6\'\n\nGlobal Flags:\n      --cache string       Location of where to store cache data (defaults to $XDG_CACHE_DIR/hauler)\n  -l, --log-level string    (default "info")\n  -s, --store string       Location to create store at (default "store")h\n')))}h.isMDXComponent=!0}}]);