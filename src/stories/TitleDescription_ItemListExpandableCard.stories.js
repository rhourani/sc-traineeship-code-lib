import React from 'react';
import {TitleDescriptionItemListExpandableCard}from '../components/charetto_f3/TitleDescription_ItemListExpandableCard';
import {SubComponentItemInsideExpandableCard}from '../components/charetto_f3/SubComponent_ItemInsideExpandableCard';

export default {
     title: "Charretto F3/Title Description Item List Expandable Card",
     component: TitleDescriptionItemListExpandableCard,
     subcomponents: { SubComponentItemInsideExpandableCard },
    };

const Template = (args) => <TitleDescriptionItemListExpandableCard {...args}/>;

export const TitleDescriptionItemListExpandableCardStory = Template.bind({});
TitleDescriptionItemListExpandableCardStory.args = {
    title: 'Personas',
    descripton: 'Where do we want out product to be in the future',
    placeholder: 'Click here to add a feature',
  };
