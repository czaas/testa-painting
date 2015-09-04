var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoPrefix = require('gulp-autoprefixer'),
	watch = require('gulp-watch'),
	bs = require('browser-sync'),
	reload = bs.reload,
	minifyCss = require('gulp-minify-css'),
	jsHint = require('gulp-jshint'),
	jsUglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	minifyHtml = require('gulp-minify-html'),
	lwip = require('lwip');

gulp.task('reload', function(){
	bs.init({
		server: './'
	});

	gulp.watch('./css/*.sass', ['css']);
	gulp.watch('./js/*.js', ['js']);
	gulp.watch('./html/*.html', ['html']);
});

gulp.task('html', function(){
	
	var opts = {
		conditionals: true,
		empty: true,
	};
	
	gulp.src('./html/*.html')
	.pipe(minifyHtml(opts))
	.pipe(gulp.dest('./'))
	.pipe(reload({stream: true}));
});

gulp.task('css', function(){
	gulp.src('./css/*.sass')
		.pipe(sass({ indentedSyntax: true }))
		.pipe(autoPrefix())
		.pipe(minifyCss())
		.pipe(gulp.dest('./css/'))
		.pipe(reload({stream: true}));
});

gulp.task('js', function(){
	gulp.src(['./js/testimonials.js','./js/shuffle.js','./js/main.js','./js/listeners.js'])
		.pipe(jsHint())
		.pipe(jsHint.reporter('jshint-stylish'))
		.pipe(concat('concat.js'))
		.pipe(jsUglify())
		.pipe(gulp.dest('./js'))
		.pipe(reload({stream: true}));
});

gulp.task('minify-images', function(){

	//need to fs.readdir and for loop over all the images and run them through the minifyImage function

	function minifyImage(img){
		lwip.open(img, function(err, image){
		
		// check err...
		// define a batch of manipulations and save to disk as JPEG:
		image.batch()
			.scale(0.25)          // scale to 25%
			//.rotate(45, 'white')  // rotate 45degs clockwise (white fill)
			//.crop(200, 200)       // crop a 200X200 square from center
			//.blur(5)              // Gaussian blur with SD=5
			.writeFile('output.jpg', function(err){
				if(err) { console.error(err); }
				
				console.log('fin');
			// check err...
			// done.
			});
		});
	}
});


gulp.task('default', ['reload']);