import { t } from "mendix/native";
export const ACT_SendLink = {"instructions":[{"type":"javaScriptActionCall","label":1,"action":() => require("C:/Users/abc/Documents/Mendix/New folder/javascriptsource/nanoflowcommons/actions/DraftEmail").DraftEmail,"outputVar":"ReturnValueName","parameters":[{"kind":"primitive","value":{"type":"variable","variable":"AccountHolder","path":"EmailInvite"}},{"kind":"primitive","value":{"type":"literal","value":null}},{"kind":"primitive","value":{"type":"literal","value":null}},{"kind":"primitive","value":{"type":"literal","value":"Join me on Fit Fast!"}},{"kind":"primitive","value":{"type":"literal","value":"Hey there,\n\nI just joined Fit Fast, sign up so that we can compete to see who can run the furthest.\nhttp://192.168.1.161:8080"}}]},{"type":"showMessage","label":2,"messageType":"info","message": t([{"type":"literal","value":"Invite Sent!"}] ),"blocking":true},{"type":"return","label":3,"result":{"type":"literal","value":null},"resultKind":"primitive"}]};
