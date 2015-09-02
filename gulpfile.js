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
	minifyHtml = require('gulp-minify-html');

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

gulp.task('default', ['reload']);