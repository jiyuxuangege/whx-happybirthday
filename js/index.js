$(function() {
  var benediction = "祝 翁 小 雪 十 八 周 岁 五 周 年 生 日 快 乐 🎂 🎂 ！".split(' ');
  var benediction2 = `
  春 天 里 的 第 一 个 星 座 ， 白 羊 座 的 你 阳 光 ， 热 情 ， 天 真 ， 无 邪 ！ 和 小 狗 🐶 小 鸡 🐤 有 说 不 完 的 话 。 让 人 觉 得 又 好 笑 又 喜 欢 。 真 的 
  很 喜 欢 和 你 在 一 起 的 感 觉 ！ 喜 欢 你 的 一 言 不 合 就 臭 脸 的 坏 脾 气 ， 但 是 句 句 又 在 理 。 没 过 多 久 又 会 和 我 重 归 于 好 。 
  然 后 我 家 小 可 爱 有 自 己 的 工 作 咯 ！ 在 这 里 祝 小 可 爱 工 作 顺 利 ！ 最 重 要 的 是 要 一 直 开 开 心 心 下 去 ！ 再 然 后 祝 福 的 话 太 多 ， 以 后 慢 慢 补 充 ！
  `.split(' ');
  var benediction3 = `
  
  `


  function print(text, dom, time) {
    var timer = null;
    var timeIdx= 0;
    var countIdx =  text.length;
    timer = setInterval(function() {

      dom.text(dom.text() + text[timeIdx])

      timeIdx++;
      if (timeIdx === countIdx) {
        clearInterval(timer)
      }
    }, time)
  
  }

  var benedDom = $("#benediction");
  var benedDom2 = $("#benediction2");
  print(benediction, benedDom, 50)
  setTimeout(function() {
    print(benediction2, benedDom2, 200)
  }, 1000)
  // 其他应用在click/touch时触发播放

  function audioAutoPlay(){

    var audio = $('audio')[0];
    var play = function() {
        audio.play();
    };
    
    audio.play();

    //weixin
    document.addEventListener("WeixinJSBridgeReady", function(){
      WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
        network = e.err_msg.split(":")[1];  //结果在这里
        play();
    });
    }, false);

    document.addEventListener("touchstart", play, false);
    document.addEventListener("click", play, false);
  }
  audioAutoPlay();

  // $("#btn").click(function(e) {
  //   var audio = $('audio')[0];
  //   audio.play();
  //   $(this).hide()
  //   $('.box').show()
    
  // })
})