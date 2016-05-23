<?php
/**
 * Created by PhpStorm.
 * User: nataliandre
 * Date: 07.05.16
 * Time: 23:46
 */


?>
<div class="map__holder">
<div class="jsHostesRestonMainHolstHolder">
    <div data-floor="1" data-mode="view" class="jsHostesRestonMainHolst  hostesRestonMainHolst">





            <div data-object="bar" data-idg="1" class="ui-draggable ui-draggable-handle" style="width: 68px; right: auto; height: 38px; bottom: auto; left: 536px; top: 222px;"></div>
            <div data-object="kitchen" data-idg="2" class="ui-draggable ui-draggable-handle" style="width: 56px; right: auto; height: 56px; bottom: auto; left: 122px; top: 352px;"></div>

            <div data-object="wall" data-idg="3" class="" style="width: 7px; right: auto; height: 62px; bottom: auto; left: 581px; top: 373px;"></div>
            <div data-object="wall" data-idg="4" class="" style="width: 7px; right: auto; height: 62px; bottom: auto; left: 582px; top: 308px;"></div>
            <div data-object="stair" data-idg="5" class="" style="width: 75px; right: auto; height: 35px; bottom: auto; left: 171px; top: 135px;"></div>
            <div class="green__point " data-info="Cвободен" data-closer="1" data-idg="10" data-object="table" data-numtable="23" style="width: 100px; right: auto; height: 100px; bottom: auto; left: 428px; top: 366px;"><div>
                    <div data-component="table-rect" data-x="15" data-y="31" style="transform: translate(1px, 31px);"></div>
                    <div data-component="sofa" data-x="25" data-y="28" style="transform: translate(7px, 28px);"></div>
                    <div data-component="sofa" data-x="-17" data-y="-32" style="transform: translate(6px, -35px);"></div>
                </div></div>
            <div class=red__point "  data-info="Забронировано на 18:00"  data-idg="14" data-object="table" data-numtable="45" style="width: 100px; right: auto; height: 100px; bottom: auto; left: 381px; top: 67px;"><div>
                    <div data-component="table-rect" data-x="11" data-y="31" style="transform: translate(11px, 31px);"></div>
                    <div data-component="sofa" data-x="25" data-y="28" style="transform: translate(17px, 28px);"></div>
                    <div data-component="sofa" data-x="-17" data-y="-32" style="transform: translate(16px, -35px);"></div>
                </div></div>




    </div>

<div data-floor="2" style="display: none;"  class="jsHostesRestonMainHolst  hostesRestonMainHolst">

</div>
</div>


<div class="map__floors__holder">

    <ul class="map__floor__menu jsFloorMapMenu">
        <li>
            <a href="#" class="btn-green-spec active jsFloorChange"  data-floor="1"> 1 этаж </a>
        </li>
        <li>
            <a href="#" class="btn-green-spec jsFloorChange" data-floor="2"> 2 этаж </a>
        </li>
        <li class="map__add__plan__type__holder jsTypeOfFlorStop">
            <a href="#" data-next="3"   class="btn-grey-spec jsTypeOfFloor">
            <span class="icon__plus"></span>
            план
            </a>
            <div class="map__add__plan__types jsAddNewFloorHolder"  style="display: none">
                <p class="txt-sm">Тип плана:</p>
                <input type="text" class="jsNewFloorType">
                <p class="txt-sm">Вставить после:</p>
                <ul id="jsAddNewFloor">


                </ul>
            </div>
        </li>
    </ul>

</div>

</div>