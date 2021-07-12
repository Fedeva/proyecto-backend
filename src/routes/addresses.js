const router = require('express').Router()
const Address = require('../schemas/Address')



router.get('/',function (req,res) {
    Address
      .find()
      .exec()
      .then(function (addresses){
          res.send(addresses)

       })
       .catch(function (){
          res.send({messege : "error"})

       })
})
 router.get('/:id', function(req, res){
    Address
     .findById(req.params.id)
     .then(function (Address){
      res.send(Address)

   })
     .catch(function (){
        res.send({messege : "error"})

   })
 })


 router.post('/',function(req,res){
      let Address = new Address(req.body)

    Address
       .save()
        .then(function (Address){
          res.send({message : Address._id})
  
       })
         .catch(function (){
            res.send({messege : "error"})
  
       })
 })


  router.patch('/:id',function(req,res){

    Address
         .findByIdAndUpdate(req.params.id,{})
         
        .then(function (){
            res.send({message : "deleted"})

         })
         .catch(function (){
            res.send({messege : "error"})

         })
      }) 


  router.delete('/:id', function(req,res){

    Address.deleteOne(req.params.id)        //*modelo.metodo()
      .then(function (){
          res.send({message : "deleted"})

      })
       .catch(function (){
          res.send({messege : "error"})

       })
    })


module.exports = router