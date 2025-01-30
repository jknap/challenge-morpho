import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from './action-button.stories';

const storiesComponents = composeStories(stories);

describe('ActionButton', () => {
  it('renders stories', () => {
    for (const Story of Object.values(storiesComponents)) {
      render(<Story />);
    }
  });
});
