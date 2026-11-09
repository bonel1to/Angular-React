import { Component, inject } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-counter-b',
  standalone: true,
  templateUrl: './counter-b.html',
  styleUrl: './counter-b.css',
})
export class CounterBComponent {
  counter = inject(CounterService);
}
