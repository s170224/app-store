import './index.css'

const AppItem = props => {
  const {eachApp} = props
  const {appId, appName, imageUrl, category} = eachApp

  return (
    <li>
      <div className="appCon">
        <img src={imageUrl} className="image1" alt={appName} />
        <p className="appName">{appName}</p>
      </div>
    </li>
  )
}

export default AppItem
