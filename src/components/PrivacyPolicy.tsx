import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-2">PRIVACY POLICY</h1>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-8">Last updated April 23, 2025</p>

        <div className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            This Privacy Notice for Wisperai Inc ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Download and use our mobile application (Remiai), or any other application of ours that links to this Privacy Notice</li>
            <li>Engage with us in other related ways, including any sales, marketing, or events</li>
          </ul>

          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at{' '}
              <a href="mailto:support@wisperai.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                support@wisperai.com
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="pl-4 border-l-2 border-gray-200 dark:border-gray-600">
              <p className="text-gray-700 dark:text-gray-300">
                Wisperai Inc<br />
                Data Protection Officer<br />
                2991 Magnum Dr<br />
                San Jose, CA 95135<br />
                United States<br />
                <br />
                Email: <a href="mailto:rama@wisperai.com" className="text-blue-600 dark:text-blue-400 hover:underline">rama@wisperai.com</a><br />
                Phone: 1-408-219-2738
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Data Access and Control</h2>
            <p className="text-gray-700 dark:text-gray-300">
              To request to review, update, or delete your personal information, please visit our{' '}
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdRXCYyCplMmWITEmxWsJbugRGw9MPS1YW5d-utFAWzYZ5CPQ/viewform?usp=sharing"
                className="text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Data Request Form
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
