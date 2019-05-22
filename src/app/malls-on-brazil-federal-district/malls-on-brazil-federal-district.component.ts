import { Component, OnInit } from '@angular/core';
import L from 'leaflet';
import { Mall } from '../shared/models/mall.model';
import { MallsOnBrazilFederalDistrictService } from '../shared/services/malls-on-brazil-federal-district.service';

@Component({
  selector: 'app-malls-on-brazil-federal-district',
  templateUrl: './malls-on-brazil-federal-district.component.html',
  styleUrls: ['./malls-on-brazil-federal-district.component.css']
})
export class MallsOnBrazilFederalDistrictComponent implements OnInit {

  protected map: any;
  protected malls: Mall[] = [];

  constructor(
    private mallService: MallsOnBrazilFederalDistrictService
  ) {
    this.malls = this.mallService.getMallsOnBrazilFederalDistrict();
  }

  ngOnInit() {
    this.constructMap();
  }

  /**
   * http://yellowthailand.com/leafletgeo.html a website reference to search for some place in the world
   *
   * */
  constructMap() {
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: `Angular with Leaflet`
      }),
      /** @latlng defines latitude and longitude focus of the when map starts*/
      latlng = L.latLng(-15.791646, -47.880076);

    this.map = L.map('map', {center: latlng, zoom: 0, layers: [tiles]});

    /** creation on a point marker on the map */
    this.malls.forEach(item => {
      L.marker([item.latitude, item.longitude])

        /** binding the popup on the marker, it can see with a click */
        .bindPopup(item.name)
        .Control.GlobeMiniMap()

        /** adding the informations on map */
        .addTo(this.map);
    });

    /** applying a zoom on map */
    this.map.setZoom(11);
  }
}
