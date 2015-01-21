module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.initConfig({
    clean: {
      src: ['build/']
    },

    copy: {
      dev: {
        files: [
          {cwd: 'app/', expand: true, src: ['**/*.html', 'css/**/*.css'], dest: 'build/'},

          {expand: true, src: ['node_modules/angular-sanitize/**/*', 'node_modules/ng-csv/build/**/*'], dest: 'build/'}
        ]
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

    simplemocha: {
      src: ['./test/api/*.js']
    }
  });

  grunt.registerTask('test:api', ['simplemocha']);
  grunt.registerTask('test:client', ['browserify:test', 'karma:unit']);
  grunt.registerTask('build', ['clean', 'browserify:dev', 'copy:dev']);
};
