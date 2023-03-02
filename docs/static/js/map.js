import { setLocalStorage, getLocalStorage } from './localStorage.js'
import { get_task_info } from './tasks.js'

// Initialize and add the map
function initMap() {
  // Get from localstorage
  var streIDLocastion = getLocalStorage("eIDLocastion");
  var listeIDLocastion = streIDLocastion.split(",")
  
  // The location of Uluru
  const uluru = { lat: parseFloat(listeIDLocastion[0]), lng: parseFloat(listeIDLocastion[1]) };
  
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 20,
    center: uluru,
  });

  // Get tasks info
  var obj_task = {};
  try {
    get_task_info("21853802");
  } catch (e) { 
    alert("error");
    alert(e) ;
  }
  
  // TODO: Make marker image
  alert(JSON.stringify(obj_task));
  var obj_task_weight = obj_task.content;
  // alert(obj_task_weight);

  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: "https://beta-tplanet-backend.townway.com.tw/static/admin/img/icon-alert.svg" // null = default icon
  });
}

window.initMap = initMap;
