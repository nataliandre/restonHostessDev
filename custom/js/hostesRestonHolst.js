$(document).ready(function(){
    

    /*
    *
    *Main holst/ no modal windows
*/

    $('.jsEditTableHolst  div')
        .draggable({
            snap: ".div",
            snapMode: "outer",
            snapTolerance: 40,
            drag:function(){
                check=false;
            },
            stop: function() {
                check=true;
            },
            containment: ".jsEditTableHolst",
        });
    


  // // this is used later in the resizing and gesture demos
  // window.dragMoveListener = dragMoveListener;
  //  $('.btn-mid').click(function(){
  //    $('.reston-Holst div').removeClass('red__point').addClass('green__point');
  //  });
    
    
    
    
});
