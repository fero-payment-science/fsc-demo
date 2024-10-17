/* eslint-disable @typescript-eslint/naming-convention */
'use client';
import Image from 'next/image';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { FaRegAddressCard } from 'react-icons/fa6';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { TiDelete } from 'react-icons/ti';

import { useUpstreamData } from '@/contexts/upstream-data-context';

import BreachModal from '../_components/account-modal/breach-modal';
import EmailDataModal from '../_components/account-modal/email-modal';
import DashModule from '../_components/dash-module';
import ResgistrationsModal from '../_components/registrations-modal';
import { firstLevelAccounts } from '../helpers';
import { getStatusIcon } from './helpers';

export function RegistrationStatus({ account }: { account: Account }) {
  const { upstreamData } = useUpstreamData();
  const { email_details } = upstreamData;
  const status: boolean | null =
    email_details.account_details[account as Account]?.registered;

  if (status === true) {
    return (
      <div className="flex items-center justify-center w-[30px]">
        <IoIosCheckmarkCircle
          size={24}
          color="var(--fero-primary)"
          className="relative"
        />
      </div>
    );
  } else if (status === false) {
    return (
      <div className="flex items-center justify-center w-[30px]">
        <TiDelete size={28} color="var(--danger)" className="relative" />
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center w-[30px]">
        <BsQuestionCircleFill size={19} color="#9a9fa5" />
      </div>
    );
  }
}

export default function AccountData() {
  const {
    upstreamData: { email_details, 'primary.email.valid': emailValid },
  } = useUpstreamData();
  return (
    <DashModule
      title="User Account Data"
      Icon={FaRegAddressCard}
      className={'sidebar'}
    >
      <div className="flex flex-col items-center border border-slate-200/80 p-3 gap-y-2 rounded-md relative">
        <h3 className="mb-0 font-semibold">Email Address:</h3>
        <p>{email_details?.email}</p>
        <div className="flex gap-x-2">
          <div className="flex items-center gap-x-1">
            Valid: {getStatusIcon(emailValid, 20)}
          </div>
          <div className="flex items-center gap-x-1">
            Deliverable: {getStatusIcon(email_details.deliverable, 20)}
          </div>
        </div>
        <div className="flex items-center absolute top-1 right-1 ">
          <BreachModal />
          <EmailDataModal />
        </div>
      </div>
      <div className="flex flex-col items-center p-3 gap-y-1 rounded-md grow">
        <h3 className="mb-0 font-semibold">Account Registrations:</h3>
        <div className="my-3 flex gap-x-5  border border-slate-200/80 rounded-md p-2">
          <div className="flex flex-col items-center justify-between">
            <IoIosCheckmarkCircle
              size={19}
              color="var(--fero-primary)"
              className="relative"
            />
            <p className="text-primary text-[12px] h-[20px]">registered</p>
          </div>
          <div className="flex flex-col items-center justify-between relative ">
            <TiDelete
              size={21}
              color="var(--danger)"
              className="relative top-[-2px]"
            />
            <p className="text-danger text-[12px] h-[20px]">unregistered</p>
          </div>
          <div className="flex flex-col items-center justify-between">
            <BsQuestionCircleFill size={15} color="#9a9fa5" />
            <p className="text-[#9a9fa5] text-[12px] h-[20px]">unknown</p>
          </div>
        </div>
        {firstLevelAccounts.map((account: Account) => (
          <div
            key={account}
            className="flex items-center justify-between w-[150px] my-[10px]"
          >
            <div className="flex items-center w-[70px] gap-x-3">
              <Image
                src={`/account-logos/${account}.svg`}
                height={30}
                width={30}
                alt={`${account}_logo`}
              />
              <p className="text-[16px] capitalize">{account}</p>
            </div>
            <RegistrationStatus account={account} />
          </div>
        ))}
        <ResgistrationsModal />
      </div>
    </DashModule>
  );
}
