Package.describe({
  name: 'jorisroling:yves',
  version: '1.0.21',
  // Brief, one-line summary of the package.
  summary: 'Meteor implementation of (yves)[https://github.com/jorisroling/yves]',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jorisroling/meteor-yves',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4');
  api.use('ecmascript');
	api.addFiles('yves_both.js');
  api.addFiles('yves_server.js', 'server');
  api.addFiles('yves_client.js', 'client');
  api.use(['templating', 'spacebars', 'ui'], 'client');
	Npm.depends({
		"yves": "1.0.21"
	});
  api.export('yves');
});

// Package.onTest(function(api) {
//   // api.use('ecmascript');
//   api.use('tinytest');
//   api.use('jorisroling:yves');
//   api.addFiles('yves-tests.js');
// });
