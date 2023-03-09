import { setLocalStorage, getLocalStorage } from './localStorage.js'

function showPosition(position) {
  console.log(position.coords.latitude + ", " + position.coords.longitude);
  setLocalStorage("eIDLocastion", position.coords.latitude + "," + position.coords.longitude);
  document.getElementById("demo").innerHTML = position.coords.latitude + ", " + position.coords.longitude; 

  geps_set(position.coords.latitude, position.coords.longitude, "89639292", "21853802", "yillkid@gmail.com");
}

export function get_gps() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    return {"result" :false, "content": "Geolocation is not supported by this browser."};
  }
}


export function geps_set(lat, lon, uuid_project, uuid_task, email) {
  var dataJSON = {};
  dataJSON.lat = lat;
  dataJSON.lon = lon;
  dataJSON.uuid_project = uuid_project;
  dataJSON.uuid_task = uuid_task;
  dataJSON.email = email;

  var resultJSON = {};

  $.ajax({
    url: HOST_URL_TPLANET_DAEMON + "/projects/gps_set",
    type: "POST",
    async: false,
    crossDomain: true,
    data:  dataJSON,
    success: function(returnData) {
       resultJSON = JSON.parse(returnData);
    },
    error: function(xhr, ajaxOptions, thrownError){
      console.log(thrownError);
    }
  });
  return resultJSON;
}

