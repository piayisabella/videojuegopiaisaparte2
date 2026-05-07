gdjs.menuCode = {};
gdjs.menuCode.localVariables = [];
gdjs.menuCode.idToCallbackMap = new Map();
gdjs.menuCode.GDPurpleButtonWithShadowObjects1= [];
gdjs.menuCode.GDPurpleButtonWithShadowObjects2= [];
gdjs.menuCode.GDNewTiledSpriteObjects1= [];
gdjs.menuCode.GDNewTiledSpriteObjects2= [];
gdjs.menuCode.GDSkeletonObjects1= [];
gdjs.menuCode.GDSkeletonObjects2= [];
gdjs.menuCode.GDSummer_9595BackgroundObjects1= [];
gdjs.menuCode.GDSummer_9595BackgroundObjects2= [];
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595LeftObjects1= [];
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595LeftObjects2= [];
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595RightObjects1= [];
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595RightObjects2= [];
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595CenterObjects1= [];
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595CenterObjects2= [];
gdjs.menuCode.GDTrigger_9595AbajoObjects1= [];
gdjs.menuCode.GDTrigger_9595AbajoObjects2= [];
gdjs.menuCode.GDTrigger_9595ArribaObjects1= [];
gdjs.menuCode.GDTrigger_9595ArribaObjects2= [];
gdjs.menuCode.GDTrigger_9595DerechaObjects1= [];
gdjs.menuCode.GDTrigger_9595DerechaObjects2= [];
gdjs.menuCode.GDTrigger_9595IzquierdaObjects1= [];
gdjs.menuCode.GDTrigger_9595IzquierdaObjects2= [];
gdjs.menuCode.GDAREARIESGOObjects1= [];
gdjs.menuCode.GDAREARIESGOObjects2= [];
gdjs.menuCode.GDGold_9595CoinObjects1= [];
gdjs.menuCode.GDGold_9595CoinObjects2= [];
gdjs.menuCode.GDTITULO_9595SUBVIDAObjects1= [];
gdjs.menuCode.GDTITULO_9595SUBVIDAObjects2= [];
gdjs.menuCode.GDTXT_9595SUBVIDAObjects1= [];
gdjs.menuCode.GDTXT_9595SUBVIDAObjects2= [];
gdjs.menuCode.GDTXT_9595MONEDASObjects1= [];
gdjs.menuCode.GDTXT_9595MONEDASObjects2= [];


gdjs.menuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithShadow"), gdjs.menuCode.GDPurpleButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDPurpleButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDPurpleButtonWithShadowObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDPurpleButtonWithShadowObjects1[k] = gdjs.menuCode.GDPurpleButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDPurpleButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "escena1", true);
}
}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDPurpleButtonWithShadowObjects1.length = 0;
gdjs.menuCode.GDPurpleButtonWithShadowObjects2.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.menuCode.GDSkeletonObjects1.length = 0;
gdjs.menuCode.GDSkeletonObjects2.length = 0;
gdjs.menuCode.GDSummer_9595BackgroundObjects1.length = 0;
gdjs.menuCode.GDSummer_9595BackgroundObjects2.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595LeftObjects1.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595LeftObjects2.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595RightObjects1.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595RightObjects2.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595CenterObjects1.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595CenterObjects2.length = 0;
gdjs.menuCode.GDTrigger_9595AbajoObjects1.length = 0;
gdjs.menuCode.GDTrigger_9595AbajoObjects2.length = 0;
gdjs.menuCode.GDTrigger_9595ArribaObjects1.length = 0;
gdjs.menuCode.GDTrigger_9595ArribaObjects2.length = 0;
gdjs.menuCode.GDTrigger_9595DerechaObjects1.length = 0;
gdjs.menuCode.GDTrigger_9595DerechaObjects2.length = 0;
gdjs.menuCode.GDTrigger_9595IzquierdaObjects1.length = 0;
gdjs.menuCode.GDTrigger_9595IzquierdaObjects2.length = 0;
gdjs.menuCode.GDAREARIESGOObjects1.length = 0;
gdjs.menuCode.GDAREARIESGOObjects2.length = 0;
gdjs.menuCode.GDGold_9595CoinObjects1.length = 0;
gdjs.menuCode.GDGold_9595CoinObjects2.length = 0;
gdjs.menuCode.GDTITULO_9595SUBVIDAObjects1.length = 0;
gdjs.menuCode.GDTITULO_9595SUBVIDAObjects2.length = 0;
gdjs.menuCode.GDTXT_9595SUBVIDAObjects1.length = 0;
gdjs.menuCode.GDTXT_9595SUBVIDAObjects2.length = 0;
gdjs.menuCode.GDTXT_9595MONEDASObjects1.length = 0;
gdjs.menuCode.GDTXT_9595MONEDASObjects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);
gdjs.menuCode.GDPurpleButtonWithShadowObjects1.length = 0;
gdjs.menuCode.GDPurpleButtonWithShadowObjects2.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.menuCode.GDSkeletonObjects1.length = 0;
gdjs.menuCode.GDSkeletonObjects2.length = 0;
gdjs.menuCode.GDSummer_9595BackgroundObjects1.length = 0;
gdjs.menuCode.GDSummer_9595BackgroundObjects2.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595LeftObjects1.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595LeftObjects2.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595RightObjects1.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595RightObjects2.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595CenterObjects1.length = 0;
gdjs.menuCode.GDSummer_9595Tile_9595Platform_9595CenterObjects2.length = 0;
gdjs.menuCode.GDTrigger_9595AbajoObjects1.length = 0;
gdjs.menuCode.GDTrigger_9595AbajoObjects2.length = 0;
gdjs.menuCode.GDTrigger_9595ArribaObjects1.length = 0;
gdjs.menuCode.GDTrigger_9595ArribaObjects2.length = 0;
gdjs.menuCode.GDTrigger_9595DerechaObjects1.length = 0;
gdjs.menuCode.GDTrigger_9595DerechaObjects2.length = 0;
gdjs.menuCode.GDTrigger_9595IzquierdaObjects1.length = 0;
gdjs.menuCode.GDTrigger_9595IzquierdaObjects2.length = 0;
gdjs.menuCode.GDAREARIESGOObjects1.length = 0;
gdjs.menuCode.GDAREARIESGOObjects2.length = 0;
gdjs.menuCode.GDGold_9595CoinObjects1.length = 0;
gdjs.menuCode.GDGold_9595CoinObjects2.length = 0;
gdjs.menuCode.GDTITULO_9595SUBVIDAObjects1.length = 0;
gdjs.menuCode.GDTITULO_9595SUBVIDAObjects2.length = 0;
gdjs.menuCode.GDTXT_9595SUBVIDAObjects1.length = 0;
gdjs.menuCode.GDTXT_9595SUBVIDAObjects2.length = 0;
gdjs.menuCode.GDTXT_9595MONEDASObjects1.length = 0;
gdjs.menuCode.GDTXT_9595MONEDASObjects2.length = 0;


return;

}

gdjs['menuCode'] = gdjs.menuCode;
