function MatchMomentumHeader() {
    return (
      <div className="flex items-center justify-between pb-3 mb-1 border-b border-border">
        <div className="flex items-center gap-2">  
          <h2 className="font-jakarta text-lg text-primary font-bold">
            Match Momentum &amp; Dominance Index
          </h2>
        </div>
  
        <div className="flex items-center gap-4 text-sm font-jakarta">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-2 rounded-xs bg-live inline-block" />
            <span className="text-primary font-medium">
              Arsenal Dominance
            </span>
          </div>
  
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-2 rounded-xs bg-red-500 inline-block" />
            <span className="text-primary font-medium">
              Chelsea Dominance
            </span>
          </div>
        </div>
      </div>
    );
  }
  
  function MomentumChart() {
    return (
      <div className="w-full relative py-2">
        <svg
          className="w-full h-32 overflow-visible"
          preserveAspectRatio="none"
          viewBox="0 0 760 140"
        >
          <defs>
            <linearGradient
              id="arsenalGrad"
              x1="0%"
              x2="0%"
              y1="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#006948" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#006948" stopOpacity="0" />
            </linearGradient>
  
            <linearGradient
              id="chelseaGrad"
              x1="0%"
              x2="0%"
              y1="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#006194" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#006194" stopOpacity="0" />
            </linearGradient>
          </defs>
  
          {/* Midpoint reference line */}
          <line
            stroke="#dae2fd"
            strokeDasharray="4 4"
            strokeWidth="1"
            x1="0"
            x2="760"
            y1="70"
            y2="70"
          />
  
          {/* Half-time marker */}
          <line
            stroke="#bccac0"
            strokeDasharray="2 2"
            strokeWidth="1.5"
            x1="380"
            x2="380"
            y1="10"
            y2="130"
          />
  
          <text
            fill="#6d7a72"
            fontFamily="Chivo"
            fontSize="10"
            fontWeight="700"
            x="385"
            y="22"
          >
            HT 45'
          </text>
  
          {/* Current match minute */}
          <line
            stroke="#00e475"
            strokeWidth="2"
            x1="574"
            x2="574"
            y1="10"
            y2="130"
          />
  
          <circle cx="574" cy="70" fill="#006948" r="4" />
  
          {/* Arsenal momentum area */}
          <path
            d="M 0,70 Q 50,45 100,55 T 190,20 Q 230,40 280,65 T 345,110 Q 380,80 430,75 T 490,25 Q 535,45 574,38 L 574,70 Z"
            fill="url(#arsenalGrad)"
          />
  
          {/* Chelsea momentum area */}
          <path
            d="M 280,70 Q 320,115 345,110 T 380,70 Z"
            fill="url(#chelseaGrad)"
          />
  
          {/* Arsenal momentum line */}
          <path
            d="M 0,70 Q 50,45 100,55 T 190,20 Q 230,40 280,65 T 345,110 Q 380,80 430,75 T 490,25 Q 535,45 574,38"
            fill="none"
            stroke="#006948"
            strokeLinecap="round"
            strokeWidth="2.5"
          />
  
          <GoalMarker
            x={202}
            y={20}
            color="#006948"
            label="Saka 24'"
          />
  
          <GoalMarker
            x={346}
            y={110}
            color="#006194"
            label="Palmer 41'"
            labelY={18}
          />
  
          <GoalMarker
            x={490}
            y={25}
            color="#006948"
            label="Ødegaard (P) 58'"
          />
        </svg>
      </div>
    );
  }
  
  function GoalMarker({ x, y, color, label, labelY = -12 }) {
    return (
      <g transform={`translate(${x}, ${y})`}>
        <circle cx="0" cy="0" fill={color} r="8" />
  
        <text
          fill="#ffffff"
          fontSize="9"
          textAnchor="middle"
          x="0"
          y="3"
        >
          ⚽
        </text>
  
        <text
          fill={color}
          fontFamily="Chivo"
          fontSize="10"
          fontWeight="700"
          textAnchor="middle"
          x="0"
          y={labelY}
        >
          {label}
        </text>
      </g>
    );
  }
  
  function MomentumTimeline() {
    const minutes = [
      "0'",
      "15'",
      "30'",
      "HT",
      "60'",
      "68' (NOW)",
      "75'",
      "90'",
    ];
  
    return (
      <div className="flex items-center justify-between text-sm font-jakarta text-primary pt-2 border-t border-border">
        {minutes.map((minute) => (
          <span
        key={minute}
        className={
          minute === "HT"
            ? "font-bold text-primary"
            : minute === "68' (NOW)"
            ? "font-bold text-live"
            : minute === "75'" || minute === "90'"
            ? "opacity-40"
            : ""
        }
          >
            {minute}
          </span>
        ))}
      </div>
    );
  }
  
  export default function MatchMomentum() {
    return (
      <section className="bg-white rounded-xl p-5 shadow-sm border">
        <MatchMomentumHeader />
  
        <MomentumChart />
  
        <MomentumTimeline />
      </section>
    );
  }