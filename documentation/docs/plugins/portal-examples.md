---
displayed_sidebar: pluginsSidebar
---

# Portal Plugin Examples

### Adding a Tab in the PBX Dashboard Page

```js
(async () => {
  await app.initialize();
  const context = app.getContext();

  document.getElementById('name').innerHTML = context.app.extra.record.auth.username;
})();
```

[👀 See full example](https://github.com/wazo-communication/euc-plugins-js-sdk/tree/master/documentation/static/examples/portal/pbx-dashboard-tab)

<a class="try-it button button--secondary button--lg" href="https://portal.wazo.io/?manifestUrl=https://wazo-communication.github.io/euc-plugins-js-sdk/examples/portal/pbx-dashboard-tab/manifest.json" target="_blank">
    📊 Add a tab in the PBX dashboard
</a>

### Adding a New Tab in the PBX User Edition Form

![New pbx user tab (small)](/img/portal-custom-pbx-user-tab.png)

You may want to create your own page/form in a PBX form.
See [This section](./portal#adding-tabs-in-a-form) for more information.

```js
(async () => {
  await app.initialize();
  const context = app.getContext();

  // You'll find information about the PBX user in `context.app.extra.record`;
  document.getElementById('name').innerHTML = context.app.extra.record.auth.username;
})();
```

[👀 See full example](https://github.com/wazo-communication/euc-plugins-js-sdk/tree/master/documentation/static/examples/portal/pbx-user-form-tab)

<a class="try-it button button--secondary button--lg" href="https://portal.wazo.io/?manifestUrl=https://wazo-communication.github.io/euc-plugins-js-sdk/examples/portal/pbx-user-form-tab/manifest.json" target="_blank">
    👨‍🦰 Add a tab in the PBX user form !
</a>
