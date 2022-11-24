import {
    AppContext,
    IMainProps,
    IMainState,
    ISiderState,
    ISlotElement,
    ISlotProps,
    Component,
    BaseComponentSheet,
    BaseComponentRender,
    createRef,
    RefObject,
    cloneElement,
    BaseComponentProps,
} from '@univer/base-component';
import { AsyncFunction, SheetContext, IKeyType, LocaleType, PLUGIN_NAMES, Tools, Workbook } from '@univer/core';
import cssVars from 'css-vars-ponyfill';
import { Container, Content, Footer, Header, Layout, Sider } from '@univer/style-universheet';
import defaultSkin from '@univer/style-universheet/assets/css/skin/default.module.less';
import darkSkin from '@univer/style-universheet/assets/css/skin/dark.module.less';
// All skins' less file
import greenSkin from '@univer/style-universheet/assets/css/skin/green.module.less';
// app context for skin and Locale
import { RightMenu } from '../RightMenu';
import { InfoBar } from '../InfoBar';
import style from './index.module.less';
import { ToolBar } from '../ToolBar';
import { CountBar } from '../CountBar/CountBar';
import { IShowToolBarConfig } from '../../../Model/ToolBarModel';
import { ModalGroup } from '../ModalGroup/ModalGroup';
import { SheetPlugin } from '../../../SheetPlugin';
import { FormulaBar } from '../FormulaBar';
import { SideGroup } from '../SideGroup/SideGroup';
import { SheetBar } from '../SheetBar';

export interface ILayout {
    outerLeft?: boolean;

    outerRight?: boolean;

    header?: boolean;

    footer?: boolean;

    innerLeft?: boolean;

    innerRight?: boolean;

    frozenHeaderLT?: boolean;

    frozenHeaderRT?: boolean;

    frozenHeaderLM?: boolean;

    frozenContent?: boolean;

    infoBar?: boolean;

    formulaBar?: boolean;

    countBar?: boolean;

    sheetBar?: boolean;

    // Whether to show the toolbar
    toolBar?: boolean;

    // Custom configuration toolbar,can be used in conjunction with showToolBar, showToolBarConfig has a higher priority
    toolBarConfig?: IShowToolBarConfig;

    // TODO: 支持 infoBar sheetBar, countBar, rightMenu rightMenuConfig(base-sheets)

    /**
     * 左右或者上下分割content区域
     *
     * undefined: no split
     * false: no split
     * true: horizontal split
     * "horizontal": horizontal split
     * "vertical": vertical split
     */

    contentSplit?: boolean | string;
}

export interface ISheetPluginConfigBase {
    layout: string | ILayout;
}

export interface BaseSheetContainerConfig extends BaseComponentProps, ISheetPluginConfigBase {
    container: HTMLElement;
    skin: string;
    context: SheetContext;
    getSplitLeftRef: (ref: RefObject<HTMLDivElement>) => void;
    getContentRef: (ref: RefObject<HTMLDivElement>) => void;
    addButton: (cb: Function) => void;
    addSider: (cb: AsyncFunction<ISlotProps>) => void;
    addMain: (cb: Function) => void;
    showSiderByName: (cb: Function) => void;
    showMainByName: (cb: Function) => void;
    onDidMount: () => void;
}

export interface BaseSheetContainerProps {
    config: BaseSheetContainerConfig;
}

export const defaultLayout: ILayout = {
    outerLeft: false,

    outerRight: true,

    header: true,

    footer: true,

    innerLeft: false,

    innerRight: false,

    frozenHeaderLT: true,

    frozenHeaderRT: true,

    frozenHeaderLM: true,

    frozenContent: true,

    infoBar: true,

    formulaBar: true,

    toolBar: true,

    countBar: true,

    sheetBar: true,

    toolBarConfig: {
        undoRedo: true, // Undo redo
        paintFormat: true, // Format brush
        currencyFormat: true, // currency format
        percentageFormat: true, // Percentage format
        numberDecrease: true, // 'Decrease the number of decimal places'
        numberIncrease: true, // 'Increase the number of decimal places
        font: true, // 'font'
        fontSize: true, // 'Font size'
        bold: true, // 'Bold (Ctrl+B)'
        italic: true, // 'Italic (Ctrl+I)'
        strikethrough: true, // 'Strikethrough (Alt+Shift+5)'
        underline: true, // 'Underline (Alt+Shift+6)'
        textColor: true, // 'Text color'
        fillColor: true, // 'Cell color'
        border: true, // 'border'
        mergeCell: true, // 'Merge cells'
        horizontalAlignMode: true, // 'Horizontal alignment'
        verticalAlignMode: true, // 'Vertical alignment'
        textWrapMode: true, // 'Wrap mode'
        textRotateMode: true, // 'Text Rotation Mode'
    },

    contentSplit: false,
};

