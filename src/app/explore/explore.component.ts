// explore.component.ts
import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from './explore.module';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent {
  searchQuery: string = '';
  recipes: Recipe[] = [];
  selectedRecipe: Recipe | null = null;

  constructor(private recipeService: RecipeService) { }

  search(): void {
    this.selectedRecipe = null; // Reset selected recipe when performing a new search
    if (this.searchQuery.trim() !== '') {
      this.recipeService.searchRecipes(this.searchQuery).subscribe(
        (data: any) => {
          this.recipes = (data.hits || []).map((hit: any) => ({
            ...hit.recipe,
            likes: 0, // Initialize likes to 0
            dislikes: 0, // Initialize dislikes to 0
          }));
        },
        (error) => {
          console.error('Error fetching recipes:', error);
          // Handle errors here
        }
      );
    }
  }

  showRecipeDetails(recipe: Recipe): void {
    this.selectedRecipe = recipe; // Set the selected recipe
  }

  // Increment likes for the selected recipe
  likeRecipe(recipe: Recipe): void {
    recipe.likes++;
  }

  // Increment dislikes for the selected recipe
  dislikeRecipe(recipe: Recipe): void {
    recipe.dislikes++;
  }

  // Function to go back to the search results
  goBackToSearchResults(): void {
    this.selectedRecipe = null; // Reset selected recipe to show search results
  }
}
