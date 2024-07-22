import Logo from "@/components/common/logo";
import { Typography } from "@/components/ui/typography";

interface FooterProps {}
export default function FooterGuest(props: FooterProps) {
  return (
    <footer className="flex w-full flex-col items-center justify-center border-t border-t-red bg-background p-2 pb-28 md:pb-4">
      <Logo className="w-36" strapLine={false} />
      <Typography
        variant="legal"
        color="inverse"
        className="mt-4 grid grid-cols-6 gap-4 text-center uppercase md:grid-cols-5"
      >
        <a href="#" className="w-30 col-span-3 hover:underline md:col-span-1">
          Privacy policy
        </a>
        <a href="#" className="w-30 col-span-3 hover:underline md:col-span-1">
          News center
        </a>
        <a href="#" className="w-30 col-span-2 hover:underline md:col-span-1">
          Legal notice
        </a>
        <a href="#" className="w-30 col-span-2 hover:underline md:col-span-1">
          Contact us
        </a>{" "}
        <a href="#" className="w-30 col-span-2 hover:underline md:col-span-1">
          Careers
        </a>
      </Typography>
      <Typography variant="legal" color="inverse" className="mt-8 text-center">
        © Janssen Global Services, LLC, 2012-2024. All Rights Reserved. Your
        use of information on this site is subject to the terms of our{" "}
        <a href="" className="underline">
          Legal Notice
        </a>
        . Please see our
        <br />
        Privacy Policy. This site is published by Janssen Global Services, LLC,
        which is solely responsible for its contents. Capitalized product names
        are trademarks of Johnson & Johnson or its affiliated companies. This
        information is intended for a global audience. Information specific to
        individual countries is identified where it appears. All third-party
        trademarks used herein are registered trademarks of their respective
        owners.
        <br />
        <br />
        This section of the global Janssen website provides a company overview
        in several languages. It is not targeted to any specific audience or
        country. Click
        <br />
        here
        <br />
        for country- and region-specific information of interest.
        <br />
        Last Updated: March 11, 2024
      </Typography>
    </footer>
  );
}
