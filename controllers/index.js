  
const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date(),
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date(),
    },
  ];
  
  // Render the index view
function indexRender(req, res) {
   try {
      res.render("indexView", { messages: messages });
    } catch (error) {
      console.error("Error rendering indexView:", error);
      res.status(500).send("An error occurred while rendering the index page.");
    }
  }

function addMess(req, res) {
    try {
      // Ensure required fields are provided
      const { text, user } = req.body;
      if (!text || !user) {
        throw new Error("Both text and user fields are required.");
      }
  
      messages.push({ text: text, user: user, added: new Date() });
      res.redirect("/");
    } catch (error) {
      console.error("Error adding message:", error);
      res.status(400).send(error.message);
    }
  }
  
module.exports = { indexRender,addMess } ;
