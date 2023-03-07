import { setLocalStorage, getLocalStorage } from './localStorage.js'
import { get_task_info } from './tasks.js'

function successCallback(b64) {
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

  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: b64
  });
}

function pad(d) {
   return (d < 10) ? '0' + d.toString() : d.toString();
}

// Initialize and add the map
function initMap() {
  // Get tasks info
  var obj_task = {};
  try {
    obj_task = get_task_info("98657352");
  } catch (e) { 
    console.log(e) ;
  }
  
  // TODO: Make marker image
  var obj_task_weight = {};
  try {
    obj_task_weight = JSON.parse(obj_task.content);
  } catch (e) { 
    console.log(e) ;
  }

  // Make image
  var index_weight = 0;
  var icon_img = "";
  var list_icon_img = [];
  var cx = -25;
  while (true) {
    index_weight ++;
    if (obj_task_weight["sdgs-" + index_weight] == null ) {
      break;
    }

    try {
      if (obj_task_weight["sdgs-" + index_weight] != "0") { 
	console.log("hello got non-zero on sdgs " + index_weight.toString());
	list_icon_img.push({ src: "static/imgs/SDGs/SDGs_" +  pad(index_weight) + ".jpg", x: cx += 25, y: 0 , opacity: 1})
      }
    } catch (e) { 
      console.log(e);
    }
  }

  // Merge image
  mergeImages(list_icon_img, { width: 100, height: 20}).then(successCallback);
}

window.initMap = initMap;
