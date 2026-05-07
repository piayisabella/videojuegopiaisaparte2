gdjs.gameoverCode = {};
gdjs.gameoverCode.localVariables = [];
gdjs.gameoverCode.idToCallbackMap = new Map();
gdjs.gameoverCode.GDPurpleButtonWithStoneFrameObjects1= [];
gdjs.gameoverCode.GDPurpleButtonWithStoneFrameObjects2= [];
gdjs.gameoverCode.GDNewTiledSpriteObjects1= [];
gdjs.gameoverCode.GDNewTiledSpriteObjects2= [];
gdjs.gameoverCode.GDSkeletonObjects1= [];
gdjs.gameoverCode.GDSkeletonObjects2= [];
gdjs.gameoverCode.GDSummer_9595BackgroundObjects1= [];
gdjs.gameoverCode.GDSummer_9595BackgroundObjects2= [];
gdjs.gameoverCode.GDSummer_9595Tile_9595Platform_9595LeftObjects1= [];
gdjs.gameoverCode.GDSummer_9595Tile_9595Platform_9595LeftObjects2= [];
gdjs.gameoverCode.GDSummer_9595Tile_9595Platform_9595RightObjects1= [];
gdjs.gameoverCode.GDSummer_9595Tile_9595Platform_9595RightObjects2= [];
gdjs.gameoverCode.GDSummer_9595Tile_9595Platform_9595CenterObjects1= [];
gdjs.gameoverCode.GDSummer_9595Tile_9595Platform_9595CenterObjects2= [];
gdjs.gameoverCode.GDTrigger_9595AbajoObjects1= [];
gdjs.gameoverCode.GDTrigger_9595AbajoObjects2= [];
gdjs.gameoverCode.GDTrigger_9595ArribaObjects1= [];
gdjs.gameoverCode.GDTrigger_9595ArribaObjects2= [];
gdjs.gameoverCode.GDTrigger_9595DerechaObjects1= [];
gdjs.gameoverCode.GDTrigger_9595DerechaObjects2= [];
gdjs.gameoverCode.GDTrigger_9595IzquierdaObjects1= [];
gdjs.gameoverCode.GDTrigger_9595IzquierdaObjects2= [];
gdjs.gameoverCode.GDAREARIESGOObjects1= [];
gdjs.gameoverCode.GDAREARIESGOObjects2= [];
gdjs.gameoverCode.GDGold_9595CoinObjects1= [];
gdjs.gameoverCode.GDGold_9595CoinObjects2= [];
gdjs.gameoverCode.GDTITULO_9595SUBVIDAObjects1= [];
gdjs.gameoverCode.GDTITULO_9595SUBVIDAObjects2= [];
gdjs.gameoverCode.GDTXT_9595SUBVIDAObjects1= [];
gdjs.gameoverCode.GDTXT_9595SUBVIDAObjects2= [];
gdjs.gameoverCode.GDTXT_9595MONEDASObjects1= [];
gdjs.gameoverCode.GDTXT_9595MONEDASObjects2= [];


gdjs.gameoverCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithStoneFrame"), gdjs.gameoverCode.GDPurpleButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameoverCode.GDPurpleButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.gameoverCode.GDPurpleButtonWithStoneFrameObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.gameoverCode.GDPurpleButtonWithStoneFrameObjects1[k] = gdjs.gameoverCode.GDPurpleButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.gameoverCode.GDPurpleButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", true);
}
}

}


};

