# Hello world javascript action

## Inputs

### required

| name | desc |
| ---- | ---- |
note |

### optional:

| name | desc |
| ---- | ---- |
author |

## outputs:

| name | desc |
| ---- | ---- |
status |


## Example usage

```yaml
uses: actions/hello-world-js-action@v0.0 # package.json.name
with:
  note: 'Cool app!'
```

實際範例可參考本專案所提供的[.github/workflows/action.yaml](.github/workflows/action.yaml)
- [demo-01](https://github.com/CarsonSlovoka/hello-world-js-action/blob/9effb609d945bd5cc68f27f4cd352979bf92553c/.github/workflows/action.yaml#L24-L26)
- [demo-02](https://github.com/CarsonSlovoka/hello-world-js-action/blob/9effb609d945bd5cc68f27f4cd352979bf92553c/.github/workflows/action.yaml#L31-L34)

## [製作教學](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action)

1. 下載[node.js](https://nodejs.org/en/)以取得npm指令
   - windows可以考慮用[choco install nodejs -y](https://www.google.com/search?q=choco+nodejs&oq=choco+nodejs&aqs=chrome..69i57j0i512l3j0i30l5j0i10i30.3974j0j7&sourceid=chrome&ie=UTF-8)來安裝
2. 建立專案資料夾
3. cd到該專案資料夾
4. `npm init -y` 產生package.json文件, 每當您在此資料夾執行npm install來安裝其他包時，會更新這邊的dependencies項目
5. 製作[action.yml] 請放在根目錄
   當中的inputs以及outputs的內容對照請參考以下:
   - [inputs](https://github.com/CarsonSlovoka/hello-world-js-action/blob/9effb609d945bd5cc68f27f4cd352979bf92553c/.github/workflows/action.yaml#L32-L34)
   - [outputs](https://github.com/CarsonSlovoka/hello-world-js-action/blob/9effb609d945bd5cc68f27f4cd352979bf92553c/.github/workflows/action.yaml#L36)
6. 安裝github action相關套件:
   - `npm install @actions/core`
   - `npm install @actions/github` : 這個不是必要的，如果想要額外看到提交者的一些訊息才需要考慮安裝
7. 建立index.js<sup>檔案名稱取決於action.yml.main描述</sup>實作您的套件邏輯
   - 如果您想把js變成單一檔案，可以考慮使用以下其中一個都行
     1. [rollup](https://github.com/rollup/rollup) `npm install -g rollup` (我會比較推薦這個，打包出來的內容比較乾淨)
     2. [ncc](https://github.com/vercel/ncc) `npm install -g ncc`
8. 製作README文件，簡單介紹您的套件{Desc, Inputs, Outputs, Example usage}
9. 創建tag之後提交，例如tag為v0.0<sup>不建議開頭用0,其表示尚不穩定,若有一定的完成度建議用1當開頭</sup>，那麼使用上就為[username/repositoryName@v0.0](https://github.com/CarsonSlovoka/hello-world-js-action/blob/9effb609d945bd5cc68f27f4cd352979bf92553c/.github/workflows/action.yaml#L24)

    能讓action跑起來要的文件就兩個
    1. [action.yml]
    2. action.yml所指定的[main檔案](https://github.com/CarsonSlovoka/hello-world-js-action/blob/9effb609d945bd5cc68f27f4cd352979bf92553c/action.yml#L16)
       > 包含此文件會用到的所有檔案也都要提交，以本範例而言還有它的node_modules，即main包含了[dist](https://github.com/CarsonSlovoka/hello-world-js-action/tree/053d8d3/dist)整個資料

## 其他注意事項

- 私有的action只能讓該私有庫**自身**運行，您專案的其他private庫無法共享
- [node_modules一定要提交上去](https://github.com/actions/hello-world-javascript-action/issues/12)
  - node_modules的位置，放在[action.yml: main: 與該js](https://github.com/CarsonSlovoka/hello-world-js-action/blob/662e68169699f1435295c9868eaaad4ebc5a5a37/action.yml#L16)相同資料夾即可
- 根目錄需存在[action.yml](https://github.com/CarsonSlovoka/hello-world-js-action/blob/d69d365/action.yml): **一定只能根目錄**

## 參考資料
- https://github.com/actions/hello-world-javascript-action



[action.yml]: https://github.com/CarsonSlovoka/hello-world-js-action/blob/master/action.yml
