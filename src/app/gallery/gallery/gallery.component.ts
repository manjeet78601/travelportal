import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ImageService } from 'src/app/shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {
 title: 'Gallery';
 @Input() filterBy?: string = 'all';
 visibleImages: any [] = [];

  constructor(private imageServices: ImageService) {
    this.visibleImages = this.imageServices.getImages();
   }

  ngOnChanges() {
this.visibleImages = this.imageServices.getImages();
  }

}
