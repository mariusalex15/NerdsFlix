import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LikeService {
    private likesCount = new BehaviorSubject<number>(0);

    likesCount$ = this.likesCount.asObservable();

    incrementLikes() {
        this.likesCount.next(this.likesCount.getValue() + 1);
    }

    decrementLikes() {
        this.likesCount.next(this.likesCount.getValue() - 1);
    }
}
