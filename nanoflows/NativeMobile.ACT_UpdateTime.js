import { t } from "mendix/native";
export const ACT_UpdateTime = {"instructions":[{"type":"switch","label":1,"condition":{"type":"variable","variable":"Run","path":"Status"},"targets":{"Busy":2,"NotStarted":3,"Done":4,"":5}},{"type":"return","label":5,"result":{"type":"literal","value":null},"resultKind":"primitive"},{"type":"return","label":4,"result":{"type":"literal","value":null},"resultKind":"primitive"},{"type":"return","label":3,"result":{"type":"literal","value":null},"resultKind":"primitive"},{"type":"nanoflowCall","label":2,"flow":() => require("C:/Users/abc/Documents/Mendix/New folder/deployment/native/nanoflows/NativeMobile.SUB_CheckConnectionAndSyncData").SUB_CheckConnectionAndSyncData,"parameters":[]},{"type":"return","label":6,"result":{"type":"literal","value":null},"resultKind":"primitive"}]};
