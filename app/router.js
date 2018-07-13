import EmberRouter from '@ember/routing/router';
import Trackable from 'ember-cli-analytics/mixins/trackable';
import config from './config/environment';

const Router = EmberRouter.extend(Trackable, {
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('question', {path: '/:id'});
  this.route('send-estimate');
});

export default Router;
