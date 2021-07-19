const express = require('express') // traemos express y creamos el modulo que se encarga de crear rutas y el manejo de respuesta
const app = express()  //encendemos express lo ponemos a funcionar
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/itmaster-backend', {useNewUrlParser: true, useUnifiedTopology: true});
const authRouter = require('./src/routes/auth')
const categoriesRouter = require('./src/routes/categories')
const addressesRouter = require('./src/routes/addresses')
const profilesRouter = require('./src/routes/profiles')
const productsRouter = require('./src/routes/products')
const Product = require('./src/schemas/Product')



// req (request): recibir o leer informacion viene de esta peticion
// res (response): escribo la respuesta a esa peticion
// metodo para devolver un dato = GET
// metodo para recibir datos = POST

app.use(bodyParser.json())  // libreria que se agrega a express para darle otras funcionalidades. convierte toda la info en un objeto json
app.use(bodyParser.urlencoded({extended:false}))//   ''    ''  


//API REST = es  un URL donde intercambian datos mediante http
app.use('/api/auth', authRouter)//añade carpetas por afuera
app.use('/api/categories',categoriesRouter)
app.use('/api/addresses',addressesRouter)
app.use('/api/profiles',profilesRouter)
app.use('/api/products',productsRouter)

app.get('/', function (req, res) {                                 //  (ruta raiz)empezamos a configurar la aplicacion
   // '/' = rutas , busco con el navegador y hace lo que dice la funcion
     res.send ('Bienvenido a backend')                             //           ''
})                                                                 
     

  app.get('/products', function (req,res){
         //listado de productos
  })

  app.get('/products/create', function (req,res){
         //mostar formulario de alta de productos
         res.sendFile(__dirname + '/src/views/products-create.html')
  })

  app.post('/products', function(req,res){
        
      

    let schema = new Product ({
         ...req.body,
         seller_id : 22
    })  
       
       schema.save()
         .then(() => {
          res.redirect('/products/create')
       }).catch(err => {
           console.log(err)
           res.send({message:'error'})
      })
    })
       
        
          //recibir datos del formulario
          //guardar en la base de datos
  
  

//http://localhost:4000/
app.listen(4000)


