import { createElement } from "react";
const React = { createElement };

import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { AttributeProperty } from "mendix/AttributeProperty";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { DynamicImageProperty } from "mendix/DynamicImageProperty";
import { DynamicTextProperty } from "mendix/DynamicTextProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { IconProperty } from "mendix/IconProperty";
import { StaticImageProperty } from "mendix/StaticImageProperty";
import { StyleProperty } from "mendix/StyleProperty";
import { TemplatedWidgetProperty } from "mendix/TemplatedWidgetProperty";

import { Button } from "mendix/Button";
import { ClickableArea } from "mendix/ClickableArea";
import { ConditionalVisibilityWrapper } from "mendix/ConditionalVisibilityWrapper";
import { Container } from "mendix/Container";
import { DataView } from "mendix/DataView";
import { Image } from "mendix/Image";
import { NativeDynamicImage } from "mendix/NativeDynamicImage";
import { NativeList } from "mendix/NativeList";
import { Text } from "mendix/Text";
import { TextBox } from "mendix/TextBox";
import { View } from "mendix/View";
import { asPluginWidgets, t } from "mendix/native";

import { mainContent, sidebar } from "C:/Users/abc/Documents/Mendix/New folder/deployment/native/layouts/Atlas_UI_Resources.NativePhone_Default.js";

import * as styles from "C:/Users/abc/Documents/Mendix/New folder/theme/styles.js";

import Atlas_UI_Resources$Content$user$png from "C:/Users/abc/Documents/Mendix/New folder/deployment/native/img/Atlas_UI_Resources$Content$user.png";
import NativeMobile$Image_collection$mendix_icon_white$png from "C:/Users/abc/Documents/Mendix/New folder/deployment/native/img/NativeMobile$Image_collection$mendix_icon_white.png";

const { $DataView, $Container, $TextBox, $ConditionalVisibilityWrapper, $Button, $NativeList, $ClickableArea, $View, $NativeDynamicImage, $Text, $Image } = asPluginWidgets({ DataView, Container, TextBox, ConditionalVisibilityWrapper, Button, NativeList, ClickableArea, View, NativeDynamicImage, Text, Image });

