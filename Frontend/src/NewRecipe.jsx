function NewRecipe() {
 
    return (
      <div class="box">
        <form method="post">
        <div id="x">
            <div class="recipeBox">
              <div>
                <button id="newRecipeClose" class="closeBtn"></button>
              </div>
              <div>
                <input type="text" id="recipeName"></input>
              </div>
              <div class="recipeInfo">
                <label for="cuisineType">Cuisine type:</label>
                <input type="text" id="cuisineType"></input>
                <label for="prepTime">Prep time (mins):</label>
                <input type="number" id="prepTime" min="0"></input>
                <label for="cookTime">Cook time (mins):</label>
                <input type="number" id="cookTime" min="0"></input>
                <label for="dateAdded">Date added:</label>
                <input type="date" id="dateAdded"></input>
              </div>
              <div class="y">
                <label for="ingredients">Ingredients:</label>
                <textarea id="ingredients"></textarea>
              </div>
              <div class="y">
                <label for="instructions">Instructions:</label>
                <textarea id="instructions"></textarea>
              </div>
              <div>
                <input type="submit" value="Save" class="submitBtn"/>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }

  export default NewRecipe;