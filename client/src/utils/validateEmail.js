const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default email => {
  if (re.test(email) === false) {
    return 'Please provide correct email';
  }
  return;
};
