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

router.post

router.use((err, req, res, next) => {
  res.status(500).json({ message: 'Error in Database'});
});

module.exports = router;