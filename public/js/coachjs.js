$(document).on("click", function() {
  $(document).on("submit", "#coachForm", handleCoachFormSubmit);
  // A function to handle what happens when the form is submitted to create a new Coach
  function handleCoachFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out

    // Calling the upsertCoach function and passing in the value of the name input
    upsertCoach({
      firstName: $("#firstName").val(),
      lastName: $("#lastName").val(),
      email: $("#emailAddress").val(),
      teamName: $("#teamName").val(),
    });
  }

  // A function for creating an author. Calls getAuthors upon completion
  function upsertCoach(coachData) {
    $.post("/api/coaches", coachData);
  }
});
