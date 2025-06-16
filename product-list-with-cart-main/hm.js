var image = document.body.querySelector('.cart_icon'); 
var img = image.getElementsByTagName("img");
var para = image.querySelector("p");
var list_cont = document.querySelector(".list");

function increment(inputs) {
    var inputclass = document.getElementById(inputs);
    var input = Number.parseInt(inputclass.value);
    var cartinput = document.querySelector(".cart-input");
    var cartvalue = cartinput.value;
    cartvalue = parseInt(cartinput.value);
    inputclass.value = ++input; 
    cartinput.value = ++cartvalue;
    var products = inputclass.closest('.hover').parentElement;
    var productname = products.nextSibling.nextSibling.nextSibling;
    var productrate = products.parentElement.lastElementChild;
    var productrates = productrate.lastChild;
    
    // Create product list item
    var productListItem = document.querySelector(`#cart-item-${inputs}`);
    console.log(productListItem);
    if (!productListItem) {
        // If product is not already in the cart, create a new item
    
        
        var div1 = document.createElement("div");
        var div2 = document.createElement("div");
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        var sp1 = document.createElement("span");
        var sp2 = document.createElement("span");
        var sp3 = document.createElement("span");
        
        p1.innerHTML = productname.innerHTML;
        sp1.innerHTML = inputclass.value + "x";
        sp2.innerHTML = productrate.innerHTML;
        sp3.innerHTML = "$" + (inputclass.value * parseFloat(productrates.innerHTML)).toFixed(2);

        p2.appendChild(sp1);
        p2.appendChild(sp2);
        p2.appendChild(sp3);
        
        div1.appendChild(p1);
        div2.appendChild(p2);
        productListItem.appendChild(div1);
        productListItem.appendChild(div2);
        
        list_cont.appendChild(productListItem);
    } else {
        // Update the quantity and total for existing item in the cart
        var quantity = productListItem.querySelector("span");
        var total = productListItem.querySelector("span:last-child");
        quantity.innerHTML = inputclass.value + "x";
        total.innerHTML = "$" + (inputclass.value * parseFloat(productrates.innerHTML)).toFixed(2);
    }

    if (cartvalue > 0) {
        para.style.display = "none";
        img[0].style.display = "none";
    }
    var imgs = products.firstElementChild;
    if (inputclass.value > 0) {
        imgs.style.border = "1px orange solid";
    }
}

function decrement(inputs) {
    var inputclass = document.getElementById(inputs);
    var input = Number.parseInt(inputclass.value);
    var cartinput = document.querySelector(".cart-input");
    var cartvalue = cartinput.value;
    cartvalue = parseInt(cartinput.value);
    var products = inputclass.closest('.hover').parentElement;
    var productname = products.nextSibling.nextSibling.nextSibling;
    var productrate = products.parentElement.lastElementChild;
    var productrates = productrate.lastChild;
    var imgs = products.firstElementChild;
    
    if (input > 0) {
        inputclass.value = --input;
        cartinput.value = --cartvalue;
    }
    
    var productListItem = document.querySelector(`#cart-item-${inputs}`);
    if (input === 0) {
        imgs.style.border = "none";
        // Remove product from the cart if quantity is 0
        if (productListItem) {
            list_cont.removeChild(productListItem);
        }
    }
    
    if (cartvalue === 0) {
        img[0].style.display = "block";
        img[0].style.margin = "auto";
        para.style.display = "block";
    }
    
    if (cartvalue > 0 && productListItem) {
        var quantity = productListItem.querySelector("span");
        var total = productListItem.querySelector("span:last-child");
        quantity.innerHTML = inputclass.value + "x";
        total.innerHTML = "$" + (inputclass.value * parseFloat(productrates.innerHTML)).toFixed(2);
    }
}
