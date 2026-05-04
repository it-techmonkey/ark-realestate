import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | ARK Vision",
  description:
    "How ARK Vision International collects, uses, and protects your information.",
};

const toc = [
  { id: "company-information", label: "Company information" },
  { id: "what-we-collect", label: "What we collect" },
  { id: "when-we-collect", label: "When we collect" },
  { id: "how-we-use", label: "How we use data" },
  { id: "how-we-protect", label: "How we protect" },
  { id: "cookies", label: "Cookies" },
  { id: "third-party-disclosure", label: "Third-party disclosure" },
  { id: "third-party-links", label: "Third-party links" },
  { id: "google", label: "Google ads & analytics" },
  { id: "uae-compliance", label: "UAE compliance" },
  { id: "dnt", label: "Do Not Track" },
  { id: "children", label: "Children’s privacy" },
  { id: "fair-practices", label: "Fair information practices" },
  { id: "can-spam", label: "CAN-SPAM" },
  { id: "contact", label: "Contact" },
] as const;

function SectionTitle({
  id,
  number,
  children,
}: {
  id: string;
  number: number;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 font-serif text-2xl font-light text-white/95 md:text-3xl"
    >
      <span className="mr-2 font-light text-[#c9a84c] tabular-nums">
        {number}.
      </span>
      {children}
    </h2>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <section className="relative border-b border-white/5 py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-8 md:px-20">
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-gradient-to-r from-[#c9a84c] to-transparent" />
            <span className="text-[10px] font-light uppercase tracking-[5px] text-[#c9a84c]">
              Legal
            </span>
          </div>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl font-light italic text-white/90 md:text-6xl">
            Privacy <span className="text-[#c9a84c]">Policy</span>
          </h1>
          <p className="mt-2 font-light text-white/55 text-sm uppercase tracking-[4px]">
            ARK Vision International Real Estate L.L.C
          </p>
          <div className="mt-8 max-w-3xl space-y-5 font-light text-white/65 text-sm leading-relaxed md:text-base">
            <p>
              This Privacy Policy has been compiled to better serve individuals
              who are concerned with how their &quot;Personally Identifiable
              Information&quot; (PII) is being used online. PII, as described
              under applicable UAE privacy and data protection laws, is
              information that can be used on its own or with other information
              to identify, contact, or locate a single person, or to identify an
              individual in context.
            </p>
            <p>
              Please read this Privacy Policy carefully to understand how we
              collect, use, protect, or otherwise handle your Personally
              Identifiable Information in accordance with our website and
              services.
            </p>
          </div>

          <nav
            aria-label="Privacy policy sections"
            className="mt-12 rounded-lg border border-white/10 bg-white/[0.03] p-6 md:p-8"
          >
            <p className="mb-4 text-[10px] font-light uppercase tracking-[4px] text-[#c9a84c]">
              On this page
            </p>
            <ol className="grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
              {toc.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="link-underline font-light text-white/60 transition-colors hover:text-[#c9a84c]"
                  >
                    <span className="mr-2 text-white/35 tabular-nums">
                      {i + 1}.
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      <section className="border-b border-white/5 py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-14 px-8 md:px-20 md:space-y-20">
          <article className="space-y-5" aria-labelledby="company-information">
            <SectionTitle id="company-information" number={1}>
              Company Information
            </SectionTitle>
            <dl className="grid gap-4 font-light text-white/70 text-sm leading-relaxed sm:grid-cols-[minmax(0,160px)_1fr] sm:gap-x-8">
              <dt className="text-white/45">Company name</dt>
              <dd>ARK VISION INTERNATIONAL REAL ESTATE L.L.C</dd>
              <dt className="text-white/45">Legal form</dt>
              <dd>Limited Liability Company (LLC)</dd>
              <dt className="text-white/45">License No.</dt>
              <dd>920682</dd>
              <dt className="text-white/45">Registered activity</dt>
              <dd>
                <ul className="list-inside list-disc space-y-1">
                  <li>Real Estate Buying &amp; Selling Brokerage</li>
                  <li>Leasing Property Brokerage Agents</li>
                </ul>
              </dd>
              <dt className="text-white/45">Registered address</dt>
              <dd>Office No. 1101, Dubai, United Arab Emirates</dd>
              <dt className="text-white/45">Phone</dt>
              <dd>
                <a
                  href="tel:+971569917401"
                  className="text-[#c9a84c] transition-colors hover:text-[#fcf6ba]"
                >
                  +971569917401
                </a>
              </dd>
              <dt className="text-white/45">Email</dt>
              <dd>
                <a
                  href="mailto:marketing@arksvision.ae"
                  className="text-[#c9a84c] transition-colors hover:text-[#fcf6ba]"
                >
                  marketing@arksvision.ae
                </a>
              </dd>
            </dl>
          </article>

          <article className="space-y-5" aria-labelledby="what-we-collect">
            <SectionTitle id="what-we-collect" number={2}>
              What Personal Information Do We Collect?
            </SectionTitle>
            <p className="font-light text-white/70 text-sm leading-relaxed">
              When registering on our site, filling out a form, subscribing to a
              newsletter, using live chat, or contacting us regarding property
              services, you may be asked to enter:
            </p>
            <ul className="list-inside list-disc space-y-2 font-light text-white/70 text-sm leading-relaxed marker:text-[#c9a84c]/80">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Property Preferences</li>
              <li>Other details necessary to assist with your inquiry</li>
            </ul>
          </article>

          <article className="space-y-5" aria-labelledby="when-we-collect">
            <SectionTitle id="when-we-collect" number={3}>
              When Do We Collect Information?
            </SectionTitle>
            <p className="font-light text-white/70 text-sm leading-relaxed">
              We collect information from you when you:
            </p>
            <ul className="list-inside list-disc space-y-2 font-light text-white/70 text-sm leading-relaxed marker:text-[#c9a84c]/80">
              <li>Register on our website</li>
              <li>Subscribe to our newsletter</li>
              <li>Fill out a contact or inquiry form</li>
              <li>Use Live Chat</li>
              <li>Request property details</li>
              <li>Communicate via email or phone</li>
            </ul>
          </article>

          <article className="space-y-5" aria-labelledby="how-we-use">
            <SectionTitle id="how-we-use" number={4}>
              How Do We Use Your Information?
            </SectionTitle>
            <p className="font-light text-white/70 text-sm leading-relaxed">
              We may use the information collected from you in the following
              ways:
            </p>
            <ul className="list-inside list-disc space-y-2 font-light text-white/70 text-sm leading-relaxed marker:text-[#c9a84c]/80">
              <li>To personalize your experience</li>
              <li>To provide property brokerage services</li>
              <li>To respond to inquiries</li>
              <li>To send periodic emails regarding properties or services</li>
              <li>
                To follow up after correspondence (live chat, email, or phone
                inquiries)
              </li>
            </ul>
          </article>

          <article className="space-y-5" aria-labelledby="how-we-protect">
            <SectionTitle id="how-we-protect" number={5}>
              How Do We Protect Your Information?
            </SectionTitle>
            <ul className="list-inside list-disc space-y-2 font-light text-white/70 text-sm leading-relaxed marker:text-[#c9a84c]/80">
              <li>Our website is regularly scanned for security vulnerabilities.</li>
              <li>We use malware scanning.</li>
              <li>
                We do not request sensitive financial information such as credit
                card numbers.
              </li>
              <li>
                Access to personal data is restricted to authorized personnel
                only.
              </li>
            </ul>
          </article>

          <article className="space-y-5" aria-labelledby="cookies">
            <SectionTitle id="cookies" number={6}>
              Cookies
            </SectionTitle>
            <p className="font-light text-white/70 text-sm leading-relaxed">
              We use cookies to:
            </p>
            <ul className="list-inside list-disc space-y-2 font-light text-white/70 text-sm leading-relaxed marker:text-[#c9a84c]/80">
              <li>Improve user experience</li>
              <li>Track website performance</li>
              <li>Support marketing and advertising efforts</li>
            </ul>
            <p className="font-light text-white/60 text-sm leading-relaxed">
              You may disable cookies through your browser settings. Some
              features of the website may not function properly if cookies are
              disabled.
            </p>
          </article>

          <article className="space-y-5" aria-labelledby="third-party-disclosure">
            <SectionTitle id="third-party-disclosure" number={7}>
              Third-Party Disclosure
            </SectionTitle>
            <p className="font-light text-white/70 text-sm leading-relaxed">
              We do not sell, trade, or transfer your Personally Identifiable
              Information to outside parties.
            </p>
          </article>

          <article className="space-y-5" aria-labelledby="third-party-links">
            <SectionTitle id="third-party-links" number={8}>
              Third-Party Links
            </SectionTitle>
            <p className="font-light text-white/70 text-sm leading-relaxed">
              We do not include or offer third-party services directly on our
              website.
            </p>
          </article>

          <article className="space-y-5" aria-labelledby="google">
            <SectionTitle id="google" number={9}>
              Google Advertising &amp; Analytics
            </SectionTitle>
            <p className="font-light text-white/70 text-sm leading-relaxed">
              Google, as a third-party vendor, may use cookies to serve ads based
              on prior visits to our website.
            </p>
            <p className="font-light text-white/70 text-sm leading-relaxed">
              We may implement:
            </p>
            <ul className="list-inside list-disc space-y-2 font-light text-white/70 text-sm leading-relaxed marker:text-[#c9a84c]/80">
              <li>Google Analytics</li>
              <li>Google Display Network Impression Reporting</li>
              <li>Remarketing</li>
            </ul>
            <p className="font-light text-white/60 text-sm leading-relaxed">
              Users can manage ad preferences through Google Ad Settings or opt
              out using the Google Analytics Opt-Out Browser Add-on.
            </p>
          </article>

          <article className="space-y-5" aria-labelledby="uae-compliance">
            <SectionTitle id="uae-compliance" number={10}>
              UAE Privacy Compliance
            </SectionTitle>
            <p className="font-light text-white/70 text-sm leading-relaxed">
              In accordance with UAE regulations:
            </p>
            <ul className="list-inside list-disc space-y-2 font-light text-white/70 text-sm leading-relaxed marker:text-[#c9a84c]/80">
              <li>Users may visit our website anonymously.</li>
              <li>
                Our Privacy Policy link is clearly available on our website.
              </li>
              <li>
                Users will be notified of Privacy Policy changes on this page.
              </li>
              <li>
                Users may request modification of personal information by
                contacting us via email.
              </li>
            </ul>
          </article>

          <article className="space-y-5" aria-labelledby="dnt">
            <SectionTitle id="dnt" number={11}>
              Do Not Track Signals
            </SectionTitle>
            <p className="font-light text-white/70 text-sm leading-relaxed">
              We honor Do Not Track (DNT) signals and do not plant cookies or use
              advertising when a DNT browser mechanism is enabled.
            </p>
          </article>

          <article className="space-y-5" aria-labelledby="children">
            <SectionTitle id="children" number={12}>
              Children&apos;s Privacy (COPPA)
            </SectionTitle>
            <p className="font-light text-white/70 text-sm leading-relaxed">
              We do not specifically market to children under the age of 13
              years.
            </p>
          </article>

          <article className="space-y-5" aria-labelledby="fair-practices">
            <SectionTitle id="fair-practices" number={13}>
              Fair Information Practices
            </SectionTitle>
            <p className="font-light text-white/70 text-sm leading-relaxed">
              In the event of a data breach:
            </p>
            <ul className="list-inside list-disc space-y-2 font-light text-white/70 text-sm leading-relaxed marker:text-[#c9a84c]/80">
              <li>
                We will notify affected users via email within 1 business day.
              </li>
              <li>
                Individuals have the right to pursue enforceable rights against
                non-compliance in accordance with applicable laws.
              </li>
            </ul>
          </article>

          <article className="space-y-5" aria-labelledby="can-spam">
            <SectionTitle id="can-spam" number={14}>
              CAN-SPAM Act
            </SectionTitle>
            <p className="font-light text-white/70 text-sm leading-relaxed">
              We collect your email address to send property updates and
              service-related communication. To comply with CAN-SPAM:
            </p>
            <ul className="list-inside list-disc space-y-2 font-light text-white/70 text-sm leading-relaxed marker:text-[#c9a84c]/80">
              <li>We will not use misleading subject lines.</li>
              <li>We will include our contact information in emails.</li>
              <li>
                Users may unsubscribe at any time by emailing us at:{" "}
                <a
                  href="mailto:marketing@arksvision.ae"
                  className="text-[#c9a84c] transition-colors hover:text-[#fcf6ba]"
                >
                  marketing@arksvision.ae
                </a>
              </li>
            </ul>
          </article>

          <article
            className="space-y-5 rounded-lg border border-[#c9a84c]/20 bg-[#c9a84c]/[0.06] p-8 md:p-10"
            aria-labelledby="contact"
          >
            <SectionTitle id="contact" number={15}>
              Contacting Us
            </SectionTitle>
            <p className="font-light text-white/70 text-sm leading-relaxed">
              If you have any questions regarding this Privacy Policy, you may
              contact:
            </p>
            <address className="not-italic font-light text-white/75 text-sm leading-relaxed">
              <p className="font-medium text-white/90">
                ARK VISION INTERNATIONAL REAL ESTATE L.L.C
              </p>
              <p className="mt-3">Office No. 1101, Dubai, United Arab Emirates</p>
              <p className="mt-2">
                Phone:{" "}
                <a
                  href="tel:+971569917401"
                  className="text-[#c9a84c] transition-colors hover:text-[#fcf6ba]"
                >
                  +971569917401
                </a>
              </p>
              <p className="mt-2">
                Email:{" "}
                <a
                  href="mailto:marketing@arksvision.ae"
                  className="text-[#c9a84c] transition-colors hover:text-[#fcf6ba]"
                >
                  marketing@arksvision.ae
                </a>
              </p>
            </address>
          </article>

          <p className="border-t border-white/10 pt-10 text-center font-light text-white/35 text-xs uppercase tracking-[3px]">
            © {new Date().getFullYear()} ARK VISION INTERNATIONAL REAL ESTATE
            L.L.C — All Rights Reserved.
          </p>

          <p className="text-center text-sm">
            <Link
              href="/"
              className="link-underline font-light text-[#c9a84c]/80 transition-colors hover:text-[#c9a84c]"
            >
              ← Back to home
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
