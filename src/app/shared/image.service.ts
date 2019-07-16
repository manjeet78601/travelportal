import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  VisibleImage = [];
  getImages() {
    return this.VisibleImage = IMAGES.slice(0);

  }
  getImage(id: number){
    return IMAGES.slice(0).find(image => image.id === id);
  }


}

const IMAGES = [
  {'id': 1, 'category': 'All tourism Places', 'caption': 'view from boat', 'url': 'assets/images/himachal12.jpg'},

  {'id': 2, 'category': 'boats', 'caption': 'view from boat', 'url': 'assets/images/banner.jpg'},
  {'id': 3, 'category': 'boats', 'caption': 'view from boat', 'url': 'assets/images/him.jpg'},
  {'id': 4, 'category': 'boats', 'caption': 'view from boat', 'url': 'assets/images/himachal.jpg'},
  {'id': 5, 'category': 'boats', 'caption': 'view from boat', 'url': 'assets/images/kalpa.jpg'},

  {'id': 6, 'category': 'boats', 'caption': 'view from boat', 'url': 'assets/images/killerpangichamba.jpg'},

  {'id': 7, 'category': 'boats', 'caption': 'view from boat', 'url': 'assets/images/manikaransahib.jpg'},

  // {'id': 8, 'category': 'boats', 'caption': 'view from boat', 'url': 'assets/img/boats.jpg'},

  // {'id': 9, 'category': 'boats', 'caption': 'view from boat', 'url': 'assets/img/boats.jpg'},

  // {'id': 10, 'category': 'boats', 'caption': 'view from boat', 'url': 'assets/img/boats.jpg'},

  // {'id': 11, 'category': 'boats', 'caption': 'view from boat', 'url': 'assets/img/boats.jpg'},

  // {'id': 12, 'category': 'boats', 'caption': 'view from boat', 'url': 'assets/img/boats.jpg'},

  // {'id': 13, 'category': 'boats', 'caption': 'view from boat', 'url': 'assets/img/boats.jpg'},

  // {'id': 14, 'category': 'boats', 'caption': 'view from boat', 'url': 'assets/img/boats.jpg'},

];
