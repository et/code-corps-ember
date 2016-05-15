import Ember from 'ember';
import PostMentionFetcherMixin from 'code-corps-ember/mixins/post-mention-fetcher';

export default Ember.Component.extend(PostMentionFetcherMixin, {
  tagName: 'form',
  classNames: ['post-new-form'],

  types: [
    {label: "Task",  slug: "task"},
    {label: "Issue", slug: "issue"},
    {label: "Progress", slug: "progress"},
    {label: "Idea", slug: "idea"}
  ],

  actions: {
    submit() {
      let post = this.get('post');
      post.set('preview', false);
      this.sendAction('savePost', post);
    },

    generatePreview(markdown) {
      let post = this.get('post');
      post.set('markdownPreview', markdown);
      post.set('preview', true);
      post.save().then(() => this.send('fetch', 'preview'));
    }
  }
});