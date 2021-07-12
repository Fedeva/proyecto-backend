const router = require('express').Router()
const path = require('path') //para dividir carpetas (uso universal)
const User = require('../schemas/User')
const nodemailer = require('nodemailer')


router.get('/register', function (req, res) {                          //           ''
 
    // devolver un formulario html
     let file = path.resolve('src','views','register.html')            //           ''
      
  
          res.sendFile(file)
  
  })
  //http://localhost:4000/confirm?token=1aaa659e7005fd2a7546c4ecf0bead7b  (ejemplo)
  router.get('/confirm', function (req, res){                           //            ''
          
       User.findByToken(req.query.token)
          
           .then(function(result){
               if (result) {
                 return res.send('Confirmado!')
               }
                 return res.send('No se encontro el usuario')
           })
  
           .catch(function(err){
               console.log(err.message)
              return res.send('Error!')
  
           })
   
  }) 
  
  
  router.post('/register', async function (req, res) {                           //           ''
           // async= funcion asincronica
          
        
  
         let user = new User(req.body) //*creo la info de usuario
  // (body: es toda la info del formulario"el email y password")
      
          user.save().then(async u => { //* guardo esa info
        
          let testAccount = await nodemailer.createTestAccount(); //**envio  email */
        
          let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
              user: testAccount.user, 
              pass: testAccount.pass,
            },
          });
        
          let info = await transporter.sendMail({
            from: '"Backend 👻" <no-reply@example.com>', // sender address
            to: "bar@example.com, baz@example.com", // list of receivers
            subject: "Has completado tu registro exitosamente ✔", // Subject line
            text: "Bienvenido a nuestro sistema", // plain text body
            html:` 
                   <a href="http://localhost:4000/confirm?token=${u.confirmationToken}">
                    
                      confirmar cuenta
                  
                  </a>
                 
                  <b>Bienvenido a nuestro sistema</b>`, // html body
          });
             // siempre la etiqueta <a> es un GET
          console.log("Message sent: %s", info.messageId);
  
          res.send(nodemailer.getTestMessageUrl(info))  
          
        
        }). catch(err=> {
                console.log(err)
                res.send('Error!')
        })        
     
       })     // body: cuerpo de la peticion, es la info q va junto con la peticion. 
           //en este caso que viene con el form
          // body se usa solo con post!
  
          module.exports = router

