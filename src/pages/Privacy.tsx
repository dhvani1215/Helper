
import Layout from "@/components/layout/Layout";
import { Shield } from "lucide-react";

const Privacy = () => {
  return (
    <Layout>
      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="flex items-center space-x-3">
          <Shield className="h-8 w-8 text-emergency" />
          <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
        </div>
        
        <p className="text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-4 text-gray-700">
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">1. Information We Collect</h2>
            <p>
              Emergency Call Tracker collects information that you provide directly to us when using our service, including:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Contact information (name, phone number)</li>
              <li>Call records and history</li>
              <li>Call recordings (when enabled)</li>
              <li>Notes and details provided during or after emergency calls</li>
            </ul>
          </section>
          
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide, maintain, and improve our services</li>
              <li>Process and record emergency calls</li>
              <li>Create a history of your emergency communications</li>
              <li>Assist in emergency situations</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>
          
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">3. Data Storage and Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. 
              Your call records and recordings are stored securely and are only accessible to you.
              However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>
          
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">4. Data Retention</h2>
            <p>
              We retain your information for as long as your account is active or as needed to provide you services.
              You can request deletion of your data at any time by contacting us.
            </p>
          </section>
          
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">5. Your Rights</h2>
            <p>
              Depending on your location, you may have rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Accessing your personal information</li>
              <li>Correcting inaccurate information</li>
              <li>Deleting your information</li>
              <li>Restricting or objecting to processing</li>
            </ul>
          </section>
          
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">6. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>
          
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              Email: privacy@emergencycalltracker.com<br />
              Phone: 0261-2422244
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
