var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var fs = require('fs');
var dist = "dist";
var clean = require('gulp-clean');

gulp.task("compile", function () {
    return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest(dist));
});

gulp.task("bundle", function () {
    return gulp.src(['config/**/*', "package.json"], {
        base: "./"
    }).pipe(gulp.dest(dist));
});

gulp.task('clean', function (done) {
    if (fs.existsSync(dist)) {
        return gulp.src(dist, {
                read: false
            })
            .pipe(clean({
                force: true
            }));
    } else {
        done();
    }
});

gulp.task('build', gulp.series('clean', 'compile', 'bundle'));