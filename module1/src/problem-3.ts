function countWordOccurrences(sentence: string, word: string): number {
  const lowerCaseSentence = sentence.toLowerCase();
  const lowerCaseWord = word.toLowerCase();

  const words = lowerCaseSentence.split(" ");

  return words.filter((currentWord) => currentWord === lowerCaseWord).length;
}
