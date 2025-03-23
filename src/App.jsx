import React from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import SubHero from './components/subHero/SubHero'
import AiModel from './components/aiModelSection/AiModel'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Header />
      <Hero />
      <SubHero />
      <AiModel />
    </div>
  )
}

export default App