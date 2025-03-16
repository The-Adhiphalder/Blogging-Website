<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login</title>
    <link rel="stylesheet" href="{{asset('css/adminlogin.css')}}"> 

</head>

<body>

    <video autoplay loop muted playsinline class="background-video">
        <source src="/Video/Space.mp4" type="video/mp4">
            <script>
                document.addEventListener("DOMContentLoaded", function() {
                    var video = document.getElementById("background-video");
                    video.playbackRate = 1.2; 
                });
            </script>
    </video>

    <div class="main-div">
        <div class="left-div">
            <div id="login" class="login">

                <h3 class="login-heading">Admin Login</h3>

                <form action="" method="get">

                    <div class="login-ele">
                        <input type="email" name="" id="" placeholder="Username" required>
                    </div>

                    <div class="login-ele">
                        <input type="password" name="" id="" placeholder="Password" required>
                    </div>

                    <button type="submit" class="submit-button">Login</button>
                    
                </form>
            </div>
        </div>

        <div class="right-div">

            <img src="/Pictures/image copy.png" alt="">
            
        </div>
    </div>
</body>
</html>