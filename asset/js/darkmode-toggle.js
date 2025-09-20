// 
// ----- darkmode-toggle.js の構成 -----
// 1. ボタンによるダークモード切り替えの SourceCode
// 1-1. 関数実行エリア
// 1-2. 関数定義エリア
// ----- darkmode-toggle.js の構成 -----
// 

// 
// ↓↓↓ 1. ボタンによるダークモード切り替えの SourceCode ↓↓↓
// ↓↓ 1-1. 関数実行エリア ↓↓

// ページ読み込み時の初期設定
document.addEventListener('DOMContentLoaded', function() {
  // ローカルストレージから保存された設定を読み込み
  const savedTheme = localStorage.getItem('theme');
  const currentHour = new Date().getHours();
  
  if (savedTheme) {
    // 保存された設定がある場合はそれを適用
    if (savedTheme === 'dark') {
      applyDarkMode();
    } else {
      applyLightMode();
    }
  } else {
    // 保存された設定がない場合は時間に基づいて初期設定
    if (currentHour >= 20 || currentHour < 7) {
      applyDarkMode();
    } else {
      applyLightMode();
    }
  }
  
  // ボタンのテキストを更新
  updateButtonText();
});

// ↑↑ 1-1. 関数実行エリア ↑↑

// ↓↓ 1-2. 関数定義エリア ↓↓

// ↓ ライトモードを適用する関数 ↓
function applyLightMode() {
  document.body.classList.add('changelight');
  document.getElementById("title").classList.add('changelight');
  document.getElementById("mode").classList.add('changelight');
  document.getElementById("tail").classList.add('changelight');
  
  setTimeout(function() {
    document.documentElement.classList.remove('dark');
    document.body.classList.remove('changelight');
    document.getElementById("title").classList.remove('changelight');
    document.getElementById("mode").classList.remove('changelight');
    document.getElementById("tail").classList.remove('changelight');
  }, 500);
  
  // ローカルストレージに設定を保存
  localStorage.setItem('theme', 'light');
  console.log("ライトモードに切り替えました");
}

// ↓ ダークモードを適用する関数 ↓
function applyDarkMode() {
  document.documentElement.classList.add('dark');
  
  // ローカルストレージに設定を保存
  localStorage.setItem('theme', 'dark');
  console.log("ダークモードに切り替えました");
}

// ↓ ボタンのテキストを更新する関数 ↓
function updateButtonText() {
  const modeButton = document.getElementById("mode");
  if (document.documentElement.classList.contains('dark')) {
    modeButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    modeButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

// ↓ ボタンクリックでダークモード切り替えを行う関数 ↓
function toggleDarkMode() {
  // ボタンのテキストを先に更新（即座に反応）
  if (document.documentElement.classList.contains('dark')) {
    // 現在がダークモードの場合、ライトモードに切り替え
    document.getElementById("mode").innerHTML = '<i class="fa-solid fa-moon"></i>';
    applyLightMode();
  } else {
    // 現在がライトモードの場合、ダークモードに切り替え
    document.getElementById("mode").innerHTML = '<i class="fa-solid fa-sun"></i>';
    applyDarkMode();
  }
}

// ↓ 設定をリセットする関数（デバッグ用） ↓
function resetThemeSettings() {
  localStorage.removeItem('theme');
  console.log("テーマ設定をリセットしました");
  location.reload(); // ページをリロードして初期状態に戻す
}

// ↑↑ 1-2. 関数定義エリア ↑↑
// ↑↑↑ 1. ボタンによるダークモード切り替えの SourceCode ↑↑↑
