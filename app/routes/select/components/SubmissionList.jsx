import React, { PropTypes } from "react"
import { compose, withHandlers } from "recompose"

import Submission from "./Submission"
import SelectAllPanel from "./SelectAllPanel"

const containerStyles = {
  marginBottom: "100px"
}

const enchance = compose(
  withHandlers({
    renderSubmission: (props) => (submissionProps) => {
      return (
        <Submission key={submissionProps.id} {...submissionProps}/>
      )
    },

    numSelectedSubmissions: (props) => () => {
      return props.submissions.filter((each) => {
        return each.selected
      }).length
    }
  })
)

const SubmissionList = enchance(({
  submissions,
  renderSubmission,
  numSelectedSubmissions
}) => {
  return (
    <div style={containerStyles}>
      <SelectAllPanel selected={numSelectedSubmissions()} total={submissions.length} />
      {submissions.map(renderSubmission)}
    </div>
  )
})

SubmissionList.propTypes = {
  submissions: PropTypes.array.isRequired
}

export default SubmissionList
