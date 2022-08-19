import PropTypes from 'prop-types';
import { Result } from './Statistics.styled';


const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <div>
            <Result>
                <p>Good: {good}</p>
                <p>Neutral: { neutral}</p>
                <p>Bad: {bad}</p>
            </Result>
            
        <p>Total: {total} </p>
        <p>Positive feadback: { `${positivePercentage}%` }</p>
    </div>
);
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;