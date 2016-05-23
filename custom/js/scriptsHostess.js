
$(document).ready(function(){
    init();

    window.gloabalTransformKonfigArray = new Array();


    /*config*/
window.elementSearch = $('.jsTopMenuFind');
window.targetElementSearch = $('.jsSearchField');
window.targetElementSearchIco = $('.top__menu__search__field__ico');
    
    
    window.selectElement = $('.jsElementsEditForm').children('li').children('div');
    window.selectTableComponent = $('.jsTableComponentsHolders').children('li').children('div');
    window.editTableHolst = $('.jsEditTableHolst');
    window.modalEditTable = $('#modalEditTable');
    window.OpenTableEditWindow = $('.jsOpenTableEditWindow');
    window.selectTableForm = $('.jsSelectTableForm').children('li').children('div');
    window.saveComponentsSubmit = $('.jsSaveComponentsSubmit');
    window.selectElementSubmit = $('#jsSelectElementSubmit');
    window.selectElementModal = $('#modalAddElem');


    /*memory */
    window.stackOfFloorsInThePage = new Array();




    window.globalElementIdRegister = 0;
    $('.jsHostesRestonMainHolst > div').each(function(){
        var idG = $(this).attr('data-idG');
        console.log(idG);
        if(idG > window.globalElementIdRegister){
            window.globalElementIdRegister  = idG;
        }
    });




    window.elementsInTable = $('.jsHostesRestonMainHolst > div');

    window.tableExample = {
        "data-sysId": "1",
        "data-html": "<div data-object='table' ></div>",
        "data-chairs": "2",
        "data-sofas": "3"
    };

    window.dragHolstConfig = {
        disabled: true,
        snap: ".div",
        snapMode: "outer",
        snapTolerance: 40,
        drag:function(){
            check=false;
        },
        stop: function() {
            check=true;
        },
        containment: ".jsHostesRestonMainHolst",
    };


    function initDraggble(){
        window.dragHolstConfig.disabled = false;
        $(".jsHostesRestonMainHolst").each(function(){
            var floor = $(this).attr('data-floor');

            window.dragHolstConfig.containment = ".jsHostesRestonMainHolst[data-floor=\""+floor+"\"]";
            $(".jsHostesRestonMainHolst[data-floor=\""+floor+"\"] > div").draggable(window.dragHolstConfig);
        });
    }

    function deactiveDraggble(){
        window.dragHolstConfig.disabled = true;
        $(".jsHostesRestonMainHolst").each(function(){
            var floor = $(this).attr('data-floor');

            window.dragHolstConfig.containment = ".jsHostesRestonMainHolst[data-floor=\""+floor+"\"]";
            //$(".jsHostesRestonMainHolst[data-floor=\""+floor+"\"] div").draggable(window.dragHolstConfig);
            $(this).children('div').removeClass('ui-draggable').removeClass('ui-draggable-handle');
        });
    }

    window.floorChangeClass = $('.jsFloorChange');
    window.activeFloor = 1;
    window.restonMapsHolder = $('.jsHostesRestonMainHolstHolder');
    window.restonMaps = $('.jsHostesRestonMainHolst');
    window.restonMapsClass = '.jsHostesRestonMainHolst';
    window.floorMapMenu = $('.jsFloorMapMenu');
    function displayMapsBuyFloor(){
        $('.jsHostesRestonMainHolst').each(function(){
            var floor = $(this).attr('data-floor');
            if(floor !=  window.activeFloor ){$(this).hide();}
            else{$(this).show();}
        });
    };


   // window.elementsInTable.resizable();
 //   window.elementsInTable.draggable();
   // window.elementsInTable.resizable( "disable" );

    window.restonMaps = $('.jsHostesRestonMainHolst');
    window.floorChangeClass = $('.jsFloorChange');


    /**
     *
     */
    window.floorChangeClass.click(function(e){
        e.preventDefault();
        var activatedFloor = $(this).attr('data-floor');
        if(activatedFloor != window.activeFloor){
            window.floorChangeClass.removeClass('active');
            $(this).addClass('active');
            window.activeFloor = activatedFloor;
            displayMapsBuyFloor();
        }
    });
    window.addNewFloorHolder = $('#jsAddNewFloor');
    window.addNewFloorButton = $('#jsAddNewFloor li');
    window.selectTypeOfFloor = $('.jsTypeOfFloor');
    window.selectTypeOfFloor.click(function(e){
        e.stopPropagation();
        e.preventDefault();
        $('.jsAddNewFloorHolder').show();
        window.addNewFloorHolder.html('');
        window.floorMapMenu.children('li').each(function(){
            if(!$(this).hasClass('jsTypeOfFlorStop')){
                var title = $(this).children('a').html();
                var floor  = $(this).children('a').attr('data-floor');
                $('#jsAddNewFloor').append('<li data-after="'+floor+'">'+title+'</li>');
            }
        });

        window.addNewFloorHolder.children('li').bind('click',function(e){
            e.stopPropagation();
            addNewFloorHolst(this,e);
        });
    });

    $('.jsNewFloorType').click(function(e){
        e.stopPropagation();
    })


    // add new floor event
    window.addNewFloorButton.click(function(e){
        addNewFloorHolst(this,e)
    });

    function addNewFloorHolst(obj,e){
        e.preventDefault();
        var next = window.selectTypeOfFloor.attr('data-next');
        var title  = $('.jsNewFloorType').val();
        var display = 'none';
        if(ifNoActivePlan()){
            display = 'block';
        }
        window.restonMapsHolder.append('<div data-floor="'+next+'" style="display: '+display+';"  class="jsHostesRestonMainHolst  hostesRestonMainHolst"></div>');

        var position = $(obj).attr('data-after');
        var prevObjINt  = parseInt(window.floorMapMenu.find('[data-floor="'+position+'"]').attr('data-floor'));
        var addTilteCount = '';
        if(prevObjINt !== undefined && (title==='этаж' || title==='')){
            addTilteCount = prevObjINt+1;
            if(title === ''){
                title = 'этаж';
            }
        }
        var add = next;
        next++;



        window.selectTypeOfFloor .attr('data-next',next);
        var active = '';
        if(ifNoActivePlan()){
            active = 'active';
        }
        window.floorMapMenu.find('[data-floor="'+position+'"]').parent('li').after('<li><a href="#" class="btn-green-spec '+active+' jsFloorChange" data-floor="'+add+'"> '+addTilteCount+' '+title+' </a> </li>');
        // bind floor select click
        $('[data-floor="'+add+'"]').bind('click',function(e){
            e.preventDefault();
            var activatedFloor = $(this).attr('data-floor');
            if(activatedFloor != window.activeFloor){
                $('.jsFloorChange').removeClass('active');
                $(this).addClass('active');
                window.activeFloor = activatedFloor;
                displayMapsBuyFloor();
            }
        });
        $('.jsAddNewFloorHolder').hide();
    }



    window.editModeActiveButton = $('.jsEditMapActive');
    window.editElementMapActive = $('.jsEditElementMapActive');
    window.editModeActiveButton.click(function(e){
        e.preventDefault();
        $('.jsMapEditElementsSEC').hide();
        window.editElementMapActive.removeClass('active');
        removeTransformObjects();
        if($(this).hasClass('active')){
            $('.jsMapEditElements').hide();
            deactiveDraggble();
            cancelHolstChanges();
            window.ordersOpener.bind('dblclick',function(){ordersOpenerClick(this);});
            $('.jsHostesRestonMainHolst > div').unbind('click');
        }else{
            $('.jsHostesRestonMainHolst > div').bind('click',function(){removeObjFromHolst(this)});
            window.ordersOpener.unbind('dblclick');
            deactivateNumsAndDescription();
            initHolstChanges();
            initDraggble();
            $('.jsMapEditElements').show();

        }
        $(this).toggleClass('active');


    });

    //controll Panel Save Function
    $('.jsControllPanelSaveButton').click(function(){
        deactiveDraggble();
        $('.jsMapEditElements').hide();
        window.editModeActiveButton.removeClass('active');
        saveChangesDeleteFloors();
        activateNumsAndDescriptions();
        window.ordersOpener.bind('dblclick',function(){ordersOpenerClick(this);});
        $('.jsHostesRestonMainHolst > div').unbind('click');
    });

    //controll Panel Save Function
    $('.jsControllPanelCancelButton').click(function(){
        deactiveDraggble();
        $('.jsMapEditElements').hide();
        window.editModeActiveButton.removeClass('active');
        cancelHolstChanges();

        window.ordersOpener.bind('dblclick',function(){ordersOpenerClick(this);});
        $('.jsHostesRestonMainHolst > div').unbind('click');
    });

    //controll Panel Cancel Function
    $('.jsControllPanelCancelButtonSEC').click(function(){
        removeTransformObjects();
        cancelHolstChanges();
        $('.jsMapEditElementsSEC').hide();
        window.editElementMapActive.removeClass('active');
        window.ordersOpener.bind('dblclick',function(){ordersOpenerClick(this);});
        $('.jsHostesRestonMainHolst > div').unbind('click');
    });


    //controll Panel Save Function
    $('.jsControllPanelSaveButtonSEC').click(function(){
        removeTransformObjects();
        $('.jsMapEditElementsSEC').hide();
        window.editElementMapActive.removeClass('active');
        saveChangesDeleteFloors();
        activateNumsAndDescriptions();
        window.ordersOpener.bind('dblclick',function(){ordersOpenerClick(this);});
        $('.jsHostesRestonMainHolst > div').unbind('click');
    });


    //controll Panel delete element
    $('.jsDetachElement').click(function(){
        var remove = $(this).attr('data-remove');
        if(remove !== undefined){
            $('div[data-idG="'+remove+'"]').remove();
        }
    });



    function removeObjFromHolst(obj){

        var idG = $(obj).attr('data-idG');
        if($(obj).attr('data-object') == 'table'){
            $('.jsCloseTableFormWiting').show();
        }else{
            $('.jsCloseTableFormWiting').hide();
        }
        $('.jsDetachElement').attr('data-remove',idG);
    }


    function initTransformObjects(){
        $('.jsHostesRestonMainHolst').children('div').each(function(){

            var config = {
                y : parseInt($(this).css('top')),
                x : parseInt($(this).css('left'))
            };
            var idG = $(this).attr('data-idG');
            if(window.gloabalTransformKonfigArray.length != 0){
                    config =  window.gloabalTransformKonfigArray[idG];
                    config.x = parseInt($(this).css('left'));
                    config.y = parseInt($(this).css('top'));
            }
            console.log(config);
            $(this).css('bottom','none').css('right','none');
            $(this).css('position','relative');
            $(this).freetrans(config);

        });
    }
    function removeTransformObjects(){
        $('.jsHostesRestonMainHolst > div.ft-container').each(function() {
            var idG = $(this).children('[data-object]').attr('data-idG');
            window.gloabalTransformKonfigArray[idG] = $(this).children('[data-object]').freetrans('getOptions');
            $(this).children('.ft-controls').remove();
            var div = $(this).html();
            $(this).parent().append(div);
            $(this).remove();
        });

    }

    function deactivateNumsAndDescription(){
        $('.jsHostesRestonMainHolst [data-object="table"]').addClass('with-num');
        $('.num-object').remove();
        $('.desc-object').remove();
    }

    function refreshNumsAndDescriptions(){
        deactivateNumsAndDescription();
        activateNumsAndDescriptions();
    }

    function activateNumsAndDescriptions(){
        $('.jsHostesRestonMainHolst [data-object="table"]').removeClass('with-num');
        $('.jsHostesRestonMainHolst [data-object]').each(function(){
            var type = $(this).attr('data-object');
            if(type === 'table'){
                var num = $(this).attr('data-numtable');
                var info = $(this).attr('data-info');
                var floor = $(this).parent('.jsHostesRestonMainHolst').attr('data-floor');
                var offset = {
                    'top': $(this).css('top'),
                    'left': $(this).css('left'),
                    'bottom' : (parseInt($(this).css('top'))+parseInt($(this).css('height')))+"px",
                    'right' :  (parseInt($(this).css('left'))+ parseInt($(this).css('width')))+"px"
                };
                var size = {
                    'w' : $(this).css('width'),
                    'h' : $(this).css('height')
                };
                var stringOffset = "left:"+offset.left+"; top: "+offset.top+"; bottom: "+offset.bottom+"; right: "+offset.right+"; height: "+size.h+"; width: "+size.w;
                var objectNum  = '<div class="num-object" style="'+stringOffset+'">'+num+'</div>';
                var objectInfo = '<div class="desc-object" style="'+stringOffset+'" data-info="'+info+'"></div>';
                if(!$(this).hasClass('no-avalible')){
                    $('.jsHostesRestonMainHolst[data-floor="'+floor+'"]').append(objectInfo);
                }
                $('.jsHostesRestonMainHolst[data-floor="'+floor+'"]').append(objectNum);
            }
        });
    }




    window.elementForEdit = $('.jsHostesRestonMainHolst[data-mode="editElement"] div');
   // window.elementEditForm = $('.jsElementsEditForm');

    window.editElementMapActive.click(function(e){
        e.preventDefault();
        $('.jsMapEditElements').hide();
        window.dragHolstConfig.disabled = true;
        window.elementsInTable.draggable(window.dragHolstConfig);
        if($(this).hasClass('active')){
            removeTransformObjects();
            cancelHolstChanges();

            $('.jsMapEditElementsSEC').hide();
        }else{
            deactivateNumsAndDescription();
            initHolstChanges();
            initTransformObjects();

            $('.jsMapEditElementsSEC').show();
        }
        $(this).toggleClass('active');
        if(window.editModeActiveButton.hasClass('active')){
            window.editModeActiveButton.removeClass('active');
            deactiveDraggble();
        }

    });

    /*functions */
    window.elementSearch.click(function(){window.targetElementSearch.toggleClass('active');window.targetElementSearchIco.toggleClass('active');});

    window.selectElement.click(function(){
        window.selectElement.removeClass('active');$(this).toggleClass('active');
        var type = $(this).children('div').attr('data-object');
        var idG = window.globalElementIdRegister+1;
        var element = '<div data-object="';
        element+= type;
        element+= '" data-idG="';
        element+= idG+'" ></div>';
        window.htmlElementsHolder = element;
    });

    window.selectElementSubmit.click(function(){
        if(window.editModeActiveButton.hasClass('active')){
            window.editModeActiveButton.click();
        }
        if( window.editElementMapActive.hasClass('active')){
            window.editElementMapActive.click();
        }
        window.selectElementModal.modal('hide');
        window.globalElementIdRegister++;

        $(window.restonMapsClass+'[data-floor="'+window.activeFloor+'"]').append(window.htmlElementsHolder);
        window.elementsInTable = $('.jsHostesRestonMainHolst > div');
    });

    window.OpenTableEditWindow.click(function () {
        var idTE  = $(this).attr('data-idTE');
        window.currentWindowChangeElementIdTE = idTE;
        console.log('init:'+window.currentWindowChangeElementIdTE);
        var tableBody = $('.jsDataTablePreview[data-idTE="'+idTE+'"]').html();
        var tableForm = $('.jsDataTablePreview[data-idTE="'+idTE+'"]').attr('data-table-type');
        $('.jsTableFormInTableFormModal').html(tableForm);
        window.saveComponentsSubmit.attr('data-table-type',$('.jsDataTablePreview[data-idTE="'+idTE+'"]').attr('data-table-type'));
        window.modalEditTable.modal('show');
        window.editTableHolst.html(tableBody);
        $('.jsEditTableHolst').children('div').bind('click',function(){
            window.editTableFreeObject = this;
        });
    });

    window.selectTableComponent.click(function(){
        var type = $(this).children('div').attr('data-component');
        if(type!="chair" && type!="sofa") {
            $('.jsEditTableHolst [data-component*="table"]').remove();
            var title = $(this).attr('data-type');
            window.saveComponentsSubmit.attr('data-table-type',title);
        }
        window.dragHolstConfig.disabled = true;

        $('.jsEditTableHolst div').draggable(window.dragHolstConfig);
        var toggleComponent = '<div data-component="'+type+'"></div>';
        window.editTableHolst.append(toggleComponent);
        $('.jsEditTableHolst').children('div').bind('click',function(){
            window.editTableFreeObject = this;
        });
    });

    window.saveComponentsSubmit.click(function (e) {
        e.preventDefault();
        window.modalEditTable.modal('hide');
        var idTE = window.currentWindowChangeElementIdTE;
        console.log('save:'+window.currentWindowChangeElementIdTE);
        removeTransformObjectsComp();
        deactiveDraggbleComp(window.editTableFreeObject);
        $('.jsDataTablePreview[data-idTE="'+idTE+'"]').html(window.editTableHolst.html());
        $('.jsDataTablePreview[data-idTE="'+idTE+'"]').attr('data-table-type',$(this).attr('data-table-type'));
        $('[data-toggle="count-divan"][data-idTE="'+idTE+'"]').html(window.editTableHolst.children('[data-component="sofa"]').length);
        $('[data-toggle="count-stul"][data-idTE="'+idTE+'"]').html(window.editTableHolst.children('[data-component="chair"]').length);
    });
    window.selectComponentsSubmit = $('.jsSelectFormSubmit');
    window.selectTableForm.click(function () {
        window.selectTableForm.removeClass('active');
        $(this).addClass('active');
        window.objectBuffer  = $(this).html();
        window.selectComponentsSubmit.attr('data-table-type',$(this).attr('data-table-type'));
    });


    window.changeTableFormModal = $('#changeTableForm');
    window.tablePreview = $('.jsTypeTablePreviewAddModal');
    window.selectComponentsSubmit.click(function(){
        window.changeTableFormModal.modal('hide');
        window.tablePreview.html(window.objectBuffer);

        $('#jsTypeTableAddModal span').html($(this).attr('data-table-type'));
    });



    window.addNewTableFormSubmit = $('.jsAddNewTableSubmit');
    window.modalAddNewTable = $('#modalAddTable');
    window.addNewTableFormSubmit.click(function(){

        if(window.editModeActiveButton.hasClass('active')){
            window.editModeActiveButton.click();
        }
        if( window.editElementMapActive.hasClass('active')){
            window.editElementMapActive.click();
        }
        var element = window.objectBuffer;
        window.objectBuffer = '';
        window.tablePreview.html('');

        var numTable = $('.jsInputNumTable').val();
        $('.jsInputNumTable').val('');
        $('.jsPlacesCountAddTableForm').val('');

        var htmlElement = '<div data-idG="'+window.globalElementIdRegister+'" class="no-avalible" data-object="table" data-numTable="'+numTable+'">'+element+'</div>';
        $(window.restonMapsClass+'[data-floor="'+window.activeFloor+'"]').append(htmlElement);
        $('[data-idG="'+window.globalElementIdRegister+'"]').resizable();
        window.elementsInTable = $('.jsHostesRestonMainHolst > div');
        window.globalElementIdRegister++;
        window.modalAddNewTable.modal('hide');
        $('#jsTypeTableAddModal > span').html('не выбрано');
        $('.jsTextDescription').html('');

    });

    /**
     *
     */
    function init(){
        activateNumsAndDescriptions();

    }

    window.orderSection = $('.jsOrderSection');
    window.orderSection.click(function(){
        var num = $(this).attr('data-order-num');
        $(this).hide();
        $('.jsOrderSectionDetail[data-order-num="'+num+'"]').show();
    });

    $('.jsOrderSectionDetail .jsCloseOrderDetail').click(function(){
        var num = $(this).attr('data-order-num');
        $('.jsOrderSectionDetail[data-order-num="'+num+'"]').hide();
        $('.jsOrderSection[data-order-num="'+num+'"]').show();
    });

    window.orderSectionHolder = $('.jsOrderSectionHolder');
    //window.orderSectionHolder.hide();
    window.ordersOpener = $('[data-object="table"]');
    window.ordersOpener.on('dblclick',function(){
        ordersOpenerClick(this);
    });

    function ordersOpenerClick(obj){
        var tableNum = $(obj).attr('data-numtable');
        if(tableNum != undefined){
            window.orderSectionHolder.show();
            window.orderSection.hide();
            $('.jsOrderSectionDetail').hide();
            $('.jsOrderSectionDetail[data-table-num-order="'+tableNum+'"]').first().show();

        }
    }


    function initHolstChanges(){
        $('.jsHostesRestonMainHolst').each(function(){
            window.stackOfFloorsInThePage[$(this).attr('data-floor')] = $(this).html();
        });
    }

    function cancelHolstChanges(){
        $.each(window.stackOfFloorsInThePage,function(iter,val){
            $('.jsHostesRestonMainHolst[data-floor="'+iter+'"]').html(val);
            $('.jsFloorChange[data-floor="'+iter+'"]').show();
            $('.jsHostesRestonMainHolst[data-floor="'+iter+'"]').children('div').each(function(){
               $(this).bind('click',function(){removeObjFromHolst(this)});
            });

        });
    }

    function saveChangesDeleteFloors(){
        $('.jsFloorChange').each(function(){
            if($(this).css('display') === 'none'){
                var floor = $(this).attr('data-floor');
                $('.jsFloorChange[data-floor="'+floor+'"]').remove();
                $('.jsHostesRestonMainHolst[data-floor="'+floor+'"]').remove();
            }
        });
    }

    //remove Ho;st
    $('.jsDetachPlan').click(function(){
        removeHolst();
        switchNext();
    });


    function removeHolst(){
        $('.jsHostesRestonMainHolst[data-floor="'+window.activeFloor+'"]').hide();
        $('.jsFloorChange[data-floor="'+window.activeFloor+'"]').hide().removeClass('active');
    }


    function switchNext(){
        window.activeFloor ++;
        $('.jsHostesRestonMainHolst[data-floor="'+window.activeFloor+'"]').show();
        $('.jsFloorChange[data-floor="'+window.activeFloor+'"]').addClass('active');
    }

    function ifNoActivePlan(){
        var no = true;
        $('.jsHostesRestonMainHolst').each(function(){
           if($(this).css('display') !== 'none'){ no = false;}
        });
        return no;
    }





    /** function for edit table */
    window.editTableFreeObject;
    $('.jsEditTableHolst').children('div').click(function(){
        window.editTableFreeObject = this;
    });




    $('.jsEditTableShape').click(function(){
            removeTransformObjectsComp();
        initDraggbleComp(window.editTableFreeObject);
    });

    $('.jsEditTransformTableShape').click(function(){
        deactiveDraggbleComp(window.editTableFreeObject);
        initTransformObjectsComp(window.editTableFreeObject);
    });

    $('.jsDeleteTransformTableShape').click(function(){
        removeObjFromHolstComp(window.editTableFreeObject)
    });


    function initDraggbleComp(obj){
        window.dragHolstConfig.disabled = false;
        window.dragHolstConfig.containment = $(obj).parent();
        $(obj).draggable(window.dragHolstConfig);

    }

    function deactiveDraggbleComp(obj){
        window.dragHolstConfig.containment = $(obj).parent();
        $(obj).removeClass('ui-draggable').removeClass('ui-draggable-handle');
    }

    function removeObjFromHolstComp(obj){
        var comp = $(obj).attr('data-component');
        if(comp=='chair'){}
        $(obj).remove();
    }


    function initTransformObjectsComp(obj){
            var config = {
                y : parseInt($(obj).css('top')),
                x : parseInt($(obj).css('left'))
            };
            $(obj).css('bottom','none').css('right','none');
            $(obj).css('position','relative');
            $(obj).freetrans(config);
    }
    function removeTransformObjectsComp(){
            $('.jsEditTableHolst').children('.ft-container').children('.ft-controls').remove();
            var div = $('.jsEditTableHolst').children('.ft-container').html();
            $('.jsEditTableHolst').append(div);
            $('.jsEditTableHolst').children('.ft-container').remove();
            $('.jsEditTableHolst').children('div').bind('click',function(){
                window.editTableFreeObject = this;

            });
    }




    $('html').click(function(){
        $('.jsAddNewFloorHolder').hide();

    })




});
