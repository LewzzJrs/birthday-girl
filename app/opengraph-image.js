import { ImageResponse } from "next/og";
import { content } from "@/data/content";

export const alt = `Untuk ${content.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle at 20% 25%, #fdba8c, transparent 45%), radial-gradient(circle at 85% 30%, #c4b5fd, transparent 45%), radial-gradient(circle at 70% 90%, #99f6e4, transparent 45%), #fff8f1",
          color: "#3b1f4a",
        }}
      >
        <div style={{ fontSize: 40, color: "#0f766e", letterSpacing: 4 }}>A LITTLE SOMETHING FOR</div>
        <div style={{ fontSize: 140, fontWeight: 700, marginTop: 10 }}>{content.name}</div>
        <div
          style={{
            marginTop: 30,
            padding: "14px 36px",
            borderRadius: 999,
            background: "#9d2b6b",
            color: "#ffffff",
            fontSize: 36,
          }}
        >
          Happy Birthday
        </div>
      </div>
    ),
    size
  );
}
