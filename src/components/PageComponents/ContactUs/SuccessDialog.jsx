import React from "react";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import PrimaryCTA from "@/components/ui/PrimaryCTA";
import { X } from "lucide-react";
import { handleRedirectOfBookAppontment } from "@/utils/BookAnAppontemtREdirection";

// Default image - TODO: Replace with local image asset
// Import the image once it's saved: import successDialogImage from "../../../assets/images/contactUs/success-dialog-image.webp";
const DEFAULT_IMAGE = "https://www.figma.com/api/mcp/asset/d311c9ac-8bd0-4e00-8add-144aa2e115fc";

function SuccessDialog({
  open,
  onOpenChange,
  title = "Thank you for reaching out!",
  description = "We've received your message and our team will get back to you shortly.",
  buttonText = "Book Appointments",
  onButtonClick = handleRedirectOfBookAppontment,
  image = DEFAULT_IMAGE,
  imageAlt = "Barbershop scene",
  className = "",
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className={`overflow-hidden gap-0 p-0 w-full max-w-[974px] h-[600px] sm:rounded-lg ${className}`}
        hideCloseButton={true}
      >
        {/* Close button - positioned absolutely on the image side */}
        <DialogClose className="absolute top-4 right-4 z-50 rounded-sm opacity-70 transition-opacity ring-offset-background hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
          <X className="w-8 h-8 text-white" />
          <span className="sr-only">Close</span>
        </DialogClose>

        {/* Two-column layout */}
        <div className="flex h-full">
          {/* Left section - Content */}
          <div className="bg-white flex flex-col gap-6 h-full items-start justify-center overflow-hidden px-10 py-20 shrink-0 w-[487px]">
            <div className="flex flex-col gap-4 items-start text-[#181818] w-full">
              <h2 className="capitalize font-['Cairo'] font-bold leading-[55px] text-[48px] text-left">
                {title}
              </h2>
              <p className="font-['Urbanist'] font-medium leading-[26px] text-[16px] w-[341px]">
                {description}
              </p>
            </div>
            <PrimaryCTA onClick={onButtonClick} className="!px-6 !py-4">
              {buttonText}
            </PrimaryCTA>
          </div>

          {/* Right section - Image */}
          <div className="relative flex flex-col h-full items-start overflow-hidden shrink-0 w-[487px]">
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
