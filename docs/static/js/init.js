import { get_gps } from "./gps.js"

get_gps();
var clock = setInterval(get_gps , 10000);
