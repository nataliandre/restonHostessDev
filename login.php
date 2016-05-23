<? if(isset($_POST['submit'])){header('Location: index.php');} ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
    <link href="custom/css/templates.css" rel="stylesheet">
    <link href="custom/css/css.css" rel="stylesheet">

    <link href="standart/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<header>
    <div class="wrapper__center">
        <!-- Logo -->
        <div class="templates__logo float__left"></div>
        <!-- topMenu -->
    </div>
</header>

   <div class="row" style="margin-top:30px;">
       <div class="col-md-2 col-md-offset-5">
          <div class="loginForm">
           <form action="" method="post">
               <p class="formH1">ВХОД В ЛИЧНЫЙ КАБИНЕТ</p>
               <input type="text" name="userName" class="template__input__text" placeholder="Ваш логин">
               <input type="text" name="userPassword" class="template__input__text" placeholder="Ваш пароль">
               <input class="loginButton" type="submit" name="submit" value="ВОЙТИ">
               <p class="forgotenPasswordText"><a>Забыли пароль?</a></p>
           </form>
           </div>
       </div>
   </div>  
</body>
</html>