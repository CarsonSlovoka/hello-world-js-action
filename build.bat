@echo off
cd src

:: 如果相依套件還沒有安裝請先執行npm install
:: npm install

:: build為寫在package.json之中，其中一個scripts的名稱
npm run build
