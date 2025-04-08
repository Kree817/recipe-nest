using Microsoft.EntityFrameworkCore;
using RecipeAppAPI.Models;

namespace RecipeAppAPI
{
    public class RecipeAppContext : DbContext
    {
        public RecipeAppContext(DbContextOptions<RecipeAppContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }  // User table
        public DbSet<Recipe> Recipes { get; set; }  // Recipe table
    }
}
