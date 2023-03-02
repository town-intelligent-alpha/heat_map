// 21853802
export function get_task_info(uuid) {
  var dataJSON = {};
  $.ajax({
    url: HOST_URL_TPLANET_DAEMON + "/tasks/get/" + uuid,
    type: "GET",
    async: false,
    crossDomain: true,
    data:  dataJSON,
    success: function(returnData) {
       const obj = JSON.parse(returnData);
       dataJSON = obj;
    },
    error: function(xhr, ajaxOptions, thrownError){
      console.log(thrownError);
    }
  });
  return dataJSON;
}

// https://stackoverflow.com/questions/6765370/merge-image-using-javascript
function merge() {
	var canvas = document.getElementById('canvas'),
			ctx = canvas.getContext('2d'),
      imageObj1 = new Image(),
      imageObj2 = new Image();

	imageObj1.src = $('.image1').attr('src');
  imageObj1.onload = function() {
    ctx.globalAlpha = 1;
    ctx.drawImage(imageObj1, 0, 0, 328, 526);
    imageObj2.src = $('.image2').attr('src');;
    imageObj2.onload = function() {
    	ctx.globalAlpha = 0.5;
      ctx.drawImage(imageObj2, 0, 0, 300, 300);
      var img = canvas.toDataURL('image/jpeg');
      $('.merged-image').attr('src', img);
      $('.merged-image').removeClass('hidden');
    }
  };
}
