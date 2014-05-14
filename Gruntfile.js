module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-es6-module-transpiler');

  grunt.initConfig({
    transpile: {
      amd: {
        type: "amd",
        anonymous: true,
        files: [{
          expand: true,
          cwd: 'lib/',
          src: ['fuse.js'],
          dest: 'dist/amd'
        }]
      },
      namedAmd: {
        type: "amd",
        moduleName: "fuse",
        files: [{
          expand: true,
          cwd: 'lib/',
          src: ['fuse.js'],
          dest: 'dist/named-amd'
        }]
      },
      cjs: {
        type: "cjs",
        files: [{
          expand: true,
          cwd: 'lib/',
          src: ['fuse.js'],
          dest: 'dist/cjs'
        }]
      },
      globals: {
        type: "globals",
        imports: { },
        files: [{
          expand: true,
          cwd: 'lib/',
          src: ['fuse.js'],
          dest: 'dist/globals'
        }]
      }
    }
  });

  grunt.registerTask('dist', ['transpile:amd', 'transpile:globals', 'transpile:namedAmd', 'transpile:cjs']);//, ,'transpile:amd']);
};
