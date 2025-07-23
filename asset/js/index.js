// 
// ----- index.js の構成 -----
// 1. Loading animation の SourceCode
// 1-1. 関数実行エリア
// 2. DarkMode-LightMode の SourceCode
// 2-1. 関数実行エリア
// 2-2. 関数定義エリア
// ----- index.js の構成 -----
// 

// 
// ↓↓↓ 1. Loading animation の SourceCode ↓↓↓
// ↓↓ 1-1. 関数実行エリア ↓↓

// ↓ 初回りクエストのチェックと実行
// window.addEventListener('load', function() {
//   const loading = document.querySelector('#loading');
//   const firstVisit = localStorage.getItem('firstVisit');
//   if (!firstVisit) {
//     // 初回のアクセス時のみローディングアニメーションを表示
//     localStorage.setItem('firstVisit', 'true');
//     loading.classList.add('loaded');
//   } else {
//     // 二回目以降はローディングアニメーションを非表示にする
//     loading.style.display = 'none';
//   }
// });

// ↓ #splashエリアをフェードアウト ↓
$("#loading").delay(250).fadeOut(250);

// ↑↑ 1-1. 関数実行エリア ↑↑
// ↑↑↑ 1. Loading animation の SourceCode ↑↑↑
// 

// 
// ↓↓↓ 2. DarkMode-LightMode の SourceCode ↓↓↓
// ↓↓ 2-1. 関数実行エリア ↓↓

const nowfirst = new Date();

timeCheckFirst();

// ↓ 15sec毎に timeCheck()関数を実行 /非同期処理
setInterval(timeCheck, 60000);

// ↑↑ 2-1. 関数実行エリア ↑↑

// ↓↓ 2-2. 関数定義エリア ↓↓
// ↓ Definition of function changeLight() ↓
function changeLight() {
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
  // document.querySelector('#mode').innerHTML = '<i class="fa-solid fa-moon"></i>&nbsp;Dark';
}

// ↓ Definition of function changeDark() ↓
function changeDark() {
  document.documentElement.classList.add('dark');
  // document.querySelector('#mode').innerHTML = '<i class="fa-solid fa-circle";"></i>&nbsp;Light';
}

// ↓ Definition of function timeCheck() ↓
function timeCheck(){
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentMinute_2Digits = currentMinute.toString().padStart(2, '0');

  // ↓ 現在の時刻からのif文分岐
  if(
    (currentHour === 7 && currentMinute >= 0) || // 午前8時00分以降
    (currentHour > 7 && currentHour < 20) ||    // 午前8時から午後8時の間
    (currentHour === 19 && currentMinute >= 59) // 午後8時00分まで
  ) {
    // 現在時刻がAM8:00-PM19:59の場合
    // if文は darkmode から lightmode に切り替わった際の最初の処理
    if(document.documentElement.classList.contains('dark')) {
      // ↓ 取得した現在時刻の表示
      console.log(`現在時刻 ${currentHour}:${currentMinute_2Digits}`);
      // ↓ mode の表示
      console.log("Light mode(8:00-20:00)");
    }
    changeLight();
  } else {
    // 現在時刻がAM8:00-PM19:59以外の場合
        // if文は lightmode から darkmode に切り替わった際の最初の処理
    if(!document.documentElement.classList.contains('dark')) {
      // ↓ 取得した現在時刻の表示
      console.log(`現在時刻 ${currentHour}:${currentMinute_2Digits}`);
      // ↓ mode の表示
      console.log("Dark mode(20:00-8:00)");
    }
    changeDark();
  }
}

// ↓ Definition of function timeCheckFirst() ↓
function timeCheckFirst() {
  timeCheck();
  // ↓ if文分岐: 初回の timeCheck() 関数の実行後、コンソールにモード情報を表示する時の分岐処理
  if(!document.documentElement.classList.contains('dark')) {
    // ↓ 取得した現在時刻の表示
    console.log(`表示時刻 ${nowfirst.getHours()}:${nowfirst.getMinutes().toString().padStart(2, '0')}`);
    // ↓ mode の表示
    console.log("Light mode(7:00-20:00)");
  } else if(document.documentElement.classList.contains('dark')) {
    console.log(`表示時刻 ${nowfirst.getHours()}:${nowfirst.getMinutes().toString().padStart(2, '0')}`);
    // ↓ mode の表示
    console.log("Dark mode(20:00-7:00)");
  }
}

// ↓ toggleDarkMode()
function toggleDarkMode() {
  if (document.documentElement.classList.contains('dark')) {
    // darkクラスが含まれているならライトモードに変更
    changeLight();
  } else {
    // darkクラスが含まれていないならダークモードに変更
    changeDark();
  }
}
// ↑↑ 2-2. 関数定義エリア ↑↑
// ↑↑↑ 2. DarkMode-LightMode の SourceCode ↑↑↑
