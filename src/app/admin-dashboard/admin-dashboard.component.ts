import { Component, OnInit } from '@angular/core';
import { AdminrecipesService } from '../adminrecipes.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  recipes: any[] = [];
  newRecipe: any = { name: '', details: '', ingredients: [], cookingSteps: [] };
  editedRecipe: any = { name: '', details: '', ingredients: [], cookingSteps: [] };
 
  constructor(private recipeService: AdminrecipesService) {}
 
  ngOnInit(): void {
    this.getRecipes();
  }
 
 
 
  addRecipe(): void {
    this.recipeService.addRecipe(this.newRecipe).subscribe(
      (response) => {
        alert('Recipe added successfully!');
        this.getRecipes();
        this.newRecipe = { name: '', details: '', ingredients: [], cookingSteps: [] };
      },
      (error) => {
        console.error('Error adding recipe:', error);
      }
    );
  }
  getRecipes(): void {
    this.recipeService.getRecipes().subscribe(
      (response) => {
        this.recipes = response.data;
      },
      (error) => {
        console.error('Error fetching recipes:', error);
      }
    );
  }
 
  removeRecipe(recipeId: string): void {
    const confirmDelete = window.confirm('Are you sure you want to remove this recipe?');
   
    if (!confirmDelete) {
      return;
    }
 
    this.recipeService.removeRecipe(recipeId).subscribe(
      (response) => {
        alert('Recipe removed successfully!');
        this.getRecipes();
      },
      (error) => {
        console.error('Error removing recipe:', error);
      }
    );
  }
 

  toggleRecipe(recipeId: string): void {
    const recipeToToggle = this.recipes.find(recipe => recipe._id === recipeId);
    console.log('Recipe to toggle:', recipeToToggle);

    if (!recipeToToggle) {
      console.error('Recipe not found!');
      return;
    }

    const action = recipeToToggle.enabled ? 'disable' : 'enable';
    const confirmToggle = window.confirm(`Are you sure you want to ${action} this recipe?`);

    if (!confirmToggle) {
      return;
    }

    this.recipeService.toggleRecipe(recipeId, !recipeToToggle.enabled).subscribe(
      (response: any) => {
        console.log('Toggle response:', response);
        const successMessage = `Recipe ${action}d successfully!`;
        alert(successMessage);
        this.getRecipes();
      },
      (error: any) => {
        console.error(`Error ${action}ing recipe:`, error);
      }
    );
  }

  endorseRecipe(recipeId: string): void {
    this.recipeService.endorseRecipe(recipeId).subscribe(
      (response) => {
        alert('Recipe endorsed successfully!');
        this.getRecipes();
      },
      (error) => {
        console.error('Error endorsing recipe:', error);
      }
    );
  }
 
  editRecipe(recipeId: string): void {
    this.editedRecipe = { ...this.recipes.find(recipe => recipe._id === recipeId) };
  }
 
  saveEditedRecipe(): void {
    this.recipeService.editRecipe(this.editedRecipe._id, this.editedRecipe).subscribe(
      (response) => {
        alert('Recipe updated successfully!');
        this.getRecipes();
        this.editedRecipe = { name: '', details: '', ingredients: [], cookingSteps: [] };
      },
      (error) => {
        console.error('Error updating recipe:', error);
      }
    );
  }
  isArray(value: any): boolean {
    return Array.isArray(value);
  }
 
}
