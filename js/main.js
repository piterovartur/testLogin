let userLogin = "root";
let userPassword = "root";

let user = {
    login: () => userLogin,
    password: () => userPassword
};

function login() {
    let answer = confirm('Войти?');

    if (answer) {
        while (true) {
            let login = prompt("Введите логин: ");
            if (login == userLogin) {
                while (true) {
                    let password = prompt("Введите пароль: ");
                    if (password == userPassword) {
                        alert('Вы успешно вошли!');
                        document.location.href = "../secret.html";
                        break;
                    } else if (password == null) {
                        break;
                    } else {
                        alert('Неверный пароль!');
                    }
                }
                break;
            } else if (login == null) {
                break;
            } else {
                alert('Такого пользователя не существует.');
            }
        }
    }
}

function register() {
    let answer = confirm('Зарегистрироваться?');

    if (answer) {
        while (true) {
            let login = prompt("Введите новый логин: ");
            let password = prompt("Введите новый пароль: ");
            if (login == null || password == null) {
                break;
            } else if (login == '' || password == '') {
                alert('Логин или пароль не могут быть пустыми!');
            } else {
                userLogin = login;
                userPassword = password;
                alert('Успешная регистрация!');
                break;
            }
        }
    }
}