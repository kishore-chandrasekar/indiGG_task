var express = require('express');
const Tournments = require('../Models/TournmentInfo');
var router = express.Router();

/* GET home page. */
router.get('/getAllTournments', async function (req, res, next) {
  var response = await Tournments.find({})
  // console.log('kkkkkkkk',response)
  res.send(response)
  res.end()
});


router.post('/addNewTournment', async function (req, res, next) {
  console.log(req.body)
  let insertData = {
    tournamentName: req.body.tournmentName,
    startDate: req.body.tournmentStartDate,
    endDate: req.body.tournmentEndDate,
    participantList: req.body.participants,
    statusOfTournament: req.body.tournmentStatus
  }
  try {
    var response = await Tournments.create(insertData)
    res.status(201).send('Tournament added successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }

});

router.put('/editTournment/:id', async function (req, res, next) {
  // var response = await Tournments.find({})
  // console.log('kkkkkkkk',response)
  let insertData = {
    tournamentName: req.body.tournmentName,
    startDate: req.body.tournmentStartDate,
    endDate: req.body.tournmentEndDate,
    participantList: req.body.participants,
    statusOfTournament: req.body.tournmentStatus
  }
  try {
    var response = await Tournments.findByIdAndUpdate(req.params.id, insertData, { new: true });
    res.status(201).send('Tournament updated successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }


});

router.delete('/deleteTournment/:id', async function (req, res, next) {
  try {
    var response =  await Tournments.findByIdAndDelete(req.params.id);
    res.status(201).send('Tournament deleted successfully');

  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});


module.exports = router;
