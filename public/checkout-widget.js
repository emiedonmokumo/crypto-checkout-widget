(function () {
    const iframe = document.createElement("iframe");

    iframe.src = "https://crypto-checkout-widget-beta.vercel.app/checkout";
    iframe.style.border = "none";
    iframe.style.width = "100%";
    iframe.style.height = "100%"; // fill container height
    iframe.style.borderRadius = "12px";

    const container = document.getElementById("crypto-checkout");

    if (container) {
        // Make container take full viewport if needed
        container.style.width = "100vw";
        container.style.height = "100vh";
        container.appendChild(iframe);
    }
})();
