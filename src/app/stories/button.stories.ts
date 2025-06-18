import type { Meta, StoryObj } from '@storybook/angular';
import {ButtonComponent} from '../components/button/button.component';


const meta: Meta<ButtonComponent> = {
  title: 'Button',
  component: ButtonComponent,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const PrimaryLarge: Story = {
  args: {
    severity: 'primary',
    size: 'large',
    icon:'pi pi-check',
  },
};

export const SecondaryLarge: Story = {
  args: {
    severity: 'secondary',
    size: 'large',
    icon:'pi pi-search',
  },
};

export const ContrastLarge: Story = {
  args: {
    severity: 'contrast',
    size: 'large',
    icon:'pi pi-times',
  },
};

export const ContrastSmall: Story = {
  args: {
    severity: 'contrast',
    size: 'small',
    icon:'pi pi-user',
  },
};