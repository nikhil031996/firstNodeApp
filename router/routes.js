const express = require('express');
const router = express.Router();

const allFunctions = require('../Functions/allFunctions');

router.get('/',function(req, res){
    res.json({message:"myFirstApp is working"});
});

router.post('/player',allFunctions.createPlayer);
router.get('/player/:name',allFunctions.getTeam);
router.get('/team/:team',allFunctions.getPlayingXI);
router.get('/player',allFunctions.getPlayer);

module.exports = router;