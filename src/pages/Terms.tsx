import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="prose max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
              TERMS OF SERVICE
            </h1>
            
            <p className="text-gray-600 text-center mb-8">
              Last updated May 23, 2025
            </p>

            {/* Table of Contents */}
            <nav className="mb-8 p-4 bg-gray-50 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
              <ul className="space-y-2">
                <li><a href="#agreement" className="text-blue-600 hover:text-blue-800">Agreement to Terms</a></li>
                <li><a href="#ip-rights" className="text-blue-600 hover:text-blue-800">Intellectual Property Rights</a></li>
                <li><a href="#user-accounts" className="text-blue-600 hover:text-blue-800">User Accounts</a></li>
                <li><a href="#prohibited" className="text-blue-600 hover:text-blue-800">Prohibited Activities</a></li>
                <li><a href="#services" className="text-blue-600 hover:text-blue-800">Services</a></li>
                <li><a href="#purchases" className="text-blue-600 hover:text-blue-800">Purchases and Payment</a></li>
                <li><a href="#termination" className="text-blue-600 hover:text-blue-800">Term and Termination</a></li>
                <li><a href="#liability" className="text-blue-600 hover:text-blue-800">Limitation of Liability</a></li>
                <li><a href="#contact" className="text-blue-600 hover:text-blue-800">Contact Us</a></li>
              </ul>
            </nav>

            <div className="space-y-8">
              <section>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  These Terms of Service ("Terms") govern your access to and use of Wisperai Inc's ("we," "us," or "our") services, including our website, mobile applications, and any other software or services offered by us from time to time (the "Services").
                </p>
                <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
                  <p className="text-gray-800 leading-relaxed">
                    <span className="font-semibold">Please read carefully: </span>
                    By using our Services, you agree to be bound by these Terms. If you don't agree to these Terms, do not use the Services. If you have any questions, please contact us at{' '}
                    <a href="mailto:support@wisperai.com" className="text-blue-600 hover:text-blue-800 underline">
                      support@wisperai.com
                    </a>.
                  </p>
                </div>
              </section>

              <section id="agreement">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  1. AGREEMENT TO TERMS
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    By accessing or using our Services, you agree that you are at least 18 years of age and have the legal capacity to enter into these Terms. If you are using the Services on behalf of a company or organization, you represent that you have the authority to bind that entity to these Terms.
                  </p>
                </div>
              </section>

              <section id="ip-rights">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  2. INTELLECTUAL PROPERTY RIGHTS
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    The Services and their original content, features, and functionality are owned by Wisperai Inc and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                  </p>
                  <p className="text-gray-700">
                    You may not modify, reproduce, distribute, create derivative works or adaptations of, publicly display or in any way exploit any of our Services in whole or in part except as expressly authorized by us.
                  </p>
                </div>
              </section>

              <section id="user-accounts">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  3. USER ACCOUNTS
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    When you create an account with us, you guarantee that:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700">
                    <li>All registration information you submit is truthful and accurate</li>
                    <li>You will maintain the accuracy of such information</li>
                    <li>You are legally capable of entering into binding contracts</li>
                    <li>Your use of the Services does not violate any applicable law or regulation</li>
                  </ul>
                </div>
              </section>

              <section id="prohibited">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  4. PROHIBITED ACTIVITIES
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    You may not access or use the Services for any purpose other than that for which we make them available. You agree not to:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700">
                    <li>Use the Services in any way that could disable, overburden, or impair the Services</li>
                    <li>Attempt to bypass any security features of the Services</li>
                    <li>Use any automated means to access the Services</li>
                    <li>Introduce any viruses, trojan horses, or other harmful materials</li>
                    <li>Use the Services for any illegal or unauthorized purpose</li>
                  </ul>
                </div>
              </section>

              <section id="services">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  5. SERVICES
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    We reserve the right to withdraw or amend our Services, and any service or material we provide via the Services, in our sole discretion without notice. We will not be liable if for any reason all or any part of the Services are unavailable at any time or for any period.
                  </p>
                </div>
              </section>

              <section id="purchases">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  6. PURCHASES AND PAYMENT
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    All purchases through our Services are subject to our payment terms. You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services.
                  </p>
                  <p className="text-gray-700">
                    You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.
                  </p>
                </div>
              </section>

              <section id="termination">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  7. TERM AND TERMINATION
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    We may terminate or suspend your account and bar access to the Services immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                  </p>
                  <p className="text-gray-700">
                    If you wish to terminate your account, you may simply discontinue using the Services or contact us to request account deletion.
                  </p>
                </div>
              </section>

              <section id="liability">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  8. LIMITATION OF LIABILITY
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    In no event shall Wisperai Inc, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700">
                    <li>Your access to or use of or inability to access or use the Services</li>
                    <li>Any conduct or content of any third party on the Services</li>
                    <li>Any content obtained from the Services</li>
                    <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                  </ul>
                </div>
              </section>

              <section id="contact">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  9. CONTACT US
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700 mb-6">
                    If you have any questions about these Terms, please contact us:
                  </p>
                  <div className="pl-4 text-gray-700 space-y-2">
                    <p>Email: <a href="mailto:support@wisperai.com" className="text-blue-600 hover:text-blue-800 underline">support@wisperai.com</a></p>
                    <p>Phone: 1-408-219-2738</p>
                    <div className="mt-4 space-y-1">
                      <p className="font-semibold">Mail:</p>
                      <p>Wisperai Inc</p>
                      <p>Legal Department</p>
                      <p>2991 Magnum Dr</p>
                      <p>San Jose, CA 95135</p>
                      <p>United States</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
