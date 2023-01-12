<html>

<body>

<link type="text/css" rel="stylesheet" href="./mainstyle.css">

<h1><center>Moderator Options</center></h1>

<form target="testframe" method="post" action="commandline.php">

<button class="optionbtn" style="background-color:770000;color:white"type="submit" onclick="document.getElementById('commandlineframe').style.display='block';">Open<br/> Console Query</button>

</form>

<form method="post" action="command.php">

<input type="hidden" name="command" value="function pack:fastline-activate">
<button class="optionbtn" style="background-color:008899;color:white" type="submit" value="">Activate fastline</button>
</form>

<form method="post" action="command.php">

<input type="hidden" name="command" value="function pack:fastline-deactivate">
<button class="optionbtn" style="background-color:008899;color:white" type="submit" value="">Deactivate fastline</button>
</form>


</form>

<iframe name="testframe" id="commandlineframe"></iframe>

</body>

</html>