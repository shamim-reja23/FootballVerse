import { Button } from "@/components/ui/button";

const filters = [
  { label: "All Matches", value: "all" },
  { label: "Live", value: "live" },
  { label: "Upcoming", value: "upcoming" },
  { label: "Finished", value: "finished" },
];

function MatchFilters({
  activeFilter,
  onFilterChange,
  favoritesOnly,
  onFavoritesChange,
  counts,
}) {
  return (
    <div className="flex items-center justify-between gap-2 bg-white border border-slate-200 rounded-xl p-1 shadow-xs">
      {/* Status filters */}
      <div className="flex items-center gap-1 overflow-x-auto scrollbar-none">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.value;

          return (
            <Button
              key={filter.value}
              variant={isActive ? "default" : "ghost"}
              onClick={() => onFilterChange(filter.value)}
              className={`px-3 py-1.5 rounded-lg font-jakarta text-sm whitespace-nowrap shadow-xs ${
                isActive
                  ? "bg-slate-900 text-white font-bold hover:bg-slate-800"
                  : "text-slate-600 font-medium hover:bg-slate-100"
              }`}
            >
              {filter.value === "live" && (
                <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
              )}
              <span
                className={
                    filter.value === "live"
                    ? isActive
                    ? "text-white font-bold"
                    : "text-emerald-600 font-bold"
                    : ""
                }
              >
                {filter.label} ({counts[filter.value] ?? 0})
              </span>
            </Button>
          );
        })}
      </div>

      {/* Favorites filter */}
      <label className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-slate-50 border border-slate-200 cursor-pointer select-none shrink-0 hover:bg-slate-100 transition-colors">
        <span
          className={`material-symbols-outlined text-base ${
            favoritesOnly ? "text-amber-500" : "text-slate-400"
          } [font-variation-settings:'FILL'_1]`}
        >
          star
        </span>

        <span className="font-jakarta text-[11px] text-primary font-bold hidden sm:inline">
          Favorites Only
        </span>

        <input
          type="checkbox"
          checked={favoritesOnly}
          onChange={(e) => onFavoritesChange(e.target.checked)}
          className="accent-emerald-600 rounded cursor-pointer w-3.5 h-3.5"
        />
      </label>
    </div>
  );
}

export default MatchFilters;