import { t } from "mendix/native";
export const DS_GetAccountHolder = {"instructions":[{"type":"associationRetrieve","label":1,"inputVar":"Account","association":"NativeMobile.AccountHolder_Account","entity":"NativeMobile.AccountHolder","retrieveSingleObject":true,"direction":"reverse","outputVar":"AccountHolder"},{"type":"switch","label":2,"condition":{"type":"function","name":"!=","parameters":[{"type":"variable","variable":"AccountHolder"},{"type":"literal","value":null}]},"targets":{"true":3,"false":4}},{"type":"createObject","label":4,"objectType":"NativeMobile.AccountHolder","outputVar":"NewAccountHolder"},{"type":"return","label":5,"result":{"type":"variable","variable":"NewAccountHolder"},"resultKind":"object"},{"type":"associationRetrieve","label":3,"inputVar":"Account","association":"NativeMobile.Run_Account","entity":"NativeMobile.Run","retrieveSingleObject":false,"direction":"reverse","outputVar":"RunList"},{"type":"aggregate","label":6,"operation":"Count","inputVar":"RunList","member":null,"outputVar":"Count"},{"type":"associationRetrieve","label":7,"inputVar":"Account","association":"NativeMobile.AccountHolder_Friends","entity":"NativeMobile.AccountHolder","retrieveSingleObject":false,"direction":"reverse","outputVar":"friendsList"},{"type":"aggregate","label":8,"operation":"Count","inputVar":"friendsList","member":null,"outputVar":"Count_1"},{"type":"changeObject","label":9,"inputVar":"AccountHolder","member":"TotalRuns","value":{"type":"variable","variable":"Count"}},{"type":"changeObject","inputVar":"AccountHolder","member":"TotalFriends","value":{"type":"variable","variable":"Count_1"}},{"type":"return","label":10,"result":{"type":"variable","variable":"AccountHolder"},"resultKind":"object"}]};