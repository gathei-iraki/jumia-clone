var laptopOne={
    laptop: "images/hp15.png",
    title: "HP 15",
    price: 50000,
    originalPrice: 55000,
    itemId: "L001"
}
document.getElementById("hp15").src = laptopOne.laptop;
document.getElementById("name1").innerText =laptopOne.title;
document.getElementById("priceOne").innerText =laptopOne.price;
document.getElementById("originalOne").innerHTML = `<s>${laptopOne.originalPrice}</s>`;

var laptopTwo={
    laptop: "images/hp15s.png",
    title: "HP 15S",
    price: 60000,
    originalPrice: 65000,
    itemId: "L002"
}
document.getElementById("hp15s").src = laptopTwo.laptop;
document.getElementById("name2").innerText =laptopTwo.title;
document.getElementById("priceTwo").innerText =laptopTwo.price;
document.getElementById("originalTwo").innerHTML = `<s>${laptopTwo.originalPrice}</s>`;

var laptopThree={
    laptop: "images/hp250.png",
    title: "HP 250",
    price: 40000,
    originalPrice: 50000,
    itemId: "L003"
}
document.getElementById("hp250").src = laptopThree.laptop;
document.getElementById("name3").innerText =laptopThree.title;
document.getElementById("priceThree").innerText =laptopThree.price;
document.getElementById("originalThree").innerHTML = `<s>${laptopThree.originalPrice}</s>`;

var laptopFour={
    laptop: "images/hpmaldives20c2.png",
    title: "HP MALDIVES 20C2",
    price: 70000,
    originalPrice: 75000,
    itemId: "L004"
}
document.getElementById("hpmaldives").src = laptopFour.laptop;
document.getElementById("name4").innerText =laptopFour.title;
document.getElementById("priceFour").innerText =laptopFour.price;
document.getElementById("originalFour").innerHTML = `<s>${laptopFour.originalPrice}</s>`;




var laptopFive={
    laptop: "images/hppavilion.png",
    title: "HP PAVILION",
    price: 80000,
    originalPrice: 85000,
    itemId: "L005"
}
document.getElementById("hppavilion").src = laptopFive.laptop;
document.getElementById("name5").innerText =laptopFive.title;
document.getElementById("priceFive").innerText =laptopFive.price;
document.getElementById("originalFive").innerHTML = `<s>${laptopFive.originalPrice}</s>`;


var laptopSix={
    laptop: "images/hpspectre.png",
    title: "HP SPECTRE",
    price: 30000,
    originalPrice: 45000,
    itemId: "L006"
}
document.getElementById("hpspectre").src = laptopSix.laptop;
document.getElementById("name6").innerText =laptopSix.title;
document.getElementById("priceSix").innerText =laptopSix.price;
document.getElementById("originalSix").innerHTML = `<s>${laptopSix.originalPrice}</s>`;




document.querySelector(".laptopOne").onclick=function(){

    window.location.href=`select.html?${laptopOne.itemId}`
}

document.querySelector(".laptopTwo").onclick=function(){

    window.location.href=`select.html?${laptopTwo.itemId}`
}

document.querySelector(".laptopThree").onclick=function(){

    window.location.href=`select.html?${laptopThree.itemId}`
}

document.querySelector(".laptopFour").onclick=function(){

    window.location.href=`select.html?${laptopFour.itemId}`
}

document.querySelector(".laptopFive").onclick=function(){

    window.location.href=`select.html?${laptopFive.itemId}`
}

document.querySelector(".laptopSix").onclick=function(){

    window.location.href=`select.html?${laptopSix.itemId}`
}