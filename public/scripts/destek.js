function sendmail(){
    
    var name = $('#Name').val();
    var email = $('#Sender').val();
    var subject = $('#Subject').val();
var message = $('#Message').val();

    

    var Body='Name: '+name+'<br>Email: '+email+'<br>Subject: '+subject+'<br>Message: '+message;
    

    Email.send({
        SecureToken:"774a1640-495e-4425-99f3-297dd320a3c9",
        To: 'alvalizi.destek@gmail.com',
        From: "alvalizi.destek@gmail.com",
        Subject: "New message on contact from "+name,
        Body: Body
    }).then(
        message =>{
            
            if(message=='OK'){
            alert('Mailiniz Alınmıştır Teşekkür Ederiz...');
            }
            else{
                console.error (message);
                alert('Mailiniz Gönderilirken Bir Hata Oluştu.')
                
            }

        }
    );



}
