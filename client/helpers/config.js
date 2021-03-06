// configure the special accounts user interface
// by setting up some extra fields and specifying constraints
// see:https://github.com/ianmartorell/meteor-accounts-ui-bootstrap-3/    
Accounts.ui.config({
    requestPermissions: {},
    extraSignupFields: [{
        fieldName: 'name',
        fieldLabel: 'Name',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
          if (!value) {
            errorFunction("Please write your name");
            return false;
          } else {
            return true;
          }
        }
    }, {
        fieldName: 'username',
        fieldLabel: 'Username',
        inputType: 'text',
        visible: true,
    }, {
        fieldName: 'gender',
        showFieldLabel: false,      // If true, fieldLabel will be shown before radio group
        fieldLabel: 'Gender',
        inputType: 'radio',
        radioLayout: 'vertical',    // It can be 'inline' or 'vertical'
        data: [{                    // Array of radio options, all properties are required
            id: 1,                  // id suffix of the radio element
            label: 'Male',          // label for the radio element
            value: 'm'              // value of the radio element, this will be saved.
          }, {
            id: 2,
            label: 'Female',
            value: 'f',
            checked: 'checked'
        }],
        visible: true
    }, {
        fieldName: 'terms',
        fieldLabel: 'I accept the terms and conditions <a href="">See t and x...</a>',
        inputType: 'checkbox',
        visible: true,
        saveToProfile: false,
        validate: function(value, errorFunction) {
            if (value) {
                return true;
            } else {
                errorFunction('You must accept the terms and conditions.');
                return false;
            }
        }
    }]
});

Avatar.setOptions({
    fallbackType: "initials",
    imageSizes: {
        'large': 80,
        'mySize': 50,
        'extra-small': 32
    },
    customImageProperty: function(){
        

        var user = this;
        return "/"+ user.profile.avatar;

        //if (user && user.profile && user.profile.avatar)
        //{
        //    return "/"+ user.profile.avatar;
        //}
        //return null;
    },

});


Template._loginButtonsLoggedInDropdown.events({
    'click #login-buttons-edit-profile': function(event) {
            event.preventDefault();

        Router.go('profileEdit');
    }
});
