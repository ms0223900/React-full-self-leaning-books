webpack 教學

webpack的核心主要是用於JavaScript應用的靜態模組綑綁器，
當webpack在處理整個專案時，他會在內部建立一個依賴的關係圖，
裡面記錄著每個頁面所需要用到的模組，並將每個模組綑綁成一個或多個來使用。

安裝環境
先安裝node.js
再來安裝webpack

npm install webpack -g

安裝完檢查版本
webpack -v

webpack cli
npm install webpack-cli -g


#熟悉指令
mkdir ProjectName 建立專案資料夾
cd ProjectName
npm init
npm init -y 快速產生。

#產生package.json
主要要了解的
1. devDependencies
開發的時候會用到的套件，例如負責打包的webpack。
1. dependencies
上線發佈後依然需要用到的套件，例如我們這次學的主題react。
或者npm install webpack --save-dev 自動紀錄這件事情。

npm install webpack-cli -dev


#react開發環境
npm install react react-dom --save
