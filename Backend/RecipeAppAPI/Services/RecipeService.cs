using Microsoft.EntityFrameworkCore;
using RecipeAppAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RecipeAppAPI.Services
{
    public class RecipeService
    {
        private readonly RecipeAppContext _context;

        public RecipeService(RecipeAppContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Gets a list of all recipes.
        /// </summary>
        public async Task<List<Recipe>> GetAllRecipesAsync()
        {
            return await _context.Recipes.ToListAsync();
        }

        /// <summary>
        /// Gets a single recipe by its ID.
        /// </summary>
        public async Task<Recipe> GetRecipeByIdAsync(int recipeId)
        {
            return await _context.Recipes.FindAsync(recipeId);
        }

        /// <summary>
        /// Adds a new recipe to the database.
        /// </summary>
        public async Task<Recipe> AddRecipeAsync(string title, string description, string ingredients, string instructions, string imageUrl)
        {
            // Check if the recipe title already exists
            if (_context.Recipes.Any(r => r.Title.Equals(title, StringComparison.OrdinalIgnoreCase)))
            {
                throw new ArgumentException("A recipe with this title already exists.");
            }

            var newRecipe = new Recipe
            {
                Title = title,
                Description = description,
                Ingredients = ingredients,
                Instructions = instructions,
                ImageUrl = imageUrl,
                CreatedAt = DateTime.Now,
                UpdatedAt = DateTime.Now
            };

            _context.Recipes.Add(newRecipe);  // Add the new recipe to the context
            await _context.SaveChangesAsync();  // Save the changes to the database

            return newRecipe;
        }

        /// <summary>
        /// Updates an existing recipe.
        /// </summary>
        public async Task<Recipe> UpdateRecipeAsync(int recipeId, string title, string description, string ingredients, string instructions, string imageUrl)
        {
            var recipe = await _context.Recipes.FindAsync(recipeId);

            if (recipe == null)
            {
                throw new KeyNotFoundException("Recipe not found.");
            }

            recipe.Title = title;
            recipe.Description = description;
            recipe.Ingredients = ingredients;
            recipe.Instructions = instructions;
            recipe.ImageUrl = imageUrl;
            recipe.UpdatedAt = DateTime.Now;  // Update the timestamp

            _context.Recipes.Update(recipe);  // Update the recipe in the context
            await _context.SaveChangesAsync();  // Save the changes to the database

            return recipe;
        }

        /// <summary>
        /// Deletes a recipe by its ID.
        /// </summary>
        public async Task<bool> DeleteRecipeAsync(int recipeId)
        {
            var recipe = await _context.Recipes.FindAsync(recipeId);

            if (recipe == null)
            {
                throw new KeyNotFoundException("Recipe not found.");
            }

            _context.Recipes.Remove(recipe);  // Remove the recipe from the context
            await _context.SaveChangesAsync();  // Save the changes to the database

            return true; // Return true if the deletion was successful
        }
    }
}
