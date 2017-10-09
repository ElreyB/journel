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