gdjs.gameoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameoverCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.gameoverCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.gameoverCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.gameoverCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.gameoverCode.GDSkeletonObjects1.length = 0;
gdjs.gameoverCode.GDSkeletonObjects2.length = 0;
gdjs.gameoverCode.GDSummer_9595BackgroundObjects1.length = 0;
gdjs.gameoverCode.GDSummer_9595BackgroundObjects2.length = 0;
gdjs.gameoverCode.GDSummer_9595Tile_9595Platform_9595LeftObjects1.length = 0;
gdjs.gameoverCode.GDSummer_9595Tile_9595Platform_9595LeftObjects2.length = 0;
gdjs.gameoverCode.GDSummer_9595Tile_9595Platform_9595RightObjects1.length = 0;
gdjs.gameoverCode.GDSummer_9595Tile_9595Platform_9595RightObjects2.length = 0;
gdjs.gameoverCode.GDSummer_9595Tile_9595Platform_9595CenterObjects1.length = 0;
gdjs.gameoverCode.GDSummer_9595Tile_9595Platform_9595CenterObjects2.length = 0;
gdjs.gameoverCode.GDTrigger_9595AbajoObjects1.length = 0;
gdjs.gameoverCode.GDTrigger_9595AbajoObjects2.length = 0;
gdjs.gameoverCode.GDTrigger_9595ArribaObjects1.length = 0;
gdjs.gameoverCode.GDTrigger_9595ArribaObjects2.length = 0;
gdjs.gameoverCode.GDTrigger_9595DerechaObjects1.length = 0;
gdjs.gameoverCode.GDTrigger_9595DerechaObjects2.length = 0;
gdjs.gameoverCode.GDTrigger_9595IzquierdaObjects1.length = 0;
gdjs.gameoverCode.GDTrigger_9595IzquierdaObjects2.length = 0;
gdjs.gameoverCode.GDAREARIESGOObjects1.length = 0;
gdjs.gameoverCode.GDAREARIESGOObjects2.length = 0;
gdjs.gameoverCode.GDGold_9595CoinObjects1.length = 0;
gdjs.gameoverCode.GDGold_9595CoinObjects2.length = 0;
gdjs.gameoverCode.GDTITULO_9595SUBVIDAObjects1.length = 0;
gdjs.gameoverCode.GDTITULO_9595SUBVIDAObjects2.length = 0;
gdjs.gameoverCode.GDTXT_9595SUBVIDAObjects1.length = 0;
gdjs.gameoverCode.GDTXT_9595SUBVIDAObjects2.length = 0;
gdjs.gameoverCode.GDTXT_9595MONEDASObjects1.length = 0;
gdjs.gameoverCode.GDTXT_9595MONEDASObjects2.length = 0;

gdjs.gameoverCode.eventsList0(runtimeScene);
gdjs.gameoverCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.gameoverCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.gameoverCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.gameoverCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.gameoverCode.GDSkeletonObjects1.length = 0;
gdjs.gameoverCode.GDSkeletonObjects2.length = 0;
gdjs.gameoverCode.GDSummer_9595BackgroundObjects1.length = 0;
gdjs.gameoverCode.GDSummer_9595BackgroundObjects2.length = 0;
gdjs.gameoverCode.GDSummer_9595Tile_9595Platform_9595LeftObjects1.length = 0;
gdjs.gameoverCode.GDSummer_9595Tile_9595Platform_9595LeftObjects2.length = 0;
gdjs.gameoverCode.GDSummer_9595Tile_9595Platform_9595RightObjects1.length = 0;
gdjs.gameoverCode.GDSummer_9595Tile_9595Platform_9595RightObjects2.length = 0;
gdjs.gameoverCode.GDSummer_9595Tile_9595Platform_9595CenterObjects1.length = 0;
gdjs.gameoverCode.GDSummer_9595Tile_9595Platform_9595CenterObjects2.length = 0;
gdjs.gameoverCode.GDTrigger_9595AbajoObjects1.length = 0;
gdjs.gameoverCode.GDTrigger_9595AbajoObjects2.length = 0;
gdjs.gameoverCode.GDTrigger_9595ArribaObjects1.length = 0;
gdjs.gameoverCode.GDTrigger_9595ArribaObjects2.length = 0;
gdjs.gameoverCode.GDTrigger_9595DerechaObjects1.length = 0;
gdjs.gameoverCode.GDTrigger_9595DerechaObjects2.length = 0;
gdjs.gameoverCode.GDTrigger_9595IzquierdaObjects1.length = 0;
gdjs.gameoverCode.GDTrigger_9595IzquierdaObjects2.length = 0;
gdjs.gameoverCode.GDAREARIESGOObjects1.length = 0;
gdjs.gameoverCode.GDAREARIESGOObjects2.length = 0;
gdjs.gameoverCode.GDGold_9595CoinObjects1.length = 0;
gdjs.gameoverCode.GDGold_9595CoinObjects2.length = 0;
gdjs.gameoverCode.GDTITULO_9595SUBVIDAObjects1.length = 0;
gdjs.gameoverCode.GDTITULO_9595SUBVIDAObjects2.length = 0;
gdjs.gameoverCode.GDTXT_9595SUBVIDAObjects1.length = 0;
gdjs.gameoverCode.GDTXT_9595SUBVIDAObjects2.length = 0;
gdjs.gameoverCode.GDTXT_9595MONEDASObjects1.length = 0;
gdjs.gameoverCode.GDTXT_9595MONEDASObjects2.length = 0;


return;

}

gdjs['gameoverCode'] = gdjs.gameoverCode;
