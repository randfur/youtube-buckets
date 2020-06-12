import {Model} from './model.js';

export function injectStyle(css) {
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
}

export const presetColors = [
  '#f00',
  '#f70',
  '#ff0',
  '#7f0',
  '#0f0',
  '#0ee',
  '#07f',
  '#44f',
  '#70f',
  '#fff',
  '#777',
];

export function createDefaultBucket() {
  return {
    name: 'Untitled',
    color: presetColors[0],
    channelIds: [],
  };
}

export function enterIsClick(event) {
  if (event.key == 'Enter') {
    event.target.click();
  }
}

export const isTouchScreen = 'ontouchstart' in document.documentElement;

export function getActiveBucket() {
  return Model.stored.buckets.find(bucket => bucket.name == Model.session.activeBucketName);
}

export function getBucketChannels(bucket) {
  return bucket.channelIds.map(id => Model.downloaded.channels[id]);
}