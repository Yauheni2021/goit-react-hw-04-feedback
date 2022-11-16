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
    // this.setState(prevState => {
    // return label;
    // { [label]: prevState[label] + 1 };
    // }
    //   );
  };
  // useEffect(() => {}, [good, neutral, bad]);

  // const handleIncrement = evt => {
  //   const label = evt.target.id;
  //   this.setState(prevState => {
  //     return { [label]: prevState[label] + 1 };
  //   });
  // };

  const countTotalFeedback = total => {
    return (total = good + neutral + bad);
  };

  const countPositiveFeedbackPercentage = percentage => {
    return Math.round((percentage = (good / countTotalFeedback()) * 100));
  };

  const options = Object.keys({ good, neutral, bad });

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleIncrement} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={
              countTotalFeedback() === 0 ? 0 : countPositiveFeedbackPercentage()
            }
          ></Statistics>
        )}
      </Section>
    </>
  );
};


// export class App extends Component {
//   // state = {
//   //   good: 0,
//   //   neutral: 0,
//   //   bad: 0
//   // }



//   handleIncrement = e => {
//   const label = e.target.id;
//   this.setState(prevState => {
//     return {
//       [label]: prevState[label] + 1
//     };
//   })
//   };
  
//   countTotalFeedback = total => {
//     return (total = this.state.good + this.state.neutral + this.state.bad);
//   };

//   countPositiveFeedbackPercentage = percentage => {
//     return Math.round(
//       (percentage = (this.state.good / this.countTotalFeedback()) * 100)
//     );
//   };

//   render() {
//     const options = Object.keys(this.state);
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions options={options}
//             onLeaveFeedback={this.handleIncrement}
//           />
//         </Section>
        
//         <Section title={'Statistics'}>
//           {this.countTotalFeedback() === 0 ? (
//             <Notification message="There is no feedback" />
//           ) : (<Statistics
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={this.state.total}
//             positivePercentage={
//               this.countTotalFeedback() === 0 ? 0 :
//                 this.countPositiveFeedbackPercentage()
//             }
//           >
              
//           </Statistics>
              
//           )}
//         </Section>
       
//       </>
//     );
//   }
// };