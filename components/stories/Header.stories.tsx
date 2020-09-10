import * as React from "react"
import { storiesOf } from '@storybook/react'
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import Header from '../Header'

storiesOf('Header', module).add('Header clear', () => {
  return (
    <ThemeProvider>
      <CSSReset />
      <Header />
    </ThemeProvider>
  )
});