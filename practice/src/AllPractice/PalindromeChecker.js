import React, { useState } from "react";

const PalindromeChecker = () => {
  const [word, setWord] = useState("");
  const isPalindrome =
    word.toLowerCase() === word.toLowerCase().split("").reverse().join("");

  return (
    <div>
      <label>
        Enter a word:
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
      </label>
      <p>
        {isPalindrome
          ? "The word is a palindrome!"
          : "The word is not a palindrome."}
      </p>
    </div>
  );
};

export default PalindromeChecker;
