import Logo from "@/components/common/logo";

export default function Footer() {
  return (
    <footer className="w-full border-t absolute bottom-0 pb-4 flex flex-col items-center justify-center p-2 bg-background border-b border-primary">
      <Logo className="w-36" strapLine={false} />
      <div className="mt-4 grid grid-cols-5 uppercase text-sm text-neutral gap-4 text-center">
        <a href="#" className="w-30 hover:underline">
          Privacy policy
        </a>
        <a href="#" className="w-30 hover:underline">
          News center
        </a>
        <a href="#" className="w-30 hover:underline">
          Careers
        </a>
        <a href="#" className="w-30 hover:underline">
          Legal notice
        </a>
        <a href="#" className="w-30 hover:underline">
          Contact us
        </a>
      </div>
      <div className="mt-8 text-neutral text-center text-xs">
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
      </div>
    </footer>
  );
}