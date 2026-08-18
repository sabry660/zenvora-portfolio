import type { Metadata } from 'next'
import ContactForm from './contact-form'

export const metadata: Metadata = {
  title: 'Contact Us | Zenvora Technologies',
  description: 'Get in touch with Zenvora Technologies for your digital transformation needs.',
}

export default function ContactPage() {
  return <ContactForm />
}
