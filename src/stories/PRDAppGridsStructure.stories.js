import React from 'react';
import {PRDAppGridsStructure}from '../components/charetto_f3/PRDAppGridsStructure';
import { ChakraProvider } from "@chakra-ui/react";

export default {
     title: "Charretto F3/Grid System Complete Page view ",
     component: PRDAppGridsStructure,
    };
const Template = (args) => <PRDAppGridsStructure/>

export const PRDAppGridsStructureStory = Template.bind({});
PRDAppGridsStructureStory.args = {
    text: 'Not used param',
  };
  