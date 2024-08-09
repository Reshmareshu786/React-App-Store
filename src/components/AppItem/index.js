// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appId, appName, imageUrl} = appDetails
  return (
    <>
      <li className="apps">
        <img className="app-image" src={imageUrl} alt={appName} />
        <p className="app-label">{appName}</p>
      </li>
    </>
  )
}

export default AppItem
