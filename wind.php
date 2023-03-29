<html>
<head>
<style>
  body {
    font-family: Arial;
    background-color: #f0f0f0;
  }
  form {
    width: 300px;
    margin: 50px auto;
    border: 1px solid #ccc;
    padding: 20px;
    background-color: white;
    background-image: url("https://images.unsplash.com/photo-1542281286-9e0a16bb7366");
    background-size: cover;
  }
  input {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    border: none;
  }
  button {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #00a0d2;
    color:white
   }
   a {
     display:block; 
     text-align:center; 
     margin-top:10px; 
     text-decoration:none; 
     color:#00a0d2
   }
</style>
</head>
<body>
<form action="/login" method="post" style="background-image:url('https://images.unsplash.com/photo-1542281286-9e0a16bb7366');background-size:'cover'">
<h3>Форма авторизации</h3>
<label for="email">Email:</label>
<input type="email" id="email" name="email" required>
<label for="password">Пароль:</label>
<input type="password" id="password" name="password" required>
<button type="submit">Войти</button>
<a href="/forgot-password">Забыли пароль?</a>
<a href="/register">Зарегистрироваться</a>
</form>
</body>
</html>
