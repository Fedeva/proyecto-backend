const express = require('express') // traemos express y creamos el modulo que se encarga de crear rutas y el manejo de respuesta
const app = express()  //encendemos express lo ponemos a funcionar
const path = require('path')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const md5 = require('md5')

// req (request): recibir o leer informacion viene de esta peticion
// res (response): escribo la respuesta a esa peticion
// metodo para devolver un dato = GET
// metodo para recibir datos = POST

app.use(bodyParser.json())  // libreria que se agrega a express para darle otras funcionalidades. convierte toda la info en un objeto json
app.use(bodyParser.urlencoded({extended:false}))//   ''    ''  no


app.get('/', function (req, res) {                                 // empezamos a configurar la aplicacion
   // '/' = rutas , busco con el navegador y hace lo que dice la funcion
     res.send ('Bienvenido a backend')                             //           ''
})                                                                 
 
app.get('/register', function (req, res) {                          //           ''
 
  // devolver un formulario html
   let file = path.resolve('src','views','register.html')            //           ''
    

        res.sendFile(file)

})

app.get('/confirm', function (req, res){
  res.send('confirmado!')
}) 

app.post('/register', async function (req, res) {                           //           ''
         // async= funcion asincronica
       
        let token = md5(req.body.email + Date.now())
       console.log(token)
        
       let testAccount = await nodemailer.createTestAccount();
      
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
                 <a href="http://localhost:4000/confirm?token=${token}">
                  
                    confirmar cuenta
                
                </a>
               
                <b>Bienvenido a nuestro sistema</b>`, // html body
        });
           // siempre la etiqueta <a> es un GET
        console.log("Message sent: %s", info.messageId);

        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      
      
         
   
         res.send(req.body)
         // body: cuerpo de la peticion, es la info q va junto con la peticion. 
         //en este caso que viene con el form
        // body se usa solo con post!
    })

//http://localhost:4000/
app.listen(4000)


