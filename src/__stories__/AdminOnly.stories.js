import React from 'react';
import { AdminOnly } from '../components/AdminOnly';

// Learn how to write stories:
// https://storybook.js.org/docs/basics/writing-stories/

// A Storybook is a collection of stories. Each story represents a single visual state of a component.
// Technically, a story is a function that returns something that can be rendered to screen.

// The default export defines metadata that applies to the group.
export default {
  title: 'AdminOnly',
  component: AdminOnly,
};

// The named exports define the stories
export const AdminOnlyStory = () => (
  <div>
    Content: <AdminOnly>This content only appears when admin is enabled.</AdminOnly>
  </div>
);
AdminOnlyStory.story = {
  name: 'AdminOnly',
};
