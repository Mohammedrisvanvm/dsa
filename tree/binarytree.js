class Node{
    constructor(value){
      this.value = value
      this.left = null
      this.right = null
    }
  }
  
  
  class binarySearchTree{
    constructor(){
      this.root = null
    }
    insert(value){
      let newNode = new Node(value)
      if(!this.root){
        this.root = newNode
      }
      else{
        this.insertNode(this.root ,newNode)
      }
    }
    insertNode(root ,newNode){
      if(newNode.value < root.value){
        if(root.left === null){
          root.left = newNode
        }
        else{
          this.insertNode(root.left ,newNode)
        }
      }
      else{
        if(root.right === null){
          root.right = newNode
        }
        else{
          this.insertNode(root.right ,newNode)
        }
      }
    }
    search(root ,value){
      if(!root){
        console.log("no data")
        return
      }
      else{
        if(root.value === value){
          console.log("value found")
          return true
        }
        else if(value < this.root.value){
          return this.search(root.left ,value)
        }
        else{
          return this.search(root.right ,value)
        }
      }
    }
    preOrder(root){
      if(root){
        console.log(root.value)
        this.preOrder(root.left)
        this.preOrder(root.right)
      }
    }
    inOrder(root){
      if(root){
        this.inOrder(root.left)
        console.log(root.value)
        this.inOrder(root.right)
      }
    }
    postOrder(root){
      if(root){
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.value)
      }
    }
    minValue(root){
      if(!root.left){
        return root.value
      }
      else{
        return this.minValue(root.left)
      }
    }
    maxValue(root){
      if(!root.right){
        return root.value
      }
      else{
        return this.maxValue(root.right)
      }
    }
    delete(value){
      this.root = this.deleteNode(this.root ,value)
    }
    deleteNode(root ,value){
      if(root === null){
        return root
      }
      if(value < root.value){
        root.left = this.deleteNode(root.left ,value)
      }
      else if(value > root.value){
        root.right = this.deleteNode(root.right ,value)
      }
      else{
        if(!root.left && !root.right){
          return null
        }
        if(!root.left){
          return root.right
        }
        else if(!root.right){
          return root.left
        }
        root.value = this.minValue(root.right)
        root.right = this.deleteNode(root.right ,root.value)
      }
      return root
    }
  }
  
  
  const bst = new binarySearchTree()
  bst.insert(10)
  bst.insert(5)
  bst.insert(15)
  bst.insert(3)
  bst.insert(7)
  bst.insert(20)
  
  
  console.log(bst.inOrder(bst.root))  
  