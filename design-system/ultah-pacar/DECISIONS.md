# Keputusan Desain Final (menimpa MASTER.md bila bertentangan)

Sumber: `ui-ux-pro-max` — `--design-system "romantic love letter soft elegant"` + `--domain typography` + `--domain color` (Wedding/Event Planning) + `--domain ux`.

## Diambil
- Palet romance rose + aksen emas (gabungan MASTER dan palet Wedding).
- Font Wedding/Romance (Great Vibes + Cormorant) + sans hangat dari pairing "Handwritten Charm" (Quicksand).
- Gradasi lembut bergaya Aurora di latar hero/gate, gerak pelan 8–12 detik.
- Aturan reduced motion dan maksimal 1–2 animasi utama per layar.

## Dibuang
- Pola "Hero + Testimonials + CTA": tidak relevan, struktur halaman mengikuti RANCANGAN.md bagian 4.
- Snippet GSAP: stack memakai Framer Motion, bukan GSAP.
- Foreground `#0F172A` dan muted slate: terlalu dingin untuk tema ini.

## Token Warna
| Peran | Hex | Kontras |
|---|---|---|
| background | `#FDF2F8` | — |
| card / kertas | `#FFFFFF` | — |
| foreground (teks utama) | `#831843` | 8.84:1 di background |
| muted-foreground | `#6B4E5A` | 6.72:1 di background |
| primary (tombol) | `#BE185D` | teks putih 6.04:1 |
| secondary (dekor, bukan teks) | `#F472B6` | — |
| accent emas | `#A16207` | 4.51:1 di background, teks putih 4.92:1 |
| border | `#FBCFE8` | — |
| ring (fokus) | `#BE185D` | — |

## Tipografi (3 keluarga)
| Peran | Font | Pemakaian |
|---|---|---|
| Judul | Cormorant Infant 500–700 | "Happy Birthday", judul section |
| Teks | Quicksand 400–600 | paragraf, tombol, caption (min 16px) |
| Aksen | Great Vibes 400 | tanda tangan "— Lewi", judul kecil, nama di hero |

Great Vibes hanya untuk teks pendek ≥ 24px, tidak untuk paragraf.

## Gaya & Gerak
- Lembut, hangat, banyak ruang (density 3): jarak section 64–96px di HP.
- Sudut membulat 16–24px, bayangan tipis warna rose, polaroid dengan bingkai putih.
- Durasi: micro 150–250ms, reveal scroll 400–600ms, ease-out; buka amplop ~800ms.
- `prefers-reduced-motion`: tanpa confetti, tanpa gradasi bergerak, reveal jadi fade singkat atau langsung tampil.
- Ikon pakai SVG inline, bukan emoji sebagai ikon (emoji boleh di dalam teks pesan).
- Tap target minimal 44×44px, fokus keyboard terlihat (ring 2px `#BE185D`).
