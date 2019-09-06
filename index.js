class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.substr(1);
  }

  static sanitize(string) {
    const stringArray = string.split("");
    const sanitizedArray = stringArray.map((char) => {
      if (!(char.match(/^[0-9a-zA-Z]+$/) || char === "-" || char === "'" || char === " ")) {
        return char.replace(char, "");
      } else {
        return char;
      }
    });
    const sanitizedString = sanitizedArray.join("");
    return sanitizedString;
  }

  static titleize(string) {
    const stringArray = string.split(" ");
    const titleizedArray = stringArray.map((word) => {
      if (!(word === "the" || word === "a" || word === "an" || word === "but" || word === "of" || word === "and" || word === "for" || word === "at" || word === "by" || word === "from")) {
        return Formatter.capitalize(word);
      } else {
        return word;
      }
    });
    const titleizedString = titleizedArray.join(" ");
    return Formatter.capitalize(titleizedString);
  }

}