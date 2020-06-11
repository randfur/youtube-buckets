import {html} from 'https://unpkg.com/lit-html?module';
import {classMap} from 'https://unpkg.com/lit-html/directives/class-map?module';
import {injectStyle, enterIsClick} from './utils.js'
import {Controller} from './controller.js';
import {Model} from './model.js';

export function bucketSwitcher() {
  const editing = Model.session.editing;
  return html`
    <div class="bucket-switcher">
      <button class="edit-button" @click="${toggleEdit}"><span class="material-icons">${editing ? 'view_comfy' : 'edit'}</span>${editing ? 'VIEW' : 'EDIT'}</button>
      ${Model.stored.buckets.map(bucket => {
        const active = bucket.name === Model.session.activeBucketName;
        const classes = classMap({
          tab: true,
          active,
        });
        return html`
          <button class="${classes}" style="--color: ${bucket.color}" .bucket="${bucket}" @click="${tabClick}" @keypress="${enterIsClick}" tabIndex="0">
            ${bucket.name}
          </button>
        `;
      })}
      <button class="tab new-bucket" @click="${newBucket}"><span class="material-icons">add</span></button>
    </div>
  `;
}

injectStyle(`
.bucket-switcher {
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  position: relative;
}

.edit-button {
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

.tab {
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;

  height: 30px;
  padding-left: 20px;
  padding-right: 20px;
  border-style: none;
  border-radius: 10px 10px 0 0;
  margin-right: 1px;

  font-size: 18px;
  background-color: #333;
  color: var(--color);
  white-space: nowrap;
}

.tab:hover {
  color: white;
  user-select: none;
}

.tab.active {
  background-color: var(--color);
  color: black;
  font-size: 24px;
  font-weight: bold;
  height: 35px;
}

.tab.new-bucket:hover, .tab.new-bucket:focus {
  background-color: #444
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

function newBucket() {
  Controller.newBucket();
}