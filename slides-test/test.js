import React from 'react';
import {Box, Flex} from '@rebass/grid/';

const Test = ({children}) => (
  <Flex
    flexDirection="column"
    style={{
      background:
        'linear-gradient(135deg,rgb(0, 178, 214) 0%, rgb(2, 221, 216) 100%)',
    }}>
    <Box width={1}>{children}</Box>
    <Flex flexDirection="row" justifyContent="space-around">
      <Box width={1 / 2} px={2}>
        Half width
      </Box>
      <Box right={0} width={1 / 2} px={2}>
        other Half width
      </Box>
    </Flex>
  </Flex>
);
export default Test;
