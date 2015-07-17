$(document).ready(function(){ 

	Number.prototype.mod = function(n) {
		return ((this%n)+n)%n;
	}

	var current = 1;

	$(document).keydown(function(event) {

		if ((event.keyCode || event.which) == 37) {
			current = (current-1).mod(13);
			$('#full_imgs').scrollTo("#Image_" + current, 500);
			$('#thumb_imgs').scrollTo("#Image_" + current + "_thumb", 500);
			console.log(current);
		}
		if ((event.keyCode || event.which) == 39) {
			current = (current+1).mod(13);
			$('#full_imgs').scrollTo("#Image_" + current, 500);
			$('#thumb_imgs').scrollTo("#Image_" + current + "_thumb", 500);
			console.log(current);
		}

	});
	
	$(".thumb_img").click(function() {
		var image_id = this.id.substring(0, (this.id.length - 6));
		var count  = image_id.substring(6);
		$("#full_imgs").scrollTo("#" + image_id, 500);
		$("#thumb_imgs").scrollTo("#" + this.id, 500);
		current = (parseInt(image_id.substring(6))).mod(13);
	});

});
