function capitalizeWords(sentence) {
  return sentence.split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');
}

// Example usage  ij
const sentence = "hello world! this is a test sentence.";
const capitalizedSentence = capitalizeWords(sentence);
console.log(capitalizedSentence); // Output: "Hello World! This Is A Test Sentence."