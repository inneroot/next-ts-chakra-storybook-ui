import * as React from "react"
import { storiesOf } from '@storybook/react'
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import Footer from '../Footer'

storiesOf('Footer', module).add('Footer clear', () => {
  return (
    <ThemeProvider>
      <CSSReset />
      <Footer />
    </ThemeProvider>
  )
});