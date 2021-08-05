const validator = require('@ppamkcl/email-validator')

const error = validator.validate('pranjal')

if (error) {
    console.log(error);
} else {
    console.log('Email is valid!');
}