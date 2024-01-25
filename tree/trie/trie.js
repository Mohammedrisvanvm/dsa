// class TrieNode {
//     constructor() {
//       this.children = {};
//       this.isEndOfWord = false;
//     }
//   }

//   class Trie {
//     constructor() {
//       this.root = new TrieNode();
//     }

//     insert(word) {
//       let node = this.root;
//       for (let i = 0; i < word.length; i++) {
//         const char = word[i];
//         if (!node.children[char]) {
//           node.children[char] = new TrieNode();
//         }
//         node = node.children[char];
//       }
//       node.isEndOfWord = true;
//     }

//     search(word) {
//       let node = this.root;
//       for (let i = 0; i < word.length; i++) {
//         const char = word[i];
//         if (!node.children[char]) {
//           return false;
//         }
//         node = node.children[char];
//       }
//       return node.isEndOfWord;
//     }

//     startsWith(prefix) {
//       let node = this.root;
//       for (let i = 0; i < prefix.length; i++) {
//         const char = prefix[i];
//         if (!node.children[char]) {
//           return false;
//         }
//         node = node.children[char];
//       }
//       return true;
//     }
//   }
//   const trie = new Trie();
// trie.insert('hello');
// trie.insert('world');
// console.log(trie.search('hello')); // true
// console.log(trie.search('world')); // true
// console.log(trie.search('he')); // true
// console.log(trie.search('h')); // true
// console.log(trie.search('hi')); // false
// console.log(trie.startsWith('he')); // true
// console.log(trie.startsWith('wor')); // true
// console.log(trie.startsWith('hi')); // false

// class TrieNode {
//     constructor() {
//       this.children = new Map();
//     }
//   }

//   class Trie {
//     constructor(str) {
//       this.root = new TrieNode();
//       this.endSymbol = '*';
//       this.populateSuffixTrie(str);
//     }

//     populateSuffixTrie(str) {
//       for (let i = 0; i < str.length; i++) {
//         this.insertSubstringStartingAt(i, str);
//       }
//     }

//     insertSubstringStartingAt(index, str) {
//       let node = this.root;
//       for (let i = index; i < str.length; i++) {
//         const letter = str.charAt(i);
//         if (!node.children.has(letter)) {
//           node.children.set(letter, new TrieNode());
//         }
//         node = node.children.get(letter);
//       }
//       node.children.set(this.endSymbol, null);
//     }

//     contains(str) {
//       let node = this.root;
//       for (let i = 0; i < str.length; i++) {
//         const letter = str.charAt(i);
//         if (!node.children.has(letter)) {
//           return false;
//         }
//         node = node.children.get(letter);
//       }
//       return node.children.has(this.endSymbol);
//     }
//   }
//   const trie = new Trie("mannan")
//   console.log(trie.contains("man"))
class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
    }

    node.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }

    return node.isEndOfWord;
  }

  startsWith(prefix) {
    let node = this.root;

    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }

    return true;
  }

  endsWith(suffix) {
    console.log(suffix);
    let node = this.root;

    for (let i = suffix.length - 1; i >= 0; i--) {
      const char = suffix[i];
      console.log(char);
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }
    return node.isEndOfWord;
  }
}

const trie = new Trie();
trie.insert("hello");
trie.insert("world");
console.log(trie.search("hello")); // true
console.log(trie.search("world")); // true
console.log(trie.startsWith("llo")); // false
console.log(trie.startsWith("he")); // true
console.log(trie.startsWith("w")); // true
console.log(trie.startsWith("f")); // false
console.log(trie.endsWith("ld")); // false
