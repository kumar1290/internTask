
const login = (req,res)  => { 
res.status(200).json({message: "hello"})
 }

 const signup =(req,res)=>{
    res.status(200).json({message: "hello"})
 }

 const obj= {login,signup} ;
 module.exports = obj ;