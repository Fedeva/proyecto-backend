const router = require('express').Router()
const Profile = require('../schemas/Profile')


router.get('/',function (req,res) {
    Profile
      .find()
      .exec()
      .then(function (profiles){
          res.send(profiles)

       })
       .catch(function (){
          res.send({messege : "error"})

       })
})
 router.get('/:id', function(req, res){
    Profile
     .findById(req.params.id)
     .then(function (Profile){
      res.send(Profile)

   })
     .catch(function (){
        res.send({messege : "error"})

   })
 })


 router.post('/',function(req,res){
      let Profile= new Profile(req.body)

    Profile
       .save()
        .then(function (Profile){
          res.send({message : Profile._id})
  
       })
         .catch(function (){
            res.send({messege : "error"})
  
       })
 })


  router.patch('/:id',function(req,res){

    Profile
         .findByIdAndUpdate(req.params.id,{})
         
        .then(function (){
            res.send({message : "deleted"})

         })
         .catch(function (){
            res.send({messege : "error"})

         })
      }) 


  router.delete('/:id', function(req,res){

    Profile.deleteOne(req.params.id)        //*modelo.metodo()
      .then(function (){
          res.send({message : "deleted"})

      })
       .catch(function (){
          res.send({messege : "error"})

       })
    })


module.exports = router