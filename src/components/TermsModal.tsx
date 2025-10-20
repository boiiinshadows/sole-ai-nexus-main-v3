import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";

const TermsModal = () => {
  const [open, setOpen] = useState(false);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem("termsAccepted");
    if (!hasAccepted) {
      setOpen(true);
    }
  }, []);

  const handleAccept = () => {
    if (accepted) {
      localStorage.setItem("termsAccepted", "true");
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && accepted && setOpen(isOpen)}>
      <DialogContent className="max-w-2xl glass">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">
            Welcome to Sole AI Agency
          </DialogTitle>
          <DialogDescription>
            Please review and accept our terms to continue
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>
              By using this website and our services, you agree to comply with and be bound by our Terms of Service and Privacy Policy.
            </p>

            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Key Points:</h3>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>We collect and process information as described in our Privacy Policy</li>
                <li>Services are provided by Sole AI Agency, located in Accra, Ghana</li>
                <li>Payment terms and refund policies apply as outlined in our Terms of Service</li>
                <li>We use WhatsApp and other communication platforms in compliance with their policies</li>
                <li>Your data is protected with industry-standard security measures</li>
              </ul>
            </div>

            <div className="pt-4">
              <p className="mb-2">For complete details, please read our:</p>
              <div className="flex gap-4">
                <Link to="/terms" className="text-primary hover:underline" onClick={() => setOpen(false)}>
                  Terms of Service
                </Link>
                <Link to="/privacy" className="text-primary hover:underline" onClick={() => setOpen(false)}>
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </ScrollArea>

        <DialogFooter className="flex-col gap-4">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="terms" 
              checked={accepted}
              onCheckedChange={(checked) => setAccepted(checked === true)}
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              I have read and accept the Terms of Service and Privacy Policy
            </label>
          </div>
          <Button 
            onClick={handleAccept} 
            disabled={!accepted}
            className="w-full neon-glow bg-gradient-to-r from-primary to-secondary hover:opacity-90"
          >
            Continue to Website
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TermsModal;
