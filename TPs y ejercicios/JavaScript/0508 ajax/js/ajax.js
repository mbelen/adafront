var randompic = "https://loremflickr.com/36/36";
$(document).ready(function(e){
	$.ajax({
  		method: "GET",
  		url: "http://jsonplaceholder.typicode.com/post/1/comments",
 		 //data: { name: "John", location: "Boston" }
		})
  	.done(function(data) {
    	console.log(data);
    	for (i = 0; i < data.length; i++) {
    		var comentarios = //creamos un div donde le damos los vals de la url
    		'<div class="comentario">' +
        '<div class="userpicname">' +
        '<img class="userpic" src="'+ randompic +'">' +
    		'<p class="username">' + data[i].name + '</p></div>' +
    		'<p class="email"> <a href="mailto:' + data[i].email +
         '" target="_blank">' + data[i].email + '</a></p>'+
    		'<p class="commentbody">' + data[i].body + '</p>' +
    		'</div>';
    		$(".comments").append(comentarios);    		
    	}

  	});

});

