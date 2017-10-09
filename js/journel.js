function Entry(heading, entry) {
  this.heading = heading;
  this.entry = entry;
}

Entry.prototype.wordCount = function () {
  var count = this.entry.split(" ").length;
  return count;
};

Entry.prototype.vowelCount = function () {
  var letters = this.entry.split("");
  var totalSum = 0;
  for (var i = 0; i < letters.length; i++) {
    if (letters[i].match(/[aeiou]/i)) {
      totalSum += 1;
    }
  }
  return totalSum;
};

Entry.prototype.consonantCount = function(){
    var letters = this.entry.split("");
  var totalSum = 0;
  for (var i = 0; i < letters.length; i++) {
    if (letters[i].match(/[^aeiou\s\W]/i)) {
      totalSum += 1;
    }
  }
  return totalSum;
};
