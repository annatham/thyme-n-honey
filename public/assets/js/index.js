// Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");

// // The API object contains methods for each kind of request we'll make
// var API = {
//   saveExample: function(example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//   },
//   getExamples: function() {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
//   },
//   deleteExample: function(id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };

// // refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// ***initialize collapsible and side nav***

$(document).ready(function(){
  $('.collapsible.popout').collapsible();

  $('.sidenav').sidenav();

  M.updateTextFields();
  
  var recipe;


  $("#random-btn").click(function(event){
    event.preventDefault();

    $.get( "http://localhost:8080/api/posts/random", function( data ) {
      console.log(data);

      var recipeRawData = data.recipes[0];

        recipe = {
        title: recipeRawData.title,
        image: recipeRawData.image,
        ingredients: recipeRawData.extendedIngredients.map(i=> "<a class='btn-floating waves-effect waves-light grey lighten-1 btn-small'><i class='material-icons'>add</i></a>" + i.original),
        instructions: recipeRawData.analyzedInstructions[0].steps.map(step => step.number + "." + step.step)
        // instructions doesn't pull
      }

      console.log(data.recipes[0].instructions);

      $("#recipe-title").html(recipe.title);
      $("#recipe-image").html('<img src="'+ recipe.image + '"/>');
      $("#ingredients").html(recipe.ingredients.join("<br/><br/>"));
      $("#instructions").html(recipe.instructions.join("<br/>"));

      // $( "#results" ).html(data.recipes[0].aggregateLikes);
      // alert( "Load was performed." );


    });  
  
  })

  $("#favorite").click(function(event){
    console.log("hello world");
    
    $.post("/api/favorite", recipe )
    .then(function(res){
      console.log(res)
    })
  })

  // $("#search-btn").click(function(event){
  //   event.preventDefault();

  //   $.get("http://localhost:8080/api/posts/search", function( data ) {
  //     console.log(data.recipes[0].instructions);

  //     var recipeRawData = data.recipes[0];

  //     var recipe = {
  //       title: recipeRawData.title,
  //       image: recipeRawData.image,
  //       ingredients: recipeRawData.extendedIngredients.map(i=> i.original),
  //       instructions: recipeRawData.analyzedInstructions[0].steps.map(i=> i.original)
  //       // instructions doesn't pull

  //     }

  //     console.log(recipe);

  //     $("#recipe-title").html(recipe.title);
  //     $("#recipe-image").html('<img src="'+ recipe.image + '"/>');
  //     $("#ingredients").html(recipe.ingredients.join("<br/>"));
  //     $("#instructions").html(recipe.instructions.join("<br/>"));

  //     // $( "#results" ).html(data.recipes[0].aggregateLikes);
  //     // alert( "Load was performed." );


  //   });  
  
  // })


});
  

// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);
