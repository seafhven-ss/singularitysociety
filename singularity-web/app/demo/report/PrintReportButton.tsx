"use client";

import { Printer } from "lucide-react";

export function PrintReportButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02] print:hidden"
      style={{ backgroundImage: "linear-gradient(135deg, #7b7fff, #4dd9d5, #a78bfa)" }}
    >
      <Printer className="h-4 w-4" />
      打印 / 导出 PDF
    </button>
  );
}
