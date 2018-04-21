/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'chai';

import { Recipes } from './recipes.js';

if (Meteor.isServer) {
  describe('Recipes', () => {
    describe('methods', () => {
    	const userId = Random.id();
    	let taskId;

    	beforeEach(() => {
    		Recipes.remove({});
    		recipeId = Recipes.insert({
    			text: 'Test recipe',
    			createdAt: new Date(),
    			owner: userId,
    			username: 'testuser',
    		});
    	});

      it('can delete owned recipe', () => {
      	const deleteRecipe = Meteor.server.method_handlers['recipes.remove'];
      	const invocation = { userId };

      	deleteRecipe.apply(invocation, [recipeId]);
      	assert.equal(Recipes.find().count(), 0);
      });
    });
  });
}