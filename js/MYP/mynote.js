// 아행부터 행별로 표시
function Mynotelistoutput() {
    for(let i=0; i<form_a.length; i++) {
    var form = form_a[i]; 
    var kanji = kanji_a[i];
    var yomigana = yomigana_a[i];
    var korean = korean_a[i];
    var WDLlist = document.getElementById('MYP_MYN_notelist');
    var add = WDLlist.insertRow( WDLlist.rows.length );
    var MYN_formcell = add.insertCell(0);
    var MYN_kanjicell = add.insertCell(1);
    var MYN_yomiganacell = add.insertCell(2);
    var MYN_koreancell = add.insertCell(3);
    var MYN_timecell = add.insertCell(4);
    var MYN_deletecell = add.insertCell(5);
    MYN_formcell.innerHTML = form;
    MYN_kanjicell.innerHTML = kanji;
    MYN_yomiganacell.innerHTML = yomigana;
    MYN_koreancell.innerHTML = korean;
    MYN_deletecell.innerHTML = "삭제";
    MYN_timecell.innerHTML = new Date().toDateString();
    MYN_deletecell.className = "delete_tr";    
    }
}
function membernameOutput() {
    var memberlist = document.getElementById('member_name');
    var name = membername[1];
    memberlist.innerHTML = name;
}

// 모르는단어 전체삭제
function dknowlistdelete() {
    $('#LRN_HRD_dknowlist tr').remove();
}

// 모르는단어 선택삭제
function delWordKJH(){    
    $('.delete_tr').unbind();
    $('.delete_tr').bind("click", function(){
        var cfdelete = confirm("해당 단어를 삭제하시겠습니까?")
        if (cfdelete) {      
        var listline = $(this).closest('tr');
        listline.css("background-color","#E7C9A7");
        listline.fadeOut(400, function(){
            listline.remove();
        });
        return false;
        }
        else { return false; }
    });   
}


$(document).ready(function(){
    membernameOutput();
    Mynotelistoutput();
});