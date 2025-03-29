
import Layout from "@/components/layout/Layout";
import { FileText } from "lucide-react";

const Terms = () => {
  return (
    <Layout>
      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="flex items-center space-x-3">
          <FileText className="h-8 w-8 text-emergency" />
          <h1 className="text-3xl font-bold tracking-tight">Terms of Service</h1>
        </div>
        
        <p className="text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-4 text-gray-700">
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Emergency Call Tracker service, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our service.
            </p>
          </section>
          
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">2. Description of Service</h2>
            <p>
              Emergency Call Tracker provides a platform for tracking and recording emergency calls. The service includes access to emergency contact information, call recording, and call history management.
            </p>
          </section>
          
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">3. User Responsibilities</h2>
            <p>
              You are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Providing accurate and complete information when using our service</li>
              <li>Maintaining the confidentiality of your account information</li>
              <li>Using the service in compliance with all applicable laws and regulations</li>
              <li>Not misusing the service for non-emergency purposes</li>
            </ul>
          </section>
          
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">4. Limitation of Liability</h2>
            <p>
              Emergency Call Tracker is provided "as is" without warranties of any kind. In no event shall we be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of our service.
            </p>
            <p>
              Our service is not a substitute for emergency services. In case of a life-threatening emergency, please contact your local emergency number directly.
            </p>
          </section>
          
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">5. Call Recording</h2>
            <p>
              When using our call recording feature, you are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Obtaining consent from all parties before recording calls, where required by law</li>
              <li>Complying with all applicable laws regarding call recording</li>
              <li>Using recorded calls only for the purposes allowed by law</li>
            </ul>
          </section>
          
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">6. Modifications to Service</h2>
            <p>
              We reserve the right to modify or discontinue the service at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
            </p>
          </section>
          
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">7. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Gujarat, India, without regard to its conflict of law provisions.
            </p>
          </section>
          
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">8. Changes to Terms</h2>
            <p>
              We reserve the right to update or change these Terms at any time. We will provide notice of significant changes by posting the new Terms on this page and updating the "Last updated" date.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
