import { useEffect } from "react";

const BuyMeACoffee = () => {
    useEffect(() => {
        let script = document.createElement("script");
        script.setAttribute("data-name", "BMC-Widget");
        script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
        script.setAttribute("data-id", "shuaiwei.yu");
        script.setAttribute("data-description", "Thank you for your support!");
        script.setAttribute("data-message", "This web is free to use. Do you want to help supporting it?");
        script.setAttribute("data-color", "#ffdd00");
        script.setAttribute("data-position", "right");
        script.setAttribute("data-x_margin", "18");
        script.setAttribute("data-y-margin", "18");
        script.async = true;

        script.onload = function () {
            const evt = new Event("DOMContentLoaded");
            window.dispatchEvent(evt);
        };

        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
            const bmcButton = document.getElementById("bmc-wbtn");
            if (bmcButton) {
                document.body.removeChild(bmcButton);
            }
        };
    }, []);

    return null;
};

export default BuyMeACoffee;
