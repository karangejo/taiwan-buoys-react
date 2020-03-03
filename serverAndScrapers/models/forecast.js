const mongoose = require('mongoose')

const forecastSchema = new mongoose.Schema( { date: {
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

const forecastDB = mongoose.connection.useDb('forecast');

const forecastInfo = forecastDB.model('forecast', forecastSchema);

module.exports = forecastInfo;
