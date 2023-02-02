const users = [

 {username: 'ppc90', age: 30, premium: false},
    
 {username: 'lu65', age: 24, premium: true},
    
 {username: 'maria3', age: 36, premium: false},
    
 {username: 'abc123', age: 30, premium: false},
    
 {username: 'sergio58', age: 30, premium: true},
    
];

const prem = users.filter(user => user.premium==true);

for(let i = 0; i < prem.length; i++){

    console.log("El usuario "+ prem[i].username +" es un usuario premium ");
}



let noPrem = users.filter(function(user){
    return user.premium == false
    
    });
    
    console.log(noPrem);