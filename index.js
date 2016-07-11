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

  //returns true iff 'kayla' is not inside
  String.prototype.hasFun = function() {
    return this.toLowerCase().indexOf('kayla') === -1;
  }

  //returns true iff 'kayla' is nowhere in the Array
  Array.prototype.hasFun = function () {
    return !this.find(function(el) {
      if (typeof el === 'string' || typeof el === 'object') {
        return !el.hasFun();
      } else {
        return false;
      }
    }, this);
  }

  //returns true iff 'layla' is not therein
  Object.prototype.hasFun = function() {
    return !Object.keys(this).find(function(el) {
      if (!el.hasFun()) {
        return true;
      } else if (typeof this[el] === 'string' || typeof this[el] === 'object') {
        return !this[el].hasFun();
      } else {
        return false;
      }
    }, this);
  }
}

module.exports = new noFun();
