import PropTypes from 'prop-types';
import { Button, BtnContainer } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <BtnContainer>
        {options.map(name => {
            return (
            <div key={name}>
                <Button onClick={() => onLeaveFeedback(name)}
                    type="button" name={name}>
                    {name}
                </Button>
            </div>
            );
        })}
    </BtnContainer>
);
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;