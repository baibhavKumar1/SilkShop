async function fetchdata(){
    try{
    let res= await fetch("./data/data.json");
    res= await res.json();
    console.log(res.data);
    display(res.data);
    }
    catch(err){
        console.log(err);
    }
}
fetchdata();

let order= JSON.parse(localStorage.getItem("buy"))||[];

let container= document.getElementById("product-container");
function display(data){
    container.innerHTML="";
    data.forEach((element)=>{
        let card= document.createElement("div");

        let name=document.createElement("p");
        name.textContent=element.details;
        name.style.fontSize= "14px";

        let img= document.createElement("img");
        img.src= element.img;

        let price=document.createElement("p");
        price.textContent=`$${element.price}`
        price.style.color= "rgb(140,0,0)";

        let buy= document.createElement("button");
        buy.textContent="Add To Cart";
        buy.style.backgroundColor="rgb(1,31,107)";
        buy.style.border="none";
        buy.style.borderRadius="10px";

        
        buy.addEventListener("click",()=>{
            console.log("Hi");
            if(duplicate(element)){
                alert("Already in cart");
            }else{
                alert("Added to cart");
                order.push({...element,quantity:1});
                localStorage.setItem("buy",JSON.stringify(order));
            }
        })
        if(element.type.includes("man")&& element.category.includes("pants")){
        card.append(img,name,price,buy);
        container.append(card);
    }
        
    })
}
    function duplicate(element){
        for(let i=0;i<order.length;i++){
            if(order[i].id===element.id){
                return true;
            }
        }return false;
    }

