const router = require('express').Router();
const Project = require('./projects-model');
const { verifyId, verifyPayload } = require('./projects-middleware');

router.get('/', (req, res, next) => {
  Project.get()
    .then(projects => {
      res.json(projects);
    })
    .catch(next)
});

router.get('/:id', verifyId, (req, res, next) => {
  res.json(req.project);
});

router.post('/', verifyPayload, (req, res, next) => {
  Project.insert(req.body)
    .then(newProject => {
      res.status(201).json(newProject);
    })
    .catch(next)
});

router.put('/:id', verifyId, verifyPayload, (req, res, next) => {
  Project.update(req.params.id, req.body)
    .then(updatedProject => {
      res.json(updatedProject);
    })
    .catch(next)
});

router.use((err, req, res, next) => {
  res.status(500).json({ message: 'Error in Database'});
});

module.exports = router;