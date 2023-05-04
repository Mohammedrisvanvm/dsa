class trieNode{
    constructor(){
        this.children=new Map();
        this.endOfTheWord=false;
    }
}

class Trie{
    constructor(){
        this.root=new trieNode();
    }

    Insert(word){
        let currNode=this.root;

        for(let i=0;i<word.length;i++){
            let char=word[i];
            if(!currNode.children.has(char)){
                currNode.children.set(char,new trieNode());
            }
            currNode=currNode.children.get(char);
        }

         currNode.children.endOfTheWord=true;

    }

    search(word){
        let currNode=this.root;

        for(let i=0;i<word.length;i++){
            let char=word[i];
            if(!currNode.children.has(char)){
                return false;
            }
            currNode=currNode.children.get(char);
        }

        return currNode.children.endOfTheWord;

    }

    startWith(word){
        let currNode=this.root;

        for(let i=0;i<word.length;i++){
            let char=word[i];
            if(!currNode.children.has(char)){
                return false;
            }
            currNode=currNode.children.get(char);
        }

        return true;

    }
}

const trie=new Trie();

trie.Insert('misha');

console.log(trie.startWith('mish'));