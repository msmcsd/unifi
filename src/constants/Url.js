import PORT from "./Port";

const BASE_URL = "http://localhost";
const API_BASE_URL = BASE_URL + ":" + PORT.API + "/Api/Commands";
const SOCKET_BASE_URL = BASE_URL + ":" + PORT.SOCKET;

// const URL = {
//     ALL_COMMANDS: API_BASE_URL + "/Commands",
//     RUN_COMMAND: API_BASE_URL + "/Command",
//     DISPLAY_COMMAND: API_BASE_URL + "/Command/DisplayCommand",
//     DISPLAY_TASK: API_BASE_URL + "/Command/DisplayTask",
//     DOWNLOAD_COMMAND: API_BASE_URL + "/Command/Download",
//     INSTALL_COMMAND: API_BASE_URL + "/Command/Install",
//     REPORT_COMMAND: API_BASE_URL + "/Command/Report",
//     SOCKET: SOCKET_BASE_URL
// }

const URL = {
    ALL_COMMANDS: API_BASE_URL,
    RUN_COMMAND: API_BASE_URL + "/Command",
    DISPLAY_COMMAND: API_BASE_URL + "/DisplayCommand",
    DISPLAY_TASK: API_BASE_URL + "/DisplayTask",
    DOWNLOAD_COMMAND: API_BASE_URL + "/Download",
    INSTALL_COMMAND: API_BASE_URL + "/Install",
    REPORT_COMMAND: API_BASE_URL + "/Report",
    SOCKET: SOCKET_BASE_URL
}

export default URL;