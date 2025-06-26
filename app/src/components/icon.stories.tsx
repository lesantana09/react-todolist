import type { Meta, StoryObj } from '@storybook/react';
import Icon from './icon';

import TrashIcon from '../assets/icons/trash.svg?react';
import CheckIcon from '../assets/icons/check.svg?react';
import PencilIcon from '../assets/icons/pencil.svg?react';
import SpinnerIcon from '../assets/icons/spinner.svg?react';

const COLORS = [
  'fill-green-base',
  'fill-pink-base',
  'fill-blue-500',
  'fill-yellow-400',
];

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    className: {
      control: {
        type: 'select',
        options: COLORS,
      },
      defaultValue: COLORS[0],
      description: 'Cor do ícone',
    },
    animate: {
      control: 'boolean',
      defaultValue: false,
      description: 'Ativa animação de spin',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Trash: Story = {
  args: {
    svg: TrashIcon,
    className: COLORS[0],
    animate: false,
  },
};

export const Check: Story = {
  args: {
    svg: CheckIcon,
    className: COLORS[1],
    animate: false,
  },
};

export const Pencil: Story = {
  args: {
    svg: PencilIcon,
    className: COLORS[2],
    animate: false,
  },
};

export const Spinner: Story = {
  args: {
    svg: SpinnerIcon,
    className: COLORS[3],
    animate: true,
  },
};
