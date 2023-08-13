const mongoose = require('mongoose');

const tournmentSchema = new mongoose.Schema({
    tournamentName: {
    type: String,
    required: true
  },
  startDate: 
    {
      type: String,
      required: true
    }
  ,
  endDate: {
    type: String,
    required: true
  },
  participantList:[ {
    type: String,
    required: true
  }],
  statusOfTournament: {
    type: String,
    required: true
  }
});

const Tournments = mongoose.model('Tournments', tournmentSchema,'Tournments');

module.exports = Tournments;