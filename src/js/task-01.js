const categoriesList = document.getElementById('categories');


const categoryItems = categoriesList.getElementsByClassName('item');


const categoryCount = categoryItems.length;
console.log('Number of categories:', categoryCount);


for (let i = 0; i < categoryCount; i++) {
  const categoryItem = categoryItems[i];

 
  const categoryHeader = categoryItem.querySelector('h2').textContent;

 
  const nestedItems = categoryItem.querySelectorAll('li');
  const nestedItemCount = nestedItems.length;

  console.log('Category:', categoryHeader);
  console.log('Number of elements:', nestedItemCount);
}