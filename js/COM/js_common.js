$.urlParam = function(name){
    let results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    }
    else {
        return results[1] || 0;
    }
}

$(function (){
    let page = $.urlParam('page')-1;
    if(page == -1){
        page = 0;
    }

    $('#header_com').load("../haru_header.html");
    $('#aside_com').load("./navCOM.html");
    $('#footer_com').load('../haru_footer.html');
    $('.pagination_number').children('li').eq(page).css('font-weight','bold');
    // $('.article_contents').text(articleData.content)
})
function deleteArticle() {
    let con = confirm("삭제 하시겠습니까?")
    if (con) {
        // 게시글 삭제 기능 추가
        // //게시글 삭제
        location.href = "./notice.html"
    }
}
function editArticle() {
    let con = confirm("수정 하시겠습니까?")
    if (con) {
        // 게시글 삭제 기능 추가
        // //게시글 삭제
        location.href = "./noticeu.html";
    }
}
function moveList() {
    location.href = "./notice.html"
}