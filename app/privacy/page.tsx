import type { Metadata } from 'next'
import { InfoHeading, InfoLink, InfoPageShell } from '@/components/info-page-shell'

export const metadata: Metadata = {
  title: 'Privacy Policy | Zenvora Technologies',
  description: 'Privacy policy for Zenvora Technologies official website.',
}

export default function PrivacyPage() {
  return (
    <div id="privacy">
      <InfoPageShell title="Privacy Policy" updatedAt="2026-08-18">
      <p>
        This Privacy Policy applies to the official website operated by Zenvora Technologies. We value your privacy and process personal information in accordance with relevant laws and regulations.
      </p>
      <p className="text-white/65">
        Unless otherwise specified, "personal information" and "sensitive personal information" follow the definitions in applicable laws. This policy only applies to this official website.
      </p>

      <InfoHeading>1. Information We Collect</InfoHeading>
      <p>This website is primarily for static display. Browsing this site typically does not require registration, login, or active provision of personal information.</p>
      <p>Information we may process includes:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong className="text-white">Automatically collected access statistics</strong>
          : Collecting de-identified access data through analytics services (such as access time, page paths, device types, browsers, and approximate regions) to improve website content. This type of information does not directly identify your identity.
        </li>
        <li>
          <strong className="text-white">Information you actively provide</strong>
          : When you contact us via email or WhatsApp, we receive your contact information and communication content, used only to respond to inquiries.
        </li>
      </ul>
      <p>Beyond this, we will not actively collect personal information such as names, ID numbers, nor will we require you to provide sensitive personal information.</p>

      <InfoHeading>2. Cookies and Local Storage</InfoHeading>
      <p>
        This website may use necessary cookies or local storage to maintain basic functions. Analytics services may also use cookies or similar technologies for access statistics. You can manage, refuse, or clear cookies in your browser; refusing necessary cookies may affect some functions.
      </p>

      <InfoHeading>3. How We Use Information</InfoHeading>
      <ul className="list-disc space-y-2 pl-5">
        <li>Provide, maintain, and improve this website;</li>
        <li>Respond to your inquiries and communicate with you;</li>
        <li>Conduct de-identified access statistics and experience analysis;</li>
        <li>Fulfill legal obligations, or as necessary to protect the major legitimate rights and interests of you, us, or third parties.</li>
      </ul>
      <p>We will not sell your personal information, nor will we use information for purposes unrelated to the above. If needed for other purposes, we will obtain your separate consent.</p>

      <InfoHeading>4. Sharing and Disclosure</InfoHeading>
      <p>We will not sell, rent, or trade your personal information to third parties. Sharing or disclosure may only occur in the following situations:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>With your prior explicit consent or authorization;</li>
        <li>Providing information necessary to achieve the purposes of this policy to hosting, analytics, and other service providers who have signed confidentiality obligations;</li>
        <li>As required by laws, regulations, judicial or administrative authorities;</li>
        <li>As necessary to protect the major legitimate rights and interests of you or others, such as life or property;</li>
        <li>
          When the company undergoes mergers, divisions, acquisitions, etc. that require transfer of personal information, we will inform the recipient and require them to continue to be bound by this policy.
        </li>
      </ul>

      <InfoHeading>5. Storage and Security</InfoHeading>
      <p>
        Personal information is in principle stored for the period necessary to achieve the purposes of this policy. Email communication content will be deleted or anonymized within a reasonable period after the inquiry is processed, unless otherwise required by laws and regulations.
      </p>
      <p>
        We take reasonable technical and management measures to protect information security (such as HTTPS, access control, etc.). Please understand that the internet environment cannot guarantee absolute security; please properly protect information you provide yourself.
      </p>

      <InfoHeading>6. Minor Protection</InfoHeading>
      <p>
        This website is oriented towards adults and does not actively collect personal information from minors. Minors should use this site under guardian guidance; if guardians discover that minors have provided personal information to us, please contact us, and we will delete it promptly after verification.
      </p>

      <InfoHeading>7. Your Rights</InfoHeading>
      <p>Under relevant laws, you can:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Query, copy, correct, or supplement personal information;</li>
        <li>Request deletion of personal information;</li>
        <li>Withdraw previously given consent (not affecting processing already conducted based on consent before withdrawal);</li>
        <li>Require us to explain the processing rules of this policy;</li>
        <li>Complain or report to relevant authorities.</li>
      </ul>
      <p>When exercising the above rights, please contact us through the methods below. We will typically process within 15 business days after verifying your identity.</p>

      <InfoHeading>8. Third-Party Links</InfoHeading>
      <p>
        This website may contain links to third-party websites. Third parties' privacy practices are not bound by this policy; please read their privacy policies yourself.
      </p>

      <InfoHeading>9. Policy Updates</InfoHeading>
      <p>
        We may update this policy due to changes in laws, regulations, business, or technology, and update the date on this page. Major changes will be notified through prominent positions on the website or other appropriate means.
      </p>

      <InfoHeading>10. Contact Us</InfoHeading>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          Email:
          <InfoLink href="mailto:zenvoratechnology@gmail.com">zenvoratechnology@gmail.com</InfoLink>
        </li>
        <li>Company: Zenvora Technologies</li>
        <li>Address: Alexandria, Egypt</li>
      </ul>
      <p>This policy is effective from the date of publication.</p>
    </InfoPageShell>
    </div>
  )
}
