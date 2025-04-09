// types.ts
export interface Artist {
    id: string;
    name: string;
  }
  
  export interface Song {
    id: string;
    title: string;
    artists: Artist[];
    producers?: Artist[];
    remixers?: Artist[];
  }
  
  export interface Connection {
    type: 'collaboration' | 'producer' | 'bandMember' | 'remix';
    song: Song;
    artists: Artist[];
  }
  
  // ... other types