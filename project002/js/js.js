$(document).ready(function(){
    // nav 목록 버튼
    let a = 0
    $('.nav i').click(function(){
    a++; if(a>1)a=0;
    if(a==1){
        $('.nav li').css({'display':'block'})
        $('.notice').css({'display':'none'})
    }
    else{
        $('.nav li').css({'display':'none'})
        $('.notice').css({'display':'block'})
    }
    })

    //  map버튼 설정
    $('.map_btn div:nth-child(1)').click(function(){
        $('.map article div').removeClass('on')
        $('.store_picture01').addClass('on')
        $('.google_map').removeClass('on')
        $('.map_picture01>iframe').addClass('on')
    })
    $('.map_btn div:nth-child(2)').click(function(){
        $('.map article div').removeClass('on')
        $('.store_picture02').addClass('on')
        $('.google_map').removeClass('on')
        $('.map_picture02>iframe').addClass('on')
    })
    $('.map_btn div:nth-child(3)').click(function(){
        $('.map article div').removeClass('on')
        $('.store_picture03').addClass('on')
        $('.google_map').removeClass('on')
        $('.map_picture03>iframe').addClass('on')
    })
    $('.map_btn div:nth-child(4)').click(function(){
        $('.map article div').removeClass('on')
        $('.store_picture04').addClass('on')
        $('.google_map').removeClass('on')
        $('.map_picture04>iframe').addClass('on')
    })

    // info 화면전환
    $('.info_list li').eq(0).click(function(){
        $('.info_list li').css({'opacity':'0'})
        $('.info01').css({'opacity':'1'})
        $('.cross i').css({'opacity':'1'})
    })
    $('.info_list li').eq(1).click(function(){
        $('.info_list li').css({'opacity':'0'})
        $('.info02').css({'opacity':'1'})
        $('.cross i').css({'opacity':'1'})
    })
    $('.info_list li').eq(2).click(function(){
        $('.info_list li').css({'opacity':'0'})
        $('.info03').css({'opacity':'1'})
        $('.cross i').css({'opacity':'1'})
    })
    $('.info_list li').eq(3).click(function(){
        $('.info_list li').css({'opacity':'0'})
        $('.info04').css({'opacity':'1'})
        $('.cross i').css({'opacity':'1'})
    })
    $('.cross i').click(function(){
        $(this).css({'opacity':'0'})
        $('.info_list li').css({'opacity':'1'})
        $('.info div').css({'opacity':'0'})
    })

    


    $(window).resize(function(){
        let ht = $(window).height();
        $('section').height(ht);
        $('section').eq(2).height(ht+1620+'px');
        $('section').eq(4).height(ht+2360+'px');
    })

    $('.nav li').click(function(){
        let ht = $(window).height();
        let i = $(this).index();
        // let s = $('section'.eq(i)).height();
        $('html,body').stop().animate({'scrollTop':ht*i+150+'px'}, 1400)
        if(i>2){
            $('html,body').stop().animate({'scrollTop':ht*i+1820+'px'}, 1400)
        }
        if(i>3){
            $('html,body').stop().animate({'scrollTop':ht*i+2060+'px'}, 1400)
        }
        if(i>4){
            $('html,body').stop().animate({'scrollTop':ht*i+4600+'px'}, 1400)
        }
    })








    // 팝업창 설정
    $('.korean_img div').click(function(){
        $('.popup').css({'display':'block'})
    })
    $('.close').click(function(){
        $('.popup').css({'display':'none'})
    })

    // 팝업창 클릭시 설정
    $('.korean_img div').click(function(){
        let p = $(this).index();
        $('.popup_txt div').removeClass('on')
        $('.popup_txt div').eq(p).addClass('on')
    })



    // 장바구니 수량
    $('.popup_txt div p').click(function(){
        let pp = $('.popup_txt input').size('number');

        $('.shopping span').text(pp);
    })


})