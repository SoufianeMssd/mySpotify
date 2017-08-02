import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SpotifyService } from './spotify.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SpotifyService]
})
export class AppComponent {
  title = 'app';
}
