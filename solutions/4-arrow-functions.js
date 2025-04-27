// BEGIN
export default (objects, callback) => {
  objects.forEach(item => {callback.call(item)});
  };
// END
