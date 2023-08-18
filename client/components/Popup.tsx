export default function Popup({ showAd }) {
  return (
    <div>
      {showAd && (
        <a href="empire/ourPeople">
          <div id="poster" className="popup">
            <img
              src="/../Public/Images/popup.jpeg"
              alt="recruiter poster"
            ></img>
          </div>
        </a>
      )}
    </div>
  )
}
