"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[873],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>m});var t=n(67294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function r(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=t.createContext({}),s=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},c=function(e){var a=s(e.components);return t.createElement(p.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=s(n),g=l,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||i;return n?t.createElement(m,o(o({ref:a},c),{},{components:n})):t.createElement(m,o({ref:a},c))}));function m(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=g;var r={};for(var p in a)hasOwnProperty.call(a,p)&&(r[p]=a[p]);r.originalType=e,r[u]="string"==typeof e?e:l,o[1]=r;for(var s=2;s<i;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7774:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var t=n(87462),l=(n(67294),n(3905));const i={sidebar_position:7,sidebar_label:"EUC Plugins SDK"},o="Using the EUC plugins SDK",r={unversionedId:"sdk",id:"sdk",title:"Using the EUC plugins SDK",description:"\u26a0\ufe0f This part is still in development process, changes may happen frequently.",source:"@site/docs/sdk.md",sourceDirName:".",slug:"/sdk",permalink:"/euc-plugins-js-sdk/docs/sdk",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sdk.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"EUC Plugins SDK"},sidebar:"tutorialSidebar",previous:{title:"Softphone",permalink:"/euc-plugins-js-sdk/docs/softphone"},next:{title:"Plugins Examples",permalink:"/euc-plugins-js-sdk/docs/plugin-examples"}},p={},s=[{value:"Initializing your application",id:"initializing-your-application",level:2},{value:"Retrieving the EUC app context",id:"retrieving-the-euc-app-context",level:2},{value:"Interacting with the Web and Desktop application",id:"interacting-with-the-web-and-desktop-application",level:2},{value:"Opening and closing the left panel",id:"opening-and-closing-the-left-panel",level:3},{value:"Starting a call",id:"starting-a-call",level:3},{value:"Opening a link in the application",id:"opening-a-link-in-the-application",level:3},{value:"Creating a meeting",id:"creating-a-meeting",level:3},{value:"Opening a meeting lobby",id:"opening-a-meeting-lobby",level:3},{value:"Playing a sound",id:"playing-a-sound",level:3},{value:"Stopping a sound",id:"stopping-a-sound",level:3},{value:"Configuring sounds",id:"configuring-sounds",level:3},{value:"Resetting sounds",id:"resetting-sounds",level:3},{value:"Displaying a notification",id:"displaying-a-notification",level:3},{value:"Changing the navigation bar color",id:"changing-the-navigation-bar-color",level:3},{value:"Resetting the navigation bar color",id:"resetting-the-navigation-bar-color",level:3},{value:"Displaying a modal",id:"displaying-a-modal",level:3},{value:"Checking if a call has a local video stream",id:"checking-if-a-call-has-a-local-video-stream",level:3},{value:"Retrieving the local video stream of a call",id:"retrieving-the-local-video-stream-of-a-call",level:3},{value:"Checking if a call has a remote video stream",id:"checking-if-a-call-has-a-remote-video-stream",level:3},{value:"Retrieving the remote video stream of a call",id:"retrieving-the-remote-video-stream-of-a-call",level:3},{value:"Events",id:"events",level:3},{value:"Application is unloaded (in backgroundScript)",id:"application-is-unloaded-in-backgroundscript",level:4},{value:"Application is unloaded (in application)",id:"application-is-unloaded-in-application",level:4},{value:"User logs out",id:"user-logs-out",level:4},{value:"User session refreshed",id:"user-session-refreshed",level:4},{value:"A call for the current user is incoming",id:"a-call-for-the-current-user-is-incoming",level:4},{value:"A call is made by the user (eg: outgoing call)",id:"a-call-is-made-by-the-user-eg-outgoing-call",level:4},{value:"A call is answered by the user",id:"a-call-is-answered-by-the-user",level:4},{value:"A call is hung up",id:"a-call-is-hung-up",level:4},{value:"Listening to Wazo Websocket message",id:"listening-to-wazo-websocket-message",level:4},{value:"Listening to meeting creation",id:"listening-to-meeting-creation",level:4},{value:"Listening navigation change in the app",id:"listening-navigation-change-in-the-app",level:4},{value:"Listening when a user enters a Room",id:"listening-when-a-user-enters-a-room",level:4},{value:"Listening when a user leavers a Room",id:"listening-when-a-user-leavers-a-room",level:4},{value:"Listening when a participant enters a Room",id:"listening-when-a-participant-enters-a-room",level:4},{value:"Listening when a participant leavers a Room",id:"listening-when-a-participant-leavers-a-room",level:4},{value:"Interacting with the Portal application",id:"interacting-with-the-portal-application",level:2},{value:"Methods",id:"methods",level:3},{value:"Changing the display of the toolbar in a custom form",id:"changing-the-display-of-the-toolbar-in-a-custom-form",level:4},{value:"Events",id:"events-1",level:3},{value:"Check when the user is connected to a stack",id:"check-when-the-user-is-connected-to-a-stack",level:4},{value:"Check when the user is connected or switch to a tenant",id:"check-when-the-user-is-connected-or-switch-to-a-tenant",level:4}],c={toc:s};function u(e){let{components:a,...n}=e;return(0,l.kt)("wrapper",(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"using-the-euc-plugins-sdk"},"Using the EUC plugins SDK"),(0,l.kt)("p",null,"\u26a0\ufe0f This part is still in development process, changes may happen frequently."),(0,l.kt)("p",null,"After installing the SDK, you can now require it with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { app } from '@wazo/euc-plugins-sdk';\n")),(0,l.kt)("h2",{id:"initializing-your-application"},"Initializing your application"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await app.initialize();\n")),(0,l.kt)("p",null,"This method is asynchronous so the EUC application can know that your app is registered and your app will acknowledge it. "),(0,l.kt)("h2",{id:"retrieving-the-euc-app-context"},"Retrieving the EUC app context"),(0,l.kt)("p",null,"After initializing your application, you can call :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { Context } from '@wazo/euc-plugins-sdk/types';\nconst context: Context = app.getContext();\n")),(0,l.kt)("p",null,"The context will give you access to the app information like :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"app: AppInfo"),": Information about the EUC application"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"locale: string"),": The locale code of the application."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"theme: Object"),": Colors used by the EUC app."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"host: AppHostInfo"),": Contains a ",(0,l.kt)("inlineCode",{parentName:"li"},"clientType")," value that can be ",(0,l.kt)("inlineCode",{parentName:"li"},"web")," / ",(0,l.kt)("inlineCode",{parentName:"li"},"desktop")," / ",(0,l.kt)("inlineCode",{parentName:"li"},"ios")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"android")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"extra: Object"),": Contains extra information about the app context, like the ",(0,l.kt)("inlineCode",{parentName:"li"},"contact")," when you use the ",(0,l.kt)("inlineCode",{parentName:"li"},"contactTab")," manifest context.\nAmong extra parameters, you'll always receive:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"extra.baseUrl"),": The base url of your ",(0,l.kt)("inlineCode",{parentName:"li"},"manifest.json")," file"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"extra.pluginId"),": The ",(0,l.kt)("inlineCode",{parentName:"li"},"entityId")," of the current plugin."))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"user: UserInfo"),": Information about the connected user in the EUC app:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"token: string"),": The token that can be used for API calls"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"refreshToken: string"),": A refresh token that should be used if the ",(0,l.kt)("inlineCode",{parentName:"li"},"token")," expires"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"uuid: string"),": The user uuid"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"host"),": In the web or desktop application: representing the stack hostname where the user is connected.\nSee the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/wazo-communication/euc-plugins-js-sdk/blob/master/src/types.ts#L83"},(0,l.kt)("inlineCode",{parentName:"a"},"WDASession"))," and the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/wazo-communication/euc-plugins-js-sdk/blob/master/src/types.ts#L79"},(0,l.kt)("inlineCode",{parentName:"a"},"PortalSession"))," types for more information.")))),(0,l.kt)("h2",{id:"interacting-with-the-web-and-desktop-application"},"Interacting with the Web and Desktop application"),(0,l.kt)("h3",{id:"opening-and-closing-the-left-panel"},"Opening and closing the left panel"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.closeLeftPanel();\napp.openLeftPanel();\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await app.initialize();\n// Closing the web/desktop left panel when the page is loaded\napp.closeLeftPanel();\n\napp.onUnLoaded = () => {\n  // Re-opening the panel when the page is unloaded\n  app.openLeftPanel();\n};\n")),(0,l.kt)("h3",{id:"starting-a-call"},"Starting a call"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.startCall({ targets , requestedModalities = ['audio'] });\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.startCall({ targets: ['8008'], requestedModalities: ['video'] });\n")),(0,l.kt)("h3",{id:"opening-a-link-in-the-application"},"Opening a link in the application"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.openLink(url: string);\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Opening the internal phonebook\napp.openLink('/phonebook/internal');\n")),(0,l.kt)("h3",{id:"creating-a-meeting"},"Creating a meeting"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.createMeeting(name: string, requireAuthorization = false, persistent = false);\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.createMeeting('My meeting from my custom app', true, true);\n\n// Wait for the meeting to be available\napp.onMeetingCreated = newMeeting => {\n};\n")),(0,l.kt)("h3",{id:"opening-a-meeting-lobby"},"Opening a meeting lobby"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.openMeetingLobby(extension: string);\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Open the lobby when a meeting is created\napp.onMeetingCreated = newMeeting => {\n  app.openMeetingLobby(newMeeting.exten);\n};\n")),(0,l.kt)("h1",{id:"ignoring-an-incoming-call"},"Ignoring an incoming call"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.onCallIncoming = call => {\n  app.ignoreCall(call);\n};\n")),(0,l.kt)("h3",{id:"playing-a-sound"},"Playing a sound"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.playNewMessageSound(); // Play the sound when we receive a text message\napp.playIncomingCallSound(); // Play the incoming call sound (loop)\napp.playProgressSound(); // Play the ringback sound when we make a call (loop)\napp.playDoubleCallSound(); // Play the sound when another call is incoming\napp.playHangupSound(); // Play the hangup sound\n")),(0,l.kt)("h3",{id:"stopping-a-sound"},"Stopping a sound"),(0,l.kt)("p",null,'Sounds marked "loop" must be stopped using:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.stopCurrentSound();\n")),(0,l.kt)("h3",{id:"configuring-sounds"},"Configuring sounds"),(0,l.kt)("p",null,"You can use your own sound files in the application, with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.configureSounds({\n  progress: 'http://example/com/progress.mpg', // Played when making an outgoing call (ringback)\n  ring: 'http://example/com/ring.wav', // Played for the first incoming call\n  message: 'http://example/com/message.ogg', // Played when the user receives a chat message\n  hangup: 'http://example/com/hangup.ogg',// Played when the call is hung up\n  inboundCall: 'http://example/com/inbound.vaw', // Played when we are in call and another call is incoming. Also played in Switchboard.\n})\n")),(0,l.kt)("p",null,"You can omit a value, the default sound will be used."),(0,l.kt)("h3",{id:"resetting-sounds"},"Resetting sounds"),(0,l.kt)("p",null,"You can reset all application sounds with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.resetSounds();\n")),(0,l.kt)("h3",{id:"displaying-a-notification"},"Displaying a notification"),(0,l.kt)("p",null,"Wazo will display browser or desktop notification depending on the environment where WDA is running."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.displayNotification(title: string, text: string);\n")),(0,l.kt)("h3",{id:"changing-the-navigation-bar-color"},"Changing the navigation bar color"),(0,l.kt)("p",null,"We can change the navigation bar color with a valid CSS color:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.changeNavBarColor(color: string);\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.changeNavBarColor('#8e6a3a');\napp.changeNavBarColor('white');\n")),(0,l.kt)("h3",{id:"resetting-the-navigation-bar-color"},"Resetting the navigation bar color"),(0,l.kt)("p",null,"We can reset to the default navigation bar color with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.resetNavBarColor();\n")),(0,l.kt)("h3",{id:"displaying-a-modal"},"Displaying a modal"),(0,l.kt)("p",null,"We can display a modal in the ",(0,l.kt)("inlineCode",{parentName:"p"},"backgroundScript")," with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.displayModal({ url, title, text, htmlText, height, width });\n")),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"url")," is present, the modal will display an iframe with the content of the url.\nIf ",(0,l.kt)("inlineCode",{parentName:"p"},"htmlText")," is present, the modal will display this text in a html contact, otherwise the ",(0,l.kt)("inlineCode",{parentName:"p"},"text")," attribute will be used.\nThe ",(0,l.kt)("inlineCode",{parentName:"p"},"height")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"width")," accept valid CSS values, like ",(0,l.kt)("inlineCode",{parentName:"p"},"500px")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"80%"),"."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("p",null,"Displaying client data when receiving a call"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.onCallIncoming = async call => {\n  console.log('background onCallIncoming', call);\n  const clientData = await fetchClientData(call.number); // Where `fetchClientData` is a method that return client information from an extension\n  \n  app.displayModal({\n    title: `Incoming call for ${call.displayName}`,\n    text: `Last call was: ${clientData.lastCall} for : ${clientData.lastCallSubject}`,\n    height: '50%',\n    width: '70%',\n  });\n};\n")),(0,l.kt)("h3",{id:"checking-if-a-call-has-a-local-video-stream"},"Checking if a call has a local video stream"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.hasLocalVideoStream(call: Call);\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.onCallAnswered = (call) => {\n  const hasLocalVideo = app.hasLocalVideoStream(call);\n}\n")),(0,l.kt)("h3",{id:"retrieving-the-local-video-stream-of-a-call"},"Retrieving the local video stream of a call"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.getLocalCurrentVideoStream(call: Call);\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.onCallAnswered = (call) => {\n  const stream = app.getLocalCurrentVideoStream(call);\n}\n")),(0,l.kt)("h3",{id:"checking-if-a-call-has-a-remote-video-stream"},"Checking if a call has a remote video stream"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.hasRemoteVideoStream(call: Call);\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.onCallAnswered = (call) => {\n  const hasRemoteVideo = app.hasRemoteVideoStream(call);\n}\n")),(0,l.kt)("h3",{id:"retrieving-the-remote-video-stream-of-a-call"},"Retrieving the remote video stream of a call"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.getRemoteCurrentVideoStream(call: Call);\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.onCallAnswered = (call) => {\n  const stream = app.getRemoteCurrentVideoStream(call);\n}\n")),(0,l.kt)("h3",{id:"events"},"Events"),(0,l.kt)("h4",{id:"application-is-unloaded-in-backgroundscript"},"Application is unloaded (in backgroundScript)"),(0,l.kt)("p",null,"Should be used in a ",(0,l.kt)("inlineCode",{parentName:"p"},"backgroundScript")," to know when a custom tab is unloaded."),(0,l.kt)("p",null,"\u26a0\ufe0f As ",(0,l.kt)("inlineCode",{parentName:"p"},"app.onUnLoaded")," is only triggered for tabs (iframes), and this event doesn't allow sophisticated actions (like sending messages to backgroundScript, API calls, ...)\nwe should use ",(0,l.kt)("inlineCode",{parentName:"p"},"onAppUnLoaded")," to perform action when a tab is unloaded."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.onAppUnLoaded = (tabId) => {};\n")),(0,l.kt)("h4",{id:"application-is-unloaded-in-application"},"Application is unloaded (in application)"),(0,l.kt)("p",null,"This action is fired in the application (not in the ",(0,l.kt)("inlineCode",{parentName:"p"},"backgroundScript"),").\nIt's a sugar for ",(0,l.kt)("inlineCode",{parentName:"p"},"window.onunload"),", so you can't do action here like API call because the app (iframe) can be closed before the action finished."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.onUnLoaded = () => {};\n")),(0,l.kt)("h4",{id:"user-logs-out"},"User logs out"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.onLogout = () => {};\n")),(0,l.kt)("h4",{id:"user-session-refreshed"},"User session refreshed"),(0,l.kt)("p",null,"The token of the authenticated user has an expiration date; when the token expires, a session is created with a new token."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.onNewSession(session:  WDASession | PortalSession) {}\n")),(0,l.kt)("h4",{id:"a-call-for-the-current-user-is-incoming"},"A call for the current user is incoming"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.onCallIncoming = (call: Call) =>  {\n  // Useful to react in a `backgroundScript`.\n};\n")),(0,l.kt)("h4",{id:"a-call-is-made-by-the-user-eg-outgoing-call"},"A call is made by the user (eg: outgoing call)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.onCallMade = (call: Call) =>  {\n  // Useful to react in a `backgroundScript`.\n};\n")),(0,l.kt)("h4",{id:"a-call-is-answered-by-the-user"},"A call is answered by the user"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.onCallAnswered = (call: Call) =>  {\n  // Useful to react in a `backgroundScript`.\n};\n")),(0,l.kt)("h4",{id:"a-call-is-hung-up"},"A call is hung up"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.onCallHungUp = (call: Call) =>  {\n  // Useful to react in a `backgroundScript`.\n};\n")),(0,l.kt)("h4",{id:"listening-to-wazo-websocket-message"},"Listening to Wazo Websocket message"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.onWebsocketMessage = (message: MessageEvent) =>  {\n  // Useful to react in a `backgroundScript`.\n};\n")),(0,l.kt)("h4",{id:"listening-to-meeting-creation"},"Listening to meeting creation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.onMeetingCreated = (meeting: Meeting) =>  {\n};\n")),(0,l.kt)("h4",{id:"listening-navigation-change-in-the-app"},"Listening navigation change in the app"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.onRouteChanged = (location: Object, action: string) =>  {\n};\n")),(0,l.kt)("h4",{id:"listening-when-a-user-enters-a-room"},"Listening when a user enters a Room"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.onUserJoinRoom = (room) => {\n};\n")),(0,l.kt)("h4",{id:"listening-when-a-user-leavers-a-room"},"Listening when a user leavers a Room"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.onUserLeaveRoom = (room) => {\n};\n")),(0,l.kt)("h4",{id:"listening-when-a-participant-enters-a-room"},"Listening when a participant enters a Room"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.onParticipantJoinRoom = (room, participant) => {\n};\n")),(0,l.kt)("h4",{id:"listening-when-a-participant-leavers-a-room"},"Listening when a participant leavers a Room"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.onParticipantLeaveRoom = (room, participant) => {\n};\n")),(0,l.kt)("h2",{id:"interacting-with-the-portal-application"},"Interacting with the Portal application"),(0,l.kt)("h3",{id:"methods"},"Methods"),(0,l.kt)("h4",{id:"changing-the-display-of-the-toolbar-in-a-custom-form"},"Changing the display of the toolbar in a custom form"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.changeToolbarDisplay(displayed: boolean);\n")),(0,l.kt)("h3",{id:"events-1"},"Events"),(0,l.kt)("h4",{id:"check-when-the-user-is-connected-to-a-stack"},"Check when the user is connected to a stack"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.onConnectedToStack = (stackSession: Object) => {\n  \n};\n")),(0,l.kt)("h4",{id:"check-when-the-user-is-connected-or-switch-to-a-tenant"},"Check when the user is connected or switch to a tenant"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.onSwitchTenant = (uuid: string, name: string) => {\n  \n};\n")))}u.isMDXComponent=!0}}]);