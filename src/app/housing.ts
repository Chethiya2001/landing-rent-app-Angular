import { Injectable } from '@angular/core';
import { HousingLocationInfo } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class Housing {
  url = "http://localhost:3000/locations"
  constructor() {}

  async getAllHouseLocations(): Promise<HousingLocationInfo[]>{
    const data = await fetch(this.url)
    return data.json() ?? [];
  }
  async getHouseLocationsById(id: number):Promise<HousingLocationInfo | undefined>{
    const data = await fetch(`${this.url}/${id}`)
    return data.json() ?? [];
  } 
  submitApplication(firstName : string ,lastName:string,email:string){
    console.log(firstName,lastName,email);
  }
}
