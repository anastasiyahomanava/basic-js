module.exports = function createDreamTeam(members) {
  const dreamTeam = new Array();

  if (Array.isArray(members)) {
    members.forEach(element => {
      if (typeof(element) === 'string') {
        element = element.trim();
        dreamTeam.push(element[0].toUpperCase());
      }     
    });
    return dreamTeam.sort().join('');
  }

  return false;
};