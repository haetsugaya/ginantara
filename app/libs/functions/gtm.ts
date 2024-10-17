import { useEffect } from "react";

// Hook to load multiple Google Tag Manager containers
export const useGoogleTagManager = (gtmIds: string[]) => {
  useEffect(() => {
    gtmIds.forEach((gtmId) => {
      const script = document.createElement('script');
      script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${gtmId}');
      `;
      document.head.appendChild(script);
    });
    
    return () => {
      gtmIds.forEach((gtmId) => {
        const script = document.querySelector(`script[src*="id=${gtmId}"]`);
        if (script) {
          document.head.removeChild(script);
        }
      });
    };
  }, [gtmIds]);
};

// Hook to load noscript tags for multiple GTM containers
export const useGoogleTagManagerNoScript = (gtmIds: string[]) => {
  useEffect(() => {
    gtmIds.forEach((gtmId) => {
      const noscript = document.createElement('noscript');
      noscript.innerHTML = `
        <iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>
      `;
      document.body.appendChild(noscript);
    });

    return () => {
      gtmIds.forEach((gtmId) => {
        const noscript = document.querySelector(`noscript iframe[src*="id=${gtmId}"]`);
        if (noscript && noscript.parentNode) {
          noscript.parentNode.removeChild(noscript);
        }
      });
    };
  }, [gtmIds]);
};
