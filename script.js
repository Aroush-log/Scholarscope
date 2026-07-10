const startBtn = document.getElementById("startBtn");
const matchBtn = document.getElementById("matchBtn");


startBtn.onclick = function(){

document.getElementById("formSection")
.classList.remove("hidden");

};


matchBtn.onclick = function(){

let interest=document.getElementById("interest").value;
let strength=document.getElementById("strength").value;
let goal=document.getElementById("goal").value;


let scholarships=[];


if(interest==="cs" || strength==="coding"){

scholarships.push({
name:"Technology Innovation Scholarship",
score:95,
reason:"Your technology interests and coding background match innovation-focused opportunities."
});

}


if(strength==="research"){

scholarships.push({
name:"Young Researcher Scholarship",
score:90,
reason:"Your research interest matches academic and discovery-based scholarships."
});

}


if(goal==="impact"){

scholarships.push({
name:"Social Impact Scholarship",
score:88,
reason:"Your goals align with scholarships supporting community change."
});

}


if(interest==="medicine"){

scholarships.push({
name:"Future Healthcare Leaders Award",
score:87,
reason:"Your medical interest matches healthcare-focused programs."
});

}


if(scholarships.length===0){

scholarships.push({
name:"General Achievement Scholarship",
score:75,
reason:"Continue building your academic profile to unlock more matches."
});

}



let html="";


scholarships.forEach(function(item){

html+=`

<div class="card">

<h3>${item.name}</h3>

<p class="score">${item.score}% Match</p>

<p>${item.reason}</p>

</div>

`;

});


document.getElementById("output").innerHTML=html;


document.getElementById("results")
.classList.remove("hidden");

};
