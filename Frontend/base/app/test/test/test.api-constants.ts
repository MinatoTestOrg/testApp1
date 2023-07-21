import { TestBase} from '@baseapp/test/test/test.base.model';

export class TestApiConstants {
    public static readonly create: any = {
        url: '/rest/tests/',
        method: 'POST',
        showloading: true
    };
    public static readonly getById: any = {
        url: '/rest/tests/{sid}',
        method: 'GET',
        showloading: true
    };
    public static readonly autoSuggestService: any = {
        url: '/rest/tests/autosuggest',
        method: 'GET',
        showloading: true
    };
    public static readonly getDatatableData: any = {
        url: '/rest/tests/datatable',
        method: 'POST',
        showloading: true
    };
    public static readonly update: any = {
        url: '/rest/tests/',
        method: 'PUT',
        showloading: true
    };
    public static readonly delete: any = {
        url: '/rest/tests/{ids}',
        method: 'DELETE',
        showloading: true
    };
}