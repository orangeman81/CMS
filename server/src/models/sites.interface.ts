import { Route } from "./route.interface"
import { Metadata } from './metadata.interface';
import { Header } from "./header.interface";
import { Footer } from "./footer.interface";

export interface Sites {
    name: string;
    meta: Metadata;
    router: Route[];
    footer: Footer;
}