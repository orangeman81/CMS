import { Site } from 'src/app/shared/models/site';

export class SitesState {
    data: Site[];
    query: string;
    page: number;
    loaded: boolean;
} 