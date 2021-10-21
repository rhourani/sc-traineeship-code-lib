import React from 'react';
import { HeadNavBar } from '../components/charetto_f3/HeadNavBar';

export default {
     title: "Charretto F3/Head Nav Bar",
     component: HeadNavBar,
    };
const Template = (args) => (
  <HeadNavBar {...args}>
    
  </HeadNavBar>
);
export const headNavBarStory = Template.bind({});
headNavBarStory.args = {
    title: 'Product Management App',
    avatarMenuItemText: 'Link 1',
    avatarMenuItemText2: 'Link 2',
    avatarMenuItemText3: 'Link 3',
  };
  