"use server";

import ContactFormEmail from "@/email/contact-form-email";
import { validateString } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";

const resend = new Resend("re_3QWkp97X_FeSU4nML6YDzBiwEiMNVUaLW");

const getErrorMessage = (error: unknown): string => {
    let message: string;

    if(error instanceof Error){
        message = error.message
    }else if(error && typeof error === "object" && "message" in error){
        message = String(error.message)
    }else if(typeof error === "string"){
        message = error
    }else{
        message = "Unknown Error"
    }

    return message;
}

export const sendEmail = async (formData: FormData) => {
    const email_sender = formData.get("email_sender");
    const message_sender = formData.get("message_sender");

    if(!validateString(email_sender, 500)){
        return{
            error: "Invalid sender email"
        }
    }

    if(!validateString(message_sender, 5000)){
        return{
            error: "Invalid message"
        }
    }

    new Error ('message')

    let data ;
    try{
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "vyaqubov112@gmail.com",
            subject: "Message from contact form",
            // reply_to: email_sender as string,
            text: message_sender as string,
            react: React.createElement(ContactFormEmail, {
                message: message_sender as string,
                email_sender: email_sender as string
            })
            // react: <ContactFormEmail message={message_sender} email_sender={email_sender} />,
        });
    } catch(error: unknown){
        return{
            error: getErrorMessage(error)
        }
    }
    
    return {
        data,
    }
}