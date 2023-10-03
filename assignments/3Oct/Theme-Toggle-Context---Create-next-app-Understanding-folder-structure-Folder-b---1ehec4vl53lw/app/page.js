import React from 'react'
import { ThemeProvider } from './components/ThemeProvider'
import { ThemeToggleButton } from './components/ThemeToggleButton'
import { Main } from './Main'

function Home() {
  return (
    <div id='main'>
      <ThemeProvider>
      <Main/>
      <ThemeToggleButton/>
      </ThemeProvider>
    </div>
  )
}

export default Home
