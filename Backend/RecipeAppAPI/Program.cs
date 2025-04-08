using Microsoft.EntityFrameworkCore;
using RecipeAppAPI;
using RecipeAppAPI.Services;

var builder = WebApplication.CreateBuilder(args);

// Register services for Dependency Injection
builder.Services.AddScoped<AuthService>();  // Register AuthService for DI

// CORS Configuration to allow requests from frontend (localhost:5173)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:5173")  // FRONTEND URL - CHANGE IF NEEDED
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Add DbContext (use MySQL in this case)
builder.Services.AddDbContext<RecipeAppContext>(options =>
    options.UseMySql(builder.Configuration.GetConnectionString("RecipeAppConnection"), ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("RecipeAppConnection"))));

// Add controllers
builder.Services.AddControllers();

var app = builder.Build();

// Apply CORS policy
app.UseCors("AllowFrontend");

app.UseAuthorization();

app.MapControllers();

app.Run();
