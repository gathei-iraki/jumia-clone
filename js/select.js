var laptopOne={
    laptop: "images/hp15.png",
    title: "HP 15",
    price: 50000,
    originalPrice: 55000,
    itemId: "L001"
}

var laptopTwo={
    laptop: "images/hp15s.png",
    title: "HP 15S",
    price: 60000,
    originalPrice: 65000,
    itemId: "L002"
}

var laptopThree={
    laptop: "images/hp250.png",
    title: "HP 250",
    price: 40000,
    originalPrice: 50000,
    itemId: "L003"
}

var laptopFour={
    laptop: "images/hpmaldives20c2.png",
    title: "HP MALDIVES 20C2",
    price: 70000,
    originalPrice: 75000,
    itemId: "L004"
}

var laptopFive={
    laptop: "images/hppavilion.png",
    title: "HP PAVILION",
    price: 80000,
    originalPrice: 85000,
    itemId: "L005"
}

var laptopSix={
    laptop: "images/hpspectre.png",
    title: "HP SPECTRE",
    price: 30000,
    originalPrice: 45000,
    itemId: "L006"
}


var selectId= decodeURIComponent(window.location.search)
var selectedItem=selectId.substring(1)
console.log(selectedItem)


if(selectedItem==laptopOne.itemId){
    document.getElementById("laptop").src=laptopOne.laptop
    document.getElementById("name").innerText=laptopOne.title
    document.getElementById("price").innerText=laptopOne.price
    document.getElementById("original").innerText=laptopOne.originalPrice

    let cost=laptopOne.price;
    qty(cost);
}

else if(selectedItem==laptopTwo.itemId){
    document.getElementById("laptop").src=laptopTwo.laptop
    document.getElementById("name").innerText=laptopTwo.title
    document.getElementById("price").innerText=laptopTwo.price
    document.getElementById("original").innerText=laptopTwo.originalPrice

    let cost=laptopTwo.price;
    qty(cost);
}

else if(selectedItem==laptopThree.itemId){
    document.getElementById("laptop").src=laptopThree.laptop
    document.getElementById("name").innerText=laptopThree.title
    document.getElementById("price").innerText=laptopThree.price
    document.getElementById("original").innerText=laptopThree.originalPrice
    
    let cost=laptopThree.price;
    qty(cost);
}

else if(selectedItem==laptopFour.itemId){
    document.getElementById("laptop").src=laptopFour.laptop
    document.getElementById("name").innerText=laptopFour.title
    document.getElementById("price").innerText=laptopFour.price
    document.getElementById("original").innerText=laptopFour.originalPrice
    
    let cost=laptopFour.price;
    qty(cost);
}

else if(selectedItem==laptopFive.itemId){
    document.getElementById("laptop").src=laptopFive.laptop
    document.getElementById("name").innerText=laptopFive.title
    document.getElementById("price").innerText=laptopFive.price
    document.getElementById("original").innerText=laptopFive.originalPrice
    
    let cost=laptopFive.price;
    qty(cost);
}

else{
    document.getElementById("laptop").src=laptopSix.laptop
    document.getElementById("name").innerText=laptopSix.title
    document.getElementById("price").innerText=laptopSix.price
    document.getElementById("original").innerText=laptopSix.originalPrice
    
    let cost=laptopSix.price;
    qty(cost);
}

function qty(cost){
    document.getElementById("quantity").onkeyup=function(){
        let amount = cost;
        let quantity = document.getElementById("quantity").value;
        if(quantity>1){
            let total= quantity*amount;
            document.getElementById("total").innerText=`Total cash:${total}`;
            userLocation(total);
        }
        else if(quantity==1){
            let total=amount;
            document.getElementById("total").innerText=`Total cash:${total}`;
            userLocation(total);
        }
        else{
            document.getElementById("total").innerText=`Please enter a valid quantity!!!`;

        }
    }
}

function userLocation(total){

    document.getElementById("location").onchange=function(){
        let Nairobi=500;
        let Kisumu=1100;
        let Mombasa=800;
        let delivery=document.getElementById("location").value
        if(delivery=="Nairobi"){

            document.getElementById("total").innerText=`Total cash: ${total + Nairobi}`
        }

        else if(delivery=="Kisumu"){
            document.getElementById("total").innerText=`Total cash: ${total + Kisumu}`

    }
    else if(delivery=="Mombasa"){
        document.getElementById("total").innerText=`Total cash: ${total + Mombasa}`
    }

    else if(delivery==""){
        document.getElementById("total").innerText=`Total cash: ${total}`
    }

}

}