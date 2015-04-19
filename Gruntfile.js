module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
        options: {
            livereload: true
        },
        js: {
          files: "**/*.js",
        },
        html: {
          files: "**/*.html"
        }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: '.',
          hostname: "localhost",
          open: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['connect', 'watch']);

};