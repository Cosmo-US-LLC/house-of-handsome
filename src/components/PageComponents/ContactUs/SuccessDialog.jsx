import React from "react";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import PrimaryCTA from "@/components/ui/PrimaryCTA";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Default image - TODO: Replace with local image asset
// Import the image once it's saved: import successDialogImage from "../../../assets/images/contactUs/success-dialog-image.webp";
const DEFAULT_IMAGE = "https://www.figma.com/api/mcp/asset/d311c9ac-8bd0-4e00-8add-144aa2e115fc";

function SuccessDialog({
  open,
  onOpenChange,
  title = "Thank you for reaching out!",
  description = "We've received your message and our team will get back to you shortly.",
  buttonText = "Back to Home",
  onButtonClick,
  image = DEFAULT_IMAGE,
  imageAlt = "Barbershop scene",
  className = "",
}) {
  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      navigate("/");
    }
    onOpenChange(false);
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className={`overflow-hidden gap-0 p-0 border-0 md:w-full w-[90%] mx-auto max-w-[974px] min-h-[400px]
           h-auto md:h-[600px] sm:rounded-lg ${className}`}
        hideCloseButton={true}
      >
        {/* Close button - positioned absolutely */}
        <DialogClose className="absolute top-4 right-4 z-50 rounded-sm opacity-70 transition-opacity ring-offset-background hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
          <X className="w-6 h-6 md:w-8 md:h-8 text-white " />
          <span className="sr-only">Close</span>
        </DialogClose>

        {/* Responsive layout: column on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row h-full min-h-[400px] md:min-h-0">
          {/* Content section */}
          <div className="bg-white flex flex-col gap-4 md:gap-6 h-auto md:h-full items-start justify-center overflow-hidden px-6 py-8 md:px-10 md:py-20 shrink-0 w-full md:w-[487px] order-2 md:order-1">
            <div className="flex flex-col gap-3 md:gap-4 items-start text-[#181818] w-full">
              <h2 className="capitalize font-['Cairo'] font-bold leading-[1.2] md:leading-[55px] text-[32px] md:text-[48px] text-left">
                {title}
              </h2>
              <p className="font-['Urbanist'] font-medium leading-[24px] md:leading-[26px] text-[14px] md:text-[16px] w-full md:w-[341px]">
                {description}
              </p>
            </div>
            <PrimaryCTA onClick={handleButtonClick} className="!px-6 !py-4 w-full md:w-auto">
              {buttonText}
            </PrimaryCTA>
          </div>

          {/* Image section */}
          <div className="relative flex flex-col h-[250px] md:h-full items-start overflow-hidden shrink-0 w-full md:w-[487px] order-1 md:order-2">
            <img
              alt={imageAlt}
              className="object-cover absolute inset-0 max-w-none pointer-events-none size-full"
              src={image}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default SuccessDialog;
