"use client";

import React from 'react'
import SectionHeading from './sectionHeading'
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';
import useSectionInView from '@/lib/hook';

function Contact() {
    const { ref } = useSectionInView("Contact");

    return (
        <motion.section ref={ref} id="contact" className='mb-20 sm:mb-28 w-[min(100%, 38rem)] scroll-mt-28' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <SectionHeading>Contact</SectionHeading>
            <p className='text-gray-700 text-center -mt-6 dark:text-white/80'>Contact me <a href="mailto:vyaqubov112@gmail.com" className='underline '>with email</a> or through with this form</p>
            <form
                action={async (formData) => { 
                    const {data, error} = await sendEmail(formData);
                    if(error){
                        // alert(error);
                        toast.error(error);
                        return;
                    }

                    toast.success("Email sent succesfully")
                }}
                // action={sendEmail}
                className='mt-10 flex flex-col dark:text-black'
            >
                <input name="email_sender" required maxLength={500} type="email" className='h-14 rounded-lg borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' placeholder='Your email' />
                <textarea name="message_sender" required maxLength={5000} className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' placeholder='Your message'></textarea>
                <SubmitBtn />
            </form>
        </motion.section>
    )
}

export default Contact