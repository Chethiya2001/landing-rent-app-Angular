import { Component, inject, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nav } from '../nav/nav';
import { HousingLocation } from '../housing-location/housing-location';
import { Footer } from '../footer/footer';
import { Housing } from '../housing';
import { HousingLocationInfo } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocation],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  housingLocationList: HousingLocationInfo[] = [];
  hosingService: Housing = inject(Housing);
  filterdHouseLocationList: HousingLocationInfo[] = [];

  constructor() {
    this.housingLocationList = this.hosingService.getAllHouseLocations();
    this.filterdHouseLocationList = this.housingLocationList;
  }
  filterResults(text: string) {
    if (!text) {
      this.filterdHouseLocationList = this.housingLocationList;
    }
    this.filterdHouseLocationList = this.housingLocationList.filter(
      (h) =>
      
        h?.city.toLowerCase().includes(text.toLocaleLowerCase())||
         h?.state.toLowerCase().includes(text.toLocaleLowerCase())
    );
  }
}
