   <!-- modal windows -->
<div id="modalAddTable" class="modal">
<div class="modal-dialog modal__hostes__sizes">
<div class="modal-content modal__hostes__sizes">
<div class="modal-body modal__hostes__sizes">
    <button type="button" class="close" data-dismiss="modal">&times;</button>
<p class="modal__title">ДОБАВЛЕНИЕ СТОЛИКА:</p>

     <div class="row">    
        <div class="col-xs-5">
        <div  class="modal__add__table__preview ">
            <div class="modal__add__table__preview__insider jsTypeTablePreviewAddModal">
            </div>
        </div>
            <p id="jsTypeTableAddModal"  class="modal__add__type__table">Тип стола : <span>не выбрано</span></p>
        </div>
        <div class="col-xs-1">
        </div>
        <div class="col-xs-5">
                <input type="text" name="TableNumber" class="template__input__text template__indent__bottom jsInputNumTable" placeholder="Номер столика">



                 <div class="jsModernSelect jsPlacesCountAddTableForm template__indent__bottom" >
                 <p data-clicker="true"><span>Количество мест</span>
                  </p>
                  </div>



                  <script>
                     $('.jsModernSelect').modernSelect({
                        'options':['1','2','3','4','5'],
                               'values':['1','2','3','4','5'],
                               'id':'placesCount',
                               'name' : 'placesCount',
                               'icon':true,
                                'inputable' : true
                        });
                  </script>
                 <div class="template__center__align">
                   <a href="#"  data-toggle="modal" data-target="#changeTableForm"  class="btn-green template__indent__bottom">
                       ВЫБРАТЬ ФОРМУ СТОЛА
                   </a>
                 </div>
            
                
            <textarea rows="5" type="text" name="ComentToTable" class="jsTextDescription template__textarea template__indent__bottom-md" placeholder="Описание столика (не обязательно)"></textarea>
                <div class="template__center__align">
                    <a href="#" id="goToTableForm" class="btn-green template__indent__bottom jsAddNewTableSubmit">ДОБАВИТЬ</a>
                </div>
        </div>
        </div>
    
</div>
</div>
</div>
</div>