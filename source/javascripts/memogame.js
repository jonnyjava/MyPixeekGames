var MemoGame = function(identifier){
  this.name = "poldo",
  this.identifier = identifier,
  this.pairMatrix = [],

  this.init = function(){
    var memo = this;
    memo.buildPairMatrix();
    $(memo.identifier).click(function(){
      memo.saluta();
    });
  },

  this.saluta = function(){
    alert('poldo');
  },

  this.buildPairMatrix = function(){
    var memo = this;
    var tempArray = [];

    for(var i = 0; i<48; i++){
      tempArray[i] = i;
      this.pairMatrix[i] = null;
    }

    while(tempArray.length >= 0){
      var firstNumber = tempArray[memo.randomizer(tempArray.length - 1)];
      var secondNumber = tempArray[memo.randomizer(tempArray.length - 1)];

      if (firstNumber != secondNumber){
        this.pairMatrix[firstNumber] = secondNumber;
        this.pairMatrix[secondNumber] = firstNumber;
        tempArray.splice(tempArray.indexOf(firstNumber),1);
        tempArray.splice(tempArray.indexOf(secondNumber),1);
      }
      if(tempArray.length == 0){
        break;
      }
    }
  },

  this.randomizer = function(size){
    var randomNumber = (Math.floor(Math.random() * (size - 0 + 1)) + 0);
    return randomNumber;
  }
};