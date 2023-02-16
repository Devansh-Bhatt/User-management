// const express = require('express')
// const app = express()
const {users,role} = require('./data')
const {authuser,authrole} = require('./firstAuth')
const projectrout = require('./projrout/projects')
app.use(express.json())
app.use(getuser)
app.use('/projects',projectrout)
// app.get('/',(req,res)=>{
//     res.send('Home Page');
// })

// app.get('/dashboard',authuser,(req,res)=>{
//     res.send('Dashboard Page');
// })

// app.get('/admin',authuser,authrole(role.ADMIN),(req,res)=>{
//     res.send('Admin Page')
// })



function getuser(req,res,next) {
    const userentry = req.body.userid 
    if(userentry){
        req.user = users.find((user)=>user.id===userentry)
    }
    next()
}



// app.listen(5000,()=>{
//     console.log('Server listening on port 5000...');
//     //console.log(users);
// })