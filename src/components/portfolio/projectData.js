export const projectData = {
  personalWeb: {
    id: "personal_website",
    title: "個人網站",
    description: "SPA個人網站。",
    feature: ["一鍵切換網站配色", "一些酷酷的特效", "RWD"],
    tech: [
      "React + vite建立專案",
      "使用預處理器SASS編輯樣式",
      "使用animejs建立動畫特效",
      "圖片設定lazy loading，提高畫面載入速度",
      "使用Sqoosh無損壓縮圖片，優化使用者體驗",
    ],
    update: [],
    image: ["web1", "web2", "web3"],
    url: "https://tyyyho.github.io/personal_web/",
    github: "https://github.com/TyyyHo/personal_web",
  },
  udb: {
    id: "udb",
    title: "Undecember遊戲資料庫",
    description: "惡月十三的資料庫，提供遊戲機制、物品與技能的資料彙整。",
    feature: ["攻略彙整", "技能篩選器", "一鍵切換技能中英文名稱", "RWD"],
    tech: [
      "React cli建立專案",
      "使用預處理器SASS編輯樣式",
      "採用React Router來進行路由設定",
      "React.lazy對未立即用到的頁面進行JS檔案拆分以及緩讀取，提高初次載入速度",
      "圖片設定lazy loading，提高畫面載入速度",
      "React.helmet優化SEO",
      "使用Sqoosh無損壓縮圖片，優化使用者體驗",
    ],
    update: ["根據使用者回饋新增及修改資料"],
    image: ["udb/1.webp", "udb/2.webp", "udb/3.webp"],
    url: "https://undecemberdb.web.app/",
    github: "https://github.com/TyyyHo/Udb",
  },
  "ud-simulator": {
    id: "ud-simulator",
    title: "Undecember屬性模擬器",
    description: "惡月十三的屬性加點模擬器。",
    feature: [
      "模擬遊戲內的設置，使用者可反覆調整自身屬性",
      "一鍵匯入/匯出，便於分享",
      "RWD",
    ],
    tech: [
      "React cli建立專案",
      "使用預處理器SASS編輯樣式",
      "設計一鍵匯入/匯出功能，將核心狀態編寫為字串型態，再透過URI編碼將字串轉為瀏覽器網址列可接收的字元，方便使用者從網址列直接匯入",
      "因背景圖片較大，壓縮後仍可能影響使用者體驗，加入Loading page來優化",
      "使用Sqoosh無損壓縮圖片，優化使用者體驗",
    ],
    update: [
      "根據使用者回饋新增使用說明以及提示標語",
      "根據配置點數時的限制來優化UI，令使用者能一眼明白當前限制",
    ],
    image: ["ud-simulator/1.webp", "ud-simulator/2.webp", "ud-simulator/3.webp"],
    url: "https://ud-simulator.web.app/",
    github: "https://github.com/TyyyHo/U-Simulator",
  },
};
