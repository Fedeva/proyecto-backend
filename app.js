const express = require('express') // traemos express y creamos el modulo que se encarga de crear rutas y el manejo de respuesta
const app = express()  //encendemos express lo ponemos a funcionar
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/itmaster-backend', {useNewUrlParser: true, useUnifiedTopology: true});
const authRouter = require('./src/routes/auth')
const categoriesRouter = require('./src/routes/categories')
const addressesRouter = require('./src/routes/addresses')
const profilesRouter = require('./src/routes/profiles')
// req (request): recibir o leer informacion viene de esta peticion
// res (response): escribo la respuesta a esa peticion
// metodo para devolver un dato = GET
// metodo para recibir datos = POST

app.use(bodyParser.json())  // libreria que se agrega a express para darle otras funcionalidades. convierte toda la info en un objeto json
app.use(bodyParser.urlencoded({extended:false}))//   ''    ''  

app.use('/auth', authRouter)//añade carpetas por afuera
app.use('/categories',categoriesRouter)
app.use('/addresses',addressesRouter)
app.use('/profiles',profilesRouter)


app.get('/', function (req, res) {                                 //  (ruta raiz)empezamos a configurar la aplicacion
   // '/' = rutas , busco con el navegador y hace lo que dice la funcion
     res.send ('Bienvenido a backend')                             //           ''
})                                                                 
     

//http://localhost:4000/
app.listen(4000)


