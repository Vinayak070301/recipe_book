import React, { useEffect, useState } from 'react';
import { getRandomRecipes, searchRecipes } from '../services/api';
import { Recipe, SearchFilters } from '../types/recipe';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';
import { Loader2, ChefHat } from 'lucide-react';

const Home = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    cuisine: '',
    type: '',
  });

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      setError(null);
      try {
        let data: Recipe[];
        if (filters.query || filters.cuisine || filters.type) {
          data = await searchRecipes(filters);
        } else {
          data = await getRandomRecipes();
        }
        setRecipes(data);
      } catch (err) {
        setError('Failed to fetch recipes. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    const debounceTimeout = setTimeout(fetchRecipes, 500);
    return () => clearTimeout(debounceTimeout);
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-orange-100 rounded-full mb-4">
            <ChefHat className="h-8 w-8 text-blue-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Discover Delicious Recipes</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our collection of mouth-watering recipes from around the world
          </p>
        </div>

        <SearchBar filters={filters} onFiltersChange={setFilters} />

        {loading ? (
          <div className="min-h-[50vh] flex items-center justify-center">
            <Loader2 className="w-10 h-10 animate-spin text-blue-500" />
          </div>
        ) : error ? (
          <div className="min-h-[50vh] flex flex-col items-center justify-center">
            <div className="bg-red-100 p-4 rounded-lg">
              <p className="text-blue-900 text-center">{error}</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;