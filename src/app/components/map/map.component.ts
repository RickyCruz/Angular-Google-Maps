import { Component, OnInit } from '@angular/core';
import { Marker } from '../../classes/marker.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditComponent } from './edit.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat: number = 37.809300;
  lng: number = -122.469855;
  markers: Marker[] = [];

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) {
    if (localStorage.getItem('markers')) {
      this.markers = JSON.parse(localStorage.getItem('markers'));
    }
  }

  ngOnInit() {
  }

  add(event) {
    const coords: { lat: number, lng: number } = event.coords;

    const newMarker = new Marker(coords.lat, coords.lng);
    this.markers.push(newMarker);
    this.updateStorage();

    this.snackBar.open('Marker created', 'Close', { duration: 2500 });
  }

  delete(markerPosition: number) {
    this.markers.splice(markerPosition, 1);
    this.updateStorage();
    this.snackBar.open('Marker deleted', 'Close', { duration: 2500 });
  }

  edit(marker: Marker) {
    const dialogRef = this.dialog.open(EditComponent, {
      width: '250px',
      data: { title: marker.title, description: marker.description }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  updateStorage() {
    localStorage.setItem('markers', JSON.stringify(this.markers));
  }

}
