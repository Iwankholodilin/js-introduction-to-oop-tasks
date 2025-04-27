// BEGIN
export default (context, func) => {
  return function() {
    return func.apply(context, arguments);
  };
}
// END