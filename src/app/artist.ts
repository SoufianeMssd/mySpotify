import { Album } from './album';
import { ArtistInfo } from './artist-info';
export class Artist {
    id: number;
  artist: ArtistInfo[];
  genres: any;
  name: string;
  album: Album[];
  type: string;
}
