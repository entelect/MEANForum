"use strict";


module.exports = function (err, req, res, next) {
    console.log("Some logging in our error handler");
    res.status(err.status || 500).send(err.message);
};


ValidatorResult =  {
    instance:
    { id: 1036,
        title: 'The good life',
        datePosted: '2016-03-03T12:23:00Z',
        author: { firstName: 'Sello' },
        views: 25,
            tags: [ 'home', 'green' ] },
    schema:
    { '$schema': 'http://json-schema.org/draft-04/schema#',
        title: 'Post',
        description: 'A post - yes a post',
        type: 'object',
        properties:
        { _id: [Object],
            title: [Object],
            datePosted: [Object],
            author: [Object],
            views: [Object],
            tags: [Object] },
        required: [ 'id', 'title', 'datePosted' ] },
    propertyPath: 'instance',
        errors: [],
        throwError: undefined,
        disableFormat: false };
