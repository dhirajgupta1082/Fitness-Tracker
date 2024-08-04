import { createElement } from "react";
const React = { createElement };

import { ActionProperty } from "mendix/ActionProperty";
import { AttributeProperty } from "mendix/AttributeProperty";
import { DynamicTextProperty } from "mendix/DynamicTextProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { NanoflowObjectProperty } from "mendix/NanoflowObjectProperty";
import { StyleProperty } from "mendix/StyleProperty";

import { Button } from "mendix/Button";
import { ConditionalVisibilityWrapper } from "mendix/ConditionalVisibilityWrapper";
import { Container } from "mendix/Container";
import { DataView } from "mendix/DataView";
import { Text } from "mendix/Text";
import { TextBox } from "mendix/TextBox";
import { asPluginWidgets, t } from "mendix/native";

import { mainContent, sidebar } from "C:/Users/abc/Documents/Mendix/New folder/deployment/native/layouts/Atlas_UI_Resources.NativePhone_Default.js";

import * as styles from "C:/Users/abc/Documents/Mendix/New folder/theme/styles.js";

const { $DataView, $TextBox, $ConditionalVisibilityWrapper, $Button, $Container, $Text } = asPluginWidgets({ DataView, TextBox, ConditionalVisibilityWrapper, Button, Container, Text });

