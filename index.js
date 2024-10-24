let products = {
    data:[
        {
            productName : "Regular White Tshirt",
            category : "Topwear",
            price :"30",
            Image:"./images/img1.jpg"
        },
        {
            productName : "Cargos",
            category : "Bottomwear",
            price :"49",
            Image:"./images/img2.jfif"
        },
        {
            productName : "sporty smart watch",
            category : "Watch",
            price :"99",
            Image:"./images/img3.webp"
        },
        {
            productName : " Men vest",
            category : "Topwear",
            price :"40",
            Image:"./images/img4.webp"
        },
        {
            productName : "Black Leather Jacket",
            category : "Jacket",
            price :"129",
            Image:"./images/img5.avif"
        },
        {
            productName : "Stylish Trousers",
            category : "Bottomwear",
            price :"30",
            Image:"./images/img6.webp"
        },
        {
            productName : "Brown Mens Jacket",
            category : "Jacket",
            price :"357",
            Image:"./images/img7.avif"
        },
        {
            productName : "Comfy Gray pants",
            category : "Bottomwear",
            price :"30",
            Image:"./images/img8.jfif"
        },
    ]
} 
for (let i of products.data){
    //create card
    let card = document.createElement("div")
    //card should have category
    card.classList.add("card",  i.category, "hide")
    //image div
    let imageContainer = document.createElement("div")
    imageContainer.classList.add("image-container");
    let image = document.createElement("img")
    image.setAttribute("src",i.Image )
    imageContainer.appendChild(image)
    card.appendChild(imageContainer)

    //container
    let container = document.createElement("div")
    container.classList.add("container")
    

    let name = document.createElement("h4")
    name.classList.add("product-name")
    name.innerText =i.productName.toUpperCase()
    container.appendChild(name)

     let price = document.createElement("h5")
     price.innerText =  "$" + i.price
     container.appendChild(price)
     card.appendChild(container)

    document.getElementById("products").appendChild(card)
    
}

// parameter passed from button (parameter same as category)

function filterProduct(value) {
     let buttons = document.querySelectorAll(".button-value")
     buttons.forEach( button =>{
        //check if value equals innerText
        if(value.toUpperCase()== button.innerText.toUpperCase()){
            button.classList.add("active")
        }
        else{
            button.classList.remove("active")
        }

     })
    //select all cards 
     let elements = document.querySelectorAll(".card")
     //loop through all cards
     elements.forEach (element => {
        //display all cards on all button click
        if(value==="all"){
            element.classList.remove("hide")
        }
        else{
            //check if element containes category class
            if(element.classList.contains(value)){
                element.classList.remove("hide")
            }
            else{
                element.classList.add("hide")
            }
        }
        
     })
 
}
  //search button click
document.getElementById("search").addEventListener("click", ()=>{
let searchInput =document.getElementById("search-input").value
let elements = document.querySelectorAll(".product-name")
let cards = document.querySelectorAll(".card")
// loop through all elements
elements.forEach((element, index) =>{
    //check if text includes search value
     if(element.innerText.includes(searchInput.toUpperCase())){
        //display matching card
        cards[index].classList.remove("hide")
     }
     else{
        cards[index].classList.add("hide")
     }
})
})




window.onload =() =>{
    filterProduct("all")
}