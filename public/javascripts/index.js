$(document).ready(function(){

	var sn = "";

	$("#followersn").on('click', function(){
		sn = $("#sn").val();
		$.ajax({
			url: "/api/followers/" + sn,
			type: "GET"
		})
		.done(function(data) {
			console.log(data);
		})
	});


	$("#friendsn").on('click', function(){
		sn = $("#sn").val();
		$.ajax({
			url: "/api/friends/" + sn,
			type: "GET"
		})
		.done(function(data) {
			console.log(data);
		})
	});
	
});