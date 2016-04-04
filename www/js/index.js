var date = new Date();
var lat = 0.0;
var lon = 0.0;

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

// onSuccess Geolocation
//
function onSuccess(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
}

function getInfoPosition(){
 alert("Latitud: "+lat+"\nLongitud: "+lon+"\nFecha: "+date);
}


// onError Callback receives a PositionError object
//

function onError(error) {
  alert('code: '    + error.code    + '\n' +
  'message: ' + error.message + '\n');
}
