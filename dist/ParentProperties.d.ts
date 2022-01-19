/**
 * This is the properties library
 */
export declare type ParentProperties = {
    /**
     * This is not *Mandatory By default set to 300 but you can change and add your own
     */
    width?: number | undefined;
    /**
     * This is not *Mandatory By default set to 50 but you can change and add your own
     */
    height?: number | undefined;
    /**
     * Provide text for the Placeholder
     */
    placeholder?: string | undefined;
    /**
     * Provide custom style/decoration for the InputBox
     */
    boxStyle?: objectProperties | undefined;
    /**
     * Provide custom style/decoration for the Text inside the InputBox
     */
    inputStyle?: objectProperties | undefined;
    /**
     * text: Provide text for the Label (String)
     *
     * style: Provide custom style for the Label (Object)
     */
    labelConfig?: {
        text: string | undefined;
        style: objectProperties | undefined;
    };
    /**
     * text: Provide custom mandatory message to display like(*This is Required) you can add your own (String)
     *
     * style: Provide custom style for the required text (Object)
     */
    requiredConfig?: {
        /**
         * please wrap the text prop with the Text Component
         * example below
         *
         * \<Text>*This is Required\</Text>
         *
         * OR
         *
         * \<Text>{message}\</Text>
         */
        text: string | "" | undefined;
        style: objectProperties | undefined;
    };
    /**
     * Provide True to display SHOW/HIDE by default set to False
     */
    toggle?: boolean | undefined;
    /**
     * Toggle option may not work after changing the keyboard settings please check the same
     */
    keyboardType?: "default" | "name-phone-pad" | "email-address" | "phone-pad" | undefined;
    /**
     * Provide Color for change the box color while focusing the InputBox
     */
    focusColor?: string | undefined;
    /**
     * Provide Color for the InputBox by default color set to silver
     */
    boxColor?: string | undefined;
    /**
     * Function like onChangeText
     */
    onChangeText?: (text: string) => void;
    /**
     * You can use this to set predefine values or get the current InputBox value
     */
    values?: string | undefined;
};
export declare type AlignType = "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
export declare type objectProperties = {
    backfaceVisibility?: "visible" | "hidden" | undefined;
    backgroundColor?: string | undefined;
    borderBottomColor?: string | undefined;
    borderBottomEndRadius?: number | undefined;
    borderBottomLeftRadius?: number | undefined;
    borderBottomRightRadius?: number | undefined;
    borderBottomStartRadius?: number | undefined;
    borderColor?: string | undefined;
    borderEndColor?: string | undefined;
    borderLeftColor?: string | undefined;
    borderRadius?: number | undefined;
    borderRightColor?: string | undefined;
    borderStartColor?: string | undefined;
    borderStyle?: "solid" | "dotted" | "dashed" | undefined;
    borderTopColor?: string | undefined;
    borderTopEndRadius?: number | undefined;
    borderTopLeftRadius?: number | undefined;
    borderTopRightRadius?: number | undefined;
    borderTopStartRadius?: number | undefined;
    opacity?: number | undefined;
    testID?: string | undefined;
    color?: string | undefined;
    alignContent?: "flex-start" | "flex-end" | "center" | "stretch" | "space-between" | "space-around" | undefined;
    alignItems?: AlignType | undefined;
    alignSelf?: "auto" | AlignType | undefined;
    aspectRatio?: number | undefined;
    borderBottomWidth?: number | undefined;
    borderEndWidth?: number | string | undefined;
    borderLeftWidth?: number | undefined;
    borderRightWidth?: number | undefined;
    borderStartWidth?: number | string | undefined;
    borderTopWidth?: number | undefined;
    borderWidth?: number | undefined;
    bottom?: number | string | undefined;
    display?: "none" | "flex" | undefined;
    end?: number | string | undefined;
    flex?: number | undefined;
    flexBasis?: number | string | undefined;
    flexDirection?: "row" | "column" | "row-reverse" | "column-reverse" | undefined;
    flexGrow?: number | undefined;
    flexShrink?: number | undefined;
    flexWrap?: "wrap" | "nowrap" | "wrap-reverse" | undefined;
    fontFamily?: string | undefined;
    fontSize?: number | undefined;
    fontStyle?: "normal" | "italic" | undefined;
    fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined;
    letterSpacing?: number | undefined;
    lineHeight?: number | undefined;
    height?: number | string | undefined;
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | undefined;
    left?: number | string | undefined;
    margin?: number | string | undefined;
    marginBottom?: number | string | undefined;
    marginEnd?: number | string | undefined;
    marginHorizontal?: number | string | undefined;
    marginLeft?: number | string | undefined;
    marginRight?: number | string | undefined;
    marginStart?: number | string | undefined;
    marginTop?: number | string | undefined;
    marginVertical?: number | string | undefined;
    maxHeight?: number | string | undefined;
    maxWidth?: number | string | undefined;
    minHeight?: number | string | undefined;
    minWidth?: number | string | undefined;
    overflow?: "visible" | "hidden" | "scroll" | undefined;
    padding?: number | string | undefined;
    paddingBottom?: number | string | undefined;
    paddingEnd?: number | string | undefined;
    paddingHorizontal?: number | string | undefined;
    paddingLeft?: number | string | undefined;
    paddingRight?: number | string | undefined;
    paddingStart?: number | string | undefined;
    paddingTop?: number | string | undefined;
    paddingVertical?: number | string | undefined;
    position?: "absolute" | "relative" | undefined;
    right?: number | string | undefined;
    start?: number | string | undefined;
    top?: number | string | undefined;
    textAlign?: "center" | "auto" | "left" | "right" | "justify" | undefined;
    textAlignVertical?: "center" | "auto" | "top" | "bottom" | undefined;
    textDecorationColor?: string | undefined;
    textDecorationLine?: "none" | "underline" | "line-through" | "underline line-through" | undefined;
    textDecorationStyle?: "solid" | "dotted" | "dashed" | "double" | undefined;
    textShadowColor?: string | undefined;
    textTransform?: "none" | "capitalize" | "uppercase" | "lowercase" | undefined;
    tintColor?: string | undefined;
    width?: number | string | undefined;
    zIndex?: number | undefined;
};
//# sourceMappingURL=ParentProperties.d.ts.map