

async function searchitem(){
    var displayy=document.getElementById("displayy")
    // let scrol=document.getElementById("chose-color")
    displayy.innerHTML=""
let value=document.getElementById("inp").value
// console.log(value)
try {
    let res=await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${value}`)
    let data=await res.json()
    // console.log(data)
    displayitem(data)
} catch (eror) {
    console.log("error")
}

}
var displayy=document.getElementById("displayy")

 async function displayitem(data){
    //  data=JSON.parse(data)
    // data.forEach((e,ind)=> {
        
        for(e=0;e<data.length;e++){
          
        if(e==50){
        break;
                }

        let productcad=document.createElement("div")
        productcad.setAttribute("id","productcad")
        let img=document.createElement("img")
    let prduct_details=data[e].product_api_url
    // console.log(prduct_details)
        img.onclick=function(){
            showindetails(prduct_details)
        }
        img.src=data[e].image_link
        img.alt=""
    
        
let colordiv=document.createElement("div")
colordiv.setAttribute("id","colorcont")
let scrol=document.createElement("div")
scrol.setAttribute("id","outer")
let right=document.createElement("button")
let left=document.createElement("button")

// let left=document.getElementById("left")
right.textContent="<"
left.textContent=">"
right.setAttribute("class","btn")
right.setAttribute("id","btn1")
left.setAttribute("class","btn")
left.setAttribute("id","btn2")
let colordata=data[e].product_colors;
// console.log(colordata)
// colordiv.append(right)
colordata.forEach(e => {
    let color_dis=document.createElement("div")
   color_dis.setAttribute('id',"color_dis")
    // color_dis.style.backgroundColor=e.colordata;
    let a=document.createElement("a")
    a.style.background=e.hex_value
    a.setAttribute("id","a_color")
    // colordiv.append(color_dis)
    color_dis.append(a)
    // console.log(e)
// scrol.append(rightcolor_dis,left)
colordiv.append(color_dis)
scrol.append(colordiv)
});

let scrool_btn=document.createElement("div")
scrool_btn.setAttribute("id","scrool_btn")
scrool_btn.append(scrol)

// colordiv.append(left)
// scrol.append(right,colordiv,left)
       let title=document.createElement("h3")
       title.textContent=data[e].name
       let rating=document.createElement("h3")
       let rating_null=data[e].rating
       if(rating_null==null){
        let max=3
        let min=5
        function getRandomArbitrary(min, max) {
            rating_null=Math.floor( Math.random() * (max - min) + min)+".0";
        }
        getRandomArbitrary(min, max)
        // console.log(price_val)
    }
       rating.textContent="Rating:-"+rating_null+"/5"
       let price=document.createElement("p")
       let price_val=data[e].price
       if(price_val=="0.0" || price_val==null){
           let max=9
           let min=20
           function getRandomArbitrary(min, max) {
            price_val=Math.floor( Math.random() * (max - min) + min)+".0";
          }
          getRandomArbitrary(min, max)
        // console.log(price_val)
       }

       price.textContent="$"+price_val
       let cart_btn=document.createElement("button")
       cart_btn.textContent="ADD TO BAG"
       cart_btn.onclick=function(){
        addtocart(e)
    }

       cart_btn.setAttribute("id","cart_btn")
       productcad.append(img,scrool_btn,title,rating,price,cart_btn)

       displayy.append(productcad)
       


    }
    // var colordiv_scrool=document.getElementById("outer")
// console.log(colordiv_scrool)
}
function  addtocart(e){
    console.log("deepak")
}
function showindetails(prduct_details){
    // console.log(prduct_details)
    localStorage.setItem("product_details",JSON.stringify(prduct_details))
location.href="../details/details.html"
}