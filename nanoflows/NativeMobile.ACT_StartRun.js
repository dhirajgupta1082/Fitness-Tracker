import { t } from "mendix/native";
export const ACT_StartRun = {"instructions":[{"type":"nanoflowCall","label":1,"flow":() => require("C:/Users/abc/Documents/Mendix/New folder/deployment/native/nanoflows/NativeMobile.SUB_StartTracker").SUB_StartTracker,"parameters":[{"name":"Run","value":{"type":"variable","variable":"Run"},"kind":"object"}]},{"type":"changeObject","label":2,"inputVar":"Run","member":"Status","value":{"type":"literal","value":"Busy"}},{"type":"changeObject","inputVar":"Run","member":"StartTime","value":{"type":"token","name":"currentDateTime"}},{"type":"commitObjects","inputVar":"Run"},{"type":"nanoflowCall","label":3,"flow":() => require("C:/Users/abc/Documents/Mendix/New folder/deployment/native/nanoflows/NativeMobile.SUB_CheckConnectionAndSyncData").SUB_CheckConnectionAndSyncData,"parameters":[]},{"type":"return","label":4,"result":{"type":"literal","value":null},"resultKind":"primitive"}]};
