import { createElement } from "react";
const React = { createElement };

import { ActionProperty } from "mendix/ActionProperty";
import { AttributeProperty } from "mendix/AttributeProperty";
import { DynamicTextProperty } from "mendix/DynamicTextProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { NanoflowObjectProperty } from "mendix/NanoflowObjectProperty";
import { StaticImageProperty } from "mendix/StaticImageProperty";
import { StyleProperty } from "mendix/StyleProperty";

import { Button } from "mendix/Button";
import { ConditionalVisibilityWrapper } from "mendix/ConditionalVisibilityWrapper";
import { Container } from "mendix/Container";
import { DataView } from "mendix/DataView";
import { Image } from "mendix/Image";
import { Text } from "mendix/Text";
import { TextBox } from "mendix/TextBox";
import { asPluginWidgets, t } from "mendix/native";

import { mainContent, sidebar } from "C:/Users/abc/Documents/Mendix/New folder/deployment/native/layouts/Atlas_UI_Resources.NativePhone_FullPage.js";

import * as styles from "C:/Users/abc/Documents/Mendix/New folder/theme/styles.js";

import NativeMobile$Image_collection$group_running$jpg from "C:/Users/abc/Documents/Mendix/New folder/deployment/native/img/NativeMobile$Image_collection$group_running.jpg";
import NativeMobile$Image_collection$mendix_logo_tagline_white$png from "C:/Users/abc/Documents/Mendix/New folder/deployment/native/img/NativeMobile$Image_collection$mendix_logo_tagline_white.png";

const { $Container, $Image, $DataView, $TextBox, $Text, $ConditionalVisibilityWrapper, $Button } = asPluginWidgets({ Container, Image, DataView, TextBox, Text, ConditionalVisibilityWrapper, Button });

