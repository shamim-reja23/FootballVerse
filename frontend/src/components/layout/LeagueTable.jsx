import { Link } from "react-router-dom";


const standingsData = [
  { id: 1, club: "Arsenal", played: 9, gd: 14, points: 22 },
  { id: 2, club: "Man City", played: 9, gd: 15, points: 21 },
  { id: 3, club: "Liverpool", played: 9, gd: 11, points: 20 },
  { id: 4, club: "Chelsea", played: 9, gd: 7, points: 17 },
  { id: 5, club: "Aston Villa", played: 9, gd: 5, points: 16 },
  { id: 6, club: "Tottenham", played: 9, gd: 4, points: 15 },
];

const LeagueTable = ({
  league = "Premier League",
  standings = standingsData,
  fullTableLink = "/standings",
  highlightCount = 4,
}) => {
  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-600" />

          <span className="font-label-caps text-[12px] uppercase text-[#0F172A] tracking-wider font-extrabold">
            {league}
          </span>
        </div>

        <Link
          to={fullTableLink}
          className="font-body-sm text-body-sm text-blue-600 hover:text-emerald-600 transition-colors font-semibold"
        >
          Full Table →
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left font-body-sm text-body-sm">
          <thead>
            <tr className="font-label-caps text-[10px] text-slate-400 uppercase">
              <th className="py-1 w-6">#</th>
              <th className="py-1">Club</th>
              <th className="py-1 text-center">P</th>
              <th className="py-1 text-center">GD</th>
              <th className="py-1 text-right">Pts</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 font-tabular-stat text-tabular-stat">
            {standings.map((team, index) => {
              const position = index + 1;
              const isHighlighted = position <= highlightCount;

              return (
                <tr
                  key={team.id}
                  className="hover:bg-slate-50 transition-colors"
                >
                  {/* Position */}
                  <td
                    className={`py-2 font-bold relative pl-2 ${
                      isHighlighted ? "text-emerald-600" : "text-slate-400"
                    }`}
                  >
                    {isHighlighted && (
                      <span
                        className={`absolute left-0 top-1.5 bottom-1.5 w-1 rounded-full ${
                          position === 1
                            ? "bg-[#00E676]"
                            : "bg-blue-500"
                        }`}
                      />
                    )}
                    {position}
                  </td>

                  {/* Club */}
                  <td
                    className={`py-2 ${
                      position === 1
                        ? "font-bold text-[#0F172A]"
                        : isHighlighted
                        ? "font-semibold text-[#0F172A]"
                        : "font-medium text-slate-700"
                    }`}
                  >
                    {team.club}
                  </td>

                  {/* Played */}
                  <td className="py-2 text-center text-slate-400">
                    {team.played}
                  </td>

                  {/* Goal Difference */}
                  <td className="py-2 text-center text-[#0F172A] font-semibold">
                    {team.gd > 0 ? `+${team.gd}` : team.gd}
                  </td>

                  {/* Points */}
                  <td className="py-2 text-right font-extrabold text-[#0F172A]">
                    {team.points}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeagueTable;