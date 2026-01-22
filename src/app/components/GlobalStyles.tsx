'use client';

export function GlobalStyles() {
    return (
        <style jsx global>{`
      html {
        scroll-behavior: smooth;
      }
      
      body {
        font-family: var(--font-inter);
      }

      /* Custom scrollbar for the entire page */
      ::-webkit-scrollbar {
        width: 12px;
      }

      ::-webkit-scrollbar-track {
        background: #1A1A1A;
      }

      ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #8B4513, #D2691E);
        border-radius: 6px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to bottom, #A0522D, #CD853F);
      }
    `}</style>
    );
}
