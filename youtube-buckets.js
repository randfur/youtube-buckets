import {html} from 'https://unpkg.com/lit-html?module';
import {injectStyle} from './utils.js'
import {bucketSwitcher} from './bucket-switcher.js'
import {bucketEditor} from './bucket-editor.js'
import {bucketDisplay} from './bucket-display.js'
import {Model} from './model.js'

export function youtubeBuckets() {
  return html`
    <h1>YouTube Buckets</h1>
    ${bucketSwitcher()}
    ${Model.session.editing ? bucketEditor() : bucketDisplay()}
  `;
}

injectStyle(`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

body {
  background-color: #202020;
  font-family: 'Roboto', sans-serif;
  color: #efefef;
  margin-left: 20px;
  margin-right: 60px;
}

h1 {
  user-select: none;
}

h1:hover {
  text-decoration: underline red;
}
`);
