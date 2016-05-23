
/*$('td[id^=order]').click(function(){
    var myTD = $(this).children('#containerofOrder');
    myTD.replaceWith("<div id='closer' class='closer'><a href='#'>X</a><div class='descriptionTitle'><p>18:00 / стол №26</p></div><p class='HolderInDescription'>Иван Иванов</p><p class='descriptionTel'><img src='img/2.jpg'> 3(093) 111-11-11<br><img src='img/3.jpg'> &nbsp;5 человек</p><p class='descriptionComent'>Комментарий:</p><p class='descriptionText'>Если возможно приготовьте сразу вазу на столе я буду с девушкой и подарю ей цветы</p></div></div>");    
});
 $('#closer').click(function(){
    var myTD = $(this);
    myTD.replaceWith('<div id="containerofOrder"><div style="float:left"><p class="OrderHolder">Иван Иванов</p><p class="orderInfo">18:00 / 5 человек</p></div><div class="infoButton">26</div></div>');
});*//*
$('div[id^=closer]').hide();
$('div[id^=reserved]').click(function(){
    var myID=$(this).attr('id').split('d')[1];
    var myLink='#closer'+myID;
    $(this).toggle();
    $(myLink).toggle();
});
$('[data-closer]').click(function(){
    var myID=$(this).attr('data-closer');
    var myLink='#reserved'+myID;
;
    $(myLink).toggle();
});*/