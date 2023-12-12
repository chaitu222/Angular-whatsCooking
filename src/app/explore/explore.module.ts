// recipe.model.ts
export interface Recipe {
    label: string;
    image: string;
    ingredientLines: string[];
    url: string;
    likes: number;
    dislikes: number;
    hasVoted: boolean; //just written for only one can be clicked
    voteType: 'like' | 'dislike' | null;
    calories: number;
    nutrition: {
      fat: number;
      protein: number;
      carbohydrates: number;
  }
}