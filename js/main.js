let array = {
	artur: {
		name: "Артур",
		password: "1h8nn3n6"
	},
	bogdan: {
		name: "Богдан",
		password: "3h3nn3n3"
	}
};

let answer = confirm('Войти?');

if (answer) {
	while (true) {
		let login = prompt("Введите логин: ");
		if (login in array) {
			while (true) {
				let password = prompt("Введите пароль: ");
				if (password == array[login]["password"]) {
					alert('Вы успешно вошли на страницу!');
					break;
				} else {
					alert('Неправильный пароль!');
				}
			} break;
		} else {
			alert('Такого пользователя не существует.');
		}
	}
}

