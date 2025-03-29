
import { useState } from "react";
import { useCallStore } from "@/store/callStore";
import CallHistoryItem from "./CallHistoryItem";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CallList = () => {
  const { calls } = useCallStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [recordingFilter, setRecordingFilter] = useState<"all" | "recorded" | "not-recorded">("all");

  const filteredCalls = calls.filter((call) => {
    const matchesSearch =
      call.contactName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      call.number.includes(searchTerm);

    const matchesRecording =
      recordingFilter === "all" ||
      (recordingFilter === "recorded" && call.isRecorded) ||
      (recordingFilter === "not-recorded" && !call.isRecorded);

    return matchesSearch && matchesRecording;
  });

  const sortedCalls = [...filteredCalls].sort((a, b) => {
    const dateA = new Date(a.timestamp).getTime();
    const dateB = new Date(b.timestamp).getTime();
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <Input
          type="text"
          placeholder="Search by name or number..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <div className="flex gap-2">
          <Select
            value={recordingFilter}
            onValueChange={(value) => setRecordingFilter(value as any)}
          >
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Filter by recording" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Calls</SelectItem>
              <SelectItem value="recorded">Recorded Only</SelectItem>
              <SelectItem value="not-recorded">Not Recorded</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={sortOrder}
            onValueChange={(value) => setSortOrder(value as any)}
          >
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {sortedCalls.length > 0 ? (
        <div className="space-y-4">
          {sortedCalls.map((call) => (
            <CallHistoryItem key={call.id} call={call} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">No call records found</p>
          {calls.length > 0 ? (
            <p className="text-gray-400">Try adjusting your search or filters</p>
          ) : (
            <p className="text-gray-400">Make an emergency call to see your call history</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CallList;
