import * as React from "react";
import Link from 'next/link'
import { Box, Heading, Flex } from "@chakra-ui/core";

const Header = () => (
  <header>
    <Flex justify="space-between">
      <Box>
        <Link href="/">
          <Heading>Logo</Heading>
        </Link>
      </Box>
      <Box>
        <Link href="/about">
          <a>About</a>
        </Link>
      </Box>
      <Box>
        <Link href="/users">
          <a>Users List</a>
        </Link>
      </Box>
      <Box>
        <a href="/api/users">Users API</a>
      </Box>
    </Flex>
  </header>
)


export default Header