import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonList, IonListHeader, IonItem, IonLabel,
  IonToggle, IonRange, IonIcon, IonButton,
  ActionSheetController, AlertController
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { notificationsOutline, moonOutline, volumeHighOutline, trashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonList, IonListHeader, IonItem, IonLabel,
    IonToggle, IonRange, IonIcon, IonButton
  ]
})
export class SettingsPage {
  darkMode = false;
  notifications = true;
  volume = 50;

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController
  ) {
    addIcons({ notificationsOutline, moonOutline, volumeHighOutline, trashOutline });
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Account Options',
      buttons: [
        { text: 'Change Password', role: undefined },
        { text: 'Log Out', role: 'destructive' },
        { text: 'Cancel', role: 'cancel' }
      ]
    });
    await actionSheet.present();
  }

  async confirmClearData() {
    const alert = await this.alertCtrl.create({
      header: 'Clear App Data?',
      message: 'This action cannot be undone.',
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        { text: 'Clear', role: 'destructive' }
      ]
    });
    await alert.present();
  }
    }

