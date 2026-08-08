import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
  IonImg, IonButton, IonIcon, IonGrid, IonRow, IonCol
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heartOutline, shareSocialOutline, bookmarkOutline } from 'ionicons/icons';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
    IonImg, IonButton, IonIcon, IonGrid, IonRow, IonCol
  ]
})
export class CardsPage {
  constructor() {
    addIcons({ heartOutline, shareSocialOutline, bookmarkOutline });
  }
}
