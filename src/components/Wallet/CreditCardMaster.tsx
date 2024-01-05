import masterCardLogo from "@/assets/images/mastercardLogo.png";

type Props = {};

export default function CreditCardMaster({}: Props) {
  return (
    <div className="w-full h-[250px] grid grid-rows-4 bg-[#424242] text-white p-5 pb-9 rounded-2xl">
      <div className="row-span-3">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col items-center gap-2">
            <span>John Doe</span>
            <span>**9793</span>
          </div>
          <div className="flex flex-row items-center gap-5">
            <div className="flex flex-col gap-2">
              <span className="text-[#d9d9d9] text-xs">Expiration</span>
              <span className="text-md">06/22</span>
            </div>
            <div>
              <img className="w-14 h-8" src={masterCardLogo} />
            </div>
          </div>
        </div>
      </div>
      <div className="row-span-1 flex flex-col items-start gap-1">
        <div>Balance</div>
        <div className="text-5xl">$41,900.1</div>
      </div>
    </div>
  );
}
