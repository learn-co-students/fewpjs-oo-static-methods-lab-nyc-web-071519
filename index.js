class Formatter {
  //add static methods here
  static capitalize(string){
    const words = string.split(' ')
    const titelizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
    return titelizedWords.join(' ')
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(string){
    const exemptWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const words = string.split(' ')
    const titleizedWords = words.map(word => {
      if (exemptWords.includes(word)){
        return word
      } else{
        return Formatter.capitalize(word)
      }
    })
    titleizedWords[0] = Formatter.capitalize(titleizedWords[0])
    return titleizedWords.join(' ')
  }
}