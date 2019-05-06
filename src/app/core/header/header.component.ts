import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { StringHumanizePipe } from '../../string-humanize-pipe/string-humanize.pipe';
import { AuthService } from 'src/app/modules/auth/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  router_url: String = '';
  isLoggedIn: Boolean;
  constructor( private router: Router,
    private authService: AuthService,
    private matSnackbar: MatSnackBar) { }

  async ngOnInit() {
    this.isLoggedIn = await this.authService.isLoggedIn();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.router_url = event.url;
      }
    });
  }

  async logout() {
    const logout = await this.authService.signOut();
    if (logout) {
      localStorage.removeItem('uid');
      this.matSnackbar.open('Logged Out Successfully', 'close');
      this.router.navigate(['auth/login']);
    } else {
      this.matSnackbar.open('Please Login', 'close');
      this.router.navigate(['auth/login']);
    }
  }

}
