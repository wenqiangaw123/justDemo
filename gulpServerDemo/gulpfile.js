/*
 * @Author: zhiqiang.wen
 * @Date:   2017-11-08 10:37:28
 * @Last Modified by:   zhiqiang.wen
 * @Last Modified time: 2017-11-08 15:49:57
 */
var gulp = require('gulp'),
    connect = require('gulp-connect'); // 搭建本地服务
var livereload = require('gulp-livereload');    

gulp.task('webserver', function() {
    connect.server({
        port: 2333
    });
});


gulp.task("default", ['webserver']);