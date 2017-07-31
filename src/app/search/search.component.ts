import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
     providers: [SpotifyService]
  })
export class SearchComponent implements OnInit {
  searchStr: string ;
  // searchRes: Artist[];
   constructor(private spotifyService: SpotifyService) { }
  searchMusic() {
    this.spotifyService.searchMusic(this.searchStr)
      .subscribe(res => {
        // this.searchRes =
       console.log(res.data);
      });
  }
  ngOnInit() {
  }

}
