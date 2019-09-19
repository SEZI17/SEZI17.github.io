
function saveForm() {
    event.preventDefault();
    let select = document.getElementById("dan").value;
    let test = document.getElementById("test").value;
    let form = document.getElementById("form").value;
    let kanji = document.getElementById("kanji").value;
    let yomi = document.getElementById("yomigana").value;
    let korean = document.getElementById("korean").value;

    let word = {
        select: select,
        test: test,
        form: form,
        kanji: kanji,
        yomi: yomi,
        korean: korean
    };
    let obj ={
        body : word,
        headers:{"Access-Control-Allow-Origin":"*"},
        method:"POST"
    }
    // fetch("./wordlist.json", obj)
    //     .then(res => res.json())
    //     .then(json => console.log(json))
    //     .catch(err => console.error(err));


};