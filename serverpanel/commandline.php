<head><base target="_parent"></head>
<style>

body {color:white};

</style>

<style>
p {color:white;font-family:Arial;font-size:30px;text-align:center}
body {background-color:black;}
input[name=passwordcheck], input[name=passwordcheck]:active {
	font-size:40px;
	background-color:444444;
	color:dddddd;
	border:0;
	outline:none;
	caret-color:777777;
}

textarea[name=command] {
	font-size:16px;
	background-color:444444;
	color:dddddd;
	border:0;
	outline:none;
	caret-color:777777;
	width:100%;
	height:60%;
}

#cmdsubmit {
	width:130px;
	height:50px;
	border-radius:5px;
	font-size: 30px;
	background-color: green;
	margin-top:4%;
}

</style>

<?php

if(isset($_POST['passwordcheck'])==false or $_POST['passwordcheck']!='testpass') {

?>
<p>Saen is not allowed to access the open console query.</p>
<?php
if(isset($_POST['passwordcheck'])==false){
?>
<p>Please authorise with the appropriate password.</p>
<?php } else {
	?>

<p>A different password is required to authorise.</p>

	<?php
}?>

<form method="post" action="">
<center><input name="passwordcheck" autofocus type="password"></input></center>
</form>

<?php
} else {
	
?>

<head><link type="text/css" rel="stylesheet" href="./mainstyle.css"></head>
<body>
<center><h1>Server Command Push</h1></center>

<p style="font-size: 20px;font-family: courier new;background-color: 050505;padding: 10px;font-weight:bold;text-align:left"><span style="color:yellow">[automsg received from </span><span style="color:ff4400">saen</span><span style="color:yellow">@</span><span style="color:lime">moderators</span><span style="color:yellow">]:</span> Please be careful when sending queries as failure to exercise caution could result in consequences for the server.</p>

<form method="post" action="command.php">

<textarea name="command" type="text" placeholder="Send command"/></textarea>
<center><input id="cmdsubmit" type="submit"/></center>

</form>
</body>
<?php } ?>