import { Component } from '@angular/core';
import { Film, FILMS } from '../models/film';

@Component({
  selector: 'app-wishlist',
  standalone: false,
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {

  wishlist : Film[] = FILMS;

  removeFromWishlist(id : number){
    console.log("Film ", id , "Removed from wishlist")
  }

}
