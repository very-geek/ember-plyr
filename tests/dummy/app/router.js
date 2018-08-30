import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';

import config from './config/environment';

const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  docsRoute(this, function() {
    this.route('configuration');

    this.route('usage', function() {
      this.route('general');
      this.route('advance');
    });
  });

  this.route('404', { path: '/*wildcard' });
});

export default Router;
