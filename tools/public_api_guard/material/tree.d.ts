export declare class MatNestedTreeNode<T> extends CdkNestedTreeNode<T> implements AfterContentInit, OnDestroy {
    protected _differs: IterableDiffers;
    protected _elementRef: ElementRef<HTMLElement>;
    protected _tree: CdkTree<T>;
    disabled: any;
    node: T;
    tabIndex: number;
    constructor(_elementRef: ElementRef<HTMLElement>, _tree: CdkTree<T>, _differs: IterableDiffers, tabIndex: string);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ngAcceptInputType_disabled: boolean | string;
}

export declare class MatTree<T> extends CdkTree<T> {
    _nodeOutlet: MatTreeNodeOutlet;
}

export declare class MatTreeFlatDataSource<T, F> extends DataSource<F> {
    _data: BehaviorSubject<T[]>;
    _expandedData: BehaviorSubject<F[]>;
    _flattenedData: BehaviorSubject<F[]>;
    data: T[];
    constructor(_treeControl: FlatTreeControl<F>, _treeFlattener: MatTreeFlattener<T, F>, initialData?: T[]);
    connect(collectionViewer: CollectionViewer): Observable<F[]>;
    disconnect(): void;
}

export declare class MatTreeFlattener<T, F> {
    getChildren: (node: T) => Observable<T[]> | T[] | undefined | null;
    getLevel: (node: F) => number;
    isExpandable: (node: F) => boolean;
    transformFunction: (node: T, level: number) => F;
    constructor(transformFunction: (node: T, level: number) => F, getLevel: (node: F) => number, isExpandable: (node: F) => boolean, getChildren: (node: T) => Observable<T[]> | T[] | undefined | null);
    _flattenChildren(children: T[], level: number, resultNodes: F[], parentMap: boolean[]): void;
    _flattenNode(node: T, level: number, resultNodes: F[], parentMap: boolean[]): F[];
    expandFlattenedNodes(nodes: F[], treeControl: TreeControl<F>): F[];
    flattenNodes(structuredData: T[]): F[];
}

export declare class MatTreeModule {
}

export declare class MatTreeNestedDataSource<T> extends DataSource<T> {
    _data: BehaviorSubject<T[]>;
    data: T[];
    connect(collectionViewer: CollectionViewer): Observable<T[]>;
    disconnect(): void;
}

export declare class MatTreeNode<T> extends _MatTreeNodeMixinBase<T> implements CanDisable, HasTabIndex {
    protected _elementRef: ElementRef<HTMLElement>;
    protected _tree: CdkTree<T>;
    role: 'treeitem' | 'group';
    constructor(_elementRef: ElementRef<HTMLElement>, _tree: CdkTree<T>, tabIndex: string);
    static ngAcceptInputType_disabled: boolean | string;
}

export declare class MatTreeNodeDef<T> extends CdkTreeNodeDef<T> {
    data: T;
}

export declare class MatTreeNodeOutlet implements CdkTreeNodeOutlet {
    _node?: any;
    viewContainer: ViewContainerRef;
    constructor(viewContainer: ViewContainerRef, _node?: any);
}

export declare class MatTreeNodePadding<T> extends CdkTreeNodePadding<T> {
    indent: number;
    level: number;
    static ngAcceptInputType_level: number | string;
}

export declare class MatTreeNodeToggle<T> extends CdkTreeNodeToggle<T> {
    recursive: boolean;
    static ngAcceptInputType_recursive: boolean | string;
}
