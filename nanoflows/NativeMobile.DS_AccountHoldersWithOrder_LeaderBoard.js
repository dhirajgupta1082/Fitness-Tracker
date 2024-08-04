import { t } from "mendix/native";
export const DS_AccountHoldersWithOrder_LeaderBoard = {"instructions":[{"type":"databaseRetrieve","label":1,"entity":"Administration.Account","constraints":{"type":"function","name":"=","parameters":[{"type":"attribute","attribute":"id"},{"type":"token","name":"currentUser"}]},"limitExpr":{"type":"literal","value":1},"offsetExpr":{"type":"literal","value":0},"takeFirst":true,"outputVar":"Account"},{"type":"associationRetrieve","label":2,"inputVar":"Account","association":"NativeMobile.AccountHolder_Account","entity":"NativeMobile.AccountHolder","retrieveSingleObject":true,"direction":"reverse","outputVar":"AccountHolder"},{"type":"databaseRetrieve","label":3,"entity":"NativeMobile.AccountHolder","takeFirst":false,"sort":[["TotalDistance","desc"]],"outputVar":"AccountHolderList"},{"type":"setVariable","label":4,"value":{"type":"function","name":"_addToList","parameters":[{"type":"variable","variable":"AccountHolderList"},{"type":"variable","variable":"AccountHolder"}]},"outputVar":"AccountHolderList","outputKind":"list"},{"type":"sortList","label":5,"inputVar":"AccountHolderList","outputVar":"SortedAccountHolderList","entity":"NativeMobile.AccountHolder","items":[{"attribute":"TotalDistance","order":"desc"}]},{"type":"setVariable","label":6,"value":{"type":"literal","value":1},"outputVar":"Order","outputKind":"primitive"},{"type":"loop","label":7,"listVar":"SortedAccountHolderList","iteratorVar":"IteratorAccountHolder","body":[{"type":"changeObject","label":0,"inputVar":"IteratorAccountHolder","member":"Order","value":{"type":"variable","variable":"Order"}},{"type":"setVariable","label":1,"value":{"type":"function","name":"+","parameters":[{"type":"variable","variable":"Order"},{"type":"literal","value":1}]},"outputVar":"Order","outputKind":"primitive"},{"type":"return","label":2,"result":{"type":"literal","value":false},"resultKind":"primitive"}]},{"type":"return","label":8,"result":{"type":"variable","variable":"AccountHolderList"},"resultKind":"list"}]};