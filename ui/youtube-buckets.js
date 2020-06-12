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
      <div class="help-section" tabIndex="0">
        <div class="help-text">
          <p>
            <strong>What?</strong><br>
            This site lets you categorise your YouTube subscriptions into buckets and view each categorised video feed.
          </p>
          <p>
            <strong>Why?</strong><br>
            Too many diverse YouTube subscriptions means having to sift through content to find what you're currently interested in watching.
          </p>
        </div>
        <span class="material-icons help-icon">help</span>
      </div>
    </div>
    ${bucketSwitcher()}
    ${Model.session.editing ? bucketEditor() : bucketDisplay()}
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
  align-items: flex-start;
  justify-content: space-between;
}

h1 {
  user-select: none;
}

h1:hover {
  text-decoration: underline red;
}

.help-section {
  position: relative;
}

.help-icon {
  display: block;
  font-size: 30px;
  user-select: none;
}

.help-text {
  display: none;
}

.help-section:focus > .help-text {
  z-index: 1;
  display: block;
  position: absolute;
  right: calc(100% + 10px);
  width: 400px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #000a;
  border-radius: 10px;
}
`);
