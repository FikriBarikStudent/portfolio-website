import React from 'react'
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

type ContactFormEmailProps = {
    senderEmail: string,
    message: string
}

export default function ContactFormEmail(
    { senderEmail, message }: ContactFormEmailProps
) {
      
    return (
        <Html>
            <Head/>
            <Preview>New message from your portfolio website</Preview>
            <Tailwind>
                <Body className='bg-gray-100 text-black'>
                    <Container>
                        <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md'>
                            <Heading className='leading-tight'>Received from portfolio website</Heading>
                            <Text>{message}</Text>
                            <Hr/>
                            <Text>The one who sent is: {senderEmail}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}
