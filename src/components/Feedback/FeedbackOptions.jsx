import { PropTypes } from "prop-types";
import { Button } from "./FeedbackOptions.styled";


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
            {options.map(btn => {
                return (
                    <Button type="button" key={btn} id={btn} onClick={onLeaveFeedback}>
                        {btn}
                    </Button>
                );
            })}
        </>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
