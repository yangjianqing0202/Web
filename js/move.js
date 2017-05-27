var btnSpeed = null;
var cur = null;
var translates = null;

function getStyle (obj, name)  /*获取非行间样式*/
{
    if (obj.currentStyle)  /*兼容浏览器*/
    {
        return obj.currentStyle[name];
    }
    else
    {
        return getComputedStyle(obj,false)[name];
    }
}


function startMove (obj, json, fnEnd)
{
    clearInterval (obj.timer);
    obj.timer = setInterval (function (){
        var bStop=true;		//假设：所有值都已经到了
        for (var attr in json) /*将类型和值传入json，可同时运动两个以上物体*/
        {
            if (attr == 'opacity')
            {
                cur = Math.round (parseFloat (getStyle (obj,attr))*100); /*隐身显示运动框架*/
            }
            else if (attr ==  'transform')
            {
                var reg = /(rotate\([\-\+]?((\d+)(deg))\))/i;
                var oWofangImg = document.getElementById('wofangimg');
                var oShuaziImg = document.getElementById('shuaziimg');
                var oShipiImg = document.getElementById('shipiimg');
                var oBangziImg = document.getElementById('bangziimg');
                var oLanciImg = document.getElementById('lanciimg');

                if(obj == oWofangImg)
                {
                    translates = oWofangImg.style['transform'],
                    w = translates.match (reg);
                    cur = parseInt(RegExp.$3);
                }
                else if(obj == oShuaziImg)
                {
                     translates = oShuaziImg.style['transform'],
                        w = translates.match (reg);
                    cur = parseInt(RegExp.$3);
                }
                else if(obj == oShipiImg)
                {
                    translates = oShipiImg.style['transform'],
                        w = translates.match (reg);
                    cur = parseInt(RegExp.$3);
                }
                else if(obj == oBangziImg)
                {
                    translates = oBangziImg.style['transform'],
                        w = translates.match (reg);
                    cur = parseInt(RegExp.$3);
                }
                else
                {
                    translates = oLanciImg.style['transform'],
                        w = translates.match (reg);
                    cur = parseInt(RegExp.$3);
                }
            }
            else
            {
                cur = parseInt (getStyle (obj,attr));/*其他运动框架*/
            }
                var speed = (json[attr] - cur)/btnSpeed;
                speed = speed>0?Math.ceil(speed):Math.floor(speed);

            if(cur!=json[attr])
                bStop=false;
            if (attr == 'opacity')
            {   /*隐身显示运动框架*/
                obj.style.filter = 'alpha(opacity:'+(cur + speed)+')';
                obj.style.opacity = (cur + speed)/100;
            }
            else if (attr == 'transform')
            {
                obj.style.transform = 'rotate('+(cur + speed)+'deg)';
            }
            else
            {   /*其他运动框架*/
                obj.style[attr] = cur + speed + 'px';
            }
        }
        if(bStop)
        {
            clearInterval(obj.timer);
            if(fnEnd)fnEnd();
        }
    },30)
}

function getByClass (oParent, sClass)/*获取class元素*/
{
    var aEle = document.getElementsByTagName('*');
    var aResult = [];
    for (var i=0; i<aEle.length; i++)
    {
        if (aEle[i].className == sClass)
        {
            aResult.push (aEle[i])
        }
    }
    return aResult;
}

function getPos(ev)
{
    var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft||document.body.scrollLeft;

    return {x: ev.clientX+scrollLeft, y: ev.clientY+scrollTop};
}