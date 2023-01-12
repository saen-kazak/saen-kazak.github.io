<html>
<body>
<style>

body {
	background-color:black;
	width:364px;
	height:116px;
	border:1px solid grey;
	color:FAF186;
	padding:10px;
	padding-bottom:0px;
	font-family: 'Lucida Console';
	font-size:16px;
}

#line1, #line2, #line3 {
	background-color:black;
	margin-top:-4px;
	margin-bottom:15px;
}



#linetime {
	text-align:center;
}

marquee {
position: absolute;
left: 131px;
width: 13%;
}

</style>
<p id="line1">1st  08:00  Strawbridge</p>
<p id="line2"><span style="background-color:black;">Calling at: </span><marquee>Blockfleet, Hemsworth Islands, Sprucefields and Strawbridge. Formed of 10 carriages. This train is currently between New South Cross and Clementines Town.</marquee></p>
<p id="line3">2nd  08:04  Strawbridge</p>
<p id="linetime"></p>
<script>
setInterval(function() {
    var currentTime = new Date ( );    
    var currentHours = currentTime.getHours ( );   
    var currentMinutes = currentTime.getMinutes ( );   
    var currentSeconds = currentTime.getSeconds ( );
	currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours; 
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;   
    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;  
    var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;
    document.getElementById("linetime").innerHTML = currentTimeString;
}, 1000);</script>
