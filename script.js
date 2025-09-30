// first buy
function up(){
    document.getElementById('img').style.backgroundImage="url('./assets/saree-2.jpg')"
}
function down(){
    document.getElementById('img').style.backgroundImage="url('./assets/saree-1.jpg')"
}


// second buy
function up1(){
    document.getElementById('img').style.backgroundImage="url('./assets/2nd-saree option.jpg')"
}
function down1(){
    document.getElementById('img').style.backgroundImage="url('./assets/2nd-saree-option2.jpg')"
}

//Third buy
function up2(){
    document.getElementById('img').style.backgroundImage="url('./assets/3rd-saree-option.jpg')"
}
function down2(){
    document.getElementById('img').style.backgroundImage="url('./assets/3rd-saree-option2.jpg')"
}

//Fouth buy
function up3(){
    document.getElementById('img').style.backgroundImage="url('./assets/4th-saree-option.jpg')"
}
function down3(){
    document.getElementById('img').style.backgroundImage="url('./assets/4th-saree-option1.jpg')"
}


//Add cart  buy.html
// let addcart=document.getElementById('addcart')

// function add(){
//     let adding=document.createElement('p')
//     // add.backgroundImage=url("./assets/saree-1-girl.jpg");
//     adding.textContent="hello"
//     addcart.append(adding)

// }
var  addcart=document.getElementById('addcart')
function add(){
var para=document.createElement('p')
para.innerHTML="Hello"
addcart.append(para)
}
