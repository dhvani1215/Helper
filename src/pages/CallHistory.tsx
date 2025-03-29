
import Layout from "@/components/layout/Layout";
import CallList from "@/components/calls/CallList";

const CallHistory = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Call History</h1>
          <p className="text-gray-500">
            View and manage your emergency call records.
          </p>
        </div>
        <CallList />
      </div>
    </Layout>
  );
};

export default CallHistory;
