import React, { Component } from "react";
import {
  getIntialData,
  handleModalVisible,
} from "../../actions/LandingActions";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";
import GetModal from "../Modal";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
};

class LandingPage extends Component {
  componentDidMount() {
    this.props.getIntialData();
  }

  render() {
    console.log(this.props.clickedId, "initialData");
    if (!this.props.isLoading) {
      return (
        <div style={styles.container}>
          {this.props.initialData &&
            this.props.initialData.members &&
            this.props.initialData.members.map((item, index) => (
              <Card
                style={{ width: "18rem", margin: "10px" }}
                onClick={() =>
                  this.props.handleModalVisible({
                    value: true,
                    clickedId: index,
                  })
                }
                key={index}
              >
                <Card.Body>
                  <Card.Title>{item.real_name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {item.tz}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            ))}
          <GetModal
            show={this.props.isModalVisible}
            onHide={() => this.props.handleModalVisible(false)}
            handleSubmit={() => this.props.handleModalVisible(false)}
            data={
              this.props.initialData &&
              this.props.initialData.members &&
              this.props.initialData.members[this.props.clickedId]
            }
          />
        </div>
      );
    } else {
      return <div>Loading....</div>;
    }
  }
}

const mapStateToProps = ({ LandingReducers }) => {
  const { initialData, isLoading, isModalVisible, clickedId } = LandingReducers;
  return { initialData, isLoading, isModalVisible, clickedId };
};

export default connect(mapStateToProps, { getIntialData, handleModalVisible })(
  LandingPage
);
