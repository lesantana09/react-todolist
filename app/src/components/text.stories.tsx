import type { Meta, StoryObj } from '@storybook/react';
import Text from './text'; 

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['span', 'p', 'div', 'strong'],
    },
    variant: {
      control: { type: 'select' },
      options: ['body-sm-bold', 'body-md', 'body-md-bold'],
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'Texto padrão',
    variant: 'body-md',
    as: 'span',
  },
};

export const BoldSmall: Story = {
  args: {
    children: 'Texto pequeno e em negrito',
    variant: 'body-sm-bold',
    as: 'p',
  },
};

export const BoldMedium: Story = {
  args: {
    children: 'Texto médio em negrito',
    variant: 'body-md-bold',
    as: 'div',
  },
};
