$(document).ready(function(){

// 베스트 _ 주간 좌우버튼 설정
let i = 0;
$('#week_rbtn').click(function(){
    i++; if(i>3)i=3;
    if(i<4){
    $('.week_list li').css({'left':-210*i})
    }
})
$('#week_lbtn').click(function(){
    i--; if(i<0)i=0;
    if(i>-1){
    $('.week_list li').css({'left':-210*i})
    }
})
// 베스트 _ 실시간 좌우버튼 설정
let s = 0;
$('#time_rbtn').click(function(){
    s++; if(s>3)s=3;
    if(s<4){
    $('.time_list li').css({'left':-210*s})
    }
})
$('#time_lbtn').click(function(){
    s--; if(s<0)s=0;
    if(s>-1){
    $('.time_list li').css({'left':-210*s})
    }
})


// 신간 _ 신간도서 좌우버튼 설정
let n = 0;
$('#new_rbtn').click(function(){
    n++; if(n>3)n=3;
    if(n<4){
    $('.new_list li').css({'left':-210*n})
    }
})
$('#new_lbtn').click(function(){
    n--; if(n<0)n=0;
    if(n>-1){
    $('.new_list li').css({'left':-210*n})
    }
})


// 장바구니 담기설정
    let a = 0
$('.all01').click(function(){
    a++; if(a>2)a=1;
    if(a==1){
        $('.week_list input').attr('checked', true);
    }
    else{
        $('.week_list input').attr('checked', false);
    }
    console.log(a)
})


$('.shop01').click(function(){
    let ch = $('.week_list input').size('checked', true);
    $('.shopping span').text(ch);
})


})