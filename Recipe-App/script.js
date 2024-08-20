const inputEl = document.querySelector('input');
const searchBtn = document.querySelector('.search');
const mainHeading = document.querySelector('.main h4');
const recipes = document.querySelector('.recipes');
const main = document.querySelector('.main');

inputEl.addEventListener('keyup', () => {
  let instructions = document.querySelector('.instructions')
  instructions.style.display = 'none';
})

searchBtn.addEventListener('click', () => {
  const food = (inputEl.value);
  inputEl.value = '';
  mainHeading.innerHTML = 'Have Some Patience, Great recipes are on their way......';
  setTimeout(() => getRecipes(food), 2000);
})


async function getRecipes(food) {
 
  mainHeading.innerHTML = '';
  recipes.innerHTML = '';
  recipes.style.display = 'grid';
  try {
    const response = await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${food}`);
    const data = await response.json();
    const dishes = data.meals;
    console.log(dishes);
    for (let dish of dishes) {
      /*    console.log(dish.strMeal); */
      let item = document.createElement('div');
      item.className = 'item';
      let img = document.createElement('img');
      img.src = dish.strMealThumb;
      let title = document.createElement('h2');
      title.innerHTML = dish.strMeal;
      let type = document.createElement('p');
      type.className = 'type'
      type.innerHTML = `${dish.strArea} dish`;
      let category = document.createElement('p');
      category.innerHTML = `Category: ${dish.strCategory}`;
      category.className = 'category';
      let btn = document.createElement('button');
      btn.className = 'view';
      btn.innerHTML = 'Get Recipe';
      btn.addEventListener('click', () => {
        recipePopUp(dish);
      })
      item.appendChild(img);
      item.appendChild(title);
      item.appendChild(type);
      item.appendChild(category);
      item.appendChild(btn);
      recipes.appendChild(item)
    }
  }
  catch (error) {
    mainHeading.innerHTML = 'No Records Found';
  }
    
  
}

function recipePopUp(dish) {
  const instructions = document.querySelector('.instructions');
  recipes.style.display = 'none';
  instructions.style.display = 'block';
  instructions.innerHTML = `
                  <button class="close">&times;</button>
                  <h2>${dish.strMeal}</h2>
                  <p class="ingredients">
                    <h3>Ingredients</h3>
                    <ul> ${fetchIngredients(dish)}</ul>
                  </p>
                  <p class="procedure">
                    <h3>Instructions</h3>
                    ${dish.strInstructions}
                  </p>                      
  `

  let close = document.querySelector('.close');
  close.addEventListener('click', () => {
    recipes.style.display = 'grid';
    instructions.style.display = 'none';
  })
}


function fetchIngredients(dish) {
  let ingredientsList = '';
  for (let i = 1; i <= 20; i++){
    const ingredient = dish[`strIngredient${i}`];
    if (ingredient) {
      const measure = dish[`strMeasure${i}`];
      ingredientsList +=`<li>${measure} - ${ingredient}</li>`
    }
    else {
      break;
    }
  }
  return ingredientsList;
}

