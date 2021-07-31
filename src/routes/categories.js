const router = require('express').Router()
const Category = require('../schemas/category')
const {respondWithError} = require ('./helpers')
const {body, validationResult} = require('express-validator')



let validatePost=[
   
      body('name').notEmpty().withMessage('EL nombre no puede ser vacio'),
      body('name').isLength({min: 3, max: 50}).withMessage('El nombre debe ser entre 3 y 50 caracteres'),
      body('categoryId').notEmpty()
      
   ]







//http://localhost:4000/categories

  router.get('/',function (req,res) {
      Category
        .find()
        .exec()
        .then(function (categories){
            res.send(categories)

         })
         .catch(err=> respondWithError(res,err))
})

//http://localhost:4000/categories/123

   router.get('/:id', function(req, res){
     Category
       
      .findById(req.params._id)
      
      .then(function (category){
        res.send(category)

     })
       .catch(err => respondWithError(res,err))
   })

//http://localhost:4000/categories

   router.post('/',validatePost,function(req,res){
       let errors = validationResult(req)
         
       if(errors.isEmpty()){
       
         let category = new Category(req.body)

         category
           .save()
           .then(function (category){
             res.status(201).send({message : category._id})
     
          })
       
       } else{
         respondWithError(res,errors.mapped())
       }
    })


 //http://localhost:4000/categories/123

    router.patch('/:id',function(req,res){// para editar patch
        //enviar mensaje de confirmacion

        Category
           .findByIdAndUpdate(req.params._id, req.body)
           
          .then(function (){
              res.send({message : "updated"})

           })
           .catch(err => respondWithError(res,err))
        }) 


    router.delete('/:id', function(req,res){
        //enviar mensaje de confirmacion

        Category
        .deleteOne({_id : req.params.id})        //*modelo.metodo()
        .then(function (){
            res.send({message : "deleted"})
 
        })
         .catch(err => respondWithError(res,err))
      })


module.exports = router
