import { createElement } from "react";
const React = { createElement };

import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { DynamicImageProperty } from "mendix/DynamicImageProperty";
import { DynamicTextProperty } from "mendix/DynamicTextProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { IconProperty } from "mendix/IconProperty";
import { StaticImageProperty } from "mendix/StaticImageProperty";
import { StyleProperty } from "mendix/StyleProperty";
import { TemplatedWidgetProperty } from "mendix/TemplatedWidgetProperty";

import { Button } from "mendix/Button";
import { com_mendix_widget_native_appevents_AppEvents } from "externalWidgets";
import { com_mendix_widget_native_carousel_Carousel } from "externalWidgets";
import { com_mendix_widget_native_floatingactionbutton_FloatingActionButton } from "externalWidgets";
import { ConditionalVisibilityWrapper } from "mendix/ConditionalVisibilityWrapper";
import { Container } from "mendix/Container";
import { DataView } from "mendix/DataView";
import { Image } from "mendix/Image";
import { NativeDynamicImage } from "mendix/NativeDynamicImage";
import { ScrollContainer } from "mendix/ScrollContainer";
import { Text } from "mendix/Text";
import { View } from "mendix/View";
import { asPluginWidgets, t } from "mendix/native";

import { mainContent, sidebar } from "C:/Users/abc/Documents/Mendix/New folder/deployment/native/layouts/Atlas_UI_Resources.NativePhone_Default.js";

import * as styles from "C:/Users/abc/Documents/Mendix/New folder/theme/styles.js";

import NativeMobile$Image_collection$running$jpg from "C:/Users/abc/Documents/Mendix/New folder/deployment/native/img/NativeMobile$Image_collection$running.jpg";
import NativeMobile$Image_collection$running_shoes$svg from "C:/Users/abc/Documents/Mendix/New folder/deployment/native/img/NativeMobile$Image_collection$running_shoes.svg";
import NativeMobile$Image_collection$mendix_icon_white$png from "C:/Users/abc/Documents/Mendix/New folder/deployment/native/img/NativeMobile$Image_collection$mendix_icon_white.png";

const { $DataView, $ScrollContainer, $Container, $ConditionalVisibilityWrapper, $com_mendix_widget_native_carousel_Carousel, $NativeDynamicImage, $Image, $Text, $View, $Button, $com_mendix_widget_native_appevents_AppEvents, $com_mendix_widget_native_floatingactionbutton_FloatingActionButton } = asPluginWidgets({ DataView, ScrollContainer, Container, ConditionalVisibilityWrapper, com_mendix_widget_native_carousel_Carousel, NativeDynamicImage, Image, Text, View, Button, com_mendix_widget_native_appevents_AppEvents, com_mendix_widget_native_floatingactionbutton_FloatingActionButton });

