$(document).ready(function(){
	$('.button1').click(function(){
		var searchTerm=$('#searchTerm').val();
	
	var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";
	$.ajax({
		type:'GET',
		dataType:'json',
		url:url,
		async:false,
		success: function(data){
			$('#output').html('');
			for(var i=0; i<data[1][i].length;i++)
			{
				$('#output').append("<li><a href="+data[3][i]+" target='_blank'>"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
				console.log(data[1][i]);
				console.log(data[2][i]);
				console.log(data[3][i]);
			}
		},
		failure: function(errorMessage){
			alert('Error');
			console.log(errorMessage);
		}
		
	});
	});
});


