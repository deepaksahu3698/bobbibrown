let url=JSON.parse(localStorage.getItem("product_details"))
// console.log(url)
getdata()
async function getdata(){
try {
    let res=await fetch(url)
    let data=await res.json()
    // console.log(data)
    displayitem(data)
} catch (error) {
    console.log(error)
}
}
async function displayitem(data){
    // console.log(data)
    // .forEach(element => {

        
    // });
    let img=document.getElementById("img_src")
    img.src=data.image_link
    let name=document.getElementById('name')
    name.textContent=data.name
    let brand=document.getElementById("brand")
    brand.textContent=data.brand
    let dec=document.getElementById("dec")
    dec.textContent=data.description
    let price=document.getElementById("price")
    let price_val=data.price
    if(price_val=="0.0" || price_val==null){
        let max=9
        let min=20
        function getRandomArbitrary(min, max) {
         price_val=Math.floor( Math.random() * (max - min) + min)+".0";
       }
       getRandomArbitrary(min, max)
     // console.log(price_val)
    }
    price.textContent="Price:-"+"$"+price_val
let rating_null=data.rating
       if(rating_null==null){
        let max=3
        let min=5
        function getRandomArbitrary(min, max) {
            rating_null=Math.floor( Math.random() * (max - min) + min)+".0";
        }

        getRandomArbitrary(min, max)
        // console.log(price_val)
    }
let colordata=data.product_colors
// console.log(colordata)
if(colordata.length>0){
    let coloer_item=document.createElement("div")
    coloer_item.setAttribute("id","color_item")
    for(var i=0;i<colordata.length;i++){
        var color_show=document.createElement("div")
        color_show.setAttribute("id","color_show")
        color_show.style.backgroundColor=colordata[i].hex_value
    //  coloer_item=document.getElementById("color_item")
     coloer_item.append(color_show)

    }
    let targett=document.getElementById("hr")
targett.before(coloer_item)    
}

    let reatin=document.getElementById("rating")
    reatin.textContent="Rating:-"+rating_null+" OUT OF 5"
}

getdataforshow()
async function getdataforshow()
{
    try {
     let res =await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json`)
     let dis_data=await res.json()
     showitem(dis_data)


} catch (error) {
    console.log(error)

}

}
async function showitem(dis_data){

// console.log(dis_data)
for(e=0;e<dis_data.length;e++){
    if(e==150){
        break;
    }
    let dis_item=document.getElementById("showitem")
    let productcad=document.createElement("div")
    productcad.setAttribute("id","productcad")
    let img=document.createElement("img")
    img.src=dis_data[e].image_link
    let prduct_details=dis_data[e].product_api_url
    img.onclick=function(){
        showindetails(prduct_details)
    }
    let title=document.createElement("h3")
       title.textContent=dis_data[e].name
       let price=document.createElement("p")
       let price_val=dis_data[e].price
       if(price_val=="0.0" || price_val==null){
           let max=9
           let min=20
           function getRandomArbitrary(min, max) {
            price_val=Math.floor( Math.random() * (max - min) + min)+".0";
          }
          getRandomArbitrary(min, max)
        // console.log(price_val)
       }

       price.textContent="Price:-"+"$"+price_val

       price.textContent="$"+price_val
       let cart_btn=document.createElement("button")
       cart_btn.setAttribute("id","cart_btn")
       cart_btn.textContent="ADD TO BAG"
       cart_btn.onclick=function(){
        addtocart(e)
    }
    productcad.append(img ,title,price,cart_btn)

    dis_item.append(productcad)
    var showitem=document.getElementById("showitem")
    setInterval(function(){
        showitem.scrollLeft+=360
    },5000)
}

}
function  showindetails(prduct_details){
    localStorage.setItem("product_details",JSON.stringify(prduct_details))
    location.href="../details/details.html"
}