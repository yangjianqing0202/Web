var weekName =
    [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven'
    ];

var aImgTitle =
    [
        { title: '北京4日游' },
        { title: '巴布罗生态谷1日游' }
    ];

var imgName =
    [
        { name: '故宫广场前，蓝次夫妇'},
        { name: '依然是故宫，膀子夫妇'},
        { name: '天安门广场前'},
        { name: '鸟巢四个人合影'},
        { name: '水立方四个人合影'},
        { name: '水立方蓝次和膀子'},
        { name: '北大还是清华的忘了'},
        { name: '蓝次和膀子回眸一笑'}
    ];


window.onload = function ()
{
    var oDivClock = document.getElementById('clock');
    var aImgDate = oDivClock.getElementsByTagName('img');
    var oDivWeek = document.getElementById('week');
    var aImgWeek = oDivWeek.getElementsByTagName('img');
    var oDivStart = document.getElementById('main01');
    var aUlSmall = getByClass(oDivStart, 'small_img')[0];
    var aLiSmall = aUlSmall.getElementsByTagName('li');
    var aUlBig = getByClass(oDivStart, 'big_img')[0];
    var aLiBig = aUlBig.getElementsByTagName('li');
    var PrevBtn = getByClass(oDivStart, 'button_prev')[0];
    var NextBtn =  getByClass(oDivStart, 'button_next')[0];
    var imgLength = getByClass(oDivStart, 'length')[0];
    var imgTxt = getByClass(oDivStart,'text')[0];
    var imgTitle = getByClass(oDivStart,'title')[0];
    var now = 0;
    var nowZIndex = 2;
    var oldWidth = null;


    aUlSmall.style.width = aLiSmall.length * aLiSmall[0].offsetWidth + 'px';
    imgLength.innerHTML = '1/' + aLiSmall.length;
    imgTitle.innerHTML = aImgTitle[0].title;
    imgTxt.innerHTML = imgName[0].name;

    for (var i=0; i<aLiSmall.length; i++)
    {
        aLiSmall[i].index = i;
        aLiSmall[i].onclick = function ()
        {
            if (now == this.index) return;
            now = this.index;
            getStart ();

        };

        aLiSmall[i].onmouseover = function ()
        {
            startMove (this, {opacity: 100});
        };
        aLiSmall[i].onmouseout = function ()
        {
            if (this.index !== now)
            {
                startMove (this, {opacity: 60});
            }
        };
    }

    function getStart ()
    {
        aLiBig[now].style.zIndex = nowZIndex ++;
        for (var i=0; i<aLiBig.length; i++)
        {
            oldWidth = aLiBig[i].offsetWidth;
        }
            aLiBig[now].style.width = 0 ;

        startMove(aLiBig[now],{ width: oldWidth});

        for (var a=0; a<aLiSmall.length; a++)
        {
            startMove(aLiSmall[a],{opacity: 60})
        }
        startMove(aLiSmall[now],{opacity: 100});

        imgLength.innerHTML = (now+1)+ '/' + aLiSmall.length;
        imgTxt.innerHTML = imgName[now].name;
        imgTxt.style.opacity = imgLength.style.opacity = '0';
        startMove(imgTxt,{ opacity: 100});
        startMove(imgLength,{ opacity: 100});

        if (now == 0)
        {
            startMove(aUlSmall, {left: 0})
        }
        else if (now == aLiSmall.length - 1)
        {
            startMove(aUlSmall, {left: -(now-2) * aLiSmall[0].offsetWidth});
        }
        else
        {
            startMove(aUlSmall, {left: -(now-1) * aLiSmall[0].offsetWidth});
        }
    }

    PrevBtn.onclick = function()
    {
        now--;
        if (now == -1)
        {
            now = aLiSmall.length - 1;
        }
        getStart();
        console.log(now)
    };
    NextBtn.onclick = function()
    {
        now++;
        if (now == aLiSmall.length)
        {
            now = 0
        }
        getStart();
        console.log(now)
    };

    var timer = setInterval(NextBtn.onclick,5000);

    oDivStart.onmouseover = function ()
    {
        clearInterval(timer)
    };

    oDivStart.onmouseout = function ()
    {
        timer = setInterval(NextBtn.onclick,5000);
    };

    function getClock ()
    {
        var oDate = new Date;
        var iYear = oDate.getYear();
        var iMonth = oDate.getMonth();
        var iDay = oDate.getDate();
        var iHour = oDate.getHours();
        var iMin = oDate.getMinutes();
        var iSec = oDate.getSeconds();
        var iWeek = (oDate.getDay()+6)%7;
        if (iYear < 1900)
        {
            iYear += 1900;
        }
        var str1 = iYear + toDouble(iMonth+1) + toDouble(iDay) + toDouble(iHour) + toDouble(iMin) + toDouble(iSec);
        var str2 = "" + iWeek;

        for (var i=0; i<aImgDate.length; i++)
        {
            aImgDate[i].src = 'img/' + str1.charAt(i) + '.png';
        }
        for (var a=0; a<aImgWeek.length; a++)
        {
            aImgWeek[a].src = 'img/' + weekName[str2.charAt(a)] + '.png';
        }
    }
    setInterval(getClock, 1000);
    getClock ();

    function toDouble (num)
    {
        if (num < 10)
        {
            return  '0' + num
        }
        else
        {
            return '' + num
        }
    }
};
