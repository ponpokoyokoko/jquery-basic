$(function(){
  // 文字色変化ボタンがクリックされた場合
  $('#change-color').on('click',function(){
    $('#target').css('color','red');
  });

  // 文字内容変化ボタンがクリックされた場合
  $('#change-text').on('click',function(){
   $('#target').text('Hello');
  });

  // フェードアウトボタンがクリックされた場合
  $('#fade-out').on('click',function(){
    $('#target').fadeOut();
  });

  // フェードインボタンがクリックされた場合
  $('#fade-in').on('click',function(){
    $('#target').fadeIn();
  });
});