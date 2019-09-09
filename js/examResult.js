var timer;
var lanMode;
var resultList;

$(function(){

    //검정결과 조회
    getResult();   
    
    //header 셋팅
    setHeader();
    
    //content 셋팅
    getContent();
});

function getResult()
{
    //검정결과를 exam.html에서 넘겨받음
    lanMode = localStorage.getItem("language");
    timer = localStorage.getItem("timer");
    let output = localStorage.getItem("resultList");		
    resultList = JSON.parse(output);
}

function setHeader()
{
    let count = 0;
    $.each(resultList, function(index, value)
    {
        if(true == value.ox)
            count++;
    });

    $("#allCount").text(resultList.length);
    $("#correctCount").text(count);
    $(".timer").text("경과 시간 : " + timer);
}

function getContent()
{
    $.each(resultList, function(index, value)
    {
        let percentage = value.percentage;
        let furagana = value.example2[lanMode];
        let hilagana = value.example[lanMode];
        let select1 = value.select1[lanMode];
        let select2 = value.select2[lanMode];
        let select3 = value.select3[lanMode];
        let select4 = value.select4[lanMode];
        let click = value.click;
        let answer = value.answer;
        
        let str = '\
        \
        <div class="content"> \
            <div class="largeText correctPercent ' + PersentColor(percentage) + '">(정답률 : ' + percentage + '%)</div> \
            <div class="questionBox"> \
                <div id="Furagana" class="' + getFuraganaFontSize(hilagana) + '">' + getFuragana(furagana, hilagana) + '</div> \
                <div id="hilagana" class="' + getHilaganaFontSize(hilagana) + '">' + hilagana + '</div> \
            </div> \
            \
            <div class="example"> \
                <div class="exampleBox ' + getExamFontSize(select1) + " " + getAnswerWhether(0, answer) + '">' + select1 + getCheckWhether(0, click) + '</div> \
                <div class="exampleBox ' + getExamFontSize(select2) + " " + getAnswerWhether(1, answer) + '">' + select2 + getCheckWhether(1, click) + '</div> \
                <div class="exampleBox ' + getExamFontSize(select3) + " " + getAnswerWhether(2, answer) + '">' + select3 + getCheckWhether(2, click) + '</div> \
                <div class="exampleBox ' + getExamFontSize(select4) + " " + getAnswerWhether(3, answer) + '">' + select4 + getCheckWhether(3, click) + '</div> \
            </div> \
        </div> \
    </div> \
    \
    ';

        $("#section").append(str);
    });
}

function PersentColor(persent)
{
    if(50 <= persent)
        return "greenText";
    else
        return "redText";
}

function getFuragana(Furagana, hilagana)
{
    if(Furagana == hilagana)    
        return "";
    else
        return Furagana;
}

function getFuraganaFontSize(hilagana)
{
    let hilaganaLen = hilagana.length;

    if(10 < hilaganaLen)
        return "largeText-2";
    else if(7 < hilaganaLen)
        return "largeText-1";
    else if(5 < hilaganaLen)
        return "largeText";
    else if(4 < hilaganaLen)
        return "largeText1";
    else
        return "largeText1";
}

function getHilaganaFontSize(hilagana)
{
    let hilaganaLen = hilagana.length;

    if(10 < hilaganaLen)
        return "largeText";
    else if(7 < hilaganaLen)
        return "largeText1";
    else if(5 < hilaganaLen)
        return "largeText2";
    else if(4 < hilaganaLen)
        return "largeText3";
    else
        return "largeText4";
}

function getCheckWhether(showNum, clickNum)
{
    let checkImage = "<div id='checkDisplay'>v</div>"
    if(showNum == clickNum)
        return checkImage;
    else
        return "";
}

function getAnswerWhether(showNum, answer)
{
    if(showNum == answer)
        return "redBorder";
    else
        return "";
}

function getExamFontSize(exampleNum)
{
    exampleLen = exampleNum.length;

    if(8 < exampleLen)
        return "largeText-3";
    else if(5 < exampleLen)
        return "largeText";
    else
        return "largeText1";
}