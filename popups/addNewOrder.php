<?php
/**
 * Created by PhpStorm.
 * Date: 07.05.16
 * Time: 23:37
 */
?>


<div id="addNewOrder" class="modal">
    <div class="modal-dialog modal__hostes__sizes">
        <div class="modal-content modal__hostes__sizes">
            <div class="modal-body modal__hostes__sizes custom__css___modalClosePLeftIndent">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h3 class="modal__title">ДОБАВЛЕНИЕ НОВОГО РЕЗЕРВА:</h3>


                <div class="row">
                    <div class="col-xs-3">

                        <p>Имя:</p>
                        <input type="text" class="template__input__text" name="Name">
                     </div>
                <div class="col-xs-3">
                    <p>Фамилия:</p>
                    <input type="text" class="template__input__text" name="Surname">
                </div>
                <div class="col-xs-3">
                    <p>Телефон:</p>
                    <input type="text" class="template__input__text" name="Tel" placeholder="+38(_ _ _)&nbsp;&nbsp; _ _&nbsp;&nbsp; _ _&nbsp;&nbsp; _ _">
                </div>
                <div class="col-xs-3">
                    <p>Email:</p>
                    <input type="text" class="template__input__text" name="mail">
                </div>
                    </div>

                    <h3 class="modal__title__mid__size">ИНФОРМАЦИЯ ПО РЕЗЕРВУ:</h3>

                <div class="modal__padding__lr">

                        <div class="template__3columns">
                            <p>Кол-во человек:</p>

                            <!-- modern selector -->
                            <div class="jsModernSelectPeopleCount template__indent__bottom" >
                                <p data-clicker="true"><span>Выберите из списка</span>
                                </p>
                            </div>
                            <script>
                                $('.jsModernSelectPeopleCount').modernSelect({
                                    'options':['1','2','3','4','5'],
                                    'values':['1','2','3','4','5'],
                                    'id':'placesCount',
                                    'name' : 'placesCount',
                                    'icon':true,
                                    'inputable' : true
                                });
                            </script>



                        </div>
                        <div class="template__3columns">
                            <p class="modal__add__new__order__custom__padding">Дата:</p>
                            <span class="data__picker_before prevButtonDate" data-target="#datetimepicker3"></span>
                            <input class="data__picker" type="text" data-init="data" id="datetimepicker3" value="11.05.2016"/><span class="data__picker_span"></span>
                            <span class="data__picker_after nextButtonDate" data-target="#datetimepicker3"></span>

                        </div>
                        <div class="template__3columns">
                            <p class="modal__add__new__order__custom__padding">Время:</p>
                            <span class="data__picker_before prevButtonTime" data-target="#datetimepicker4"></span>
                            <input class="time__picker" type="text" data-init="hours"  id="datetimepicker4" value="20:00"/><span class="time__picker_span"></span>
                            <span class="data__picker_after nextButtonTime" data-target="#datetimepicker4"></span>

                        </div>

                    <script>



                        jQuery('#datetimepicker3').datetimepicker({
                            timepicker:false,
                            format:'d.m.Y'
                        });
                        jQuery('#datetimepicker4').datetimepicker({
                            datepicker:false,
                            format:'H:i'
                        });
                    </script>

                        <div class="template__3columns">
                            <p>Скидка:</p>
                            <!-- modern selector -->
                            <div class="jsModernSelectCutReserv" >
                                <p data-clicker="true"><span>Скидки нет</span>
                                </p>
                            </div>
                            <script>
                                $('.jsModernSelectCutReserv').modernSelect({
                                    'options':['10%','20%','30%','40%','50%'],
                                    'values':['10%','20%','30%','40%','50%'],
                                    'id':'placesCount',
                                    'name' : 'placesCount',
                                    'icon':true,
                                    'inputable' : true
                                });
                            </script>


                        </div>
                        <div class="template__3columns">
                            <p>Статус:</p>
                            <!-- modern selector -->
                            <div class="jsModernSelectStatusReserv" >
                                <p data-clicker="true"><span>Отменено</span>
                                </p>
                            </div>
                            <script>
                                $('.jsModernSelectStatusReserv').modernSelect({
                                    'options':['Бронь','Отмена','Внесли предоплату','Сидят','Не пришли'],
                                    'values':['Order','Canceled','PayBefore','Sit','NotComes'],
                                    'id':'placesCount',
                                    'name' : 'placesCount',
                                    'icon':true
                                });
                            </script>
                        </div>
                        <div class="template__3columns">
                            <p>Стол:</p>
                            <div class="jsModernSelectTableNumSelect custom__css__modalCloseCustomTableNumSelectStyle" >
                                <p data-clicker="true"><span>1</span>
                                </p>
                            </div>
                            <script>
                                $('.jsModernSelectTableNumSelect').modernSelect({
                                    'options':['1','2','3','4'],
                                    'values':['1','2','3','4'],
                                    'id':'placesCount',
                                    'name' : 'placesCount',
                                    'icon':true
                                });
                            </script>
                            <a  id="chooseTheTable" class="btn-green btn-mid template__inline__">Выбрать</a>
                        </div>


                        <div class="template__inline__ template__block__with__indent__top">
                            <p>Заметка:</p>
                            <textarea rows="3" class="template__textarea template__full__size newOrderForm2Note"></textarea>
                        </div>

                        <div class="template__center__align template__block__with__indent__bottom">

                             <span class="toggle-bg">
                                 <input type="radio" name="toggle" value="off">
                                 <input type="radio" name="toggle" value="on">
                                 <span class="switch"></span>
                             </span>
                            - Отправить подтверждние резерва с деталями по смc
                        </div>

                        <div class="template__center__align">
                            <a href="#" id="addNewOrder" class="btn-green template__indent__bottom">ДОБАВИТЬ</a>
                        </div>
                </div>


</div>
        </div>
    </div>
</div>

