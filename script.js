$(".game").hide();

$(".text").click(function(){
    $(".gameStart").hide();
    $(".game,.mole1,.moleTwo,.thirdMole").show();
});

$(".whack1").click(function(){
    $(".mole1").hide();
});
    
$(".whack2").click(function(){
    $(".moleTwo").hide();
});
    
$(".whack3").click(function(){
    $(".thirdMole").hide();
});
    
$(".whack1,.whack2").click(function(){
    $(".thirdMole").show();
});

$(".whack1,.whack3").click(function(){
    $(".moleTwo").show();
});

$(".whack2,.whack3").click(function(){
    $(".mole1").show();
});

$(".reset").click(function(){
    $(".game").hide();
    $(".gameStart").show();
});