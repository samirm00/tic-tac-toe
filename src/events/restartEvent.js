import dom from "../dom.js";
import restartHandler from "../handlers/restartHandler.js";

const restartEvent = () => 
{
    dom.restartButton.addEventListener('click', restartHandler);
}

export default restartEvent;

