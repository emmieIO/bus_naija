import nodemailer from 'nodemailer'
import { verifyAccountMail, welcomeMail, passwordResetMail, passwordResetSuccessMail } from './emailTemplates.js';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});


//verification mail
export const sendVerificationEmail = async (data) => {
    try {
        const info = await transporter.sendMail({
            from: "BusNaija",
            to: data.email,
            subject: "Email verification",
            html: verifyAccountMail(data.firstname, data.code)
        });
        console.log("Message sent: %s",info.messageId);
        
    } catch (error) {
        console.log(error);
    }
}

export const sendWelcomeMail = async (data) =>{
    try {
        const info = await transporter.sendMail({
            from: "BusNaija",
            to:data.email,
            subject: "Welcome to BusNaija",
            html: welcomeMail(data.firstname)
        });
        console.log("Message sent: %s",info.messageId);
    } catch(error){
        console.log(error);
    }
}

export const sendResetLinkMail = async (data)=>{
    try {
        const info = await transporter.sendMail({
            from: "BusNaija",
            to:data.email,
            subject: "Password Reset",
            html: passwordResetMail(data.firstname, data.resetToken)
        });
        console.log("Message sent: %s",info.messageId);
    } catch(error){
        console.log(error);
    }
}

export const sendPasswordResetSuccessMail = async (data)=>{
    try {
        const info = await transporter.sendMail({
            from: "BusNaija",
            to:data.email,
            subject: "Password Reset",
            html: passwordResetSuccessMail(data.firstname)
        });
        console.log("Message sent: %s",info.messageId);
    } catch(error){
        console.log(error);
    }
}