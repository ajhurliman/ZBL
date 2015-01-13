module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.initConfig({
    jshint: {
      options: {
        node: true,
        jshintrc: '.jshintrc'
      },
      src: ['app/js/**/*.js']
    },

    clean: {
      src: ['build/']
    },

    copy: {
      dev: {
        cwd: 'app/',
        expand: true,
        src: ['**/*.html', 'css/**/*.css'],
        dest: 'build/'
      }
    },

    browserify: {
      dev: {
        src: ['app/js/**/*.js'],
        dest: 'build/client-bundle.js',
        options: {
          transform: ['debowerify']
        }
      },

      test: {
        src: ['test/client/**/*.js'],
        dest: 'test/angular_testbundle.js',
        options: {
          transform: ['debowerify']
        }
      }
    },

    karma: {
      unit: {
        configFile: 'karma.config.js'
      },
      continuous: {
        configFile: 'karma.config.js',
        singleRun: true,
        browsers: ['PhantomJS']
      }
    },

    sass: {
      dev: {
        options: {
          style: 'expanded',
          compass: false
        },
        files: {
          'build/css/style.scss':'<%= project.scss %>'
        }
      }
    },

    watch: {
      // sass: {
      //   files: 'app/sass/**/*.scss',
      //   tasks: ['sass:dev']
      // },
      app: {
        files: [ 'app/js/**/*.js' ],
        tasks: [ 'build' ]
      },
      html: {
        files: [ 'app/**/*.html' ],
        tasks: [ 'copy' ]
      }
      // test: {
      //   files: [ '<%= project.alljs %>', 'test/front-end/**/*.js'],
      //   tasks: [ 'build:dev', 'browserify:frontEndTest', 'karma:unit']
      // }
    },

    simplemocha: {
      src: ['./test/api/*.js']
    }
  });

  grunt.registerTask('test:api', ['simplemocha']);
  grunt.registerTask('test:client', ['browserify:test', 'karma:unit']);
  grunt.registerTask('build', ['clean', 'browserify:dev', 'copy:dev']);
};
