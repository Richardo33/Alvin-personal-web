import {
  DashboardWidgetContainer,
  type DashboardWidget,
} from "@sanity/dashboard";

function PortfolioGuideWidget() {
  return (
    <DashboardWidgetContainer header="Portfolio CMS checklist">
      <div style={{ padding: 16 }}>
        <p style={{ margin: "0 0 12px", lineHeight: 1.5 }}>
          Kelola konten portfolio dari menu Structure: Profile, Projects,
          Skills, Experience, dan Certificates.
        </p>
        <p style={{ margin: "0 0 12px", lineHeight: 1.5 }}>
          Untuk isi awal dari data portfolio lokal, jalankan command ini setelah
          env dan token Sanity siap:
        </p>
        <code
          style={{
            display: "inline-block",
            borderRadius: 6,
            background: "#f1f3f6",
            padding: "6px 8px",
            fontSize: 13,
          }}
        >
          npm run sanity:seed
        </code>
        <p style={{ margin: "12px 0 0", color: "#6b7280", lineHeight: 1.5 }}>
          Profile adalah singleton document, jadi cukup edit satu dokumen
          Profile saja. Projects, Skills, Experience, dan Certificates bisa
          ditambah sesuai kebutuhan.
        </p>
      </div>
    </DashboardWidgetContainer>
  );
}

export function portfolioGuideWidget(): DashboardWidget {
  return {
    name: "portfolio-guide",
    component: PortfolioGuideWidget,
    layout: { width: "medium" },
  };
}
