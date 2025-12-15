(function () {
    const container = document.getElementById("crypto-checkout");
    if (!container) return;

    // Make container full width
    container.style.width = "100%";

    const iframe = document.createElement("iframe");
    iframe.src = "https://crypto-checkout-widget-beta.vercel.app/checkout";
    iframe.style.border = "none";
    iframe.style.width = "100%";
    iframe.style.height = "600px"; // default height
    iframe.style.borderRadius = "12px";

    container.appendChild(iframe);

    // Listen for height messages from iframe
    window.addEventListener('message', (e) => {
        if (e.data.type === 'resize') {
            iframe.style.height = e.data.height + 'px';
        }
    });
})();
