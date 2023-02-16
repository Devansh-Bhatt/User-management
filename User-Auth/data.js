const role = {
    ADMIN: 'admin',
    BASIC: 'basic'
}

const users = [{
    id: 1, name: 'Devansh', Role: role.ADMIN
},{
    id: 2, name: 'Harshit', Role: role.BASIC
},{
    id: 3, name: 'Sparsh', Role: role.BASIC
}]

const projects = [{
    id: 1, name: "Devansh's Project", userid: 1 
},{
    id: 2, name: "Harshit's Project", userid: 2 
},{
    id: 3, name: "Sparsh's Project", userid: 3 
}]

module.exports = {role, users, projects}