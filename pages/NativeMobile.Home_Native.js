import { createElement } from "react";
const React = { createElement };

import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { DynamicImageProperty } from "mendix/DynamicImageProperty";
import { DynamicTextProperty } from "mendix/DynamicTextProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { IconProperty } from "mendix/IconProperty";
import { NanoflowObjectListProperty } from "mendix/NanoflowObjectListProperty";
import { NanoflowObjectProperty } from "mendix/NanoflowObjectProperty";
import { StaticImageProperty } from "mendix/StaticImageProperty";
import { StyleProperty } from "mendix/StyleProperty";
import { TemplatedWidgetProperty } from "mendix/TemplatedWidgetProperty";

import { Button } from "mendix/Button";
import { ClickableArea } from "mendix/ClickableArea";
import { com_mendix_widget_native_appevents_AppEvents } from "externalWidgets";
import { com_mendix_widget_native_bottomsheet_BottomSheet } from "externalWidgets";
import { com_mendix_widget_native_carousel_Carousel } from "externalWidgets";
import { com_mendix_widget_native_floatingactionbutton_FloatingActionButton } from "externalWidgets";
import { com_mendix_widget_native_popupmenu_PopupMenu } from "externalWidgets";
import { ConditionalVisibilityWrapper } from "mendix/ConditionalVisibilityWrapper";
import { Container } from "mendix/Container";
import { DataView } from "mendix/DataView";
import { Image } from "mendix/Image";
import { NativeDynamicImage } from "mendix/NativeDynamicImage";
import { NativeList } from "mendix/NativeList";
import { ScrollContainer } from "mendix/ScrollContainer";
import { TabContainer } from "mendix/TabContainer";
import { Text } from "mendix/Text";
import { View } from "mendix/View";
import { asPluginWidgets, t } from "mendix/native";

import { mainContent, sidebar } from "C:/Users/abc/Documents/Mendix/New folder/deployment/native/layouts/Atlas_UI_Resources.NativePhone_Default_2.js";

import * as styles from "C:/Users/abc/Documents/Mendix/New folder/theme/styles.js";

import NativeMobile$Image_collection$group_running$jpg from "C:/Users/abc/Documents/Mendix/New folder/deployment/native/img/NativeMobile$Image_collection$group_running.jpg";
import NativeMobile$Image_collection$running_shoes$svg from "C:/Users/abc/Documents/Mendix/New folder/deployment/native/img/NativeMobile$Image_collection$running_shoes.svg";
import NativeMobile$Image_collection$running$jpg from "C:/Users/abc/Documents/Mendix/New folder/deployment/native/img/NativeMobile$Image_collection$running.jpg";
import NativeMobile$Image_collection$trophy$svg from "C:/Users/abc/Documents/Mendix/New folder/deployment/native/img/NativeMobile$Image_collection$trophy.svg";
import Atlas_UI_Resources$Content$user$png from "C:/Users/abc/Documents/Mendix/New folder/deployment/native/img/Atlas_UI_Resources$Content$user.png";
import NativeMobile$Image_collection$_1st_medal$png from "C:/Users/abc/Documents/Mendix/New folder/deployment/native/img/NativeMobile$Image_collection$_1st_medal.png";
import NativeMobile$Image_collection$_2nd_medal$png from "C:/Users/abc/Documents/Mendix/New folder/deployment/native/img/NativeMobile$Image_collection$_2nd_medal.png";
import NativeMobile$Image_collection$_3rd_medal$png from "C:/Users/abc/Documents/Mendix/New folder/deployment/native/img/NativeMobile$Image_collection$_3rd_medal.png";

const { $com_mendix_widget_native_appevents_AppEvents, $DataView, $TabContainer, $com_mendix_widget_native_carousel_Carousel, $Container, $NativeDynamicImage, $Text, $Image, $ConditionalVisibilityWrapper, $Button, $com_mendix_widget_native_floatingactionbutton_FloatingActionButton, $NativeList, $ClickableArea, $ScrollContainer, $View, $com_mendix_widget_native_bottomsheet_BottomSheet, $com_mendix_widget_native_popupmenu_PopupMenu } = asPluginWidgets({ com_mendix_widget_native_appevents_AppEvents, DataView, TabContainer, com_mendix_widget_native_carousel_Carousel, Container, NativeDynamicImage, Text, Image, ConditionalVisibilityWrapper, Button, com_mendix_widget_native_floatingactionbutton_FloatingActionButton, NativeList, ClickableArea, ScrollContainer, View, com_mendix_widget_native_bottomsheet_BottomSheet, com_mendix_widget_native_popupmenu_PopupMenu });

