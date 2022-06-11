const express = require('express')
const router = express.Router()

const Filme = require('../models/filme')

// RECUPERAR TODOS OS REGISTRO
router.get('/', async(req,res) =>{
    try{

        const filmes = await Filme.find({})
        res.json({error: false, filmes})

    } catch(err){
        res.json({error: true, message: err.message})
    }

})

//PEGAR SOMENTE O REGISTRO COM ID
router.get('/:id', async(req,res) => {
    try{
        const id = req.params.id
        const filme = await Filme.findById(id)
        res.json({error: false, filme})

    }catch(err){
        res.json({error: true, mensagem: err.message})
    }

})

// CRIAR REGISTRO
router.post('/', async(req,res) => {
    try{
        const filme = req.body
        const response = await new Filme(filme).save()
        res.json({ error: false, filme: response })
    }catch(err){
        res.json({ error: true, message: err.message })
    }

})

//ATUALIZAR REGISTROS COM ID
router.put('/:id', async(req,res) => {
    try{
        const id = req.params.id
        const novoFilme = req.body

        const filme = await Filme.findByIdAndUpdate(id, novoFilme)

        res.json({error: false, filme })

    }catch(err){
        res.json({ error: true, message: err.message })
    }

})

//DELETAR REGISTRO COM ID
router.delete('/:id', async(req,res) => {
    try{
        const id = req.params.id
        const deleted = await Filme.findByIdAndDelete(id)
        res.json({error: false})
    }catch(err){
        res.json({error: true, mensagem: err.message})
    }
    
})


module.exports = router