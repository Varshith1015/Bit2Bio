export default function LandingSurface({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="relative overflow-hidden bg-[#dbe3ee]">
        {/* unified premium surface */}
        <div className="absolute inset-0 pointer-events-none">
          {/* base tone */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#d9e2ec_0%,#dee6ef_18%,#d8e1eb_42%,#d5dee9_68%,#dbe4ee_100%)]" />
  
          {/* large top-right studio light */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_8%,rgba(255,255,255,0.82),transparent_28%)]" />
  
          {/* soft left atmospheric haze */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_30%,rgba(158,177,206,0.14),transparent_34%)]" />
  
          {/* center floor glow */}
          <div className="absolute inset-0 opacity-50 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.34)_0%,transparent_62%)]" />
  
          {/* subtle diagonal light sweep */}
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.10)_0%,transparent_28%,transparent_70%,rgba(255,255,255,0.08)_100%)]" />
  
          {/* wide continuous ripple texture */}
          <div className="absolute inset-0 opacity-[0.16] [background:repeating-radial-gradient(circle_at_50%_22%,rgba(0,0,0,0)_0px,rgba(0,0,0,0)_52px,rgba(165,182,208,0.24)_53px,rgba(165,182,208,0.24)_55px)]" />
  
          {/* lower fog for depth */}
          <div className="absolute inset-x-0 bottom-0 h-[45%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18),transparent_70%)]" />
        </div>
  
        <div className="relative">{children}</div>
      </div>
    );
  }