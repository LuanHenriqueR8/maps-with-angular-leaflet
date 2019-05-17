import { Component, OnInit } from '@angular/core';
import L from 'leaflet';

@Component({
  selector: 'app-search-on-map',
  templateUrl: './search-on-map.component.html',
  styleUrls: ['./search-on-map.component.css']
})
export class SearchOnMapComponent implements OnInit {

  protected map: any;
  protected latitude: string = '';
  protected longitude: string = '';

  constructor() {
  }

  ngOnInit() {
    this.constructMap();
  }

  searchOnMap() {
    this.constructMap();
  }

  protected constructMap() {
    this._constructMap(this.latitude, this.longitude);
  }

  /**
   * http://yellowthailand.com/leafletgeo.html a website reference to search for some place in the world
   *
   * */
  private _constructMap(latitude: string, longitude: string) {
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: `Angular with Leaflet`
      }),
      /** @latlng defines latitude and longitude focus of the when map starts*/
      latlng = L.latLng(latitude, longitude);
      // latlng = L.latLng();

    this.map = L.map('map', {center: latlng, zoom: 1, layers: [tiles]});

    /** creation on a point marker on the map */
    L.marker([latitude, longitude]).addTo(this.map);

    /** applying a zoom on map */
    this.map.setZoom(4);
  }

}
