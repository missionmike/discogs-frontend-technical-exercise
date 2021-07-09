export interface ILabel {
  url: string;
  name: string;
}

export interface IRelease {
  status: string;
  artist: string;
  catno: string;
  thumb: string;
  format: string;
  stats: {
    user: {
      in_collection: number;
      in_wantlist: number;
    };
    community: {
      in_collection: number;
      in_wantlist: number;
    };
  };
  resource_url: string;
  title: string;
  year: number;
  id: number;
}
