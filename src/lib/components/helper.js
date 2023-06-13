export function titleCase(str) {
    return str.replace(/\w\S*/g, (word) => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });
  }

  export function replaceAsterisks(str) {
    return str.replace(/\*/g, " • ");
  }
  