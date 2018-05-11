module.exports = function(grunt) {

    grunt.initConfig({

        concat: {
            options: {
                separator: '\n\n\n'
            },

            dev: {
                'src': ['node_modules/angular/angular.js',
                    'node_modules/angular-material/angular-material.js',
                    'node_modules/angular-aria/angular-aria.js',
                    'node_modules/angular-messages/angular-messages.js',
                    'node_modules/angular-animate/angular-animate.js',
                    'node_modules/@uirouter/angularjs/release/angular-ui-router.js'
                ],
                'dest': 'public/javascripts/app_lib.js'
            },

            build: {
                'src': [
                    'front-end/*.js',
                    'front-end/controller/*.js'
                ],
                'dest': "public/javascripts/aws_fun_app.js"

            },
            css: {

                'src': [
                    'node_modules/angular-material/angular-material.css',
                    'aws_fun/stylesheets.csss'
                ],

                'dest': 'public/stylesheets/main.min.css'
            }
        }

    });

    //loading task

    grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-contrib-cssmin');

    // grunt.registerTask(taskName, [optional description, ] taskFunction)
    grunt.registerTask('default', ['concat']);

};