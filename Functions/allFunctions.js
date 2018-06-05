const playerModel = require('../models/player');

exports.createPlayer = (req, res) => {
    
    let player = new playerModel(req.body);

    player.save((err) => {
        if(err){
            return res.status(400).json({
                status:failed,
                message:'failed'
            })
        }
        res.status(201).json({
            message:'player created'
        })
    });
}

exports.getPlayer = (req, res) => {
    playerModel.find({}, (err, data) => {
        if (err) {
          return res.status(400).json({
            status: false,
            message: 'Failed'
          });
        }
    
            res.status(200).json(data);
        
        
    })
    
}

exports.getTeam = (req, res) => {
    playerModel.findOne(
        { playerName : req.params.name }, (err, data) => {
        if (err) {
          return res.status(400).json({
            status: false,
            message: 'Failed'
          });
        }
        res.status(200).json(data.teamName);
    
      })
}


exports.getPlayingXI = (req, res) => {
    playerModel.find({ teamName : req.params.team }, (err, data) => {
        if (err) {
          return res.status(400).json({
            status: false,
            message: 'Failed'
          });
        }
        res.status(200).json(data);
      })
}

/*exports.deletePlayer = (req, res) =>  {
    playerModel.deleteOne( {
        playerName : req.params.name
    }, (err,data) => {
        if(err){
            res.status(400).json({
                status:failed,
                message: 'failed'
            })
        }
        res.status(200).json({
            message:'player deleted'
        })
    } )
}
*/
