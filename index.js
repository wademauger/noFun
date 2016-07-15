function noFun() {
  console.log("Kayla is not fun");

  this.KAYLA = "NOT FUN";
  this.FUN = "NOT KAYLA";

  this.isFun = function(notKayla) {
    return notKayla.toLowerCase() !== "kayla";
  }

  this.isNotFun = function(Kayla) {
    return !this.isFun(Kayla);
  }

  Symbol.prototype.hasFun = function() {
    return true;
  }
  
  Boolean.prototype.hasFun = function() {
    return true;
  }

  Number.prototype.hasFun = function() {
    return true;
  }

  Function.prototype.hasFun = function() {
    return this.name.toLowerCase().hasFun();
  }

  RegExp.prototype.hasFun = function() {
    return this.toString().toLowerCase().hasFun();
  }


  //returns true iff 'kayla' is not inside
  String.prototype.hasFun = function() {
    return this.toLowerCase().indexOf('kayla') === -1;
  }

  //returns true iff 'kayla' is nowhere in the Array
  Array.prototype.hasFun = function () {
    return !this.find(function(el) {
      if ( typeof el === 'undefined' || el === null) {
        return false;
      } else {
        return !el.hasFun();
      }
    }, this);
  }

  //returns true iff 'kayla' is not therein
  Object.prototype.hasFun = function() {
    return !Object.keys(this).find(function(el) {
      if (!el.hasFun()) {
        return true;
      } else if ( typeof this[el] === 'undefined' || this[el] === null) {
        return false;
      } else {
        return !this[el].hasFun();
      }
    }, this);
  }
}

module.exports = new noFun();
