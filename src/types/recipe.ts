export interface Recipe {
  id: number;
  title: string;
  image: string;
  summary: string;
  cuisines?: string[];
  dishTypes?: string[];
}

export interface RecipeDetail extends Recipe {
  instructions: string;
  extendedIngredients: {
    id: number;
    original: string;
    amount: number;
    unit: string;
  }[];
  readyInMinutes: number;
  servings: number;
}

export interface SearchFilters {
  query: string;
  cuisine: string;
  type: string;
}