const placeholder$Main = () => [
    <$DataView key="p3.NativeMobile.Account_View.dataView1"
        $widgetId="p3.NativeMobile.Account_View.dataView1"
        style={StyleProperty({
            styles: [ styles.DataView ]
        })}
        object={AssociationObjectProperty({
            scope: "$pageParameter"
        })}
        content={[
            <$Container key="p3.NativeMobile.Account_View.container1"
                $widgetId="p3.NativeMobile.Account_View.container1"
                style={StyleProperty({
                    styles: [ styles.Container, styles.spacingOuterLeftMedium, styles.spacingOuterRightMedium, styles.spacingOuterTopSmaller ]
                })}
                onClick={undefined}
                content={[
                    <$Container key="p3.NativeMobile.Account_View.container2"
                        $widgetId="p3.NativeMobile.Account_View.container2"
                        style={StyleProperty({
                            styles: [ styles.Container, styles.flexRow, styles.flexWrap, styles.alignChildrenStart ]
                        })}
                        onClick={undefined}
                        content={[
                            <$TextBox key="p3.NativeMobile.Account_View.textBox1"
                                $widgetId="p3.NativeMobile.Account_View.textBox1"
                                style={StyleProperty({
                                    styles: [ styles.TextBox, styles.TextBoxHorizontal, styles.friendsTextbox ]
                                })}
                                onEnter={undefined}
                                onLeave={undefined}
                                formOrientation={"horizontal"}
                                labelWidth={3}
                                inputValue={AttributeProperty({
                                    scope: "p3.NativeMobile.Account_View.dataView1",
                                    path: "",
                                    entity: "NativeMobile.AccountHolder",
                                    attribute: "FriendSearch",
                                    onChange: { "type": "doNothing", "argMap": {}, "config": {} },
                                    validation: null,
                                    formatting: { }
                                })}
                                isPassword={false}
                                placeholder={DynamicTextProperty({
                                    template: { "elements": t( [ [ "Username" ] ] ) }
                                })}
                                label={undefined}
                                maxLength={undefined}
                                keyboardType={"default"}
                                onEnterKeyPress={undefined}
                                autocomplete={true} />,
                            <$ConditionalVisibilityWrapper key="p3.NativeMobile.Account_View.actionButton1$visibility"
                                $widgetId="p3.NativeMobile.Account_View.actionButton1$visibility"
                                visible={ExpressionProperty({
                                    expression: { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                                })}
                                contents={[
                                    <$Button key="p3.NativeMobile.Account_View.actionButton1"
                                        $widgetId="p3.NativeMobile.Account_View.actionButton1"
                                        style={StyleProperty({
                                            styles: [ styles.ActionButton, styles.friendsButton, styles.alignSelfCenter ]
                                        })}
                                        caption={DynamicTextProperty({
                                            template: { "elements": t( [ [] ] ) }
                                        })}
                                        icon={IconProperty({
                                            icon: { "type": "glyph", "iconClass": "glyphicon-search" }
                                        })}
                                        onClick={ActionProperty({
                                            action: { "type": "callNanoflow", "argMap": { "AccountHolder": { "widget": "$pageParameter", "source": "object" } }, "config": { "nanoflow": () => require("C:/Users/abc/Documents/Mendix/New folder/deployment/native/nanoflows/NativeMobile.ACT_User_Search").ACT_User_Search, "allowedRoles": [ "Administrator", "User" ] } },
                                            abortOnServerValidation: false
                                        })}
                                        disabledDuringAction={true} />
                                ]} />
                        ]} />
                ]} />,
            <$ConditionalVisibilityWrapper key="p3.NativeMobile.Account_View.listView1$visibility"
                $widgetId="p3.NativeMobile.Account_View.listView1$visibility"
                visible={ExpressionProperty({
                    expression: { "expr": { "type": "variable", "variable": "currentObject", "path": "Searched" }, "args": { "currentObject": "p3.NativeMobile.Account_View.dataView1" } }
                })}
                contents={[
                    <$NativeList key="p3.NativeMobile.Account_View.listView1"
                        $widgetId="p3.NativeMobile.Account_View.listView1"
                        style={StyleProperty({
                            styles: [ styles.ListView, styles.listItemBorderBottom ]
                        })}
                        listValue={DatabaseObjectListProperty({
                            entity: "Administration.Account",
                            defaultLimit: 3,
                            scope: "p3.NativeMobile.Account_View.dataView1",
                            queryId: "Db8ejWrR/E+9Y3ZBoGaT7g",
                            sort: [],
                            useScope: true,
                            reference: "Administration.FriendSearch_AccountHolder",
                            constraints: []
                        })}
                        itemTemplate={TemplatedWidgetProperty({
                            children: () => [
                                <$ClickableArea key="p3.NativeMobile.Account_View.listView1$item"
                                    $widgetId="p3.NativeMobile.Account_View.listView1$item"
                                    content={[
                                        <$Container key="p3.NativeMobile.Account_View.container4"
                                            $widgetId="p3.NativeMobile.Account_View.container4"
                                            style={StyleProperty({
                                                styles: [ styles.Container, styles.spacingInnerTopMedium, styles.spacingInnerBottomMedium, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium ]
                                            })}
                                            onClick={undefined}
                                            content={[
                                                <$View key="p3.NativeMobile.Account_View.layoutGrid4"
                                                    $widgetId="p3.NativeMobile.Account_View.layoutGrid4"
                                                    style={StyleProperty({
                                                        styles: [ styles.LayoutGrid ]
                                                    })}
                                                    content={[
                                                        <$View key="p3.NativeMobile.Account_View.layoutGrid4$row0"
                                                            $widgetId="p3.NativeMobile.Account_View.layoutGrid4$row0"
                                                            style={StyleProperty({
                                                                styles: [ styles.row, styles.alignChildrenCenter ]
                                                            })}
                                                            content={[
                                                                <$View key="p3.NativeMobile.Account_View.layoutGrid4$row0$column0"
                                                                    $widgetId="p3.NativeMobile.Account_View.layoutGrid4$row0$column0"
                                                                    style={StyleProperty({
                                                                        styles: [ styles.col3 ]
                                                                    })}
                                                                    content={[
                                                                        <$NativeDynamicImage key="p3.NativeMobile.Account_View.image2"
                                                                            $widgetId="p3.NativeMobile.Account_View.image2"
                                                                            style={StyleProperty({
                                                                                styles: [ styles.ImageViewer, styles.avatarSmall ]
                                                                            })}
                                                                            onClick={undefined}
                                                                            source={DynamicImageProperty({
                                                                                scope: "p3.NativeMobile.Account_View.listView1",
                                                                                showAsThumbnail: false,
                                                                                path: "NativeMobile.AccountHolder_Account/NativeMobile.AccountHolder"
                                                                            })}
                                                                            width={0}
                                                                            height={0}
                                                                            placeholder={StaticImageProperty({
                                                                                image: Atlas_UI_Resources$Content$user$png
                                                                            })} />
                                                                    ]} />,
                                                                <$View key="p3.NativeMobile.Account_View.layoutGrid4$row0$column1"
                                                                    $widgetId="p3.NativeMobile.Account_View.layoutGrid4$row0$column1"
                                                                    style={StyleProperty({
                                                                        styles: [ styles.col6 ]
                                                                    })}
                                                                    content={[
                                                                        <$Container key="p3.NativeMobile.Account_View.container7"
                                                                            $widgetId="p3.NativeMobile.Account_View.container7"
                                                                            style={StyleProperty({
                                                                                styles: [ styles.Container, styles.spacingOuterBottomSmallest, styles.justifyContentSpaceBetween, styles.flexWrap ]
                                                                            })}
                                                                            onClick={undefined}
                                                                            content={[
                                                                                <$Text key="p3.NativeMobile.Account_View.text9"
                                                                                    $widgetId="p3.NativeMobile.Account_View.text9"
                                                                                    style={StyleProperty({
                                                                                        styles: [ styles.Text, styles.TextHeading4 ]
                                                                                    })}
                                                                                    text={DynamicTextProperty({
                                                                                        scope: "p3.NativeMobile.Account_View.listView1",
                                                                                        template: { "elements": t( [ [ 1 ] ] ), "parameters": { "1": "Administration.Account/FullName" }, "formats": { "1": t( [ {} ] ) } }
                                                                                    })} />,
                                                                                <$Text key="p3.NativeMobile.Account_View.text10"
                                                                                    $widgetId="p3.NativeMobile.Account_View.text10"
                                                                                    style={StyleProperty({
                                                                                        styles: [ styles.Text, styles.textContrastDefault ]
                                                                                    })}
                                                                                    text={DynamicTextProperty({
                                                                                        scope: "p3.NativeMobile.Account_View.listView1",
                                                                                        template: { "elements": t( [ [ "Total distance: ", 1, " km" ] ] ), "parameters": { "1": "Administration.Account/NativeMobile.AccountHolder_Account/NativeMobile.AccountHolder/TotalDistance" }, "formats": { "1": t( [ { "groupDigits": true, "decimalPrecision": 2 } ] ) } }
                                                                                    })} />
                                                                            ]} />
                                                                    ]} />,
                                                                <$View key="p3.NativeMobile.Account_View.layoutGrid4$row0$column2"
                                                                    $widgetId="p3.NativeMobile.Account_View.layoutGrid4$row0$column2"
                                                                    style={StyleProperty({
                                                                        styles: [ styles.col3 ]
                                                                    })}
                                                                    content={[
                                                                        <$ConditionalVisibilityWrapper key="p3.NativeMobile.Account_View.actionButton2$visibility"
                                                                            $widgetId="p3.NativeMobile.Account_View.actionButton2$visibility"
                                                                            visible={ExpressionProperty({
                                                                                expression: { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                                                                            })}
                                                                            contents={[
                                                                                <$Button key="p3.NativeMobile.Account_View.actionButton2"
                                                                                    $widgetId="p3.NativeMobile.Account_View.actionButton2"
                                                                                    style={StyleProperty({
                                                                                        styles: [ styles.ActionButton ]
                                                                                    })}
                                                                                    caption={DynamicTextProperty({
                                                                                        template: { "elements": t( [ [] ] ) }
                                                                                    })}
                                                                                    icon={IconProperty({
                                                                                        icon: { "type": "glyph", "iconClass": "glyphicon-plus" }
                                                                                    })}
                                                                                    onClick={ActionProperty({
                                                                                        action: { "type": "callNanoflow", "argMap": { "Account_Friend": { "widget": "p3.NativeMobile.Account_View.listView1", "source": "object" }, "AccountHolder": { "widget": "$pageParameter", "source": "object" } }, "config": { "nanoflow": () => require("C:/Users/abc/Documents/Mendix/New folder/deployment/native/nanoflows/NativeMobile.ACT_Friend_Add").ACT_Friend_Add, "allowedRoles": [ "Administrator", "User" ] } },
                                                                                        abortOnServerValidation: false
                                                                                    })}
                                                                                    disabledDuringAction={true} />
                                                                            ]} />
                                                                    ]} />
                                                            ]} />
                                                    ]} />
                                            ]} />
                                    ]}
                                    onClick={undefined} />
                            ]
                        })}
                        pageSize={3}
                        id={DerivedUniqueIdProperty({
                            widgetId: "p3.NativeMobile.Account_View.listView1"
                        })}
                        scrollDirection={"vertical"}
                        numberOfColumns={1}
                        onPullDown={undefined} />
                ]} />,
            <$Container key="p3.NativeMobile.Account_View.container5"
                $widgetId="p3.NativeMobile.Account_View.container5"
                style={StyleProperty({
                    styles: [ styles.Container, styles.spacingOuterLeftMedium, styles.spacingOuterRightMedium ]
                })}
                onClick={undefined}
                content={[
                    <$View key="p3.NativeMobile.Account_View.layoutGrid3"
                        $widgetId="p3.NativeMobile.Account_View.layoutGrid3"
                        style={StyleProperty({
                            styles: [ styles.LayoutGrid, styles.spacingOuterBottomLarger ]
                        })}
                        content={[
                            <$ConditionalVisibilityWrapper key="p3.NativeMobile.Account_View.layoutGrid3$row0$visibility"
                                $widgetId="p3.NativeMobile.Account_View.layoutGrid3$row0$visibility"
                                visible={ExpressionProperty({
                                    expression: { "expr": { "type": "variable", "variable": "currentObject", "path": "NoResultsFound" }, "args": { "currentObject": "p3.NativeMobile.Account_View.dataView1" } }
                                })}
                                contents={[
                                    <$View key="p3.NativeMobile.Account_View.layoutGrid3$row0"
                                        $widgetId="p3.NativeMobile.Account_View.layoutGrid3$row0"
                                        style={StyleProperty({
                                            styles: [ styles.row ]
                                        })}
                                        content={[
                                            <$View key="p3.NativeMobile.Account_View.layoutGrid3$row0$column0"
                                                $widgetId="p3.NativeMobile.Account_View.layoutGrid3$row0$column0"
                                                style={StyleProperty({
                                                    styles: [ styles.col12 ]
                                                })}
                                                content={[
                                                    <$Text key="p3.NativeMobile.Account_View.text2"
                                                        $widgetId="p3.NativeMobile.Account_View.text2"
                                                        style={StyleProperty({
                                                            styles: [ styles.Text, styles.textCenter, styles.spacingOuterBottomMedium ]
                                                        })}
                                                        text={DynamicTextProperty({
                                                            template: { "elements": t( [ [ "Cant find who you're looking for? send them a magic link" ] ] ) }
                                                        })} />
                                                ]} />
                                        ]} />
                                ]} />,
                            <$ConditionalVisibilityWrapper key="p3.NativeMobile.Account_View.layoutGrid3$row1$visibility"
                                $widgetId="p3.NativeMobile.Account_View.layoutGrid3$row1$visibility"
                                visible={ExpressionProperty({
                                    expression: { "expr": { "type": "variable", "variable": "currentObject", "path": "NoResultsFound" }, "args": { "currentObject": "p3.NativeMobile.Account_View.dataView1" } }
                                })}
                                contents={[
                                    <$View key="p3.NativeMobile.Account_View.layoutGrid3$row1"
                                        $widgetId="p3.NativeMobile.Account_View.layoutGrid3$row1"
                                        style={StyleProperty({
                                            styles: [ styles.row ]
                                        })}
                                        content={[
                                            <$View key="p3.NativeMobile.Account_View.layoutGrid3$row1$column0"
                                                $widgetId="p3.NativeMobile.Account_View.layoutGrid3$row1$column0"
                                                style={StyleProperty({
                                                    styles: [ styles.col ]
                                                })}
                                                content={[
                                                    <$Container key="p3.NativeMobile.Account_View.container3"
                                                        $widgetId="p3.NativeMobile.Account_View.container3"
                                                        style={StyleProperty({
                                                            styles: [ styles.Container, styles.flexRow, styles.flexWrap, styles.alignChildrenStart ]
                                                        })}
                                                        onClick={undefined}
                                                        content={[
                                                            <$TextBox key="p3.NativeMobile.Account_View.textBox4"
                                                                $widgetId="p3.NativeMobile.Account_View.textBox4"
                                                                style={StyleProperty({
                                                                    styles: [ styles.TextBox, styles.TextBoxHorizontal, styles.friendsTextbox ]
                                                                })}
                                                                onEnter={undefined}
                                                                onLeave={undefined}
                                                                formOrientation={"horizontal"}
                                                                labelWidth={3}
                                                                inputValue={AttributeProperty({
                                                                    scope: "p3.NativeMobile.Account_View.dataView1",
                                                                    path: "",
                                                                    entity: "NativeMobile.AccountHolder",
                                                                    attribute: "EmailInvite",
                                                                    onChange: { "type": "doNothing", "argMap": {}, "config": {} },
                                                                    validation: null,
                                                                    formatting: { }
                                                                })}
                                                                isPassword={false}
                                                                placeholder={DynamicTextProperty({
                                                                    template: { "elements": t( [ [ "Email Address" ] ] ) }
                                                                })}
                                                                label={undefined}
                                                                maxLength={200}
                                                                keyboardType={"default"}
                                                                onEnterKeyPress={undefined}
                                                                autocomplete={true} />,
                                                            <$ConditionalVisibilityWrapper key="p3.NativeMobile.Account_View.actionButton5$visibility"
                                                                $widgetId="p3.NativeMobile.Account_View.actionButton5$visibility"
                                                                visible={ExpressionProperty({
                                                                    expression: { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                                                                })}
                                                                contents={[
                                                                    <$Button key="p3.NativeMobile.Account_View.actionButton5"
                                                                        $widgetId="p3.NativeMobile.Account_View.actionButton5"
                                                                        style={StyleProperty({
                                                                            styles: [ styles.ActionButton, styles.friendsButton ]
                                                                        })}
                                                                        caption={DynamicTextProperty({
                                                                            template: { "elements": t( [ [] ] ) }
                                                                        })}
                                                                        icon={IconProperty({
                                                                            icon: { "type": "glyph", "iconClass": "glyphicon-send" }
                                                                        })}
                                                                        onClick={ActionProperty({
                                                                            action: { "type": "callNanoflow", "argMap": { "AccountHolder": { "widget": "$pageParameter", "source": "object" } }, "config": { "nanoflow": () => require("C:/Users/abc/Documents/Mendix/New folder/deployment/native/nanoflows/NativeMobile.ACT_SendLink").ACT_SendLink, "allowedRoles": [ "Administrator", "User" ] } },
                                                                            abortOnServerValidation: false
                                                                        })}
                                                                        disabledDuringAction={true} />
                                                                ]} />
                                                        ]} />
                                                ]} />
                                        ]} />
                                ]} />
                        ]} />
                ]} />
        ]} />
];

export const placeholder$Header = () => [
    <$Image key="p3.NativeMobile.Account_View.image3"
        $widgetId="p3.NativeMobile.Account_View.image3"
        style={StyleProperty({
            styles: [ styles.Image, styles.logoIconImage, styles.spacingOuterRightSmaller ]
        })}
        source={StaticImageProperty({
            image: NativeMobile$Image_collection$mendix_icon_white$png
        })}
        onClick={undefined} />
];

export const $$title = t([
    "Find Friends"
] );

export const $$style = [ styles.Layout, styles.Page ];

export const $$page = () => mainContent(placeholder$Main);

export const $$sidebar = () => sidebar(placeholder$Main);

