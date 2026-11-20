import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowUpRight, ContactRound, Globe2, MessageCircle, Phone } from 'lucide-react'
import styles from './card.module.css'

export const metadata: Metadata = {
  title: { absolute: 'ZENVORA TECHNOLOGIES | Digital Business Card' },
  description: 'Connect with the ZENVORA TECHNOLOGIES team.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

const contacts = [
  {
    name: 'Mohamed Sabry',
    phone: '0120 128 9813',
    international: '+201201289813',
    whatsapp: '201201289813',
  },
  {
    name: 'Omar Yasser',
    phone: '010 174 99342',
    international: '+20 10 17499342',
    whatsapp: '201017499342',
  },
  {
    name: 'Ibrahim Wael',
    phone: '0121 061 5171',
    international: '+201210615171',
    whatsapp: '201210615171',
  },
]

function createVCard(name: string, phone: string) {
  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${name};;;;`,
    `FN:${name}`,
    'ORG:ZENVORA TECHNOLOGIES',
    `TEL;TYPE=CELL,VOICE:${phone}`,
    'URL:https://zenvora.agency',
    'END:VCARD',
  ].join('\r\n')
}

export default function DigitalBusinessCardPage() {
  return (
    <main className={styles.page}>
      <div className={styles.frame}>
        <header className={styles.hero}>
          <div className={styles.logoStage}>
            <span className={styles.logoLight} aria-hidden="true" />
            <Image
              className={styles.logo}
              src="/zenvora.png"
              alt="ZENVORA TECHNOLOGIES"
              width={500}
              height={500}
              priority
            />
          </div>

          <p className={styles.eyebrow}>DIGITAL BUSINESS CARD</p>
          <h1 className={styles.brandName}>ZENVORA TECHNOLOGIES</h1>
          <p className={styles.tagline}>BUILDING SMARTER SOLUTIONS</p>
          <a className={styles.websiteLink} href="https://zenvora.agency">
            <Globe2 size={15} strokeWidth={1.8} />
            zenvora.agency
            <ArrowUpRight size={14} strokeWidth={1.8} />
          </a>
        </header>

        <section className={styles.contacts} aria-labelledby="team-heading">
          <div className={styles.sectionHeading}>
            <span className={styles.sectionIndex}>01 / CONTACT</span>
            <h2 id="team-heading">CONNECT WITH OUR TEAM</h2>
            <span className={styles.headingRule} aria-hidden="true" />
          </div>

          <div className={styles.contactGrid}>
            {contacts.map((contact, index) => {
              const vCard = createVCard(contact.name, contact.international)
              const vCardHref = `data:text/vcard;charset=utf-8,${encodeURIComponent(vCard)}`

              return (
                <article
                  className={styles.contactCard}
                  key={contact.name}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={styles.cardTopline}>
                    <span className={styles.contactNumber}>0{index + 1}</span>
                    <span className={styles.availability}>
                      <span className={styles.statusDot} />
                      AVAILABLE TO CONNECT
                    </span>
                  </div>

                  <h3 className={styles.contactName}>{contact.name}</h3>
                  <a className={styles.phoneNumber} href={`tel:${contact.international}`}>
                    {contact.phone}
                  </a>

                  <div className={styles.actions}>
                    <a className={styles.primaryAction} href={`tel:${contact.international}`} aria-label={`Call ${contact.name}`}>
                      <Phone size={15} strokeWidth={2} />
                      Call
                    </a>
                    <a
                      className={styles.secondaryAction}
                      href={`https://wa.me/${contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`WhatsApp ${contact.name}`}
                    >
                      <MessageCircle size={15} strokeWidth={2} />
                      WhatsApp
                    </a>
                    <a
                      className={styles.saveAction}
                      href={vCardHref}
                      download={`zenvora-${contact.name.toLowerCase()}.vcf`}
                      aria-label={`Save ${contact.name} contact`}
                    >
                      <ContactRound size={15} strokeWidth={1.8} />
                      <span>Save contact</span>
                    </a>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className={styles.visit} aria-label="Visit Zenvora website">
          <span className={styles.visitRule} aria-hidden="true" />
          <a className={styles.visitButton} href="https://zenvora.agency">
            VISIT OUR WEBSITE
            <ArrowUpRight size={16} strokeWidth={1.8} />
          </a>
          <span className={styles.visitRule} aria-hidden="true" />
        </section>

        <footer className={styles.footer}>
          <span>TECHNOLOGY WITH INTENTION</span>
          <a href="https://zenvora.agency">https://zenvora.agency</a>
          <span>© ZENVORA TECHNOLOGIES</span>
        </footer>
      </div>
    </main>
  )
}