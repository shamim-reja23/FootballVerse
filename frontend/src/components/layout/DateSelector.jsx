import { useState } from "react";

const getDates = () => {
  const dates = [];

  for (let i = -4; i <= 4; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    dates.push(date);
  }

  return dates;
};

const formatDate = (date) => {
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
  });
};

const formatDay = (date) => {
  return date.toLocaleDateString("en-GB", {
    weekday: "short",
  });
};

export default function DateSelector() {
  const dates = getDates();

  // Today's date is selected by default
  const [selectedDate, setSelectedDate] = useState(
    new Date().toDateString()
  );

  return (
    <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5 select-none flex-1 justify-start md:justify-center">

      {dates.map((date) => {
        const isSelected =
          selectedDate === date.toDateString();

        const isToday =
          date.toDateString() === new Date().toDateString();

        let dayLabel = formatDay(date);

        if (isToday) {
          dayLabel = "Today";
        } else if (
          date.toDateString() ===
          new Date(Date.now() + 86400000).toDateString()
        ) {
          dayLabel = "Tomorrow";
        } else if (
          date.toDateString() ===
          new Date(Date.now() - 86400000).toDateString()
        ) {
          dayLabel = "Yesterday";
        }

        return (
          <button
            key={date.toDateString()}
            onClick={() =>
              setSelectedDate(date.toDateString())
            }
            className={`px-3 py-1.5 rounded-lg border flex flex-col items-center min-w-18 shrink-0 transition-colors ${
              isSelected
                ? "px-4 bg-[#00E676] text-primary font-bold shadow-[0_2px_8px_rgba(0,230,118,0.35)] border-[#00c853] ring-2 ring-emerald-400/20 min-w-22.5"
                : "bg-slate-50/80 border-slate-200 text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span
              className={`text-[10px] uppercase font-bold ${
                isSelected
                  ? "text-[#064e3b]"
                  : "text-slate-400"
              }`}
            >
              {dayLabel}
            </span>

            <span
              className={`text-sm font-semibold ${
                isSelected
                  ? "text-primary"
                  : "text-slate-700"
              }`}
            >
              {formatDate(date)}
            </span>
          </button>
        );
      })}
    </div>
  );
}
