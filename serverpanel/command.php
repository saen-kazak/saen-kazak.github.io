<?php 

require_once("rcon.php");

$host = 'localhost';
$port = 25575;
$password = 'exkozweiob';
$timeout = 3;


use Thedudeguy\Rcon;

$rcon = new Rcon($host,$port,$password,$timeout);

//$command = 'say hii';

$command = $_POST['command'];

if($rcon->connect())
{
	$rcon->sendCommand($command);
}

header('Location: index.php');
?>