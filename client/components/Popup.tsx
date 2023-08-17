import { useState, useEffect } from 'react'

export default function Popup({ showAd }) {
  // const [showAd, setShowAd] = useState(false)

  // const handleOpenAd = () => {
  //   setShowAd(true)
  // }

  return (
    <div>
      {showAd && (
        <a href="/OurPeople">
          <div id="poster" className="popup">
            <img
              src="/../public/images/popup.jpeg"
              alt="recruiter poster"
            ></img>
          </div>
        </a>
      )}
    </div>
  )
}

{
  /* <button className="open-button" onClick={handleOpenAd}>
Open Ad
</button> */
}
