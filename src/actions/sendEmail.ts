'use server';

import ContactFormEmail from "@/email/contact-form-email";
import { validateString, getErrorMessage } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail =async (formData: FormData) => {
    const senderEmail = formData.get('senderEmail')
    const message = formData.get('message')

    if (!validateString(senderEmail, 500)) {
        return {
            error: 'Invalid sender email'
        }
    }

    if (!validateString(message, 500)) {
        return {
            error: 'Invalid message'
        }
    }
    let data
    try {
        data = await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>',
            to: 'muhammadfikrialbarik@gmail.com',
            subject: "Message from portfolio website",
            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail, {
               message: message as string,
               senderEmail: senderEmail as string 
            } )
        })
    } catch (error: unknown) {

        return {
            error: getErrorMessage(error)
        }
    }

    return {
        data
    }
}