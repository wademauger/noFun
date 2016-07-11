function noFun() {
  this.KAYLA = "NOT FUN";
  this.FUN = "NOT KAYLA";
  this.isFun = function(notKayla) {
    return notKayla.toLowerCase() !== "kayla";
  }
  console.log("Kayla is not fun");
}

module.exports = new noFun();
