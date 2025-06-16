var image = document.body.querySelector('.cart_icon');
var img = image.getElementsByTagName("img");
var para = image.querySelector("p");
var list_cont = document.querySelector(".list");
var totals = 0;
var Total = 0;
var span1 = document.createElement("span");
span1.id = "order";
var span2 = document.createElement("span");
span2.id = "val";
var span3 = document.createElement("span");
var span4 = document.createElement("span");
var l = document.createElement("li");
var button = document.createElement("button");
var dis_list = document.querySelector(".list-item");
var list_dis = document.querySelector('.list-dis');
var button1 = document.createElement("button");
var li2 = document.createElement("li");
var ds1 = document.createElement("div");
var ds2 = document.createElement("div");
var ds3 = document.createElement("span");
var ds4 = document.createElement("span");
li2.appendChild(ds1);
li2.appendChild(ds2);
ds2.appendChild(ds3);
ds2.appendChild(ds4);

function increment(inputs){
    var inputclass = document.getElementById(inputs);
    console.log(inputclass);
    var input = Number.parseInt(inputclass.value);
    var cartinput = document.querySelector(".cart-input");
    var cartvalue = cartinput.value;
    cartvalue = parseInt(cartinput.value);
    inputclass.value = ++input;
    cartinput.value = ++cartvalue;
    if (cartvalue > 0) {
        para.style.display = "none";
        img[0].style.display = "none";   
        l.style.display="block";
        button1.style.display="block";
    }
    var products = inputclass.closest('.hover').parentElement;
    var productname = products.nextSibling.nextSibling.nextSibling.nextSibling;
    console.log(productname);
    var productrate = products.parentElement.lastElementChild;
    var productrates = productrate.lastChild;
    var productListItem = document.querySelector(`#cart-item-${inputs}`);
    console.log(productListItem);
    if (!productListItem) {
        productListItem = document.createElement("li");
        productListItem.id = `cart-item-${inputs}`;
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
        productListItem.appendChild(div1);
        productListItem.appendChild(div2);
        div1.appendChild(p1);
        div1.appendChild(p2);
        div2.appendChild(sp);
        p2.appendChild(sp1);
        p2.appendChild(sp2);
        p2.appendChild(sp3);
        sp3.appendChild(sp4);
        sp3.appendChild(sp5);
        list_cont.prepend(productListItem);
        p1.innerHTML = productname.innerHTML;
        sp1.innerHTML = inputclass.value + "x";
        sp2.innerHTML = productrate.innerHTML;
        sp4.innerHTML = "$";
        totals = 0;
        totals = totals + parseFloat(productrates.innerHTML * inputclass.value);
        sp5.innerHTML = totals;
        sp.innerHTML = "\u00d7";
        console.log(totals);
        lts = document.createElement("li");
        lts.appendChild(span1);
        lts.appendChild(span2);
        span2.appendChild(span3);
        span2.appendChild(span4);
        list_cont.appendChild(lts)
        span1.innerHTML = "Order Total";
        span3.innerHTML = "$";
        console.log(Total);
        Total = Total + Number.parseFloat(productrates.innerHTML);
        span4.innerHTML = Total;
        console.log(Total);
        list_cont.appendChild(l);
        l.appendChild(button);
        button.innerHTML = "Confirm Order";
        let l2 = document.createElement("li");
        l2.id = `list-${inputs}`;
        dis_list.append(l2);
        let d1 = document.createElement("div");
        d1.className = "image";
        let d2 = document.createElement("div");
        d2.className = "tot";
        let d3 = document.createElement("div");
        d3.className = "content";
        let i = document.createElement("img");
        l2.appendChild(d1);
        l2.appendChild(d2);
        d1.appendChild(i);
        d1.appendChild(d3);
        let pl1 = document.createElement("p");
        var pl2 = document.createElement("p");
        let is = products.firstChild.nextSibling;
        console.log(is);
        i.src = is.src;
        d3.appendChild(pl1);
        d3.appendChild(pl2);
        pl1.innerHTML = productname.innerHTML;
        var s1 = document.createElement("span");
        var s2 = document.createElement("span");
        var s3 = document.createElement("span");
        var s4 = document.createElement("span");
        var s5 = document.createElement("span");
        pl2.appendChild(s1);
        pl2.appendChild(s2);
        s1.innerHTML = inputclass.value + "x";
        s2.innerHTML = productrate.innerHTML;
        d2.appendChild(s3);
        s3.appendChild(s4);
        s3.appendChild(s5);
        s4.innerHTML = "$";
        s5.innerHTML = totals;
        dis_list.append(li2);
        ds1.innerHTML = "Order total";
        li2.style.margin = "10px";
        ds3.innerHTML = "$";
        ds4.innerHTML = Total;
    }
    else {
        var quantity = productListItem.firstElementChild.lastElementChild.firstChild;
        var total = productListItem.firstElementChild.lastElementChild.lastChild.lastChild;
        quantity.innerHTML = inputclass.value + "x";
        console.log(totals);
        totals = totals + parseFloat(productrates.innerHTML);
        console.log(totals);
        total.innerHTML = totals;
        var t = document.getElementById("val").lastChild;
        console.log(t);
        console.log(Total);
        Total = Total + Number.parseFloat(productrates.innerHTML);
        console.log(Total);
        t.innerHTML = Total;
        var dis_quantity = dis_list.lastChild.previousSibling.firstChild.lastChild.lastChild.firstChild;
        console.log(dis_quantity);
        dis_quantity.innerHTML = inputclass.value + "x";
        dis_rate = dis_list.lastChild.previousSibling.lastChild.lastChild.lastChild;
        console.log(dis_rate);
        dis_rate.innerHTML = totals;
        var dis = dis_list.lastChild.lastChild.lastChild;
        dis.innerHTML = Total;
    }
    var list_item = document.getElementById(`list-${inputs}`);
    var imgs = products.firstElementChild;
    if (inputclass.value > 0) {
        imgs.style.border = "1px orange solid";
        list_item.style.display="flex";
        productListItem.style.display="flex";
    }
    var border = list_cont.lastChild.previousSibling;
    border.style = "border-bottom:none";
    list_dis.appendChild(button1);
    button1.innerHTML = "Start new order";
    var lastss=dis_list.lastChild;
    console.log(lastss);
    if(cartvalue>0){
        lastss.style.display="flex";
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
    var c = document.getElementById(`cart-item-${inputs}`);
    var l = list_cont.lastChild;
    var l1 = list_cont.lastChild.previousSibling;
    console.log(Total);
    Total = Total- productrates.innerHTML;
    console.log(Total);
    if (input > 0) {
        inputclass.value = --input;
        cartinput.value = --cartvalue;
    }
    if (cartvalue === 0) {
        img[0].style.display = "block";
        img[0].style.margin = "auto";
        para.style.display = "block";
        l.style.display = "none";
        l1.style.display = "none";
    }
    if (input>0) {
        var count = c.firstElementChild.lastChild.firstChild;
        var rate = c.firstElementChild.lastElementChild.lastChild.lastChild;
        totals = (input+1) * productrates.innerHTML;
        console.log(totals);
        totals = totals - productrates.innerHTML;
        rate.innerHTML = totals;
        console.log(totals);
        console.log(rate);
        count.innerHTML = inputclass.value + "x";
        console.log(Total);
    }
    var i = document.getElementById("val").lastChild;
    i.innerHTML=Total;
    var list_item = document.getElementById(`list-${inputs}`);
        var list_quantity = list_item.firstChild.lastChild.lastChild.firstChild;
        console.log(list_quantity);
        list_quantity.innerHTML = inputclass.value + "x";
        var list_rate = list_item.lastChild.lastChild.lastChild;
        list_rate.innerHTML = totals;
   var cart1=dis_list.lastChild.lastChild.lastChild;
   cart1.innerHTML=Total;
   if (input === 0) {
    imgs.style.border = "none";
    c.style.display = "none";
    list_item.style.display="none";
}
var lastsss=dis_list.lastChild;
    console.log(lastsss);
    if (cartvalue==0) {
      button1.style.display="none";
      lastsss.style.display="none" ;
 }
}
let dis=function(e){
    list_dis.style.display="block";
}
button.addEventListener('click',dis);
let s=function(e){
    Total=0;
    totals=0;
    list_dis.style.display="none";
    list_cont.innerHTML=" ";
    var d=document.body.querySelector('.cart-input');
    d.value=0;
    var d1=parseInt(d.value);
    if (d1 === 0) {
        img[0].style.display = "block";
        img[0].style.margin = "auto";
        para.style.display = "block";
    }
    var arr=['input1','input2','input3','input4','input5','input6','input7','input8','input9'];
    arr.forEach((element,index)=>{
          let a=document.getElementById(element);
          a.value=0;
          let a1=parseInt(a.value);
          let imgs1=a.closest('.hover').parentElement.firstElementChild;
          console.log(imgs1);
                    if (a1===0) {
            imgs1.style.border = "none";
          }
    });
}
button1.addEventListener('click',s);