function authuser(req,res,next){
    if(!req.user){
        res.status(403).send('Please sign in')
    }
    next()
}
function authrole(role){
    return (req,res,next)=>{
        if(req.user.Role!==role){
            res.status(403).send('Not permitted')
        }
        next()
    }
}
module.exports = {authuser, authrole}