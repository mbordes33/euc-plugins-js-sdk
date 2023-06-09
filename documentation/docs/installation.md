---
displayed_sidebar: installSidebar
---

# Installation

Let's install the **Wazo EUC Plugins SDK in less than 5 minutes**.

## Using a Package Manager

You can install our SDK with your favorite package manager in the following ways:

```bash
# NPM
npm install @wazo/euc-plugins-sdk

# YARN
yarn add @wazo/euc-plugins-sdk
```

Then import the SDK in any file of your project.

```js
import { App } from '@wazo/euc-plugins-sdk';
const app = new App();
```

## Using a Content Delivery Networks (CDN)

Alternatively, you can load the Wazo SDK from a CDN. Use one of the following Content Delivery Networks:

### UNPKG

```js
import { App } from 'https://unpkg.com/@wazo/euc-plugins-sdk@latest/lib/esm/app.js';
import softphone from 'https://unpkg.com/@wazo/euc-plugins-sdk@latest/lib/esm/softphone.js';

const app = new App();
```

### jsDelivr

```js
import { App } from 'https://cdn.jsdelivr.net/npm/@wazo/euc-plugins-sdk@latest/lib/esm/app.js';
import softphone from 'https://cdn.jsdelivr.net/npm/@wazo/euc-plugins-sdk@latest/lib/esm/softphone.js';

const app = new App();
```

## What's Next?

🎉 Good job, you officially installed our SDK. The next step is to decide if you want to [build a plugin](./plugins/introduction) to extend our
products or [integrate a softphone](./softphone/introduction) in an external system.

Enjoy!

