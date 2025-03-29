
import { CallRecord } from "@/types";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PhoneCall } from "lucide-react";

interface CallHistoryItemProps {
  call: CallRecord;
}

const CallHistoryItem = ({ call }: CallHistoryItemProps) => {
  const formatDuration = (seconds?: number) => {
    if (!seconds) return "N/A";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">{call.contactName}</CardTitle>
          <Badge variant={call.isRecorded ? "destructive" : "outline"}>
            {call.isRecorded ? "Recorded" : "Not Recorded"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          <div className="flex items-center text-sm text-gray-500">
            <PhoneCall className="mr-2 h-4 w-4" />
            <span>{call.number}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>{format(new Date(call.timestamp), "PPP 'at' p")}</span>
            <span>Duration: {formatDuration(call.duration)}</span>
          </div>
          {call.notes && (
            <div className="mt-2 p-2 bg-gray-50 rounded-md">
              <p className="text-sm text-gray-600">{call.notes}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CallHistoryItem;
