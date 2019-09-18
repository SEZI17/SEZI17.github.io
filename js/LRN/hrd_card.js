// 3단카드 뒤집기
function fadeInOut(){
    var showImg = $('#LRN_HRD_card div:eq(0)');
    var nextImg = $('#LRN_HRD_card div:eq(1)');
    nextImg.addClass('card_active');
    nextImg.css('opacity','0').animate({'opacity':'1'},100,function(){
        $('#LRN_HRD_card').append(showImg);
        showImg.removeClass('card_active');
    });
}

// 학습시간표시
var connected = new Date();
function HRDtimer(){
    var current = new Date();
    var elapsed = ((current - connected)/1000);
    var Hresult = Math.floor(elapsed/3600);
    var Mresult = Math.floor((elapsed%3600)/60);
    var Sresult = Math.floor(elapsed%60);
    var divClock = document.getElementById("HRD_timer");
    if (Hresult<10) { Hresult="0"+Hresult; }
    if (Mresult<10) { Mresult="0"+Mresult; }
    if (Sresult<10) { Sresult="0"+Sresult; }
    divClock.innerText = Hresult+" : "+Mresult+" : "+Sresult;      
    setTimeout(HRDtimer,1000);    
}

// 카드에 내용표시
function wordoutput() {
    var number = Math.floor(Math.random() * 50 + 0);   
    console.log(number);
    var kanji = document.getElementById("HRD_card1");
    var yomigana = document.getElementById("HRD_card2");
    var korean = document.getElementById("HRD_card3");
    kanji.innerText = kanjiCollection[number];
    yomigana.innerText = yomiganaCollection[number];
    korean.innerText = koreanCollection[number];
}


// 모르는단어 list에 추가
var c=0;
function dknowlistoutput() {
    // var prevword = $('#LRN_HRD_dknowlist tr:eq(0)');
    // var addword = $('#LRN_HRD_dknowlist tr:eq(1)');
    // var dknow = document.getElementById("dknowlist");
    // dknow.innerHTML ="<td>"+kanji+"</td><td>"+yomigana+"</td><td>"+korean+"</td><td>&nbsp;</td><td>&nbsp;</td>";
    // addword.attr('id','dknowlist');
    // prevword.attr('id','');
    var kanji = $("#LRN_HRD_card1").text();
    var yomigana = $("#LRN_HRD_card2").text();
    var korean = $("#LRN_HRD_card3").text();
    var check = $("#LRN_HRD_dknowlist > tr:last-child > td:first-child").text();
    if (kanji!==check) {
    var dknowlist = document.getElementById('LRN_HRD_dknowlist');
    var add = dknowlist.insertRow( dknowlist.rows.length );
    var kanjicell = add.insertCell(0);
    var yomiganacell = add.insertCell(1);
    var koreancell = add.insertCell(2);
    var examcell = add.insertCell(3);
    var chkboxcell = add.insertCell(4);
    kanjicell.innerHTML = kanji;
    yomiganacell.innerHTML = yomigana;
    koreancell.innerHTML = korean;
    examcell.innerHTML = new Date().toLocaleTimeString();
    chkboxcell.innerHTML = "삭제";    
    // chkboxcell.className = "td";
    chkboxcell.id="td"+c;
    add.id = "tr"+c;    
    c++;
    }
    if (kanji==check) { alert("이미 추가되었습니다."); }
}

// 최근 순 1개 모르는단어 항목삭제
// function dknowlistdelete() {
//     var deletecell = document.getElementById('LRN_HRD_dknowlist');
//     if (deletecell.rows.length < 1) return;
//     deletecell.deleteRow( deletecell.rows.length-1 );
// }


// 모르는단어 전체삭제
function dknowlistdelete() {
    $('#LRN_HRD_dknowlist tr').remove();
}

// 모르는단어 선택삭제
$(document).ready(function(){
    $('#td1').click(function(){
        alert("클릭")
        $('#LRN_HRD_dknowlist tr').remove();
    });
});

// 모르는단어 숨기기보이기
$(function(){
    $('#LRN_HRD_dknow_title').click(function(){
        $('#LRN_HRD_dknow_table_wrap').slideToggle();
    });
});

$(document).ready(function(){
    HRDtimer();
    wordoutput();
    // object로 html 불러오기
    // document.getElementById("upper_here").innerHTML='<object type="text/html" data="./indexLRN.html"></object>';
    // document.getElementById("footer_here").innerHTML='<object type="text/html" data="../cat_footer.html"></object>';
});

// ajax로 html 불러오기
// $.ajax({
//     crossOrigin : true,
//     dataType : "html",
//     url : "./indexLRN.html",
//     success : function() {        
//         $("#upper_here").html("./indexLRN.html");        
//     }
// });

// $.ajax({
//     crossOrigin : true,
//     dataType : "html",
//     url : "./cat_footer.html",
//     success : function() {        
//         $("#footer_here").html("../cat_footer.html");        
//     }
// });
