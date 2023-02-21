"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[826],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(t),m=o,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return t?a.createElement(g,r(r({ref:n},d),{},{components:t})):a.createElement(g,r({ref:n},d))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},25837:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(87462),o=(t(67294),t(3905));const i={sidebar_position:8,sidebar_label:"Plugins Examples"},r="Web and Desktop application examples",s={unversionedId:"plugin-examples",id:"plugin-examples",title:"Web and Desktop application examples",description:"Changing the sidebar color when entering the module, and resetting the color when leaving it",source:"@site/docs/plugin-examples.md",sourceDirName:".",slug:"/plugin-examples",permalink:"/euc-plugins-js-sdk/docs/plugin-examples",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/plugin-examples.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"Plugins Examples"},sidebar:"tutorialSidebar",previous:{title:"EUC Plugins SDK",permalink:"/euc-plugins-js-sdk/docs/sdk"},next:{title:"Softphone Examples",permalink:"/euc-plugins-js-sdk/docs/softphone-examples"}},l={},p=[{value:"Changing the sidebar color when entering the module, and resetting the color when leaving it",id:"changing-the-sidebar-color-when-entering-the-module-and-resetting-the-color-when-leaving-it",level:3},{value:"Displaying a modal for incoming calls",id:"displaying-a-modal-for-incoming-calls",level:3},{value:"Send and receive message between backgroundScript and tabs",id:"send-and-receive-message-between-backgroundscript-and-tabs",level:3},{value:"Adding a settings menu",id:"adding-a-settings-menu",level:3},{value:"Displaying local and remote video as miniature",id:"displaying-local-and-remote-video-as-miniature",level:3},{value:"Adding a tab in the PBX dashboard page",id:"adding-a-tab-in-the-pbx-dashboard-page",level:3},{value:"Adding a new tab in the PBX user edition form",id:"adding-a-new-tab-in-the-pbx-user-edition-form",level:3}],d={toc:p};function c(e){let{components:n,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"web-and-desktop-application-examples"},"Web and Desktop application examples"),(0,o.kt)("h3",{id:"changing-the-sidebar-color-when-entering-the-module-and-resetting-the-color-when-leaving-it"},"Changing the sidebar color when entering the module, and resetting the color when leaving it"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"app.onUnLoaded = () => {\n  app.openLeftPanel();\n  app.resetNavBarColor();\n};\n\n(async () => {\n  await app.initialize();\n  app.closeLeftPanel();\n  app.changeNavBarColor('#8e6a3a');\n})();\n\n")),(0,o.kt)("a",{class:"try-it button button--secondary button--lg",href:"https://app.wazo.io/?manifestUrl=https://wazo-communication.github.io/euc-plugins-js-sdk/examples/wda/sidebar-color/manifest.json",target:"_blank"},"\ud83c\udfa8 Try changing the sidebar !"),(0,o.kt)("h3",{id:"displaying-a-modal-for-incoming-calls"},"Displaying a modal for incoming calls"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// backgroundScript\napp.onCallIncoming = async call => {\n  app.displayModal({\n    title: `Incoming call for ${call.displayName}`,\n    text: `Client number: ${call.number}`,\n    height: '50%',\n    width: '70%',\n  });\n};\n\nawait app.initialize();\n")),(0,o.kt)("a",{class:"try-it button button--secondary button--lg",href:"https://app.wazo.io/?manifestUrl=https://wazo-communication.github.io/euc-plugins-js-sdk/examples/wda/incoming-call-modal/manifest.json",target:"_blank"},"\u260e\ufe0f Try the incoming call modal !"),(0,o.kt)("h3",{id:"send-and-receive-message-between-backgroundscript-and-tabs"},"Send and receive message between backgroundScript and tabs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// tab\napp.onIframeMessage = (msg) => {\n  console.log('onIframeMessage', msg);\n}\n\n(async () => {\n  await app.initialize();\n  app.sendMessageToBackground({ value: 'ping', myData: 'abcd' });\n})();\n\n// backgroundScript\napp.onBackgroundMessage = msg => {\n  console.log('onBackgroundMessage', msg);\n  app.sendMessageToIframe({ value: 'pong', customerId: 1234 });\n}\n\napp.initialize();\n")),(0,o.kt)("a",{class:"try-it button button--secondary button--lg",href:"https://app.wazo.io/?manifestUrl=https://wazo-communication.github.io/euc-plugins-js-sdk/examples/wda/incoming-call-modal/manifest.json",target:"_blank"},"\ud83d\udce3 Try sending messages between background and tab"),(0,o.kt)("h3",{id:"adding-a-settings-menu"},"Adding a settings menu"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"staticTabs": [\n  {\n    "entityId": "settings-tab",\n    "context": [\n      "settingsTab"\n    ],\n    "position": 1001,\n    "name": "My settings",\n    "contentUrl": "./tab.html",\n    "icon": "./tab.svg"\n  }\n]\n')),(0,o.kt)("a",{class:"try-it button button--secondary button--lg",href:"https://app.wazo.io/?manifestUrl=https://wazo-communication.github.io/euc-plugins-js-sdk/examples/wda/settings-menu/manifest.json",target:"_blank"},"\ud83d\udce3 Try adding a new settings menu"),(0,o.kt)("h3",{id:"displaying-local-and-remote-video-as-miniature"},"Displaying local and remote video as miniature"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const createVideoWithStream = stream => {\n  const video = document.createElement('video');\n  video.style.position = 'absolute';\n  video.style.width = '100px';\n  video.style.height = '60px';\n  video.style.top = '20px';\n  video.autoplay = true;\n\n  video.srcObject = stream;\n  video.muted = true;\n\n  video.onloadedmetadata = () => {\n    const tracks = stream.getVideoTracks();\n    tracks.forEach(track => {\n      track.enabled = true;\n      track.loaded = true;\n    });\n  };\n\n  document.body.appendChild(video);\n\n  return video;\n}\n\napp.onCallAnswered = (call) => {\n  if (app.hasLocalVideoStream(call)) {\n    local = createVideoWithStream(app.getLocalCurrentVideoStream(call));\n    local.style.right = '10px';\n  }\n\n  if (app.hasRemoveVideoStream(call)) {\n    remote = createVideoWithStream(app.getRemoteVideoStream(call));\n    remote.style.right = '150px';\n  }\n};\n")),(0,o.kt)("a",{class:"try-it button button--secondary button--lg",href:"https://app.wazo.io/?manifestUrl=https://wazo-communication.github.io/euc-plugins-js-sdk/examples/wda/video-pip/manifest.json",target:"_blank"},"\ud83c\udfa5 Try displaying videos as miniatures in a video call"),(0,o.kt)("h1",{id:"portal"},"Portal"),(0,o.kt)("h3",{id:"adding-a-tab-in-the-pbx-dashboard-page"},"Adding a tab in the PBX dashboard page"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"(async () => {\n  await app.initialize();\n  const context = app.getContext();\n  \n  document.getElementById('name').innerHTML = context.app.extra.record.auth.username;\n})();\n")),(0,o.kt)("a",{class:"try-it button button--secondary button--lg",href:"https://portal.wazo.io/?manifestUrl=https://wazo-communication.github.io/euc-plugins-js-sdk/examples/portal/pbx-dashboard-tab/manifest.json",target:"_blank"},"\ud83d\udcca Add a tab in the PBX dashboard"),(0,o.kt)("h3",{id:"adding-a-new-tab-in-the-pbx-user-edition-form"},"Adding a new tab in the PBX user edition form"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"New pbx user tab (small)",src:t(46146).Z,width:"864",height:"1121"})),(0,o.kt)("p",null,"You may want to create you own page / form in a PBX form.\nSee ",(0,o.kt)("a",{parentName:"p",href:"./portal#adding-tabs-in-a-form"},"This section")," for more information."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"app.onUnLoaded = () => {\n  // Displaying the toolbar again when we leave the tab\n  app.changeToolbarDisplay(true);\n}\n\n// Removing the toolbar\napp.changeToolbarDisplay(false);\n\n(async () => {\n  await app.initialize();\n  const context = app.getContext();\n\n  // You'll find information about the PBX user in `context.app.extra.record`;\n  document.getElementById('name').innerHTML = context.app.extra.record.auth.username;\n})();\n")),(0,o.kt)("a",{class:"try-it button button--secondary button--lg",href:"https://portal.wazo.io/?manifestUrl=https://wazo-communication.github.io/euc-plugins-js-sdk/examples/portal/pbx-user-form-tab/manifest.json",target:"_blank"},"\ud83d\udc68\u200d\ud83e\uddb0 Add a tab in the PBX user form !"))}c.isMDXComponent=!0},46146:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/portal-custom-pbx-user-tab-71151f31dc858bf69f46c4369339eb42.png"}}]);