$(document).ready(function(){
    $('.hb_menu').click(function(){
        $('.menu_click').toggleClass('menu_click_2');
        $('.menu_button').toggleClass('menu_button2');
    })
});

window.addEventListener("load",function(){
    var oBox = document.getElementById('index_box');
    var oJaXiLi = document.getElementById('menu2_li');
    var oBbqUl = document.getElementById('bbq_ul');
    var oayLi = document.getElementById('activity');
    var oayUl = document.getElementById('activity_ul');
    var oPpLi = document.getElementById('people');
    var oPpUl = document.getElementById('people_ul');
    var oMenu = document.getElementById('hb_menu');
    btnSpeed = 5;
    if(getStyle(oMenu, 'display') == 'none')
    {
        oPpUl.style.display = 'none';
        oayUl.style.display = 'none';
        oBbqUl.style.display = 'none';
        oPpUl.style.opacity = 0;
        oayUl.style.opacity = 0;
        oBbqUl.style.opacity = 0;

            oPpLi.onmouseover = function ()
        {
            oPpUl.style.display = 'block';
            startMove(oPpUl, { height:189,opacity: 100});


        };
        oPpLi.onmouseout = function ()
        {
            startMove(oPpUl,{ height:0,opacity: 0},function(){
                oPpUl.style.display = 'none';
            });

        };

        oayLi.onmouseover = function ()
        {
            oayUl.style.display = 'inline-block';
            startMove(oayUl,{ height:151,opacity: 100});
        };
        oayLi.onmouseout = function ()
        {
            startMove(oayUl,{ height:0,opacity: 0},function(){
                oayUl.style.display = 'none';
            });
        };

        oJaXiLi.onmouseover = function ()
        {
            oBbqUl.style.display = 'block';
            startMove(oBbqUl,{ height:114,opacity: 100});
        };
        oJaXiLi.onmouseout = function ()
        {
            startMove(oBbqUl,{ height:0,opacity: 0},function(){
                oBbqUl.style.display = 'none';
            });
        };
    }

});