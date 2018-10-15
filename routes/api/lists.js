const express = require('express');
const router = express.Router();

//list model
const List = require('../../models/List');

//@route GET api/lists
//@desc get all Lists
//@access Public
router.get('/', (req, res) => {
    List.find()
        .sort({ date: -1 })
        .then(lists => res.json(lists))

});

//@route POST api/lists
//@desc create a list
//@access Public
router.post('/', (req, res) => {
    const newList = new List({
        name: req.body.name
    });

    newList.save().then(list => res.json(list));
});


//@route DELETE api/lists/:id
//@desc deletes a list
//@access Public
router.delete('/:id', (req, res) => {
    List.findById(req.params.id)
        .then(list => list.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));

});

module.exports = router;