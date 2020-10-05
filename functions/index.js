const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
admin.initializeApp();

const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port: 465,
    secure:true,
    auth: {
        user: 'xn.beats.sounds@gmail.com',
        pass: 'j9btmh7phmUB'
    }
})


exports.sendEmail = functions.firestore
.document('messages/{msgId}')
.onCreate((snapshot, context)=>{

    const mailOptions = {
        from:'xn.beats.sounds@gmail.com',
        to:'xn.beats.sounds@gmail.com',
        subject:'XNB Site new message',
        html:`
            <h1>You receiver a new message</h1>
            <p>
                <b>name:</b> ${snapshot.data().name }<br>
                <b>Email:</b> ${snapshot.data().email }<br>
                <b>MSG:</b> ${snapshot.data().message }<br>
            </p>
        `
    }


    return transporter.sendMail(mailOptions,(error,data)=>{
        if(error){
            console.log(error);
            return false
        }
        console.log('SENT !!')
    })
})

