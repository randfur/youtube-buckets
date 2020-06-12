import {createDefaultBucket} from '/utils.js';

/*
interface Stored {
  buckets: [Bucket]
}

interface Bucket {
  name: string,
  color: string,
  channelIds: [string],
}

interface Downloaded {
  channels: interface {
    [id: string]: Channel,
  },
}

interface Channel {
  name: string,
  url: string,
  iconUrl: string,
  videos: [Video],
}

interface Video {
  name: string,
  url: string,
  durationSeconds: number,
  uploadDate: number,
  thumbnailUrl: string,
  channelId: string,
}

interface Session {
  activeBucketName: string,
  editing: bool,
}
*/

export class Model {
  static stored = {
    buckets: [createDefaultBucket()],
  };
  static downloaded = {
    channels: [],
  };
  static session = {
    activeBucketName: Model.stored.buckets[0].name,
    editing: true,
  };
}

window.model = Model;
