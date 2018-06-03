// Survey New shows SurveyForm and 
import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import SurveyForm from './SurveyForm'
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {

    state = { showReviewForm: false }
    renderContent() {
        if (this.state.showReviewForm === true) {
            return <SurveyFormReview onCancel = {() => this.setState({ showReviewForm:false })}/>
        }

        return <SurveyForm onSurveySubmit={() => this.setState({ showReviewForm:true })}/>
 }   
  render () {
    return (
      <div>
            {this.renderContent()}
      </div>
    )
  }
}

export default reduxForm({
    form:'surveyForm'
})(SurveyNew)
