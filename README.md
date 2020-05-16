# tasteBuds_express

使用node.js + Express 創建的餐廳瀏覽頁面  

(update on 5/16)串連mongodb提供資料的讀寫功能

## 專案總覽 OverView
![](https://github.com/emily40830/tasteBuds_express/blob/master/public/cover.png)
![](https://github.com/emily40830/tasteBuds_express/blob/master/public/search.png)

## 專案特色 Features
- (update on 5/16)
- 搜尋想要的餐廳，關鍵字不限於英文或中文，搜尋範圍包含分類、餐廳名稱等
- RWD介面讓您瀏覽時有更好的使用者體驗
- 熱門店家可以迅速讓您知道評價最好的前幾名店家
- 收藏店家正在開發中功能，不要點

## 啟動方式 How to install
1. 將專案clone到本地端
```
git clone https://github.com/emily40830/tasteBuds_express.git
```
2. 進入到專案資料夾後，安裝packages(依照package.json的項目安裝)
```
npm install
```
3. 透過nodemon啟動專案
```
npm run dev
```
4. 在terminal可以看到 `Running on the localhost:3000`，開啟瀏覽器在網址列輸入localhost:3000或點[這裡](http://localhost:3000)

- p.s: 也可透過 `npm start`啟動伺服器
5. 另開一終端機視窗，啟動資料庫並放入種子資料
```
npm run seed
```


## 開發環境 Development environment
- Node.js: v10.16.0
- Express: v4.17.1
- Express-Handlebars: v4.0.4
- Mongoose: v5.9.14

## Author
Qi-Hua(Emily) Wang
