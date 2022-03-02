let arr = ["../bobbiebrown/carousal1.png","../bobbiebrown/carousal2.png","../bobbiebrown/carousal3.png"]

let img = document.getElementById("img")

let i = 0 

setInterval(() =>{
    img.src=arr[i]
    i++
    if(i==arr.length){
        i=0
    }
},2000)
