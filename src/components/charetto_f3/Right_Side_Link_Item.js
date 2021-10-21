/**
 * TODO: Need converting to styled-components
 */
import {
    Flex,
    Text,
    Link,
    Divider,
  } from '@chakra-ui/react';

  import PropTypes from "prop-types";

export const RightSideLinkItem = ({title, url}) => {
    return (
      <Flex
        p="1%"
      >
        <Link>
          <Text fontSize="14px" textolor="blue.600" fontFamily="Lucida Sans" >{title}</Text>
        </Link>
      </Flex>
     )
    }

    RightSideLinkItem.propTypes = {
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    };