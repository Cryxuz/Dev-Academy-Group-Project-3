// ?Propaganda about the Empire, image
import Popup from './Popup'
import { useState, useEffect } from 'react'

export default function Home() {
  const [showAd, setShowAd] = useState(false)

  const handleOpenAd = () => {
    setShowAd(true)
  }
  return (
    <div>
      This is home page
      <button className="open-button" onClick={handleOpenAd}>
        Open Ad
      </button>
      <Popup showAd={showAd} />
    </div>
  )
}