/**
 * SheetContainer
 */

// Types for state
type IState = {
    layout: ILayout;
    currentLocale: string;
    currentSkin: string;
    printVisible: boolean;
    isCellEditorVisible: boolean;
    siderPanelList: ISiderState[];
    mainList: IMainState[];
    showSider: boolean;
    renderState: number;
};

/**
 * One universheet instance DOM container
 */
export class SheetContainer extends Component<BaseSheetContainerProps, IState> {
    splitLeftRef = createRef<HTMLDivElement>();

    rightRef = createRef<HTMLDivElement>();

    menuRef = createRef();

    cellRightRef = createRef<HTMLDivElement>();

    btnRef = createRef<HTMLButtonElement>();

    contentRef = createRef<HTMLDivElement>();

    layoutContainerRef = createRef<HTMLDivElement>();

    containerRef = createRef<HTMLDivElement>();

    refMap: IKeyType<RefObject<HTMLElement> | any> = {};

    leftContentLeft: number;

    leftContentTop: number;

    rightBorderX: number;

    rightBorderY: number;

    Render: BaseComponentRender;

    constructor(props: BaseSheetContainerProps) {
        super(props, { coreContext: props.config.context });

        const { container, skin, layout, context, addSider, addMain, showSiderByName, showMainByName } = props.config;

        addSider(this.addSider.bind(this));
        addMain(this.addMain.bind(this));
        showSiderByName(this.showSiderByName.bind(this));
        showMainByName(this.showMainByName.bind(this));

        const component = this._context.getPluginManager().getPluginByName<BaseComponentSheet>('ComponentSheet')!;
        this.Render = component.getComponentRender();

        this.setSkin(container, skin);

        // init state
        this.state = {
            layout:
                layout === 'auto'
                    ? Tools.deepClone(defaultLayout) // The defaultLayout must be cloned, otherwise the layout object will be referenced in multiple instances
                    : Tools.deepMerge(defaultLayout, layout),
            currentLocale: context.getLocale().options.currentLocale,
            currentSkin: skin,
            printVisible: true,
            isCellEditorVisible: false,
            siderPanelList: [],
            mainList: [],
            showSider: false,
            renderState: 0,
        };
    }

    /**
     * Change language
     * @param {String} lang new language
     *
     * e: {target: HTMLSelectElement } reference from  https://stackoverflow.com/a/48443771
     *
     */
    changeLocale(e: Event) {
        const target = e.target as HTMLSelectElement;
        const locale = target.value;
        this.props.config.context.getLocale().change(locale as LocaleType);

        // You must use setState to trigger the re-rendering of the child component
        this.setState({
            currentLocale: locale,
        });

        // publish
        this.props.config.context.getContextObserver('onAfterChangeUILocaleObservable')?.notifyObservers();
    }

