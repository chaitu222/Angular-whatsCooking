// recipe.model.ts
export interface Recipe {
    label: string;
    image: string;
    ingredientLines: string[];
    url: string;
    likes: number;
    dislikes: number;
  }
  