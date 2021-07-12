const router = require('express').Router()
const Category = require('../schemas/category')

//http://localhost:4000/categories

  router.get('/',function (req,res) {
      Category
        .find()
        .exec()
        .then(function (categories){
            res.send(categories)

         })
         .catch(function (){
            res.send({message : "error"})

         })
})

//http://localhost:4000/categories/123

   router.get('/:id', function(req, res){
     Category
       .findById(req.params.id)
       .then(function (category){
        res.send(category)

     })
       .catch(function (){
          res.send({message : "error"})

     })
   })

//http://localhost:4000/categories/123

   router.post('/',function(req,res){
        let category = new Category(req.body)

        category
          .save()
          .then(function (category){
            res.send({message : category._id})
    
         })
           .catch(function (){
              res.send({message : "error"})
    
         })
   })

 //http://localhost:4000/categories/123

    router.patch('/:id',function(req,res){// para editar patch
        //enviar mensaje de confirmacion

        Category
           .findByIdAndUpdate(req.params.id,req.body)
           
          .then(function (){
              res.send({message : "deleted"})

           })
           .catch(function (){
              res.send({message : "error"})

           })
        }) 


    router.delete('/:id', function(req,res){
        //enviar mensaje de confirmacion

        Category.deleteOne(req.params.id)        //*modelo.metodo()
        .then(function (){
            res.send({message : "deleted"})
 
        })
         .catch(function (){
            res.send({message : "error"})

         })
      })


module.exports = router