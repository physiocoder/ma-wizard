Package.describe({
  name: "ma:wizard",
  summary: "Forms and wizards management made easy",
  version: "0.0.0",
  git: "https://github.com/doubleslashG/ma-wizard.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1');
  
  api.use('ma:simple-schema');
  api.use(['ui', 'tracker', 'underscore', 'check', 'templating', 'ui', 'blaze']);
  api.use(['templating'], 'client');
  api.imply('ma:simple-schema');
  api.imply('templating');

  api.addFiles('wizard.js');
  api.addFiles('wizard-templates.html');
  api.addFiles('wizard-templates.js');

  api.export('maWizard');
});

/*
Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ma:wizard');
  api.addFiles('wizard-test.js');
});
*/