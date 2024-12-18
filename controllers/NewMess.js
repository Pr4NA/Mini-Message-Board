function form(req, res) {
    try {
      res.render("newMess");
    } catch (error) {
      console.error("Error rendering newMess:", error);
      res.status(500).send("An error occurred while rendering the form.");
    }
  }
  
  // Correctly exporting the `form` function
  module.exports = form;
  