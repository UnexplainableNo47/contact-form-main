const form = document.getElementById('contact-form')

const first_name = document.getElementById('first-name')
const last_name = document.getElementById('last-name')
const email = document.getElementById('email')
const support_request = document.getElementById('support-request')
const general_enquiry = document.getElementById('general-enquiry')
const message = document.getElementById('Message')
const consent = document.getElementById('consent')

const FName_Err_Msg = document.getElementById('FName-Err-Msg')
const LName_Err_Msg = document.getElementById('LName-Err-Msg')
const Email_Err_Msg = document.getElementById('Email-Err-Msg')
const Query_Err_Msg = document.getElementById('Query-Err-Msg')
const Message_Err_Msg = document.getElementById('Message-Err-Msg')
const Consent_Err_Msg = document.getElementById('Consent-Err-Msg')

const success_Pop_Up = document.getElementById('success-Pop-Up')

form.addEventListener('submit',(e) =>{
    //creates error list --- 
    let errors = [];

    errors = GetErrors(first_name.value, last_name.value, email.value, message.value)

    if ( errors.length > 0 ) {
        e.preventDefault();
    } else {
        success_Pop_Up.style.display = 'block'
        setTimeout(function() {
            //Here goes function that is responsible for hiding growl 
            success_Pop_Up.style.display = 'none'
        }, 4000);
        
    }

})
//captures errors
function GetErrors(Name, Surname, Email, Message){
    let errors = [];

    if ( Name === '' || Name == null ) {
        errors.push('Err.Name');
        FName_Err_Msg.innerText = 'This field is required';
    }else{
        FName_Err_Msg.innerText = '';
    }
    if ( Surname === '' || Surname == null ) {
        errors.push('Err.Surname');
        LName_Err_Msg.innerText = 'This field is required';
    }else{
        LName_Err_Msg.innerText = '';
    }
    if ( Email === '' || Email == null ) {
        errors.push('Err.Email');
        Email_Err_Msg.innerText = 'This field is required';
    }else{
        Email_Err_Msg.innerText = '';
    }
    if ( !support_request.checked && !general_enquiry.checked ) {
        errors.push('Err.Query');
        Query_Err_Msg.innerText = 'Please select a query type';
    }else{
        Query_Err_Msg.innerText = '';
    }
    if ( Message === '' || Message == null ) {
        errors.push('Err.Message');
        Message_Err_Msg.innerText = 'This field is required';
    }else{
        Message_Err_Msg.innerText = '';
    }
    if ( !consent.checked ) {
        errors.push('Err.Consent');
        Consent_Err_Msg.innerText = 'To submit this form, please consent to being contacted';
    }else{
        Consent_Err_Msg.innerText = ''
    }

    return errors;
}



 