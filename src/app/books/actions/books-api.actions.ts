import { createAction, props } from "@ngrx/store";
import { BookModel, BookRequiredProps } from '../../shared/models/book.model';


const baseAction= '[Books API]';

export const booksLoaded = createAction(
    `${baseAction} Books Loaded Success`,
    props<{ books: BookModel[] }>()
);

export const booksLoadedError = createAction(
    `${baseAction} Books Loaded Success`,
    props<{ error: string}>()
);

export const bookCreated = createAction(
    `${baseAction} Book Created`,
    props<{ book: BookModel }>()
);


export const bookCreatedError = createAction(
    `${baseAction} Book Created Error`,
    props<{ error: string }>()
);

export const bookUpdated = createAction(
    `${baseAction} Book Updated`,
    props<{ book: BookModel }>()
);


export const bookUpdatedError = createAction(
    `${baseAction} Book Updated Error`,
    props<{ error: string }>()
);

export const bookDeleted = createAction(
    `${baseAction} Book Deleted`,
    props<{ idBook: string}>()
);

export const bookDeletedError = createAction(
    `${baseAction} Book Deleted`,
    props<{ error: string}>()
);