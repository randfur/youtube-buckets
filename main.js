import {html, render} from 'https://unpkg.com/lit-html?module';
import {injectTestData} from './test-data.js';
import {youtubeBuckets} from './ui/youtube-buckets.js';

let scheduled = false;
export function rerender() {
  if (!scheduled) {
    scheduled = true;
    requestAnimationFrame(_ => {
      render(youtubeBuckets(), document.body);
      scheduled = false;
    });
  }
}

function main() {
  injectTestData();
  rerender();
}
main();