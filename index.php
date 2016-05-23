<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hostess page</title>

    <link rel="stylesheet" href="rangePicker/css/datepicker.css" type="text/css" />
    <link rel="stylesheet" media="screen" type="text/css" href="rangePicker/css/layout.css" />


    <link href="standart/css/bootstrap.min.css" rel="stylesheet">
    <link href="custom/css/css.css" rel="stylesheet">
    <link href="custom/css/media.css" rel="stylesheet">
    <link href="custom/css/map.css" rel="stylesheet">
    <link href="custom/css/modals.css" rel="stylesheet">
    <link href="custom/css/modernSelect.css" rel="stylesheet">
    <link href="custom/css/templates.css" rel="stylesheet">
     <link href="custom/css/hostesRestonHolst.css" rel="stylesheet">
    <link href="custom/css/fonts.css" rel="stylesheet">
    <link href="custom/css/icons.css" rel="stylesheet">

    <link href="custom/css/jquery-ui.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="datapicker/jquery.datetimepicker.css"/>
    <link rel="stylesheet" href="transform/css/jquery.freetrans.css">







    <script type="text/javascript" src="standart/js/jquery-2.1.4.min.js"></script>


    <script type="text/javascript" src="rangePicker/js/datepicker.js"></script>
    <script type="text/javascript" src="rangePicker/js/eye.js"></script>
    <script type="text/javascript" src="rangePicker/js/utils.js"></script>
    <script type="text/javascript" src="rangePicker/js/layout.js"></script>

    <script type="text/javascript" src="custom/js/jquery-ui.min.js"></script>
    <script type="text/javascript" src="standart/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="custom/js/enscroll-0.6.2.min.js"></script>
    <script type="text/javascript" src="custom/js/scroll.js"></script>
    <script type="text/javascript" src="custom/js/scriptsHostess.js"></script>
    <script type="text/javascript" src="custom/js/modernSelect.js"></script>
    <script type="text/javascript" src="custom/js/hostesRestonHolst.js"></script>

    <script src="datapicker/build/jquery.datetimepicker.full.js"></script>
    <script src="datapicker/nextandprevbuttons.js"></script>
    <script src="transform/js/Matrix.js"></script>
    <script src="transform/js/jquery.freetrans.js"></script>


    <!--datapicker range -->




</head>

