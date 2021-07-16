const mongoose = require('mongoose'); 
const User= require('../src/schemas/User');
const Profile= require('../src/schemas/Profile'); 
const Phones = require('../src/schemas/Phones');
const comments = require('../src/schemas/comments');
const Address= require('../src/schemas/Address');
const Category = require('../src/schemas/Category');
 
module.exports ={
   
    findUsers(){
//**metodo estatico o metodo de clase
        //User.find().then(users =>{
       //        console.log(users)
       //    }).catch(err => {
       //         console.log(err)
       //    })
        // let user = new User({email : "fede@gmail.com"})   // **despues de definir el metodo de busqueda,
                                                           // **podemos buscar atraves de la  instancia
         //user.findByEmail()                                   
           //     .then(u => console.log(u))
           //     .catch(err => console.log(err))
           //      },                                       // **       ''        ''              

          User.findByToken("1aaa659e7005fd2a7546c4ecf0bead7b")
                .then(u => console.log(u))
                .catch(err => console.log(err))

    },           
   
   
    createUser() {
           // new/upDate/delete = instancia

let newUser = new User ({email : "cinco@gmail.com", password : "hehehe" }) 
            //metodo de instancia
           newUser.save()
            .then(user => {
                console.log('el id del usuario es '+ user._id) 
            })  
            .catch(err => {
                console.error(err)
            })
        },

    



        createProfile() {
            let newProfile = new Profile ({firstName :"pepe", lastName : "argento", userId :"60d941f3f471c6e4be849113"}) 
                        
                       newProfile.save()
                        .then(Profile => {
                            console.log('el primer nombre es'+' '+ newProfile.firstName) 
                        })
                        .catch(err => {
                            console.error(err)
                        })
                    },
                

                createPhones() {
                    let newPhones = new Phones ({countryCode : "+54",areaCode : "011", number : "3456545" , userId :"60d941f3f471c6e4be849113"}) 
                                
                               newPhones.save()
                                .then(Phones => {
                                    console.log('el numero de telefono es'+' '+ newPhones.number) 
                                })
                                .catch(err => {
                                    console.error(err)
                                })
                            },
                       

    createComments() {
        let newComments = new comments ({ body : "comentarios" , creationDate : "8-6-21" ,userId :"60d941f3f471c6e4be849113"}) 
                    
                   newComments.save()
                    .then( comments => {
                        console.log('agregar'+ ' '+ newComments.body) 
                    })
                    .catch(err => { 
                        console.error(err)
                    })
                },
                       
     createAddress() {
                    let newAddress = new Address ({country : "Argentina", street : "colon 235", city : "ramos mejia", ZipCode : "1904", userId : "60d941f3f471c6e4be849113"}) 
                                
                               newAddress.save()
                                .then(Address => {
                                    console.log('la direccion es'+' '+ newAddress.street) 
                                })
                                .catch(err => {
                                    console.error(err)
                                })
                            },
                    
            }

            
    