<div id="modalCloseTable" class="modal">
<div class="modal-dialog modal__hostes__sizes__sm">
<div class="modal-content modal__hostes__sizes__sm">
<div class="modal-body modal__hostes__sizes__sm">
    <button type="button" class="close" data-dismiss="modal">&times;</button>
<p class="modal__title">ЗАКРЫТИЕ СТОЛИКА:</p>
<div class="closeTableFild">
    <div class="template__center__align template__block__with__indent">
       <div class="template__inline__  template__inline__vline__top  template__left__align custom__css__modalCloseTableSection1">
           <p>Номер столика:</p>
           <!-- modern select -->
           <div class="jsModernSelectTableNumber template__indent__bottom" >
           <p data-clicker="true"><span>Не выбрано</span></p>
           </div>
           <script>
                     $('.jsModernSelectTableNumber').modernSelect({
                        'options':['1','2','3','4','5'],
                               'values':['1','2','3','4','5'],
                               'id':'tableNo',
                               'name' : 'placesCount',
                               'icon':true,
                                'inputable':true
                        });
           </script>
       </div> 
       <div class="template__inline__ template__left__align  template__inline__vline__top custom__css__modalCloseTableSection2">
           <p>Выберите период:</p>
           <!-- modern select -->
           <div id="widget">
               <div id="widgetField">
                   <span></span>
                   <a id="toch" href="#">Select date range</a>
               </div>
               <div id="widgetCalendar">
               </div>
           </div>

       </div>
    </div>
    <div class="template__center__align template__block__with__indent">
       <input class="btn-green" type="button" name="submit" value="СОХРАНИТЬ">
       <input class="btn-grey" type="button" onclick="$('#modalCloseTable').modal('hide')" name="submit" value="ОТМЕНИТЬ">
    </div>
</div>
</div>
</div> 
</div>
</div> 