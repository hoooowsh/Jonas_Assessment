import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pizza-table.component.html',
  styleUrls: ['./pizza-table.component.css']
})
export class PizzaTableComponent {
  vegToppings = [
    { name: 'Tomatoes ($1.00)', price: 1.00, small: false, medium: false, large: false, extraLarge: false },
    { name: 'Onions ($0.50)', price: 0.50, small: false, medium: false, large: false, extraLarge: false },
    { name: 'Bell Peppers ($1.00)', price: 1.00, small: false, medium: false, large: false, extraLarge: false },
    { name: 'Mashrooms ($1.20)', price: 1.20, small: false, medium: false, large: false, extraLarge: false },
    { name: 'pineapple ($0.75)', price: 0.75, small: false, medium: false, large: false, extraLarge: false },
  ];
  nonVegToppings = [
    { name: 'Sausage ($1.00)', price: 1.00, small: false, medium: false, large: false, extraLarge: false },
    { name: 'Pepperoni ($2.00)', price: 2.00, small: false, medium: false, large: false, extraLarge: false },
    { name: 'Barbecue chicken ($3.00)', price: 3.00, small: false, medium: false, large: false, extraLarge: false },
  ];
  quantity = {
    small: 0,
    medium: 0,
    large: 0,
    extraLarge: 0
  };
  pizzaPrices = {
    small: 5,
    medium: 7,
    large: 8,
    extraLarge: 9
  };

  getOfferMedium(): string {
    const mediumToppings = this.vegToppings.filter(t => t.medium).length + this.nonVegToppings.filter(t => t.medium).length;

    if (this.quantity.medium === 1 && mediumToppings === 2) {
      return 'Offer1';
    } else if (this.quantity.medium === 2 && mediumToppings === 8) {
      return 'Offer2';
    }
    return 'N/A';
  }

  getOfferLarge(): string {
    let toppings = 0;

    for (const topping of this.nonVegToppings) {
      if (topping.large) {
        if (topping.name.includes('Pepperoni') || topping.name.includes('Barbecue chicken')) {
          toppings += 2;
        } else {
          toppings += 1;
        }
      }
    }

    for (const topping of this.vegToppings) {
      if (topping.large) {
        toppings += 1;
      }
    }

    if (this.quantity.large === 1 && toppings === 4) {
      return 'Offer3';
    }

    return 'N/A';
  }

  calculateSmallTotal(): number {
    let total = this.quantity.small * this.pizzaPrices.small;

    for (const topping of this.vegToppings) {
      if (topping.small) total += this.quantity.small * topping.price;
    }

    for (const topping of this.nonVegToppings) {
      if (topping.small) total += this.quantity.small * topping.price;
    }

    return total;
  }

  calculateMediumTotal(): number {
    const offer = this.getOfferMedium();
    if (offer === 'Offer1') {
      return 5;
    } else if (offer === 'Offer2') {
      return 9;
    }
    let total = this.quantity.medium * this.pizzaPrices.medium;

    for (const topping of this.vegToppings) {
      if (topping.medium) total += this.quantity.medium * topping.price;
    }

    for (const topping of this.nonVegToppings) {
      if (topping.medium) total += this.quantity.medium * topping.price;
    }

    return total;
  }

  calculateLargeTotal(): number {
    const offer = this.getOfferLarge();
    let total = this.quantity.large * this.pizzaPrices.large;

    for (const topping of this.vegToppings) {
      if (topping.large) total += this.quantity.large * topping.price;
    }

    for (const topping of this.nonVegToppings) {
      if (topping.large) total += this.quantity.large * topping.price;
    }

    if (offer === 'Offer3') {
      total /= 2;
    }
    return total;
  }

  calculateExtraLargeTotal(): number {
    let total = this.quantity.extraLarge * this.pizzaPrices.extraLarge;

    for (const topping of this.vegToppings) {
      if (topping.extraLarge) total += this.quantity.extraLarge * topping.price;
    }

    for (const topping of this.nonVegToppings) {
      if (topping.extraLarge) total += this.quantity.extraLarge * topping.price;
    }

    return total;
  }
}