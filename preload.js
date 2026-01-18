const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  getVersion: () => '1.0.0'
});
