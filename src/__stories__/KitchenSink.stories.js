import React from 'react';
import { NetlifyCMSButton } from '../components/NetlifyCMSButton';
import { AdminToggle } from '../components/AdminToggle';
import { AdminOnly } from '../components/AdminOnly';
import { NonAdminOnly } from '../components/NonAdminOnly';

// Learn how to write stories:
// https://storybook.js.org/docs/basics/writing-stories/

// A Storybook is a collection of stories. Each story represents a single visual state of a component.
// Technically, a story is a function that returns something that can be rendered to screen.

// The default export defines metadata that applies to the group.
export default {
  title: 'Kitchen Sink',
};

// The named exports define the stories
export const KitchenSinkStory = () => (
  <div>
    <div>
      <AdminToggle />
    </div>
    <div>
      <AdminOnly>
        <div>Admin only children.</div>
        <div>
          <NetlifyCMSButton collection="posts" entry="hello-world" openInNewWindow>
            ✏️ Edit Content
          </NetlifyCMSButton>
        </div>
      </AdminOnly>
    </div>
    <div>
      <NonAdminOnly>Non-admin only children.</NonAdminOnly>
    </div>
  </div>
);
KitchenSinkStory.story = {
  name: 'Kitchen Sink',
};
