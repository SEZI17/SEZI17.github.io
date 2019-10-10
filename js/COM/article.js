
async function loadArticle(url) {
    try {
        let queryUrl = "notice_article/" + url + ".json";
        let data = await fetch(queryUrl);
        let articleData = await data.json();
        let articleUrl = "{{도메인}}";

        $('.article_title').text(articleData.title);
        $('.article_date').text(articleData.date);
        $('.article_href').children('a').attr('href', articleUrl).text(" " + articleUrl);
        $('.article_contents').html(articleData.content);
        $('.article_author').text(articleData.author);
        $('.article_viewer').text(articleData.viewer);
    }catch (err) {
        console.error(err);
    }
};

$(function () {
    let url = $.urlParam('id');

    let article = loadArticle(url);

})