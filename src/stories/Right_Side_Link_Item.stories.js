import React from 'react';
import {RightSideLinkItem}from '../components/charetto_f3/Right_Side_Link_Item';

export default {
     title: "Charretto F3/Right Side Links Card",
     component: RightSideLinkItem,
    };
const Template = (args) => <RightSideLinkItem {...args}/>;

export const RightSideLinkItemStory = Template.bind({});
RightSideLinkItemStory.args = {
    title: 'Vision',
    url: '#',
  };
  