const placeholder$Main = () => [
    <$Container key="p5.NativeMobile.Login.container1"
        $widgetId="p5.NativeMobile.Login.container1"
        style={StyleProperty({
            styles: [ styles.Container, styles.backgroundImageContainer ]
        })}
        onClick={undefined}
        content={[
            <$Image key="p5.NativeMobile.Login.image1"
                $widgetId="p5.NativeMobile.Login.image1"
                style={StyleProperty({
                    styles: [ styles.Image, styles.backgroundImage ]
                })}
                source={StaticImageProperty({
                    image: NativeMobile$Image_collection$group_running$jpg
                })}
                onClick={undefined} />
        ]} />,
    <$Container key="p5.NativeMobile.Login.container2"
        $widgetId="p5.NativeMobile.Login.container2"
        style={StyleProperty({
            styles: [ styles.Container, styles.overBackgroundImage ]
        })}
        onClick={undefined}
        content={[
            <$Image key="p5.NativeMobile.Login.image2"
                $widgetId="p5.NativeMobile.Login.image2"
                style={StyleProperty({
                    styles: [ styles.Image, styles.loginLogoImage, styles.spacingOuterBottomSmaller ]
                })}
                source={StaticImageProperty({
                    image: NativeMobile$Image_collection$mendix_logo_tagline_white$png
                })}
                onClick={undefined} />,
            <$Container key="p5.NativeMobile.Login.container4"
                $widgetId="p5.NativeMobile.Login.container4"
                style={StyleProperty({
                    styles: [ styles.Container, styles.spacingInnerTopLarger, styles.spacingInnerBottomLarger ]
                })}
                onClick={undefined}
                content={[
                    <$DataView key="p5.NativeMobile.Login.dataView2"
                        $widgetId="p5.NativeMobile.Login.dataView2"
                        style={StyleProperty({
                            styles: [ styles.DataView, styles.spacingOuterTopMedium ]
                        })}
                        object={NanoflowObjectProperty({
                            source: { "nanoflow": () => require("C:/Users/abc/Documents/Mendix/New folder/deployment/native/nanoflows/NativeMobile.DSS_CreateLoginContext").DSS_CreateLoginContext, "allowedRoles": [ "Anonymous" ] },
                            argMap: {}
                        })}
                        content={[
                            <$TextBox key="p5.NativeMobile.Login.textBox3"
                                $widgetId="p5.NativeMobile.Login.textBox3"
                                style={StyleProperty({
                                    styles: [ styles.TextBox, styles.TextBoxHorizontal, styles.loginTextbox, styles.spacingOuterBottomMedium, styles.textInputCapitalizeNone ]
                                })}
                                onEnter={undefined}
                                onLeave={undefined}
                                formOrientation={"horizontal"}
                                labelWidth={0}
                                inputValue={AttributeProperty({
                                    scope: "p5.NativeMobile.Login.dataView2",
                                    path: "",
                                    entity: "NativeMobile.Login",
                                    attribute: "Username",
                                    onChange: { "type": "doNothing", "argMap": {}, "config": {} },
                                    validation: { "message": t( [ "A valid email address is required." ] ), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "value" }, { "type": "literal", "value": null } ] }, "args": {} } },
                                    formatting: { }
                                })}
                                isPassword={false}
                                placeholder={DynamicTextProperty({
                                    template: { "elements": t( [ [ "Username" ] ] ) }
                                })}
                                label={undefined}
                                maxLength={200}
                                keyboardType={"email-address"}
                                onEnterKeyPress={undefined}
                                autocomplete={true} />,
                            <$TextBox key="p5.NativeMobile.Login.textBox4"
                                $widgetId="p5.NativeMobile.Login.textBox4"
                                style={StyleProperty({
                                    styles: [ styles.TextBox, styles.TextBoxHorizontal, styles.loginTextbox, styles.spacingOuterBottomMedium ]
                                })}
                                onEnter={undefined}
                                onLeave={undefined}
                                formOrientation={"horizontal"}
                                labelWidth={0}
                                inputValue={AttributeProperty({
                                    scope: "p5.NativeMobile.Login.dataView2",
                                    path: "",
                                    entity: "NativeMobile.Login",
                                    attribute: "Password",
                                    onChange: { "type": "doNothing", "argMap": {}, "config": {} },
                                    validation: { "message": t( [ "A password is required." ] ), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "value" }, { "type": "literal", "value": null } ] }, "args": {} } },
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
                            <$Text key="p5.NativeMobile.Login.text6"
                                $widgetId="p5.NativeMobile.Login.text6"
                                style={StyleProperty({
                                    styles: [ styles.Text, styles.textWhite, styles.textSemiBold, styles.spacingOuterBottomMedium, styles.textSmall ]
                                })}
                                text={DynamicTextProperty({
                                    template: { "elements": t( [ [ "Forgot Password?" ] ] ) }
                                })} />,
                            <$ConditionalVisibilityWrapper key="p5.NativeMobile.Login.actionButton2$visibility"
                                $widgetId="p5.NativeMobile.Login.actionButton2$visibility"
                                visible={ExpressionProperty({
                                    expression: { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Anonymous" } ] }, "args": {} }
                                })}
                                contents={[
                                    <$Button key="p5.NativeMobile.Login.actionButton2"
                                        $widgetId="p5.NativeMobile.Login.actionButton2"
                                        style={StyleProperty({
                                            styles: [ styles.ActionButton, styles.loginButton ]
                                        })}
                                        caption={DynamicTextProperty({
                                            template: { "elements": t( [ [ "Login" ] ] ) }
                                        })}
                                        icon={undefined}
                                        onClick={ActionProperty({
                                            action: { "type": "callNanoflow", "argMap": { "Login": { "widget": "p5.NativeMobile.Login.dataView2", "source": "object" } }, "config": { "nanoflow": () => require("C:/Users/abc/Documents/Mendix/New folder/deployment/native/nanoflows/NativeMobile.ACT_SignInUser").ACT_SignInUser, "allowedRoles": [ "Anonymous" ] } },
                                            abortOnServerValidation: false
                                        })}
                                        disabledDuringAction={true} />
                                ]} />,
                            <$Container key="p5.NativeMobile.Login.container3"
                                $widgetId="p5.NativeMobile.Login.container3"
                                style={StyleProperty({
                                    styles: [ styles.Container, styles.flexRow, styles.justifyContentCenter, styles.alignChildrenEnd, styles.spacingInnerTopMedium, styles.spacingInnerBottomMedium ]
                                })}
                                onClick={ActionProperty({
                                    action: { "type": "openPage", "argMap": {}, "config": { "name": "NativeMobile.SignUp", "location": "content", "allowedRoles": [ "Anonymous" ] } },
                                    abortOnServerValidation: false
                                })}
                                content={[
                                    <$Text key="p5.NativeMobile.Login.text4"
                                        $widgetId="p5.NativeMobile.Login.text4"
                                        style={StyleProperty({
                                            styles: [ styles.Text, styles.spacingOuterRightSmaller, styles.textSmall, styles.textWhite ]
                                        })}
                                        text={DynamicTextProperty({
                                            template: { "elements": t( [ [ "Don't have an account yet?" ] ] ) }
                                        })} />,
                                    <$Text key="p5.NativeMobile.Login.text5"
                                        $widgetId="p5.NativeMobile.Login.text5"
                                        style={StyleProperty({
                                            styles: [ styles.Text, styles.textWhite, styles.textSemiBold, styles.textSmall ]
                                        })}
                                        text={DynamicTextProperty({
                                            template: { "elements": t( [ [ "Sign up" ] ] ) }
                                        })} />
                                ]} />
                        ]} />
                ]} />
        ]} />
];

export const $$title = t([
    "Login"
] );

export const $$style = [ styles.Layout, styles.Page ];

export const $$page = () => mainContent(placeholder$Main);

export const $$sidebar = () => sidebar(placeholder$Main);

