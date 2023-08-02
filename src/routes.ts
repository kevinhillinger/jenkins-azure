import express from 'express';

const routes = express.Router();

// middleware
routes.use((req, res, next) => {
 // console.log('Time: ', Date.now())
  next()
});

routes.get('/', async (req, res) => {
  res.send('Marketplace Offer Deployment Manager v2');
});

export default routes;