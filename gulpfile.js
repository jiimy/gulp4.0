// task 를 이용한 버전
var gulp = require('gulp');
var scss = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
// 소스 파일 경로 
var PATH = {
  ASSETS: {
    FONTS: './workspace/assets/fonts',
    IMAGES: './workspace/assets/images',
    STYLE: './workspace/assets/style'
  }
},
  // 산출물 경로 
  DEST_PATH = {
    ASSETS: {
      FONTS: './dist/assets/fonts',
      IMAGES: './dist/assets/images',
      STYLE: './dist/assets/style'
    }
  };

gulp.task('scss:compile', () => {
  return new Promise(resolve => {
    var options = {
      outputStyle: "nested", // nested, expanded, compact, compressed
      indentType: "space", // space, tab , indentWidth: 4 // 
      precision: 8,
      sourceComments: false // 코멘트 제거 여부
    };

    gulp.src(PATH.ASSETS.STYLE + '/*.scss')
      .pipe(sourcemaps.init())
      .pipe(scss(options))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(DEST_PATH.ASSETS.STYLE));
    resolve();
  });
});

gulp.task('default', gulp.series(['scss:compile']));
//https://blog.thereis.xyz/80?category=660023 
//https://sharkcoder.com/tools/gulp


// function 이용한 버전 
