let destination = require("path").basename(__dirname),
    source = "_src";

let path = {
    build: {
        html: `${destination}/`,
        css: `${destination}/style/`,
        js: `${destination}/script/`,
        img: `${destination}/images/`
        //fonts: `${destination}/fonts/`
    },
    source: {
        html: [`${source}/*.html`, `!${source}/_*.html`],
        css: `${source}/style/main.scss`,
        js: `${source}/script/**/*.js`,
        img: `${source}/images/**/*.{jpeg,jpg,png,svg,ico,webp,gif,tiff}`
        //fonts: `${source}/fonts/*.ttf`
    },
    watch: {
        html: `${source}/**/*.html`,
        css: `${source}/style/**/*.{scss,sass}`,
        js: `${source}/script/**/*.js`,
        img: `${source}/images/**/*.{jpeg,jpg,png,svg,ico,webp,gif,tiff}`
    },
    clean: `./${destination}/`
}

let { src, dest } = require('gulp'),
    gulp = require('gulp'),
    browsersync = require('browser-sync').create(),
    fileinclude = require('gulp-file-include'),
    del = require('del'),
    scss = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    groupMedia = require('gulp-group-css-media-queries'),
    cleanCss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify-es').default,
    imageMin = require('gulp-imagemin'),
    webp = require('gulp-webp'),
    webpHtml = require('gulp-webp-html'),
    webpCss = require('gulp-webp-css');

function browserSync (param) {
    browsersync.init({
        server: {
            baseDir: `./${destination}/`,
        },
        port: 3030,
        notify: false
    })
}

function html () {
    return src(path.source.html)
        .pipe(fileinclude())
        //.pipe(webpHtml())
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}

function clean (param) {
    return del(path.clean)
}

function css (param) {
    return src(path.source.css)
        .pipe(scss({
            outputStyle: "expanded"
            })
        )
        .pipe(groupMedia())
        .pipe(autoprefixer({
            overrideBrowserslist: ["last 5 versions"],
            cascade: true
        }))
        .pipe(webpCss())
        .pipe(dest(path.build.css))
        .pipe(cleanCss())
        .pipe(rename ({
            extname:".min.css"
        }))
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream())
}

function js () {
    return src(path.source.js)
        .pipe(fileinclude())
        .pipe(dest(path.build.js))
        .pipe(uglify())
        .pipe(rename ({
            extname:".min.js"
        }))
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream())
}

function images () {
    return src(path.source.img)
        .pipe(webp({
            quality: 70
        }))
        .pipe(dest(path.build.img))
        .pipe(src(path.source.img))
        .pipe(imageMin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true,
            optimizationLevel: 3
        }))
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream())
}

function watchFile (param) {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], images);
}

let build = gulp.series(clean, gulp.parallel(js, css, html, images));
let watch = gulp.parallel(build, watchFile, browserSync);

exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
