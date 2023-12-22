import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'study-angular-todolist-entry',
  templateUrl: './entry.component.html',
})
export class RemoteEntryComponent {}
