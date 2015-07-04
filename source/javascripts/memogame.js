var MemoGame = function(DOMidentifier, ledNumber){
  this.ledMatrixSize = ledNumber,
  this.DOMidentifier = DOMidentifier,
  this.pairMatrix = [],

  this.init = function(){
    var memo = this;
    memo.buildMatrix();
    if((memo.ledMatrixSize%2) != 0){
      memo.addJoker();
    }
    $(memo.DOMidentifier).click(function(){
      memo.saluta();
    });
  },

  this.buildMatrix = function(){
    var memo = this;
    var tempArray = [];

    var elementsAmount = memo.ledMatrixSize;
    if((memo.ledMatrixSize%2) != 0){
      elementsAmount--;
    }

    for(var i = 0; i < elementsAmount; i++){
      tempArray[i] = i;
    }

    while(tempArray.length >= 0){
      memo.pairKeyWithValue(tempArray);
      if(tempArray.length == 0){
        break;
      }
    }
  },

  this.pairKeyWithValue = function(tempArray){
    var memo = this;
    var firstNumber = tempArray[memo.randomizer(tempArray.length - 1)];
    var secondNumber = tempArray[memo.randomizer(tempArray.length - 1)];
    if (firstNumber != secondNumber){
      memo.pairMatrix[firstNumber] = secondNumber;
      memo.pairMatrix[secondNumber] = firstNumber;
      tempArray.splice(tempArray.indexOf(firstNumber), 1);
      tempArray.splice(tempArray.indexOf(secondNumber), 1);
    }
  },

  this.randomizer = function(length){
    var randomNumber = (Math.floor(Math.random() * (length + 1)) + 0);
    return randomNumber;
  },

  this.addJoker = function(){
    var memo = this;
    var jokerPosition = memo.randomizer(memo.pairMatrix.length);
    var oldDestination = memo.pairMatrix[jokerPosition];
    memo.pairMatrix[memo.pairMatrix.length] = oldDestination;
    memo.pairMatrix[oldDestination] = memo.pairMatrix.length - 1;
    memo.pairMatrix[jokerPosition] = 'joker';
  },

  this.saluta = function(){
    alert('poldo');
  }
};