
  // HTMLが読み込み完了された場合
  $(window).on('load', function(){
    console.log('loadイベントが発生しました');
  }),
  // 画面をスクロールした場合
  $(window).on('scroll', function(){
    console.log('scrollイベントが発生しました');
  });