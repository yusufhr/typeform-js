/**
 * @author Alvaro Martinez de Miguel (Demi) [demipel8@gmail.com]
 */
var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default", function () {
	return gulp.src("src/entry.js")
		.pipe(babel())
		.pipe(gulp.dest("dist"));
});