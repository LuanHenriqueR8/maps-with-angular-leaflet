import { Component, OnInit } from '@angular/core';
import L from 'leaflet';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  protected map: any;

  constructor() {
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
      latlng = L.latLng(-15.79350550, -47.88155210);

    this.map = L.map('map', {center: latlng, zoom: 0, layers: [tiles]});

    /** creation on a point marker on the map */
    L.marker([-15.79350550, -47.88155210])

      /** adding the informations on map */
      .addTo(this.map);

    /** applying a zoom on map */
    this.map.setZoom(4);
  }
}
