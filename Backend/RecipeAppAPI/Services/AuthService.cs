using BCrypt.Net;
using RecipeAppAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace RecipeAppAPI.Services
{
    public class AuthService
    {
        private readonly RecipeAppContext _context;

        public AuthService(RecipeAppContext context)
        {
            _context = context;
        }

        public bool RegisterUser(string fullName, string email, string password)  {
            // Ensure email is unique
            /*
            if (_context.Users.Any(u => u.Email == email))
            {
                return false;  // Email already exists
            }
            */

            // Hash password
            var hashedPassword = BCrypt.Net.BCrypt.HashPassword(password);

            var user = new User
            {
                FullName = fullName,
                Email = email,
                PasswordHash = hashedPassword,
                CreatedAt = DateTime.Now,  // You can add DateTime if needed
                UpdatedAt = DateTime.Now
            };

            System.Console.WriteLine("Hello"+user.FullName);

            _context.Users.Add(user);
            _context.SaveChanges();

            return true;  // Successfully registered
        }
    }
}
