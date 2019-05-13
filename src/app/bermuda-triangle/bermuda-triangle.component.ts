import { Component, OnInit } from '@angular/core';
import L from 'leaflet';
import { BermudaTriangleModel } from '../../shared/models/bermuda-triangle.model';

@Component({
  selector: 'app-bermuda-triangle',
  templateUrl: './bermuda-triangle.component.html',
  styleUrls: ['./bermuda-triangle.component.css']
})
export class BermudaTriangleComponent implements OnInit {

  protected map: any;
  protected bermudaTriangle: BermudaTriangleModel = new BermudaTriangleModel();

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
      latlng = L.latLng(22.12009390, -69.45785417);

    this.map = L.map('map', {center: latlng, zoom: 0, layers: [tiles]});

    /** creation on a point marker on the map */
    this.bermudaTriangle.points.forEach(item => {
      L.marker([item.latitude, item.longitude]).addTo(this.map);
    });

    /** creation a polygon marker on the map */
    L.polygon([
      [this.bermudaTriangle.points[0].latitude, this.bermudaTriangle.points[0].longitude],
      [this.bermudaTriangle.points[1].latitude, this.bermudaTriangle.points[1].longitude],
      [this.bermudaTriangle.points[2].latitude, this.bermudaTriangle.points[2].longitude]
    ]).addTo(this.map);

    /** applying a zoom on map */
    this.map.setZoom(4);
  }
}
