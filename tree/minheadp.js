class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class binarySearchTree{
    constructor(){
        this.root=null
    }

    insert(value){
let newNode=new Node(value)
        if(!this.root){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)

        }
    }
    insertNode(root,newNode){

        if(root.value>newNode.value){
            if(!root.left){
                root.left=newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(!root.right){
                root.right=newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
}

let bst=new binarySearchTree()
bst.insert(5)
bst.insert(10)
bst.insert(14)
bst.insert(2)
bst.insert(2)
bst.inOrder(bst.root)