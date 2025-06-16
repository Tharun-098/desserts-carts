//increment and decrement the quantity
var image = document.body.querySelector('.cart_icon');
var img = image.getElementsByTagName("img");
var para = image.querySelector("p");
var list_cont = document.querySelector(".list");
var list = document.createElement("li");
var div1 = document.createElement("div");
var div2 = document.createElement("div");
var p1 = document.createElement("p");
var p2 = document.createElement("p");
var sp = document.createElement("span");
var sp1 = document.createElement("span");
var sp2 = document.createElement("span");
var sp3 = document.createElement("span");
var sp4 = document.createElement("span");
var sp5 = document.createElement("span");

function increment(button) {
    var inputclass = button.closest('.hover');
    var input = inputclass.firstChild.nextSibling;
    var inputvalue = input.value;
    inputvalue = parseInt(input.value);
    input.value = ++inputvalue;
    var cartinput = document.querySelector(".cart-input");
    var cartvalue = cartinput.value;
    cartvalue = parseInt(cartinput.value);
    cartinput.value = ++cartvalue;
    //get the product name and rate
    var products = inputclass.closest('.carts').nextSibling;
    var productname = products.nextSibling.nextSibling;
    var productrate = productname.nextSibling.nextSibling;
    var productrates = productrate.lastChild;
    list_cont.appendChild(list);
    list.appendChild(div1);
    list.appendChild(div2);
    div1.appendChild(p1);
    div1.appendChild(p2);
    div2.appendChild(sp);
    p2.appendChild(sp1);
    p2.appendChild(sp2);
    p2.appendChild(sp3);
    sp3.appendChild(sp4);
    sp3.appendChild(sp5);
    //hide the icon in the cart  
    if (cartvalue > 0) {
        list.style.display="flex";
        para.style.display = "none";
        img[0].style.display = "none";
        p1.innerHTML = productname.innerHTML;
        sp1.innerHTML = input.value + "x";
        sp2.innerHTML = productrate.innerHTML;
        sp4.innerHTML = "$";
        sp5.innerHTML = productrates.innerHTML * input.value;
        sp.innerHTML = "\u00d7";    
        

}
}

function decrement(button) {
    var inputclass = button.closest('.hover')
    var input = inputclass.firstChild.nextSibling;
    var inputvalue = input.value;
    inputvalue = parseInt(input.value);
    var cartinput = document.querySelector(".cart-input");
    var cartvalue = cartinput.value;
    var products = inputclass.closest('.carts').nextSibling;
    var productname = products.nextSibling.nextSibling;
    var productrate = productname.nextSibling.nextSibling;
    var productrates = productrate.lastChild;
    cartvalue = parseInt(cartinput.value);
    if (inputvalue > 0) {
        input.value = --inputvalue;
        cartinput.value = --cartvalue;
    }
    if (cartvalue === 0) {
        img[0].style.display = "block";
        img[0].style.margin = "auto";
        para.style.display = "block";
    }
    if(cartvalue>0){
        sp1.innerHTML=input.value+"x";
        sp5.innerHTML =input.value*productrates.innerHTML;
    }
    if(cartvalue===0){
        list.style.display="none";
    }
}
