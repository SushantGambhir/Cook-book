import { Component, OnInit } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeItemComponent, CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit 
{
    recipes: Recipe[] = [
      new Recipe("Dummy Recipe","Just a Test", 
      "https://www.foodandwine.com/thmb/MsTd5zgsuEHBo1w-vWuuYQno0mw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg"),
      new Recipe("Dummy Recipe","Just a Test", 
      "https://www.foodandwine.com/thmb/MsTd5zgsuEHBo1w-vWuuYQno0mw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg")
    ];

    constructor() {}
    ngOnInit() {}
}
