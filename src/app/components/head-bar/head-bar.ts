import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  imports: [FontAwesomeModule],
  selector: 'app-head-bar',
  styleUrl: './head-bar.css',
  templateUrl: './head-bar.html',
})
export class HeadBar {
  faHeart = faHeart;
  router=inject(Router)

  navigateToWishList() {
    this.router.navigate(['wish-list']);
  }
}
