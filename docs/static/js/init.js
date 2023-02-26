import { get_gps } from "./gps.js"

var clock = setInterval(get_gps , 10000);
