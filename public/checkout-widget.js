(function () {
    const iframe = document.createElement("iframe");

    iframe.src = "https://crypto-checkout-widget-beta.vercel.app/checkout";
    iframe.style.border = "none";
    iframe.style.width = "100%";
    iframe.style.height = "600px";
    iframe.style.borderRadius = "12px";

    const container = document.getElementById("crypto-checkout");

    if (container) {
        container.appendChild(iframe);
    }
})();
