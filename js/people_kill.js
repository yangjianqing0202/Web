
window.addEventListener("load",function(){
    var oWofangImg = document.getElementById('wofangimg');
    var oShuaziImg = document.getElementById('shuaziimg');
    var oShipiImg = document.getElementById('shipiimg');
    var oBangziImg = document.getElementById('bangziimg');
    var oLanciImg = document.getElementById('lanciimg');
    var opBoxDiv = document.getElementById('people_box');
    var oWofangMove = Math.ceil(opBoxDiv.offsetWidth* 0.3);
    var oShuaziMove = Math.ceil(opBoxDiv.offsetWidth * 0.4);
    var oShipiMove = Math.ceil(opBoxDiv.offsetWidth * 0.5);
    var oBangziMove = Math.ceil(opBoxDiv.offsetWidth * 0.6);
    var oLanciMove = Math.ceil(opBoxDiv.offsetWidth * 0.7);


    oShuaziImg.style.display = 'none';
    oShipiImg.style.display = 'none';
    oBangziImg.style.display = 'none';
    oLanciImg.style.display = 'none';

    var timer_people = setInterval(WofangImgMove, 3000);

    function WofangImgMove ()
    {
        btnSpeed = 2;
        console.log(btnSpeed);
        startMove(oWofangImg, {width:200, height:280}, function(){
            startMove(oWofangImg, {width:150, height:210}, function(){
                startMove(oWofangImg, {width:200, height:280}, function(){
                    startMove(oWofangImg, {width:150, height:210},function(){
                        startMove(oWofangImg, {width:200, height:280}, function(){
                            startMove(oWofangImg, {width:150, height:210})
                        })
                    })
                })
            })
        })
    }



    oWofangImg.onmouseover = function ()
    {
        clearInterval(timer_people);
        btnSpeed = 10;
        console.log(oWofangImg.offsetLeft);

        startMove(oWofangImg, { width:200, height:280, left:oWofangMove }, function(){
            oShuaziImg.style.display = 'inline-block';
            startMove(oShuaziImg, { width:200, height:280, left:oShuaziMove }, function(){
                oShipiImg.style.display = 'inline-block';
                startMove(oShipiImg, { width:200, height:280, left:oShipiMove }, function(){
                    oBangziImg.style.display = 'inline-block';
                    startMove(oBangziImg, { width:200, height:280, left:oBangziMove }, function(){
                        oLanciImg.style.display = 'inline-block';
                        startMove(oLanciImg, { width:200, height:280, left:oLanciMove })
                    })
                })
            })
        })


    };



});