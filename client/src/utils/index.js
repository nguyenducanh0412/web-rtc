// get acronym from name
// Path: client\src\utils\index.js
/**
 * @param  {} string
 */
const getInitials = (string) => {
  var names = string.split(" "),
    initials = names[0].substring(0, 1).toUpperCase();

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
};


export { getInitials };