import { Injectable } from '@angular/core';
import { Mall } from '../models/mall.model';

@Injectable({
  providedIn: 'root'
})
export class MallsOnBrazilFederalDistrictService {

  constructor() { }

  public getMallsOnBrazilFederalDistrict(): Mall[] {
    return this.malls;
  }

  public malls: Mall[] = [
    {
      name: 'Iguatemi Brasilia',
      latitude: -15.720211,
      longitude: -47.886549
    },
    {
      name: 'Boulevard Shopping',
      latitude: -15.718641,
      longitude: -47.886646
    },
    {
      name: 'Brasília Shopping',
      latitude: -15.786702,
      longitude: -47.889027
    },
    {
      name: 'ParkShopping Brasília',
      latitude: -15.833238,
      longitude: -47.955316
    },
    {
      name: 'Conjunto Nacional',
      latitude: -15.791049,
      longitude: -47.883133
    },
    {
      name: 'Pátio Brasil Shopping',
      latitude: -15.795928,
      longitude: -47.892005
    },
    {
      name: 'Shopping Pier 21 Paranoá',
      latitude: -15.817751,
      longitude: -47.875084
    },
    {
      name: 'Felicittá Shopping',
      latitude: -15.833671,
      longitude: -48.036994
    },
    {
      name: 'Shopping Fashion Mall',
      latitude: -15.802045,
      longitude: -47.893958
    },
    {
      name: 'Águas Claras Shopping',
      latitude: -15.841633,
      longitude: -48.023771
    },
    {
      name: '',
      latitude: 0,
      longitude: 0
    },
    {
      name: '',
      latitude: 0,
      longitude: 0
    },
    {
      name: '',
      latitude: 0,
      longitude: 0
    }
  ];
}
