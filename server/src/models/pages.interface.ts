import { Contents } from "./contents.interface";
import { Metadata } from './metadata.interface';
import { Header } from './header.interface';

export interface Pages {
    name: string;
    header: Header;
    meta: Metadata;
    sections: {
        header: string;
        contents: Contents[];
    }
}