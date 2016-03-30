
// Wait for device API libraries to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
//
function onDeviceReady() {
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

// onSuccess Geolocation
//
function onSuccess(position) {
  var element = document.getElementById('sendCoordinates');
  element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
  'Longitude: '          + position.coords.longitude             + '<br />';
}

// onError Callback receives a PositionError object
//
function onError(error) {
  alert('code: '    + error.code    + '\n' +
  'message: ' + error.message + '\n');
}

//Send coordinates to DB
function sendCoordinates(lat, long) {
  //alert(name);
}
