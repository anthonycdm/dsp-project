import {MissingTranslationHandler, MissingTranslationHandlerParams} from '@ngx-translate/core';
export class MissingTranslation implements MissingTranslationHandler{
    handle(params: MissingTranslationHandlerParams) {
        return 'traduction manquante';
    }
}

