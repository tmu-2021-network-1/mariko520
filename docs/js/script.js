/*$(window).bind('scroll',function(e){
    parallaxScroll();
});

function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('#section2').css('background-position-y', ( 0 - (scrolled * 0.1)) + 'px');
    $('#content2').css('top', ( 0 - (scrolled * .25) ) + 'px');
    $('#parallax-bg3').css('top', ( 0 - (scrolled * .5) ) + 'px');
};

var ScrollrevealFade ={
    scale:0.5,
}

sr.reveal('.scrollreveal-fade', ScrollrevealFade, 100);*/


  //以下画像切り替え
  window.onscroll = function(){  
    var scrollTop = window.pageYOffset ;  //スクロール量を代入する
    
    if (scrollTop == 0 ) {   //最上部に戻ってきた時
    $(".js-image").css('opacity', '1')
      $('.js-image').css('transition', '0.5s')
    
      $(".git-image").css('opacity', '0')
      $('.git-image').css('transition', '0.5s')
    }
    if (scrollTop > 5200 ) {   
      $(".js-image").css('opacity', '0')
      $('.js-image').css('transition', '0.5s')
    
      $(".git-image").css('opacity', '1')
      $('.git-image').css('transition', '0.5s')
    }
    }


    //傘表示のアニメーション

 ScrollReveal().reveal('.kasa');
var ScrollrevealFade = {
	origin: 'left',
	distance: '0px',//移動範囲
	scale: 0.5,//拡大表示（１で横スクロールが始まる）
	rotate: { x: 0, y: 0, z: 300 }, //xは縦回転、yは横回転、zは傾き（風車みたいな感じ）
	duration: 1200, //アニメーションの速度
	delay :300 //要素が表示するまでの待機時間（ディレイ）
};

//sr.reveal('.kasa', ScrollrevealFade, 100);


//逆方向の連動するスクロール
d3.selectAll('.oudan > div').selectAll('p')
  .data(d3.range(1000))
  .join('p')
  .text(d => d3.format('03')(d))
  .style('color', `#fff`)
  .style('background-color', d => `hsla(0, 0%, 0%, ${d/1000})`)

const a = document.querySelector('.a');
const c = document.querySelector('.c');

c.scrollTop = c.scrollHeight;

// onscroll function
a.onscroll = function() {
  c.scrollTop = c.scrollHeight - this.scrollTop;
}
c.onscroll = function() {
  a.scrollTop = a.scrollHeight - this.scrollTop;
}