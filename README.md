A simple library to load the google tag manager script into your solid-start application.

# Install

```shell
npm i solid-google-tag-manager
```

# Usage

Embed the created element at the level you want the tag to be loaded. If this is to be loaded for all routes, it can be added directly in the top level `app.jsx` / `app.tsx` file.

`app.js`

```js
import { createGoogleTagManagerElement } from "solid-google-tag-manager";

export default function App() {
  return (
    // ...
    <Suspense>{createGoogleTagManagerElement("G-XXXXXXXX")}</Suspense>
    // ...
  );
}
```
