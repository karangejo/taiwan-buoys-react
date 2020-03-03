const mongoose = require('mongoose')

const tideSchema = new mongoose.Schema( { date: {
                                                  type:String,
                                                  required: true
                                                },
                                            location: {
                                                  type:String,
                                                  required: true
                                                },
                                            data: []
                                        }
                          );

const tideDB = mongoose.connection.useDb('tide');

const tideInfo = tideDB.model('tide', tideSchema);

module.exports = tideInfo;
