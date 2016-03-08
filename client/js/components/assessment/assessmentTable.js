"use strict";

var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var PageHeader = ReactBootstrap.PageHeader;
var Loader = require('react-loader');
var $ = require('jquery');

var AssessmentList = require('./assessmentList');

var AssessmentTable = React.createClass({
  propTypes: {
    team_id: React.PropTypes.string
  },
  loadAssessmentsFromServer: function() {
    var url = '/api/assessments/';
    if (this.props.team_id) {
      url += '?team__id=' + this.props.team_id;
    }
    $.ajax({
      url: url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data, loaded: true});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {
      data: [],
      loaded: false
    };
  },
  componentDidMount: function() {
    this.loadAssessmentsFromServer();
  },
  render: function() {
    return (
      <div>
        <Loader loaded={this.state.loaded}>
          <AssessmentList data={this.state.data} />
        </Loader>
      </div>
    );
  }
});

module.exports = AssessmentTable;
