---
displayed_sidebar: pluginsSidebar
---

# E-UC Apps Plugin Examples

### Changing the sidebar color when entering the module, and resetting the color when leaving it

```js
// background.js
app.onAppUnLoaded(tabId => {
  if (tabId === 'sidebar-color') {
    app.openLeftPanel();
    app.resetNavBarColor();
  }
})

// tab.js
await app.initialize();
app.closeLeftPanel();
app.changeNavBarColor('#8e6a3a');
```
[👀 View source code](https://github.com/wazo-communication/euc-plugins-js-sdk/tree/master/documentation/static/examples/wda/sidebar-color)

<a class="try-it button button--secondary button--lg" href="https://app.wazo.io/?manifestUrl=https://wazo-communication.github.io/euc-plugins-js-sdk/examples/wda/sidebar-color/manifest.json" target="_blank">
    🎨 Try changing the sidebar !
</a>

### Displaying a modal for incoming calls

```js
// backgroundScript
app.onCallIncoming = async call => {
  app.displayModal({
    title: `Incoming call for ${call.displayName}`,
    text: `Client number: ${call.number}`,
    height: '50%',
    width: '70%',
  });
};

await app.initialize();
```
[👀 View source code](https://github.com/wazo-communication/euc-plugins-js-sdk/tree/master/documentation/static/examples/wda/incoming-call-modal)

<a class="try-it button button--secondary button--lg" href="https://app.wazo.io/?manifestUrl=https://wazo-communication.github.io/euc-plugins-js-sdk/examples/wda/incoming-call-modal/manifest.json" target="_blank">
    ☎️ Try the incoming call modal !
</a>

### Send and receive message between backgroundScript and tabs

```js
// tab
app.onIframeMessage = (msg) => {
  console.log('onIframeMessage', msg);
}

(async () => {
  await app.initialize();
  app.sendMessageToBackground({ value: 'ping', myData: 'abcd' });
})();

// backgroundScript
app.onBackgroundMessage = msg => {
  console.log('onBackgroundMessage', msg);
  app.sendMessageToIframe({ value: 'pong', customerId: 1234 });
}

app.initialize();
```

[👀 View source code](https://github.com/wazo-communication/euc-plugins-js-sdk/tree/master/documentation/static/examples/wda/iframe-bg-messaging)

<a class="try-it button button--secondary button--lg" href="https://app.wazo.io/?manifestUrl=https://wazo-communication.github.io/euc-plugins-js-sdk/examples/wda/iframe-bg-messaging/manifest.json" target="_blank">
    📣 Try messaging background ↔️ tab
</a>

### Adding a settings menu

```json
"staticTabs": [
  {
    "entityId": "settings-tab",
    "context": [
      "settingsTab"
    ],
    "position": 1001,
    "name": "My settings",
    "contentUrl": "./tab.html",
    "icon": "./tab.svg"
  }
]
```

[👀 View source code](https://github.com/wazo-communication/euc-plugins-js-sdk/tree/master/documentation/static/examples/wda/settings-menu)

<a class="try-it button button--secondary button--lg" href="https://app.wazo.io/?manifestUrl=https://wazo-communication.github.io/euc-plugins-js-sdk/examples/wda/settings-menu/manifest.json" target="_blank">
    📣 Try adding a new settings menu
</a>

### Displaying local and remote video as miniature

```js
const createVideoWithStream = stream => {
  const video = document.createElement('video');
  video.style.position = 'absolute';
  video.style.width = '100px';
  video.style.height = '60px';
  video.style.top = '20px';
  video.autoplay = true;

  video.srcObject = stream;
  video.muted = true;

  video.onloadedmetadata = () => {
    const tracks = stream.getVideoTracks();
    tracks.forEach(track => {
      track.enabled = true;
      track.loaded = true;
    });
  };

  document.body.appendChild(video);

  return video;
}

app.onCallAnswered = (call) => {
  if (app.hasLocalVideoStream(call)) {
    local = createVideoWithStream(app.getLocalCurrentVideoStream(call));
    local.style.right = '10px';
  }

  if (app.hasRemoveVideoStream(call)) {
    remote = createVideoWithStream(app.getRemoteVideoStream(call));
    remote.style.right = '150px';
  }
};
```
[👀 View source code](https://github.com/wazo-communication/euc-plugins-js-sdk/tree/master/documentation/static/examples/wda/video-pip)

<a class="try-it button button--secondary button--lg" href="https://app.wazo.io/?manifestUrl=https://wazo-communication.github.io/euc-plugins-js-sdk/examples/wda/video-pip/manifest.json" target="_blank">
    🎥 Try displaying videos as miniatures in a video call
</a>

### Configuring and playing sounds

```js
app.initialize();

app.configureSounds({
  message: 'https://audio-previews.elements.envatousercontent.com/files/156322809/preview.mp3'
});

setTimeout(() => {
  // You can now play this custom sound, or receive a message in WDA to hear this sound.
  // In a setTimeout to avoid chrome restriction about sound playing without user interaction: https://developer.chrome.com/blog/autoplay
  app.playNewMessageSound();
}, 2000);
```

[👀 View source code](https://github.com/wazo-communication/euc-plugins-js-sdk/tree/master/documentation/static/examples/wda/configure-sounds)

<a class="try-it button button--secondary button--lg" href="https://app.wazo.io/?manifestUrl=https://wazo-communication.github.io/euc-plugins-js-sdk/examples/wda/configure-sounds/manifest.json" target="_blank">
    🎺 Try configuring the application sounds
</a>
