


const reactAsyncLinkMutator = (stringToBeReplaced, stringToBeInserted, containerID) => {
    const target = document.getElementById(containerID) || null;

    
    const mutateAnchorHref = (selectedAnchors, stringToReplaced, stringToBeInserted) => {
        for (let anchor of selectedAnchors) {
            if (anchor.href.includes(stringToReplaced)) {
                anchor.href = anchor.href.replace(stringToReplaced, stringToBeInserted);
            }
        }
    };

    const mutationFunction = (mutations) => {
        for (let mutation of mutations) {
            for (let node of mutation.addedNodes) {
                if (!(node instanceof HTMLElement)) continue;

                const inventoryAnchorsAsync = node.querySelectorAll(`a[href*="${stringToBeReplaced}"]`);
              
                mutateAnchorHref(inventoryAnchorsAsync, stringToBeReplaced, stringToBeInserted);

            }
        }
    };


window.onload = () => {
    const observer = new MutationObserver(mutationFunction);

    if (target) {
        observer.observe(target, {
            childList: true,
            subtree: true,
        });
    }

}




}