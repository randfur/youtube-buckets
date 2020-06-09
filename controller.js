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
    }
    rerender();
  }
}