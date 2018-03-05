let pVar1 = $("#nameProduckt");
let pVar2 = $("#reviewProduckt");
let pVar3 = $("#rateProduckt");

    $(".postReview").click(function(event){
        let div = $("#reviewsProduckt");
        let name = $("<input></input>");
        let space1 = $("<br>");
        let space2 = $("<br>");
        let review = $("<textarea></textarea>");
        let rating = $("<p></p>");
    
        $("#reviewsProduckt").append(name,space1,space2,review,rating);
    
        $(name).attr("value", pVar1.val());
        $(name).prop("readonly", true);

        $(review).html(pVar2.val());
        $(review).prop("readonly", true);

        $(rating).html("Stars " + pVar3.val());
    });    