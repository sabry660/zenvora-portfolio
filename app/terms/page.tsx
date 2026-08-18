import type { Metadata } from 'next'
import { InfoHeading, InfoLink, InfoPageShell } from '@/components/info-page-shell'

export const metadata: Metadata = {
  title: 'Terms of Service | Zenvora Technologies',
  description: 'Terms of service for Zenvora Technologies official website.',
}

export default function TermsPage() {
  return (
    <div id="terms">
      <InfoPageShell title="Terms of Service" updatedAt="2026-08-18">
      <InfoHeading>1. Acceptance of Terms</InfoHeading>
      <p>
        These Terms of Service apply to your access and use of the official website operated by Zenvora Technologies. By accessing or using this website, you indicate that you have read, understood, and agree to these terms.
      </p>
      <p>
        You should have full civil capacity. If you are under 18 years old or do not have full civil capacity according to law, please read these terms under guardian supervision and obtain guardian consent before using this website.
      </p>

      <InfoHeading>2. Nature of Website</InfoHeading>
      <p>
        This website is used to introduce Zenvora Technologies' company, services, and portfolio. Website content is for general understanding only and <strong className="text-white">does not constitute</strong> professional advice or recommendations.
      </p>
      <p>
        We may adjust website content and functions from time to time. To the extent permitted by law, we do not promise that the website will be continuously available or that specific functions will always be available.
      </p>

      <InfoHeading>3. Usage Guidelines</InfoHeading>
      <p>We grant you a limited, non-exclusive, non-transferable license for personal, non-commercial browsing and use of this website. When using, you must not:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Violate laws and regulations or these terms;</li>
        <li>Reverse engineer, decompile, or attempt to obtain source code (except for open source projects which follow their licenses);</li>
        <li>Use automated tools for bulk scraping, frequent requests, or interfering with website operation;</li>
        <li>Spread malicious code, viruses, or other content that harms others' rights;</li>
        <li>Impersonate others, or falsely state your relationship with Zenvora Technologies;</li>
        <li>Use this website to infringe upon our or third parties' legitimate rights and interests.</li>
      </ul>
      <p>In case of violation, we have the right to restrict access, suspend or terminate services, and reserve the right to pursue legal liability.</p>

      <InfoHeading>4. Intellectual Property</InfoHeading>
      <p>
        The rights to text, graphics, logos, interfaces, and demo materials on this website belong to Zenvora Technologies or corresponding rights holders, and may not be copied, modified, disseminated, or used for commercial purposes without permission.
      </p>
      <p>
        Open source software is also bound by its open source licenses; when using open source software, please comply with the corresponding licenses.
      </p>

      <InfoHeading>5. Disclaimer</InfoHeading>
      <p>
        Website content is provided "as is." We make no express or implied warranties regarding its accuracy, completeness, timeliness, or applicability.
      </p>
      <p>
        AI product outputs and service recommendations are for reference only and do not constitute professional opinions. Before making business or technical decisions, please consult licensed professionals. We are not liable for decisions made based on reliance on website content or AI outputs.
      </p>
      <p>
        To the maximum extent permitted by law, we are not liable for direct or indirect losses arising from the use or inability to use this website, except for liabilities that cannot be excluded or limited by law.
      </p>

      <InfoHeading>6. External Links</InfoHeading>
      <p>
        This website may contain third-party links (such as GitHub, product sites). We provide links for convenience only and are not responsible for third-party content, behavior, or privacy practices. When visiting third-party sites, please comply with their terms and policies.
      </p>

      <InfoHeading>7. Applicable Law and Dispute Resolution</InfoHeading>
      <p>
        These terms are governed by applicable laws. Disputes arising from these terms or this website shall first be resolved through friendly consultation; if consultation fails, lawsuits may be filed in a court with appropriate jurisdiction.
      </p>

      <InfoHeading>8. Terms Changes</InfoHeading>
      <p>
        We may update these terms and publish the update date on this page. Major changes will be notified through prominent positions on the website or other appropriate means. Continued use of this website after updates constitutes acceptance of the updated terms.
      </p>

      <InfoHeading>9. Other</InfoHeading>
      <p>
        If any provision of these terms is deemed invalid or unenforceable, it does not affect the validity of the remaining provisions. These terms constitute the complete agreement between you and us regarding the use of this website.
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
      <p>These terms are effective from the date of publication.</p>
    </InfoPageShell>
    </div>
  )
}
