
import { useState } from "react";
import { EmergencyContact } from "@/types";
import { Phone, PhoneCall, CheckCircle, AlertCircle, MicOff, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useCallStore } from "@/store/callStore";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface ContactCardProps {
  contact: EmergencyContact;
}

const ContactCard = ({ contact }: ContactCardProps) => {
  const { toast } = useToast();
  const { addCallRecord } = useCallStore();
  const [isCallActive, setIsCallActive] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [callStartTime, setCallStartTime] = useState<Date | null>(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const handleCall = () => {
    // Show confirmation dialog
    setShowConfirmDialog(true);
  };

  const confirmCall = () => {
    // Close dialog
    setShowConfirmDialog(false);
    
    // Initiate actual call
    window.location.href = `tel:${contact.number}`;
    
    // For the demo, we'll still simulate a call state
    setIsCallActive(true);
    setCallStartTime(new Date());
    toast({
      title: "Call Initiated",
      description: `Calling ${contact.name} at ${contact.number}...`,
    });
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    toast({
      title: isRecording ? "Recording Stopped" : "Call Recording Started",
      description: isRecording 
        ? "The call recording has been saved." 
        : "This call is now being recorded.",
      variant: isRecording ? "default" : "destructive",
    });
  };

  const endCall = () => {
    if (callStartTime) {
      const endTime = new Date();
      const durationInSeconds = Math.floor((endTime.getTime() - callStartTime.getTime()) / 1000);
      
      // Add call to history
      addCallRecord({
        id: Date.now().toString(),
        contactId: contact.id,
        contactName: contact.name,
        number: contact.number,
        timestamp: callStartTime,
        duration: durationInSeconds,
        isRecorded: isRecording,
      });
      
      toast({
        title: "Call Ended",
        description: `Call duration: ${Math.floor(durationInSeconds / 60)}m ${durationInSeconds % 60}s`,
      });
    }
    
    setIsCallActive(false);
    setIsRecording(false);
    setCallStartTime(null);
  };

  const getCategoryColor = () => {
    switch (contact.category) {
      case 'medical':
        return 'bg-blue-100 text-blue-800';
      case 'police':
        return 'bg-indigo-100 text-indigo-800';
      case 'fire':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityBorder = () => {
    switch (contact.priority) {
      case 'high':
        return 'border-l-4 border-emergency';
      case 'medium':
        return 'border-l-4 border-yellow-500';
      case 'low':
        return 'border-l-4 border-green-500';
      default:
        return '';
    }
  };

  return (
    <>
      <Card className={`overflow-hidden ${getPriorityBorder()} transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1`}>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle>{contact.name}</CardTitle>
            <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${getCategoryColor()}`}>
              {contact.category.charAt(0).toUpperCase() + contact.category.slice(1)}
            </span>
          </div>
          <CardDescription className="text-base font-medium">
            {contact.number}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">{contact.description}</p>
        </CardContent>
        <CardFooter className="flex justify-between pt-2">
          {!isCallActive ? (
            <Button 
              className="w-full bg-emergency hover:bg-emergency-dark transition-all duration-300 group"
              onClick={handleCall}
            >
              <Phone className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
              <span className="relative">
                Call Now
                {contact.priority === 'high' && (
                  <span className="absolute -top-1 -right-6 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emergency opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emergency"></span>
                  </span>
                )}
              </span>
            </Button>
          ) : (
            <div className="w-full flex gap-2">
              <Button 
                variant="outline" 
                className={`flex-1 transition-colors duration-200 ${isRecording ? 'bg-red-100 border-red-300' : ''}`}
                onClick={toggleRecording}
              >
                {isRecording ? (
                  <>
                    <MicOff className="mr-2 h-4 w-4 text-emergency" />
                    Stop Recording
                  </>
                ) : (
                  <>
                    <Mic className="mr-2 h-4 w-4" />
                    Record Call
                  </>
                )}
              </Button>
              <Button 
                variant="destructive" 
                className="flex-1 transition-all duration-200 hover:bg-red-700"
                onClick={endCall}
              >
                <PhoneCall className="mr-2 h-4 w-4" />
                End Call
              </Button>
            </div>
          )}
        </CardFooter>
      </Card>

      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent className="animate-in fade-in-90 slide-in-from-bottom-10">
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Emergency Call</AlertDialogTitle>
            <AlertDialogDescription>
              You are about to call <strong>{contact.name}</strong> at <strong>{contact.number}</strong>. 
              This will initiate a real phone call. Do you want to proceed?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmCall} className="bg-emergency hover:bg-emergency-dark">
              Yes, Call Now
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default ContactCard;
