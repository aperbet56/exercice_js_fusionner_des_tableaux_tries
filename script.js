// Exercice JS: fusionner des tableaux triés

// Déclaration de la fonction ascendingSort qui va trier les valeurs de la plus petite à la plus grande
const ascendingSort = (a, b) => a - b;

// Déclaration de la fonction descendingSort qui va trier les valeurs de la plus grande à la plus petite
const descendingSort = (a, b) => b - a;

// Déclaration de la fonction mergeAscendingSortedArrays qui prend comme paramètres deux tableaux, va fusionner les valeurs des deux tableaux en les triant de la plus petite à la plus grande
const mergeAscendingSortedArrays = (arr1, arr2) => {
  return arr1.concat(arr2).sort(ascendingSort);
};

console.log(mergeAscendingSortedArrays([0, 3, 24, 69, 45], [1, 10, 6, 30]));
// [ 0, 1, 3, 6, 10, 24, 30, 45, 69 ]

// Déclaration de la fonction mergeDescendingSortedArrays qui prend comme paramètres deux tableaux, va fusionner les valeurs des deux tableaux en les triant de la plus grande à la plus petite
const mergeDescendingSortedArrays = (arr1, arr2) => {
  return arr1.concat(arr2).sort(descendingSort);
};

console.log(mergeDescendingSortedArrays([0, 3, 24, 69, 45], [1, 10, 6, 30]));
// [ 69, 45, 30, 24, 10, 6, 3, 1, 0 ]
