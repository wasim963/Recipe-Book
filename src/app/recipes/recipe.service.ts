import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {

  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super tasty schnitzel - Just Awesome',
      'https://upload.wikimedia.org/wikipedia/commons/4/40/Wiener_Schnitzel.jpg',
       [
         new Ingredient('Meat', 1),
         new Ingredient('French Fries', 20)
       ]
      ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://www.goodfreephotos.com/albums/food/burget-with-cheese-and-lettuce.jpg',
       [
         new Ingredient('Buns', 2),
         new Ingredient('Meat', 1)
       ]
      )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }

  // https://cdn.pixabay.com/photo/2018/07/18/19/12/spaghetti-3547078_960_720.jpg  - Sphagetti
  // https://upload.wikimedia.org/wikipedia/commons/9/9d/Chicken-Tikka.jpg   - Chiken Tikka

}
