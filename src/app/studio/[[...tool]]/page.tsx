import { Studio } from "./Studio";
import { isSanityConfigured } from "@/sanity/env";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <main
        style={{
          minHeight: "100dvh",
          display: "grid",
          placeItems: "center",
          padding: "32px",
          background: "#f6f7fb",
          color: "#111827",
          fontFamily:
            "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        <section
          style={{
            width: "min(720px, 100%)",
            border: "1px solid #e5e7eb",
            borderRadius: "18px",
            background: "#ffffff",
            padding: "32px",
            boxShadow: "0 24px 70px rgba(15, 23, 42, 0.08)",
          }}
        >
          <p
            style={{
              margin: "0 0 8px",
              color: "#6366f1",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Sanity CMS setup needed
          </p>
          <h1 style={{ margin: 0, fontSize: "32px", lineHeight: 1.18 }}>
            Tambahkan Sanity project ID dulu.
          </h1>
          <p style={{ margin: "16px 0 0", color: "#4b5563", lineHeight: 1.7 }}>
            Studio belum bisa dibuka karena environment variable Sanity belum
            terbaca. Kalau lokal, buat file <code>.env.local</code>. Kalau
            sudah deploy, isi environment variables di dashboard hosting
            seperti Vercel lalu redeploy:
          </p>
          <pre
            style={{
              margin: "20px 0",
              overflowX: "auto",
              borderRadius: "12px",
              background: "#111827",
              color: "#e5e7eb",
              padding: "18px",
              lineHeight: 1.7,
            }}
          >{`NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-04-28
SANITY_API_WRITE_TOKEN=your_write_token_for_seed_script`}</pre>
          <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.7 }}>
            Setelah itu restart dev server dan buka lagi{" "}
            <code>http://localhost:3000/studio</code>. Jangan lupa tambahkan{" "}
            localhost port yang sedang dipakai, misalnya{" "}
            <code>http://localhost:3000</code> atau{" "}
            <code>http://localhost:3001</code>, ke CORS origins di Sanity
            project settings dengan credentials enabled.
          </p>
          <p style={{ margin: "16px 0 0", color: "#4b5563", lineHeight: 1.7 }}>
            Untuk domain production, tambahkan origin yang persis sama dengan
            domain di browser. Contoh: <code>https://richardoo.life</code> dan{" "}
            <code>https://www.richardoo.life</code> dihitung sebagai dua origin
            berbeda.
          </p>
          <p style={{ margin: "16px 0 0", color: "#4b5563", lineHeight: 1.7 }}>
            Kalau ingin langsung mengisi data awal portfolio ke CMS, jalankan{" "}
            <code>npm run sanity:seed</code> setelah token siap.
          </p>
        </section>
      </main>
    );
  }

  return <Studio />;
}
