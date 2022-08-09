$('').validate({
    rules: {
      name: 'required',
  
      email: {
        required: true,
        email: true,
      },
      pasword: {
        required: true,
        minlength: 8,
      }
    },
    messages: {
      fname: 'This field is required',
      lname: 'This field is required',
      user_email: 'Enter a valid email',
      psword: {
        minlength: 'Password must be at least 8 characters long'
      }
    },
    submitHandler: function(form) {
      form.submit();
    }
  });