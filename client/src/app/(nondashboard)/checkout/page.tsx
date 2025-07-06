"use client";
import Loading from "@/components/Loading";
import WizardStepper from "@/components/WizardStepper";
import { useUser } from "@clerk/nextjs";
import React from "react";

const CheckoutWizard = () => {
  const { isLoaded } = useUser();

  if (!isLoaded) return <Loading />;
  const checkoutStep = 3;

  const renderStep = () => {
    switch (checkoutStep) {
      case 1:
        return "checkout details page";
      case 2:
        return "payment page";
      case 3:
        return "completion page";
      default:
        return "checkout details page";
    }
  };

  return (
    <div>
      <WizardStepper currentStep={checkoutStep} />
      <div className="checkout__content">{renderStep()}</div>
    </div>
  );
};

export default CheckoutWizard;