const placeholder$Main = () => [
    <$DataView key="p1.NativeMobile.Run_NewEdit.dataView3"
        $widgetId="p1.NativeMobile.Run_NewEdit.dataView3"
        style={StyleProperty({
            styles: [ styles.DataView ]
        })}
        object={AssociationObjectProperty({
            scope: "$pageParameter"
        })}
        content={[
            <$ScrollContainer key="p1.NativeMobile.Run_NewEdit.scrollContainer1"
                $widgetId="p1.NativeMobile.Run_NewEdit.scrollContainer1"
                style={StyleProperty({
                    styles: [ styles.ScrollContainer ]
                })}
                content={[
                    <$Container key="p1.NativeMobile.Run_NewEdit.container10"
                        $widgetId="p1.NativeMobile.Run_NewEdit.container10"
                        style={StyleProperty({
                            styles: [ styles.Container ]
                        })}
                        onClick={undefined}
                        content={[
                            <$ConditionalVisibilityWrapper key="p1.NativeMobile.Run_NewEdit.carousel3$visibility"
                                $widgetId="p1.NativeMobile.Run_NewEdit.carousel3$visibility"
                                visible={ExpressionProperty({
                                    expression: { "expr": { "type": "variable", "variable": "currentObject", "path": "HasImages" }, "args": { "currentObject": "p1.NativeMobile.Run_NewEdit.dataView3" } }
                                })}
                                contents={[
                                    <$com_mendix_widget_native_carousel_Carousel key="p1.NativeMobile.Run_NewEdit.carousel3"
                                        $widgetId="p1.NativeMobile.Run_NewEdit.carousel3"
                                        contentSource={DatabaseObjectListProperty({
                                            entity: "NativeMobile.RunImages",
                                            scope: "p1.NativeMobile.Run_NewEdit.dataView3",
                                            queryId: "NaxDH63YwUO1Udhb4eqYwg",
                                            sort: [],
                                            useScope: true,
                                            reference: "NativeMobile.RunImages_Run",
                                            constraints: []
                                        })}
                                        content={TemplatedWidgetProperty({
                                            children: () => [
                                                <$Container key="p1.NativeMobile.Run_NewEdit.container1"
                                                    $widgetId="p1.NativeMobile.Run_NewEdit.container1"
                                                    style={StyleProperty({
                                                        styles: [ styles.Container, styles.cardCarousel ]
                                                    })}
                                                    onClick={undefined}
                                                    content={[
                                                        <$NativeDynamicImage key="p1.NativeMobile.Run_NewEdit.image5"
                                                            $widgetId="p1.NativeMobile.Run_NewEdit.image5"
                                                            style={StyleProperty({
                                                                styles: [ styles.ImageViewer, styles.cardImageFull, styles.cardCarouselImage ]
                                                            })}
                                                            onClick={undefined}
                                                            source={DynamicImageProperty({
                                                                scope: "p1.NativeMobile.Run_NewEdit.carousel3",
                                                                showAsThumbnail: false
                                                            })}
                                                            width={0}
                                                            height={0}
                                                            placeholder={StaticImageProperty({
                                                                image: NativeMobile$Image_collection$running$jpg
                                                            })} />
                                                    ]} />
                                            ]
                                        })}
                                        layout={"fullWidth"}
                                        showPagination={true}
                                        activeSlideAlignment={"center"}
                                        style={StyleProperty({
                                            styles: [ styles.com_mendix_widget_native_carousel_Carousel ]
                                        })} />
                                ]} />,
                            <$ConditionalVisibilityWrapper key="p1.NativeMobile.Run_NewEdit.image1$visibility"
                                $widgetId="p1.NativeMobile.Run_NewEdit.image1$visibility"
                                visible={ExpressionProperty({
                                    expression: { "expr": { "type": "function", "name": "not", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "HasImages" } ] }, "args": { "currentObject": "p1.NativeMobile.Run_NewEdit.dataView3" } }
                                })}
                                contents={[
                                    <$Image key="p1.NativeMobile.Run_NewEdit.image1"
                                        $widgetId="p1.NativeMobile.Run_NewEdit.image1"
                                        style={StyleProperty({
                                            styles: [ styles.Image, styles.runningShoeImage ]
                                        })}
                                        source={StaticImageProperty({
                                            image: NativeMobile$Image_collection$running_shoes$svg
                                        })}
                                        onClick={undefined} />
                                ]} />
                        ]} />,
                    <$Container key="p1.NativeMobile.Run_NewEdit.container7"
                        $widgetId="p1.NativeMobile.Run_NewEdit.container7"
                        style={StyleProperty({
                            styles: [ styles.Container, styles.flexWrap, styles.justifyContentSpaceBetween, styles.flexRow, styles.spacingOuterTopMedium, styles.spacingOuterBottomMedium ]
                        })}
                        onClick={undefined}
                        content={[
                            <$Container key="p1.NativeMobile.Run_NewEdit.container4"
                                $widgetId="p1.NativeMobile.Run_NewEdit.container4"
                                style={StyleProperty({
                                    styles: [ styles.Container, styles.infoContainer, styles.infoContainerPink ]
                                })}
                                onClick={undefined}
                                content={[
                                    <$Text key="p1.NativeMobile.Run_NewEdit.text13"
                                        $widgetId="p1.NativeMobile.Run_NewEdit.text13"
                                        style={StyleProperty({
                                            styles: [ styles.Text, styles.TextHeading4, styles.textCenter, styles.textWhite ]
                                        })}
                                        text={DynamicTextProperty({
                                            template: { "elements": t( [ [ "Duration" ] ] ) }
                                        })} />,
                                    <$ConditionalVisibilityWrapper key="p1.NativeMobile.Run_NewEdit.text14$visibility"
                                        $widgetId="p1.NativeMobile.Run_NewEdit.text14$visibility"
                                        visible={ExpressionProperty({
                                            expression: { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Status" }, { "type": "literal", "value": "Busy" } ] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Status" }, { "type": "literal", "value": "Done" } ] } }, "args": { "currentObject": "p1.NativeMobile.Run_NewEdit.dataView3" } }
                                        })}
                                        contents={[
                                            <$Text key="p1.NativeMobile.Run_NewEdit.text14"
                                                $widgetId="p1.NativeMobile.Run_NewEdit.text14"
                                                style={StyleProperty({
                                                    styles: [ styles.Text, styles.TextHeading3, styles.textCenter, styles.textBold, styles.spacingOuterTopSmallest, styles.textWhite ]
                                                })}
                                                text={DynamicTextProperty({
                                                    scope: "p1.NativeMobile.Run_NewEdit.dataView3",
                                                    template: { "elements": t( [ [ 1 ] ] ), "parameters": { "1": "NativeMobile.Run/Duration" }, "formats": { "1": t( [ {} ] ) } }
                                                })} />
                                        ]} />
                                ]} />,
                            <$Container key="p1.NativeMobile.Run_NewEdit.container5"
                                $widgetId="p1.NativeMobile.Run_NewEdit.container5"
                                style={StyleProperty({
                                    styles: [ styles.Container, styles.infoContainer, styles.infoContainerBlue ]
                                })}
                                onClick={undefined}
                                content={[
                                    <$Text key="p1.NativeMobile.Run_NewEdit.text15"
                                        $widgetId="p1.NativeMobile.Run_NewEdit.text15"
                                        style={StyleProperty({
                                            styles: [ styles.Text, styles.TextHeading4, styles.textCenter, styles.textWhite ]
                                        })}
                                        text={DynamicTextProperty({
                                            template: { "elements": t( [ [ "Distance" ] ] ) }
                                        })} />,
                                    <$Text key="p1.NativeMobile.Run_NewEdit.text16"
                                        $widgetId="p1.NativeMobile.Run_NewEdit.text16"
                                        style={StyleProperty({
                                            styles: [ styles.Text, styles.TextHeading3, styles.textCenter, styles.textBold, styles.spacingOuterTopSmallest, styles.spacingOuterBottomSmallest, styles.textWhite ]
                                        })}
                                        text={DynamicTextProperty({
                                            scope: "p1.NativeMobile.Run_NewEdit.dataView3",
                                            template: { "elements": t( [ [ 1 ] ] ), "parameters": { "1": "NativeMobile.Run/Distance" }, "formats": { "1": t( [ { "groupDigits": false, "decimalPrecision": 2 } ] ) } }
                                        })} />,
                                    <$Text key="p1.NativeMobile.Run_NewEdit.text17"
                                        $widgetId="p1.NativeMobile.Run_NewEdit.text17"
                                        style={StyleProperty({
                                            styles: [ styles.Text, styles.TextHeading4, styles.textCenter, styles.textWhite ]
                                        })}
                                        text={DynamicTextProperty({
                                            scope: "p1.NativeMobile.Run_NewEdit.dataView3",
                                            template: { "elements": t( [ [ "KM" ] ] ), "parameters": { "1": "NativeMobile.Run/Distance" }, "formats": { "1": t( [ { "groupDigits": false, "decimalPrecision": 2 } ] ) } }
                                        })} />
                                ]} />,
                            <$Container key="p1.NativeMobile.Run_NewEdit.container6"
                                $widgetId="p1.NativeMobile.Run_NewEdit.container6"
                                style={StyleProperty({
                                    styles: [ styles.Container, styles.infoContainer, styles.infoContainerGold ]
                                })}
                                onClick={undefined}
                                content={[
                                    <$Text key="p1.NativeMobile.Run_NewEdit.text18"
                                        $widgetId="p1.NativeMobile.Run_NewEdit.text18"
                                        style={StyleProperty({
                                            styles: [ styles.Text, styles.TextHeading4, styles.textCenter, styles.textWhite ]
                                        })}
                                        text={DynamicTextProperty({
                                            template: { "elements": t( [ [ "Speed" ] ] ) }
                                        })} />,
                                    <$Text key="p1.NativeMobile.Run_NewEdit.text19"
                                        $widgetId="p1.NativeMobile.Run_NewEdit.text19"
                                        style={StyleProperty({
                                            styles: [ styles.Text, styles.TextHeading3, styles.textCenter, styles.textBold, styles.spacingOuterTopSmallest, styles.spacingOuterBottomSmallest, styles.textWhite ]
                                        })}
                                        text={DynamicTextProperty({
                                            scope: "p1.NativeMobile.Run_NewEdit.dataView3",
                                            template: { "elements": t( [ [ 1 ] ] ), "parameters": { "1": "NativeMobile.Run/Speed" }, "formats": { "1": t( [ { "groupDigits": false, "decimalPrecision": 2 } ] ) } }
                                        })} />,
                                    <$Text key="p1.NativeMobile.Run_NewEdit.text12"
                                        $widgetId="p1.NativeMobile.Run_NewEdit.text12"
                                        style={StyleProperty({
                                            styles: [ styles.Text, styles.TextHeading4, styles.textCenter, styles.textWhite ]
                                        })}
                                        text={DynamicTextProperty({
                                            scope: "p1.NativeMobile.Run_NewEdit.dataView3",
                                            template: { "elements": t( [ [ "KM/Hr" ] ] ), "parameters": { "1": "NativeMobile.Run/Speed" }, "formats": { "1": t( [ { "groupDigits": false, "decimalPrecision": 2 } ] ) } }
                                        })} />
                                ]} />
                        ]} />,
                    <$Container key="p1.NativeMobile.Run_NewEdit.container8"
                        $widgetId="p1.NativeMobile.Run_NewEdit.container8"
                        style={StyleProperty({
                            styles: [ styles.Container, styles.infoContainer, styles.infoContainerFullWidth ]
                        })}
                        onClick={undefined}
                        content={[
                            <$View key="p1.NativeMobile.Run_NewEdit.layoutGrid3"
                                $widgetId="p1.NativeMobile.Run_NewEdit.layoutGrid3"
                                style={StyleProperty({
                                    styles: [ styles.LayoutGrid ]
                                })}
                                content={[
                                    <$View key="p1.NativeMobile.Run_NewEdit.layoutGrid3$row0"
                                        $widgetId="p1.NativeMobile.Run_NewEdit.layoutGrid3$row0"
                                        style={StyleProperty({
                                            styles: [ styles.row ]
                                        })}
                                        content={[
                                            <$View key="p1.NativeMobile.Run_NewEdit.layoutGrid3$row0$column0"
                                                $widgetId="p1.NativeMobile.Run_NewEdit.layoutGrid3$row0$column0"
                                                style={StyleProperty({
                                                    styles: [ styles.col ]
                                                })}
                                                content={[
                                                    <$Container key="p1.NativeMobile.Run_NewEdit.container2"
                                                        $widgetId="p1.NativeMobile.Run_NewEdit.container2"
                                                        style={StyleProperty({
                                                            styles: [ styles.Container ]
                                                        })}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Text key="p1.NativeMobile.Run_NewEdit.text7"
                                                                $widgetId="p1.NativeMobile.Run_NewEdit.text7"
                                                                style={StyleProperty({
                                                                    styles: [ styles.Text, styles.TextHeading4, styles.textBold, styles.spacingOuterBottomSmallest ]
                                                                })}
                                                                text={DynamicTextProperty({
                                                                    template: { "elements": t( [ [ "Started:" ] ] ) }
                                                                })} />,
                                                            <$Text key="p1.NativeMobile.Run_NewEdit.text9"
                                                                $widgetId="p1.NativeMobile.Run_NewEdit.text9"
                                                                style={StyleProperty({
                                                                    styles: [ styles.Text, styles.TextHeading3 ]
                                                                })}
                                                                text={DynamicTextProperty({
                                                                    scope: "p1.NativeMobile.Run_NewEdit.dataView3",
                                                                    template: { "elements": t( [ [ 1 ] ] ), "parameters": { "1": "NativeMobile.Run/StartTime" }, "formats": { "1": t( [ { "type": "datetime" } ] ) } }
                                                                })} />
                                                        ]} />
                                                ]} />
                                        ]} />,
                                    <$View key="p1.NativeMobile.Run_NewEdit.layoutGrid3$row1"
                                        $widgetId="p1.NativeMobile.Run_NewEdit.layoutGrid3$row1"
                                        style={StyleProperty({
                                            styles: [ styles.row ]
                                        })}
                                        content={[
                                            <$View key="p1.NativeMobile.Run_NewEdit.layoutGrid3$row1$column0"
                                                $widgetId="p1.NativeMobile.Run_NewEdit.layoutGrid3$row1$column0"
                                                style={StyleProperty({
                                                    styles: [ styles.col ]
                                                })}
                                                content={[
                                                    <$Container key="p1.NativeMobile.Run_NewEdit.container3"
                                                        $widgetId="p1.NativeMobile.Run_NewEdit.container3"
                                                        style={StyleProperty({
                                                            styles: [ styles.Container, styles.spacingOuterTopMedium ]
                                                        })}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Text key="p1.NativeMobile.Run_NewEdit.text10"
                                                                $widgetId="p1.NativeMobile.Run_NewEdit.text10"
                                                                style={StyleProperty({
                                                                    styles: [ styles.Text, styles.TextHeading4, styles.textBold, styles.spacingOuterBottomSmallest ]
                                                                })}
                                                                text={DynamicTextProperty({
                                                                    template: { "elements": t( [ [ "Ended:" ] ] ) }
                                                                })} />,
                                                            <$Text key="p1.NativeMobile.Run_NewEdit.text11"
                                                                $widgetId="p1.NativeMobile.Run_NewEdit.text11"
                                                                style={StyleProperty({
                                                                    styles: [ styles.Text, styles.TextHeading3 ]
                                                                })}
                                                                text={DynamicTextProperty({
                                                                    scope: "p1.NativeMobile.Run_NewEdit.dataView3",
                                                                    template: { "elements": t( [ [ 1 ] ] ), "parameters": { "1": "NativeMobile.Run/EndTime" }, "formats": { "1": t( [ { "type": "datetime" } ] ) } }
                                                                })} />
                                                        ]} />
                                                ]} />
                                        ]} />
                                ]} />
                        ]} />,
                    <$Container key="p1.NativeMobile.Run_NewEdit.container9"
                        $widgetId="p1.NativeMobile.Run_NewEdit.container9"
                        style={StyleProperty({
                            styles: [ styles.Container, styles.spacingOuterTopMedium, styles.alignChildrenCenter ]
                        })}
                        onClick={undefined}
                        content={[
                            <$ConditionalVisibilityWrapper key="p1.NativeMobile.Run_NewEdit.actionButton1$visibility"
                                $widgetId="p1.NativeMobile.Run_NewEdit.actionButton1$visibility"
                                visible={ExpressionProperty({
                                    expression: { "expr": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Status" }, { "type": "literal", "value": "NotStarted" } ] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Status" }, { "type": "literal", "value": null } ] } }, "then": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": "p1.NativeMobile.Run_NewEdit.dataView3" } }
                                })}
                                contents={[
                                    <$Button key="p1.NativeMobile.Run_NewEdit.actionButton1"
                                        $widgetId="p1.NativeMobile.Run_NewEdit.actionButton1"
                                        style={StyleProperty({
                                            styles: [ styles.ActionButton, styles.btnLarge, styles.ctaButton, styles.spacingOuterBottomLarger ]
                                        })}
                                        caption={DynamicTextProperty({
                                            template: { "elements": t( [ [ "Start" ] ] ) }
                                        })}
                                        icon={IconProperty({
                                            icon: { "type": "glyph", "iconClass": "glyphicon-play" }
                                        })}
                                        onClick={ActionProperty({
                                            action: { "type": "callNanoflow", "argMap": { "Run": { "widget": "$pageParameter", "source": "object" } }, "config": { "nanoflow": () => require("C:/Users/abc/Documents/Mendix/New folder/deployment/native/nanoflows/NativeMobile.ACT_StartRun").ACT_StartRun, "allowedRoles": [ "Administrator", "User" ] } },
                                            abortOnServerValidation: false
                                        })}
                                        disabledDuringAction={true} />
                                ]} />,
                            <$ConditionalVisibilityWrapper key="p1.NativeMobile.Run_NewEdit.actionButton2$visibility"
                                $widgetId="p1.NativeMobile.Run_NewEdit.actionButton2$visibility"
                                visible={ExpressionProperty({
                                    expression: { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Status" }, { "type": "literal", "value": "Busy" } ] }, "then": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": "p1.NativeMobile.Run_NewEdit.dataView3" } }
                                })}
                                contents={[
                                    <$Button key="p1.NativeMobile.Run_NewEdit.actionButton2"
                                        $widgetId="p1.NativeMobile.Run_NewEdit.actionButton2"
                                        style={StyleProperty({
                                            styles: [ styles.ActionButton, styles.btnLarge, styles.ctaButton, styles.btnDanger, styles.spacingOuterBottomLarger ]
                                        })}
                                        caption={DynamicTextProperty({
                                            template: { "elements": t( [ [ "Stop" ] ] ) }
                                        })}
                                        icon={IconProperty({
                                            icon: { "type": "glyph", "iconClass": "glyphicon-stop" }
                                        })}
                                        onClick={ActionProperty({
                                            action: { "type": "callNanoflow", "argMap": { "Run": { "widget": "$pageParameter", "source": "object" } }, "config": { "nanoflow": () => require("C:/Users/abc/Documents/Mendix/New folder/deployment/native/nanoflows/NativeMobile.ACT_EndRun").ACT_EndRun, "allowedRoles": [ "Administrator", "User" ] } },
                                            abortOnServerValidation: false
                                        })}
                                        disabledDuringAction={true} />
                                ]} />,
                            <$ConditionalVisibilityWrapper key="p1.NativeMobile.Run_NewEdit.actionButton3$visibility"
                                $widgetId="p1.NativeMobile.Run_NewEdit.actionButton3$visibility"
                                visible={ExpressionProperty({
                                    expression: { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Status" }, { "type": "literal", "value": "Done" } ] }, "then": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": "p1.NativeMobile.Run_NewEdit.dataView3" } }
                                })}
                                contents={[
                                    <$Button key="p1.NativeMobile.Run_NewEdit.actionButton3"
                                        $widgetId="p1.NativeMobile.Run_NewEdit.actionButton3"
                                        style={StyleProperty({
                                            styles: [ styles.ActionButton, styles.btnLarge, styles.ctaButton, styles.alignSelfCenter, styles.btnSuccess, styles.spacingOuterBottomMedium ]
                                        })}
                                        caption={DynamicTextProperty({
                                            template: { "elements": t( [ [ "View on map" ] ] ) }
                                        })}
                                        icon={IconProperty({
                                            icon: { "type": "glyph", "iconClass": "glyphicon-map-marker" }
                                        })}
                                        onClick={ActionProperty({
                                            action: { "type": "openPage", "argMap": { "$pageParameter": { "widget": "$pageParameter", "source": "object" } }, "config": { "name": "NativeMobile.Run_MapView", "location": "content", "allowedRoles": [ "Administrator", "User" ] } },
                                            abortOnServerValidation: false
                                        })}
                                        disabledDuringAction={true} />
                                ]} />,
                            <$ConditionalVisibilityWrapper key="p1.NativeMobile.Run_NewEdit.text1$visibility"
                                $widgetId="p1.NativeMobile.Run_NewEdit.text1$visibility"
                                visible={ExpressionProperty({
                                    expression: { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Status" }, { "type": "literal", "value": "Done" } ] }, "args": { "currentObject": "p1.NativeMobile.Run_NewEdit.dataView3" } }
                                })}
                                contents={[
                                    <$Text key="p1.NativeMobile.Run_NewEdit.text1"
                                        $widgetId="p1.NativeMobile.Run_NewEdit.text1"
                                        style={StyleProperty({
                                            styles: [ styles.Text, styles.TextHeading3, styles.textCenter, styles.spacingOuterBottomLarger ]
                                        })}
                                        text={DynamicTextProperty({
                                            template: { "elements": t( [ [ "Finished" ] ] ) }
                                        })} />
                                ]} />
                        ]} />
                ]} />,
            <$ConditionalVisibilityWrapper key="p1.NativeMobile.Run_NewEdit.container100$visibility"
                $widgetId="p1.NativeMobile.Run_NewEdit.container100$visibility"
                visible={ExpressionProperty({
                    expression: { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Status" }, { "type": "literal", "value": "Busy" } ] }, "args": { "currentObject": "p1.NativeMobile.Run_NewEdit.dataView3" } }
                })}
                contents={[
                    <$Container key="p1.NativeMobile.Run_NewEdit.container100"
                        $widgetId="p1.NativeMobile.Run_NewEdit.container100"
                        style={StyleProperty({
                            styles: [ styles.Container ]
                        })}
                        onClick={undefined}
                        content={[
                            <$com_mendix_widget_native_appevents_AppEvents key="p1.NativeMobile.Run_NewEdit.appEvents4"
                                $widgetId="p1.NativeMobile.Run_NewEdit.appEvents4"
                                onLoadAction={undefined}
                                onResumeAction={undefined}
                                onResumeTimeout={0}
                                onOnlineAction={undefined}
                                onOnlineTimeout={5}
                                onOfflineAction={undefined}
                                onOfflineTimeout={5}
                                timerType={"interval"}
                                delayTime={1}
                                onTimeoutAction={ActionProperty({
                                    action: { "type": "callNanoflow", "argMap": { "Run": { "widget": "$pageParameter", "source": "object" } }, "config": { "nanoflow": () => require("C:/Users/abc/Documents/Mendix/New folder/deployment/native/nanoflows/NativeMobile.ACT_UpdateTime").ACT_UpdateTime, "allowedRoles": [ "User" ] } },
                                    abortOnServerValidation: false
                                })}
                                style={StyleProperty({
                                    styles: [ styles.com_mendix_widget_native_appevents_AppEvents ]
                                })} />
                        ]} />
                ]} />,
            <$com_mendix_widget_native_floatingactionbutton_FloatingActionButton key="p1.NativeMobile.Run_NewEdit.floatingActionButton2"
                $widgetId="p1.NativeMobile.Run_NewEdit.floatingActionButton2"
                icon={IconProperty({
                    icon: { "type": "glyph", "iconClass": "glyphicon-camera" }
                })}
                iconActive={undefined}
                horizontalPosition={"right"}
                verticalPosition={"bottom"}
                onClick={ActionProperty({
                    action: { "type": "callNanoflow", "argMap": { "Run": { "widget": "$pageParameter", "source": "object" } }, "config": { "nanoflow": () => require("C:/Users/abc/Documents/Mendix/New folder/deployment/native/nanoflows/NativeMobile.ACT_CaptureRunImage").ACT_CaptureRunImage, "allowedRoles": [ "Administrator", "User" ] } },
                    abortOnServerValidation: false
                })}
                secondaryButtons={[]}
                style={StyleProperty({
                    styles: [ styles.com_mendix_widget_native_floatingactionbutton_FloatingActionButton ]
                })} />
        ]} />
];

export const placeholder$Header = () => [
    <$Image key="p1.NativeMobile.Run_NewEdit.image2"
        $widgetId="p1.NativeMobile.Run_NewEdit.image2"
        style={StyleProperty({
            styles: [ styles.Image, styles.logoIconImage, styles.spacingOuterRightSmaller ]
        })}
        source={StaticImageProperty({
            image: NativeMobile$Image_collection$mendix_icon_white$png
        })}
        onClick={undefined} />
];

export const $$title = t([
    "Run"
] );

export const $$style = [ styles.Layout, styles.Page, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium, styles.backgroundPrimary ];

export const $$page = () => mainContent(placeholder$Main);

export const $$sidebar = () => sidebar(placeholder$Main);

