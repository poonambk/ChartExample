const Router = require('express');
const chart = require('../controllers/chart.controller');
const router = Router();
router.route('/');
router.get('/bar', chart.getBar);

router.get('/pie', chart.getPie);

router.post('/chart', chart.addToChart);

router.get('/chart', chart.getChart);
router.get('/', chart.addToChart);
module.exports = router;
