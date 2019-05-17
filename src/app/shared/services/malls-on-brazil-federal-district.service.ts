import { Injectable } from '@angular/core';
import { Mall } from '../models/mall.model';

@Injectable({
  providedIn: 'root'
})
export class MallsOnBrazilFederalDistrictService {

  public malls: Mall[] = [
    {
      name: 'Iguatemi Brasilia',
      latitude: -15.720139,
      longitude: -47.885445
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

  constructor() { }

  public getMallsOnBrazilFederalDistrict(): Mall[] {
    return this.malls;
  }
}
