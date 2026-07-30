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
          1: "You are like Donkey 🫏",
    2: "You are like Monkey 🐵",
    3: "You are like Sleepy Boy 😴",
    4: "You are like Lazy King 👑",
    5: "You are like Tiny Tiger 🐯",
    6: "You are like Funny Guy 😂",
    7: "You are like Naughty Kid 😜",
    8: "You are like Smart Cookie 🍪",
    9: "You are like Crazy Chicken 🐔",
    10: "You are like Potato Hero 🥔",
    11: "You are like Bad Boy 😎",
    12: "You are like Good Boy 😊",
    13: "You are like Genius 🧠",
    14: "You are like Monster 👹",
    15: "You are like Dragon 🐉",
    16: "You are like Haunted Soul 👻",
    17: "You are like Ghost Rider 👻",
    18: "You are like Vampire 🧛",
    19: "You are like Zombie 🧟",
    20: "You are like Alien 👽",
    21: "You are like Ninja 🥷",
    22: "You are like Samurai ⚔️",
    23: "You are like Pirate ☠️",
    24: "You are like King 👑",
    25: "You are like Prince 🤴",
    26: "You are like Warrior 🛡️",
    27: "You are like Knight ⚔️",
    28: "You are like Champion 🏆",
    29: "You are like Legend ⭐",
    30: "You are like Hero 🦸",
    31: "You are like Superhero 💪",
    32: "You are like Brave Heart ❤️",
    33: "You are like Fearless Lion 🦁",
    34: "You are like Eagle Eye 🦅",
    35: "You are like Shark 🦈",
    36: "You are like Wolf 🐺",
    37: "You are like Panther 🐆",
    38: "You are like Fox 🦊",
    39: "You are like Bear 🐻",
    40: "You are like Cobra 🐍",
    41: "You are like Hacker 💻",
    42: "You are like Programmer 👨‍💻",
    43: "You are like Detective 🕵️",
    44: "You are like Scientist 🔬",
    45: "You are like Professor 🎓",
    46: "You are like Doctor 🩺",
    47: "You are like Engineer ⚙️",
    48: "You are like Captain 🚢",
    49: "You are like Pilot ✈️",
    50: "You are like Explorer 🧭",
    51: "You are like Lucky Star ⭐",
    52: "You are like Unlucky Guy 😅",
    53: "You are like Golden Boy 🥇",
    54: "You are like Silver Star 🥈",
    55: "You are like Bronze Warrior 🥉",
    56: "You are like Lucky Duck 🦆",
    57: "You are like Cool Dude 😎",
    58: "You are like Chill Master ❄️",
    59: "You are like Fire King 🔥",
    60: "You are like Ice Master 🧊",
    61: "You are like Thunder ⚡",
    62: "You are like Storm Rider 🌪️",
    63: "You are like Rainbow Hero 🌈",
    64: "You are like Sunshine ☀️",
    65: "You are like Moon Walker 🌙",
    66: "You are like Star Hunter 🌟",
    67: "You are like Space Traveller 🚀",
    68: "You are like Time Traveller ⏳",
    69: "You are like Magic Wizard 🧙",
    70: "You are like Dark Knight 🌑",
    71: "You are like White Angel 😇",
    72: "You are like Devil 😈",
    73: "You are like Joker 🃏",
    74: "You are like Clown 🤡",
    75: "You are like Meme Lord 😂",
    76: "You are like Comedy King 🎭",
    77: "You are like Dancing Star 💃",
    78: "You are like Singing Bird 🎤",
    79: "You are like Football King ⚽",
    80: "You are like Cricket Boss 🏏",
    81: "You are like Gym Beast 💪",
    82: "You are like Speed Racer 🏎️",
    83: "You are like Rocket 🚀",
    84: "You are like Lightning Bolt ⚡",
    85: "You are like Diamond 💎",
    86: "You are like Gold King 🥇",
    87: "You are like Millionaire 💰",
    88: "You are like Billionaire 💸",
    89: "You are like CEO 👔",
    90: "You are like Boss 😎",
    91: "You are like Ultimate Champion 🏆",
    92: "You are like World Conqueror 🌍",
    93: "You are like King of Kings 👑",
    94: "You are like Supreme Genius 🧠",
    95: "You are like Mastermind 🎯",
    96: "You are like The Chosen One ✨",
    97: "You are like Unstoppable 🔥",
    98: "You are like GOAT 🐐",
    99: "You are like Legendary Emperor 👑"
    };


    result.innerHTML = `
    <div class="result-card">

        <h2>🎉 Hello ${name}</h2>

        <p>Your number: ${number}</p>

        <h3>
        ${personalities[number] || "Mystery Personality 🔮"}
        </h3>

        <button onclick="shareResult()">
        📤 Share Result
        </button>

    </div>
    `;


    result.classList.add("show-result");

    confetti();

}



function randomPersonality(){

    let number = Math.floor(Math.random()*99)+1;

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

    let text = document.getElementById("result").innerText;


    if(navigator.share){

        navigator.share({

            title:"My Personality Result",

            text:text

        });

    }
    else{

        alert(text);

    }

}



function confetti(){

    for(let i=0;i<30;i++){

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
