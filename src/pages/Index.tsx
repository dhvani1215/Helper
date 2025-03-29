
import Layout from "@/components/layout/Layout";
import ContactsList from "@/components/emergency/ContactsList";
import { PhoneCall } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Emergency Contacts</h1>
          <p className="text-gray-500">
            Access important emergency numbers and track your emergency calls.
          </p>
        </div>

        <div className="p-4 bg-emergency/10 border border-emergency/20 rounded-lg">
          <div className="flex items-start">
            <div className="mr-4">
              <div className="p-2 bg-emergency/20 text-emergency rounded-full">
                <PhoneCall className="h-5 w-5" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-emergency">Emergency Call Instructions</h3>
              <p className="text-sm text-gray-600">
                When calling emergency services, stay calm and provide your location, 
                the nature of the emergency, and answer all questions clearly. 
                Don't hang up until instructed to do so.
              </p>
            </div>
          </div>
        </div>

        <ContactsList />
      </div>
    </Layout>
  );
};

export default Index;
