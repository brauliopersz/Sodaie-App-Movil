import { Component, OnInit } from '@angular/core';
import { IonContent, IonItem, IonLabel, IonList } from '@ionic/angular';

@Component({
  selector: 'app-repertoire',
  templateUrl: './repertoire.page.html',
  styleUrls: ['./repertoire.page.scss'],
  standalone: false,
})
export class RepertoirePage implements OnInit {

  items = [

    {titulo: "HOLA PERDIDA", artista:"EL BLACHY", anio:"2025", participacion:"INTERPRETE"},
    { titulo: "CUANTO TE QUIERO", artista: "LA BANDA", anio: "2025", participacion: "INTERPRETE" },
    { titulo: "NO SE OLVIDAR", artista: "CHIQUITO TEAM BAND", anio: "2025", participacion: "GUIRA, BONGO" },
  ]

  constructor() { }

  ngOnInit() {
  }

}
