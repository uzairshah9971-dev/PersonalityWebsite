```javascript
function showPersonality() {

    let name = document.getElementById("name").value.trim();
    let number = parseInt(document.getElementById("number").value);
    let result = document.getElementById("result");


    if(name === ""){
        result.innerHTML = "❌ Please enter your name first.";
        return;
    }


    if(isNaN(number) || number < 1 || number > 99){
        result.innerHTML = "❌ Enter a number between 1 and 99.";
        return;
    }



    const personalities = {

    1:"You are like Donkey 🫏",
    2:"You are like Monkey 🐵",
    3:"You are like Sleepy Boy 😴",
    4:"You are like Lazy King 👑",
    5:"You are like Tiny Tiger 🐯",
    6:"You are like Funny Guy 😂",
    7:"You are like Naughty Kid 😜",
    8:"You are like Smart Cookie 🍪",
    9:"You are like Crazy Chicken 🐔",
    10:"You are like Potato Hero 🥔",

    41:"You are like Hacker 💻",
    42:"You are like Programmer 👨‍💻",
    43:"You are like Detective 🕵️",
    44:"You are like Scientist 🔬",
    45:"You are like Professor 🎓",

    79:"You are like Football King ⚽",
    80:"You are like Cricket Boss 🏏",
    81:"You are like Gym Beast 💪",

    89:"You are like CEO 👔",
    90:"You are like Boss 😎",
    95:"You are like Mastermind 🎯",
    98:"You are like GOAT 🐐",
    99:"You are like Legendary Emperor 👑"

    };


    let message = `
    <h2>🎉 Hello ${name}</h2>
    <p>Number: ${number}</p>
    <h3>${personalities[number] || "Mystery Personality 🔮"}</h3>
    <button onclick="shareResult()">
    📤 Share Result
    </button>
    `;



    result.innerHTML = "";


    let i=0;


    let typing = setInterval(()=>{

        result.innerHTML = message.substring(0,i);

        i++;


        if(i > message.length){

            clearInterval(typing);

            confetti();

        }


    },20);



}



function randomPersonality(){


    let number =
    Math.floor(Math.random()*99)+1;


    document.getElementById("number").value = number;


    showPersonality();

}




function clearFields(){


    document.getElementById("name").value="";


    document.getElementById("number").value="";


    document.getElementById("result").innerHTML =
    "Your result will appear here 😊";


}



function shareResult(){

    let text =
    document.getElementById("result").innerText;


    navigator.share({

        title:"My Personality Result",

        text:text

    });

}




function confetti(){

    for(let i=0;i<40;i++){

        let emoji=document.createElement("div");

        emoji.innerHTML="🎉";

        emoji.style.position="fixed";

        emoji.style.left=Math.random()*100+"%";

        emoji.style.top="0";

        emoji.style.fontSize="25px";

        emoji.style.animation="fall 3s linear";


        document.body.appendChild(emoji);



        setTimeout(()=>{

            emoji.remove();

        },3000);

    }

}
```
