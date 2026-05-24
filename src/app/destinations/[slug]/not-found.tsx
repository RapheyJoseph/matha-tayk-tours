import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/shared/SectionContainer";

export default function DestinationNotFound() {
  return (
    <SectionContainer variant="pearl" paddedTop className="min-h-[60vh]">
      <div className="mx-auto max-w-lg text-center">
        <p className="eyebrow">Destination</p>
        <h1 className="heading-section mt-6">This chapter is not yet composed</h1>
        <p className="body-lead mt-6">
          The destination you sought could not be found. Return to our curated
          landscapes and begin again.
        </p>
        <Button asChild className="mt-10">
          <Link href="/#destinations">View all destinations</Link>
        </Button>
      </div>
    </SectionContainer>
  );
}
