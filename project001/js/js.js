$(document).ready(function(){

    // 서브메뉴 설정
    $('.nav li').mouseenter(function(){
        // 슬라이드
        let i = $(this).index()
        console.log(i)
        $('.sub_menu>div').slideUp()
        $('.sub'+(i+1)).slideDown()

        // 돌하르방 이미지
        let x = $(this).index()
        x++;
        $('.nav li a').css({'background-image':''})
        $('.nav li a').eq(x-1).css({'background-image':'url(../img/hrb_li.png)'})
    })

    $('header').mouseleave(function(){
        $('.sub_menu>div').slideUp()
        $('.nav li a').css({'background-image':''})
    });


    // 찾아오는길 텍스트
    $('.purple').click(function(){
        $('.map_txt div').removeClass('on')
        $('.map_txt div').eq(0).addClass('on')
    })
    $('.green').click(function(){
        $('.map_txt div').removeClass('on')
        $('.map_txt div').eq(1).addClass('on')
    })
    $('.red').click(function(){
        $('.map_txt div').removeClass('on')
        $('.map_txt div').eq(2).addClass('on')
    })
    $('.blue').click(function(){
        $('.map_txt div').removeClass('on')
        $('.map_txt div').eq(3).addClass('on')
    })
    $('.orange').click(function(){
        $('.map_txt div').removeClass('on')
        $('.map_txt div').eq(4).addClass('on')
    })
    $('.brown').click(function(){
        $('.map_txt div').removeClass('on')
        $('.map_txt div').eq(5).addClass('on')
    });


    //동영상 플레이버튼
    let i = 0
    $('.video_btn i').click(function(){
        i++; if(i>2)i=1;
        if(i==1){
            let vid = $('.main').find('video').get(0)
            vid.pause()
            $('.video_btn i').eq(0).css({'opacity':'1'})
            $('.video_btn i').eq(1).css({'opacity':'0'})
        }
        else{
            let vid = $('.main').find('video').get(0)
            vid.play()
            $('.video_btn i').eq(1).css({'opacity':'1'})
            $('.video_btn i').eq(0).css({'opacity':'0'})
        };
    });


    // 프로젝트 버튼설정
        // 어리목버튼설정
    let a = 0
    $('.alm .right').click(function(){    
        a++;
        $('.alm .box_p').css({'transform':'rotateY('+60*a+'deg)'})
    })
    $('.alm .left').click(function(){
        a--;
        $('.alm .box_p').css({'transform':'rotateY('+60*a+'deg)'})
    });
        // 성판악버튼설정
    let b = 0
    $('.spa .right').click(function(){    
        b++;
        $('.spa .box_p').css({'transform':'rotateY('+60*b+'deg)'})
    })
    $('.spa .left').click(function(){
        b--;
        $('.spa .box_p').css({'transform':'rotateY('+60*b+'deg)'})
    });
        // 관음사버튼설정
    let c = 0
    $('.gms .right').click(function(){    
        c++;
        $('.gms .box_p').css({'transform':'rotateY('+60*c+'deg)'})
    })
    $('.gms .left').click(function(){
        c--;
        $('.gms .box_p').css({'transform':'rotateY('+60*c+'deg)'})
    });


    // 날씨나오기 버튼
    let w = 0
    $('.weather').click(function(){
        console.log
        w++; if(w>2)w=1;
        if(w==1){
            $('.widgets').stop().animate({'margin-left':'-750px', 'opacity':'1'},100)
            $('.weather').addClass('on2')
        }
        else{
            $('.widgets').stop().animate({'margin-left':'1000px', 'opacity':'0'},0)
            $('.weather').removeClass('on2')
        }    
    });
    // 날씨배경색 보기
    let wb = 0
    $('.color').click(function(){
        console.log
        wb++; if(wb>2)wb=1;
        if(wb==1){
            $('.widgets').addClass('on')
        }
        else{
            $('.widgets').removeClass('on')
        }
    });


    // 페이지 위로가기 버튼 나타나고 없어지게
    $(window).scroll(function(){
        let sc = $(window).scrollTop();
        if(sc>240){
            $('.page_up i').css({'opacity':'1'})
        }
        else{
            $('.page_up i').css({'opacity':'0'})
        }
    })
    // 페이지 위로
    $('.page_up i').click(function(){
        $(window).scrollTop(0)
    })



    // 탐방정보나오기 버튼
    let t = 0
    $('.coss').click(function(){
        t++; if(t>2)t=1;
        if(t==1){
            $('.coss_box').stop().animate({'margin-left':'-770px', 'opacity':'1'},1000)
            $('.coss').addClass('on3')
        }
        else{
            $('.coss_box').stop().animate({'margin-left':'1000px', 'opacity':'0'},500)
            $('.coss').removeClass('on3')
        }
    })





    // 768px이하에서
    let mw = $(window).width()
    if(mw<=768){
        // 탐방정보나오기 버튼
        let t = 0
        $('.coss').click(function(){
            t++; if(t>2)t=1;
            if(t==1){
                $('.coss_box').stop().animate({'margin-left':'-300px', 'opacity':'1'},1000)
                $('.coss').addClass('on3')
            }
            else{
                $('.coss_box').stop().animate({'margin-left':'1000px', 'opacity':'0'},500)
                $('.coss').removeClass('on3')
            }
        })
        let w = 0
            $('.weather').click(function(){
            w++; if(w>2)w=1;
            if(w==1){
                $('#ww_053ad434b0431').stop().animate({'margin-left':'480px', 'opacity':'1'},100)
                $('.weather').addClass('on2')
            }
            else{
                $('#ww_053ad434b0431').stop().animate({'margin-left':'1000px', 'opacity':'0'},1000)
                $('.weather').removeClass('on2')
            }    
        });
    }



    // 검색버튼설정
    $('.search div').click(function(){
        $('.search').css({'width':'200px'})
        $('.search input').css({'display':'block', 'width':'110px'})
    })














})