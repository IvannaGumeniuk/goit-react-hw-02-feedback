import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import React, { Component } from 'react';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    // addGoodFeadback = () => {
    //     this.setState(prevState => {
    //         return {
    //             good: prevState.good + 1,
    //         };
    //     });
    // };
    
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    if (!good) {
      return 0;
    }
        
    const total = good + neutral + bad;
    const positiveFeedback = (good * 100) / total;
    return Math.round(positiveFeedback);
  };
  
  handelClick = name => {
      this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };
  
    countTotalFeedback = () => {
        const {good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

  render() {
      const { good, neutral, bad } = this.state;
        return (
          <div>
            <Section title="Please leave feadback">
              
            <FeedbackOptions
                  options={Object.keys(this.state)}
                  onLeaveFeedback={this.handelClick}
              />
            </Section>

            <Section title="Statistics">
              {!this.countTotalFeedback() ? (
                <Notification message="There is no feedback" />
              ) : (
              
                <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={this.countTotalFeedback()}
                  positivePercentage={this.countPositiveFeedbackPercentage()}
                />
              )}
              </Section>
          </div>

            );
    }
}

export default App;
