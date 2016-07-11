function noFun() {
  console.log("Kayla is not fun");

  this.KAYLA = "NOT FUN";
  this.FUN = "NOT KAYLA";

  this.isFun = function(notKayla){
    return notKayla.toLowerCase() !== "kayla";
  }

  this.isNotFun = function(Kayla){
    return !this.isFun(Kayla);
  }

  Array.prototype.hasFun = function(){
    return !(this.filter(function(val){
      return val.toLowerCase() === "kayla";
    })).length > 0;
  }

}

module.exports = new noFun();
