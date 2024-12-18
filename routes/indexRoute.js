const {Router} = require("express") ;
const indexRouter = Router() ;

const { indexRender,addMess } = require('../controllers/index');

indexRouter.get("/", (req,res)=>indexRender(req,res));
indexRouter.post("/new", (req,res)=>addMess(req,res)) ;


module.exports = indexRouter;