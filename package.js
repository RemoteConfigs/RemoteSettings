Package.describe({
  name: 'kingjuli:remote-settings',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.7.0.1');  
  api.use(['ecmascript', 'check', 'kingjuli:remote-configs']);
  api.addFiles(["lib/collections/settings.js"]);
  api.mainModule('remote-settings.js');
  
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('kingjuli:remote-settings');
  api.mainModule('remote-settings-tests.js');
});
