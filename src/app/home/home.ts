import { Component,inject,Inject } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Nav } from '../nav/nav';
import { HousingLocation } from '../housing-location/housing-location';
import { Footer } from '../footer/footer';
import { Housing } from '../housing';
import { HousingLocationInfo } from '../housinglocation';



@Component({
  selector: 'app-home',
  standalone:true,
  imports: [Nav, Footer, CommonModule, HousingLocation],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
housingLocationList:HousingLocationInfo[] = []
hosingService : Housing = inject(Housing)


constructor() {
    this.housingLocationList = this.hosingService.getAllHouseLocations();
}
 
}
