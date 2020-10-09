//1.引入gulp包
const gulp = require('gulp'); //gulp对象
const ugligyhtml = require('gulp-minify-html'); //引入html文件压缩的包  返回一个函数
const ugligycss = require('gulp-clean-css'); //引入css文件压缩的包


// gulp.task(任务名称,回调函数):创建任务的方法
// gulp.src(url):引入的文件路径。
// pipe():管道，流。
// gulp.dest(url):输入的文件路径
// gulp 任务名  ： 执行任务
gulp.task('html', () => {
    return gulp.src('src/*.html') //输入
        .pipe(ugligyhtml()) //执行压缩
        .pipe(gulp.dest('dist/')) //输出
});

gulp.task('css', () => {
    return gulp.src('src/css/*.css') //输入
        .pipe(ugligycss()) //执行压缩
        .pipe(gulp.dest('dist/css/')) //输出
});