    setSkin(container: HTMLElement, skin: string) {
        // Collect all  skins
        let root = document.documentElement;

        // get all skins
        const skins = {
            default: defaultSkin,
            dark: darkSkin,
            green: greenSkin,
        };

        // current skin set by user
        let currentSkin = skins[skin];

        // transform "primaryColor" to "--primary-color"
        currentSkin = Object.fromEntries(Object.keys(currentSkin).map((item) => [`--${item.replace(/([A-Z0-9])/g, '-$1').toLowerCase()}`, currentSkin[item]]));

        // ie11 does not support css variables, use css-vars-ponyfill to handle
        if (Tools.isIEBrowser()) {
            cssVars({
                // Options...

                // The container is invalid as rootElement, so the default setting is root.
                // Disadvantages: In ie11, only one set of skins can be used for multiple workbooks, and it is the skin set by the last workbook
                rootElement: root, // default

                variables: currentSkin,
            });
        } else {
            // set css variable

            let sheet = getSkinStyleSheet(container.id);

            /**
             *  covert object to style, remove " and replace , to ;
             *
             *  Example:
             *
             *  before: {--primary-color:"#0188fb",--primary-color-hover:"#5391ff"}
             *  after:  {--primary-color:#0188fb;--primary-color-hover:#5391ff;}
             */

            sheet.insertRule(
                `#${container.id} ${JSON.stringify(currentSkin)
                    .replace(/"/g, '')
                    .replace(/,(?=--)/g, ';')}`
            );
        }

        /**
         * get skin style sheet
         * @param id
         * @returns
         */

        function getSkinStyleSheet(id: string) {
            const title = 'universheet-skin-style';
            // avoid duplicates
            for (let i = 0; i < document.styleSheets.length; i++) {
                if (document.styleSheets[i].title === title) {
                    deleteStyleRuleIndexBySelector(document.styleSheets[i], id);

                    return document.styleSheets[i];
                }
            }
            const head = document.head || document.getElementsByTagName('head')[0];
            const styleEle = document.createElement('style');
            styleEle.title = title;
            head.appendChild(styleEle);

            return document.styleSheets[document.styleSheets.length - 1];
        }

        /**
         * delete style rule in universheet-skin-style
         * @param skinStyleSheet
         * @param id
         */
        function deleteStyleRuleIndexBySelector(skinStyleSheet: CSSStyleSheet, id: string) {
            let index = 0;
            for (let i = 0; i < skinStyleSheet.cssRules.length; i++) {
                const rule = skinStyleSheet.cssRules[i];

                if (rule instanceof CSSStyleRule && rule.selectorText === `#${id}`) {
                    index = i;
                    skinStyleSheet.deleteRule(index);
                    break;
                }
            }
        }
    }

    /**
     * Change skin
     * @param {String} lang new skin
     */
    changeSkin(e: Event) {
        const target = e.target as HTMLSelectElement;
        const skin = target.value;
        this.setSkin(this.props.config.container, skin);

        this.setState({
            currentSkin: skin,
        });

        // switch animation
        // https://www.webtips.dev/how-to-make-an-animated-day-and-night-toggle-switch;

        // publish
        this.props.config.context.getObserverManager().getObserver<Workbook>('onAfterChangeUISkinObservable')?.notifyObservers(this.props.config.context.getWorkBook());
        // this.props.config.context.onAfterChangeUISkinObservable.notifyObservers(this.props.config.context.getWorkBook())
    }

    /**
     * 右键菜单
     */
    // rightMenu = (e: MouseEvent) => {
    //     e.preventDefault();

    //     this.rightRef.current && (this.rightRef.current as unknown as RightMenu).handleContextMenu(e);
    // };

    /**
     * resize split content
     */
    resizeSplitContent = () => {};

    /**
     * split mouse down
     * @param e
     */
    handleSplitBarMouseDown = (e: MouseEvent) => {
        e = e || window.event; // Compatible with IE browser

        // Store the current mouse position

        this.leftContentLeft = this.splitLeftRef.current?.getBoundingClientRect().left!;
        this.leftContentTop = this.splitLeftRef.current?.getBoundingClientRect().top!;

        const mainContainer = this.splitLeftRef.current?.parentElement;
        this.rightBorderX = mainContainer?.getBoundingClientRect()?.width!;
        this.rightBorderY = mainContainer?.getBoundingClientRect()?.height!;

        document.addEventListener('mousemove', this.handleSplitBarMouseMove, false);
        document.addEventListener('mouseup', this.handleSplitBarMouseUp, false);
    };

    /**
     * split mouse move
     * @param e
     */
    handleSplitBarMouseMove = (e: MouseEvent) => {
        e = e || window.event; // Compatible with IE browser

        let diffLeft = e.clientX - this.leftContentLeft;
        let diffTop = e.clientY - this.leftContentTop;

        // Prevent crossing borders
        diffLeft = diffLeft >= this.rightBorderX ? this.rightBorderX : diffLeft;
        diffTop = diffTop >= this.rightBorderY ? this.rightBorderY : diffTop;

        // set new width
        if (this.state.layout.contentSplit === 'vertical') {
            this.splitLeftRef.current!.style.height = `${diffTop}px`;
        } else {
            this.splitLeftRef.current!.style.width = `${diffLeft}px`;
        }
    };

