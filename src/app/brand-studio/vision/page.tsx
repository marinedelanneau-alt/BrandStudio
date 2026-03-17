"use client";

import { useState } from "react";
import { VisionPage } from "../../../components/brand-studio/vision/VisionPage";
import type { BrandData } from "../../../types/brand";

export default function BrandStudioVisionRoute() {
  const [data, setData] = useState<BrandData>({});

  return (
    <main className="min-h-screen bg-[#f7f2ea] px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <VisionPage
          data={data}
          onChange={(key, value) =>
            setData((current) => ({
              ...current,
              [key]: value,
            }))
          }
        />
      </div>
    </main>
  );
}
