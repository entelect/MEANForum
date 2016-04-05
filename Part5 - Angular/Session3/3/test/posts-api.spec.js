'use strict';

describe('the posts api', function() {
    beforeEach(module('blerg'));

    it('can get a list of posts', inject(function(postsApi) {
        var posts = postsApi.getPosts();
        expect(posts).toBeDefined();
        expect(posts.length).toBeGreaterThan(0);
    }));

    it('can save a new post', inject(function(postsApi) {
        var existingPostCount = postsApi.getPosts().length;
        postsApi.createPost({title: 'test', body: 'post'});
        var newPostCount = postsApi.getPosts().length;
        expect(newPostCount).toBe(existingPostCount+1);
    }));
});
