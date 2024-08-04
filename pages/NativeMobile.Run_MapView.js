import { createElement } from "react";
const React = { createElement };

import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { AttributeProperty } from "mendix/AttributeProperty";
import { DynamicTextProperty } from "mendix/DynamicTextProperty";
import { StyleProperty } from "mendix/StyleProperty";

import { Button } from "mendix/Button";
import { Container } from "mendix/Container";
import { DataView } from "mendix/DataView";
import { mendix_runmap_Runmap } from "externalWidgets";
import { asPluginWidgets, t } from "mendix/native";

import { mainContent, sidebar } from "C:/Users/abc/Documents/Mendix/New folder/deployment/native/layouts/Atlas_UI_Resources.NativePhone_FullPage.js";

import * as styles from "C:/Users/abc/Documents/Mendix/New folder/theme/styles.js";

const { $DataView, $mendix_runmap_Runmap, $Container, $Button } = asPluginWidgets({ DataView, mendix_runmap_Runmap, Container, Button });

const placeholder$Main = () => [
    <$DataView key="p2.NativeMobile.Run_MapView.dataView2"
        $widgetId="p2.NativeMobile.Run_MapView.dataView2"
        style={StyleProperty({
            styles: [ styles.DataView ]
        })}
        object={AssociationObjectProperty({
            scope: "$pageParameter"
        })}
        content={[
            <$mendix_runmap_Runmap key="p2.NativeMobile.Run_MapView.runmap1"
                $widgetId="p2.NativeMobile.Run_MapView.runmap1"
                locations={AttributeProperty({
                    scope: "p2.NativeMobile.Run_MapView.dataView2",
                    path: "",
                    entity: "NativeMobile.Run",
                    attribute: "LocationJSON",
                    onChange: { "type": "doNothing", "argMap": {}, "config": {} }
                })}
                lines={AttributeProperty({
                    scope: "p2.NativeMobile.Run_MapView.dataView2",
                    path: "",
                    entity: "NativeMobile.Run",
                    attribute: "LinesJSON",
                    onChange: { "type": "doNothing", "argMap": {}, "config": {} }
                })}
                startIcon={undefined}
                finishIcon={undefined}
                style={StyleProperty({
                    styles: [ styles.mendix_runmap_Runmap ]
                })} />,
            <$Container key="p2.NativeMobile.Run_MapView.container6"
                $widgetId="p2.NativeMobile.Run_MapView.container6"
                style={StyleProperty({
                    styles: [ styles.Container, styles.spacingOuterTopLarger ]
                })}
                onClick={undefined}
                content={[
                    <$Button key="p2.NativeMobile.Run_MapView.actionButton1"
                        $widgetId="p2.NativeMobile.Run_MapView.actionButton1"
                        style={StyleProperty({
                            styles: [ styles.ActionButton ]
                        })}
                        caption={DynamicTextProperty({
                            template: { "elements": t( [ [ "Close page" ] ] ) }
                        })}
                        icon={undefined}
                        onClick={ActionProperty({
                            action: { "type": "closePage", "argMap": {}, "config": { "numberOfPages": 1 } },
                            abortOnServerValidation: false
                        })}
                        disabledDuringAction={true} />
                ]} />
        ]} />
];

export const $$title = t([
    "Edit Run"
] );

export const $$style = [ styles.Layout, styles.Page, styles.spacingInnerTopLarger, styles.spacingInnerBottomLarger, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium, styles.backgroundPrimary ];

export const $$page = () => mainContent(placeholder$Main);

export const $$sidebar = () => sidebar(placeholder$Main);

