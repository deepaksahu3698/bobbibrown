let arr = ["../bobbiebrown/carousal1.png","../bobbiebrown/carousal2.png","../bobbiebrown/carousal3.png"]
// import prodata from "./homepagedata.js"
let img = document.getElementById("img")
let suggetions = document.getElementById("suggetions")                    
let left = document.getElementById("left")
let right = document.getElementById("right")
let pro_slide = document.getElementById("pro_slide")
let gallery = document.getElementById("gallery")

let makeupSlide = localStorage.getItem("makeupSlide")
let url = "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner"


console.log(makeupSlide)
if(makeupSlide == null){
    items()
}else{
    JSON.parse(makeupSlide).map((elem)=>create(elem))
}


setInterval(() => {
    if(pro_slide.scrollLeft>=2200){
        pro_slide.scrollLeft=0
    }else{
        pro_slide.scrollLeft+=470
    }
}, 5000);

setInterval(() => {
    if(gallery.scrollLeft>=2000){
        gallery.scrollLeft=0
    }else{
        gallery.scrollLeft+=350
    }
}, 5000);


// hamburger.onclick = function(){
//     console.log("hiii")
// }
right.onclick =function(){
    suggetions.scrollLeft+=300
}

left.onclick =function(){
    suggetions.scrollLeft-=300
}

let i = 0 

setInterval(() =>{
    img.src=arr[i]
    i++
    if(i==arr.length){
        i=0
    }
},4000)


async function items(){
    try {
       let data = await fetch(url)
       data = await data.json()
       console.log(data) 
       localStorage.setItem("makeupSlide", JSON.stringify(data))
       data.map((element) =>(create(element)))
    } catch (error) {
        
    }
}



function create(data){
    let div= document.createElement("div")
    let img = document.createElement("img")
    img.src = data.image_link
    let h4 = document.createElement("h4")
    h4.innerText = data.name
    let h5 = document.createElement("h5")
    if(data.price ==0){
        h5.innerText =( Math.random(1,10)*100).toFixed(2)+" $"
    }else{
        h5.innerText = data.price
    }
    let p = document.createElement("p")
    p.innerText=data.brand
    let p2 = document.createElement("div")
    p2.innerHTML =`<i class="fa-solid fa-star-sharp"></i>`
    let button = document.createElement("button")
    button.innerText = "ADD TO BAG"
    div.append(img,h4,p,p2,h5,button)
    suggetions.append(div)
}


