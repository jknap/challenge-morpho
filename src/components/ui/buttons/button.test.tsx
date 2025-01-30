import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from './button.stories';

const storiesComponents = composeStories(stories);

describe('Button', () => {
  it('renders stories', () => {
    for (const Story of Object.values(storiesComponents)) {
      render(<Story />);
    }
  });
});
