/*This time you are gona get commited*/
/*Pages*/
    let pdbtn = $("#produckter");
    let formbtn = $("#checkout");

        $( "#btn1" ).click(function(){
            $(formbtn).css("display","none");
            $(pdbtn).css("display","grid");
        });   

        $( "#btn2" ).click(function(){
            $(pdbtn).css("display","none");
            $(formbtn).css("display","flex");
        });
/*Prouckter*/ 

    fetch('http://demo.edument.se/api/products')
    .then(response => response.json())
    .then(products => items(products))
    .catch(err => console.log(err));

/*Produckt Poster*/
    function items(data){
        data.forEach(data => {
            let pds = $("#produckter");
            let div = $("<div></div>");
            let pen1 = $("<h3></h3>");
            let pen2 = $("<p></p>");
            let pen3 = $("<p></p>");
            let img = $("<img>");
            let button = $("<button></button>");
            let link = $("<a></a>");

            $(button).attr("class", "add-to-cart");
            $(link).attr("class", "recen" + [data.Id]);
            

            $(pds).append(div);
            
            $(div).append(pen1,pen2,pen3,img,button,link);
            
            $(pen1).html(data.Name);
            $(pen2).html(data.Price)
            $(pen3).html(data.Description)
            $(img).attr("src", data.Image)
            $(button).html("Add to Cart");
            $(link).html("Se mer");
    });

    for(let i = 0; i < data.length; i++)
    $(".recen" + [data[i].Id]).click(function(e){
        
        let pds = $("#produckter");
        let div = $("<div></div>");
        let pen1 = $("<h3></h3>");
        let pen2 = $("<p></p>");
        let pen3 = $("<p></p>");
        let img = $("<img>");
        let button = $("<button></button>");
        let link = $("<a></a>");

        $(pds).css("display", "none");
        $(div).attr("id", "review" + data[i].Id);
        $(div).attr("data-value", data[i].Id);
        $(div).attr("class", "container");
        $(div).css("display", "block");
        recension(data[i].Id);
    })

    console.log(data);
}

/*Products in cart*/
            
$( document ).ready(function() {
    $(".add-to-cart").click(function(event){
        event.preventDefault();
        let id = $(this).attr("data-id");
        let name = $(this).attr("data-name");
        let price = Number($(this).attr("data-price"));
        let description = ($(this).attr("data-description"));
        let image = ($(this).attr("data-image"));
        let url = ($(this).attr("data-url"));
    
        addItemToCart(id, name, price,description,image,url, 1);
        displayCart();
    });
});

function displayCart(){
    let cartArray = listCart();
    let output = " " + countCart();
    $("#shoppingCart").html(output);  
}

$( document ).ready(function() {
$("#clear-cart").click(function(event){
    clearCart();
    displayCart();
})
});

/* Shopping carts functions */

let cart = [];

let Item = function(id, name, price, description,image,url, count) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
    this.url = url;
    this.count = count;
}

function addItemToCart(id, name, price,description,image,url, count) {
    for(let i in cart) {
        if(cart[i].name === name){
            cart[i].count += count;
            saveCart();
            return;
        }
    }
    let item = new Item(id, name, price,description,image,url, count);
    cart.push(item);
    saveCart();
}

function removeItemFromCart(name) {
    for(let i in cart){
        if(cart[i].name === name) {
            cart[i].count --;

            if(cart[i].count === 0) {
                cart.splice(i, 1);
            }
        }
    }
    saveCart();
}

function removeItemFromCartAll(name) {
    for(let i in cart) {
        if(cart[i].name === name){
            cart.splice(i, 1);
            break;
        }
    }
    saveCart();
}

function clearCart() {
    cart = [];
    saveCart();
}

function countCart() {
    let totalCount = 0;
    for(let i in cart){
        totalCount += cart[i].count;
    }

    return totalCount;
}

function listCart() {
    return JSON.parse(JSON.stringify(cart));
}

function saveCart() {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
}


function loadCart() {
    cart = JSON.parse(localStorage.getItem("shoppingCart"));
}

loadCart();
displayCart();

