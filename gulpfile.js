const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const minify = require('gulp-uglify');
const conc = require('gulp-concat');

// TOP LEVEL FUNCTIONS
// gulp.task - Define tasks
// gulp.src - Point to files to use
// gulp.dest - Pointst to folder to output
// gulp.watch - Watch files and folders for changes

// Logs Message
gulp.task('message', () => {
	return console.log('Gulp is running...');
});

// Copy html files to dist
gulp.task('copyHtmlFiles', () => {
	gulp.src('src/*.html')
		.pipe(gulp.dest('dist'));
});

// Optimize images
gulp.task('imagemin', () => {
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'));
});

// Concatenate files
gulp.task('scripts', () => {
	gulp.src('src/js/*.js')
		.pipe(conc('main.js'))
		.pipe(minify())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['message', 'copyHtmlFiles', 'imagemin', 'scripts']);

gulp.task('watch', () => {
	gulp.watch('src/*.html', ['copyHtmlFiles']);
	gulp.watch('src/images', ['imagemin']);
	gulp.watch('src/js/*.js', ['scripts']);
})
