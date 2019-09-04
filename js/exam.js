
// 1: 히라가나 연습검정 // 2: 히라가나 일반검정
// 3: 한글 연습검정     // 4: 한글 일반검정
var examMode;           
var questionList = [];      //문제 보관 변수
var questionCount = 2;      //전체 문제 수
var nowQuestion = 0;        //현재 문제 번호
var timeDelay = 1500;       
var min = 0;
var sec = 0;
var timerID;                //일반검정일 경우 타이머의 ID
var lanMode = 0;            //0이면 문제가 일본어 1이면 한국어

$(function(){

    examMode = getMode();
    
    //언어 설정
    setLanMode();

    //문제 만들기
    makeQuestion();
    
    //일반검정일 경우 타이머 작동
    if(2 == examMode || 4 == examMode)
        timerID = startTimer();

    showQuestion();
    selectExample();
});

function setLanMode()
{
    if(3 == examMode || 4 == examMode)
        lanMode = 1;
}

function endTimer()
{
    clearInterval(timerID);
}

function startTimer()
{
    return setInterval(function()
    {
        if(60 == ++sec)
        {
            sec = 0;
            min++;
        }

        tempMin = min;
        tempSec = sec;
        if(min < 10)
            tempMin = "0" + tempMin;
        if(sec < 10)
            tempSec = "0" + tempSec;

        $("#min").text(tempMin);    
        $("#sec").text(tempSec);
        
    }, 1000)
}

function selectExample()
{
    $(".example > .exampleBox").on("click",function()
    {

        if(questionCount == nowQuestion)
        {
            endTimer();
            return;
            
            // 실험중
            // $.each(questionList, function(index, value)
            // {

            // });
        }

        //작업 중 클릭시 리턴
        if("block" == $("#ox").css("display"))
            return;

        $("#ox").css("display","block");

        let answer = questionList[nowQuestion].answer;

        let num = $(this).index();
        questionList[nowQuestion].click = num;

        let str = "<div class='checkDisplay'>v</div>";
        $(this).html($(this).html() + str);

        if(answer == num)
        {
            $("#ox").removeClass("redText");
            $("#ox").addClass("greenText");
            $("#ox").html("O");
            $("#ox").fadeOut(timeDelay);
        }
        else
        {
            $(".example > .exampleBox").eq(answer).addClass("redBorder");

            $("#ox").removeClass("greenText");
            $("#ox").addClass("redText");
            $("#ox").html("X");
            $("#ox").fadeOut(timeDelay);

            questionList[nowQuestion].ox = false;
        }

        setTimeout(function()
        {    
            nowQuestion++;
            showQuestion();

        }, timeDelay);
    });
}

function showQuestion()
{
    $("#persentText").html(questionList[nowQuestion].percentage);
    $("#allQuestion").html(questionCount);
    $("#nowQuestion").html(nowQuestion + 1);

    $("#hilagana").html(questionList[nowQuestion].example[lanMode]);
    $("#Furagana").html(questionList[nowQuestion].example2[lanMode]);

    $(".example > .exampleBox").eq(0).html(questionList[nowQuestion].select1[lanMode]);
    $(".example > .exampleBox").eq(1).html(questionList[nowQuestion].select2[lanMode]);
    $(".example > .exampleBox").eq(2).html(questionList[nowQuestion].select3[lanMode]);
    $(".example > .exampleBox").eq(3).html(questionList[nowQuestion].select4[lanMode]);

    changePersentColor();
    changeFontSize();
}

