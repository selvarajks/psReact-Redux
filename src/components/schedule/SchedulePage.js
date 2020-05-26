import React from "react";
import * as scheduleActions from "../../redux/actions/scheduleActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { prototype } from "enzyme-adapter-react-16";

class SchedulePage extends React.Component {
  state = {
    schedule: {
      duration: "",
    },
  };

  handleSubmit = (event) => {
    event.preventDefault();
    debugger;
    this.props.dispatch(
      scheduleActions.createSchedule(this.state.schedule.duration)
    );
  };

  handleChange = (event) => {
    const schedule = { ...this.state.schedule, duration: event.target.value };
    this.setState({ schedule });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Schedule Page</h2>
        <h4>Add Schedule</h4>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.schedule.duration}
        />
        <input type="submit" value="Save" />
        {this.props.schedule.map((schedule) => (
          <div key={schedule.duration}>{schedule.duration}</div>
        ))}
      </form>
    );
  }
}

SchedulePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    schedule: state.schedule,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(scheduleActions, dispatch),
  };
}
//calls two separate functions
//mapStatetoProps,mapdispatchToProps and pass the
//obtained result to SchedulePage

export default connect(mapStateToProps, mapDispatchToProps)(SchedulePage);
