import { Skill } from "../models/skill.js"

function index(req, res) {
  Skill.find({})
  .then(skills => {
    console.log(skills)
    res.render('skills/index', {
      skills: skills,
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect("/")    
  })
  }

  function newSkill(req, res){
    res.render("skills/new")
  }

  function create(req, res){
    console.log(req.body)
    req.body.done = true
    Skill.create(req.body)
    .then(skill => {
      res.redirect("/skills")
    })
    .catch(error => {
      console.log(error)
      res.redirect("/skills")
      
    })
  }

  function show(req, res){
    Skill.findById(req.params.skillId)
    .then(skill => {
      res.render("skills/show", {
        skill: skill
      })
    })
    .catch(error => {
      console.log(error)
      res.redirect("/skills")
      
    })
  }

  export {
    index,
    newSkill as new,
    create,
    show,
  }