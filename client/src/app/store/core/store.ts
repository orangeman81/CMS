import { BehaviorSubject, Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Action } from './action';

export abstract class Store<T> {

    private state$: BehaviorSubject<T>;

    protected constructor(
        public initialState: T,
        public reducer: Function
    ) {
        this.state$ = new BehaviorSubject<T>(initialState);
    }

    public set state(value: T) {
        this.state$.next(value);
    }
    public get state(): T {
        return this.state$.getValue();
    }
    public get $state(): Observable<T> {
        return this.state$.asObservable()
            .pipe(
                shareReplay()
            );
    }

    public dispatch(action: Action) {
        this.state = this.reducer(action, this.state);
    }

}