function makeQuestion()
{
    koreanCollection = ["먹다", "마시다", "놀다", "타다", "가다", "하다", "만나다", "이야기하다", "사다", "팔다", "기다리다", "가리키다", "가르치다", "외우다"];
    hiraganaCollection = ["食べる", "飲む", "遊ぶ", "乗る", "行く", "する", "会う", "話す", "買う", "売る", "待つ", "指す", "教える", "覚える"];
    furaganaCollection = ["たべる", "のむ", "あそぶ", "のる", "いく", "する", "あう", "はなす", "かう", "うる", "まつ", "さす", "おしえる", "おぼえる"];

    let wordList = [];
    for(let i = 0; i < koreanCollection.length; i++)
    {
        let word = {};
        word.korean = koreanCollection[i];
        word.hiragana = hiraganaCollection[i];
        word.furagana = furaganaCollection[i];

        wordList.push(word);
    }

    for(let i = 0; i < questionCount; i++)
    {
        let len = koreanCollection.length;
        let tempList = [];
        for(let j = 0; j < 4; j++)
        {
            let RandVal = Math.floor(Math.random() * len);
            let check = false;

            for(let k = 0; k < tempList.length; k++)
            {
                if(tempList[k] == RandVal)
                {
                    check = true;
                    j--;
                    break;
                }
            }

            if(false == check)
                tempList.push(RandVal);
        }
        
        let RandVal = Math.floor(Math.random() * 4);

        let question = {};
        question.example = [wordList[tempList[RandVal]].hiragana, wordList[tempList[RandVal]].korean];
        question.example2 = [wordList[tempList[RandVal]].furagana, ""];
        question.select1 = [wordList[tempList[0]].korean, wordList[tempList[0]].hiragana];
        question.select2 = [wordList[tempList[1]].korean, wordList[tempList[1]].hiragana];
        question.select3 = [wordList[tempList[2]].korean, wordList[tempList[2]].hiragana];
        question.select4 = [wordList[tempList[3]].korean, wordList[tempList[3]].hiragana];
        question.answer = RandVal;
        question.click = -1;
        question.ox = true;

        question.percentage = Math.floor(Math.random() * 101);
        questionList.push(question);
    }
}

function getMode(){
    let mode = getQuerystring("mode");
    let language = getQuerystring("language");
    let tempMode = 0;   // 1: 히라가나 연습검정
                        // 2: 히라가나 일반검정
                        // 3: 한글 연습검정
                        // 4: 한글 일반검정

    if("hiragana" == language)
    {
        if("example" == mode)
            tempMode = 1;
        else if("normal" == mode)
            tempMode = 2;
    }
    else if("korean" == language)
    {
        if("example" == mode)
            tempMode = 3;
        else if("normal" == mode)
            tempMode = 4;
    }

    return tempMode;
}

function getQuerystring(paramName){ 

    let _tempUrl = window.location.search.substring(1); 
    let _tempArray = _tempUrl.split('&');

    for(let i = 0; _tempArray.length; i++) 
    {
        let _keyValuePair = _tempArray[i].split('='); 

        if(_keyValuePair[0] == paramName)
            return _keyValuePair[1];
    }
}

function changeQuestionNumber(){

}

function changePersentColor(){

    $(".correctPercent").removeClass("greenText");
    $(".correctPercent").removeClass("redText");
    $(".exampleBox").removeClass("redBorder");

    let persent = $("#persentText").text();
    if(50 <= persent)
        $(".correctPercent").addClass("greenText");
    else
        $(".correctPercent").addClass("redText");
}

function changeFontSize(){
    let hilaganaLen = $(".questionBox #hilagana").text().length;
    
    $("#Furagana").removeClass("largeText-2");
    $("#Furagana").removeClass("largeText-1");
    $("#Furagana").removeClass("largeText0");
    $("#Furagana").removeClass("largeText1");

    $("#hilagana").removeClass("largeText");
    $("#hilagana").removeClass("largeText1");
    $("#hilagana").removeClass("largeText2");
    $("#hilagana").removeClass("largeText3");
    $("#hilagana").removeClass("largeText4");

    if(10 < hilaganaLen)
    {
        $("#Furagana").removeClass("largeText-2");
        $("#hilagana").addClass("largeText");
    }
    else if(7 < hilaganaLen)
    {
        $("#Furagana").addClass("largeText-1");
        $("#hilagana").addClass("largeText1");
    }
    else if(5 < hilaganaLen)
    {
        $("#Furagana").addClass("largeText");
        $("#hilagana").addClass("largeText2");
    }
    else if(4 < hilaganaLen)
    {
        $("#Furagana").addClass("largeText1");
        $("#hilagana").addClass("largeText3");
    }
    else
    {
        $("#Furagana").addClass("largeText1");
        $("#hilagana").addClass("largeText4");
    }

    $(".example > .exampleBox").each(function(){
        let exampleLen = $(this).text().length;

        $(this).removeClass("largeText-3");
        $(this).removeClass("largeText-2");
        $(this).removeClass("largeText-1");
        $(this).removeClass("largeText");
        $(this).removeClass("largeText1");

        if(8 < exampleLen)
            $(this).addClass("largeText-3");
        else if(5 < exampleLen)
            $(this).addClass("largeText");
        else
            $(this).addClass("largeText1");
    });
}
