import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { CelebrationComponent } from './celebration/celebration.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { OffersComponent } from './offers/offers.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './locations/location/location.component';
import { GalleryComponent } from './gallery/gallery/gallery.component';

const routes: Routes = [
  {path: 'accomodation', component: AccomodationComponent },
  { path: 'celebration', component: CelebrationComponent},
  { path: 'food-beverage', component: FoodBeverageComponent},
  {path: 'foodbeverage', redirectTo: 'food-beverage', pathMatch: 'full'},
  {path: 'lifestyle', component: LifestyleComponent},
  {path: 'weddings', component: WeddingsComponent},
  {path: 'offers', component: OffersComponent},
  {path: 'location', component: LocationComponent},
  {path: 'gallery', component: GalleryComponent},



  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: '', component: HomeComponent }
 ];

@NgModule({
  declarations: [ ],
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]

})
export class AppRoutingModule { }
