"use client";

import { useEffect, useState } from "react";
import { MdMyLocation } from "react-icons/md";

const DateTime = () => {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());

    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!now) return null;
  return (
    <div className="w-full px-4 flex items-center justify-between gap-1 font-light text-sm">
    <div className="w-[170px] flex items-center text-sm text-gray-600 dark:text-gray-400 font-medium">
      {/* <MdTimer className="mr-2" />{now.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })}{" "}
      ·{" "}
      {now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })} */}
    </div>
    <p><MdMyLocation className="inline-block mr-2" />Stockholm, Sweden</p>
    </div>
  );
};

export default DateTime;
