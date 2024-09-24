  $("#form-validate").validate(
  {
    rules: {
        name: {
          minlength:3,
            maxlength:50,
             required:true,
           },
           email: {
              required:true,
           },
          phone: {
            minlength:10,
             maxlength:14,
              required:true,
          },
          age: {
            required:true,
             min:18,
             max:120,
          },
          gender: {
            required:true,
          },
          address: {
            required:true,
          }
          
           },
            messages: {
              name: {
                required:"Name is required",
                 minlength:"Name should be minimum 3 characters",
                  maxlength:"Name should be less than 50 characters",
                    },
              email: {
                   required:"email required",
              },
              phone: {
                 required:"Phone is required",
                  minlength:"phone should be minimum 10 numbers",
                   maxlength:"phone should be less than 14 numbers",
                    },
              age: {
               required:"age is required",
                 min:"age minimum 18",
                max:"age should be maximum 120", 
              },
              gender: {
                required:"gender required",
              },
              address: {
                required:"address required",
                maxlength:"maximum 50 characters",
              }      


           }
  } 
        
      )