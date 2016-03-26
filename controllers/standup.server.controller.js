/**
 * Created by hrspencer on 3/26/2016.
 */

var Standup = require('../models/standup.server.model.js');

exports.list = function(request, response) {
    var query = Standup.find();

    query.sort({ createdOn: 'desc' })
        .limit(12)
        .exec(function(err, results) {
            response.render('index', { title: 'Standup - List', notes: results});
        });
};

exports.create = function(request, response) {
    var entry = new Standup({
        memberName: request.body.memberName,
        project: request.body.project,
        workYesterday: request.body.workYesterday,
        workToday: request.body.workToday,
        impediment: request.body.impediment
    });

    entry.save();

    // redirect to home page...
    response.redirect(301, '/');
};

exports.getNote = function(request, response) {
    response.render('newnote', { title: 'Standup - New Note'});
};

exports.filterByMember = function(request, response) {
    var query = Standup.find();
    var filter = request.body.memberName;

    query.sort({ createdOn: 'desc'});

    if (filter.length > 0) {
        query.where({ memberName: filter });
    }

    query.exec(function(err, results) {
        response.render('index', { title: 'Standup - List', notes: results});
    });
};