import Loading from "@/components/Loading";
import { useCurrentCourse } from "@/hooks/useCurrentCourse";
import { useSearchParams } from "next/navigation";
import React from "react";

const CheckoutDetailsPage = () => {
  const { course: selectedCourse, isLoading, isError } = useCurrentCourse();
  const searchParams = useSearchParams();
  const showSignUp = searchParams.get("showSignUp") === "true";
  debugger;

  if (isLoading) return <Loading />;
  if (isError) return <div>Failed to fetch course</div>;
  if (!selectedCourse) return <div>Course not found</div>;
  return <div>Checkout Details Page loaded</div>;
};

export default CheckoutDetailsPage;
