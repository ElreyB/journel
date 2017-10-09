(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Entry(heading, entry) {
  this.heading = heading;
  this.entry = entry;
}

Entry.prototype.wordCount = function () {
  var count = this.entry.split(" ").length;
  return count;
};

Entry.prototype.getTeaser = function () {
  var teaser = [];
  var words = this.entry.split(" ");
  for (var i = 0; i < 8; i++){
    teaser.push(words[i]);
  }
  return teaser.join(" ") + "......";
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


exports.entryModule = Entry;

},{}],2:[function(require,module,exports){
var Entry = require('./../js/journel.js').entryModule;

$(document).ready(function(){
  $('#journel-form').submit(function(e){
    e.preventDefault();
    var titleInput = $("input#title").val();
    var bodyInput = $("textarea#body").val();
    var newEntry = new Entry(titleInput, bodyInput)

    $(".well").addClass("hide");
    $("#entry").removeClass("hide");

    $("span.word_count").text(newEntry.wordCount());
    $("span.vowel_count").text(newEntry.vowelCount());
    $("span.consonant_count").text(newEntry.consonantCount());
    $("span.teaser").text(newEntry.getTeaser());
    $("h4.title").text(newEntry.heading);
    $("p.entry").text(newEntry.entry);
  });
});

},{"./../js/journel.js":1}]},{},[2]);
