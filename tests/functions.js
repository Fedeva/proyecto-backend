const mongoose = require('mongoose'); 
const UserSchema = require('../src/schemas/User');
const ProfileSchema = require('../src/schemas/Profile'); 
const PhonesSchema = require('../src/schemas/Phones');
const commentsSchema = require('../src/schemas/comments');
const AddressSchema = require('../src/schemas/Address');
const Address = mongoose.model('Address', AddressSchema);
const comments = mongoose.model('comments', commentsSchema);
const Phones = mongoose.model('Phones',PhonesSchema);
const User = mongoose.model('User' , UserSchema) ;
const Profile = mongoose.model('Profile',ProfileSchema )


module.exports ={

    createUser() {
let newUser = new User ({email : "cinco@gmail.com", password : "hehehe" }) 
            
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

            
