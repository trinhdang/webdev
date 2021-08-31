//----------------------------------------------------------------
//Data: Top 5 movies
let topMovies = [{id: 0, title: "The The Shawshank Redemption", year: 1994, image_url: "Media/movie0.jpg"},
				 {id: 1, title: "The Godfather ", year: 1992, image_url: "Media/movie1.jpg"},
				 {id: 2, title: "The Dark Knight", year: 2008, image_url: "Media/movie2.jpg"},
			     {id: 3, title: "12 Angry Men", year: 1957, image_url: "Media/movie3.jpg"},
			     {id: 4, title: " Schindler\'s List", year: 1993, image_url: "Media/movie4.jpg"},
				];

//------
//Slideshow: Manual
let slideIndex = 0;//Initial slide = 0
function nextSlide() {
	//Change the slide_index
	if (slideIndex < topMovies.length - 1) {
		slideIndex++;
	} else {
		slideIndex = 0;
	}
	//Change the image source for the img
	document.getElementById("manual-slide-title").innerHTML = topMovies[slideIndex].title;
	document.getElementById("manual-slide-image").src = topMovies[slideIndex].image_url;	
}

function previousSlide() {
	//Change the slide_index
	if (slideIndex > 0) {
		slideIndex--;
	} else {
		slideIndex = topMovies.length - 1;
	}
	//Change the image source for the img
	document.getElementById("manual-slide-title").innerHTML = topMovies[slideIndex].title;
	document.getElementById("manual-slide-image").src = topMovies[slideIndex].image_url;		
}

//------
//Slideshow: Automatic
let autoSlideIndex = 0;
function autoSlideShow() {
//Change the slide_index
	if (autoSlideIndex < topMovies.length - 1) {
		autoSlideIndex++;
	} else {
		autoSlideIndex = 0;
	}
	//Change the image source for the img
	document.getElementById("auto-slide-title").innerHTML = topMovies[autoSlideIndex].title;
	document.getElementById("auto-slide-image").src = topMovies[autoSlideIndex].image_url;
	//
	setTimeout(autoSlideShow, 2000);//Auto change slide every 2 seconds
}
//Call to run autoSlideShow() function when the webpage is loaded.
autoSlideShow();