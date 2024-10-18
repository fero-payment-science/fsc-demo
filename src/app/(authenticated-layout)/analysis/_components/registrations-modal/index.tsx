import { IoMdEye } from 'react-icons/io';

import { Dialog, DialogContent, DialogTrigger } from '@/components/util-comps/dialog';

import { RegistrationStatus } from '../../_modules/account-data';
import { accounts } from '../../helpers';

export default function ResgistrationsModal() {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center border border-slate-500/70 text-slate-500/70 text-xs rounded-sm cursor-pointer gap-x-1 px-1 py-1 hover:border-slate-500/80 hover:text-slate-600/80 group">
          <IoMdEye
            size={15}
            className="text-slate-500/70 group-hover:text-slate-600/80"
          />
          view more
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[1000px] w-[70vw] h-auto max-h-[90vh]">
        <h3 className="mb-0 font-semibold">Account Registrations:</h3>
        <div className="flex flex-wrap justify-evenly gap-x-1 gap-y-1">
          {accounts.map((item: Account) => (
            <div
              key={item}
              className="flex items-center justify-between w-[130px] border border-slate-400/70 rounded-sm p-2 py-1"
            >
              <div className="flex items-center w-[70px] gap-x-3">
                <p className="text-[16px] text-slate-800 font-light capitalize">
                  {item}
                </p>
              </div>
              <RegistrationStatus account={item} />
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
