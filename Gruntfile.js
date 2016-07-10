'use strict';

module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);

	var config = {
		app: 'app',
		dist: 'dist'
	};

	grunt.initConfig({
		config: config,

		copy: {
			dist: {
				expand: true,
				src: '<%=config.app%>/{,**/}*',
				dest: '<%=config.dist%>'
			}
		},

		clean: {
			dist: {
				src: '<%=config.dist%>/{,**/}*'
			}
		},

		connect: {
			options: {
				open: true,
				port: 9000,
				hostname: '0.0.0.0',
				livereload: 35729
			},
			server: {
				options: {
					base: '<%= config.app %>'
				}
			}
		}
	});


	grunt.registerTask('server', 'start a web server', function (target) {
		if (target === 'dist') {
			// return grunt.task.run(['build', 'connect:dist:keepalive']);
		}

		grunt.task.run([
			'connect:server:keepalive'
		]);
	});


	grunt.registerTask('build', [
		'clean:dist',
		'copy:dist'
	]);

}