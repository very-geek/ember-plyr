import { EmberRenderingTest } from 'ember-qunit-decorators/test-support';
import hbs from 'htmlbars-inline-precompile';
import { suite, test } from 'qunit-decorators';

import { render } from '@ember/test-helpers';
import { Plyr } from '@very-geek/ember-plyr';

@suite('Integration | Component | media-player')
export class MediaPlayerComponentTest extends EmberRenderingTest {

  @test('re-exports window.Plyr')
  reExport(assert: Assert) {
    assert.deepEqual(Plyr, window.Plyr);
  }

  @test('renders basic dom structures')
  async basicStructure(assert: Assert) {
    await render(hbs`<MediaPlayer/>`);

    assert.dom('.ember-plyr').exists();
    assert.dom('.ember-plyr .plyr').doesNotExist();
  }

  @test('receive src from itself')
  async receiveSrcFromItSelf(assert: Assert) {
    await render(hbs`<MediaPlayer @src="/assets/video.mp4"/>`);

    assert.dom('.plyr video').hasAttribute('playsinline');
    assert.dom('.plyr video > source').hasAttribute('type', 'video/mp4');
    assert.dom('.plyr video > source').hasAttribute('src', '/assets/video.mp4');
  }

}
