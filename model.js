/*
interface Stored {
  buckets: [Bucket]
}

interface Bucket {
  name: string,
  colour: string,
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
    buckets: [],
  };
  static downloaded = {
    channels: [],
  };
  static session = {
    activeBucketName: null,
    editing: false,
  };
}
