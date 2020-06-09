import {Model} from './model.js';
import {rerender} from './main.js';
import {getActiveBucket} from './utils.js';

export class Controller {
  static switchToBucket(bucketName) {
    Model.session.activeBucketName = bucketName;
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