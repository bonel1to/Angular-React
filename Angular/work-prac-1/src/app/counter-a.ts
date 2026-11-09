import { Component, inject } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-counter-a',
  standalone: true,
  templateUrl: './counter-a.html',
  styleUrl: './counter-a.css',
})
export class CounterAComponent {
  counter = inject(CounterService);
}
