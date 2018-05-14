const signupmodel = require('../model/signupmodel');
const nodemailer=require('nodemailer');
const randomstring=require('randomstring');
exports.registeruser = function (req, res, next) {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var token=randomstring.generate({
        length:100,
        charset:'alphanumeric',
        capitalization:'uppercase'
    });
    var link="http://localhost:3000/"+token;
    signupmodel.insertuser(username, email, password, function (err, result) {
        if(err) throw err;
        else{
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: 'bibekgaihre123@gmail.com', // generated ethereal user
                    pass: '9805421352' // generated ethereal password
                },  
                //if email is sent via localhost
                tls:{   
                    rejectUnauthorized:false
                }       
            });     
            let mailOptions = {
                from: '"Bibek Gaihre 👻" <bibekgaihre123@gmail.com>', // sender address
                to: email, // list of receivers
                subject: 'Hello ✔', // Subject line
                text: 'Hello world?', // plain text body
                html: "Please click the link below to activate your account<br><a href="+link+">"+link+"</a> " 
                // html body
            };
             // send mail with defined transport object
             transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                   
                    res.send('Couldnot send activation email.Please try again later');
                    return console.log(error);
                }
                else{
                    console.log('Message sent: %s', info.messageId);
                    // Preview only available when sending through an Ethereal account
                    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
                    
                }
              
            });
            res.send('Registration completed Check your mail');
        }
        

    }, function (err, result) {
        res.send('Registration failed');
    });







    // return new Promise((resolve, reject) => {
    //     resolve: signupmodel.insertuser(username,email,password);
    //    if(resolve){res.send('Registration completed')} ;
    //    if(reject){res.send('Registration error')};
    // });

}