const placeholder$Main = () => [
    <$com_mendix_widget_native_appevents_AppEvents key="p0.NativeMobile.Home_Native.appEvents1"
        $widgetId="p0.NativeMobile.Home_Native.appEvents1"
        onLoadAction={ActionProperty({
            action: { "type": "synchronize", "argMap": {}, "config": {} },
            abortOnServerValidation: false
        })}
        onResumeAction={ActionProperty({
            action: { "type": "synchronize", "argMap": {}, "config": {} },
            abortOnServerValidation: false
        })}
        onResumeTimeout={0}
        onOnlineAction={ActionProperty({
            action: { "type": "synchronize", "argMap": {}, "config": {} },
            abortOnServerValidation: false
        })}
        onOnlineTimeout={5}
        onOfflineAction={undefined}
        onOfflineTimeout={5}
        timerType={"interval"}
        delayTime={120}
        onTimeoutAction={ActionProperty({
            action: { "type": "synchronize", "argMap": {}, "config": {} },
            abortOnServerValidation: false
        })}
        style={StyleProperty({
            styles: [ styles.com_mendix_widget_native_appevents_AppEvents ]
        })} />,
    <$DataView key="p0.NativeMobile.Home_Native.dataView1"
        $widgetId="p0.NativeMobile.Home_Native.dataView1"
        style={StyleProperty({
            styles: [ styles.DataView ]
        })}
        object={NanoflowObjectProperty({
            source: { "nanoflow": () => require("C:/Users/abc/Documents/Mendix/New folder/deployment/native/nanoflows/NativeMobile.DSS_GetAccount").DSS_GetAccount, "allowedRoles": [ "Administrator", "User" ] },
            argMap: {}
        })}
        content={[
            <$TabContainer key="p0.NativeMobile.Home_Native.tabContainer1"
                $widgetId="p0.NativeMobile.Home_Native.tabContainer1"
                style={StyleProperty({
                    styles: [ styles.TabContainer, styles.homeTabs ]
                })}
                pages={[
                    {
                        caption: DynamicTextProperty({
                            template: { "elements": t( [ [ "Overview" ] ] ) }
                        }),
                        isDefault: true,
                        name: "tabPage1",
                        page: [
                            <$com_mendix_widget_native_carousel_Carousel key="p0.NativeMobile.Home_Native.carousel1"
                                $widgetId="p0.NativeMobile.Home_Native.carousel1"
                                contentSource={DatabaseObjectListProperty({
                                    entity: "NativeMobile.HomePageImages",
                                    scope: "p0.NativeMobile.Home_Native.dataView1",
                                    queryId: "/j+c3AokhEWdJozMvtvvYA",
                                    sort: [
                                        [
                                            "createdDate",
                                            "asc"
                                        ]
                                    ],
                                    useScope: false,
                                    constraints: []
                                })}
                                content={TemplatedWidgetProperty({
                                    children: () => [
                                        <$Container key="p0.NativeMobile.Home_Native.container1"
                                            $widgetId="p0.NativeMobile.Home_Native.container1"
                                            style={StyleProperty({
                                                styles: [ styles.Container, styles.cardCarousel ]
                                            })}
                                            onClick={undefined}
                                            content={[
                                                <$NativeDynamicImage key="p0.NativeMobile.Home_Native.image3"
                                                    $widgetId="p0.NativeMobile.Home_Native.image3"
                                                    style={StyleProperty({
                                                        styles: [ styles.ImageViewer, styles.cardImageFull, styles.cardCarouselImage ]
                                                    })}
                                                    onClick={undefined}
                                                    source={DynamicImageProperty({
                                                        scope: "p0.NativeMobile.Home_Native.carousel1",
                                                        showAsThumbnail: false
                                                    })}
                                                    width={0}
                                                    height={0}
                                                    placeholder={StaticImageProperty({
                                                        image: NativeMobile$Image_collection$group_running$jpg
                                                    })} />,
                                                <$Container key="p0.NativeMobile.Home_Native.container2"
                                                    $widgetId="p0.NativeMobile.Home_Native.container2"
                                                    style={StyleProperty({
                                                        styles: [ styles.Container, styles.cardBody, styles.spacingInnerTopMedium, styles.spacingInnerBottomMedium, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium ]
                                                    })}
                                                    onClick={undefined}
                                                    content={[
                                                        <$Text key="p0.NativeMobile.Home_Native.text1"
                                                            $widgetId="p0.NativeMobile.Home_Native.text1"
                                                            style={StyleProperty({
                                                                styles: [ styles.Text, styles.TextHeading3, styles.cardCarouselText, styles.textWhite ]
                                                            })}
                                                            text={DynamicTextProperty({
                                                                scope: "p0.NativeMobile.Home_Native.carousel1",
                                                                template: { "elements": t( [ [ 1 ] ] ), "parameters": { "1": "NativeMobile.HomePageImages/Title" }, "formats": { "1": t( [ {} ] ) } }
                                                            })} />,
                                                        <$Text key="p0.NativeMobile.Home_Native.text2"
                                                            $widgetId="p0.NativeMobile.Home_Native.text2"
                                                            style={StyleProperty({
                                                                styles: [ styles.Text, styles.cardCarouselText, styles.textWhite, styles.textLarge ]
                                                            })}
                                                            text={DynamicTextProperty({
                                                                scope: "p0.NativeMobile.Home_Native.carousel1",
                                                                template: { "elements": t( [ [ 1 ] ] ), "parameters": { "1": "NativeMobile.HomePageImages/Description" }, "formats": { "1": t( [ {} ] ) } }
                                                            })} />
                                                    ]} />
                                            ]} />
                                    ]
                                })}
                                layout={"fullWidth"}
                                showPagination={true}
                                activeSlideAlignment={"start"}
                                style={StyleProperty({
                                    styles: [ styles.com_mendix_widget_native_carousel_Carousel ]
                                })} />,
                            <$Container key="p0.NativeMobile.Home_Native.container10"
                                $widgetId="p0.NativeMobile.Home_Native.container10"
                                style={StyleProperty({
                                    styles: [ styles.Container, styles.backgroundPrimary ]
                                })}
                                onClick={undefined}
                                content={[
                                    <$Image key="p0.NativeMobile.Home_Native.image1"
                                        $widgetId="p0.NativeMobile.Home_Native.image1"
                                        style={StyleProperty({
                                            styles: [ styles.Image, styles.runningShoeImage, styles.spacingOuterTopMedium, styles.spacingOuterBottomSmaller ]
                                        })}
                                        source={StaticImageProperty({
                                            image: NativeMobile$Image_collection$running_shoes$svg
                                        })}
                                        onClick={undefined} />,
                                    <$ConditionalVisibilityWrapper key="p0.NativeMobile.Home_Native.actionButton1$visibility"
                                        $widgetId="p0.NativeMobile.Home_Native.actionButton1$visibility"
                                        visible={ExpressionProperty({
                                            expression: { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                                        })}
                                        contents={[
                                            <$Button key="p0.NativeMobile.Home_Native.actionButton1"
                                                $widgetId="p0.NativeMobile.Home_Native.actionButton1"
                                                style={StyleProperty({
                                                    styles: [ styles.ActionButton, styles.btnLarge, styles.ctaButton, styles.alignSelfCenter, styles.spacingOuterBottomMedium, styles.spacingOuterLeftMedium, styles.spacingOuterRightMedium ]
                                                })}
                                                caption={DynamicTextProperty({
                                                    template: { "elements": t( [ [ "Start Run" ] ] ) }
                                                })}
                                                icon={IconProperty({
                                                    icon: { "type": "glyph", "iconClass": "glyphicon-flash" }
                                                })}
                                                onClick={ActionProperty({
                                                    action: { "type": "callNanoflow", "argMap": { "Account": { "widget": "p0.NativeMobile.Home_Native.dataView1", "source": "object" } }, "config": { "nanoflow": () => require("C:/Users/abc/Documents/Mendix/New folder/deployment/native/nanoflows/NativeMobile.ACT_NewRun").ACT_NewRun, "allowedRoles": [ "Administrator", "User" ] } },
                                                    abortOnServerValidation: false
                                                })}
                                                disabledDuringAction={true} />
                                        ]} />
                                ]} />,
                            <$DataView key="p0.NativeMobile.Home_Native.dataView4"
                                $widgetId="p0.NativeMobile.Home_Native.dataView4"
                                style={StyleProperty({
                                    styles: [ styles.DataView, styles.spacingOuterLeftMedium, styles.spacingOuterRightMedium ]
                                })}
                                object={NanoflowObjectProperty({
                                    source: { "nanoflow": () => require("C:/Users/abc/Documents/Mendix/New folder/deployment/native/nanoflows/NativeMobile.DS_GetLastRUn").DS_GetLastRUn, "allowedRoles": [ "Administrator", "User" ] },
                                    argMap: { "Account": { "widget": "p0.NativeMobile.Home_Native.dataView1", "source": "object" } },
                                    scope: "p0.NativeMobile.Home_Native.dataView1"
                                })}
                                content={[
                                    <$ConditionalVisibilityWrapper key="p0.NativeMobile.Home_Native.container12$visibility"
                                        $widgetId="p0.NativeMobile.Home_Native.container12$visibility"
                                        visible={ExpressionProperty({
                                            expression: { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "currentObject" }, { "type": "literal", "value": null } ] }, "args": { "currentObject": "p0.NativeMobile.Home_Native.dataView4" } }
                                        })}
                                        contents={[
                                            <$Container key="p0.NativeMobile.Home_Native.container12"
                                                $widgetId="p0.NativeMobile.Home_Native.container12"
                                                style={StyleProperty({
                                                    styles: [ styles.Container, styles.cardFullWidthContainer ]
                                                })}
                                                onClick={undefined}
                                                content={[
                                                    <$DataView key="p0.NativeMobile.Home_Native.dataView8"
                                                        $widgetId="p0.NativeMobile.Home_Native.dataView8"
                                                        style={StyleProperty({
                                                            styles: [ styles.DataView, styles.thumbnail ]
                                                        })}
                                                        object={NanoflowObjectProperty({
                                                            source: { "nanoflow": () => require("C:/Users/abc/Documents/Mendix/New folder/deployment/native/nanoflows/NativeMobile.DS_GetLastRunImage").DS_GetLastRunImage, "allowedRoles": [ "Administrator", "User" ] },
                                                            argMap: { "Run": { "widget": "p0.NativeMobile.Home_Native.dataView4", "source": "object" } },
                                                            scope: "p0.NativeMobile.Home_Native.dataView4"
                                                        })}
                                                        content={[
                                                            <$NativeDynamicImage key="p0.NativeMobile.Home_Native.image11"
                                                                $widgetId="p0.NativeMobile.Home_Native.image11"
                                                                style={StyleProperty({
                                                                    styles: [ styles.ImageViewer, styles.thumbnail, styles.cardFullWidthImage ]
                                                                })}
                                                                onClick={undefined}
                                                                source={DynamicImageProperty({
                                                                    scope: "p0.NativeMobile.Home_Native.dataView8",
                                                                    showAsThumbnail: false
                                                                })}
                                                                width={0}
                                                                height={0}
                                                                placeholder={StaticImageProperty({
                                                                    image: NativeMobile$Image_collection$running$jpg
                                                                })} />
                                                        ]} />,
                                                    <$Container key="p0.NativeMobile.Home_Native.container14"
                                                        $widgetId="p0.NativeMobile.Home_Native.container14"
                                                        style={StyleProperty({
                                                            styles: [ styles.Container, styles.cardTextbox ]
                                                        })}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Text key="p0.NativeMobile.Home_Native.text17"
                                                                $widgetId="p0.NativeMobile.Home_Native.text17"
                                                                style={StyleProperty({
                                                                    styles: [ styles.Text, styles.TextHeading3, styles.textWhite ]
                                                                })}
                                                                text={DynamicTextProperty({
                                                                    scope: "p0.NativeMobile.Home_Native.dataView4",
                                                                    template: { "elements": t( [ [ "Last Run : ", 1 ] ] ), "parameters": { "1": "NativeMobile.Run/Distance" }, "formats": { "1": t( [ { "groupDigits": true, "decimalPrecision": 2 } ] ) } }
                                                                })} />,
                                                            <$Text key="p0.NativeMobile.Home_Native.text20"
                                                                $widgetId="p0.NativeMobile.Home_Native.text20"
                                                                style={StyleProperty({
                                                                    styles: [ styles.Text, styles.spacingOuterBottomSmaller, styles.textLarge, styles.textSemiBold, styles.textWhite ]
                                                                })}
                                                                text={DynamicTextProperty({
                                                                    scope: "p0.NativeMobile.Home_Native.dataView4",
                                                                    template: { "elements": t( [ [ "Duration: ", 1 ] ] ), "parameters": { "1": "NativeMobile.Run/Duration" }, "formats": { "1": t( [ {} ] ) } }
                                                                })} />,
                                                            <$Text key="p0.NativeMobile.Home_Native.text21"
                                                                $widgetId="p0.NativeMobile.Home_Native.text21"
                                                                style={StyleProperty({
                                                                    styles: [ styles.Text, styles.spacingOuterTopSmaller, styles.textWhite ]
                                                                })}
                                                                text={DynamicTextProperty({
                                                                    template: { "elements": t( [ [ "Finished at:" ] ] ) }
                                                                })} />,
                                                            <$Text key="p0.NativeMobile.Home_Native.text22"
                                                                $widgetId="p0.NativeMobile.Home_Native.text22"
                                                                style={StyleProperty({
                                                                    styles: [ styles.Text, styles.textWhite ]
                                                                })}
                                                                text={DynamicTextProperty({
                                                                    scope: "p0.NativeMobile.Home_Native.dataView4",
                                                                    template: { "elements": t( [ [ 1 ] ] ), "parameters": { "1": "NativeMobile.Run/EndTime" }, "formats": { "1": t( [ { "type": "datetime" } ] ) } }
                                                                })} />
                                                        ]} />
                                                ]} />
                                        ]} />
                                ]} />
                        ]
                    },
                    {
                        caption: DynamicTextProperty({
                            template: { "elements": t( [ [ "Runs" ] ] ) }
                        }),
                        isDefault: false,
                        name: "tabPage2",
                        page: [
                            <$com_mendix_widget_native_floatingactionbutton_FloatingActionButton key="p0.NativeMobile.Home_Native.floatingActionButton1"
                                $widgetId="p0.NativeMobile.Home_Native.floatingActionButton1"
                                icon={IconProperty({
                                    icon: { "type": "glyph", "iconClass": "glyphicon-flash" }
                                })}
                                iconActive={undefined}
                                horizontalPosition={"right"}
                                verticalPosition={"bottom"}
                                onClick={ActionProperty({
                                    action: { "type": "callNanoflow", "argMap": { "Account": { "widget": "p0.NativeMobile.Home_Native.dataView1", "source": "object" } }, "config": { "nanoflow": () => require("C:/Users/abc/Documents/Mendix/New folder/deployment/native/nanoflows/NativeMobile.ACT_NewRun").ACT_NewRun, "allowedRoles": [ "Administrator", "User" ] } },
                                    abortOnServerValidation: false
                                })}
                                secondaryButtons={[]}
                                style={StyleProperty({
                                    styles: [ styles.com_mendix_widget_native_floatingactionbutton_FloatingActionButton ]
                                })} />,
                            <$NativeList key="p0.NativeMobile.Home_Native.listView1"
                                $widgetId="p0.NativeMobile.Home_Native.listView1"
                                style={StyleProperty({
                                    styles: [ styles.ListView ]
                                })}
                                listValue={DatabaseObjectListProperty({
                                    entity: "NativeMobile.Run",
                                    defaultLimit: 4,
                                    scope: "p0.NativeMobile.Home_Native.dataView1",
                                    queryId: "Rcs6ORaJN02Tn+1GjWhJuA",
                                    sort: [
                                        [
                                            "StartTime",
                                            "desc"
                                        ]
                                    ],
                                    useScope: true,
                                    reference: "NativeMobile.Run_Account",
                                    constraints: []
                                })}
                                itemTemplate={TemplatedWidgetProperty({
                                    children: () => [
                                        <$ClickableArea key="p0.NativeMobile.Home_Native.listView1$item"
                                            $widgetId="p0.NativeMobile.Home_Native.listView1$item"
                                            content={[
                                                <$Container key="p0.NativeMobile.Home_Native.container11"
                                                    $widgetId="p0.NativeMobile.Home_Native.container11"
                                                    style={StyleProperty({
                                                        styles: [ styles.Container, styles.cardFullWidthContainer ]
                                                    })}
                                                    onClick={undefined}
                                                    content={[
                                                        <$DataView key="p0.NativeMobile.Home_Native.dataView7"
                                                            $widgetId="p0.NativeMobile.Home_Native.dataView7"
                                                            style={StyleProperty({
                                                                styles: [ styles.DataView, styles.thumbnail ]
                                                            })}
                                                            object={NanoflowObjectProperty({
                                                                source: { "nanoflow": () => require("C:/Users/abc/Documents/Mendix/New folder/deployment/native/nanoflows/NativeMobile.DS_GetLastRunImage").DS_GetLastRunImage, "allowedRoles": [ "Administrator", "User" ] },
                                                                argMap: { "Run": { "widget": "p0.NativeMobile.Home_Native.listView1", "source": "object" } },
                                                                scope: "p0.NativeMobile.Home_Native.listView1"
                                                            })}
                                                            content={[
                                                                <$NativeDynamicImage key="p0.NativeMobile.Home_Native.image10"
                                                                    $widgetId="p0.NativeMobile.Home_Native.image10"
                                                                    style={StyleProperty({
                                                                        styles: [ styles.ImageViewer, styles.thumbnail, styles.cardFullWidthImage ]
                                                                    })}
                                                                    onClick={undefined}
                                                                    source={DynamicImageProperty({
                                                                        scope: "p0.NativeMobile.Home_Native.dataView7",
                                                                        showAsThumbnail: false
                                                                    })}
                                                                    width={0}
                                                                    height={0}
                                                                    placeholder={StaticImageProperty({
                                                                        image: NativeMobile$Image_collection$running$jpg
                                                                    })} />
                                                            ]} />,
                                                        <$ConditionalVisibilityWrapper key="p0.NativeMobile.Home_Native.container13$visibility"
                                                            $widgetId="p0.NativeMobile.Home_Native.container13$visibility"
                                                            visible={ExpressionProperty({
                                                                expression: { "expr": { "type": "conditional", "condition": { "type": "function", "name": ">=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Distance" }, { "type": "literal", "value": 0 } ] }, "then": { "type": "function", "name": "<", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Distance" }, { "type": "literal", "value": 5 } ] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": "p0.NativeMobile.Home_Native.listView1" } }
                                                            })}
                                                            contents={[
                                                                <$Container key="p0.NativeMobile.Home_Native.container13"
                                                                    $widgetId="p0.NativeMobile.Home_Native.container13"
                                                                    style={StyleProperty({
                                                                        styles: [ styles.Container, styles.cardTextbox, styles.cardTextboxPink ]
                                                                    })}
                                                                    onClick={undefined}
                                                                    content={[
                                                                        <$Text key="p0.NativeMobile.Home_Native.text11"
                                                                            $widgetId="p0.NativeMobile.Home_Native.text11"
                                                                            style={StyleProperty({
                                                                                styles: [ styles.Text, styles.TextHeading3, styles.textWhite ]
                                                                            })}
                                                                            text={DynamicTextProperty({
                                                                                scope: "p0.NativeMobile.Home_Native.listView1",
                                                                                template: { "elements": t( [ [ "Last Run: ", 1 ] ] ), "parameters": { "1": "NativeMobile.Run/Distance" }, "formats": { "1": t( [ { "groupDigits": true, "decimalPrecision": 2 } ] ) } }
                                                                            })} />,
                                                                        <$Text key="p0.NativeMobile.Home_Native.text13"
                                                                            $widgetId="p0.NativeMobile.Home_Native.text13"
                                                                            style={StyleProperty({
                                                                                styles: [ styles.Text, styles.spacingOuterBottomSmaller, styles.textLarge, styles.textSemiBold, styles.textWhite ]
                                                                            })}
                                                                            text={DynamicTextProperty({
                                                                                scope: "p0.NativeMobile.Home_Native.listView1",
                                                                                template: { "elements": t( [ [ "Duration: ", 1 ] ] ), "parameters": { "1": "NativeMobile.Run/Duration" }, "formats": { "1": t( [ {} ] ) } }
                                                                            })} />,
                                                                        <$Text key="p0.NativeMobile.Home_Native.text16"
                                                                            $widgetId="p0.NativeMobile.Home_Native.text16"
                                                                            style={StyleProperty({
                                                                                styles: [ styles.Text, styles.spacingOuterTopSmaller, styles.textWhite ]
                                                                            })}
                                                                            text={DynamicTextProperty({
                                                                                template: { "elements": t( [ [ "Finished at:" ] ] ) }
                                                                            })} />,
                                                                        <$Text key="p0.NativeMobile.Home_Native.text23"
                                                                            $widgetId="p0.NativeMobile.Home_Native.text23"
                                                                            style={StyleProperty({
                                                                                styles: [ styles.Text, styles.textWhite ]
                                                                            })}
                                                                            text={DynamicTextProperty({
                                                                                scope: "p0.NativeMobile.Home_Native.listView1",
                                                                                template: { "elements": t( [ [ 1 ] ] ), "parameters": { "1": "NativeMobile.Run/EndTime" }, "formats": { "1": t( [ { "type": "datetime" } ] ) } }
                                                                            })} />
                                                                    ]} />
                                                            ]} />,
                                                        <$ConditionalVisibilityWrapper key="p0.NativeMobile.Home_Native.container15$visibility"
                                                            $widgetId="p0.NativeMobile.Home_Native.container15$visibility"
                                                            visible={ExpressionProperty({
                                                                expression: { "expr": { "type": "conditional", "condition": { "type": "function", "name": ">=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Distance" }, { "type": "literal", "value": 5 } ] }, "then": { "type": "function", "name": "<", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Distance" }, { "type": "literal", "value": 10 } ] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": "p0.NativeMobile.Home_Native.listView1" } }
                                                            })}
                                                            contents={[
                                                                <$Container key="p0.NativeMobile.Home_Native.container15"
                                                                    $widgetId="p0.NativeMobile.Home_Native.container15"
                                                                    style={StyleProperty({
                                                                        styles: [ styles.Container, styles.cardTextbox, styles.cardTextboxBlue ]
                                                                    })}
                                                                    onClick={undefined}
                                                                    content={[
                                                                        <$Text key="p0.NativeMobile.Home_Native.text12"
                                                                            $widgetId="p0.NativeMobile.Home_Native.text12"
                                                                            style={StyleProperty({
                                                                                styles: [ styles.Text, styles.TextHeading3, styles.textWhite ]
                                                                            })}
                                                                            text={DynamicTextProperty({
                                                                                scope: "p0.NativeMobile.Home_Native.listView1",
                                                                                template: { "elements": t( [ [ "Last Run: ", 1 ] ] ), "parameters": { "1": "NativeMobile.Run/Distance" }, "formats": { "1": t( [ { "groupDigits": true, "decimalPrecision": 2 } ] ) } }
                                                                            })} />,
                                                                        <$Text key="p0.NativeMobile.Home_Native.text24"
                                                                            $widgetId="p0.NativeMobile.Home_Native.text24"
                                                                            style={StyleProperty({
                                                                                styles: [ styles.Text, styles.spacingOuterBottomSmaller, styles.textLarge, styles.textSemiBold, styles.textWhite ]
                                                                            })}
                                                                            text={DynamicTextProperty({
                                                                                scope: "p0.NativeMobile.Home_Native.listView1",
                                                                                template: { "elements": t( [ [ "Duration: ", 1 ] ] ), "parameters": { "1": "NativeMobile.Run/Duration" }, "formats": { "1": t( [ {} ] ) } }
                                                                            })} />,
                                                                        <$Text key="p0.NativeMobile.Home_Native.text25"
                                                                            $widgetId="p0.NativeMobile.Home_Native.text25"
                                                                            style={StyleProperty({
                                                                                styles: [ styles.Text, styles.spacingOuterTopSmaller, styles.textWhite ]
                                                                            })}
                                                                            text={DynamicTextProperty({
                                                                                template: { "elements": t( [ [ "Finished at:" ] ] ) }
                                                                            })} />,
                                                                        <$Text key="p0.NativeMobile.Home_Native.text26"
                                                                            $widgetId="p0.NativeMobile.Home_Native.text26"
                                                                            style={StyleProperty({
                                                                                styles: [ styles.Text, styles.textWhite ]
                                                                            })}
                                                                            text={DynamicTextProperty({
                                                                                scope: "p0.NativeMobile.Home_Native.listView1",
                                                                                template: { "elements": t( [ [ 1 ] ] ), "parameters": { "1": "NativeMobile.Run/EndTime" }, "formats": { "1": t( [ { "type": "datetime" } ] ) } }
                                                                            })} />
                                                                    ]} />
                                                            ]} />,
                                                        <$ConditionalVisibilityWrapper key="p0.NativeMobile.Home_Native.container16$visibility"
                                                            $widgetId="p0.NativeMobile.Home_Native.container16$visibility"
                                                            visible={ExpressionProperty({
                                                                expression: { "expr": { "type": "function", "name": ">=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Distance" }, { "type": "literal", "value": 10 } ] }, "args": { "currentObject": "p0.NativeMobile.Home_Native.listView1" } }
                                                            })}
                                                            contents={[
                                                                <$Container key="p0.NativeMobile.Home_Native.container16"
                                                                    $widgetId="p0.NativeMobile.Home_Native.container16"
                                                                    style={StyleProperty({
                                                                        styles: [ styles.Container, styles.cardTextbox, styles.cardTextboxGold ]
                                                                    })}
                                                                    onClick={undefined}
                                                                    content={[
                                                                        <$Text key="p0.NativeMobile.Home_Native.text27"
                                                                            $widgetId="p0.NativeMobile.Home_Native.text27"
                                                                            style={StyleProperty({
                                                                                styles: [ styles.Text, styles.TextHeading3, styles.textWhite ]
                                                                            })}
                                                                            text={DynamicTextProperty({
                                                                                scope: "p0.NativeMobile.Home_Native.listView1",
                                                                                template: { "elements": t( [ [ "Last Run: ", 1 ] ] ), "parameters": { "1": "NativeMobile.Run/Distance" }, "formats": { "1": t( [ { "groupDigits": true, "decimalPrecision": 2 } ] ) } }
                                                                            })} />,
                                                                        <$Text key="p0.NativeMobile.Home_Native.text28"
                                                                            $widgetId="p0.NativeMobile.Home_Native.text28"
                                                                            style={StyleProperty({
                                                                                styles: [ styles.Text, styles.spacingOuterBottomSmaller, styles.textLarge, styles.textSemiBold, styles.textWhite ]
                                                                            })}
                                                                            text={DynamicTextProperty({
                                                                                scope: "p0.NativeMobile.Home_Native.listView1",
                                                                                template: { "elements": t( [ [ "Duration: ", 1 ] ] ), "parameters": { "1": "NativeMobile.Run/Duration" }, "formats": { "1": t( [ {} ] ) } }
                                                                            })} />,
                                                                        <$Text key="p0.NativeMobile.Home_Native.text29"
                                                                            $widgetId="p0.NativeMobile.Home_Native.text29"
                                                                            style={StyleProperty({
                                                                                styles: [ styles.Text, styles.spacingOuterTopSmaller, styles.textWhite ]
                                                                            })}
                                                                            text={DynamicTextProperty({
                                                                                template: { "elements": t( [ [ "Finished at:" ] ] ) }
                                                                            })} />,
                                                                        <$Text key="p0.NativeMobile.Home_Native.text30"
                                                                            $widgetId="p0.NativeMobile.Home_Native.text30"
                                                                            style={StyleProperty({
                                                                                styles: [ styles.Text, styles.textWhite ]
                                                                            })}
                                                                            text={DynamicTextProperty({
                                                                                scope: "p0.NativeMobile.Home_Native.listView1",
                                                                                template: { "elements": t( [ [ 1 ] ] ), "parameters": { "1": "NativeMobile.Run/EndTime" }, "formats": { "1": t( [ { "type": "datetime" } ] ) } }
                                                                            })} />
                                                                    ]} />
                                                            ]} />
                                                    ]} />
                                            ]}
                                            onClick={ActionProperty({
                                                action: { "type": "openPage", "argMap": { "$pageParameter": { "widget": "p0.NativeMobile.Home_Native.listView1", "source": "object" } }, "config": { "name": "NativeMobile.Run_NewEdit", "location": "content", "allowedRoles": [ "Administrator", "User" ] } },
                                                abortOnServerValidation: false
                                            })} />
                                    ]
                                })}
                                pageSize={4}
                                id={DerivedUniqueIdProperty({
                                    widgetId: "p0.NativeMobile.Home_Native.listView1"
                                })}
                                scrollDirection={"vertical"}
                                numberOfColumns={1}
                                onPullDown={ActionProperty({
                                    action: { "type": "synchronize", "argMap": {}, "config": {} },
                                    abortOnServerValidation: false
                                })} />
                        ]
                    },
                    {
                        caption: DynamicTextProperty({
                            template: { "elements": t( [ [ "Friends" ] ] ) }
                        }),
                        isDefault: false,
                        name: "tabPage3",
                        page: [
                            <$ScrollContainer key="p0.NativeMobile.Home_Native.scrollContainer1"
                                $widgetId="p0.NativeMobile.Home_Native.scrollContainer1"
                                style={StyleProperty({
                                    styles: [ styles.ScrollContainer ]
                                })}
                                content={[
                                    <$com_mendix_widget_native_appevents_AppEvents key="p0.NativeMobile.Home_Native.appEvents2"
                                        $widgetId="p0.NativeMobile.Home_Native.appEvents2"
                                        onLoadAction={ActionProperty({
                                            action: { "type": "callNanoflow", "argMap": {}, "config": { "nanoflow": () => require("C:/Users/abc/Documents/Mendix/New folder/deployment/native/nanoflows/NativeMobile.DS_AccountHoldersWithOrder_LeaderBoard").DS_AccountHoldersWithOrder_LeaderBoard, "allowedRoles": [ "Administrator", "User", "Anonymous" ] } },
                                            abortOnServerValidation: false
                                        })}
                                        onResumeAction={undefined}
                                        onResumeTimeout={0}
                                        onOnlineAction={undefined}
                                        onOnlineTimeout={5}
                                        onOfflineAction={undefined}
                                        onOfflineTimeout={5}
                                        timerType={"once"}
                                        delayTime={30}
                                        onTimeoutAction={undefined}
                                        style={StyleProperty({
                                            styles: [ styles.com_mendix_widget_native_appevents_AppEvents ]
                                        })} />,
                                    <$Container key="p0.NativeMobile.Home_Native.container3"
                                        $widgetId="p0.NativeMobile.Home_Native.container3"
                                        style={StyleProperty({
                                            styles: [ styles.Container, styles.backgroundSecondary, styles.flexWrap ]
                                        })}
                                        onClick={undefined}
                                        content={[
                                            <$Image key="p0.NativeMobile.Home_Native.image4"
                                                $widgetId="p0.NativeMobile.Home_Native.image4"
                                                style={StyleProperty({
                                                    styles: [ styles.Image, styles.trophyImage, styles.spacingOuterTopMedium ]
                                                })}
                                                source={StaticImageProperty({
                                                    image: NativeMobile$Image_collection$trophy$svg
                                                })}
                                                onClick={undefined} />,
                                            <$Container key="p0.NativeMobile.Home_Native.container17"
                                                $widgetId="p0.NativeMobile.Home_Native.container17"
                                                style={StyleProperty({
                                                    styles: [ styles.Container, styles.alignChildrenCenter, styles.justifyContentCenter, styles.alignSelfCenter ]
                                                })}
                                                onClick={undefined}
                                                content={[
                                                    <$Text key="p0.NativeMobile.Home_Native.text18"
                                                        $widgetId="p0.NativeMobile.Home_Native.text18"
                                                        style={StyleProperty({
                                                            styles: [ styles.Text, styles.TextHeading1, styles.spacingInnerVerticalSmall, styles.spacingInnerHorizontalSmall, styles.textCenter ]
                                                        })}
                                                        text={DynamicTextProperty({
                                                            template: { "elements": t( [ [ "Leaderboard" ] ] ) }
                                                        })} />
                                                ]} />,
                                            <$Container key="p0.NativeMobile.Home_Native.container5"
                                                $widgetId="p0.NativeMobile.Home_Native.container5"
                                                style={StyleProperty({
                                                    styles: [ styles.Container, styles.alignChildrenCenter, styles.justifyContentCenter, styles.spacingOuterBottomMedium ]
                                                })}
                                                onClick={undefined}
                                                content={[
                                                    <$Text key="p0.NativeMobile.Home_Native.text202"
                                                        $widgetId="p0.NativeMobile.Home_Native.text202"
                                                        style={StyleProperty({
                                                            styles: [ styles.Text, styles.TextHeading5, styles.spacingOuterHorizontalSmall, styles.spacingOuterBottomSmallest, styles.spacingOuterTopSmaller ]
                                                        })}
                                                        text={DynamicTextProperty({
                                                            scope: "p0.NativeMobile.Home_Native.dataView1",
                                                            template: { "elements": t( [ [ "Your Total distance run is" ] ] ), "parameters": { "1": "Administration.Account/NativeMobile.AccountHolder_Account/NativeMobile.AccountHolder/TotalDistance" }, "formats": { "1": t( [ { "groupDigits": true, "decimalPrecision": 2 } ] ) } }
                                                        })} />,
                                                    <$Text key="p0.NativeMobile.Home_Native.text19"
                                                        $widgetId="p0.NativeMobile.Home_Native.text19"
                                                        style={StyleProperty({
                                                            styles: [ styles.Text, styles.TextHeading2, styles.spacingOuterHorizontalSmall, styles.textBold ]
                                                        })}
                                                        text={DynamicTextProperty({
                                                            scope: "p0.NativeMobile.Home_Native.dataView1",
                                                            template: { "elements": t( [ [ 1, " km" ] ] ), "parameters": { "1": "Administration.Account/NativeMobile.AccountHolder_Account/NativeMobile.AccountHolder/TotalDistance" }, "formats": { "1": t( [ { "groupDigits": true, "decimalPrecision": 2 } ] ) } }
                                                        })} />
                                                ]} />
                                        ]} />,
                                    <$NativeList key="p0.NativeMobile.Home_Native.listView3"
                                        $widgetId="p0.NativeMobile.Home_Native.listView3"
                                        style={StyleProperty({
                                            styles: [ styles.ListView, styles.spacingOuterBottomLargest ]
                                        })}
                                        listValue={NanoflowObjectListProperty({
                                            argMap: {},
                                            entity: "NativeMobile.AccountHolder",
                                            defaultLimit: 10,
                                            scope: "p0.NativeMobile.Home_Native.dataView1",
                                            source: { "nanoflow": () => require("C:/Users/abc/Documents/Mendix/New folder/deployment/native/nanoflows/NativeMobile.DS_AccountHoldersWithOrder_LeaderBoard").DS_AccountHoldersWithOrder_LeaderBoard, "allowedRoles": [ "Administrator", "User", "Anonymous" ] }
                                        })}
                                        itemTemplate={TemplatedWidgetProperty({
                                            children: () => [
                                                <$ClickableArea key="p0.NativeMobile.Home_Native.listView3$item"
                                                    $widgetId="p0.NativeMobile.Home_Native.listView3$item"
                                                    content={[
                                                        <$DataView key="p0.NativeMobile.Home_Native.dataView3"
                                                            $widgetId="p0.NativeMobile.Home_Native.dataView3"
                                                            style={StyleProperty({
                                                                styles: [ styles.DataView ]
                                                            })}
                                                            object={AssociationObjectProperty({
                                                                scope: "p0.NativeMobile.Home_Native.listView3",
                                                                path: "NativeMobile.AccountHolder_Account/Administration.Account"
                                                            })}
                                                            content={[
                                                                <$Container key="p0.NativeMobile.Home_Native.container8"
                                                                    $widgetId="p0.NativeMobile.Home_Native.container8"
                                                                    style={StyleProperty({
                                                                        styles: [ styles.Container, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium ]
                                                                    })}
                                                                    onClick={undefined}
                                                                    content={[
                                                                        <$View key="p0.NativeMobile.Home_Native.layoutGrid4"
                                                                            $widgetId="p0.NativeMobile.Home_Native.layoutGrid4"
                                                                            style={StyleProperty({
                                                                                styles: [ styles.LayoutGrid ]
                                                                            })}
                                                                            content={[
                                                                                <$View key="p0.NativeMobile.Home_Native.layoutGrid4$row0"
                                                                                    $widgetId="p0.NativeMobile.Home_Native.layoutGrid4$row0"
                                                                                    style={StyleProperty({
                                                                                        styles: [ styles.row, styles.alignChildrenCenter, styles.spacingInnerMedium, styles.borderBottom ]
                                                                                    })}
                                                                                    content={[
                                                                                        <$View key="p0.NativeMobile.Home_Native.layoutGrid4$row0$column0"
                                                                                            $widgetId="p0.NativeMobile.Home_Native.layoutGrid4$row0$column0"
                                                                                            style={StyleProperty({
                                                                                                styles: [ styles.col4, styles.alignSelfCenter ]
                                                                                            })}
                                                                                            content={[
                                                                                                <$NativeDynamicImage key="p0.NativeMobile.Home_Native.image5"
                                                                                                    $widgetId="p0.NativeMobile.Home_Native.image5"
                                                                                                    style={StyleProperty({
                                                                                                        styles: [ styles.ImageViewer, styles.avatarMedium ]
                                                                                                    })}
                                                                                                    onClick={undefined}
                                                                                                    source={DynamicImageProperty({
                                                                                                        scope: "p0.NativeMobile.Home_Native.dataView3",
                                                                                                        showAsThumbnail: false,
                                                                                                        path: "NativeMobile.AccountHolder_Account/NativeMobile.AccountHolder"
                                                                                                    })}
                                                                                                    width={100}
                                                                                                    height={100}
                                                                                                    placeholder={StaticImageProperty({
                                                                                                        image: Atlas_UI_Resources$Content$user$png
                                                                                                    })} />
                                                                                            ]} />,
                                                                                        <$View key="p0.NativeMobile.Home_Native.layoutGrid4$row0$column1"
                                                                                            $widgetId="p0.NativeMobile.Home_Native.layoutGrid4$row0$column1"
                                                                                            style={StyleProperty({
                                                                                                styles: [ styles.col5, styles.alignSelfCenter ]
                                                                                            })}
                                                                                            content={[
                                                                                                <$Container key="p0.NativeMobile.Home_Native.container9"
                                                                                                    $widgetId="p0.NativeMobile.Home_Native.container9"
                                                                                                    style={StyleProperty({
                                                                                                        styles: [ styles.Container, styles.spacingOuterBottomSmallest, styles.justifyContentSpaceBetween ]
                                                                                                    })}
                                                                                                    onClick={undefined}
                                                                                                    content={[
                                                                                                        <$Text key="p0.NativeMobile.Home_Native.text14"
                                                                                                            $widgetId="p0.NativeMobile.Home_Native.text14"
                                                                                                            style={StyleProperty({
                                                                                                                styles: [ styles.Text, styles.TextHeading4 ]
                                                                                                            })}
                                                                                                            text={DynamicTextProperty({
                                                                                                                scope: "p0.NativeMobile.Home_Native.dataView3",
                                                                                                                template: { "elements": t( [ [ 1 ] ] ), "parameters": { "1": "Administration.Account/FullName" }, "formats": { "1": t( [ {} ] ) } }
                                                                                                            })} />,
                                                                                                        <$Text key="p0.NativeMobile.Home_Native.text15"
                                                                                                            $widgetId="p0.NativeMobile.Home_Native.text15"
                                                                                                            style={StyleProperty({
                                                                                                                styles: [ styles.Text, styles.textContrastDefault ]
                                                                                                            })}
                                                                                                            text={DynamicTextProperty({
                                                                                                                scope: "p0.NativeMobile.Home_Native.dataView3",
                                                                                                                template: { "elements": t( [ [ 1, " km" ] ] ), "parameters": { "1": "Administration.Account/NativeMobile.AccountHolder_Account/NativeMobile.AccountHolder/TotalDistance" }, "formats": { "1": t( [ { "groupDigits": true, "decimalPrecision": 2 } ] ) } }
                                                                                                            })} />
                                                                                                    ]} />
                                                                                            ]} />,
                                                                                        <$View key="p0.NativeMobile.Home_Native.layoutGrid4$row0$column2"
                                                                                            $widgetId="p0.NativeMobile.Home_Native.layoutGrid4$row0$column2"
                                                                                            style={StyleProperty({
                                                                                                styles: [ styles.col3 ]
                                                                                            })}
                                                                                            content={[
                                                                                                <$ConditionalVisibilityWrapper key="p0.NativeMobile.Home_Native.container18$visibility"
                                                                                                    $widgetId="p0.NativeMobile.Home_Native.container18$visibility"
                                                                                                    visible={ExpressionProperty({
                                                                                                        expression: { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "listView3", "path": "Order" }, { "type": "literal", "value": 1 } ] }, "args": { "listView3": "p0.NativeMobile.Home_Native.listView3" } }
                                                                                                    })}
                                                                                                    contents={[
                                                                                                        <$Container key="p0.NativeMobile.Home_Native.container18"
                                                                                                            $widgetId="p0.NativeMobile.Home_Native.container18"
                                                                                                            style={StyleProperty({
                                                                                                                styles: [ styles.Container ]
                                                                                                            })}
                                                                                                            onClick={undefined}
                                                                                                            content={[
                                                                                                                <$Image key="p0.NativeMobile.Home_Native.image6"
                                                                                                                    $widgetId="p0.NativeMobile.Home_Native.image6"
                                                                                                                    style={StyleProperty({
                                                                                                                        styles: [ styles.Image, styles.medalImage ]
                                                                                                                    })}
                                                                                                                    source={StaticImageProperty({
                                                                                                                        image: NativeMobile$Image_collection$_1st_medal$png
                                                                                                                    })}
                                                                                                                    onClick={undefined} />
                                                                                                            ]} />
                                                                                                    ]} />,
                                                                                                <$ConditionalVisibilityWrapper key="p0.NativeMobile.Home_Native.container19$visibility"
                                                                                                    $widgetId="p0.NativeMobile.Home_Native.container19$visibility"
                                                                                                    visible={ExpressionProperty({
                                                                                                        expression: { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "listView3", "path": "Order" }, { "type": "literal", "value": 2 } ] }, "args": { "listView3": "p0.NativeMobile.Home_Native.listView3" } }
                                                                                                    })}
                                                                                                    contents={[
                                                                                                        <$Container key="p0.NativeMobile.Home_Native.container19"
                                                                                                            $widgetId="p0.NativeMobile.Home_Native.container19"
                                                                                                            style={StyleProperty({
                                                                                                                styles: [ styles.Container ]
                                                                                                            })}
                                                                                                            onClick={undefined}
                                                                                                            content={[
                                                                                                                <$Image key="p0.NativeMobile.Home_Native.image7"
                                                                                                                    $widgetId="p0.NativeMobile.Home_Native.image7"
                                                                                                                    style={StyleProperty({
                                                                                                                        styles: [ styles.Image, styles.medalImage ]
                                                                                                                    })}
                                                                                                                    source={StaticImageProperty({
                                                                                                                        image: NativeMobile$Image_collection$_2nd_medal$png
                                                                                                                    })}
                                                                                                                    onClick={undefined} />
                                                                                                            ]} />
                                                                                                    ]} />,
                                                                                                <$ConditionalVisibilityWrapper key="p0.NativeMobile.Home_Native.container20$visibility"
                                                                                                    $widgetId="p0.NativeMobile.Home_Native.container20$visibility"
                                                                                                    visible={ExpressionProperty({
                                                                                                        expression: { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "listView3", "path": "Order" }, { "type": "literal", "value": 3 } ] }, "args": { "listView3": "p0.NativeMobile.Home_Native.listView3" } }
                                                                                                    })}
                                                                                                    contents={[
                                                                                                        <$Container key="p0.NativeMobile.Home_Native.container20"
                                                                                                            $widgetId="p0.NativeMobile.Home_Native.container20"
                                                                                                            style={StyleProperty({
                                                                                                                styles: [ styles.Container ]
                                                                                                            })}
                                                                                                            onClick={undefined}
                                                                                                            content={[
                                                                                                                <$Image key="p0.NativeMobile.Home_Native.image8"
                                                                                                                    $widgetId="p0.NativeMobile.Home_Native.image8"
                                                                                                                    style={StyleProperty({
                                                                                                                        styles: [ styles.Image, styles.medalImage ]
                                                                                                                    })}
                                                                                                                    source={StaticImageProperty({
                                                                                                                        image: NativeMobile$Image_collection$_3rd_medal$png
                                                                                                                    })}
                                                                                                                    onClick={undefined} />
                                                                                                            ]} />
                                                                                                    ]} />
                                                                                            ]} />
                                                                                    ]} />
                                                                            ]} />
                                                                    ]} />
                                                            ]} />
                                                    ]}
                                                    onClick={undefined} />
                                            ]
                                        })}
                                        pageSize={10}
                                        id={DerivedUniqueIdProperty({
                                            widgetId: "p0.NativeMobile.Home_Native.listView3"
                                        })}
                                        scrollDirection={"vertical"}
                                        numberOfColumns={1}
                                        onPullDown={ActionProperty({
                                            action: { "type": "synchronize", "argMap": {}, "config": {} },
                                            abortOnServerValidation: false
                                        })} />
                                ]} />,
                            <$com_mendix_widget_native_floatingactionbutton_FloatingActionButton key="p0.NativeMobile.Home_Native.floatingActionButton2"
                                $widgetId="p0.NativeMobile.Home_Native.floatingActionButton2"
                                icon={IconProperty({
                                    icon: { "type": "glyph", "iconClass": "glyphicon-user" }
                                })}
                                iconActive={undefined}
                                horizontalPosition={"right"}
                                verticalPosition={"bottom"}
                                onClick={ActionProperty({
                                    action: { "type": "callNanoflow", "argMap": { "Account": { "widget": "p0.NativeMobile.Home_Native.dataView1", "source": "object" } }, "config": { "nanoflow": () => require("C:/Users/abc/Documents/Mendix/New folder/deployment/native/nanoflows/NativeMobile.ACT_GoToFriendSearch").ACT_GoToFriendSearch, "allowedRoles": [ "Administrator", "User" ] } },
                                    abortOnServerValidation: false
                                })}
                                secondaryButtons={[]}
                                style={StyleProperty({
                                    styles: [ styles.com_mendix_widget_native_floatingactionbutton_FloatingActionButton ]
                                })} />,
                            <$com_mendix_widget_native_bottomsheet_BottomSheet key="p0.NativeMobile.Home_Native.bottomSheet2"
                                $widgetId="p0.NativeMobile.Home_Native.bottomSheet2"
                                type={"expanding"}
                                modalRendering={"basic"}
                                nativeImplementation={true}
                                itemsBasic={[]}
                                smallContent={[
                                    <$Text key="p0.NativeMobile.Home_Native.text3"
                                        $widgetId="p0.NativeMobile.Home_Native.text3"
                                        style={StyleProperty({
                                            styles: [ styles.Text, styles.TextHeading4, styles.borderBottom, styles.spacingInnerVerticalSmall, styles.spacingInnerHorizontalSmall ]
                                        })}
                                        text={DynamicTextProperty({
                                            scope: "p0.NativeMobile.Home_Native.dataView1",
                                            template: { "elements": t( [ [ "Total Friends: ", 1 ] ] ), "parameters": { "1": "Administration.Account/NativeMobile.AccountHolder_Account/NativeMobile.AccountHolder/TotalFriends" }, "formats": { "1": t( [ { "groupDigits": false } ] ) } }
                                        })} />
                                ]}
                                largeContent={[
                                    <$NativeList key="p0.NativeMobile.Home_Native.listView2"
                                        $widgetId="p0.NativeMobile.Home_Native.listView2"
                                        style={StyleProperty({
                                            styles: [ styles.ListView, styles.listItemBorderBottom ]
                                        })}
                                        listValue={DatabaseObjectListProperty({
                                            entity: "NativeMobile.AccountHolder",
                                            defaultLimit: 10,
                                            scope: "p0.NativeMobile.Home_Native.dataView1",
                                            queryId: "Bs+6zJpZrEe8/vsM2fNMQQ",
                                            sort: [],
                                            useScope: true,
                                            reference: "NativeMobile.AccountHolder_Friends",
                                            constraints: []
                                        })}
                                        itemTemplate={TemplatedWidgetProperty({
                                            children: () => [
                                                <$ClickableArea key="p0.NativeMobile.Home_Native.listView2$item"
                                                    $widgetId="p0.NativeMobile.Home_Native.listView2$item"
                                                    content={[
                                                        <$DataView key="p0.NativeMobile.Home_Native.dataView2"
                                                            $widgetId="p0.NativeMobile.Home_Native.dataView2"
                                                            style={StyleProperty({
                                                                styles: [ styles.DataView ]
                                                            })}
                                                            object={AssociationObjectProperty({
                                                                scope: "p0.NativeMobile.Home_Native.listView2",
                                                                path: "NativeMobile.AccountHolder_Account/Administration.Account"
                                                            })}
                                                            content={[
                                                                <$Container key="p0.NativeMobile.Home_Native.container6"
                                                                    $widgetId="p0.NativeMobile.Home_Native.container6"
                                                                    style={StyleProperty({
                                                                        styles: [ styles.Container, styles.spacingInnerTopMedium, styles.spacingInnerBottomMedium, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium ]
                                                                    })}
                                                                    onClick={undefined}
                                                                    content={[
                                                                        <$View key="p0.NativeMobile.Home_Native.layoutGrid3"
                                                                            $widgetId="p0.NativeMobile.Home_Native.layoutGrid3"
                                                                            style={StyleProperty({
                                                                                styles: [ styles.LayoutGrid ]
                                                                            })}
                                                                            content={[
                                                                                <$View key="p0.NativeMobile.Home_Native.layoutGrid3$row0"
                                                                                    $widgetId="p0.NativeMobile.Home_Native.layoutGrid3$row0"
                                                                                    style={StyleProperty({
                                                                                        styles: [ styles.row, styles.alignChildrenCenter ]
                                                                                    })}
                                                                                    content={[
                                                                                        <$View key="p0.NativeMobile.Home_Native.layoutGrid3$row0$column0"
                                                                                            $widgetId="p0.NativeMobile.Home_Native.layoutGrid3$row0$column0"
                                                                                            style={StyleProperty({
                                                                                                styles: [ styles.col3 ]
                                                                                            })}
                                                                                            content={[
                                                                                                <$NativeDynamicImage key="p0.NativeMobile.Home_Native.image2"
                                                                                                    $widgetId="p0.NativeMobile.Home_Native.image2"
                                                                                                    style={StyleProperty({
                                                                                                        styles: [ styles.ImageViewer, styles.avatarSmall ]
                                                                                                    })}
                                                                                                    onClick={undefined}
                                                                                                    source={DynamicImageProperty({
                                                                                                        scope: "p0.NativeMobile.Home_Native.dataView2",
                                                                                                        showAsThumbnail: false,
                                                                                                        path: "NativeMobile.AccountHolder_Account/NativeMobile.AccountHolder"
                                                                                                    })}
                                                                                                    width={0}
                                                                                                    height={0}
                                                                                                    placeholder={StaticImageProperty({
                                                                                                        image: Atlas_UI_Resources$Content$user$png
                                                                                                    })} />
                                                                                            ]} />,
                                                                                        <$View key="p0.NativeMobile.Home_Native.layoutGrid3$row0$column1"
                                                                                            $widgetId="p0.NativeMobile.Home_Native.layoutGrid3$row0$column1"
                                                                                            style={StyleProperty({
                                                                                                styles: [ styles.col7 ]
                                                                                            })}
                                                                                            content={[
                                                                                                <$Container key="p0.NativeMobile.Home_Native.container7"
                                                                                                    $widgetId="p0.NativeMobile.Home_Native.container7"
                                                                                                    style={StyleProperty({
                                                                                                        styles: [ styles.Container, styles.spacingOuterBottomSmallest, styles.justifyContentSpaceBetween, styles.flexWrap ]
                                                                                                    })}
                                                                                                    onClick={undefined}
                                                                                                    content={[
                                                                                                        <$Text key="p0.NativeMobile.Home_Native.text9"
                                                                                                            $widgetId="p0.NativeMobile.Home_Native.text9"
                                                                                                            style={StyleProperty({
                                                                                                                styles: [ styles.Text, styles.TextHeading4 ]
                                                                                                            })}
                                                                                                            text={DynamicTextProperty({
                                                                                                                scope: "p0.NativeMobile.Home_Native.dataView2",
                                                                                                                template: { "elements": t( [ [ 1 ] ] ), "parameters": { "1": "Administration.Account/FullName" }, "formats": { "1": t( [ {} ] ) } }
                                                                                                            })} />,
                                                                                                        <$Text key="p0.NativeMobile.Home_Native.text10"
                                                                                                            $widgetId="p0.NativeMobile.Home_Native.text10"
                                                                                                            style={StyleProperty({
                                                                                                                styles: [ styles.Text, styles.textContrastDefault ]
                                                                                                            })}
                                                                                                            text={DynamicTextProperty({
                                                                                                                scope: "p0.NativeMobile.Home_Native.dataView2",
                                                                                                                template: { "elements": t( [ [ "Total distance: ", 1, " km" ] ] ), "parameters": { "1": "Administration.Account/NativeMobile.AccountHolder_Account/NativeMobile.AccountHolder/TotalDistance" }, "formats": { "1": t( [ { "groupDigits": true, "decimalPrecision": 2 } ] ) } }
                                                                                                            })} />
                                                                                                    ]} />
                                                                                            ]} />,
                                                                                        <$View key="p0.NativeMobile.Home_Native.layoutGrid3$row0$column2"
                                                                                            $widgetId="p0.NativeMobile.Home_Native.layoutGrid3$row0$column2"
                                                                                            style={StyleProperty({
                                                                                                styles: [ styles.col2 ]
                                                                                            })}
                                                                                            content={[
                                                                                                <$com_mendix_widget_native_popupmenu_PopupMenu key="p0.NativeMobile.Home_Native.popupMenu1"
                                                                                                    $widgetId="p0.NativeMobile.Home_Native.popupMenu1"
                                                                                                    menuTriggerer={[
                                                                                                        <$Button key="p0.NativeMobile.Home_Native.actionButton2"
                                                                                                            $widgetId="p0.NativeMobile.Home_Native.actionButton2"
                                                                                                            style={StyleProperty({
                                                                                                                styles: [ styles.ActionButton, styles.btnIcon, styles.btnLarge, styles.showPopupBtn, styles.spacingOuterTopSmallest, styles.spacingOuterBottomSmallest, styles.spacingOuterLeftSmallest, styles.spacingOuterRightSmallest ]
                                                                                                            })}
                                                                                                            caption={DynamicTextProperty({
                                                                                                                template: { "elements": t( [ [] ] ) }
                                                                                                            })}
                                                                                                            icon={IconProperty({
                                                                                                                icon: { "type": "glyph", "iconClass": "glyphicon-option-vertical" }
                                                                                                            })}
                                                                                                            onClick={undefined}
                                                                                                            disabledDuringAction={true} />
                                                                                                    ]}
                                                                                                    renderMode={"basic"}
                                                                                                    basicItems={[
                                                                                                        {
                                                                                                            itemType: "item",
                                                                                                            caption: "Remove friend",
                                                                                                            action: ActionProperty({
                                                                                                                action: { "type": "callNanoflow", "argMap": { "Account_Friend": { "widget": "p0.NativeMobile.Home_Native.dataView2", "source": "object" }, "AccountHolder": { "widget": "p0.NativeMobile.Home_Native.listView2", "source": "object" } }, "config": { "nanoflow": () => require("C:/Users/abc/Documents/Mendix/New folder/deployment/native/nanoflows/NativeMobile.ACT_RemoveFriend").ACT_RemoveFriend, "allowedRoles": [ "Administrator", "User" ] } },
                                                                                                                abortOnServerValidation: false
                                                                                                            }),
                                                                                                            styleClass: "dangerStyle"
                                                                                                        }
                                                                                                    ]}
                                                                                                    customItems={[]}
                                                                                                    style={StyleProperty({
                                                                                                        styles: [ styles.com_mendix_widget_native_popupmenu_PopupMenu ]
                                                                                                    })} />
                                                                                            ]} />
                                                                                    ]} />
                                                                            ]} />
                                                                    ]} />
                                                            ]} />
                                                    ]}
                                                    onClick={undefined} />
                                            ]
                                        })}
                                        pageSize={10}
                                        id={DerivedUniqueIdProperty({
                                            widgetId: "p0.NativeMobile.Home_Native.listView2"
                                        })}
                                        scrollDirection={"vertical"}
                                        numberOfColumns={1}
                                        onPullDown={undefined} />
                                ]}
                                showFullscreenContent={true}
                                fullscreenContent={[
                                    <$Container key="p0.NativeMobile.Home_Native.container4"
                                        $widgetId="p0.NativeMobile.Home_Native.container4"
                                        style={StyleProperty({
                                            styles: [ styles.Container ]
                                        })}
                                        onClick={undefined}
                                        content={undefined} />
                                ]}
                                onOpen={undefined}
                                onClose={undefined}
                                style={StyleProperty({
                                    styles: [ styles.com_mendix_widget_native_bottomsheet_BottomSheet ]
                                })} />
                        ]
                    }
                ]} />
        ]} />
];

export const $$title = t([
    "Home"
] );

export const $$style = [ styles.Layout, styles.Page ];

export const $$page = () => mainContent(placeholder$Main);

export const $$sidebar = () => sidebar(placeholder$Main);

