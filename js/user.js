//functions
function isNumber(input) {
    var pattern = /[0-9]/;
    if (pattern.test(input)) {
        return true;
    }
    else {
        return false;
    }
}
function isEnglish(input) {
    var pattern = /[a-zA-Z]/;
    if (pattern.test(input)) {
        return true;
    }
    else {
        return false;
    }
}
function isSpecial(input) {
    var pattern = /[~!@#$%^&*()_+|<>?:{}]/;
    if (pattern.test(input)) {
        return true;
    }
    else {
        return false;
    }
}
function isKorean(input) {
    var pattern = /[가-힣]/;
    if (pattern.test(input)) {
        return true;
    }
    else {
        return false;
    }
}
function isEmail(input){
    var pattern=/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]/;
    if (pattern.test(input)) {
        return true;
    }
    else {
        return false;
    }
}
function lengthBetween(value, min, max) {
    if (min <= value.length && value.length <= max) {
        return true;
    }
    else {
        return false;
    }
}
function clearError(id) {
    document.getElementById(id + "Error").innerHTML = "";
}

//edit info
function editInfoCheck() {
    //check name
    var name = document.getElementById("nameInput");
    var nameError = document.getElementById("nameInputError");
    var nameValid = !(isEnglish(name.value)) && !(isSpecial(name.value)) && lengthBetween(name.value, 2, 5);
    if (name.value.length == 0) {
        nameError.innerHTML = "이름을 입력해 주셋요."
        name.focus();
        return;
    }
    if (!nameValid) {
        nameError.innerHTML = "이름은 2~5글자 한글로 입력해주세요.";
        name.focus();
        return;
    }
    //check id
    var id = document.getElementById("idInput");
    var idError = document.getElementById("idInputError");
    var idValid = !(isKorean(id.value)) && !(isSpecial(id.value)) && lengthBetween(id.value, 4, 10);
    if (id.value.length == 0) {
        idError.innerHTML = "아이디를 입력해 주세요";
        id.focus();
        return;
    }
    if (!idValid) {
        idError.innerHTML = "아이디는 4~10글자 영어 또는 숫자만 혼합하여 주세요.";
        id.focus();
        return;
    }
    //check nickname
    var nickname = document.getElementById("nicknameInput");
    var nicknameError = document.getElementById("nicknameInputError");
    var nicknameValid = !(isEnglish(nickname.value)) && !(isSpecial(nickname.value)) && lengthBetween(nickname.value, 2, 10);
    if (nickname.value.length == 0) {
        nicknameError.innerHTML = "닉네임을 입력해 주세요";
        nickname.focus();
        return;
    }
    if (!nicknameValid) {
        nicknameError.innerHTML = "닉네임은 2~10글자 한글로 입력해주세요.";
        nickname.focus();
        return;
    }
    //check email
    var email = document.getElementById("emailInput");
    var emailError = document.getElementById("emailInputError");
    var emailValid = isEmail(email.value);
    if (email.value.length == 0) {
        emailError.innerHTML = "이메일을 입력해 주세요";
        email.focus();
        return;
    }
    if (!emailValid) {
        emailError.innerHTML = "이메일 형식이 올바르지 않습니다.";
        email.focus();
        return;
    }
}

//terms button
function checkboxCheck(id) {
    elem = document.getElementById(id);

    if ($(".modal_checkbox:not(:checked)").length == 0) {
        alert(document.getElementById("modalHeader").innerHTML + " 완료");
        $('#popup_content').load(elem.getAttribute("href"));
        modal.style.display = "block";
    }
    else {
        alert("약관에 모두 동의해주세요");
    };
};