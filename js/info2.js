let validation = new JustValidate("form")

validation.addField("#mySelect", [
    {
        rule: "required",
        errorMessage: "Выберите регион!"
    }
]).addField("#name_pre", [
    {
        rule: "required",
        errorMessage: "Введите название предприятия!"
    },
    {
        rule: "minLength",
        value: 2,
        errorMessage: "Минимум 2 символа!"
    }
]).addField("#name", [
    {
        rule: "required",
        errorMessage: "Введите имя!"
    },
    {
        rule: "minLength",
        value: 2,
        errorMessage: "Минимум 2 символа!"
    }
]).addField("#email", [
    {
        rule: "required",
        errorMessage: "Введите email!"
    },
    {
        rule: "minLength",
        value: 2,
        errorMessage: "Минимум 2 символа!"
    }
]).onSuccess(async function () {
    let data = {
        mySelect: document.getElementById('mySelect').options[document.getElementById('mySelect').selectedIndex].text,
        name_pre: document.getElementById("name_pre").value,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
    }

    let response = await fetch("mail2.php", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    let result = await response.text()
    document.getElementById("contacts-popup2").style.display = 'block';
    document.getElementById("contacts-bg").style.display = 'block';
    document.getElementById("name_pre").value = '';
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
})
