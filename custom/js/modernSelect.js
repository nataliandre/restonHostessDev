//my bicycle



(function( $ ) {
      $.fn.modernSelect=function(value) {
            $(this).addClass('modernSelectStyles');
            var options = value.options, values = value.values, id = value.id , name = value.name, icon = value.icon;
            var hiddenInput = '<input type="hidden" value="" name="'+name+'" data-id="'+id+'" />';
            var body = $('html');
            if(value.inputable){
                var inputable = value.inputable;
                var placeHolder =$(this).children('[data-clicker="true"]').children('span').html();
                hiddenInput = '<input type="text" value="" placeholder="'+placeHolder+'" name="'+name+'" data-id="'+id+'" />';
                $(this).addClass('inputable');
            }
            var placeHolder = $(this).children('[data-clicker="true"]').children('span').html();
            if(icon){ $(this).append('<span class="ico"></span>'); }

            var moderSelectList = '<ul  class="modernSelectList" data-id="'+id+'">';
            for(i=0;i<options.length;i++){
                moderSelectList+='<li data-val="'+values[i]+'">'+options[i]+'</li>';
            }
            moderSelectList+='</ul>';
            $(this).append(moderSelectList);
            $(this).append(hiddenInput);
            var dataClicker = $(this).children('[data-clicker="true"]');
            var dataInput = $(this).children('input');
            var dataUl =  $(this).children('ul');
            $(this).children('ul').children('li').bind('click',function(){
                var val = $(this).attr('data-val'), title = $(this).html();
                dataClicker.children('span').html(title);
                dataInput.val(val);
                if(value.handler){
                    $(value.handler).val(title);
                }
                dataUl.toggleClass('active');
            });

              if(value.handler){
                  $(value.handler).bind('change',function(e){
                      e.stopPropagation();
                      var val = $(this).val();
                      if(val == ''){
                          val = placeHolder;
                      }
                      dataClicker.children('span').html(val);
                      var index = getIndexOf(val,values);
                      dataInput.val(index);
                  });
              }


          if(!value.inputable) {
              $(this).children('[data-clicker="true"]').on('click', function (e) {
                  e.stopPropagation();
                  dataUl.toggleClass('active');
                  if(dataUl.hasClass('active')){
                      body.bind('click',function(){
                          dataUl.removeClass('active');
                          body.unbind('click');
                      });
                  }
              });
          }
            $(this).find('.ico').on('click',function(e){
                e.stopPropagation();
                dataUl.toggleClass('active');
            });
      };

    $(document).click(function() {
        $('.modernSelectList').removeClass('active');
    });

    /**
     *
     * @param val
     * @param array
     * @returns {*}
     */
   function getIndexOf(val,array){
            for(var i =0; i<array.length; i++){
                if(val == array[i]){return i;}
            }
       return false;
    }
})(jQuery);

