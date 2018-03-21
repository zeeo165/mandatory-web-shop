/*rewiws*/    
    let div = $("#review");
    
    
    function recension(pid){
        fetch('http://demo.edument.se/api/reviews')
        .then(response => response.json())
        .then((reviews) => loop(reviews))
        .catch(err => console.log(err));
    
        function loop(reviews){
        for(let i in reviews){
            console.log(reviews[i]);
            if(reviews[i].ProductID === pid){
                let item = $("<p></p>");
                let br = $("<br>");
                let item0 = $("<input>");
                let br1 = $("<br>");
                let item1 = $("<textarea></textarea>");
                let br2 = $("<br>");
                let item2 = $("<p>");
            
                $(div).append(item,br,item0,br1,item1,br2,item2);
            
                $(item).html("Product " + pid);
                $(item0).attr("value", reviews[i].Name);
                $(item1).html(reviews[i].Comment);
                $(item1).attr("rows", 5);
                $(item1).attr("cols", 55);
                $(item2).html("Rating " + reviews[i].Rating);
    
                $("#nav").css("display", "none");
            }
        }
        console.log(reviews);
        }
        document.getElementById("skicka").addEventListener("click", function(){
            let namn = document.getElementById("namn");
            let kommentar = document.getElementById("comment");
            let stars = document.getElementById("stars");
    
            let div2 = document.getElementById("nyarecensioner");
            let input = document.createElement("input");
            let br = document.createElement("br");
            let text = document.createElement("textarea");
            let br2 = document.createElement("br");
            let p = document.createElement("p");
    
            input.setAttribute("value", namn.value);
            text.innerHTML = kommentar.value;
            p.innerHTML = "Rating " + stars.value;
    
            $(text).attr("rows", 5);
            $(text).attr("cols", 55);
    
            div2.append(input,br,text,br2,p);
        
            fetch('http://demo.edument.se/api/reviews',{
                method: 'POST',
                body: JSON.stringify({ id: 1, ProductID: pid, name: namn.value, Comment: kommentar.value, Rating: stars.value}),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })            
            })
        })
    }