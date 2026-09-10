import { useEffect, useState } from "react";

const RELEASES_API =
  "https://api.github.com/repos/afifudin23/tetulung-releases/releases/latest";

/**
 * Ambil rilis APK terbaru dari repo tetulung-releases (GitHub).
 * @returns {{status: "loading"|"ready"|"unavailable", apkUrl: string|null, version: string|null}}
 */
export default function useLatestRelease() {
  const [state, setState] = useState({
    status: "loading",
    apkUrl: null,
    version: null,
  });

  useEffect(() => {
    let cancelled = false;

    fetch(RELEASES_API)
      .then((res) => {
        if (!res.ok) throw new Error("Gagal mengambil rilis terbaru");
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        const apkAsset = data.assets?.find((asset) =>
          asset.name.endsWith(".apk")
        );
        if (!apkAsset) {
          setState({ status: "unavailable", apkUrl: null, version: null });
          return;
        }
        setState({
          status: "ready",
          apkUrl: apkAsset.browser_download_url,
          version: data.tag_name ?? null,
        });
      })
      .catch(() => {
        if (!cancelled) {
          setState({ status: "unavailable", apkUrl: null, version: null });
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
