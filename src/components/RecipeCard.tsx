import React from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from '../types/recipe';
import { Clock, Users } from 'lucide-react';

interface Props {
  recipe: Recipe;
}

const RecipeCard: React.FC<Props> = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.id}`} className="group">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 
                    hover:shadow-xl hover:-translate-y-1">
        <div className="relative">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48 object-cover transition-transform duration-300 
                     group-hover:scale-105"
          />
          {recipe.cuisines && recipe.cuisines.length > 0 && (
            <div className="absolute top-4 right-4">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {recipe.cuisines[0]}
              </span>
            </div>
          )}
        </div>
        <div className="p-5">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-1 group-hover:text-blue-500 transition-colors">
            {recipe.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2 mb-4"
            dangerouslySetInnerHTML={{ __html: recipe.summary }}
          />
          {recipe.dishTypes && recipe.dishTypes.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {recipe.dishTypes.slice(0, 2).map((type) => (
                <span key={type} className="bg-orange-100 text-blue-700 px-2 py-1 rounded-md text-xs">
                  {type}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;