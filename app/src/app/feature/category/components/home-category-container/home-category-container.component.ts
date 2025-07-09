import { Component, inject, signal, WritableSignal } from '@angular/core';
import { CategotyRepo } from '../../repo/category.repo';
import { Category } from '../../models/iall-categories';
import { CategoryCardComponent } from "../../../../shared/category-card/category-card.component";

@Component({
  selector: 'app-home-category-container',
  imports: [CategoryCardComponent],
  templateUrl: './home-category-container.component.html',
  styleUrl: './home-category-container.component.scss',
})
export class HomeCategoryContainerComponent {
  private readonly _categoryRepo = inject(CategotyRepo);
  public allCategories: WritableSignal<Category[]> = signal([]);
  getAllCategories() {
    this._categoryRepo.getAllCategories().subscribe({
      next: (res) => {
        this.allCategories.set(res.categories);
      },
    });
  }
  ngOnInit(): void {
    this.getAllCategories()
  }
}
