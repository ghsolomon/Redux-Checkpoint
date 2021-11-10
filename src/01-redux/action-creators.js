// you need to define the action creators below!

export const ADOPT_PET = 'ADOPT_PET',
  PREVIEW_PET = 'PREVIEW_PET',
  ADD_NEW_DOG = 'ADD_NEW_DOG',
  ADD_NEW_CAT = 'ADD_NEW_CAT',
  REMOVE_DOG = 'REMOVE_DOG',
  REMOVE_CAT = 'REMOVE_CAT';

export const adoptPet = (pet) => ({
  type: ADOPT_PET,
  pet,
});

export const previewPet = (pet) => ({
  type: PREVIEW_PET,
  pet,
});

export const addNewDog = (dog) => ({
  type: ADD_NEW_DOG,
  dog,
});

export const addNewCat = (cat) => ({
  type: ADD_NEW_CAT,
  cat,
});

export const removeDog = (dog) => ({
  type: REMOVE_DOG,
  dogId: dog.id,
});

export const removeCat = (cat) => ({
  type: REMOVE_CAT,
  catId: cat.id,
});
