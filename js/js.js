$(document).ready(function(){
    let ht = $(window).height();
    $('section').height(ht);
    
    $('window').resize(function(){
        let ht = $(window).height();
        $('section').height(ht);
    })


    // 메인화면 목록 설정
    $('.main ul li').click(function(e){
        let ht = $(window).height();
        e.preventDefault()
        let ii = $(this).index();
        $('html,body').stop().animate({scrollTop:ht*(ii+1)},800)
    })
    // nav 목록 설정
    $('.nav li').click(function(e){
        let ht = $(window).height();
        e.preventDefault()
        let i = $(this).index();
        $('html,body').stop().animate({scrollTop:ht*i},800)
    })

    $(window).scroll(function(){
        let sc= $(this).scrollTop()
        let ht = $(window).height();

        if(sc==0){
            $('.nav').css({'display':'none'})
        }
        else{
            $('.nav').css({'display':'block'})

            setInterval(function(){
                $('.info article strong').css({'display':'block'})
                $('.info article strong').eq(0).stop().animate({'margin-left':'400px'},500)
                $('.info article strong').eq(1).stop().animate({'margin-left':'420px'},00)
                $('.info article strong').eq(2).stop().animate({'margin-left':'210px'},1000)
                $('.info article strong').eq(3).stop().animate({'margin-left':'215px'},1000)
                $('.info article strong').eq(4).stop().animate({'margin-left':'160px'},1000)
                $('.info article strong').eq(5).stop().animate({'margin-left':'250px'},1000)
            },1000) 
        }
    })
            
    // 숫자증가
    $('.info article strong').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        
        $({ countNum: $this.text()}).animate({
            countNum: countTo 
        },
        {
        duration: 2500,
        easing:'linear',
        step: function() {
        $this.text(Math.floor(this.countNum));
        },
        complete: function() {
        $this.text(this.countNum);
        }
        });  
    });




    // nav 목록 전환
    $('.nav>li').click(function(){
        let n = $(this).index();
        $('.nav li i').removeClass('on')
        $('.nav li i').eq(n).addClass('on')
        $('.nav li p').removeClass('on01')
        $('.nav li p').eq(n).addClass('on01')
        $('.nav li div').removeClass('on02')
        $('.nav li div').eq(n).addClass('on02')
    })


    // 메인화면 목록 눌렀을때 nav 목록 전환
    $('.main ul>li').click(function(){
        let iii = $(this).index();
        $('.nav li i').removeClass('on')
        $('.nav li i').eq(iii+1).addClass('on')
        $('.nav li p').removeClass('on01')
        $('.nav li p').eq(iii+1).addClass('on01')
        $('.nav li div').removeClass('on02')
        $('.nav li div').eq(iii+1).addClass('on02')
    })


    // 선 생기는 효과
    setInterval(function(){
        $('.main div').stop().animate({'height':'480px'},2000)
    },2000)
    setInterval(function(){
        $('.main ul li').stop().animate({'opacity':'1'},2000)
    },3800)
    setInterval(function(){
        $('.emo').stop().animate({'opacity':'1'},500)
        $('.main h2').stop().animate({'opacity':'1'},500)
    },5800)



    // 팝업창 설정
    $('#pro01_design').click(function(){
        $('.popup').css({'display':'block'})
        $('.popup_txt').removeClass('on')
        $('.popup_txt').eq(0).addClass('on')
    })
    $('#pro02_design').click(function(){
        $('.popup').css({'display':'block'})
        $('.popup_txt').removeClass('on')
        $('.popup_txt').eq(1).addClass('on')
    })
    $('#pro03_design').click(function(){
        $('.popup').css({'display':'block'})
        $('.popup_txt').removeClass('on')
        $('.popup_txt').eq(2).addClass('on')
    })
    $('.close').click(function(){
        $('.popup').css({'display':'none'})
    })





})