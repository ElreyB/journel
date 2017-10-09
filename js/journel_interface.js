$(document).ready(function(){
  $('#journel-form').submit(function(e){
    e.preventDefault();
    var titleInput = $("input#title").val();
    var bodyInput = $("textarea#body").val();
    var newEntry = new Entry(titleInput, bodyInput)

    $("span.word_count").text(newEntry.wordCount());
    $("span.vowel_count").text(newEntry.vowelCount());
    $("span.consonant_count").text(newEntry.consonantCount());
    $("span.teaser").text(newEntry.getTeaser());
  });
});
