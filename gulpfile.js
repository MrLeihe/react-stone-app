const gulp = require('gulp')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

gulp.task('minify', () => {
    gulp.src('config/env.js')
        .pipe(babel())
        .pipe(uglify())
})