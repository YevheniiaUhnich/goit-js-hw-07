const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

console.log(`Кількість категорій: ${categoriesItems.length}`);

categoriesItems.forEach((item) => {
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryElements = item.querySelectorAll('li');
  console.log(`Категорія: ${categoryTitle}`);
  console.log(`Кількість елементів: ${categoryElements.length}`);
});