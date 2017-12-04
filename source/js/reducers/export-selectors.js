/**
 * Exports selectors / functions that start with the word 'get' under a specified namespace
 * This is convenient as it allows us to specify the namespace in one place only - the parent
 * reducer therefore we achieve absolute encapsulation and there is no need to define each
 * selector in every stage It is heavily inspired by this lesson
 * https://egghead.io/lessons/javascript-redux-colocating-selectors-with-reducers?course=building-react-applications-with-idiomatic-redux
 *
 * @param {currentModule} the current module - just pass in 'module'
 * @param {namespace} string desired namespace - have to match the one used inside a reducer
 * @param {exports} Object - all the named exports from a module
 */
export default (currentModule, namespace, exports) => {
  Object
    .keys(exports)
    .filter(name => name.substr(0, 3) === 'get' && name !== 'getDefaultStateFromProps')
    .forEach((name) => {
      if (currentModule.exports[name]) {
        throw new Error(`Selector ${ name } already exists in module ${ currentModule.filename }`);
      }
      /* eslint-disable no-param-reassign */
      currentModule.exports[name] = (state, ...args) => exports[name](state[namespace], ...args);
    });
};
