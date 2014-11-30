var gulp = require('gulp'),
jade = require('gulp-jade'),
browserify = require('browserify'),
source = require('vinyl-source-stream'),
stream = require('gulp-streamify'),
uglify = require('gulp-uglify'),
sass = require('gulp-sass');

gulp.task('jade', function(){
	gulp.src(['src/jade/*.jade', '!src/jade/index.jade'])
	.pipe(jade())
	.pipe(gulp.dest('views/'));

	gulp.src('src/jade/index.jade')
	.pipe(jade())
	.pipe(gulp.dest(''));
});

gulp.task('sass', function(){
	gulp.src('src/sass/main.scss')
	.pipe(sass({ sourceComment : 'map'}))
	.pipe(gulp.dest('views/../'));

});