/*CheckName*/ 
    function checkName(){
        let name = $("#Firstname").val();
        let lastname = $("#Lastname").val();
        

        if(name.length === 0 || lastname.length === 0)
        {
            wrightMessage("A full name is required", "#FirstnamePrompt", "red", "#Firstname" , "#Lastname");
            return false;
        } 
        
        if(!name.match(/^[a-zA-Z]+$/))
        {
            wrightMessage("Invalid characters", "FirstnamePrompt", "red" , "#Firstname" , "#Lastname");
            return false;
        }

        wrightMessage("name " + name + " " + lastname + " is valid",  "#FirstnamePrompt", "green" , "#Firstname" , "#Lastname");
        return true;
}
/*CheckEmail*/ 
    function checkEmail(){
        let email = $("#Emailaddress").val();
        

        if(email.indexOf("@") === -1)
        {
            wrightMessage("A email is required", "#EmailPrompt", "red", "#Emailaddress");
            return false;
        } 

        wrightMessage("email is valid", "#EmailPrompt", "green", "#Emailaddress");
        return true;
}
/*CheckPhone*/ 
    function checkPhone(){
        let phone = $("#Phonenumber").val();
        
        if(phone.length === 0)
        {
            wrightMessage("Phone number is required", "#PhonePrompt", "red", "#Phonenumber");
            return false;
        }
        
        if(!phone.match(/^[0-9]{10}$/))
        {
            wrightMessage("Only 10 digits is required", "#PhonePrompt", "red", "#Phonenumber");
            return false;
        }


        wrightMessage("Phone Number is Valid", "#PhonePrompt", "green", "#Phonenumber");
        return true;
}
/*CheckStreet*/ 
    function checkStreet(){
        let street = $("#Streetaddress").val();

        if(street.length === 0){
            wrightMessage("Street Address is required", "#StreetPrompt", "red", "#Streetaddress");
            return false;
        }

        wrightMessage("Street Address is Valid", "#StreetPrompt", "Green", "#Streetaddress");
        return true;
}
/*CheckZip*/ 
    function checkZip(){
    let zip = $("#Zipcode").val();

    if(zip.length === 0){
        wrightMessage("swedish Zipcode is required", "#ZipPrompt", "red", "#Zipcode");
        return false;
    }
    if(!zip.match(/^[0-9]{5}$/))
    {
        wrightMessage("this is not a swedish Zipcode", "#ZipPrompt", "red", "#Zipcode");
        return false;
    }

    wrightMessage("swedish Zipcode is Valid", "#ZipPrompt", "Green", "#Zipcode");
    return true;
}
/*CheckCity*/ 
    function checkCity(){
        let city = $("#City").val();

        if(city.length === 0){
            wrightMessage("swedish city is required", "#CityPrompt", "red", "#City");
            return false;
        }

        if(!city.match(/^[a-zA-Z]+$/))
        {
            wrightMessage("Invalid characters", "#CityPrompt", "red", "#City");
            return false;
        }

        wrightMessage("swedish City is Valid", "#CityPrompt", "Green", "#City");
        return true;
}
/*CheckForm*/

    let name = $("#Firstname").val();
    let lastname = $("#Lastname").val();
    let email = $("#Emailaddress").val();
    let phone = $("#Phonenumber").val();
    let address = $("#Streetaddress").val();
    let zipcode = $("#Zipcode").val();
    let city = $("#City").val();

    function checkForm(){
    
    if(!checkName() || !checkEmail() || !checkPhone() || !checkStreet() || !checkZip() || !checkCity())
    {
        show("CheckPrompt");
        wrightMessage("Form must be valid to submit", "#CheckPrompt", "red");
        setTimeout(function(){hide("#CheckPrompt");}, 2000);
    }
    else{
        fetch('http://demo.edument.se/api/orders',{
            method: 'POST',
            body: JSON.stringify({ id: 1, FirstName: name, LastName: lastname, Email: email, Phone: phone, StreetAddress: address, ZipCode: zipcode, City: city, Comment: "", OrderItems: cart}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })            
        })

        show("CheckPrompt");
        wrightMessage("Form Sent", "#CheckPrompt", "green");
        setTimeout(function(){hide("#CheckPrompt");}, 2000)
    }
}
/*Show*/
    function show(id){
        $( id ).css("display","block");
}
/*hide*/
    function hide(id){
        $( id ).css("display","hide");
}
/*wrightMessage*/
    function wrightMessage(message, messageLocation, color, borderLocation , borderLocation2){
        $(messageLocation).html(message);
        $(messageLocation).css("color",color);
        $(borderLocation).css("border-color",color);
        $(borderLocation2).css("border-color",color);
}

