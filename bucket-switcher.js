import {html} from 'https://unpkg.com/lit-html?module';
import {classMap} from 'https://unpkg.com/lit-html/directives/class-map?module';
import {injectStyle} from './utils.js'
import {Controller} from './controller.js';
import {Model} from './model.js';

export function bucketSwitcher() {
  const editing = Model.session.editing;
  return html`
    <div class="bucket-switcher">
      ${Model.stored.buckets.map(bucket => {
        const active = bucket.name === Model.session.activeBucketName;
        const classes = classMap({
          tab: true,
          active,
        });
        return html`
          <button class="${classes}" .bucket="${bucket}" @click="${tabClick}" tabIndex="0">
            ${bucket.name}
          </button>
        `;
      })}
      <button class="edit-button" @click="${toggleEdit}"><span class="material-icons">${editing ? 'view_comfy' : 'edit'}</span>${editing ? 'VIEW' : 'EDIT'}</button>
    </div>
  `;
}

injectStyle(`
.bucket-switcher {
  display: flex;
  align-items: flex-end;
  position: relative;
}

.tab {
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;

  height: 30px;
  width: 200px;
  border-style: none;
  border-radius: 10px 10px 0 0;
  margin-right: 1px;

  font-size: 18px;
  background-color: #333;
  color: black;
}

.tab:hover {
  color: #fffa;
  user-select: none;
}

.tab.active {
  background-color: #555;
  color: white;
  font-size: 20px;
  height: 35px;
  justify-content: center;
}

.edit-button {
  position: absolute;
  top: 0px;
  right: 0px;

  display: inline-flex;
  align-items: center;

  border-style: none;
  background-color: #fff1;
  color: white;
  border-radius: 4px;
  padding-top: 3px;
  padding-right: 8px;
  margin-right: 15px;
}

.edit-button:hover {
  border-style: none;
  background-color: #fff3;
}

.edit-button > span.material-icons {
  position: relative;
  top: -1px;
  margin-right: 4px;
}
`);

function tabClick(event) {
  let element = event.target;
  while (true) {
    if (!element) {
      console.warn('No bucket found for tab.');
      return;
    }
    if (element.bucket) {
      Controller.switchToBucket(element.bucket.name);
      return;
    }
    element = element.parentElement;
  }
}

function toggleEdit() {
  Controller.toggleEdit();
}