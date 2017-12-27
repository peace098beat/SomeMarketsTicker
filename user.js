"use strict";



/**
 * 日付をフォーマットする
 * @param  {Date}   date     日付
 * @param  {String} [format] フォーマット
 * @return {String}          フォーマット済み日付
 */
function formatDate(date, format) {
  if (!format) format = 'YYYY-MM-DD hh:mm:ss.SSS';
  format = format.replace(/YYYY/g, date.getFullYear());
  format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
  format = format.replace(/DD/g, ('0' + date.getDate()).slice(-2));
  format = format.replace(/hh/g, ('0' + date.getHours()).slice(-2));
  format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
  format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
  if (format.match(/S/g)) {
    var milliSeconds = ('00' + date.getMilliseconds()).slice(-3);
    var length = format.match(/S/g).length;
    for (var i = 0; i < length; i++) format = format.replace(/S/, milliSeconds.substring(i, i + 1));
  }
  return format;
};


function load_api(url, name){
    var start_time = new Date();
    /* BITREX */        
    $.get("get_wrapper.php", {url:url})
        .done(function(data){
            var ms = new Date() - start_time;
            document.getElementById(name)
             .getElementsByClassName("time")[0]
             .innerHTML = ms +" [ms]";
            
            document.getElementById(name)
             .getElementsByClassName("response")[0]
             .innerHTML = data;
             
            console.log(data);
        })
        .fail(function(jqXHR,status,error){
            var ms = new Date() - start_time;
            document.getElementById(name)
             .getElementsByClassName("time")[0]
             .innerHTML = ms +" [ms]";
            
            document.getElementById(name)
             .getElementsByClassName("response")[0]
             .innerHTML = error;
            console.log(error);
        });
}; 

var API_ZAIF = "https://api.zaif.jp/api/1/ticker/btc_jpy";

function load_zaif(){
    var start_time = new Date();
    /* BITREX */        
    var url = "https://api.zaif.jp/api/1/ticker/btc_jpy";
    $.get("get_wrapper.php", {url:url})
        .done(function(data){
            var ms = new Date() - start_time;
            document.getElementById("zaif")
             .getElementsByClassName("time").innerHTML = ms +" [ms]";
            
            document.getElementById("zaif")
             .getElementsByClassName("response").innerHTML = data;
        })
        .fail(function(jqXHR,status,error){
            console.log(error);
        });
};


var API_BITFLYER = "https://api.bitflyer.jp/v1/ticker";

function load_bitflyer(){
    var start_time = new Date();
    /* BITREX */        
    var url = "https://api.bitflyer.jp/v1/ticker";
    $.get("get_wrapper.php", {url:url})
        .done(function(data){
            var ms = new Date() - start_time;
            document.getElementById("bitflyer").innerHTML = "<span>"+ms+" ms</span> :"+ data;
        })
        .fail(function(jqXHR,status,error){
            console.log(error);
        });
};


var API_COINCHECK = "https://coincheck.com/api/ticker";

function load_coincheck(){
    var start_time = new Date();
    /* BITREX */        
    var url = "https://coincheck.com/api/ticker";
    $.get("get_wrapper.php", {url:url})
        .done(function(data){
            var ms = new Date() - start_time;
            document.getElementById("coincheck").innerHTML = "<span>"+ms+" ms</span> :"+ data;
        })
        .fail(function(jqXHR,status,error){
            console.log(error);
        });
};


var API_QUOINE = "https://api.quoine.com/products/5";


function load_quoine(){
    var start_time = new Date();
    /* BITREX */        
    var url = "https://api.quoine.com/products/5";
    $.get("get_wrapper.php", {url:url})
        .done(function(data){
            var ms = new Date() - start_time;
            document.getElementById("quoine").innerHTML = "<span>"+ms+" ms</span> :"+ data;
        })
        .fail(function(jqXHR,status,error){
            console.log(error);
        });
};

/*********************************************/
/* TIMER */ 
/*********************************************/
var timer1;
var INTERVAL=1000;

document.getElementById("interval").innerHTML="<small>取得間隔 "+INTERVAL+" ms</small>";

function stopWatchDec(func){
    // console.time('measurement of time'); // 計測開始
    func();
    // console.timeEnd('measurement of time');
}


function startTimer(){
    clearInterval(timer1);
    timer1 = setInterval(function(){
       load_api(API_ZAIF, "zaif");
       load_api(API_BITFLYER,"bitflyer");
       load_api(API_COINCHECK, "coincheck");
       load_api(API_QUOINE,"quoine");
    }, INTERVAL);
    flush("Timer Start..");
};

function stopTimer(){
    clearInterval(timer1);
    flush("Timer Stop.. ");
}


/*********************************************/
/* FLUSH */
/*********************************************/
function flush(msg){
    var f = document.getElementById("flash_text"); 
    f.innerHTML=msg;
    
    setTimeout(function(){
        f.innerHTML="";
    }, INTERVAL);
};


/*********************************************/
/* Initialize  Function*/
/*********************************************/
function initialize(){
    startTimer();
};


/*********************************************/
/* MAIN */
/*********************************************/

window.onload = initialize;

