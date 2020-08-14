import { createAction, props } from "@ngrx/store";
import { BookRequiredProps } from "src/app/shared/models";

const baseAction = '[Books Page]';

export const enter = createAction(`${ baseAction } Enter`);

export const selectBook = createAction(
    `${ baseAction } Select Book`,
    props<{ bookId: string }>()
);

export const clearSelectedBook = createAction(
    `${ baseAction } Clear Selected Book`
);

export const createBook = createAction(
    `${ baseAction } Create Book`,
    props<{ book: BookRequiredProps }>()
);

export const updateBook = createAction(
    `${ baseAction } Update Book`,
    props<{ bookId: string,  changes: BookRequiredProps }>()
);

export const deleteBook = createAction(
    `${ baseAction} Delete Action`,
    props<{ bookId: string}>()
);





