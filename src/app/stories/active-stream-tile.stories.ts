import type { Meta, StoryObj } from '@storybook/angular';
import { ActiveStreamTileComponent } from '../components/active-stream-tile/active-stream-tile.component';


const meta: Meta<ActiveStreamTileComponent> = {
  title: 'Active Stream Tile',
  component: ActiveStreamTileComponent,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<ActiveStreamTileComponent>;

export const Live: Story = {
  args: {
    trainCamera: {
      trainName: "Train 001",
      cameraName: "Cam 03",
      isLive: true,
      isRestricted: false,
      userName: "User 01",
    },
  },
};

export const Restricted: Story = {
  args: {
    trainCamera: {
      trainName: "Train 001",
      cameraName: "Cam 03",
      isLive: true,
      isRestricted: true,
      userName: "User 01",
    },
  },
};

export const Notlive: Story = {
  args: {
    trainCamera: {
      trainName: "Train 001",
      cameraName: "Cam 03",
      isLive: false,
      isRestricted: false,
      userName: "User 01",
    },
  },
};
