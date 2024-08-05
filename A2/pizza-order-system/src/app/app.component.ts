import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PizzaTableComponent } from './components/pizza-table/pizza-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PizzaTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pizza-order-system';
}
