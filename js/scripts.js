(function() {
  "use strict";

  let login = prompt("Login?");
  let password = null;

  if (login == null) {
    alert("Вход отменен");

  } else if (login.toLowerCase() == "админ".toLowerCase()) {
    password = prompt("Password?");
        if (password == "Чёрный Властелин") {
          alert("Добро пожаловать!");
        } else if (password == null) {
          alert("Вход отменен");
        } else {
          alert("Пароль не верен");
        }

  } else {
    alert("Я Вас не знаю");
  }
  
})();
