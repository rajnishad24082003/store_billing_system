let inputbox = document.getElementById("bar");
let subbot = document.getElementById("subbot");
let modalthin = document.querySelector(".alert");
modalthin.style.display="none";
let totalprice = document.querySelector(".finalans") ;
let products = {
    cokebottle : {
    "barcode":4890008100231,
    "name":"coke 1l bottle",
    "price":61.75
    },
    kitkat : {
    "barcode":5890478100692,
    "name":"kitkat",
    "price":40
    },
    cokecan : {
    "barcode":4890008100309,
    "name":"coke 355ml can",
    "price":35
    },
    bourbon : {
    "barcode":5329840819339,
    "name":"bourbon",
    "price":50
    },
    ketchup : {
    "barcode":9169840811600,
    "name":"kissan ketchup",
    "price":127.11
    },
    dettol : {
    "barcode":6319840001663,
    "name":"dettol antiseptic",
    "price":199
    },
    oreo : {
    "barcode":5529840008003,
    "name":"orea family pack",
    "price":75.70
    },
    dettolsoap : {
    "barcode":6319840001512,
    "name":"dettol soapX4",
    "price":158.49
    },
    tea : {
    "barcode":7740840011012,
    "name":"tata tea gold",
    "price":566.50
    },
};
let sum = 0;
subbot.onclick = function barcodetaker(){
    let newli = document.createElement("li");
    let bigdiv = document.createElement("div");
    bigdiv.classList.add("row");
    bigdiv.classList.add("border");
    bigdiv.classList.add("border-primary");
    bigdiv.classList.add("p-2");
    bigdiv.classList.add("mb-2");
    bigdiv.classList.add("border-opacity-75");
    let r = parseInt(inputbox.value);
    //1
    if(products.cokebottle.barcode == r )
    {
    let smalldiv1 = document.createElement("div");
    smalldiv1.classList.add("col");
    smalldiv1.innerText = products.cokebottle.name;
    let smalldiv2 = document.createElement("div");
    smalldiv2.classList.add("col");
    smalldiv2.innerText = 1;
    let smalldiv3 = document.createElement("div");
    smalldiv3.classList.add("col");
    sum= products.cokebottle.price+sum;
    smalldiv3.innerText = products.cokebottle.price;
    let mainol = document.querySelector(".mainol");
bigdiv.appendChild(smalldiv1);
bigdiv.appendChild(smalldiv2);
bigdiv.appendChild(smalldiv3);
newli.appendChild(bigdiv);
mainol.appendChild(newli);
    }
    //2
    else if(products.kitkat.barcode == r)
    {
    let smalldiv1 = document.createElement("div");
    smalldiv1.classList.add("col");
    smalldiv1.innerText = products.kitkat.name;
    let smalldiv2 = document.createElement("div");
    smalldiv2.classList.add("col");
    smalldiv2.innerText = 1;
    let smalldiv3 = document.createElement("div");
    smalldiv3.classList.add("col");
    sum= products.kitkat.price+sum;
    smalldiv3.innerText = products.kitkat.price;
    let mainol = document.querySelector(".mainol");
bigdiv.appendChild(smalldiv1);
bigdiv.appendChild(smalldiv2);
bigdiv.appendChild(smalldiv3);
newli.appendChild(bigdiv);
mainol.appendChild(newli);
    }
    //3
    else if(products.cokecan.barcode == r)
    {
    let smalldiv1 = document.createElement("div");
    smalldiv1.classList.add("col");
    smalldiv1.innerText = products.cokecan.name;
    let smalldiv2 = document.createElement("div");
    smalldiv2.classList.add("col");
    smalldiv2.innerText = 1;
    let smalldiv3 = document.createElement("div");
    smalldiv3.classList.add("col");
    sum= products.cokecan.price+sum;
    smalldiv3.innerText = products.cokecan.price;
    let mainol = document.querySelector(".mainol");
bigdiv.appendChild(smalldiv1);
bigdiv.appendChild(smalldiv2);
bigdiv.appendChild(smalldiv3);
newli.appendChild(bigdiv);
mainol.appendChild(newli);
    }
    //4
    else if(products.bourbon.barcode == r)
    {
    let smalldiv1 = document.createElement("div");
    smalldiv1.classList.add("col");
    smalldiv1.innerText = products.bourbon.name;
    let smalldiv2 = document.createElement("div");
    smalldiv2.classList.add("col");
    smalldiv2.innerText = 1;
    let smalldiv3 = document.createElement("div");
    smalldiv3.classList.add("col");
    sum= products.kitkat.price+sum;
    sum= products.bourbon.price+sum;
    smalldiv3.innerText = products.bourbon.price;
    let mainol = document.querySelector(".mainol");
bigdiv.appendChild(smalldiv1);
bigdiv.appendChild(smalldiv2);
bigdiv.appendChild(smalldiv3);
newli.appendChild(bigdiv);
mainol.appendChild(newli);
    }
    //5
    else if(products.ketchup.barcode == r)
    {
    let smalldiv1 = document.createElement("div");
    smalldiv1.classList.add("col");
    smalldiv1.innerText = products.ketchup.name;
    let smalldiv2 = document.createElement("div");
    smalldiv2.classList.add("col");
    smalldiv2.innerText = 1;
    let smalldiv3 = document.createElement("div");
    smalldiv3.classList.add("col");
    sum= products.ketchup.price+sum;
    smalldiv3.innerText = products.ketchup.price;
    let mainol = document.querySelector(".mainol");
bigdiv.appendChild(smalldiv1);
bigdiv.appendChild(smalldiv2);
bigdiv.appendChild(smalldiv3);
newli.appendChild(bigdiv);
mainol.appendChild(newli);
    }
    //6
    else if(products.dettol.barcode == r)
    {
    let smalldiv1 = document.createElement("div");
    smalldiv1.classList.add("col");
    smalldiv1.innerText = products.dettol.name;
    let smalldiv2 = document.createElement("div");
    smalldiv2.classList.add("col");
    smalldiv2.innerText = 1;
    let smalldiv3 = document.createElement("div");
    smalldiv3.classList.add("col");
    sum= products.dettol.price+sum;
    smalldiv3.innerText = products.dettol.price;
    let mainol = document.querySelector(".mainol");
bigdiv.appendChild(smalldiv1);
bigdiv.appendChild(smalldiv2);
bigdiv.appendChild(smalldiv3);
newli.appendChild(bigdiv);
mainol.appendChild(newli);
    }
    //7
    else if(products.oreo.barcode == r)
    {
    let smalldiv1 = document.createElement("div");
    smalldiv1.classList.add("col");
    smalldiv1.innerText = products.oreo.name;
    let smalldiv2 = document.createElement("div");
    smalldiv2.classList.add("col");
    smalldiv2.innerText = 1;
    let smalldiv3 = document.createElement("div");
    smalldiv3.classList.add("col");
    sum= products.oreo.price+sum;
    smalldiv3.innerText = products.oreo.price;
    let mainol = document.querySelector(".mainol");
bigdiv.appendChild(smalldiv1);
bigdiv.appendChild(smalldiv2);
bigdiv.appendChild(smalldiv3);
newli.appendChild(bigdiv);
mainol.appendChild(newli);
    }
    //8
    else if(products.dettolsoap.barcode == r)
    {
    let smalldiv1 = document.createElement("div");
    smalldiv1.classList.add("col");
    smalldiv1.innerText = products.dettolsoap.name;
    let smalldiv2 = document.createElement("div");
    smalldiv2.classList.add("col");
    smalldiv2.innerText = 1;
    let smalldiv3 = document.createElement("div");
    smalldiv3.classList.add("col");
    sum= products.dettolsoap.price+sum;
    smalldiv3.innerText = products.dettolsoap.price;
    let mainol = document.querySelector(".mainol");
bigdiv.appendChild(smalldiv1);
bigdiv.appendChild(smalldiv2);
bigdiv.appendChild(smalldiv3);
newli.appendChild(bigdiv);
mainol.appendChild(newli);
    }
    //9
    else if(products.tea.barcode == r)
    {
    let smalldiv1 = document.createElement("div");
    smalldiv1.classList.add("col");
    smalldiv1.innerText = products.tea.name;
    let smalldiv2 = document.createElement("div");
    smalldiv2.classList.add("col");
    smalldiv2.innerText = 1;
    let smalldiv3 = document.createElement("div");
    smalldiv3.classList.add("col");
    sum= products.tea.price+sum;
    smalldiv3.innerText = products.tea.price;
    let mainol = document.querySelector(".mainol");
bigdiv.appendChild(smalldiv1);
bigdiv.appendChild(smalldiv2);
bigdiv.appendChild(smalldiv3);
newli.appendChild(bigdiv);
mainol.appendChild(newli);
    }
    //10
    else
    {
        console.log("no products");
        modalthin.style.display="block";
        setTimeout(()=>{
            modalthin.style.display="none"; 
        },3000)
    }
    console.log(sum);
    totalprice.value = sum;
    inputbox.value = "";
}



