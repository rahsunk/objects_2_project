let main=document.getElementById('main')

let morbius={
    name:"Morbius",
    year:2022,
    img:"morbius",
    genre: "Superhero",
    rate:1000,
    special:function(){
        let newTxt=document.createElement('h1')
        newTxt.innerHTML="IT'S MORBIN' TIME!"
        document.body.style.backgroundColor="lightblue"
        return newTxt
    },
}

let minions={
    name:"Minions: The Rise of Gru",
    year:2022,
    img:"minions",
    genre:"Family",
    rate:"1,000,000",
    special:function(){
        let newPic=document.createElement('img')
        newPic.src="assets/suits.jpg"
        document.body.style.backgroundColor="yellow"
        return newPic
    }
}

let nwh={
    name:"Spider-Man: No Way Home",
    year:2021,
    img:"nwh",
    genre:"Superhero",
    rate:"9",
    special:function(){
        let newSfx=document.createElement('audio')
        newSfx.src="assets/laugh.mp3"
        document.body.style.backgroundColor="orangered"
        newSfx.play()
        
    }
}

let batman={
    name:"The Batman",
    year:2022,
    img:"batman",
    genre:"Superhero",
    rate:"7",
    special:function(){
        let newTxt=document.createElement('p')
        newTxt.innerHTML="Kinda mid tbh"
        document.body.style.backgroundColor="gray"
        return newTxt
    }
}

let movieArr=[morbius,minions,nwh,batman]

for(let i=0;i<movieArr.length;i++){
    let newDiv=document.createElement("div")

    let newh1=document.createElement('h1')
    newh1.innerHTML=movieArr[i].name

    let newYr=document.createElement('p')
    newYr.innerHTML="Released: "+movieArr[i].year

    let newImg=document.createElement('img')
    newImg.src="assets/"+movieArr[i].img+".jpg"

    let newGen=document.createElement('p')
    newGen.innerHTML="Genre: "+movieArr[i].genre

    let newRate=document.createElement('h3')
    newRate.innerHTML="Rating: "+movieArr[i].rate+" out of 10"

    let newSpecial=document.createElement('button')
    newSpecial.innerHTML="Click me for a surprise!"

    newDiv.append(newh1,newYr,newImg,newGen,newRate,newSpecial)
    
    newSpecial.onclick=function(){
        movieArr[i].special()
        if(i!=2){
            newDiv.append(movieArr[i].special())
        }
    }

    main.appendChild(newDiv)
}