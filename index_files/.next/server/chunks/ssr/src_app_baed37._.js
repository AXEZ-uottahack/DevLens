module.exports = {

"[project]/src/app/components/DiagramBox.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$responsive$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-responsive/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$maxgraph$2f$core$2f$lib$2f$view$2f$event$2f$InternalEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__InternalEvent$3e$__ = __turbopack_import__("[project]/node_modules/@maxgraph/core/lib/view/event/InternalEvent.js [app-ssr] (ecmascript) <export default as InternalEvent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$maxgraph$2f$core$2f$lib$2f$view$2f$Graph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@maxgraph/core/lib/view/Graph.js [app-ssr] (ecmascript)");
;
;
;
;
const DiagramBox = ({ classes, associations })=>{
    const divGraph = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const systemPrefersDark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$responsive$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaQuery"])({
        query: "(prefers-color-scheme: dark)"
    }, undefined);
    const class_style = {
        baseStyleNames: [
            'rounded'
        ],
        fillColor: systemPrefersDark ? '#0a0a0a' : '#ffffff',
        strokeColor: systemPrefersDark ? '#ededed' : '#171717'
    };
    const assoc_style = {
        edgeStyle: 'orthogonalEdgeStyle',
        rounded: true,
        strokeColor: systemPrefersDark ? '#ededed' : '#171717'
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (divGraph.current != null) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$maxgraph$2f$core$2f$lib$2f$view$2f$event$2f$InternalEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__InternalEvent$3e$__["InternalEvent"].disableContextMenu(divGraph.current);
            const graph = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$maxgraph$2f$core$2f$lib$2f$view$2f$Graph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Graph"](divGraph.current);
            graph.setPanning(true);
            const parent = graph.getDefaultParent();
            const class_map = new Map();
            graph.batchUpdate(()=>{
                for(let i = 0; i < classes.length; i++){
                    const vertex = graph.insertVertex({
                        parent,
                        position: [
                            10,
                            10
                        ],
                        size: [
                            100,
                            100
                        ],
                        value: classes[i].name,
                        style: class_style
                    });
                    class_map.set(classes[i].name, vertex);
                }
                for(let i = 0; i < associations.length; i++){
                    // not handling the bidir bool right now
                    graph.insertEdge({
                        parent,
                        source: class_map.get(associations[i].start),
                        target: class_map.get(associations[i].end),
                        value: `${associations[i].start_m}--${associations[i].end_m}`,
                        style: {
                            ...assoc_style,
                            endArrow: associations[i].bidir ? 'none' : 'open'
                        }
                    });
                }
            });
            return ()=>{
                // graph.removeCells(cells);
                divGraph.current = null;
            };
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "graph-container",
        ref: divGraph,
        id: "divGraph"
    }, void 0, false, {
        fileName: "[project]/src/app/components/DiagramBox.tsx",
        lineNumber: 75,
        columnNumber: 10
    }, this);
};
const __TURBOPACK__default__export__ = DiagramBox;
}}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$DiagramBox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/DiagramBox.tsx [app-ssr] (ecmascript)");
"use client";
;
;
const TEST_DATA = {
    classes: [
        {
            name: "A",
            attributes: [
                {
                    type: "int",
                    modifier: "-"
                },
                {
                    type: "int",
                    modifier: "-"
                },
                {
                    type: "B[]",
                    modifier: "-"
                }
            ]
        },
        {
            name: "B",
            attributes: [
                {
                    type: "A",
                    modifier: "-"
                }
            ]
        }
    ],
    associations: [
        {
            start: "A",
            end: "B",
            start_m: "1",
            end_m: "0..*",
            bidir: true
        }
    ]
};
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Browser Code Editor"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$DiagramBox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                classes: TEST_DATA.classes,
                associations: TEST_DATA.associations
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=src_app_baed37._.js.map