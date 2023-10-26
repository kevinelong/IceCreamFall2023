window.onload = () => {

    submitOrderButton.onclick = () => {
        const selectedContainerType = document.querySelector("input[name='containerType']:checked");

        submitOrder(
            scoops.value,
            selectedContainerType.value,
            sprinkles.checked,
            whip.checked,
            fudge.checked,
            cherry.checked,
        );

        basePriceSpan.innerText = basePrice.toFixed(2);
        taxSpan.innerText = taxAmount.toFixed(2);
        totalDueSpan.innerText = totalDue.toFixed(2);

    }

    cupRadio.onclick = () => toppings.style.display = "block";
    coneRadio.onclick = () => toppings.style.display = "none";
}
