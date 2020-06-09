import {html} from 'https://unpkg.com/lit-html?module';
import {injectStyle, getActiveBucket, getBucketChannels} from './utils.js'
import {Controller} from './controller.js';
import {Model} from './model.js';

export function bucketEditor() {
  const activeBucket = getActiveBucket();
  if (!activeBucket) {
    return html`No active bucket`;
  }

  let channelsInActive = new Set(getBucketChannels(activeBucket));
  let channelsInAny = new Set(Model.stored.buckets.flatMap(bucket => getBucketChannels(bucket)));
  let channelsInNone = Object.values(Model.downloaded.channels).filter(channel => !channelsInAny.has(channel));
  let channelsInOthers = Array.from(channelsInAny).filter(channel => !channelsInActive.has(channel));

  channelsInActive = Array.from(channelsInActive).sort(compareChannels);
  channelsInAny = Array.from(channelsInAny).sort(compareChannels);
  channelsInNone.sort(compareChannels);
  channelsInOthers.sort(compareChannels);

  const channelBucketsMap = new Map();
  for (const bucket of Model.stored.buckets) {
    for (const channel of getBucketChannels(bucket)) {
      if (!channelBucketsMap.has(channel)) {
        channelBucketsMap.set(channel, []);
      }
      channelBucketsMap.get(channel).push(bucket);
    }
  }
  
  function renderChannel(channel) {
    return html`
      <div>
        <img
  }
  
  return html`
    <div class="bucket-editor">
      <input type="text" class="name-field" value="${activeBucket.name}" @change="${nameChange}">
      <div class="colour-choices">colours</div>
      <div class="in-bucket-list">
        ${channelsInActive.map(channel => channel.name)}
      </div>
      <span class="direction-hint material-icons">arrow_back_ios</span>
      <div class="not-in-bucket-list">
        No bucket<br>
        ${channelsInNone.map(channel => channel.name)}
        Other bucket<br>
        ${channelsInOthers.map(channel => channel.name)}
      </div>
    </div>    
  `;
}

injectStyle(`
.bucket-editor {
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 30px 1fr;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  grid-template-areas:
    "name    .    colours"
    "in-list hint not-in-list";
}

.name-field {
  width: 80%;
  background-color: transparent;
  border-style: none;
  border-bottom-style: solid;
  color: white;
  font-size: 24px;
  grid-area: name;
}

.colour-choices {
  grid-area: colours;
}

.in-bucket-list {
  grid-area: in-list;
  border-style: solid;
  border-width: 1px;
  border-color: #fff4;
  border-radius: 10px;
  min-height: 30px;
}

.direction-hint {
  grid-area: hint;
  justify-self: end;
  margin-top: 4px;
}

.not-in-bucket-list {
  grid-area: not-in-list;
}
`);

function compareChannels(channelA, channelB) {
  return channelA.name.localeCompare(channelB.name);
}

function nameChange(event) {
  Controller.updateName(event.target.value);
}

function doneClick(event) {
  Controller.exitEdit();
}