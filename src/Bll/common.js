import PropTypes from 'prop-types'

export const selectValueType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number
]).isRequired;

export const selectOptions = PropTypes.arrayOf(
  PropTypes.shape({
    value: selectValueType,
    text: PropTypes.string.isRequired
  }).isRequired,
).isRequired;

export const redirectToPrevPage = (location, history) => {
  if (location.state.from === window.location.host) {
    history.goBack();
  } else {
    history.push('/posts/1');
  }
}