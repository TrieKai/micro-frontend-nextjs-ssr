# micro-frontend-nextjs-ssr

## 前置作業
如果要使用 module federation，需要在 `next.config` 配置幾個重要的屬性：

Container[host]：[container](https://github.com/TrieKai/micro-frontend-nextjs-ssr/blob/main/container/next.config.js)

App1[remote]：[app1](https://github.com/TrieKai/micro-frontend-nextjs-ssr/blob/main/app1/next.config.js)

App2[remote]：[app2](https://github.com/TrieKai/micro-frontend-nextjs-ssr/blob/main/app2/next.config.js)

欄位名 | 型別 | 含義
--- | --- | ---
name | string | 必填，即輸出的模組名，被遠端引用時路徑為<code>${name}/${expose}</code>
library	| object | 宣告全域性變數的方式，name 為 umd 的 name
filename | string	| 輸出的檔名
remotes	| object | 引用遠端時的名稱及值，使用時以 key 值作為 name
exposes	| object | 被遠端引用時可暴露的資源路徑及其別名
shared	| object | 與其他應用之間可以共享的第三方依賴，使你的程式碼中不用重複載入同一份依賴

設定完 `next.config` 後，接著在 host app 裡引用 remote app 所 exposes 的資源，本專案是以 container app 當作 host，container 內的 [_document.tsx](https://github.com/TrieKai/micro-frontend-nextjs-ssr/blob/main/container/pages/_document.tsx) 的設定如下：

```javascript
import { patchSharing } from "@module-federation/nextjs-mf";

...

render() {
  return (
    <Html>
      {patchSharing()}
      <script src="http://localhost:3001/_next/static/remoteEntryMerged.js" />
      <script src="http://localhost:3002/_next/static/remoteEntryMerged.js" />
      ...
  }
}
```

## Usage

```javascript
const APP1 = (await import("app1/index")).default;
const APP2 = (await import("app2/index")).default;

...

  <APP1 />
  <APP2 />
  
...
```

## Running the demo
- Install packages: `npm install`
- Start the shell: `npm run dev`
- Open the shell http://localhost:3000
