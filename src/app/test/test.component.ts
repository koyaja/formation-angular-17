import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

  name: string = 'KANHOUN academie';

  link: string = 'https://www.kanhoun.com';
  counters: number =0;

  counterChange() {
    console.log('Click button increment');
    this.counters += 1;

    this.name = this.name + ' '
     + this.counters ;
  }


  date:any = new Date();
}
