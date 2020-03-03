const mongoose = require('mongoose')

const buoySchema = new mongoose.Schema( { date: {
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

const buoyDB = mongoose.connection.useDb('buoy');

const buoyInfo = buoyDB.model('buoy', buoySchema);

module.exports = buoyInfo;
