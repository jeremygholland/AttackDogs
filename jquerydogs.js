
	$(document).ready(function(){
		$('div.fight').hide();
		$('div.phase2').hide();
		$('div.fightContinued').hide();
		$('div.fightWinner').hide();
		$('div.fightNowinner').hide();
		$('div#fight2winner').hide();
		$('div#fightNo').hide();
		$('div#fight2Nowinner').hide();
		$('div.run').hide();
		$('div.runYes').hide();
		$('div.runOne').hide();
		$('div.runYay').hide();
		$('div.runBoo').hide();
		$('div.runTwo').hide();
		$('div.runFail').hide();
		$('div.help').hide();
		$('div#helpOne').hide();
		$('div#help2').hide();
		$('div#help3').hide();
		$('div.church').hide();
		$('div#comic1').hide();
		$('div#comic2').hide();
		$('div#comic3').hide();
		$('div.junkYard').hide();
		$('div.win').hide();
		$('div.lose').hide();
		$('div.lame').hide();
		$('form').hide();
		$('div.form').hide();
		$('button.form').hide();


	$('button').hover(function(){
		$(this).addClass('red');
	},
	function(){
		$(this).removeClass('red');
	}
	);
	$('button.start').click(function(){
			$('button.start').fadeOut('fast');
			$('div.form').fadeIn('fast');
			$('button.form').fadeIn('fast');
			$('button.form').click(function(){ 
				$('button.form').fadeOut('fast');
				$('div.form').fadeOut('fast');  
				var userName = $("#test").val();
			$('div.phase2').prepend("<p> Well this is the situation, " + userName + ": A pack of angry, snarling, genital eating dogs have surrounded you. And brother, they mean business. While they snarl at you, you realize that you have 3 options. You could fight, run or call for help. What do you choose?'<p>");
			$('div.phase2').fadeIn('fast'); // to here. 
			$('button#fight').click(function(){
				$('div.phase2').fadeOut('fast');
				$('div.fight').fadeIn('slow');
				$('button#fightOne').click(function(){
					$('div.fight').fadeOut('fast');
					var both = (Math.floor(Math.random() * 5 + 1));
						if (both>= 4){
							$('div.fightWinner').fadeIn('fast');
							$('div.win').fadeIn('fast');
						}
					else if (both< 5){
						$('div.fightNowinner').fadeIn('slow');
						$('button#noWinner1').click(function(){
						$('div.fightNowinner').fadeOut('fast');
						var continued = (both + Math.floor(Math.random() * 5 + 1));
						if (continued>= 5){
						$('div#fight2winner').fadeIn('slow');
						$('div.win').fadeIn('fast');
					}
						else if (continued<5){
							$('div#fight2Nowinner').fadeIn('slow');
							$('div.lose').fadeIn('slow');
						}
						})
						$('button#noWinner2').click(function(){
							$('div.fightNowinner').fadeOut('fast');
							$('div.runYes').fadeIn('fast');
							$('button.runContinued').click(function(){
							var climb = Math.floor(Math.random() * 2); //might be this that's cuasing the error
						if(climb){
								$('div.runYes').fadeOut('fast');
								$('div.runYay').fadeIn('fast');
								$('div.win').fadeIn('fast');

					}
						else{
								$('div.runYes').fadeOut('fast');
								$('div.runBoo').fadeIn('fast');
								$('div.lose').fadeIn('fast');
					}
				})

						})
					}

			})
				$('button#fightTwo').click(function(){
					$('div.fight').fadeOut('fast');
					$('div#fightNo').fadeIn('fast');
					$('div.lose').fadeIn('fast');

				})
			})
				$('button#run').click(function(){
				$('div.phase2').fadeOut('fast');
				$('div.run').fadeIn('fast');
				$('button#runOne').click(function(){
					$('div.run').fadeOut('fast');
					$('div.runYes').fadeIn('fast');
					$('button.runContinued').click(function(){
					var climb = Math.floor(Math.random() * 2); //might be this that's cuasing the error
					if(climb){
						$('div.runYes').fadeOut('fast');
						$('div.runYay').fadeIn('fast');
						$('div.win').fadeIn('fast');

					}
					else{
						$('div.runYes').fadeOut('fast');
						$('div.runBoo').fadeIn('fast');
						$('div.lose').fadeIn('fast');
					}
				})
				})
				$('button#runTwo').click(function(){
					$('div.run').fadeOut('fast');
					$('div.runFail').fadeIn('fast');
					$('div.lose').fadeIn('fast');
				})
			})

			$('button#help').click(function(){
				$('div.phase2').fadeOut('fast');
				$('div.help').fadeIn('fast');
				$('button#helpOne').click(function(){
					$('div.help').fadeOut('fast');
					$('div.church').fadeIn('fast');
					$('div.win').fadeIn('fast');

				})
				$('button#help2').click(function(){
					var superHero = Math.floor(Math.random() *3 + 1);
					if (superHero === 1){
					$('div.help').fadeOut('fast');
					$('div#comic1').fadeIn('fast');
					$('div.win').fadeIn('fast');
					}
					else if(superHero === 2){
						$('div.help').fadeOut('fast');
						$('div#comic2').fadeIn('fast');
						$('div.lose').fadeIn('fast');
					}
					if (superHero === 3){
						$('div.help').fadeOut('fast');
						$('div#comic3').fadeIn('fast');
						$('div.lame').fadeIn('fast');
					}
				})
				$('button#help3').click(function(){
					$('div.help').fadeOut('fast');
					$('div.junkYard').fadeIn('fast');
					$('div.lose').fadeIn('fast');
				})
			})
			
	})	

})
});
	



