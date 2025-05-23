import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="prose max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
              PRIVACY POLICY
            </h1>
            
            <p className="text-gray-600 text-center mb-8">
              Last updated April 23, 2025
            </p>

            {/* Table of Contents */}
            <nav className="mb-8 p-4 bg-gray-50 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
              <ul className="space-y-2">
                <li><a href="#summary" className="text-blue-600 hover:text-blue-800">Summary of Key Points</a></li>
                <li><a href="#information-collection" className="text-blue-600 hover:text-blue-800">What Information Do We Collect?</a></li>
                <li><a href="#information-usage" className="text-blue-600 hover:text-blue-800">How Do We Use Your Information?</a></li>
                <li><a href="#information-sharing" className="text-blue-600 hover:text-blue-800">When and With Whom Do We Share Your Information?</a></li>
                <li><a href="#cookies" className="text-blue-600 hover:text-blue-800">Do We Use Cookies and Other Tracking Technologies?</a></li>
                <li><a href="#data-retention" className="text-blue-600 hover:text-blue-800">How Long Do We Keep Your Information?</a></li>
                <li><a href="#privacy-rights" className="text-blue-600 hover:text-blue-800">What Are Your Privacy Rights?</a></li>
                <li><a href="#contact" className="text-blue-600 hover:text-blue-800">How Can You Contact Us About This Notice?</a></li>
                <li><a href="#request" className="text-blue-600 hover:text-blue-800">How Can You Review, Update, or Delete Your Data?</a></li>
              </ul>
            </nav>

            <div className="space-y-8">
              <section>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  This Privacy Notice for Wisperai Inc ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li className="leading-relaxed">
                    Download and use our mobile application (Remiai), or any other application of ours that links to this Privacy Notice
                  </li>
                  <li className="leading-relaxed">
                    Engage with us in other related ways, including any sales, marketing, or events
                  </li>
                </ul>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
                  <p className="text-gray-800 leading-relaxed">
                    <span className="font-semibold">Questions or concerns? </span>
                    Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at{' '}
                    <a href="mailto:support@wisperai.com" className="text-blue-600 hover:text-blue-800 underline">
                      support@wisperai.com
                    </a>.
                  </p>
                </div>
              </section>

              <section id="summary">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  SUMMARY OF KEY POINTS
                </h2>
                <p className="text-gray-700 italic leading-relaxed mb-6">
                  This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by using our table of contents above to find the section you are looking for.
                </p>

                <div className="space-y-6">
                  <div>
                    <p className="text-gray-800 leading-relaxed">
                      <span className="font-semibold">What personal information do we process? </span>
                      When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-800 leading-relaxed">
                      <span className="font-semibold">Do we process any sensitive personal information? </span>
                      We do not process sensitive personal information.
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-800 leading-relaxed">
                      <span className="font-semibold">Do we receive any information from third parties? </span>
                      We may collect information from public databases, marketing partners, social media platforms, and other outside sources.
                    </p>
                  </div>
                </div>
              </section>

              <section id="information-collection">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  WHAT INFORMATION DO WE COLLECT?
                </h2>
                <div className="space-y-6">
                  <p className="text-gray-700">
                    We collect personal information that you voluntarily provide to us when you register for the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information You Disclose to Us</h3>
                    <ul className="list-disc pl-6 space-y-3 text-gray-700">
                      <li>Name and contact data</li>
                      <li>Credentials (passwords and similar security information)</li>
                      <li>Payment data</li>
                      <li>Device data and usage information</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="information-usage">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  HOW DO WE USE YOUR INFORMATION?
                </h2>
                <div className="space-y-6">
                  <p className="text-gray-700">
                    We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700">
                    <li>To facilitate account creation and authentication</li>
                    <li>To deliver and facilitate delivery of services to the user</li>
                    <li>To respond to user inquiries and offer support to users</li>
                    <li>To send administrative information to you</li>
                    <li>To send marketing and promotional communications</li>
                    <li>To protect our Services</li>
                  </ul>
                </div>
              </section>

              <section id="information-sharing">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  WHEN AND WITH WHOM DO WE SHARE YOUR INFORMATION?
                </h2>
                <div className="space-y-6">
                  <p className="text-gray-700">
                    We may share your data with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work.
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Third-Party Categories</h3>
                    <ul className="list-disc pl-6 space-y-3 text-gray-700">
                      <li>Cloud computing services</li>
                      <li>Payment processors</li>
                      <li>Analytics services</li>
                      <li>Communication services</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="cookies">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                </h2>
                <p className="text-gray-700">
                  We may use cookies and other tracking technologies to collect and store your information. Cookies are small data files that are placed on your computer or mobile device when you visit a website. We use cookies to:
                </p>
                <ul className="list-disc pl-6 space-y-3 mt-4 text-gray-700">
                  <li>Remember your preferences and settings</li>
                  <li>Understand how you interact with our Services</li>
                  <li>Analyze and improve our Services</li>
                  <li>Deliver relevant advertising</li>
                </ul>
              </section>

              <section id="data-retention">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  HOW LONG DO WE KEEP YOUR INFORMATION?
                </h2>
                <p className="text-gray-700">
                  We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law. When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information.
                </p>
              </section>

              <section id="privacy-rights">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  WHAT ARE YOUR PRIVACY RIGHTS?
                </h2>
                <div className="space-y-6">
                  <p className="text-gray-700">
                    You have certain rights regarding your personal information. These include:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700">
                    <li>The right to access your personal information</li>
                    <li>The right to rectify or update your personal information</li>
                    <li>The right to erase your personal information</li>
                    <li>The right to restrict or object to our processing of your personal information</li>
                    <li>The right to data portability</li>
                  </ul>
                </div>
              </section>

              <section id="contact">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                </h2>
                <p className="text-gray-700 mb-6">
                  If you have questions or comments about this notice, you may contact our Data Protection Officer (DPO):
                </p>
                <div className="pl-4 text-gray-700 space-y-2">
                  <p>Email: <a href="mailto:rama@wisperai.com" className="text-blue-600 hover:text-blue-800 underline">rama@wisperai.com</a></p>
                  <p>Phone: 1-408-219-2738</p>
                  <div className="mt-4 space-y-1">
                    <p className="font-semibold">Mail:</p>
                    <p>Wisperai Inc</p>
                    <p>Data Protection Officer</p>
                    <p>2991 Magnum Dr</p>
                    <p>San Jose, CA 95135</p>
                    <p>United States</p>
                  </div>
                </div>
              </section>

              <section id="request">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  HOW CAN YOU REVIEW, UPDATE, OR DELETE YOUR DATA?
                </h2>
                <p className="text-gray-700">
                  Based on applicable laws, you may have the right to request access to, update, or delete your personal information. To make such a request, please visit our{' '}
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdRXCYyCplMmWITEmxWsJbugRGw9MPS1YW5d-utFAWzYZ5CPQ/viewform?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Data Request Form
                  </a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
