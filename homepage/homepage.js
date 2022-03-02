let arr = ["../bobbiebrown/carousal1.png","../bobbiebrown/carousal2.png","../bobbiebrown/carousal3.png"]

let img = document.getElementById("img")
let suggetions = document.getElementById("suggetions")
let left = document.getElementById("left")
let right = document.getElementById("right")

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

let url = "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner"

async function items(){
    try {
       let data = await fetch(url)
       data = await data.json()
       console.log(data) 
       data.map((element) =>(create(element)))
    } catch (error) {
        
    }
}
items()


function create(data){
    let div= document.createElement("div")
    let img = document.createElement("img")
    img.src = data.image_link
    let h4 = document.createElement("h4")
    h4.innerText = data.name
    let h5 = document.createElement("h5")
    h5.innerText = data.price
    let p = document.createElement("p")
    let button = document.createElement("button")
    button.innerText = "ADD TO BAG"
    div.append(img,h4,h5,p,button)
    suggetions.append(div)
}