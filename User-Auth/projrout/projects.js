const express = require('express')
const router = express.Router()
const {canViewproject,userproject,candeleteproject} = require('../project_permissions')
const {projects} = require('../data')
const { authuser } = require('../firstAuth')

router.get('/',authuser,(req,res)=>{
    res.json(userproject(req.user,projects))
})

router.get('/:projectid',setproject,authgetproject,(req,res)=>{
    res.json(req.project)
})
router.delete('/:projectid',setproject,authuser,deleteproject,(req,res)=>{
    res.status(200).send('Project Deleted');
})
function setproject(req,res,next){
    const user = Number(req.params.projectid)
    req.project = projects.find((project)=>project.id===user)
    if(!req.project){
        res.status(403)
        return res.send('Project doesnot Exist')
    }
    next()
}

function authgetproject(req,res,next){
    if(!canViewproject(req.user,req.project)){
        res.status(403)
        return res.send('Not Allowed')
    }
    next()
}
function deleteproject(req,res,next){
    if(!candeleteproject(req.user,req.project)){
        res.status(403)
        return res.send('Cannot Delete')
    }
    next()
}

module.exports = router