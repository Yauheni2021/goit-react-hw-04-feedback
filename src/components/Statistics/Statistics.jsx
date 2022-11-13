import { PropTypes } from "prop-types";
import { Box } from "components/Box";
import {StatListItem, StatListCount} from "./Statistics.styled"

export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) => {
    return (
        <Box as={'ul'}>
            <StatListItem>
                <p>Good:</p>
                <StatListCount>{good}</StatListCount>
            </StatListItem>
            
            <StatListItem>
                <p>Neutral:</p>
                <StatListCount>{neutral}</StatListCount>
            </StatListItem>

            <StatListItem>
                <p>Bad:</p>
                <StatListCount>{bad}</StatListCount>
            </StatListItem>
            
            <StatListItem>
                <p>Total:</p>
                <StatListCount>{total}</StatListCount>
            </StatListItem>

            <StatListItem>
                <p>Positive feedback:</p>
                <StatListCount>{positivePercentage}%</StatListCount>
            </StatListItem>
        </Box>
    );
};

Statistics.prototype = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};
