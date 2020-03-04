const mongoose = require('mongoose')

const astroSchema = new mongoose.Schema( { date: {
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

const astroDB = mongoose.connection.useDb('astro');

const astroInfo = astroDB.model('astro', astroSchema);

module.exports = astroInfo;
