import { brand, font, navigation, contrast, tabContainer } from "../core/variables";
import { NativeModules, Platform } from "react-native";
import { anyColorToRgbString } from "../core/helpers/_functions/convertcolors";

// Dark Mode - Inherits OS theme if possible
export const darkMode = NativeModules && NativeModules.RNDarkMode && NativeModules.RNDarkMode.initialMode
                        ? NativeModules.RNDarkMode.initialMode === "dark"
                        : false;


/** login page styling */

/*-- background image --*/
export const backgroundImageContainer = {
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
};

/*-- background image --*/
export const backgroundImage = {
    container: {
        flex: 1,
        width: null,
        height: null,
    },
};

/*-- login logo image --*/
export const loginLogoImage = {
    image: {
        width: 204,
        height: 55,
    }
};

/*-- login button --*/
export const loginButton = {
    container: {
        backgroundColor: 'transparent',
        borderColor: "white",
    },
};

/*-- container over background image --*/
export const overBackgroundImage = {
    container: {
        position: "absolute",
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    input: {
        backgroundColor: 'rgba(0,0,0,0.3)'
    }
};

/*-- login textbox --*/
export const loginTextbox = {
    input: {
        backgroundColor: 'transparent',
        borderColor: "white",
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        placeholderTextColor: "white",
        color: "white",
        paddingVertical: 5,
        paddingHorizontal: 0,
    },
};
/** end of login page styling */

/*-- page header --*/
export const Layout = {
    header: {
        container: {
            //backgroundColor: brand.primary,
            ...Platform.select({
                ios: {
                    height: 110,
                },
                android: {
                    height: 60,
                    elevation: 0, //remove shadow from android
                },
            }),
        },
        title: {
            ...Platform.select({
                ios: {
                },
                android: {
                    fontWeight: font.weightLight,
                },
            }),
        },
    },
};

/*-- logo-icon image --*/
export const logoIconImage = {
    image: {
        width: 35,
        height: 35,
    }
};

/*-- background image outer container --*/
export const cardFullWidthContainer = {
    container: {
        width: '100%',
        height: 140,
        borderRadius: 0,
        overflow: "hidden",
    },
};

/*-- background image --*/
export const cardFullWidthImage = {
    container: { 
        flexDirection: 'row',
        height: 200,
    },
    image: {
        borderRadius: 0,
    },
};

/*-- textbox container for run section --*/
export const cardTextbox = {
    container: {
        position: "absolute",
        width: '42%',
        top: 5, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        justifyContent: 'center', 
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        padding: 5,
        height: 130,
    },
};

export const cardTextboxPink = {
    container: {
        backgroundColor: 'rgba(255, 99, 142, 0.9)',
    },
};

export const cardTextboxBlue = {
    container: {
        backgroundColor: 'rgba(0, 0, 254, 0.9)',
    },
};

export const cardTextboxGold = {
    container: {
        backgroundColor: 'rgba(218,165,32, 0.9)',
    },
};

/*-- carousel card --*/
export const cardCarousel = {
    container: { 
        borderRadius: 0,
    },
};

/*-- carousel card image --*/
export const cardCarouselImage = {
    container: { 
        flexDirection: 'row',
        borderRadius: 0,
    },
    image: {
        borderRadius: 0,
    },
};

/*-- carousel card text --*/
export const cardCarouselText = {
    container: { 
    },
    text: {
        textShadowColor: "#888",
        textShadowRadius: 3,
        textShadowOffset: {
            width: 0,
            height: 1,
        },
    }
};

/*-- bright yellow call to action button --*/
export const ctaButton = {
    container: {
        width: '90%',
        borderRadius: 0,
        borderWidth: 0,
        backgroundColor: '#f7f94d',
        paddingVertical: 15,
    },
    icon: {
        color: '#000',
    },
    caption: {
        color: '#000',
        textTransform: "uppercase",
        fontSize: font.sizeH4,
    },
};

/*-- running shoe image --*/
export const runningShoeImage = {
    container: { 
        maxHeight: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        maxWidth: "100%",
        maxHeight: 80,
        resizeMode: "cover",
    },
};

/*-- medal image --*/
export const medalImage = {
    container: { 
        maxHeight: 70,
    },
    image: {
        maxWidth: "100%",
    },
};

/*-- trophy image --*/
export const trophyImage = {
    container: { 
        maxHeight: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        maxWidth: "100%",
        maxHeight: 80,
        resizeMode: "cover",
    },
};

/*-- profile page image --*/
export const profilePageImage = {
    container: { 
        maxHeight: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        maxWidth: "100%",
        maxHeight: 80,
        resizeMode: "cover",
    },
};

/*-- bottom nav bar --*/
export const navigationStyle = {
    bottomBar: {
        container: {
            backgroundColor: darkMode ? brand.primary : "white",
            borderTopWidth: darkMode ? 0: 1,
            ...Platform.select({
                ios: {
                    height: 60,
                },
                android: {
                    height: 60,
                    paddingVertical: 10,
                },
            }),
        },
        label: {
            color: darkMode ? "rgba(255,255,255, 0.5)" : navigation.bottomBar.color,
        },
        selectedLabel: {
            color: darkMode ? "white" : navigation.bottomBar.selectedTextColor,
        },
        icon: {
            color: darkMode ? "rgba(255,255,255, 0.5)" : navigation.bottomBar.color,
        },
        selectedIcon: {
            color: darkMode ? "white" : navigation.bottomBar.selectedIconColor,
        },
    },
}

/*-- profile info --*/
export const profileInfoContainer = {
    container: {
        justifyContent: 'center', 
        backgroundColor: darkMode ? contrast.lower : contrast.low ,
        padding: 10,
        //height: 100,
        width: '100%',
        borderRadius: 5,
    },
};

/*-- info about the run container --*/
export const infoContainer = {
    container: {
        justifyContent: 'center', 
        backgroundColor: contrast.lower,
        padding: 10,
        height: 100,
        width: '30%',
        borderRadius: 5,
    },
};

export const infoContainerPink = {
    container: {
        backgroundColor: '#ff608e',
    },
};

export const infoContainerBlue = {
    container: {
        backgroundColor: '#0000fe',
    },
};

export const infoContainerGold = {
    container: {
        backgroundColor: '#DAA520',
    },
};

export const infoContainerFullWidth = {
    container: {
        paddingVertical: 30,
        paddingHorizontal: 20,
        width: '100%',
        height: 'auto',
    },
};

/** tabs styling **/
export const TabContainer = {
    indicator: {
        backgroundColor: darkMode ? "#FDFE17" : tabContainer.indicator.backgroundColor,
        height: 3,
    },
    activeLabel: {
        color: darkMode ? "#FDFE17" : tabContainer.activeLabel.color,
    },
};

// floating button color
export const com_mendix_widget_native_floatingactionbutton_FloatingActionButton = {
    button: {
        // Size, ripplecolor and all ViewStyle properties are allowed
        size: 60,
    },
    buttonIcon: {
        // Size and color are allowed
        color: '#fff',
        size: 25,
    },
};

// action button font size
export const ActionButton = {
    icon: {
        size: font.sizeH5,
    },
    caption: {
        fontSize: font.sizeH5,
    },
};

export const com_mendix_widget_native_bottomsheet_BottomSheet = {
    container: {
        borderRadius: 10,
        borderColor: darkMode ? "#f7f94d" : contrast.low,
        borderWidth: 1,
    },
};

export const showPopupBtn = { 
    container: {
        backgroundColor: "transparent",
        borderWidth: 0,
        borderRadius: 0,
        width: 25,
        paddingHorizontal: 5,
        paddingVertical: 15,
    },
    icon: {
        color: darkMode ? "white" : "black",
        size: 20,
    },
};

export const com_mendix_widget_native_popupmenu_PopupMenu = {
    container: {
        backgroundColor: darkMode ? "black" : "white",
        borderWidth: darkMode ? 1 : 0,
        borderColor: darkMode ? contrast.lower : "black",
    },
    basic: {        
        dividerColor: darkMode ? contrast.low : font.color,
        itemStyle: {
            defaultStyle: {
                color: darkMode ? "white" : "black",
            },
        },
    },
};

/*-- search textbox --*/
export const friendsButton = {    
    container: {
        width: '20%',
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        paddingVertical: 15,
        ...Platform.select({
            ios: {
                borderColor: darkMode ? "white" : contrast.lower,
            },
            android: {
                borderWidth: 0,
            },
        }),
    },
};

/*-- search textbox --*/
export const friendsTextbox = {
    container: {
        maxWidth: "80%",
    },
    label: {
        color: darkMode ? "white" : "black",
    },
    input: {        
        color: darkMode ? "white" : "black",
        borderRightWidth:0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderColor: darkMode ? "white" : contrast.lower,
    }
};

/*-- push tabs lower for ios devices --*/
export const homeTabs = {
    container: {
        ...Platform.select({
            ios: {
                marginTop: 40,
            },
            android: {
            },
        }),
    },
};

export const Text = {
    text: {
        ...Platform.select({
            ios: {
                fontSize: 14,
            },
            android: {
            },
        }),
    },
};