import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
  showIcon: boolean;
  icon: any;
  bgColor: string;
  themeMode: boolean
};

export default function Container({
  title,
  children,
  showIcon,
  icon,
  bgColor,
  themeMode
}: Props) {
  return (
    <div className={`w-full h-full ${themeMode ? "bg-white" : "bg-black text-white"} p-4 pt-6 rounded-md`}>
      <div className="flex flex-row items-center gap-2">
        {showIcon && (
          <div className={`${bgColor} py-1 px-2 rounded-md`}>{icon}</div>
        )}
        <div className="font-semibold">{title}</div>
      </div>
      <div className="mt-4 space-y-3">{children}</div>
    </div>
  );
}
