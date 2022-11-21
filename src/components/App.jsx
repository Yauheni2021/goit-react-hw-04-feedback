import { useState } from "react";
import { Section } from "./Section/Section";
import {FeedbackOptions} from "./Feedback/FeedbackOptions"
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = evt => {
  
    switch (evt.target.id) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = total => {
    return (total = good + neutral + bad);
  };



  const countPositiveFeedbackPercentage = percentage => {
    return Math.round((percentage = (good / totalFeedback) * 100));
  };

  const totalFeedback = countTotalFeedback()

  const options = Object.keys({ good, neutral, bad });

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleIncrement} />
      </Section>
      <Section title="Statistics">
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={
              totalFeedback === 0 ? 0 : countPositiveFeedbackPercentage()
            }
          ></Statistics>
        )}
      </Section>
    </>
  );
};

