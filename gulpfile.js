const gulp = require('gulp')
const rename = require('gulp-rename')
const ENV_PATH = './config/env.js'
const TARGET_PATH = './config/'

gulp.task('copy', () => {
    return gulp.src(ENV_PATH)
        .pipe(rename('stone.js'))
        .pipe(gulp.dest(TARGET_PATH))
})