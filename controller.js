import {Model} from './model.js';
import {rerender} from './main.js';
import {getActiveBucket, pickRandom, presetColors} from './utils.js';

export class Controller {
  static switchToBucket(bucketName) {
    Model.session.activeBucketName = bucketName;
    rerender();
  }
  
  static newBucket() {
    const existingNames = new Set(Model.stored.buckets.map(bucket => bucket.name));
    let attempts = 1;
    let newName = 'Untitled';
    while (existingNames.has(newName)) {
      newName = `Untitled ${++attempts}`;
    }
    Model.stored.buckets.push({
      name: newName,
      color: pickRandom(presetColors),
      channelIds: [],
    });
    Model.session.activeBucketName = newName;
    Model.session.editing = true;
    rerender();
  }

  static toggleEdit() {
    Model.session.editing ^= true;
    rerender();
  }

  static updateName(newName) {
    if (newName && Model.stored.buckets.every(bucket => bucket.name != newName)) {
      getActiveBucket().name = newName;
      Model.session.activeBucketName = newName;
      rerender();
    }
  }
  
  static deleteBucket() {
    const buckets = Model.stored.buckets;
    for (let i = 0; i < buckets.length; ++i) {
      if (buckets[i].name == Model.session.activeBucketName) {
        buckets.splice(i, 1);
        Model.session.activeBucketName = buckets.length > 0 ? buckets[Math.min(i, buckets.length - 1)].name : null;
        rerender();
        return;
      }
    }
  }
  
  static setColor(color) {
    getActiveBucket().color = color;
    rerender();
  }

  static addChannel(channel) {
    for (const [id, otherChannel] of Object.entries(Model.downloaded.channels)) {
      if (otherChannel == channel) {
        getActiveBucket().channelIds.push(id);
        rerender();
        return;
      }
    }
  }

  static removeChannel(channel) {
    for (const [id, otherChannel] of Object.entries(Model.downloaded.channels)) {
      if (otherChannel == channel) {
        const bucket = getActiveBucket();
        bucket.channelIds.splice(bucket.channelIds.indexOf(id), 1);;
        rerender();
        return;
      }
    }
  }
}