    /**
     * split mouse up
     * @param e
     */
    handleSplitBarMouseUp = (e: MouseEvent) => {
        document.removeEventListener('mousemove', this.handleSplitBarMouseMove, false);
        document.removeEventListener('mouseup', this.handleSplitBarMouseUp, false);
    };

    /**
     * click and double click
     *
     * @param e
     */
    handleContentClick = (e: MouseEvent) => {
        // TODO: get observer from observeManager
        // this._onInputObserver = engine.onInputChangedObservable.add((eventData: IEvent)=>{
        // })
    };

    /**
     * add plugin sider panel
     */
    addSider(item: ISlotProps): Promise<void> {
        /**
         * There will be multiple plugin panel added, so you need to use prevState to add panel from the previous state, otherwise it will cause overwriting
         */
        return new Promise((resolve) => {
            this.setState(
                (prevState) => {
                    const stateItem = Object.assign(item, {
                        show: false,
                        zIndex: prevState.siderPanelList.length + 1,
                    });
                    return {
                        siderPanelList: [...prevState.siderPanelList, stateItem],
                    };
                },
                () => {
                    resolve();
                }
            );
        });
    }

    /**
     * add plugin main area
     */
    addMain(item: IMainProps): Promise<void> {
        /**
         * There will be multiple plugin main added, so you need to use prevState to add panel from the previous state, otherwise it will cause overwriting
         */
        return new Promise((resolve) => {
            this.setState(
                (prevState) => {
                    const stateItem = Object.assign(item, {
                        show: false,
                        zIndex: prevState.mainList.length + 1,
                    });
                    return {
                        mainList: [...prevState.mainList, stateItem],
                    };
                },
                () => {
                    resolve();
                }
            );
        });
    }

    /**
     *
     * show or hide panel
     *
     * When you open two sidebars, you need to set the zIndex of the newly opened sidebar to the highest, so every time you open a sidebar, you need to recalculate the zIndex. For example, we already have 6 sidebars, this When the 3rd sidebar is opened
     *
     * 1 2 3 4 5 6
     *
     * Set 3 to 6, then rearrange the order after 3 to 3, 4, 5, and get
     *
     * 1 2 6 3 4 5
     */
    showSiderByName(name: string, show: boolean): Promise<void> {
        /**
         * There will be multiple plugin panel added, so you need to use prevState to add panel from the previous state, otherwise it will cause overwriting
         */
        return new Promise((resolve) => {
            this.setState(
                (prevState) => {
                    let showSider = false;

                    let currentZIndex = 0;
                    let zIndexList = prevState.siderPanelList.map((item) => {
                        if (item.name === name) {
                            currentZIndex = item.zIndex;
                        }
                        return item.zIndex;
                    });

                    const nextState = prevState.siderPanelList.map((item) => {
                        // Set according to user needs
                        if (item.name === name) {
                            item.show = show;
                            item.zIndex = Math.max(...zIndexList);
                        } else if (item.zIndex > currentZIndex) {
                            item.zIndex--;
                        }

                        // As long as there is a panel to be displayed, display the container
                        if (item.show) {
                            showSider = true;
                        }
                        return item;
                    });

                    return {
                        siderPanelList: nextState,
                        showSider,
                    };
                },
                () => {
                    resolve();
                }
            );
        });
    }

    /**
     * show or hide main
     */
    showMainByName(name: string, show: boolean): Promise<void> {
        /**
         * There will be multiple plugin panel added, so you need to use prevState to add panel from the previous state, otherwise it will cause overwriting
         */
        return new Promise((resolve) => {
            this.setState(
                (prevState) => {
                    const nextState = prevState.mainList.map((item) => {
                        // Set according to user needs
                        if (item.name === name) {
                            item.show = show;
                        }

                        return item;
                    });

                    return {
                        mainList: nextState,
                    };
                },
                () => {
                    resolve();
                }
            );
        });
    }

    /**
     * destroy
     */
    componentWillUnmount() {}

