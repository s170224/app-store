import './index.css'

const TabItem = props => {
  const {eachTabItem, updateTabId} = props
  const {tabId, displayText} = eachTabItem

  const getUpdateTabId = () => {
    updateTabId(tabId)
  }

  return (
    <li className="tabItemContainer">
      <button type="button" onClick={getUpdateTabId}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
