import {html} from 'https://unpkg.com/lit-html?module';
import {injectStyle, getActiveBucket} from '/utils.js'
import {bucketSwitcher} from '/ui/bucket-switcher.js'
import {bucketEditor} from '/ui/bucket-editor.js'
import {bucketDisplay} from '/ui/bucket-display.js'
import {Model} from '/model.js'

export function youtubeBuckets() {
  return html`
    <div class="header">
      <h1>YouTube Buckets</h1>
      <span class="material-icons help-icon" tabIndex="0">help</span>
    </div>
    ${bucketSwitcher()}
    ${getActiveBucket()
      ? (Model.session.editing ? bucketEditor() : bucketDisplay())
      : html`<div class="create-hint">Create a bucket ⮭</div>`
    }
  `;
}

injectStyle(`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

@media (min-width: 600px) {
  body {
    margin-left: 20px;
    margin-right: 20px;
  }
}

body {
  background-color: #202020;
  font-family: 'Roboto', sans-serif;
  color: #efefef;
}

.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

h1 {
  user-select: none;
}

h1:hover {
  text-decoration: underline red;
}

.help-icon {
  font-size: 30px;
  user-select: none;
}

.help-icon::before {
  background: blue;
  color: green;
  content: 'bark dogs';
}

.create-hint {
  margin-top: 10px;
  font-size: 20px;
}
`);
