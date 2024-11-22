let count =1;
            let num = Math.floor(Math.random() * (100 -1)) + 1;
            document.getElementById('message').textContent = checkPrime(num);
            function guessNumber(){
                const userNum = Number(document.getElementById('userInput').value);
                const message = document.getElementById('message');

                if(userNum > num){
                    message.textContent = "YOU ARE GETTING FAR FROM THE NUMBER! TRY AGAIN 😒😂😂😂";
                    message.style.color = 'green';
                }
                else if(userNum < num){
                    message.textContent = "YOU ENTERED A SMALLER NUMBER! 😒🤣🤣🤣🤣";
                    message.style.color = 'red';
                }
                else{
                    message.textContent = `YOU ENTERED THE CORRECT IN ${count} TIMES . `;
                    if(count <= 3){
                        message.textContent += "YOU ARE LEGEND 🫡🫡🫡🫡🫡."
                    }
                    else if(count <= 6){
                        message.textContent += "YOU'RE A GOOD PLAYER, KEEP ON 😊😊😊😘."
                    }
                    else{
                        message.textContent += "WELL PLAYED, BETTER LUCK NEXT TIME 😒😒😒😒😒."
                    }
                    message.style.color = 'blue';
                    guess.disabled = true;
                    restartButton.classList.remove('hidden');
                }
                count++;
            }
            function restartGame(){
                count = 1;
                num = Math.floor(Math.random() * (100 - 1)) + 1; 
                document.getElementById('message').textContent = checkPrime(num); 
                document.getElementById('message').style.color = '#333'; 
                document.getElementById('userInput').value = ''; 
                document.getElementById('guessButton').disabled = true; 
                document.getElementById('restartButton').classList.add('hidden');
                guessNumber();
            }