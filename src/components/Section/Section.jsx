import { PropTypes } from "prop-types";
import { Box } from "../Box";
import { Title } from "../Section/Section.styled"

export const Section = ({ title, children }) => (
    <Box mt={3} mx="auto" py={3} maxWidth={2} as="section">
        <Title>{title}</Title>
        {children}
    </Box>
);

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};