import { t } from "mendix/native";
export const DSS_GetAccount = {"instructions":[{"type":"databaseRetrieve","label":1,"entity":"Administration.Account","constraints":{"type":"function","name":"=","parameters":[{"type":"attribute","attribute":"id"},{"type":"token","name":"currentUser"}]},"limitExpr":{"type":"literal","value":1},"offsetExpr":{"type":"literal","value":0},"takeFirst":true,"outputVar":"Account"},{"type":"switch","label":2,"condition":{"type":"function","name":"!=","parameters":[{"type":"variable","variable":"Account"},{"type":"literal","value":null}]},"targets":{"true":3,"false":4}},{"type":"return","label":4,"result":{"type":"literal","value":null},"resultKind":"object"},{"type":"return","label":3,"result":{"type":"variable","variable":"Account"},"resultKind":"object"}]};
