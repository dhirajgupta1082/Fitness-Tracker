import { createElement } from "react";
const React = { createElement };

import { ActionProperty } from "mendix/ActionProperty";
import { DynamicImageProperty } from "mendix/DynamicImageProperty";
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
import { NativeDynamicImage } from "mendix/NativeDynamicImage";
import { Text } from "mendix/Text";
import { View } from "mendix/View";
import { asPluginWidgets, t } from "mendix/native";

import { mainContent, sidebar } from "C:/Users/abc/Documents/Mendix/New folder/deployment/native/layouts/Atlas_UI_Resources.NativePhone_Default.js";

import * as styles from "C:/Users/abc/Documents/Mendix/New folder/theme/styles.js";

import NativeMobile$Image_collection$sneakers$svg from "C:/Users/abc/Documents/Mendix/New folder/deployment/native/img/NativeMobile$Image_collection$sneakers.svg";
import NativeMobile$Image_collection$greeting$svg from "C:/Users/abc/Documents/Mendix/New folder/deployment/native/img/NativeMobile$Image_collection$greeting.svg";
import NativeMobile$Image_collection$mendix_icon_white$png from "C:/Users/abc/Documents/Mendix/New folder/deployment/native/img/NativeMobile$Image_collection$mendix_icon_white.png";

const { $DataView, $Container, $NativeDynamicImage, $ConditionalVisibilityWrapper, $Button, $Text, $View, $Image } = asPluginWidgets({ DataView, Container, NativeDynamicImage, ConditionalVisibilityWrapper, Button, Text, View, Image });

