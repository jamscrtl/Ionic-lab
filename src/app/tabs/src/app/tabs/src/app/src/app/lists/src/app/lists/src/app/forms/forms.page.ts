import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonList, IonItem, IonLabel, IonInput, IonTextarea,
  IonSelect, IonSelectOption, IonCheckbox, IonRadioGroup,
  IonRadio, IonToggle, IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonList, IonItem, IonLabel, IonInput, IonTextarea,
    IonSelect, IonSelectOption, IonCheckbox, IonRadioGroup,
    IonRadio, IonToggle, IonButton
  ]
})
export class FormsPage {
  fullName = '';
  bio = '';
  course = '';
  agree = false;
  yearLevel = '1';
  notifications = true;

  submit() {
    console.log({
      fullName: this.fullName,
      bio: this.bio,
      course: this.course,
      agree: this.agree,
      yearLevel: this.yearLevel,
      notifications: this.notifications
    });
  }
  }
        
