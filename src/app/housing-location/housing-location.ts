
import {Component, Input, input} from '@angular/core';
import {HousingLocationInfo} from '../housinglocation';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-housing-location',
  imports: [RouterLink],
  templateUrl: './housing-location.html',
  styleUrl: './housing-location.css'
})
export class HousingLocation {
     @Input() houseLocation!: HousingLocationInfo;
}
