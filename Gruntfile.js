module.exports = function(grunt) {
  grunt.initConfig({
    cssmin: {
      compress: {
        files: {
          './min.css': ['css/ng-layout.css', 'css/style.css']
        }
      }
    },

    watch: {
      files: ['css/*.css'],
      tasks: ['cssmin']
    },

    bower: {
      install: {
        options: {
          targetDir: './lib', //ライブラリの配置先のディレクトリ
          layout: 'byType', // レイアウト、説明は後述します
          install: true, //grunt実行時にbower installを実行するかどうか
          verbose: false, // ログの詳細を出すかどうか
          cleanTargetDir: true, // targetDirを削除するかどうか
          cleanBowerDir: false // bowerのcomponentsディレクトリを削除するかどうか
        }
      }
    }

  });

  // package.jsonに書かれている、grunt-contrib-cssminとgrunt-contrib-watchを使用します。
  // プラグインはインストールしたままでは動きません。
  // loadNpmTasksを使用して、プラグインを読み込みます。
  // grunt.loadNpmTasks('grunt-contrib-cssmin');
  // grunt.loadNpmTasks('grunt-contrib-watch');

  // 本来は上のようにloadNpmTasksでプラグインをロードする必要があるが
  // package.jsonのdependencyの記述を利用して自動的にロードすることができる
  var pkg = grunt.file.readJSON('package.json');
  var taskName;
  for(taskName in pkg.devDependencies) {
    if(taskName.substring(0, 6) == 'grunt-') {
      grunt.loadNpmTasks(taskName);
    }
  }



  // 今回は数が少ないですが、このやり方だと複数のタスクを順番に実行するのが面倒です。
  // よく使用するタスクをGruntfile.jsに登録しておきます。
  // コマンドラインで grunt と入力するだけで全タスクを実行できる
  grunt.registerTask('default', ['cssmin', 'watch']);
};
