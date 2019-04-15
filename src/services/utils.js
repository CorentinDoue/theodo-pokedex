export const replaceInArrayById = (array, id, newValue) => array.map(oldValue => oldValue.id === id ? newValue : oldValue);
