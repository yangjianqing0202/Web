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

window.addEventListener("load", function(){
    var oDivClock = document.getElementById('clock');
    var aImgDate = oDivClock.getElementsByTagName('img');
    var oDivWeek = document.getElementById('week');
    var aImgWeek = oDivWeek.getElementsByTagName('img');

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
});

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