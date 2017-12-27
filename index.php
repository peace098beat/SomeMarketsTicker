<!DOCTYPE HTML>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="アービトラージ">
  <title>アービトラージ</title>
  <meta name="keywords" content="アービトラージ" />

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
</head>
<style type="text/css">
.word-wrap {
    word-break: break-all;
    word-wrap: break-word;
    overflow-wrap: break-word;
}
.no-wrap {
    white-space: nowrap;
}
.fixed {
    table-layout: fixed;
}
.response{
  word-break:break-all;
  font-size:small;
}
</style>
<body>

   <div class="container">
     
     
    <h1 class="display-1">Bitcoin Markets</h1>

   <!--<p id="coincheck">-</p>-->
   <!--<p id="quoine">-</p>-->
   <!--<p id="bitflyer">-</p>-->
   <!--<p id="zaif">-</p>-->
    
    <table class="table table-responsive table-hover">
      <thead>
        <tr>
          <!--<th scope="col">#</th>-->
          <th scope="col">Market</th>
          <th scope="col">Time</th>
          <th scope="col">Response</th>
        </tr>
      </thead>
      <tbody>
        <tr id="zaif">
          <!--<th scope="row">1</th>-->
          <td>Zaif</td>
          <td class="time">-</td>
          <td class="response word-wrap">取得中</td>
        </tr>
        <tr id="bitflyer">
          <!--<th scope="row">2</th>-->
          <td>Bitflyer</td>
          <td class="time">-</td>
          <td class="response">取得中</td>
        </tr>
        <tr id="quoine">
          <!--<th scope="row">3</th>-->
          <td>Quoine</td>
          <td class="time">-</td>
          <td class="response">取得中</td>
        </tr>
        <tr id="coincheck">
          <!--<th scope="row">4</th>-->
          <td>Coincheck</td>
          <td class="time">-</td>
          <td class="response">取得中</td>
        </tr>
      </tbody>
    </table>



    <p class="text-right"><small>TIME: 1s=1000ms. ex) 0.5s = 500ms</small></p>
    <p class="text-right" id="interval"><small>Interval:</small></p>

   
    <style>
    /*#flash_text{*/
    /*  background-color: #b6d5ff;*/
    /*}*/
    </style>
    <div class="alert alert-primary" role="alert">
      <p id="flash_text">...</p>
    </div>
    
    <button type="button" class="btn btn-primary btn-sm" onclick="startTimer();"/>Start</button>
    <button type="button" class="btn btn-secondary btn-sm" onclick="stopTimer();">Stop</button>
  
    
   </div> <!--/container-->

    
    <!-- SCRIPT -->

    <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <!--<script type="text/javascript" src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>-->
    <!--<script src="https://cdnjs.cloudflare.com/ajax/libs/tabulator/3.3.2/js/tabulator.min.js"></script>-->
    <!--<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
  
   
    <!-- USER SCRIPT -->
    <script type="text/javascript" src="user.js"></script>

</body>
</html>