const placeholder$Main = () => [
    <$DataView key="p4.NativeMobile.UserProfile.dataView1"
        $widgetId="p4.NativeMobile.UserProfile.dataView1"
        style={StyleProperty({
            styles: [ styles.DataView ]
        })}
        object={NanoflowObjectProperty({
            source: { "nanoflow": () => require("C:/Users/abc/Documents/Mendix/New folder/deployment/native/nanoflows/NativeMobile.DSS_GetAccount").DSS_GetAccount, "allowedRoles": [ "Administrator", "User" ] },
            argMap: {}
        })}
        content={[
            <$DataView key="p4.NativeMobile.UserProfile.dataView2"
                $widgetId="p4.NativeMobile.UserProfile.dataView2"
                style={StyleProperty({
                    styles: [ styles.DataView ]
                })}
                object={NanoflowObjectProperty({
                    source: { "nanoflow": () => require("C:/Users/abc/Documents/Mendix/New folder/deployment/native/nanoflows/NativeMobile.DS_GetAccountHolder").DS_GetAccountHolder, "allowedRoles": [ "Administrator", "User" ] },
                    argMap: { "Account": { "widget": "p4.NativeMobile.UserProfile.dataView1", "source": "object" } },
                    scope: "p4.NativeMobile.UserProfile.dataView1"
                })}
                content={[
                    <$Container key="p4.NativeMobile.UserProfile.container1"
                        $widgetId="p4.NativeMobile.UserProfile.container1"
                        style={StyleProperty({
                            styles: [ styles.Container, styles.flexRow ]
                        })}
                        onClick={undefined}
                        content={[
                            <$Container key="p4.NativeMobile.UserProfile.container5"
                                $widgetId="p4.NativeMobile.UserProfile.container5"
                                style={StyleProperty({
                                    styles: [ styles.Container, styles.alignSelfCenter, styles.alignChildrenCenter, styles.justifyContentCenter ]
                                })}
                                onClick={undefined}
                                content={[
                                    <$NativeDynamicImage key="p4.NativeMobile.UserProfile.imageViewer1"
                                        $widgetId="p4.NativeMobile.UserProfile.imageViewer1"
                                        style={StyleProperty({
                                            styles: [ styles.ImageViewer, styles.avatarLarge ]
                                        })}
                                        onClick={undefined}
                                        source={DynamicImageProperty({
                                            scope: "p4.NativeMobile.UserProfile.dataView2",
                                            showAsThumbnail: false
                                        })}
                                        width={100}
                                        height={100} />,
                                    <$ConditionalVisibilityWrapper key="p4.NativeMobile.UserProfile.actionButton1$visibility"
                                        $widgetId="p4.NativeMobile.UserProfile.actionButton1$visibility"
                                        visible={ExpressionProperty({
                                            expression: { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                                        })}
                                        contents={[
                                            <$Button key="p4.NativeMobile.UserProfile.actionButton1"
                                                $widgetId="p4.NativeMobile.UserProfile.actionButton1"
                                                style={StyleProperty({
                                                    styles: [ styles.ActionButton, styles.spacingOuterTopSmaller ]
                                                })}
                                                caption={DynamicTextProperty({
                                                    template: { "elements": t( [ [ "Update profile Picture" ] ] ) }
                                                })}
                                                icon={undefined}
                                                onClick={ActionProperty({
                                                    action: { "type": "callNanoflow", "argMap": { "AccountHolder": { "widget": "p4.NativeMobile.UserProfile.dataView2", "source": "object" }, "Account": { "widget": "p4.NativeMobile.UserProfile.dataView1", "source": "object" } }, "config": { "nanoflow": () => require("C:/Users/abc/Documents/Mendix/New folder/deployment/native/nanoflows/NativeMobile.ACT_UpdateProfilePic").ACT_UpdateProfilePic, "allowedRoles": [ "Administrator", "User" ] } },
                                                    abortOnServerValidation: false
                                                })}
                                                disabledDuringAction={true} />
                                        ]} />
                                ]} />,
                            <$Container key="p4.NativeMobile.UserProfile.container2"
                                $widgetId="p4.NativeMobile.UserProfile.container2"
                                style={StyleProperty({
                                    styles: [ styles.Container, styles.spacingInnerTopMedium, styles.spacingInnerBottomMedium, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium, styles.justifyContentCenter ]
                                })}
                                onClick={undefined}
                                content={[
                                    <$Text key="p4.NativeMobile.UserProfile.text1"
                                        $widgetId="p4.NativeMobile.UserProfile.text1"
                                        style={StyleProperty({
                                            styles: [ styles.Text, styles.TextHeading3 ]
                                        })}
                                        text={DynamicTextProperty({
                                            scope: "p4.NativeMobile.UserProfile.dataView2",
                                            template: { "elements": t( [ [ 1 ] ] ), "parameters": { "1": "NativeMobile.AccountHolder/NativeMobile.AccountHolder_Account/Administration.Account/FullName" }, "formats": { "1": t( [ {} ] ) } }
                                        })} />,
                                    <$Text key="p4.NativeMobile.UserProfile.text2"
                                        $widgetId="p4.NativeMobile.UserProfile.text2"
                                        style={StyleProperty({
                                            styles: [ styles.Text, styles.textContrastLow, styles.spacingOuterBottomSmaller, styles.textLarge, styles.textSemiBold ]
                                        })}
                                        text={DynamicTextProperty({
                                            scope: "p4.NativeMobile.UserProfile.dataView2",
                                            template: { "elements": t( [ [ 1 ] ] ), "parameters": { "1": "NativeMobile.AccountHolder/NativeMobile.AccountHolder_Account/Administration.Account/Email" }, "formats": { "1": t( [ {} ] ) } }
                                        })} />
                                ]} />
                        ]} />,
                    <$View key="p4.NativeMobile.UserProfile.layoutGrid1"
                        $widgetId="p4.NativeMobile.UserProfile.layoutGrid1"
                        style={StyleProperty({
                            styles: [ styles.LayoutGrid, styles.spacingOuterTopLarger, styles.spacingOuterBottomMedium ]
                        })}
                        content={[
                            <$View key="p4.NativeMobile.UserProfile.layoutGrid1$row0"
                                $widgetId="p4.NativeMobile.UserProfile.layoutGrid1$row0"
                                style={StyleProperty({
                                    styles: [ styles.row ]
                                })}
                                content={[
                                    <$View key="p4.NativeMobile.UserProfile.layoutGrid1$row0$column0"
                                        $widgetId="p4.NativeMobile.UserProfile.layoutGrid1$row0$column0"
                                        style={StyleProperty({
                                            styles: [ styles.col ]
                                        })}
                                        content={[
                                            <$Container key="p4.NativeMobile.UserProfile.container6"
                                                $widgetId="p4.NativeMobile.UserProfile.container6"
                                                style={StyleProperty({
                                                    styles: [ styles.Container, styles.profileInfoContainer ]
                                                })}
                                                onClick={undefined}
                                                content={[
                                                    <$Image key="p4.NativeMobile.UserProfile.image1"
                                                        $widgetId="p4.NativeMobile.UserProfile.image1"
                                                        style={StyleProperty({
                                                            styles: [ styles.Image, styles.profilePageImage ]
                                                        })}
                                                        source={StaticImageProperty({
                                                            image: NativeMobile$Image_collection$sneakers$svg
                                                        })}
                                                        onClick={undefined} />,
                                                    <$Text key="p4.NativeMobile.UserProfile.text15"
                                                        $widgetId="p4.NativeMobile.UserProfile.text15"
                                                        style={StyleProperty({
                                                            styles: [ styles.Text, styles.TextHeading4, styles.textCenter, styles.textWhite ]
                                                        })}
                                                        text={DynamicTextProperty({
                                                            template: { "elements": t( [ [ "Total Runs" ] ] ) }
                                                        })} />,
                                                    <$Text key="p4.NativeMobile.UserProfile.text16"
                                                        $widgetId="p4.NativeMobile.UserProfile.text16"
                                                        style={StyleProperty({
                                                            styles: [ styles.Text, styles.TextHeading3, styles.textCenter, styles.textBold, styles.spacingOuterTopSmallest, styles.spacingOuterBottomSmallest, styles.textWhite ]
                                                        })}
                                                        text={DynamicTextProperty({
                                                            scope: "p4.NativeMobile.UserProfile.dataView2",
                                                            template: { "elements": t( [ [ 1 ] ] ), "parameters": { "1": "NativeMobile.AccountHolder/TotalRuns" }, "formats": { "1": t( [ { "groupDigits": false } ] ) } }
                                                        })} />
                                                ]} />
                                        ]} />,
                                    <$View key="p4.NativeMobile.UserProfile.layoutGrid1$row0$column1"
                                        $widgetId="p4.NativeMobile.UserProfile.layoutGrid1$row0$column1"
                                        style={StyleProperty({
                                            styles: [ styles.col ]
                                        })}
                                        content={[
                                            <$Container key="p4.NativeMobile.UserProfile.container7"
                                                $widgetId="p4.NativeMobile.UserProfile.container7"
                                                style={StyleProperty({
                                                    styles: [ styles.Container, styles.profileInfoContainer ]
                                                })}
                                                onClick={undefined}
                                                content={[
                                                    <$Image key="p4.NativeMobile.UserProfile.image3"
                                                        $widgetId="p4.NativeMobile.UserProfile.image3"
                                                        style={StyleProperty({
                                                            styles: [ styles.Image, styles.profilePageImage ]
                                                        })}
                                                        source={StaticImageProperty({
                                                            image: NativeMobile$Image_collection$greeting$svg
                                                        })}
                                                        onClick={undefined} />,
                                                    <$Text key="p4.NativeMobile.UserProfile.text17"
                                                        $widgetId="p4.NativeMobile.UserProfile.text17"
                                                        style={StyleProperty({
                                                            styles: [ styles.Text, styles.TextHeading4, styles.textCenter, styles.textWhite ]
                                                        })}
                                                        text={DynamicTextProperty({
                                                            template: { "elements": t( [ [ "Total Friends" ] ] ) }
                                                        })} />,
                                                    <$Text key="p4.NativeMobile.UserProfile.text18"
                                                        $widgetId="p4.NativeMobile.UserProfile.text18"
                                                        style={StyleProperty({
                                                            styles: [ styles.Text, styles.TextHeading3, styles.textCenter, styles.textBold, styles.spacingOuterTopSmallest, styles.spacingOuterBottomSmallest, styles.textWhite ]
                                                        })}
                                                        text={DynamicTextProperty({
                                                            scope: "p4.NativeMobile.UserProfile.dataView2",
                                                            template: { "elements": t( [ [ 1 ] ] ), "parameters": { "1": "NativeMobile.AccountHolder/TotalFriends" }, "formats": { "1": t( [ { "groupDigits": false } ] ) } }
                                                        })} />
                                                ]} />
                                        ]} />
                                ]} />
                        ]} />
                ]} />,
            <$ConditionalVisibilityWrapper key="p4.NativeMobile.UserProfile.actionButton2$visibility"
                $widgetId="p4.NativeMobile.UserProfile.actionButton2$visibility"
                visible={ExpressionProperty({
                    expression: { "expr": { "type": "function", "name": "_isNamedUser", "parameters": [] }, "args": {} }
                })}
                contents={[
                    <$Button key="p4.NativeMobile.UserProfile.actionButton2"
                        $widgetId="p4.NativeMobile.UserProfile.actionButton2"
                        style={StyleProperty({
                            styles: [ styles.ActionButton, styles.btnLarge ]
                        })}
                        caption={DynamicTextProperty({
                            template: { "elements": t( [ [ "Sign out" ] ] ) }
                        })}
                        icon={undefined}
                        onClick={ActionProperty({
                            action: { "type": "signOut", "argMap": {}, "config": { "namedUser": true } },
                            abortOnServerValidation: false
                        })}
                        disabledDuringAction={true} />
                ]} />
        ]} />
];

export const placeholder$Header = () => [
    <$Image key="p4.NativeMobile.UserProfile.image2"
        $widgetId="p4.NativeMobile.UserProfile.image2"
        style={StyleProperty({
            styles: [ styles.Image, styles.logoIconImage, styles.spacingOuterRightSmaller ]
        })}
        source={StaticImageProperty({
            image: NativeMobile$Image_collection$mendix_icon_white$png
        })}
        onClick={undefined} />
];

export const $$title = t([
    "Account Overview"
] );

export const $$style = [ styles.Layout, styles.Page, styles.spacingInnerTopLarger, styles.spacingInnerBottomLarger, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium, styles.backgroundPrimary ];

export const $$page = () => mainContent(placeholder$Main);

export const $$sidebar = () => sidebar(placeholder$Main);