const placeholder$Main = () => [
    <$DataView key="p6.NativeMobile.SignUp.dataView1"
        $widgetId="p6.NativeMobile.SignUp.dataView1"
        style={StyleProperty({
            styles: [ styles.DataView, styles.spacingOuterTopMedium ]
        })}
        object={NanoflowObjectProperty({
            source: { "nanoflow": () => require("C:/Users/abc/Documents/Mendix/New folder/deployment/native/nanoflows/NativeMobile.DSS_CreateAccountHolder").DSS_CreateAccountHolder, "allowedRoles": [ "Anonymous" ] },
            argMap: {}
        })}
        content={[
            <$TextBox key="p6.NativeMobile.SignUp.textBox1"
                $widgetId="p6.NativeMobile.SignUp.textBox1"
                style={StyleProperty({
                    styles: [ styles.TextBox, styles.TextBoxHorizontal, styles.spacingOuterBottomMedium ]
                })}
                onEnter={undefined}
                onLeave={undefined}
                formOrientation={"horizontal"}
                labelWidth={0}
                inputValue={AttributeProperty({
                    scope: "p6.NativeMobile.SignUp.dataView1",
                    path: "",
                    entity: "Administration.Account",
                    attribute: "FullName",
                    onChange: { "type": "doNothing", "argMap": {}, "config": {} },
                    validation: null,
                    formatting: { }
                })}
                isPassword={false}
                placeholder={DynamicTextProperty({
                    template: { "elements": t( [ [ "Full Name" ] ] ) }
                })}
                label={undefined}
                maxLength={200}
                keyboardType={"default"}
                onEnterKeyPress={undefined}
                autocomplete={true} />,
            <$TextBox key="p6.NativeMobile.SignUp.textBox3"
                $widgetId="p6.NativeMobile.SignUp.textBox3"
                style={StyleProperty({
                    styles: [ styles.TextBox, styles.TextBoxHorizontal, styles.spacingOuterBottomMedium ]
                })}
                onEnter={undefined}
                onLeave={undefined}
                formOrientation={"horizontal"}
                labelWidth={0}
                inputValue={AttributeProperty({
                    scope: "p6.NativeMobile.SignUp.dataView1",
                    path: "",
                    entity: "Administration.Account",
                    attribute: "Email",
                    onChange: { "type": "doNothing", "argMap": {}, "config": {} },
                    validation: null,
                    formatting: { }
                })}
                isPassword={false}
                placeholder={DynamicTextProperty({
                    template: { "elements": t( [ [ "Email" ] ] ) }
                })}
                label={undefined}
                maxLength={200}
                keyboardType={"default"}
                onEnterKeyPress={undefined}
                autocomplete={true} />,
            <$TextBox key="p6.NativeMobile.SignUp.textBox2"
                $widgetId="p6.NativeMobile.SignUp.textBox2"
                style={StyleProperty({
                    styles: [ styles.TextBox, styles.TextBoxHorizontal, styles.spacingOuterBottomMedium ]
                })}
                onEnter={undefined}
                onLeave={undefined}
                formOrientation={"horizontal"}
                labelWidth={0}
                inputValue={AttributeProperty({
                    scope: "p6.NativeMobile.SignUp.dataView1",
                    path: "",
                    entity: "Administration.Account",
                    attribute: "Password",
                    onChange: { "type": "doNothing", "argMap": {}, "config": {} },
                    validation: null,
                    formatting: { }
                })}
                isPassword={true}
                placeholder={DynamicTextProperty({
                    template: { "elements": t( [ [ "Password" ] ] ) }
                })}
                label={undefined}
                maxLength={200}
                keyboardType={"default"}
                onEnterKeyPress={undefined}
                autocomplete={true} />,
            <$ConditionalVisibilityWrapper key="p6.NativeMobile.SignUp.actionButton1$visibility"
                $widgetId="p6.NativeMobile.SignUp.actionButton1$visibility"
                visible={ExpressionProperty({
                    expression: { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Anonymous" } ] }, "args": {} }
                })}
                contents={[
                    <$Button key="p6.NativeMobile.SignUp.actionButton1"
                        $widgetId="p6.NativeMobile.SignUp.actionButton1"
                        style={StyleProperty({
                            styles: [ styles.ActionButton ]
                        })}
                        caption={DynamicTextProperty({
                            template: { "elements": t( [ [ "Join us" ] ] ) }
                        })}
                        icon={undefined}
                        onClick={ActionProperty({
                            action: { "type": "callNanoflow", "argMap": { "Account": { "widget": "p6.NativeMobile.SignUp.dataView1", "source": "object" } }, "config": { "nanoflow": () => require("C:/Users/abc/Documents/Mendix/New folder/deployment/native/nanoflows/NativeMobile.ACT_CreateAccount").ACT_CreateAccount, "allowedRoles": [ "Anonymous" ] } },
                            abortOnServerValidation: false
                        })}
                        disabledDuringAction={true} />
                ]} />,
            <$Container key="p6.NativeMobile.SignUp.container3"
                $widgetId="p6.NativeMobile.SignUp.container3"
                style={StyleProperty({
                    styles: [ styles.Container, styles.flexRow, styles.justifyContentCenter, styles.alignChildrenEnd, styles.spacingInnerTopMedium, styles.spacingInnerBottomMedium ]
                })}
                onClick={undefined}
                content={[
                    <$Text key="p6.NativeMobile.SignUp.text4"
                        $widgetId="p6.NativeMobile.SignUp.text4"
                        style={StyleProperty({
                            styles: [ styles.Text, styles.spacingOuterRightSmaller, styles.textSmall, styles.textContrastHigh ]
                        })}
                        text={DynamicTextProperty({
                            template: { "elements": t( [ [ "Already have an Account?" ] ] ) }
                        })} />,
                    <$Text key="p6.NativeMobile.SignUp.text5"
                        $widgetId="p6.NativeMobile.SignUp.text5"
                        style={StyleProperty({
                            styles: [ styles.Text, styles.textPrimary, styles.textSemiBold, styles.textSmall ]
                        })}
                        text={DynamicTextProperty({
                            template: { "elements": t( [ [ "Login" ] ] ) }
                        })} />
                ]} />
        ]} />
];

export const placeholder$Header = () => null;

export const $$title = t([
    "Sign Up"
] );

export const $$style = [ styles.Layout, styles.Page, styles.spacingInnerTopLarger, styles.spacingInnerBottomLarger, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium ];

export const $$page = () => mainContent(placeholder$Main);

export const $$sidebar = () => sidebar(placeholder$Main);

