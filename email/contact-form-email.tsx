import React from 'react';
import{
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
}   from '@react-email/components';
import {Tailwind} from '@react-email/tailwind'

type ContactFormEmailProps = {
    message: string;
    email_sender: string;
}

export default function ContactFormEmail({message,email_sender}:ContactFormEmailProps) {
  return <Html>
    <Head />
    <Preview>New Message from your site</Preview>
    <Tailwind>
        <Body className='bg-gray-100'>
            <Container>
                <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md'>
                    <Heading className='leading-thight'>You recieved the following mesasge from the contact form</Heading>
                    <Text>{message}</Text>
                    <Text>The senders email is: {email_sender}</Text>
                </Section>
            </Container>
        </Body>
    </Tailwind>
  </Html>
}