
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Phone, Clock, MapPin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useCallStore } from "@/store/callStore";
import { v4 as uuidv4 } from "uuid";

const NumberTracker = () => {
  const { toast } = useToast();
  const { addCallRecord } = useCallStore();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [isTracking, setIsTracking] = useState(false);
  const [trackingStartTime, setTrackingStartTime] = useState<Date | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [location, setLocation] = useState<{lat: number, lng: number} | null>(null);
  const [locationAddress, setLocationAddress] = useState<string | null>(null);
  const [notes, setNotes] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [timerInterval, setTimerInterval] = useState<number | null>(null);

  // Get current location when component mounts
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          // Try to get a readable address using reverse geocoding
          fetchAddress(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
          toast({
            title: "Location Error",
            description: "Unable to get your current location. Some features may be limited.",
            variant: "destructive",
          });
        }
      );
    }

    return () => {
      // Clear timer interval on component unmount
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    };
  }, []);

  const fetchAddress = async (lat: number, lng: number) => {
    try {
      // For this demo, we're just showing coordinates in a readable format
      // In a real app, you could use a geocoding service API here
      setLocationAddress(`${lat.toFixed(6)}, ${lng.toFixed(6)}`);
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  const startTracking = () => {
    if (!phoneNumber) {
      toast({
        title: "Error",
        description: "Please enter a phone number to track",
        variant: "destructive",
      });
      return;
    }

    const startTime = new Date();
    setTrackingStartTime(startTime);
    setIsTracking(true);
    setIsRecording(true);

    // Update location again when tracking starts
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          fetchAddress(position.coords.latitude, position.coords.longitude);
        }
      );
    }

    // Start timer
    const timer = window.setInterval(() => {
      const now = new Date();
      const elapsed = Math.floor((now.getTime() - startTime.getTime()) / 1000);
      setElapsedTime(elapsed);
    }, 1000);

    // Store timer ID in state
    setTimerInterval(timer);

    toast({
      title: "Tracking Started",
      description: `Now tracking call to ${phoneNumber}`,
    });
  };

  const stopTracking = () => {
    if (!trackingStartTime) return;

    // Clear timer interval
    if (timerInterval) {
      clearInterval(timerInterval);
      setTimerInterval(null);
    }

    const endTime = new Date();
    const duration = Math.floor((endTime.getTime() - trackingStartTime.getTime()) / 1000);

    // Add to call history
    addCallRecord({
      id: uuidv4(),
      contactId: "custom",
      contactName: name || "Unknown",
      number: phoneNumber,
      timestamp: trackingStartTime,
      duration: duration,
      notes: notes,
      isRecorded: isRecording,
    });

    toast({
      title: "Call Ended",
      description: `Call tracked and saved to history. Duration: ${formatTime(duration)}`,
    });

    // Reset state
    setIsTracking(false);
    setTrackingStartTime(null);
    setElapsedTime(0);
    setIsRecording(false);
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return [
      hours > 0 ? String(hours).padStart(2, '0') : null,
      String(minutes).padStart(2, '0'),
      String(secs).padStart(2, '0')
    ].filter(Boolean).join(':');
  };

  const handleCall = () => {
    if (!phoneNumber) {
      toast({
        title: "Error",
        description: "Please enter a phone number to call",
        variant: "destructive",
      });
      return;
    }

    // Start tracking
    startTracking();
    
    // Initiate actual call
    window.location.href = `tel:${phoneNumber}`;
    
    toast({
      title: "Calling...",
      description: `Dialing ${phoneNumber}`,
    });
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Number Tracker</h1>
          <p className="text-gray-500">
            Track and record calls to any phone number.
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Enter Number to Track</CardTitle>
            <CardDescription>
              Enter a phone number and start tracking your call.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Contact Name (Optional)</Label>
                <Input 
                  id="name"
                  placeholder="Enter contact name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isTracking}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <div className="flex space-x-2">
                  <Input 
                    id="phoneNumber"
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    disabled={isTracking}
                  />
                  <Button onClick={handleCall} disabled={isTracking || !phoneNumber}>
                    <Phone className="mr-2 h-4 w-4" />
                    Call
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Current Location Card */}
        {location && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-emergency" />
                Your Current Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div>
                    <h3 className="font-medium">GPS Coordinates</h3>
                    <p className="text-gray-600">
                      Latitude: {location.lat.toFixed(6)}, Longitude: {location.lng.toFixed(6)}
                    </p>
                  </div>
                </div>
                {locationAddress && (
                  <div className="flex items-center space-x-2">
                    <div>
                      <h3 className="font-medium">Approximate Location</h3>
                      <p className="text-gray-600">{locationAddress}</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}
        
        {isTracking && (
          <Card className="border-emergency">
            <CardHeader className="bg-emergency/10">
              <CardTitle className="flex items-center">
                <Phone className="mr-2 h-5 w-5 animate-pulse text-emergency" />
                Call in Progress
              </CardTitle>
              <CardDescription>
                Currently tracking call to {phoneNumber}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-gray-500" />
                    <div>
                      <h3 className="font-medium">Duration</h3>
                      <p className="text-2xl font-bold tracking-tight">
                        {formatTime(elapsedTime)}
                      </p>
                    </div>
                  </div>
                  
                  {location && (
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-gray-500" />
                      <div>
                        <h3 className="font-medium">Location</h3>
                        <p className="text-gray-600">
                          Lat: {location.lat.toFixed(6)}, Lng: {location.lng.toFixed(6)}
                        </p>
                        {locationAddress && (
                          <p className="text-gray-600 text-sm mt-1">
                            {locationAddress}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-gray-500" />
                    <div className="flex-1">
                      <h3 className="font-medium">Call Notes</h3>
                      <Textarea 
                        placeholder="Add notes about this call"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="mt-1 resize-none"
                        rows={3}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-medium">Recording Status</h3>
                    <div className="flex items-center space-x-2">
                      <div className={`h-3 w-3 rounded-full ${isRecording ? 'bg-red-600 animate-pulse' : 'bg-gray-300'}`}></div>
                      <span>{isRecording ? 'Recording' : 'Not Recording'}</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="destructive" 
                    size="lg" 
                    onClick={stopTracking}
                    className="mt-auto"
                  >
                    End Call
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-gray-50">
              <p className="text-sm text-gray-500">
                Call information will be saved to your call history.
              </p>
            </CardFooter>
          </Card>
        )}
      </div>
    </Layout>
  );
};

export default NumberTracker;
