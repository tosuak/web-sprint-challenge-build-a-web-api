const Project = require('./projects-model');

const verifyId = (req, res, next) => {
  Project.get(req.params.id)
    .then(project => {
      if (!project) {
        res.status(404).json({ message: `Unable to find Project with the given id ${req.params.id}`});
      } else {
          req.project = project;
          next();
      }
    })
    .catch(err => console.log(err))
};

const verifyPayload = (req, res, next) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    res.status(400).json({ message: 'Required information' });
  } else {
    next();
  }
};

module.exports = 
{
  verifyId,
  verifyPayload
};
