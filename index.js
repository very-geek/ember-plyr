'use strict';

module.exports = {

  name: '@very-geek/ember-plyr',

  isDevelopingAddon() {
    return 'production' !== process.env.EMBER_ENV;
  },

  options: {
    'ember-plyr': {
      enabled: true,
      outputFile: null,
      usePolyfill: false,
      importIcons: true,
      importStyles: true,
    }
  },

  included(host) {
    this._super.included.apply(this, arguments);

    const options =
      Object.assign(this.options['ember-plyr'], host.options['ember-plyr']);

    if (options.enabled) {
      this.import('node_modules/plyr/dist/blank.mp4', {
        destDir: 'assets/plyr'
      });

      if (options.importIcons) {
        this.import('node_modules/plyr/dist/plyr.svg', {
          destDir: 'assets/plyr'
        });
      }

      if (options.importStyles) {
        this.import('node_modules/plyr/dist/plyr.css');
      }

      if (options.outputFile) {
        this.import('node_modules/plyr/dist/plyr.js', {
          outputFile: options.outputFile
        });
      } else {
        const filename = `plyr${options.usePolyfill ? '.polyfilled' : ''}.js`;
        this.import(`node_modules/plyr/dist/${filename}`);
      }
    }
  }

};
