chrome.app.runtime.onLaunched.addListener(function() {
 chrome.app.window.create('IPCam.html', {
   id: 'main'
   });
});