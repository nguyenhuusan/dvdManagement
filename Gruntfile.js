module.exports = function(grunt) {
  grunt.initConfig({
    cssmin: {
      compress: {
        files: {
          './min.css': ['css/dvdManagement.css', 'css/style.css']
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
          targetDir: './lib', //���C�u�����̔z�u��̃f�B���N�g��
          layout: 'byType', // ���C�A�E�g�A�����͌�q���܂�
          install: true, //grunt���s����bower install�����s���邩�ǂ���
          verbose: false, // ���O�̏ڍׂ��o�����ǂ���
          cleanTargetDir: true, // targetDir���폜���邩�ǂ���
          cleanBowerDir: false // bower��components�f�B���N�g�����폜���邩�ǂ���
        }
      }
    }

  });

  // package.json�ɏ�����Ă���Agrunt-contrib-cssmin��grunt-contrib-watch���g�p���܂��B
  // �v���O�C���̓C���X�g�[�������܂܂ł͓����܂���B
  // loadNpmTasks���g�p���āA�v���O�C����ǂݍ��݂܂��B
  // grunt.loadNpmTasks('grunt-contrib-cssmin');
  // grunt.loadNpmTasks('grunt-contrib-watch');

  // �{���͏�̂悤��loadNpmTasks�Ńv���O�C�������[�h����K�v�����邪
  // package.json��dependency�̋L�q�𗘗p���Ď����I�Ƀ��[�h���邱�Ƃ��ł���
  var pkg = grunt.file.readJSON('package.json');
  var taskName;
  for(taskName in pkg.devDependencies) {
    if(taskName.substring(0, 6) == 'grunt-') {
      grunt.loadNpmTasks(taskName);
    }
  }



  // ����͐������Ȃ��ł����A���̂������ƕ����̃^�X�N�����ԂɎ��s����̂��ʓ|�ł��B
  // �悭�g�p����^�X�N��Gruntfile.js�ɓo�^���Ă����܂��B
  // �R�}���h���C���� grunt �Ɠ��͂��邾���őS�^�X�N�����s�ł���
  grunt.registerTask('default', ['cssmin', 'watch']);
};
