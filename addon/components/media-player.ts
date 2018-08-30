import { classNames } from '@ember-decorators/component';
import { computed } from '@ember-decorators/object';
import Component from '@ember/component';
import { getProperties } from '@ember/object';

import i18n from '../i18n/zh-hans';
// @ts-ignore: Ignore import of compiled template
import layout from '../templates/components/media-player';

@classNames('ember-plyr')
export default class MediaPlayerComponent extends Component.extend({

  src: '',

  i18n,

  iconUrl: '/assets/plyr/plyr.svg',

  blankVideo: '/assets/plyr/blank.mp4',

}) {

  layout = layout;

  @computed('src')
  get type(): string {
    return this.src ? `video/${this.src.split('.')[1]}` : '';
  }

  didInsertElement() {
    if (this.src) {
      const target = this.element.querySelector('video');
      const options = getProperties(this, 'i18n', 'iconUrl', 'blankVideo');
      new (window.Plyr as any)(target, options);
    }
  }

}
