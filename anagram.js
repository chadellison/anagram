var Anagram = function(word) {
  this.word = word
}

Anagram.prototype.matches = function(words) {
  var all_matches = []

  if (words instanceof Array) {
    words = words
  } else {
    words = Array.from(arguments)
  }

  for (var i = 0; i < words.length; i += 1) {
    if (matchLetters(this.word, words[i])) {
      all_matches.push(words[i])
    }
  }
  return all_matches
}

var matchLetters = function(word1, word2) {
  for (var i = 0; i < longestWord(word1, word2); i += 1) {
    if (word1.toLowerCase() === word2.toLowerCase()) {
      return false
    } else if (formatWord(word1)[i] !== formatWord(word2)[i]) {
      return false
    }
  }
  return true
}

var longestWord = function(word1, word2) {
  if (word1.length > word2.length) {
    return word1.length
  } else {
    return word2.length
  }
}

var formatWord = function(word) {
  return word.toLowerCase().split("").sort()
}

module.exports = Anagram
