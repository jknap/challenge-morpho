import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from './dropdown-menu.stories';

const storiesComponents = composeStories(stories);

describe('DropdownMenu', () => {
  it('renders stories', () => {
    for (const Story of Object.values(storiesComponents)) {
      render(<Story />);
    }
  });
});
