import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Artist } from '../artist';
import { Album } from '../album';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  id: string;
  album: Album[];

  constructor(private spotifyService: SpotifyService,
              private actRoute: ActivatedRoute, public sanitizer: DomSanitizer ) { }


  ngOnInit() {
    this.actRoute.params
      .map(params => params['id'])
        .subscribe((id) => {
          this.spotifyService.getAlbum(id)
            .subscribe(album => {
              this.album = album;
              console.log(album);
            })
        } )
  }

}
