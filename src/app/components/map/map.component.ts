import { Component, OnInit } from '@angular/core';
import { Marker } from '../../classes/marker.class';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat: number = 37.809300;
  lng: number = -122.469855;
  markers: Marker[] = [];

  constructor() {
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition((position: Position) => {
    //     if (position) {
    //       this.lat = position.coords.latitude;
    //       this.lng = position.coords.longitude;
    //     }
    //   });
    // }

    const newMaker = new Marker(this.lat, this.lng);
    this.markers.push(newMaker);
  }

  ngOnInit() {
  }

  addMarker(event) {
    const coords: { lat: number, lng: number } = event.coords;

    const newMarker = new Marker(coords.lat, coords.lng);
    this.markers.push(newMarker);
  }

}
