import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Artist } from '../artist';
import { Album } from '../album';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Artist[];
  albums: Album[];

  constructor(private spotifyService: SpotifyService,
              private actRoute: ActivatedRoute, public sanitizer: DomSanitizer ) { }

  ngOnInit() {
    this.actRoute.params
      .map(params => params['id'])
        .subscribe((id) => {
          this.spotifyService.getArtist(id)
            .subscribe(artist => {
              this.artist = artist;
              // console.log(artist);
            })
            this.spotifyService.getAlbums(id)
            .subscribe(albums => {
              this.albums = albums.data;
              // console.log(albums.data);
            })
        } )
  }

}
