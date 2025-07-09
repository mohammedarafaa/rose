import { Component } from '@angular/core';
import { HomeCategoryContainerComponent } from "../../feature/category/components/home-category-container/home-category-container.component";
import { FeatureCardComponent } from "../../shared/features-cards/features-cards.component";
import { SpecialGiftsComponent } from "../../shared/special-gifts/special-gifts.component";

@Component({
  selector: 'app-home',
  imports: [HomeCategoryContainerComponent, FeatureCardComponent, SpecialGiftsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
