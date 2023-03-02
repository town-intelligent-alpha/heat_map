import { setLocalStorage, getLocalStorage } from './localStorage.js'

function showPosition(position) {
  console.log(position.coords.latitude + ", " + position.coords.longitude);
  setLocalStorage("eIDLocastion", position.coords.latitude + "," + position.coords.longitude);
  document.getElementById("demo").innerHTML = position.coords.latitude + ", " + position.coords.longitude; 
}

export function get_gps() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    return {"result" :false, "content": "Geolocation is not supported by this browser."};
  }
}
