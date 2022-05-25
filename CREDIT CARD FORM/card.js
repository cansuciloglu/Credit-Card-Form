$(document).ready(() => {
    $("#name").keyup(function(){
        var name = $("#name").val();
        $(".credit-author").text(name)
    });

    $("#sktarih-ay").keyup(function(){
        var sktay = $("#sktarih-ay").val();
        $(".skt-ay").text(sktay)
    });
    $("#sktarih-yil").keyup(function(){
        var sktyil = $("#sktarih-yil").val();
        $(".skt-yil").text(sktyil)
    });
    $("#card-number").keyup(function(){
        var cartnumber = $("#card-number").val();
        var cartnumber1 = cartnumber.slice(0,4) + " ";
        var cartnumber2 = cartnumber.slice(4,8) + " ";
        var cartnumber3 = cartnumber.slice(8, 12) + " ";
        var cartnumber4 = cartnumber.slice(12,16);
        var cart = cartnumber1+cartnumber2+cartnumber3+cartnumber4;
        $(".credit-card-number").text(cart)
    });
    $("#card-number").keyup(function(){
        var cartnumber = $("#card-number").val();
        var cartnumber1 = cartnumber.slice(0,1);
        if(cartnumber1=='5'){
            $(".carttype").addClass("fa-cc-mastercard");
        }
        if(cartnumber1=='4'){
            $(".carttype").addClass("fa-cc-visa");
        }
    });
   
});
