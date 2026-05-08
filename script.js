/* =====================================================
   吳Sir的尼泊爾遠足遊記 — 主頁 JavaScript (script.js)
   這個檔案控制主頁的互動效果。
   按 F12 → Console 分頁，可以執行 JavaScript！
   ===================================================== */

// 當整個 HTML 頁面載入完畢後執行
document.addEventListener('DOMContentLoaded', function () {

    // --- 1. 在 Console 顯示歡迎訊息 ---
    // 試試在 F12 → Console 輸入：  document.title
    console.log('🏔️ 歡迎來到吳Sir的尼泊爾遠足遊記！');
    console.log('👨‍💻 請按 F12 探索每個網頁的原始碼，學習更多技巧！');
    console.log('📂 目前網頁標題：', document.title);

    // --- 2. 為所有卡片加入點擊音效（用 Console 訊息模擬）---
    const cards = document.querySelectorAll('.card'); // 選取所有 class="card" 的元素

    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            // 取得卡片的標題文字
            const cardTitle = this.querySelector('h4').textContent;
            console.log('📖 你選擇了：', cardTitle);
        });
    });

    // --- 3. 顯示目前日期在 Console ---
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    console.log('📅 今天是：', today.toLocaleDateString('zh-Hant-HK', options));

    // --- 4. 計算行程天數 ---
    const tripStart = new Date('2024-10-01'); // 出發日期
    const tripEnd   = new Date('2024-10-17'); // 回程日期
    const tripDays  = (tripEnd - tripStart) / (1000 * 60 * 60 * 24); // 毫秒換算天數
    console.log(`✈️ 吳Sir的尼泊爾之旅共 ${tripDays} 天`);

});