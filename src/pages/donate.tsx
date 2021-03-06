import Link from "next/link";
import {
  FaMailBulk,
  FaExclamationCircle,
  FaPaypal,
  FaWalking,
  FaCheckCircle,
  FaStar,
  FaRedo,
} from "react-icons/fa";
import { Layout } from "components/Layout";
import { SEO } from "components/SEO";
import { DonateButton } from "components/DonateButton";
import { donationTypes } from "constants/donationTypes";
import { FoodSharesLink } from "components/FoodSharesLink";
import { SectionTitle } from "components/SectionTitle";

type DonationCardProps = {
  title: string;
  icon: any;
  children: React.ReactNode;
  Footer?: React.ReactNode;
};

export const DonationCard = (props: DonationCardProps) => {
  const { title, icon: Icon, children, Footer } = props;
  return (
    <div className="p-4 surface-alt texture rounded-xl h-72 md:w-80 w-full inline-flex flex-col  items-center justify-between">
      <div className="flex items-center gap-2 font-bold text-3xl my-4 text">
        <Icon />
        {title}
      </div>

      <div className="my-4 text-center text">{children}</div>
      <div className="w-full">{Footer}</div>
    </div>
  );
};

const description =
  "As a 501(c)3 organization, Community Solidarity can only grow and continue our mission with your continued financial support. Please consider making a tax deductible donation today.";

export default function Page() {
  return (
    <Layout>
      <SEO title="Donate to Community Solidarity" description={description} />

      <div>
        <SectionTitle>Monetary Donation</SectionTitle>
        <p className="mb-4">{description}</p>
        <section className="flex flex-col md:flex-row gap-4">
          <DonationCard
            title="PayPal"
            icon={FaPaypal}
            Footer={
              <p className="flex w-full items-center gap-2 my-2 text-base border-l-2 border-yellow-500 surface p-2 text-yellow-500">
                <FaRedo className="text-yellow-500" /> One-time or recurring
              </p>
            }
          >
            <DonateButton />
          </DonationCard>

          <DonationCard
            title="By Mail"
            icon={FaMailBulk}
            Footer={
              <p className="w-full flex items-center gap-2 my-2 text-base border-l-2 border-red-400 surface p-2 text-red-400">
                <FaExclamationCircle /> Please do not mail cash.
              </p>
            }
          >
            <div className="text-center border-4 border-dashed border-color p-2 rounded-xl">
              <p className="font-medium">PO Box 208 </p>
              <p className="font-medium">Huntington, NY 11743</p>
            </div>
          </DonationCard>

          <DonationCard
            title="In Person"
            icon={FaWalking}
            Footer={
              <p className="flex w-full items-center gap-2 my-2 text-base border-l-2  border-emerald-500 surface p-2 text-emerald-500">
                <FaCheckCircle className="text-emerald-500" /> Cash accepted in
                person.
              </p>
            }
          >
            <p className="px-4  border-4 border-dashed border-color p-2 rounded-xl">
              Visit one of our <FoodSharesLink />
            </p>
          </DonationCard>
          <DonationCard title="Superstar" icon={FaStar}>
            <a
              className="cta mt-4 w-full"
              href="https://give.communitysolidarity.org/give/214062/#!/donation/checkout"
              target="_blank"
              rel="noopener noreferrer"
            >
              Become a monthly sustainer!
            </a>
            <a
              href="https://give.communitysolidarity.org/campaign/community-campaign/c269349"
              target="_blank"
              rel="noopener noreferrer"
              className="cta mt-4 w-full"
            >
              Start a Fundraiser!
            </a>
          </DonationCard>
        </section>
      </div>

      <div className="mt-12">
        <SectionTitle>Other Useful Donations</SectionTitle>
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {donationTypes.map((type) => {
            const [label, Icon] = type;
            return (
              <li
                key={label as string}
                className="surface-alt justify-center md:justify-start p-2 rounded-lg texture flex items-center gap-2"
              >
                <Icon />
                <p className="font-medium text-lg">{label as string}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
}
