<?php
@ob_start();
session_start();

if(!isset($_SESSION['user'])){

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Automatic Billing</title>

    <link rel="stylesheet" href="asset/css/style1.css">
    <link rel="stylesheet" href="asset/css/login.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script type="text/javascript">
                    $(document).ready(function(){
                
                $("#login").click(function(){
                    
                        user=$("#user").val();
                        password=$("#upassword").val();
                        $.ajax({
                            type: "POST",
                            url: "validate.php",
                            data: "user=" + user + "&password=" + password,
                            success: function(html){
                            if(html=='true')
                            {
                                
                                $("#add_err1").html('<div class="alert alert-success"> \
                                                        <strong>Authenticated</strong> \ \
                                                    </div>');

                                window.location.href = "index.php";
                            
                            } else if (html=='pass') {
                                    $("#add_err1").html('<div class="alert alert-danger"> \
                                                        <strong>Wrong Password!</strong> \ \
                                                    </div>');
                                    
                            
                            } else {
                                    $("#add_err1").html('<div class="alert alert-danger"> \
                                                        <strong>Error</strong> processing request. Please try again. \ \
                                                    </div>');
                            
                            }
                            },
                            beforeSend:function()
                            {
                                $("#add_err1").html("loading...");
                            }
                        });
                        return false;
                    });
        });
    </script>

</head>

<body>
    <header id="header" class="fixed-top d-flex align-items-center header-transparent">
        <div class="container-fluid">
    
          <div class="row justify-content-center align-items-center">
            <div class="col-xl-11 d-flex align-items-center justify-content-between">
              <h1 class="title">Autonomous Retail Checkout System</h1>
              <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
            </div>
          </div>
    
        </div>
      </header>

      <form id="sign-in" style="display:block;">
        <div class="login-box">
            <h1>Login</h1>
            <div id="add_err1"></div>
            <div class="in-label">
            <label for="uname"><b>Username</b></label></div>
            <input id="user" type="text" placeholder="Enter Username" name="uname" required>

            <div class="in-label">
            <label for="psw"><b>Password</b></label></div>
            <input id="upassword" type="password" placeholder="Enter Password" name="psw" required>
                   
            <button class="submitBtn" id="login" >Sign In</button>
        </div>
    </form>

      <footer id="footer" class="fixed-top d-flex align-items-center header-transparent">
            <div class="footer-name row justify-content-center align-items-center">
                <p>Arul Virumbi K-19E601</p>
                <p>Pranav A-19E631</p>
                <p>Pranesh R-20E906</p>
                <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
            </div>
        </footer>

</body>

<?php 

  }else{
  if (isset($_SESSION['email'])){
    header("location:index.php ");
  }
}

?>
