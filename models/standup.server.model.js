/**
 * Created by hrspencer on 3/26/2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stanupSchema = new Schema({
    memberName: String,
    project: String,
    workYesterday: String,
    workToday: String,
    impediment: String,
    createdOn: { type: Date, default: Date.now }
});

// Export model...
module.exports = mongoose.model('Standup', stanupSchema);
