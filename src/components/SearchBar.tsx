import React from 'react';
import { Search, ChefHat, UtensilsCrossed } from 'lucide-react';
import { SearchFilters } from '../types/recipe';

interface Props {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
}

const cuisines = [
  'All',
  'Italian',
  'Mexican',
  'Asian',
  'American',
  'Mediterranean',
  'Indian',
];

const dishTypes = [
  'All',
  'main course',
  'side dish',
  'dessert',
  'appetizer',
  'salad',
  'soup',
];

const SearchBar: React.FC<Props> = ({ filters, onFiltersChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onFiltersChange({
      ...filters,
      [name]: value === 'All' ? '' : value,
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative group">
          <input
            type="text"
            name="query"
            value={filters.query}
            onChange={handleInputChange}
            placeholder="Search recipes..."
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl 
                     focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     transition-all duration-300 ease-in-out
                     group-hover:border-blue-300"
          />
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
        </div>
        
        <div className="relative group">
          <select
            name="cuisine"
            value={filters.cuisine || 'All'}
            onChange={handleInputChange}
            className="pl-12 pr-8 py-3 border-2 border-gray-200 rounded-xl
                     appearance-none bg-white
                     focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     transition-all duration-300 ease-in-out
                     group-hover:border-blue-300"
          >
            {cuisines.map((cuisine) => (
              <option key={cuisine} value={cuisine}>
                {cuisine} Cuisine
              </option>
            ))}
          </select>
          <ChefHat className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
        </div>

        <div className="relative group">
          <select
            name="type"
            value={filters.type || 'All'}
            onChange={handleInputChange}
            className="pl-12 pr-8 py-3 border-2 border-gray-200 rounded-xl
                     appearance-none bg-white
                     focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     transition-all duration-300 ease-in-out
                     group-hover:border-blue-300"
          >
            {dishTypes.map((type) => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
          <UtensilsCrossed className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;