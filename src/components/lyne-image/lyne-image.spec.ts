import images from '../../global/images';
import { LyneImage } from './lyne-image';
import { newSpecPage } from '@stencil/core/testing';

describe('lyne-image', () => {
  it('renders', async () => {
    const {
      root
    } = await newSpecPage({
      components: [LyneImage],
      html: `<lyne-image image-src="${images[0]}"></lyne-image>`
    });

    expect(root)
      .toEqualHtml(`
        <lyne-image image-src="${images[0]}">
          <mock:shadow-root>
            <figure class="lyne-image__figure">
              <div class="lyne-image__wrapper">
                <img alt="" class="lyne-image__blur-hash" decoding="auto" loading="eager" src="${images[0]}?blur=100&amp;w=100&amp;h=56">
                <picture>
                  <source media="(min-width: 64rem)" sizes="1200px" srcset="${images[0]}?&amp;fm=avif&amp;auto&amp;w=1200&amp;h=675 1200w, ${images[0]}?&amp;fm=avif&amp;auto&amp;w=2400&amp;h=1350 2400w" type="image/avif">
                  <source media="(min-width: 64rem)" sizes="1200px" srcset="${images[0]}?auto=format,compress,cs=tinysrgb&amp;w=1200&amp;h=675&amp;q=45 1200w, ${images[0]}?auto=format,compress,cs=tinysrgb&amp;w=2400&amp;h=1350&amp;q=20 2400w">
                  <source media="(min-width: 37.5rem)" sizes="976px" srcset="${images[0]}?&amp;fm=avif&amp;auto&amp;w=976&amp;h=549 976w, ${images[0]}?&amp;fm=avif&amp;auto&amp;w=1952&amp;h=1098 1952w" type="image/avif">
                  <source media="(min-width: 37.5rem)" sizes="976px" srcset="${images[0]}?auto=format,compress,cs=tinysrgb&amp;w=976&amp;h=549&amp;q=45 976w, ${images[0]}?auto=format,compress,cs=tinysrgb&amp;w=1952&amp;h=1098&amp;q=20 1952w">
                  <source media="(max-width: 37.4375rem)" sizes="320px" srcset="${images[0]}?&amp;fm=avif&amp;auto&amp;w=320&amp;h=180 320w, ${images[0]}?&amp;fm=avif&amp;auto&amp;w=640&amp;h=360 640w" type="image/avif">
                  <source media="(max-width: 37.4375rem)" sizes="320px" srcset="${images[0]}?auto=format,compress,cs=tinysrgb&amp;w=320&amp;h=180&amp;q=45 320w, ${images[0]}?auto=format,compress,cs=tinysrgb&amp;w=640&amp;h=360&amp;q=20 640w">
                  <img class="lyne-image__img" decoding="auto" height="562" loading="eager" src="${images[0]}" width="1000">
                </picture>
              </div>
            </figure>
          </mock:shadow-root>
        </lyne-image>
      `);
  });

});
