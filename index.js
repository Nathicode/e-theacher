var time = setTimeout( function(){
    document.querySelector("h1").innerHTML = "E-Teacher";
    document.querySelector("h1").style.background = "transparent";
    document.querySelector("ul").style.background = "transparent";
    
}, 2000);
function submit(){
    
   let warn = new Audio("ttsMP3.com_VoiceText_2023-9-9_9_17_23.mp3");
   warn.play(); document.querySelector("ul").style.animationName += "anime";
    document.querySelector("ul").style.background = "transparent";
}
function nine(){
let ninegr = new Audio("grade9.mp3");
ninegr.play();
 let select = document.getElementById("select");
 const how = document.getElementById("how");
 const unit = document.getElementById("unit");
 const submit = document.getElementById("submit");
 const nine = document.getElementById("nine");
 let biotf = [
    "<label>HIV AIDS is caused by bacteria?</label>",
 "<label>Biology is the branch of social studies</label>",
  "<label>The vector of bilharzia is ant</label>",
 "<label>Biology has no usage for researches?</label>",
  "<label>Biology plays a big role in making scientific researches</label>",
 "<label>Ethiopian scientists have not contributed to get solution for soil fertility</label>",
 "<label>Biology Does not study about health</label>",
 "<label>Abebe Biklila was famous biologist</label>"
 ];
 console.log(biotf.length)
 let bio1s = ["<label>Biology Is</label> <p>A. the study of matter?</p><p>B. The study of life & living organisms</p><p>C. The study of how living organisms interact</p><p>D. The study of atoms</p>",
 "<label>Bilharzia is caused by</label> <p>A. Bacteria</p><p>B. Snails</p><p>C. Viruses</p><p>D. Parasitic flat worms</p>", "<label>EHNRI carries out research into</label> <p>A. Farming</p> <p>B. Biodiversity</p> <p>C. Soil and water</p><p>D. Health and nutrition issues</p>",
 "<label>Name two Ethiopian biologists who have made internationally recognized contributions in their field?</label>", 
 "<label>What are the main advantages of using Endod in the battle of bilharzia?</label>", 
 "<label>What is rinderpest?</label>",
 
 "<label>Describe the use of biology?</label>",
 "<label>List three biologists that are very known of their contributions?</label>",
 "<label>What is biodiversity</label>",
 "<label>List three biological research institutions </label>",
 "<label>what is the role of EHNRI?</label>",
 "<label>What is the name of the first female professer from AAU?</label>"
 ];
 let biocs = [
    "<label>Biology Is</label> <p>A. the study of matter?</p><p>B. The study of life & living organisms</p><p>C. The study of how living organisms interact</p><p>D. The study of atoms</p>",
    "<label>Bilharzia is caused by</label> <p>A. Bacteria</p><p>B. Snails</p><p>C. Viruses</p><p>D. Parasitic flat worms</p>", 
    "<label>EHNRI carries out research into</label> <p>A. Farming</p> <p>B. Biodiversity</p> <p>C. Soil and water</p><p>D. Health and nutrition issues</p>", 
 ];
let biods = [
    "<label>Describe the use of biology?</label>",
 "<label>List three biologists that are very known of their contributions?</label>",
 "<label>What is biodiversity</label>",
 "<label>List three biological research institutions </label>",
 "<label>what is the role of EHNRI?</label>",
 "<label>What is the name of the first female professer from AAU?</label>",
 "<label>What is the use of biology for societies?</label>",
 "<label>Is biology is useful for nutrition and health?</label>"
]
 let bio2 = [];
 let bio3 = [];
 nine.style.background = "orange";
 
   

 submit.onclick = function(){
  let process = new Audio("process.mp3");
process.play();
     if (select.value == "bio" && how.value == "ten" && unit.value == "unit1") {
        if (biotf[Math.floor(Math.random() * 8 + 1)] == biotf[Math.floor(Math.random() * 8 + 1)]) {
            alert('some questions may be the same');
            
        }
       document.querySelector('.med').innerHTML = `<div class="que" id="que"><p>1 True or False</p>1${biotf[Math.floor(Math.random() * 8 + 1)]}2${biotf[Math.floor(Math.random() * 8 + 1)]}3${biotf[Math.floor(Math.random() * 8 + 1)]}4${biotf[Math.floor(Math.random() * 8 + 1)]}<p>2 choice</p>1${biocs[Math.floor(Math.random() * 3)]}2${biocs[Math.floor(Math.random() * 3)]}3${biocs[Math.floor(Math.random() * 3)]}<p>3 Answer by writing</p>1${biods[(Math.floor(Math.random() * 6))]}2${biods[(Math.floor(Math.random() * 6))]}3${biods[(Math.floor(Math.random() * 6))]}</div>`;
       document.getElementById("bts").style.display = "block";
       
     }
     if (select.value == "bio" && how.value == "ten" && unit.value == "unit2") {
         alert("hi 10");
     }
     if (select.value == "bio" && how.value == "ten" && unit.value == "unit3") {
         alert("hi 10");
     }
     if (select.value == "bio" && how.value == "five" && unit.value == "unit1") {
        if (biotf[Math.floor(Math.random() * 8 + 1)] == biotf[Math.floor(Math.random() * 8 + 1)]) {
            alert('some questions may be the same');
           
           
        }
        document.querySelector('.med').innerHTML = `<div class="que" id="que"><p>1 True or False</p>1${biotf[Math.floor(Math.random() * 8 + 1)]}2${biotf[Math.floor(Math.random() * 8 + 1)]}<p>2. Choice</p>1${biocs[Math.floor(Math.random() * 3)]}2${biocs[Math.floor(Math.random() * 3)]}<p>3. Answer by writing</p>1${biods[Math.floor(Math.random() * 6)]}</div>`;
        document.getElementById("bts").style.display = "block";
     }
     if (select.value == "bio" && how.value == "five" && unit.value == "unit2") {
         alert("hi 10");
     }
     if (select.value == "bio" && how.value == "five" && unit.value == "unit3") {
         alert("hi 10");
     }
       if (select.value == "bio" && how.value == "fifteen" && unit.value == "unit1") {
        if (biotf[Math.floor(Math.random() * 8 + 1)] == biotf[Math.floor(Math.random() * 8 + 1)]) {
            alert('some questions may be the same');
           
        }
       document.querySelector('.med').innerHTML = `<div class="que" id="que"><p>1 True or False</p>1${biotf[Math.floor(Math.random() * 8 + 1)]}2${biotf[Math.floor(Math.random() * 8 + 1)]}3${biotf[Math.floor(Math.random() * 8 + 1)]}4${biotf[Math.floor(Math.random() * 8 + 1)]}5${biotf[Math.floor(Math.random() * 8 + 1)]}6${biotf[Math.floor(Math.random() * 8 + 1)]}<p>2 choice</p>1${biocs[Math.floor(Math.random() * 3)]}2${biocs[Math.floor(Math.random() * 3)]}3${biocs[Math.floor(Math.random() * 3)]}<p>3 Answer by writing</p>1${biods[(Math.floor(Math.random() * 6))]}2${biods[(Math.floor(Math.random() * 6))]}3${biods[(Math.floor(Math.random() * 6))]}4${biods[(Math.floor(Math.random() * 6))]}5${biods[(Math.floor(Math.random() * 6))]}6${biods[(Math.floor(Math.random() * 6))]}7${biods[(Math.floor(Math.random() * 6))]}</div>`;
       document.getElementById("bts").style.display = "block";
     }
     if (select.value == "bio" && how.value == "fifteen" && unit.value == "unit2") {
         alert("hi 10");
     }
     if (select.value == "bio" && how.value == "fifteen" && unit.value == "unit3") {
         alert("hi 10");
     }
     else {
         
     }
 }
    
}
function ten(){
    let tengr = new Audio("grade10.mp3");
tengr.play();
document.getElementById("ten").style.background = "orange";
}
function h1() {
    let audio = new Audio('logo.mp3');
    audio.play();
}
function copys(){
    let aud = new Audio('copy.mp3');
aud.play();
let text = document.querySelector(".med").innerText;

document.querySelector('.med').innerHTML = `<input type="text" id="text">`


document.getElementById('text').value = text;
document.getElementById('bts').innerText = 'click to copy';
document.getElementById('bts').onclick = function(){
    document.getElementById('text').select();
    document.execCommand("copy");
    
        document.getElementById('text').style.borderColor = 'white'; 
        document.getElementById('bts').innerText = 'Successfully copied';
        let au = new Audio('ttsMP3.com_VoiceText_2023-9-9_19_50_29.mp3');
        au.play();
}


}