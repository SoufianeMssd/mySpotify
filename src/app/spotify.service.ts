import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SpotifyService {
  private SearchUrl: string;
  private ArtistUrl: string;
  private AlbumsUrl: string;
  private AlbumUrl: string;
  constructor(private _http: Http) {

  }
  searchMusic(str: string, type= 'artist') {
/*     this.SearchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
 */    this.SearchUrl = 'http://api.deezer.com/search?q=artist:"' + str + '"';
    return this._http.get(this.SearchUrl)
        .map(res => res.json());
  }
  getArtist(id: string) {
/*     this.SearchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
 */    this.ArtistUrl = 'http://api.deezer.com/artist/' + id ;
    return this._http.get(this.ArtistUrl)
        .map(res => res.json());
  }
  getAlbums(artistId: string) {
   this.AlbumsUrl = 'http://api.deezer.com/artist/' + artistId + '/albums' ;
    return this._http.get(this.AlbumsUrl)
        .map(res => res.json());
  }
      getAlbum(id: string) {
   this.AlbumUrl = 'http://api.deezer.com/album/' + id ;
    return this._http.get(this.AlbumUrl)
        .map(res => res.json());
  }

}
