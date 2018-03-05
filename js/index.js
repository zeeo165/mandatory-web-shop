
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
    const pd = [
    {
        name: "The Secret of Monkey Island",
        price: "34,71kr",
        description: "Väldigt roligt spel",
        url: "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-7119-ljenpy_0adafb3a.jpeg?region=0,0,1000,1429",
        count: 0,
        link: "produckt1.html"
    },
    {
        name: "Monkey Island 2: LeChuck's Revenge",
        price: "34,71kr",
        description: "like roligt som det förs spelet!",
        url: "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-7119-6l88b5_40473e7d.jpeg?region=0,0,1000,1429",
        count: 0,
        link: "produckt2.html"
    },
    {
        name: "The Curse of Monkey Island",
        price: "34,71kr",
        description: "like roligt som det förs spelet!!",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/26/The_Curse_of_Monkey_Island_artwork.jpg/220px-The_Curse_of_Monkey_Island_artwork.jpg",
        count: 0,
        link: "produckt3.html"
    },
    {
        name: "Escape from Monkey Island",
        price: "34,71kr",
        description: "like roligt som det förs spelet!!!",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Escape_from_Monkey_Island_artwork.jpg/220px-Escape_from_Monkey_Island_artwork.jpg",
        count: 0,
        link: "produckt4.html"
    },
    {
        name: "Tales of Monkey Island",
        price: "34,71kr",
        description: "like roligt som det förs spelet!!!!",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Tales_of_Monkey_Island_artwork.jpg/220px-Tales_of_Monkey_Island_artwork.jpg",
        count: 0,
        link: "produckt5.html"
    }
]
/*Produckt Poster*/
    pd.forEach(pd => {
        let pds = $("#produckter");
        let div = $("<div></div>");
        let pen1 = $("<h3></h3>");
        let pen2 = $("<p></p>");
        let pen3 = $("<p></p>");
        let img = $("<img>");
        let button = $("<button></button>");
        let link = $("<a></a>");

        $(button).attr("class", "add");
        $(link).attr("href", pd.link);
        

        $(pds).append(div);
        
        $(div).append(pen1,pen2,pen3,img,button,link);
        
        $(pen1).html(pd.name);
        $(pen2).html(pd.price)
        $(pen3).html(pd.description)
        $(img).attr("src", pd.url)
        $(button).html("Add to Cart");
        $(link).html("Se mer");
});
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
    function checkForm(){
    
    if(!checkName() || !checkEmail() || !checkPhone() || !checkStreet() || !checkZip() || !checkCity())
    {
        show("CheckPrompt");
        wrightMessage("Form must be valid to submit", "#CheckPrompt", "red");
        setTimeout(function(){hide("#CheckPrompt");}, 2000);
    }
    else{
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