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

## [製作教學](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action)

1. 下載node.js取得npm指令
2. 建立專案資料夾
3. cd到該專案資料夾
4. `npm init -y` 產生package.json文件, 每當您在此資料夾執行npm install來安裝其他包時，會更新這邊的dependencies項目
5. 製作action.yml
6. 安裝github action相關套件:
   - `npm install @actions/core`
   - `npm install @actions/github`
7. 建立index.js<sup>檔案名稱取決於action.yml.main描述</sup>實作您的套件邏輯
8. 製作README文件，簡單介紹您的套件{Desc, Inputs, Outputs, Example usage}
