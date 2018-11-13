const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data){
  let errors = {};
  // console.log(data.password2);

  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2: '';

  if(!Validator.isLength(data.name, { min: 4, max: 20})) {
    errors.name = 'Name must be between 4 - 20 characters';
  }

  if(Validator.isEmpty(data.name)){
    errors.name = 'Name field is required';
  }

  if(!Validator.isEmail(data.email)){
    errors.email = 'Email is invalid';
  }

  if(Validator.isEmpty(data.password)){
    errors.password = 'Password field is required';
  }

  if(!Validator.isLength(data.password, { min: 8, max: 20})) {
    errors.name = 'password must be between 8 - 20';
  }

  if(Validator.isEmpty(data.password2)){
    errors.password2 = 'Confirm Password field is required';
  }

  if(!Validator.equals(data.password, data.password2)){
    errors.password2 = 'Password must match';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
