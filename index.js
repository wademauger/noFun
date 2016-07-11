function noFun() {
  this.KAYLA = "NOT FUN";
  this.FUN = "NOT KAYLA";

  console.log("Kayla is not fun");
}

noFun.prototype.isFun = function(notKayla) {
  return notKayla.toLowerCase() !== "kayla";
}

module.exports = noFun;
