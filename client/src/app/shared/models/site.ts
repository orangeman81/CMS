export interface Site {
    meta: SiteMeta;
    footer: SiteFooter;
    _id: string;
    name: string;
    router?: (SiteRouter)[] | null;
}
export interface SiteMeta {
    title: string;
    description: string;
    keywords: string;
}
export interface SiteFooter {
    title: string;
    address: string;
    phone: string;
    email: string;
    copyright: string;
}
export interface SiteRouter {
    sections?: (null)[] | null;
    _id: string;
    path: string;
    icon: string;
    pageId: string;
}
