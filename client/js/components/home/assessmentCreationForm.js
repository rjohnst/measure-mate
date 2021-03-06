'use strict'

var React = require('react')
var ReactBootstrap = require('react-bootstrap')
var Alert = ReactBootstrap.Alert
var TemplateSelect = require('./templateSelect')
var $ = require('jquery')

var AssessmentCreationForm = React.createClass({
  propTypes: {
    teamId: React.PropTypes.number.isRequired
  },
  getInitialState: function () {
    return {
      template: '',
      formError: ''
    }
  },
  changeHandlerTemplate: function (val) {
    this.setState({
      template: val.value
    })
  },
  handleSubmit: function (e) {
    e.preventDefault()
    if (this.state.template) {
      var template = this.state.template
      var teamId = this.props.teamId
      this.createAssessment(template, teamId)
    } else {
      var message = 'Template required.'
      this.showError(message)
    }
  },

  showError: function (message) {
    this.setState({
      formError: message
    })
  },

  createAssessment: function (template, teamId) {
    var data = {
      team: teamId,
      template: template
    }
    $.ajax({
      context: this,
      url: '/api/assessments/',
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      data: JSON.stringify(data),
      type: 'POST',
      cache: true,
      success: function (output) {
        window.location = '/assessment/' + output.id + '/'
      },
      error: function (xhr, status, err) {
        var message = 'Launch failed due to unknown reason. Try again later.'
        this.showError(message)
      }
    })
  },

  render: function () {
    return (
      <form className='form-horizontal'>
        <Alert bsStyle='danger' className={this.state.formError ? '' : 'hidden'}>
          {this.state.formError}
        </Alert>
        <div className='form-group'>
          <TemplateSelect
            label='Template'
            ref='template'
            {...this.props}
            value={this.state.template}
            onChange={this.changeHandlerTemplate}
          />
        </div>
        <div className='form-group'>
          <div className='col-xs-2 col-xs-offset-2'>
            <input className='btn btn-default btn-primary' type='submit' value='Launch' onClick={this.handleSubmit} />
          </div>
        </div>
      </form>
    )
  }
})

module.exports = AssessmentCreationForm
