const {role} = require('./data')

function canViewproject(user,project){
   return (user.Role===role.ADMIN || user.id===project.userid)
    
}

function userproject(user,projects){
    if(user.Role===role.ADMIN){
        return projects
    }
    else{return projects.find((project)=>user.id===project.userid)}
}

function candeleteproject(user,project){
    return (user.id===project.userid)
}

module.exports = {canViewproject,userproject,candeleteproject}