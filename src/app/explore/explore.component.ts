// explore.component.ts
import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent {
  searchQuery: string = '';
  recipes: any[] = [];
  selectedRecipe: any = null;

  constructor(private recipeService: RecipeService) { }
    search(): void {
      this.selectedRecipe = null; // Reset selected recipe when performing a new search
      if (this.searchQuery.trim() !== '') {
        this.recipeService.searchRecipes(this.searchQuery).subscribe(
          (data: any) => {
            this.recipes = (data.hits || []).map((hit: any) => hit.recipe);
          },
          (error) => {
            console.error('Error fetching recipes:', error);
          }
        );
      }
    }

    showRecipeDetails(recipe: any): void {
      this.selectedRecipe = recipe; // Set the selected recipe
      console.log('Selected Recipe:', this.selectedRecipe);
      console.log('Preparation Steps:', this.selectedRecipe?.preparationSteps);
    }

    // Function to go back to the search results
    goBackToSearchResults(): void {
      this.selectedRecipe = null; // Reset selected recipe to show search results
    }
  }

  