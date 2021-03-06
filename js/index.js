
/*Pages*/
    let pdbtn = document.getElementById("produckter");
    let formbtn = document.getElementById("checkout");

    document.getElementById("btn1").addEventListener("click", function(){
        formbtn.style.display = "none";
        pdbtn.style.display = "grid";
    })   

    document.getElementById("btn2").addEventListener("click", function(){
        pdbtn.style.display = "none";
        formbtn.style.display = "flex";
})

/*Prouckter*/ 
    const pd = [
    {
        name: "The Secret of Monkey Island",
        price: "34,71kr",
        description: "Väldigt roligt spel",
        url: "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-7119-ljenpy_0adafb3a.jpeg?region=0,0,1000,1429"
    },
    {
        name: "Monkey Island 2: LeChuck's Revenge",
        price: "34,71kr",
        description: "like roligt som det förs spelet!",
        url: "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-7119-6l88b5_40473e7d.jpeg?region=0,0,1000,1429"
    },
    {
        name: "The Curse of Monkey Island",
        price: "34,71kr",
        description: "like roligt som det förs spelet!!",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/26/The_Curse_of_Monkey_Island_artwork.jpg/220px-The_Curse_of_Monkey_Island_artwork.jpg"
    },
    {
        name: "Escape from Monkey Island",
        price: "34,71kr",
        description: "like roligt som det förs spelet!!!",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Escape_from_Monkey_Island_artwork.jpg/220px-Escape_from_Monkey_Island_artwork.jpg"
    },
    {
        name: "Tales of Monkey Island",
        price: "34,71kr",
        description: "like roligt som det förs spelet!!!!",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Tales_of_Monkey_Island_artwork.jpg/220px-Tales_of_Monkey_Island_artwork.jpg"
    }
]

/*Produckt Poster*/
    pd.forEach(pd => {
    let pds = document.getElementById("produckter");
    let div = document.createElement("div");
    let pen1 = document.createElement("h3");
    let pen2 = document.createElement("p");
    let pen3 = document.createElement("p");
    let img = document.createElement("IMG");

    img.src = pd.url;
    
    let name = document.createTextNode(pd.name);
    let price = document.createTextNode(pd.price);
    let description = document.createTextNode(pd.description);

    pds.appendChild(div);

    div.appendChild(pen1);
    div.appendChild(pen2);
    div.appendChild(pen3);
    div.appendChild(img);

    pen1.appendChild(name);
    pen2.appendChild(price);
    pen3.appendChild(description);
});


/*CheckName*/ 
    function checkName(){
    let name = document.getElementById("Firstname").value;
    let lastname = document.getElementById("Lastname").value;
    

    if(name.length === 0 || lastname.length === 0)
    {
        wrightMessage("A full name is required", "FirstnamePrompt", "red", "Firstname" , "Lastname");
        return false;
    } 
    
    if(!name.match(/^[a-zA-Z]+$/))
    {
        wrightMessage("Invalid characters", "FirstnamePrompt", "red" , "Firstname" , "Lastname");
        return false;
    }

    wrightMessage("name " + name + " " + lastname + " is valid",  "FirstnamePrompt", "green" , "Firstname" , "Lastname");
    return true;
}
/*CheckEmail*/ 
    function checkEmail(){
    let email = document.getElementById("Emailaddress").value;
    

    if(email.indexOf("@") === -1)
    {
        wrightMessage("A email is required", "EmailPrompt", "red", "Emailaddress");
        return false;
    } 

    wrightMessage("email is valid", "EmailPrompt", "green", "Emailaddress");
    return true;
}
/*CheckPhone*/ 
    function checkPhone(){
    let phone = document.getElementById("Phonenumber").value;
    
    if(phone.length === 0)
    {
        wrightMessage("Phone number is required", "PhonePrompt", "red", "Phonenumber");
        return false;
    }
    
    if(!phone.match(/^[0-9]{10}$/))
    {
        wrightMessage("Only 10 digits is required", "PhonePrompt", "red", "Phonenumber");
        return false;
    }


    wrightMessage("Phone Number is Valid", "PhonePrompt", "green", "Phonenumber");
    return true;
}
/*CheckStreet*/ 
    function checkStreet(){
    let street = document.getElementById("Streetaddress").value;

    if(street.length === 0){
        wrightMessage("Street Address is required", "StreetPrompt", "red", "Streetaddress");
        return false;
    }

    wrightMessage("Street Address is Valid", "StreetPrompt", "Green", "Streetaddress");
    return true;
}
/*CheckZip*/ 
    function checkZip(){
    let zip = document.getElementById("Zipcode").value;

    if(zip.length === 0){
        wrightMessage("swedish Zipcode is required", "ZipPrompt", "red", "Zipcode");
        return false;
    }
    if(!zip.match(/^[0-9]{5}$/))
    {
        wrightMessage("this is not a swedish Zipcode", "ZipPrompt", "red", "Zipcode");
        return false;
    }

    wrightMessage("swedish Zipcode is Valid", "ZipPrompt", "Green", "Zipcode");
    return true;
}
/*CheckCity*/ 
    function checkCity(){
    let city = document.getElementById("City").value;

    if(city.length === 0){
        wrightMessage("swedish city is required", "CityPrompt", "red", "City");
        return false;
    }

    if(!city.match(/^[a-zA-Z]+$/))
    {
        wrightMessage("Invalid characters", "CityPrompt", "red", "City");
        return false;
    }

    wrightMessage("swedish City is Valid", "CityPrompt", "Green", "City");
    return true;
}
/*CheckForm*/
    function checkForm(){
    
    if(!checkName() || !checkEmail() || !checkPhone() || !checkStreet() || !checkZip() || !checkCity())
    {
        show("CheckPrompt");
        wrightMessage("Form must be valid to submit", "CheckPrompt", "red");
        setTimeout(function(){hide("CheckPrompt");}, 2000);
    }
    else{
        show("CheckPrompt");
        wrightMessage("Form Sent", "CheckPrompt", "green");
        setTimeout(function(){hide("CheckPrompt");}, 2000)
    }
}
/*Show*/
    function show(id){
    document.getElementById(id).style.display = "block";
}
/*hide*/
    function hide(id){
    document.getElementById(id).style.display = "none";
}
/*wrightMessage*/
    function wrightMessage(message, messageLocation, color, borderLocation , borderLocation2){
    document.getElementById(messageLocation).innerHTML = message;
    document.getElementById(messageLocation).style.color = color;
    document.getElementById(borderLocation).style.borderColor = color;
    document.getElementById(borderLocation2).style.borderColor = color;
}