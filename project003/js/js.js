$(document).ready(function(){
    
    /* 화면 리사이징 */
    let ht = $(window).height();
    $('section').height(ht);

    // 화면 리스트
    $('.nav li').click(function(e){
        e.preventDefault()
        let i = $(this).index();
        $('html,body').stop().animate({scrollTop:ht*i},800)
    })

    /* 프로필 화면전환 버튼 */
    $('.pro_btn01').click(function(){
        $('.profile_01').stop().animate({'left':'-100%'},2000)
        $('.profile_02').stop().animate({'left':0},2000)
    })
    $('.pro_btn02').click(function(){
        $('.profile_01').stop().animate({'left':0},2000)
        $('.profile_02').stop().animate({'left':'100%'},2000)
    })

    /* 캐릭터 메트릭스효과 */
    $('.character_01 img').mouseenter(function(){
        $('.ch_bg01').css({'opacity':'1'})
    })
    $('.character_01 img').mouseleave(function(){
        $('.ch_bg01').css({'opacity':0})
    })
    $('.character_02 img').mouseenter(function(){
        $('.ch_bg02').css({'opacity':'1'})
    })
    $('.character_02 img').mouseleave(function(){
        $('.ch_bg02').css({'opacity':0})
    })

    // 캐릭터 화면 전환설정
    $('.character_01>img').click(function(){
        $('.character_01').stop().animate({'width':'100%'},1000)
        $(this).css({'transform':'scale(1.4)'})
        $('.character_02').stop().animate({'width':0, 'opacity':0},1000)
        $('.character h2').css({'opacity':0})
        
        $('.character_01>img').mouseleave(function(){
            $(this).css({'transform':'rotateX(90deg)'})
            $('.name01').css({'display':'block'})
        })
    })

    $('.character_02>img').click(function(){
        $('.character_02').stop().animate({'width':'100%'},1000)
        $(this).css({'transform':'scale(1.4)'})
        $('.character_01').stop().animate({'width':0, 'opacity':0},1000)
        $('.character h2').css({'opacity':0})

        $('.character_02>img').mouseleave(function(){
            $(this).css({'transform':'rotateX(90deg)'})
            $('.name02').css({'display':'block'})
        })
    })
    


    // 화면전환 돌아가기 버튼
    $('.reset_btn01').click(function(){
        $('.character_01').stop().animate({'width':'50%'},800)
        $(this).css({'transform':'scale(1.4)'})
        $('.character_02').stop().animate({'width':'50%', 'opacity':1},800)
        $('.character h2').css({'opacity':1})
        $('.character_01>img').css({'transform':'rotateX(0deg)'})
        $('.name01').css({'display':'none'})

        $('.character_01>img').mouseleave(function(){
            $(this).css({'transform':'rotateX(0deg)'})
            $('.name01').css({'display':'none'})
        })
    })

    $('.reset_btn02').click(function(){
        $('.character_02').stop().animate({'width':'50%'},800)
        $(this).css({'transform':'scale(1.4)'})
        $('.character_01').stop().animate({'width':'50%', 'opacity':1},800)
        $('.character h2').css({'opacity':1})
        $('.character_02>img').css({'transform':'rotateX(0deg)'})
        $('.name02').css({'display':'none'})

        $('.character_02>img').mouseleave(function(){
            $(this).css({'transform':'rotateX(0deg)'})
            $('.name02').css({'display':'none'})
        })
    })

    //
    $('.name01 div:nth-child(1)').click(function(){
        $('.name01 div:nth-child(1) img').removeClass('see')
        $('.name01 div:nth-child(1) img').addClass('see')
    })







    
    /* tv 버튼 */
    let b = 0
    $('.down_btn img').click(function(){
        b++; if(b>5)b=1;
        console.log(b)
        $(this).css({'transform':'rotate('+72*b+'deg)'})
        $('#tv01 div>img').removeClass('on')
        $('#tv01 div>img').eq(b-1).addClass('on')
    })
    
    // 동영상 전환
    $('.music_list li').click(function(){
        let m = $(this).index();
        $('.vid video').removeClass('on01')
        $('.vid video').eq(m).addClass('on01')
        
        $('.music_list li').removeClass('on02')
        $(this).addClass('on02')
    })


    /* 동영상 플레이 */
    let m = 0
    $('.video_btn').click(function(){
        m++; if(m>2)m=1;
        if(m==1){
            let vid = $('.vid').find('video').get(0)
            vid.pause()
            // $('.video_btn i').eq(0).css({'opacity':'1'})
            // $('.video_btn i').eq(1).css({'opacity':'0'})
        }
        else{
            let vid = $('.vid').find('video').get(0)
            vid.play()
            // $('.video_btn i').eq(1).css({'opacity':'1'})
            // $('.video_btn i').eq(0).css({'opacity':'0'})
        };
    });


    
})