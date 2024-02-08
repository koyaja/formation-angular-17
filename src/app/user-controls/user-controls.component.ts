import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-controls',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-controls.component.html',
  styleUrl: './user-controls.component.scss'
})
export class UserControlsComponent {
 isAdmin:boolean = false;
   fruits: string[] = ['Apple', 'Orange', 'Banana'];
  fruit: string = 'Orange';

  tooggle() {
    this.isAdmin = !this.isAdmin;
  }
}
