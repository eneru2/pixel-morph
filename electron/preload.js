const a0_0x49c8d5=a0_0x5342;(function(_0x563811,_0x6d1d39){const _0x4b4956=a0_0x5342,_0x5bbea7=_0x563811();while(!![]){try{const _0x5be868=parseInt(_0x4b4956(0x169))/0x1+parseInt(_0x4b4956(0x156))/0x2*(parseInt(_0x4b4956(0x15e))/0x3)+parseInt(_0x4b4956(0x170))/0x4*(parseInt(_0x4b4956(0x154))/0x5)+-parseInt(_0x4b4956(0x16d))/0x6*(-parseInt(_0x4b4956(0x15c))/0x7)+parseInt(_0x4b4956(0x159))/0x8+-parseInt(_0x4b4956(0x15f))/0x9+parseInt(_0x4b4956(0x15b))/0xa*(-parseInt(_0x4b4956(0x165))/0xb);if(_0x5be868===_0x6d1d39)break;else _0x5bbea7['push'](_0x5bbea7['shift']());}catch(_0x34529b){_0x5bbea7['push'](_0x5bbea7['shift']());}}}(a0_0x303e,0x58b77));const {contextBridge,ipcRenderer}=require('electron'),ipc={'render':{'send':['window:minimize',a0_0x49c8d5(0x161),a0_0x49c8d5(0x15a),a0_0x49c8d5(0x163)],'receive':[],'sendReceive':[]}};function a0_0x303e(){const _0x1be95c=['render','electronAPI','download-file','5oDIDQZ','getFolderPath','488578pippIH','send','sendReceive','696776ozYKdS','window:restore','10qYHMxm','244139MbHhtd','exposeInMainWorld','3WZEAnu','4777416IZrvhK','once','window:maximize','auto-download','window:close','then','3464219sfslTz','open-folder-dialog','error','receive','376136ITTACx','getAutoDownloadSetting','Error\x20retrieving\x20folder\x20path:','includes','18EGeYMZ','catch','invoke','1587932EULdWK'];a0_0x303e=function(){return _0x1be95c;};return a0_0x303e();}function a0_0x5342(_0x139a6d,_0x152f00){const _0x303e3d=a0_0x303e();return a0_0x5342=function(_0x534297,_0x239212){_0x534297=_0x534297-0x152;let _0x182780=_0x303e3d[_0x534297];return _0x182780;},a0_0x5342(_0x139a6d,_0x152f00);}contextBridge[a0_0x49c8d5(0x15d)](a0_0x49c8d5(0x152),{'selectFolderPath':async()=>{const _0x62878b=a0_0x49c8d5,_0x3377f9=await ipcRenderer[_0x62878b(0x16f)](_0x62878b(0x166));return _0x3377f9;},'downloadFile':async _0x15a458=>{const _0xcb0577=a0_0x49c8d5;ipcRenderer[_0xcb0577(0x157)](_0xcb0577(0x153),_0x15a458);},'ipcRenderer':ipcRenderer,'downloadFile':async _0x87f410=>{const _0xff1d66=a0_0x49c8d5;return ipcRenderer[_0xff1d66(0x157)](_0xff1d66(0x153),_0x87f410),new Promise((_0x314f2b,_0x17a89f)=>{const _0x467afb=_0xff1d66;ipcRenderer[_0x467afb(0x160)]('download-file-complete',(_0x316803,_0x595611)=>{_0x595611?_0x17a89f(_0x595611):_0x314f2b();});});},'getAutoDownloadSetting':()=>{return new Promise((_0x206984,_0x406a70)=>{const _0x1999e5=a0_0x5342;ipcRenderer['invoke'](_0x1999e5(0x16a))[_0x1999e5(0x164)](_0x2ed1bc=>{_0x206984(_0x2ed1bc);})[_0x1999e5(0x16e)](_0x575973=>{_0x406a70(_0x575973);});});},'updateAutoDownloadSetting':async _0x36672b=>{const _0x2d1600=a0_0x49c8d5;await ipcRenderer[_0x2d1600(0x16f)](_0x2d1600(0x162),{'autoDownloadEnabled':_0x36672b});},'getFolderPath':async()=>{const _0x283427=a0_0x49c8d5;try{const _0x2bfb97=await ipcRenderer[_0x283427(0x16f)](_0x283427(0x155));return _0x2bfb97;}catch(_0x52d424){console[_0x283427(0x167)](_0x283427(0x16b),_0x52d424);throw _0x52d424;}},'send':(_0x47a90a,_0x882ec8)=>{const _0x6b886=a0_0x49c8d5;let _0x4b27a8=ipc['render']['send'];_0x4b27a8[_0x6b886(0x16c)](_0x47a90a)&&ipcRenderer[_0x6b886(0x157)](_0x47a90a,_0x882ec8);},'receive':(_0x34a35a,_0x42684d)=>{const _0x3e76f8=a0_0x49c8d5;let _0x36ed25=ipc[_0x3e76f8(0x171)][_0x3e76f8(0x168)];_0x36ed25['includes'](_0x34a35a)&&ipcRenderer['on'](_0x34a35a,(_0x49b2bd,..._0x4313ad)=>_0x42684d(..._0x4313ad));},'invoke':(_0x4c9be9,_0x35bf2f)=>{const _0x303d47=a0_0x49c8d5;let _0x2ec927=ipc[_0x303d47(0x171)][_0x303d47(0x158)];if(_0x2ec927['includes'](_0x4c9be9))return ipcRenderer[_0x303d47(0x16f)](_0x4c9be9,_0x35bf2f);}});