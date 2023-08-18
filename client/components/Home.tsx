// ?Propaganda about the Empire, image
import Popup from './Popup'
import { useState } from 'react'
import JediNav from './JediNav.tsx'
import Jedi from './Jedi.tsx'

export default function Home() {
  const [showAd, setShowAd] = useState(false)

  const handleOpenAd = () => {
    setShowAd(true)
  }

  return (
    <div className="stars">
      <JediNav OpenPopup={handleOpenAd} />
      <Jedi OpenPopup={handleOpenAd} />

      <Popup showAd={showAd} />
    </div>
  )
}

// navbar -> report empire activity, signup btn,
// imgs jedi/allies
// background img
// signup btn
