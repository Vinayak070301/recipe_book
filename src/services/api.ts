import axios from 'axios';
import { Recipe, RecipeDetail, SearchFilters } from '../types/recipe';

const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
const BASE_URL = 'https://api.spoonacular.com/recipes';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    apiKey: API_KEY
  }
});

export const searchRecipes = async (filters: SearchFilters): Promise<Recipe[]> => {
  try {
    const params: Record<string, string> = {
      number: '12',
      addRecipeInformation: 'true'
    };

    if (filters.query) {
      params.query = filters.query;
    }
    if (filters.cuisine) {
      params.cuisine = filters.cuisine;
    }
    if (filters.type) {
      params.type = filters.type;
    }

    const response = await api.get('/complexSearch', { params });
    return response.data.results;
  } catch (error) {
    console.error('Error searching recipes:', error);
    throw error;
  }
};

export const getRandomRecipes = async (number: number = 12): Promise<Recipe[]> => {
  try {
    const response = await api.get('/random', {
      params: { number }
    });
    return response.data.recipes;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};

export const getRecipeById = async (id: number): Promise<RecipeDetail> => {
  try {
    const response = await api.get(`/${id}/information`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    throw error;
  }
};