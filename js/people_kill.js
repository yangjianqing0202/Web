var people_text =
    [
        {text:'秦时明月汉时关，万里长征人未还。但使龙城飞将在，不教胡马度阴山。'},
        {text:'千锤万凿出深山，烈火焚烧若等闲。粉身碎骨全不怕，要留清白在人间。'},
        {text:'男儿何不带吴钩，收取关山五十州。请君暂上凌烟阁，若个书生万户侯？'},
        {text:'流风飞灌长空，锦楼华灯初现。何事离多恨冗？酒圣诗禅，浅笑天下兴衰。'},
        {text:'青海长云暗雪山，孤城遥望玉门关。黄沙百战穿金甲，不破楼兰终不还。'}
    ];

window.addEventListener("load",function(){
    var oWofangImg = document.getElementById('wofangimg');
    var oShipiImg = document.getElementById('shipiimg');
    var oShuaziImg = document.getElementById('shuaziimg');
    var oBangziImg = document.getElementById('bangziimg');
    var oLanciImg = document.getElementById('lanciimg');
    var oPeopleBox = document.getElementById('people_box');
    var opBoxDiv = document.getElementById('people_id');
    var aDivImg = opBoxDiv.getElementsByTagName('div');
    var oP_text = document.getElementById('p_text');
    var oSmallBox =  document.getElementById('small_img_box');
    var aSmallImg = oSmallBox.getElementsByTagName('div');
    var oSmallWofang = document.getElementById('small_wofang');
    var oSmallShipi = document.getElementById('small_shipi');
    var oSmallShuazi = document.getElementById('small_shuazi');
    var oSmallBangzi = document.getElementById('small_bangzi');
    var oSmallLanci = document.getElementById('small_lanci');


    var oWofangMove = Math.ceil(opBoxDiv.offsetWidth * 0.3);
    var oShipiMove = Math.ceil(opBoxDiv.offsetWidth * 0.35);
    var oShuaziMove = Math.ceil(opBoxDiv.offsetWidth * 0.4);
    var oBangziMove = Math.ceil(opBoxDiv.offsetWidth * 0.45);
    var oLanciMove = Math.ceil(opBoxDiv.offsetWidth * 0.5);
    var index = 0;
    var result = 0;
    var now_mouse = 0;
    var now_click = 0;
    var nowZIndex = 99999;
    var oldZIndex = 1;
    var subZIndex = null;
    var timer_text = null;
    var timer_smallImg = null;
    var word = null;
    var smallTransform = null;
    var transformNum = null;
    var zeroTransform = 1;
    var MaxTransform = 99999;


    oShuaziImg.style.display = 'none';
    oShipiImg.style.display = 'none';
    oBangziImg.style.display = 'none';
    oLanciImg.style.display = 'none';
    oSmallBox.style.display = 'none';


    var timer_people = setInterval(WofangImgMove, 3000);

    function WofangImgMove ()
    {
        btnSpeed = 2;
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


    function smallAppear ()
    {
        oSmallBox.style.height = 300+'px';
        oSmallBox.style.display = 'block';
        startMove(oSmallWofang,{opacity:100},function(){
            startMove(oSmallShipi,{opacity:100},function(){
                startMove(oSmallShuazi,{opacity:100},function(){
                    startMove(oSmallBangzi,{opacity:100},function(){
                        startMove(oSmallLanci,{opacity:100},function(){
                            oSmallBox.onmouseover = function()
                            {
                                clearInterval(timer_smallImg);

                                console.log(oSmallBox.style.transform)
                            };
                            oSmallBox.onmouseout = function()
                            {
                                clearInterval(timer_smallImg);
                                timer_smallImg = setInterval(smallMove,10);
                            }

                        });

                    });
                });
            });
        });
    }

    function smallMove ()
    {
            oSmallBox.style.transform = 'rotate('+(zeroTransform++)+'deg)';
            console.log(oSmallWofang.style.transform);
    }






    oWofangImg.onmouseover = function ()
    {
        clearInterval(timer_people);
        btnSpeed = 10;
        startMove(oWofangImg, { width:200, height:280, left:oWofangMove, transform:720 }, function(){
            smallAppear ();
            oShipiImg.style.display = 'inline-block';
            startMove(oShipiImg, { width:200, height:280, left:oShipiMove, transform:720 }, function(){
                oShuaziImg.style.display = 'inline-block';
                startMove(oShuaziImg, { width:200, height:280, left:oShuaziMove, transform:720 }, function(){
                    oBangziImg.style.display = 'inline-block';
                    startMove(oBangziImg, { width:200, height:280, left:oBangziMove, transform:720 }, function(){
                        oLanciImg.style.display = 'inline-block';
                        startMove(oLanciImg, { width:200, height:280, left:oLanciMove, transform:720},function(){

                            smallAppear ();

                            timer_smallImg = setInterval(smallMove,10);
                            btnSpeed = 5;
                            for (var i=0; i<aDivImg.length; i++)
                            {
                                aDivImg[i].index = i;
                                aDivImg[i].onmouseover = function()
                                {
                                    now_mouse = this.index;
                                    if (this.offsetTop <=100)
                                    {
                                        startMove(this, {top:30});

                                    }
                                    if (this.offsetTop >= 480)
                                    {
                                        startMove(this, {opacity:100});
                                        oP_text.style.display = 'block';
                                        clearInterval(timer_text);
                                        timer_text = setInterval (txtDisplay , 300);
                                        clearInterval(timer_smallImg);
                                    }
                                    console.log('移入：'+ now_mouse);
                                };
                                aDivImg[i].onmouseout = function()
                                {
                                    if (this.offsetTop <= 100)
                                    {
                                        startMove(this,{top:100});
                                        oP_text.style.display = 'none';
                                        clearInterval(timer_text);
                                        word = "";
                                        oP_text.innerText = "";
                                        index = 0
                                    }
                                    if (this.offsetTop >= 480)
                                    {
                                        startMove(this, {opacity:70});
                                        oP_text.style.display = 'none';
                                        clearInterval(timer_text);
                                        word = "";
                                        oP_text.innerText = "";
                                        index = 0;
                                        clearInterval(timer_smallImg);
                                        timer_smallImg = setInterval(smallMove,10);
                                    }
                                };

                                aDivImg[i].onclick = function ()
                                {
                                    now_click = this.index;

                                        if (this == oWofangImg)
                                        {
                                            startMove(oWofangImg, { transform:0, top: 480, left:35, opacity:70 }, function(){
                                                oWofangImg.style.zIndex = nowZIndex;
                                                startMove(oShipiImg, { transform:0, top: 480, left:35, opacity:70 }, function(){
                                                    oShipiImg.style.zIndex = nowZIndex;
                                                    startMove(oShuaziImg, { transform:0, top: 480, left:35, opacity:70 }, function() {
                                                        oShuaziImg.style.zIndex = nowZIndex;
                                                        startMove(oBangziImg, { transform:0, top: 480, left:35, opacity:70 }, function(){
                                                            oBangziImg.style.zIndex = nowZIndex;
                                                            startMove(oLanciImg, { transform:0, top: 480, left:35, opacity:70 },function(){
                                                                oLanciImg.style.zIndex = nowZIndex;
                                                                setTimeout(BigImgZIndex, 1000);

                                                                console.log('zIndex：'+ aDivImg[now_click].style.zIndex);
                                                                console.log('nowZIndex：'+ nowZIndex);
                                                            })
                                                        })
                                                    })
                                                })
                                            });
                                        }
                                        else if(this == oShipiImg)
                                        {
                                            startMove(oShipiImg, { transform:0, top: 480, left:35, opacity:70 }, function(){
                                                oShipiImg.style.zIndex = nowZIndex;
                                                startMove(oWofangImg, { transform:0, top: 480, left:35, opacity:70 }, function(){
                                                    oWofangImg.style.zIndex = nowZIndex+1;
                                                    startMove(oShuaziImg, { transform:0, top: 480, left:35, opacity:70 }, function() {
                                                        oShuaziImg.style.zIndex = nowZIndex+2;
                                                        startMove(oBangziImg, { transform:0, top: 480, left:35, opacity:70 }, function(){
                                                            oBangziImg.style.zIndex = nowZIndex+3;
                                                            startMove(oLanciImg, { transform:0, top: 480, left:35, opacity:70 }, function(){
                                                                oLanciImg.style.zIndex = nowZIndex+4;
                                                                setTimeout(BigImgZIndex, 1000);

                                                                console.log('zIndex：'+ aDivImg[now_click].style.zIndex);
                                                                console.log('nowZIndex：'+ nowZIndex);
                                                            })
                                                        })
                                                    })
                                                })
                                            });
                                        }
                                        else if(this == oShuaziImg)
                                        {
                                            startMove(oShuaziImg, { transform:0, top: 480, left:35, opacity:70 }, function(){
                                                oShuaziImg.style.zIndex = nowZIndex;
                                                startMove(oWofangImg, { transform:0, top: 480, left:35, opacity:70 }, function(){
                                                    oWofangImg.style.zIndex = nowZIndex+1;
                                                    startMove(oShipiImg, { transform:0, top: 480, left:35, opacity:70 }, function() {
                                                        oShipiImg.style.zIndex = nowZIndex+2;
                                                        startMove(oBangziImg, { transform:0, top: 480, left:35, opacity:70 }, function(){
                                                            oBangziImg.style.zIndex = nowZIndex+3;
                                                            startMove(oLanciImg, { transform:0, top: 480, left:35, opacity:70 },function(){
                                                                oLanciImg.style.zIndex = nowZIndex+4;

                                                                setTimeout(BigImgZIndex, 1000);
                                                                console.log('zIndex：'+ aDivImg[now_click].style.zIndex);
                                                                console.log('nowZIndex：'+ nowZIndex);
                                                            })
                                                        })
                                                    })
                                                })
                                            });
                                        }

                                        else if(this == oBangziImg)
                                        {
                                            startMove(oBangziImg, { transform:0, top: 480, left:35, opacity:70 }, function(){
                                                oBangziImg.style.zIndex = nowZIndex;
                                                startMove(oWofangImg, { transform:0, top: 480, left:35, opacity:70 }, function(){
                                                    oWofangImg.style.zIndex = nowZIndex+1;
                                                    startMove(oShipiImg, { transform:0, top: 480, left:35, opacity:70 }, function() {
                                                        oShipiImg.style.zIndex = nowZIndex+2;
                                                        startMove(oShuaziImg, { transform:0, top: 480, left:35, opacity:70 }, function(){
                                                            oShuaziImg.style.zIndex = nowZIndex+3;
                                                            startMove(oLanciImg, { transform:0, top: 480, left:35, opacity:70 }, function(){
                                                                oLanciImg.style.zIndex = nowZIndex+4;

                                                                setTimeout(BigImgZIndex, 1000);
                                                                console.log('zIndex：'+ aDivImg[now_click].style.zIndex);
                                                                console.log('nowZIndex：'+ nowZIndex);
                                                            })
                                                        })
                                                    })
                                                })
                                            });
                                        }
                                        else if(this == oLanciImg)
                                        {
                                            startMove(oLanciImg, { transform:0, top: 480, left:35, opacity:70 }, function(){
                                                oLanciImg.style.zIndex = nowZIndex;
                                                startMove(oWofangImg, { transform:0, top: 480, left:35, opacity:70 }, function(){
                                                    oWofangImg.style.zIndex = nowZIndex+1;
                                                    startMove(oShipiImg, { transform:0, top: 480, left:35, opacity:70 }, function() {
                                                        oShipiImg.style.zIndex = nowZIndex+2;
                                                        startMove(oShuaziImg, { transform:0, top: 480, left:35, opacity:70 }, function(){
                                                            oShuaziImg.style.zIndex = nowZIndex+3;
                                                            startMove(oBangziImg, { transform:0, top: 480, left:35, opacity:70 }, function(){
                                                                oBangziImg.style.zIndex = nowZIndex+4;

                                                                setTimeout(BigImgZIndex, 1000);
                                                                console.log('zIndex：'+ aDivImg[now_click].style.zIndex);
                                                                console.log('nowZIndex：'+ nowZIndex);
                                                            })
                                                        })
                                                    })
                                                })
                                            });
                                        }
                                };

                                function BigImgZIndex ()
                                {
                                    for (var i=0; i<aDivImg.length; i++)
                                    {
                                        aDivImg[i].onclick = function ()
                                        {
                                            oP_text.style.display = 'none';
                                            clearInterval(timer_text);
                                            word = "";
                                            oP_text.innerText = "";
                                            index = 0;
                                            nowZIndex = nowZIndex - 6;
                                            this.style.zIndex = nowZIndex;
                                            console.log('zIndex：'+ this.style.zIndex);
                                            console.log('nowZIndex：'+ nowZIndex);
                                        }
                                    }
                                }

                                function txtDisplay ()
                                {
                                    word = people_text[now_mouse].text;
                                    oP_text.innerText = word.substring(0 ,index++);
                                }
                            }





                        })
                    })
                })
            })
        });
    };












});