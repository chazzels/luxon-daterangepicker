// quick project to minifiy js on the fly. 

var destination = 'website/';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

gulp.task('js', function buildJs() {
	

	
});

gulp.task('watch', function buildScss() {
	function watchjs() {
		gulp.src('scss/daterangepicker.scss')
			.pipe(sass().on('error', sass.logError))
			.pipe(gulp.dest(destination));
		gulp.src('js/daterangepicker.js').pipe(gulp.dest(destination));
	};
	
	watchjs();
	
	return watch(['js/daterangepicker.js', 'scss/daterangepicker.scss'], watchjs)
	
});

gulp.task('website', function() {
	
});

gulp.task('default', function() {
	// place code for your default task here
});

gulp.task("compress", function compressJs() {
	var opts = {
		mangle: true,
		compress: {
			sequences: true,
			dead_code: true,
			conditionals: true,
			booleans: true,
			unused: true,
			if_return: true,
			join_vars: true,
			drop_console: true
		}
	}
	return gulp.src("js/*.js")
		.pipe(uglify(opts))
		.pipe(gulp.dest("dist"));
});
