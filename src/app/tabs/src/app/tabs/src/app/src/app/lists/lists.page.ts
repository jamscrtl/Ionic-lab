import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonList, IonListHeader, IonItem, IonLabel,
  IonItemSliding, IonItemOptions, IonItemOption,
  IonAvatar, IonIcon, IonBadge, IonCheckbox
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { archiveOutline, trashOutline, personCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonList, IonListHeader, IonItem, IonLabel,
    IonItemSliding, IonItemOptions, IonItemOption,
    IonAvatar, IonIcon, IonBadge, IonCheckbox
  ]
})
export class ListsPage {
  students = [
    { name: 'Juan Dela Cruz', course: 'BSIS 3A', done: false },
    { name: 'Maria Santos', course: 'BSIS 3B', done: true },
    { name: 'Pedro Reyes', course: 'BSIS 2A', done: false },
  ];

  constructor() {
    addIcons({ archiveOutline, trashOutline, personCircleOutline });
  }

  toggleDone(student: { done: boolean }) {
    student.done = !student.done;
  }
  }
