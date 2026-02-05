function removeObjectFromArrayById(array, id) {
  array.splice(
    array.findIndex((item) => item.id === id),
    1,
  );
}
export { removeObjectFromArrayById };
