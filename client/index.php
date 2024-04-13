<?php
@ob_start();
session_start();

if (isset($_SESSION['user'])) {
  $user = $_SESSION['user'];

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Automatic Billing</title>

    <link rel="stylesheet" href="asset/css/style1.css">
    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <script src="asset/scripts/script1.js"></script>
    <script type="text/javascript" src="asset/scripts/jquery.min.js"></script>
    <script src="asset/scripts/lottie-player.js"></script>
    <script src="asset/scripts/axios.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.js" integrity="sha512-is1ls2rgwpFZyixqKFEExPHVUUL+pPkBEPw47s/6NDQ4n1m6T/ySeDW3p54jp45z2EJ0RSOgilqee1WhtelXfA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js" integrity="sha512-CNgIRecGo7nphbeZ04Sc13ka07paqdeTu0WR1IM4kNcpmBAUSHSQX0FslNhTDadL4O5SAGapGt4FodqL8My0mA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
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
        <div class="logout"><a href="logout.php"><i class="fas fa-sign-out-alt"></i></a></div>
      </header>
    <!--Animation-->
    <div class="lottie" id="1">
        <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_jioazy9u.json" background="transparent" speed="1" loop autoplay></lottie-player>
        <div class="text">PLACE ITEMS TO START CHECKOUT</div>
    </div>

    <!--Main-->
    <main id="home">

    </main>

    <!--Checkout Button-->
    <div id="final">
        <button id="cancel_btn" class="cancel" onclick="deleteProducts()">CANCEL</button>
        <button id="2" class="checkout" onclick="checkout()">CHECKOUT</button>
    </div>


    <!--QR code-->
    <div id="qr" class="animated fadeInUp Once">
        Scan QR Code To Pay
        <img id="image" src="" />
    </div>

    <!--Success-->
    <div id="success">
        <lottie-player src="https://assets7.lottiefiles.com/private_files/lf30_poez9ped.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;" loop autoplay></lottie-player>
    </div>


          <footer id="footer" class="fixed-top d-flex align-items-center header-transparent">
            <div class="footer-name row justify-content-center align-items-center">
                <p>Arul Virumbi K-19E601</p>
                <p>Pranav A-19E631</p>
                <p>Pranesh R-20E906</p>
                <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
            </div>
        </footer>

    <!--API data update listener-->
    <script>
        window.onload = () => {
            firstload();
            let intervalId = setInterval(function() {
                loadProducts();
            }, 500);
        
            // const socket = new WebSocket('ws://localhost:5000');
            // socket.addEventListener('open', function (event) {
            //     console.log('WebSocket connection established');
            // });

            // socket.addEventListener('message', (event) => {
            //     const newData = JSON.parse(event.data);
            //     loadprds(newData);
            // });
            document.getElementById("cancel_btn").addEventListener("click", function() {
                clearInterval(intervalId);
            });
        }
    </script>


</body>


</html>

<?php

} else {
  header("location:login.php ");
}
?>