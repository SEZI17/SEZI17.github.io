$(function(){

  addWrongNotes();
  clickNote();
  clickDeleteBtn();

});

// _회차 클릭시
function clickNote()
{
  $(".note").click(function(){

    let num = $(this).index();
    let url = "./examNote_pop.html?num=" + num;
    window.open(url, "_blank", "left=200, top=100, width=750, height=710, resizable=no");
  });
}

function clickDeleteBtn()
{
  $(".btnDelete").click(function(e){
    e.stopPropagation();
    $(this).parent().remove();

    if (!$('.note').length) 
    {
      strHtml = "<div class='noteIsNone'>오답노트가 존재하지 않습니다.</div>"
      $("#wrongNotes").html(strHtml);
    }
  });
}

//현재 데이터가 없기에 랜덤으로 0 ~ 7개까지 회차를 만듬
function addWrongNotes()
{
  let len = Math.floor(Math.random() * 8);
  $("#wrongNotes").html("");

  let strHtml = "";
  for(let i = 0; i < len; i++)
  {
    let str = "<div class='note'>" + (i + 1) + "회차<div class='btnDelete' title='삭제'>x</div></div>"
    strHtml += str;
  }

  if(0 == len)
    strHtml = "<div class='noteIsNone'>오답노트가 존재하지 않습니다.</div>"

  $("#wrongNotes").html(strHtml);
}