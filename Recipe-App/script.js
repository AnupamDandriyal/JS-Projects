const inputEl = document.querySelector('input');
const searchBtn = document.querySelector('.search');
const mainHeading = document.querySelector('.main h4');
const recipes = document.querySelector('.recipes');
const main = document.querySelector('.main');


searchBtn.addEventListener('click', () => {
  const food = (inputEl.value);
  inputEl.value = '';
  mainHeading.innerHTML = 'Great recipes are on their way......';
  setTimeout(()=>getRecipes(food), 2000);
  
})


async function getRecipes(food) {
  try {
    const response = await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${food}`);
    const data = await response.json();
    const dishes = data.meals;
    mainHeading.innerHTML = '';
    recipes.innerHTML = '';
    console.log(dishes);
    for (dish of dishes) {
      console.log(dish.strMeal);
      let item = document.createElement('div');
      item.className = 'item';
      let img = document.createElement('img');
      img.src = dish.strMealThumb;
      let title = document.createElement('h2');
      title.innerHTML = dish.strMeal;
      let type = document.createElement('p');
      type.className = 'type'
      type.innerHTML = dish.strArea;
      let category = document.createElement('p');
      category.innerHTML = dish.strCategory;
      category.className = 'category';
      let btn = document.createElement('button');
      btn.className = 'view';
      btn.innerHTML = 'Get Recipe';
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



/*  btn.addEventListener('click', () => {
        recipes.style.filter = 'opacity(10%)';
        let instructions = document.createElement('div');
        instructions.className = 'instructions';
        let indegredients = document.createElement('h3');
        indegredients.innerHTML = dish.strMeal
        let steps = document.createElement('h3');
        steps.innerHTML = 'Steps';
        let close = document.createElement('button');
        close.className = 'close';
        close.addEventListener('click', () => {
          recipes.style.filter = 'opacity(100%)';
          instructions.style.display = 'none';
        })
        instructions.appendChild(indegredients);
        instructions.appendChild(steps);
        instructions.appendChild(close);
      }) */

/* const instructions = document.querySelector('.instructions');

const view = document.querySelector('.view');
const close = document.querySelector('.close');
view.addEventListener('click',()=> {
  recipes.style.filter = 'opacity(10%)';
  instructions.style.display = 'block';
})


close.addEventListener('click',()=> {
  recipes.style.filter = 'opacity(100%)';
  instructions.style.display = 'none';
}) */