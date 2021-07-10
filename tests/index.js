const mongoose = require('mongoose');  // 1*llamamos a mongoose y creamos una constante
const functions = require ('./functions')

mongoose.connect('mongodb://localhost:27017/itmaster-backend', {useNewUrlParser: true, useUnifiedTopology: true});
//2*luego creamos una funcion y nos coenctamos

        const db = mongoose.connection;
        //3*utilizamos esto como conecion apartir de aca

            db.on('error', console.error.bind(console, 'connection error:'));

            db.once('open', function() {
                   console.log('Estamos conectados')
                 });
             //4*creamos una funcion 

       // const User = mongoose.model('User' , UserSchema)

         // 6*le pasamos a mongoose ese schema( de User.js que lo definimos com model)**
        // a traves de la const User interactuamos con la base de datos
        
        //User.find().then(users => {
          //   console.log(users)
        //}).catch(err =>{
          //   console.log(err)
        //})  

       // let newUser = new User ({email : "cinco@gmail.com", password : "hehehe"}) // y apartir de aca creamos para la base de datos para sumar datos

         //   newUser.save()// le pedimos que guarde
           // .then(user => {
             //   console.log('el id del usuario es '+ user._id) // si funciona ...
           // })
            //.catch(err => {
              //  console.error(err)// sino funciona...
           // })

functions.createUser()
functions.createProfile()
functions.createPhones()
functions.createComments()
functions.createAddress()


