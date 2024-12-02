const express = require('express');
const router = express.Router();
const { Posts } = require('../models');
router.get('/', async (req, res) => {
   const listOfPosts = await Posts.findAll();
   res.json(listOfPosts);
});

router.get('/byId/:id', async (req, res) => {
   const id = req.params.id;
   const post = await Posts.findByPk(id);
   res.json(post);
})

//chen du lieu vao database
router.post('/', async (req, res) => {
    const post = req.body;
    await Posts.create(post);
    res.json(post);
});

router.put('/', (req, res) => {

});

router.delete('/', (req, res) => {

});


module.exports = router;