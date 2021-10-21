import React from 'react';
import { LeftSidebar }from '../components/charetto_f3/LeftSidebar';
import {LeftSideBarNavItem} from '../components/charetto_f3/LeftSideBarNavItem';

export default {
     title: "Charretto F3/Left Side bar",
     component: LeftSidebar,
     subComponent: {LeftSideBarNavItem},
    };
const Template = (args) => <LeftSidebar {...args}/>;

export const LeftSidebarStory = Template.bind({});
LeftSidebarStory.args = {
    titleNavItem: 'PRD',
    iconNavItem: 'mdi:file-document-edit-outline',
    //navSizeNavItem: 'Link 3',
  activeLeftSideBarNavItem: true,
  };
  