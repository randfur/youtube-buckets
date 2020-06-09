import {Model} from './model.js';

export function injectStyle(css) {
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
}

export function getActiveBucket() {
  return Model.stored.buckets.find(bucket => bucket.name == Model.session.activeBucketName);
}

export function getBucketChannels(bucket) {
  return bucket.channelIds.map(id => Model.downloaded.channels[id]);
}