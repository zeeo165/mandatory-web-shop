/*Products in cart*/

let sCart = $("#shoppingCart");

    let monkeyIsland1 = $("#pro1");
    let monkeyIsland2 = $("#pro2");
    let monkeyIsland3 = $("#pro3");
    let monkeyIsland4 = $("#pro4");
    let monkeyIsland5 = $("#pro5");

    let monkeyIsland1Add = $("#pro1add");
    let monkeyIsland2Add = $("#pro2add");
    let monkeyIsland3Add = $("#pro3add");
    let monkeyIsland4Add = $("#pro4add");
    let monkeyIsland5Add = $("#pro5add");

    let monkeyIsland1Remove = $("#pro1remove");
    let monkeyIsland2Remove = $("#pro2remove");
    let monkeyIsland3Remove = $("#pro3remove");
    let monkeyIsland4Remove = $("#pro4remove");
    let monkeyIsland5Remove = $("#pro5remove");

    addCart(".add:eq(0)", pd[0]);

    addCart(".add:eq(1)", pd[1]);

    addCart(".add:eq(2)", pd[2]);
    
    addCart(".add:eq(3)", pd[3]);
    
    addCart(".add:eq(4)", pd[4]);

    function addCart(klass, arrayloc){
        $(klass).click(function(){
            arrayloc.count += +1;
            $(sCart).html(countCart());
            if(arrayloc === pd[0]){
                $(monkeyIsland1).html(pd[0].name + " " + pd[0].count);
                $(monkeyIsland1Add).css("display","block");
                $(monkeyIsland1Remove).css("display","block");
            }
            if(arrayloc === pd[1]){
                $(monkeyIsland2).html(pd[1].name + " " + pd[1].count);
                $(monkeyIsland2Add).css("display","block");
                $(monkeyIsland2Remove).css("display","block");
            }
            if(arrayloc === pd[2]){
                $(monkeyIsland3).html(pd[2].name + " " + pd[2].count);
                $(monkeyIsland3Add).css("display","block");
                $(monkeyIsland3Remove).css("display","block");
            }
            if(arrayloc === pd[3]){
                $(monkeyIsland4).html(pd[3].name + " " + pd[3].count);
                $(monkeyIsland4Add).css("display","block");
                $(monkeyIsland4Remove).css("display","block");
            }
            if(arrayloc === pd[4]){
                $(monkeyIsland5).html(pd[4].name + " " + pd[4].count);
                $(monkeyIsland5Add).css("display","block");
                $(monkeyIsland5Remove).css("display","block");
            }
            
        })
    }

    function countCart() {
        let totalCount = 0;
        for(let i in pd){
            totalCount += pd[i].count;
        }
        return totalCount;
    }

    function addItem(add, arrayloc2, show){
        $(add).click(function(){
            arrayloc2.count += +1;
            $(show).html(arrayloc2.name + " " + arrayloc2.count);
            $(sCart).html(countCart());
        })
    }

    addItem(monkeyIsland1Add, pd[0], monkeyIsland1);
    addItem(monkeyIsland2Add, pd[1], monkeyIsland2);
    addItem(monkeyIsland3Add, pd[2], monkeyIsland3);
    addItem(monkeyIsland4Add, pd[1], monkeyIsland4);
    addItem(monkeyIsland5Add, pd[2], monkeyIsland5);

    function removeItem(add2, arrayloc3, show2){
        $(add2).click(function(){
            arrayloc3.count += -1;
            $(show2).html(arrayloc3.name + " " + arrayloc3.count);
            $(sCart).html(countCart());
        })
    }

    removeItem(monkeyIsland1Remove, pd[0], monkeyIsland1);
    removeItem(monkeyIsland2Remove, pd[1], monkeyIsland2);
    removeItem(monkeyIsland3Remove, pd[2], monkeyIsland3);
    removeItem(monkeyIsland4Remove, pd[1], monkeyIsland4);
    removeItem(monkeyIsland5Remove, pd[2], monkeyIsland5);
