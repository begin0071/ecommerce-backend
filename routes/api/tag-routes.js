const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');



router.get('/', (req, res) => {

  
  Tag.findAll({
    include: [{ model: Product }],
  })
  .then((dbTagData) => res.json(dbTagData))
  .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
 
 
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: [{ model: Product }],
  })
 .then((dbTagData) => res.json(dbTagData))
 .catch((err) => {
      console.log(err);
      res.status(500).json(err);
 });
});

router.post('/', (req, res) => {

  Tag.create({
    tag_name: req.body.tag_name,
  })
  .then((dbTagData) => res.json(dbTagData))
});

router.put('/:id', (req, res) => {
  
   
  Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      where: {
        id: req.params.id,
      },
      individualHooks: true,
    })
    .then((dbTagData) => {
      if (!dbTagData) {
        res.status(404).json({ message: 'No tag found with this id' });
        return;
      }
      res.json(dbTagData);
    })  
});

router.delete('/:id', (req, res) => {
 
  
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((dbTagData) => res.json(dbTagData))
});

module.exports = router;