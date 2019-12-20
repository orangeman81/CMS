export interface Route {
    path: string;
    icon: string;
    pageId: string;
    sections: Route[];
}