    componentDidMount() {
        // mount can
        this.props.config.getSplitLeftRef(this.splitLeftRef);
        // mount canvas
        this.props.config.getContentRef(this.contentRef);

        this.props.config.onDidMount();

        this.setState(
            (preState) => ({
                ...preState,
                renderState: 1,
            }),
            () => {
                // After the mount is successful, an observe is issued to notify other plug-ins that they can start using dom
                this.getContext()
                    .getPluginManager()
                    .getRequirePluginByName<SheetPlugin>(PLUGIN_NAMES.SPREADSHEET)
                    .getObserver('onSheetContainerDidMountObservable')
                    ?.notifyObservers(this);
            }
        );

        // this.initEvent();
    }

    /**
     * Render the component's HTML
     *
     * @returns {void}
     */
    render() {
        const { context } = this.props.config;
        const { layout, currentLocale, currentSkin, siderPanelList, mainList, showSider, renderState } = this.state;

        // Set Provider for entire Container
        return (
            <AppContext.Provider
                value={{
                    locale: context.getLocale(),
                    currentLocale: context.getLocale().options.currentLocale,
                    coreContext: context,
                }}
            >
                <Container ref={this.layoutContainerRef} className={style.layoutContainer}>
                    <Layout>
                        <Sider style={{ display: layout.outerLeft ? 'block' : 'none' }}></Sider>
                        <Layout className={style.mainContent} style={{ position: 'relative' }}>
                            <Header style={{ display: layout.header ? 'block' : 'none' }}>
                                {layout.infoBar && <InfoBar></InfoBar>}
                                {layout.toolBar && <ToolBar toolList={[]}></ToolBar>}
                                {layout.formulaBar && <FormulaBar></FormulaBar>}
                            </Header>
                            <Layout>
                                <Sider
                                    style={{
                                        display: layout.innerLeft ? 'block' : 'none',
                                    }}
                                >
                                    {/* innerLeft */}
                                </Sider>
                                <Content className={layout.contentSplit === 'vertical' ? style.contentContainerVertical : style.contentContainerHorizontal}>
                                    {/* extend main content */}

                                    <ModalGroup></ModalGroup>

                                    {!!layout.contentSplit && (
                                        <Container ref={this.splitLeftRef} className={style.contentInnerLeftContainer}>
                                            <div className={style.hoverCursor} onMouseDown={this.handleSplitBarMouseDown}></div>
                                        </Container>
                                    )}
                                    <Container ref={this.contentRef} className={style.contentInnerRightContainer} onClick={this.handleContentClick}>
                                        <RightMenu />

                                        <div style={{ position: 'fixed', right: '200px', top: '10px', fontSize: '14px' }}>
                                            <span style={{ display: 'inline-block', width: 50, margin: '5px 0 0 5px' }}>皮肤</span>
                                            <select value={currentSkin} onChange={this.changeSkin.bind(this)} style={{ width: 55 }}>
                                                <option value="default">默认</option>
                                                <option value="dark">暗黑</option>
                                                <option value="green">绿色</option>
                                            </select>

                                            <span style={{ display: 'inline-block', width: 50, margin: '5px 0 0 5px' }}>语言</span>

                                            <select value={currentLocale} onChange={this.changeLocale.bind(this)} style={{ width: 55 }}>
                                                <option value="en">English</option>
                                                <option value="zh">中文</option>
                                            </select>

                                            <span style={{ visibility: 'hidden' }}>{renderState}</span>
                                        </div>
                                    </Container>
                                </Content>
                                <Sider
                                    style={{
                                        display: layout.innerRight ? 'block' : 'none',
                                    }}
                                >
                                    {/* innerRight */}
                                    <SideGroup></SideGroup>
                                </Sider>
                            </Layout>
                            <Footer
                                style={{
                                    display: layout.footer ? 'block' : 'none',
                                }}
                            >
                                {layout.sheetBar && <SheetBar></SheetBar>}
                                {layout.countBar && <CountBar></CountBar>}
                            </Footer>
                        </Layout>
                        <Sider
                            style={{
                                display: layout.outerRight && showSider ? 'block' : 'none',
                            }}
                            className={style.outerRightContainer}
                        >
                            {siderPanelList.map((item: ISiderState, i) => {
                                if (item.type === ISlotElement.JSX) {
                                    // return item.content;
                                    return cloneElement(item.label as JSX.Element, {
                                        style: { display: item.show ? '' : 'none', zIndex: item.zIndex },
                                    });
                                }
                                return item;
                            })}
                        </Sider>
                    </Layout>
                </Container>
            </AppContext.Provider>
        );
    }
}