<body>
     
    
    
    
    <!-- topMenu&Logo start -->
    
      <header>
          <div class="wrapper__center row">
          <!-- Logo -->
          <div class="templates__logo float__left"></div>
          <!-- topMenu -->
          <div class="top__menu float__right">
                <ul class="top__menu__holder">
                    <li class="top__menu__holder__search">
                        <span class="top__menu__holder__search-btn jsTopMenuFind"></span>
                        <div class="jsSearchField top__menu__search__field" >
                            <input class="" type="text" placeholder="Введите номер тел. или имя">
                            <span class="top__menu__holder__search-btn jsTopMenuFind"></span>
                        </div>
                    </li>
                    <li class="active"><a href="#">Карта</a></li>
                    <li><a href="#">Резервы</a></li>
                    <li><a href="#">Посетители</a></li>
                    <li><a href="#">Отчеты</a></li>
                    <li class="top__menu__options__button"><a href="#"> Настройки</a></li>
                    <li class="top__menu__exit__button"><a href="#"> Выйти</a></li>
                </ul>
          </div>
          </div>
        </header>
   
    <!-- topMenu&Logo end -->
    <!-- mainContainer start -->
    <div class="wrapper__center row">
    

    <div class="row">

            
         <!-- leftMenu -->
         <div class="left_menu">
             
                 <h2 class="page__title custom__before__buttons__left__menu">ПОДКЛЮЧЕНИЕ ПЛАНА ЗАЛА:</h2>
                 
                 <a  class="left__menu__link" href="#" data-toggle="modal" data-target="#modalAddTable">
                     ДОБАВИТЬ СТОЛИК
                 </a>
                 <a  class="left__menu__link" href="#" data-toggle="modal" data-target="#modalAddElem">
                     ДОБАВИТЬ ЭЛЕМЕНТ ИНТЕРЬЕРА
                 </a>
                 <!-- data-toggle="modal" data-target="#modalCloseTable"-->
                 <a  class="left__menu__link jsEditElementMapActive" href="#"  >
                     ИЗМЕНИТЬ ЭЛЕМЕНТ
                 </a>
                 <a  class="left__menu__link jsEditMapActive" href="#">
                     ИЗМЕНИТЬ КАРТУ
                 </a>
                <?php include('elements/orders.php'); ?>
         </div>

        
        
        
        
        
        
        
         <!-- Table -->
        <content class="page__content">
       
          <ul class="map__top__menu">
              <li>
                  <ul class="map__book__info">
                      <li class="r"> - Занят</li>
                       <li class="y"> - Резерв</li>
                       <li class="gn"> - Свободный</li>
                       <li class="gr"> - Не активный</li>
                  </ul>
                 
              </li>
              <li>
                  <a class="btn-blue btn-mid-xt jsDateTimeNow" data-date="#datetimepicker2" data-time="#datetimepicker1" href="#">Сейчас</a>
              </li>
              <li>
                  <p> Дата:</p>
                  <span class="data__picker_before prevButtonDate" data-target="#datetimepicker2"></span>
                  <input class="data__picker" type="text" data-init="data"  id="datetimepicker2" /><span id="datatimepicker2-span" class="data__picker_span"></span>
                  <span class="data__picker_after nextButtonDate" data-target="#datetimepicker2"></span>

              </li>
              <li>
                  <p>Время:</p>
                  <span class="data__picker_before prevButtonTime" data-target="#datetimepicker1"></span>
                  <input class="time__picker" type="text" data-init="hours" id="datetimepicker1" value="20:00"/><span id="datetimepicker1-span" class="time__picker_span"></span>
                  <span class="data__picker_after nextButtonTime" data-target="#datetimepicker1"></span>
              </li>
              <li class="map__top__menu__edit__element jsMapEditElements" style="display: none">
                  <button class="btn-green btn-sm jsControllPanelSaveButton">Сохранить</button>
                  <button class="btn-grey btn-sm jsControllPanelCancelButton">Отмена</button>
                  <button class="btn-grey btn-sm jsDetachPlan"> Удалить план</button>
                  <button class="btn-grey btn-sm jsDetachElement">Удалить елемент</button>
                  <button class="btn-grey btn-sm jsCloseTableFormWiting" data-toggle="modal" data-target="#modalCloseTable" style="display:none">Закрить стол</button>

              </li>
              <li class="map__top__menu__edit__element jsMapEditElementsSEC" style="display: none">
                  <button class="btn-green btn-sm jsControllPanelSaveButtonSEC">Сохранить</button>
                  <button class="btn-grey btn-sm jsControllPanelCancelButtonSEC">Отмена</button>
              </li>
            
            
            
            
          </ul>




            <script>

                jQuery.datetimepicker.setLocale('ru');

                jQuery('#datetimepicker2').datetimepicker({
                    timepicker:false,
                    format:'d.m.Y'
                });
                jQuery('#datetimepicker1').datetimepicker({
                    datepicker:false,
                    format:'H:i'
                });
            </script>




           <?php include('elements/map.php'); ?>
                  
           
        
       </content>  
    </div>  
        
    </div>

     <!-- mainContainer end -->
     
    
    
    
    

<?php include('popups/addNewElement.php'); ?> 
<?php include('popups/addNewTable.php'); ?>
<?php include('popups/editElement.php'); ?>
<?php include('popups/addNewOrder.php'); ?>
<?php include('popups/changeTableForm.php'); ?>
<?php include('popups/editTable.php'); ?>



</body>



</html>

<script type="text/javascript">
    $('#toch').click(function(e){
        e.preventDefault();
        var count = $('.datepickerGoPrev').length;
        if( count > 0){$('.datepickerGoPrev:last').css("display","none");}
        var count = $('.datepickerGoNext').length;
        if( count > 0){$('.datepickerGoNext:first').css("display","none");}
    });
</script>
<script type="text/javascript" src="rangePicker/js/js.js"></script>
