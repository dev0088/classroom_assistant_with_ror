import React from "react"
import PropTypes from "prop-types"

import { RingLoader } from "react-spinners"
import ItemPanel from "../../shared/components/ItemPanel"

const ItemArchivePanel = ({
  id,
  username,
  displayName,
  avatarUrl,
  repoUrl,
  cloneProgress,
  cloneStatus,
  onViewClick
}) => {
  let progressElement

  if (cloneProgress === 0) {
    progressElement = (
      <div style={{
        width: "20px",
        height: "20px"
      }}
      >
        <RingLoader
          color={"#000"}
          loading={true}
        />
      </div>
    )
  } else if (cloneProgress > 0 && cloneProgress < 100) {
    progressElement = (
      <div
        className="progress"
        style={{
          width: "160px"
        }}
      >
        <div
          className="progress-bar progress-bar-info"
          role="progressbar" aria-valuenow={cloneProgress}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{
            width: cloneProgress + "%"
          }}
        >
          {cloneProgress.toFixed(0)}%
        </div>
      </div>
    )
  } else {
    progressElement = (
      <button className="btn btn-xs btn-primary" onClick={onViewClick}>
        <i className="fa fa-folder-open" aria-hidden="true"></i> View
      </button>
    )
  }

  return (
    <ItemPanel
      imagePath={avatarUrl}
      title={username}
      subtitle={displayName}
    >
      <div className="pull-right">
        <p className="pull-right">{cloneStatus}</p>
        <br/>
        <div className="pull-right">
          {progressElement}
        </div>
      </div>
    </ItemPanel>
  )
}

ItemArchivePanel.propTypes = {
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  repoUrl: PropTypes.string.isRequired,
  cloneProgress: PropTypes.number.isRequired,
  cloneStatus: PropTypes.string.isRequired,
  onViewClick: PropTypes.func
}

export default ItemArchivePanel
