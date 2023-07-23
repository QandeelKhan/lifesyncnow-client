// sideBarData.ts
export interface SidebarItem {
    title: string;
    cName: string;
    path: string;
}

export const SidebarData: SidebarItem[] = [
    {
        title: "SKIN-CARE TIPS",
        cName: "anchor",
        path: "/skin-care-tips",
    },
    {
        title: "FOOD AND NUTRITION",
        cName: "anchor",
        path: "/food-and-nutrition",
    },
    {
        title: "HOLISTIC TREATMENT",
        cName: "anchor",
        path: "/holistic-treatment",
    },
    {
        title: "FITNESS TIPS",
        cName: "anchor",
        path: "/fitness-tips",
    },
    {
        title: "RELATIONSHIP TIPS",
        cName: "anchor",
        path: "/relationship-tips",
    },
    {
        title: "SHOPPING",
        cName: "anchor",
        path: "/",
    },
    {
        title: "ALL TOPICS",
        cName: "anchor",
        path: "/",
    },
];
