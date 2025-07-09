import { Component, computed, input, InputSignal, Signal, WritableSignal } from '@angular/core';
import { Category, categoryMetadata } from '../../feature/category/models/iall-categories';

@Component({
  selector: 'app-category-card',
  imports: [],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss'
})
export class CategoryCardComponent {
  category: InputSignal<Category> = input.required({})
}
