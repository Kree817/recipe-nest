using Microsoft.AspNetCore.Mvc;
using RecipeAppAPI.Models;
using RecipeAppAPI.Services;

namespace RecipeAppAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AuthService _authService;

        public AuthController(AuthService authService)
        {
            _authService = authService;
            System.Console.WriteLine("Hello");
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] RegisterRequest request)
        {
            /*
            if (request.Password != request.ConfirmPassword)
            {
                return BadRequest("Passwords do not match.");
            }
            */

            // Add other validation for email uniqueness and password strength if needed.
            var result = _authService.RegisterUser(request.FullName, request.Email, request.Password);
            if (result){
                return Ok("Registration successful.");
            }
            else
            {
                return BadRequest("Email is already registered.");
            }
        }
    }
}
