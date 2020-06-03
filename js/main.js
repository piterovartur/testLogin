let array = {
    artur: {
        name: "Артур",
        password: "1h8nn3n6"
    },
    bogdan: {
        name: "Богдан",
        password: "3h3nn3n3"
    },
    ruslan: {
        name: "Руслан",
        password: "121323434"
    },
    caroline: {
        name: "Кэролайн",
        password: "wzgn82"
    }
};

function browserCode() {
    let answer = confirm('Войти?');

    if (answer) {
        while (true) {
            let login = prompt("Введите логин: ");
            console.log(login);
            if (login in array) {
                while (true) {
                    let password = prompt("Введите пароль: ");
                    if (password == array[login]["password"]) {
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