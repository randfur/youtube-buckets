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

export const presetColors = [
  '#f00',
  '#f70',
  '#ff0',
  '#7f0',
  '#0f0',
  '#0ff',
  '#55f',
  '#f0f',
  '#fff',
  '#777',
];

export function pickRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function enterIsClick(event) {
  if (event.key == 'Enter') {
    event.target.click();
  }
}

export const isTouchScreen = 'ontouchstart' in document.documentElement;