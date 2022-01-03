/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

import {bootstrapExtra} from "@workadventure/scripting-api-extra";

// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure.
bootstrapExtra().catch(e => console.error(e));

let currentPopup: any = undefined;
const today = new Date();
const time = today.getHours() + ":" + today.getMinutes();

// clock
WA.room.onEnterZone('clock', () => {
    currentPopup =  WA.ui.openPopup("clockPopup","It's " + time,[]);
})
WA.room.onLeaveZone('clock', closePopUp)

// 3d printer ballet
WA.room.onEnterZone('printerBallet', () => {
    currentPopup =  WA.ui.openPopup("printerBalletPopup","3D-Drucker-Ballett",[]);
})
WA.room.onLeaveZone('printerBallet', closePopUp)

// pornographique
WA.room.onEnterZone('pornographique', () => {
    currentPopup =  WA.ui.openPopup("pornographiquePopup","Dieser Bereich wird aus pornografischen Gründen kameraüberwacht!",[]);
})
WA.room.onLeaveZone('pornographique', closePopUp)

// mancas3d
WA.room.onEnterZone('mancas3d', () => {
    currentPopup =  WA.ui.openPopup("mancas3d","",[]);
})
WA.room.onLeaveZone('mancas3d', closePopUp)

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
