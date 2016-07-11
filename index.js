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

  //return false
  Number.prototype.hasFun = function() {
    return true;
  }

  //returns true iff 'kayla' is not inside
  String.prototype.hasFun = function() {
    return this.toLowerCase().indexOf('kayla') === -1;
  }

  //returns true iff 'kayla' is nowhere in the Array
  Array.prototype.hasFun = function () {
    return !this.find(function(el) {
      return !el.hasFun();
    }, this);
  }

  //returns true iff 'kayla' is not therein
  Object.prototype.hasFun = function() {
    return !Object.keys(this).find(function(el) {
      if (!el.hasFun()) {
        return true;
      } else {
        return !this[el].hasFun();
      }
    }, this);
  }
}

module.exports = new noFun();
