$(document).ready(function(){
	var app = {};
	$('#formovie').keypress(function(event){
		if(event.which == 13){
			var moviesearch = $('#formovie').val()			
			var search_url = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';
			$('#searchmovie').html("");
			$('#searchmovie').append('<p>Search result for: '+moviesearch+'</p>');
			$.ajax({
				url: search_url,
				data:{
					q: moviesearch,
					apiKey: 'd7ujzn7t8e75kf6nbmynvrbj'
				},
				dataType: 'jsonp',
				success: searchMovies
			});
			function getTemplate(template_id, context){
				var template, $template, markup;
				template = $('#' + template_id);
				$template = Handlebars.compile(template.html());
				markup = $template(context);
				return markup;
			}
			function searchMovies(response){
				
				app.movies = response.movies;
				var movie, template, $template, markup;
				$('#search_holder ul').html("");
				for(var i=0;i<app.movies.length;i++){
					movie = app.movies[i];
					movie._index = i;
					$('#search_holder ul').append(getTemplate('search-item', movie));
				}
				var lengthofmov = response.movies.length;
			$('#searchresult').html("");
			$('#searchresult').append('<p>Total result found: '+lengthofmov+'</p>');
			}
			
			moviesearch = $('#formovie').val("");
			
		}
	});
	$('#boxbtn').click(function(){
		var box_url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json';
		$.ajax({
			url: box_url,
				data:{
					apiKey: 'd7ujzn7t8e75kf6nbmynvrbj'
				},
				dataType: 'jsonp',
				success: boxMovies
		});
		function getTemplate(template_id, context){
				var template, $template, markup;
				template = $('#' + template_id);
				$template = Handlebars.compile(template.html());
				markup = $template(context);
				return markup;
			}
		function boxMovies(response){
				app.movies = response.movies;
				var movie, template, $template, markup;
				$('#box ul').html("");
				for(var i=0;i<app.movies.length;i++){
					movie = app.movies[i];
					movie._index = i;
					$('#box ul').append(getTemplate('search-item', movie));
			}
		}	
	});
	$('#intheabtn').click(function(){
		var theat_url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?';
		$.ajax({
			url: theat_url,
				data:{
					apiKey: 'd7ujzn7t8e75kf6nbmynvrbj'
				},
				dataType: 'jsonp',
				success: theatMovies
		});
		function getTemplate(template_id, context){
				var template, $template, markup;
				template = $('#' + template_id);
				$template = Handlebars.compile(template.html());
				markup = $template(context);
				return markup;
			}
		function theatMovies(response){
				app.movies = response.movies;
				var movie, template, $template, markup;
				$('#theaters ul').html("");
				for(var i=0;i<app.movies.length;i++){
					movie = app.movies[i];
					movie._index = i;
					$('#theaters ul').append(getTemplate('search-item', movie));
			}
		}	
	});
	$('#upcombtn').click(function(){
		var upcome_url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming.json?';
		$.ajax({
			url: upcome_url,
				data:{
					apiKey: 'd7ujzn7t8e75kf6nbmynvrbj'
				},
				dataType: 'jsonp',
				success: upcomeMovies
		});
		function getTemplate(template_id, context){
				var template, $template, markup;
				template = $('#' + template_id);
				$template = Handlebars.compile(template.html());
				markup = $template(context);
				return markup;
			}
		function upcomeMovies(response){
				app.movies = response.movies;
				var movie, template, $template, markup;
				$('#upcoming ul').html("");
				for(var i=0;i<app.movies.length;i++){
					movie = app.movies[i];
					movie._index = i;
					$('#upcoming ul').append(getTemplate('search-item', movie));
			}
		}	
	});
	$('#openbtn').click(function(){
		var open_url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/opening.json?';
		$.ajax({
			url: open_url,
				data:{
					apiKey: 'd7ujzn7t8e75kf6nbmynvrbj'
				},
				dataType: 'jsonp',
				success: openMovies
		});
		function getTemplate(template_id, context){
				var template, $template, markup;
				template = $('#' + template_id);
				$template = Handlebars.compile(template.html());
				markup = $template(context);
				return markup;
			}
		function openMovies(response){
				app.movies = response.movies;
				var movie, template, $template, markup;
				$('#opening ul').html("");
				for(var i=0;i<app.movies.length;i++){
					movie = app.movies[i];
					movie._index = i;
					$('#opening ul').append(getTemplate('search-item', movie));
			}
		}	
	});
});