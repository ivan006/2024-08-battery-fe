import MyBaseModel from 'src/models/helpers/MyBaseModel';
import router from 'src/router';

export default class FailedJob extends MyBaseModel {
    static entity = 'failedjob';
    static entityUrl = '/api/failed-jobs';
    static primaryKey = 'id';
    static titleKey = 'id';
    static openRecord(pKey){
      router.push({
        name: '/lists/failed-jobs/:rId',
        params: {
          rId: pKey,
        },
      })
    }

    static parentWithables = [

    ];

    static rules = {
        readables: () => true,
        readable: (item) => true,
        editable: (item) => true,
        creatable: () => true,
    };

    static fieldsMetadata = {
        'id': {},
            'uuid': {},
            'connection': {},
            'queue': {},
            'payload': {},
            'exception': {},
            'failed_at': {}
    };

    static fields() {
        return {
            'id': this.attr('').nullable(),
            'uuid': this.attr('').nullable(),
            'connection': this.attr('').nullable(),
            'queue': this.attr('').nullable(),
            'payload': this.attr('').nullable(),
            'exception': this.attr('').nullable(),
            'failed_at': this.attr('').nullable(),

        };
    }

    static templateListGrid = {
        // Define templateListGrid
    };

    static templateOverview = {
        // Define templateOverview
    };

    static FetchAll(relationships = [], flags = {}, moreHeaders = {}, options = { page: 1, limit: 15, filters: {}, clearPrimaryModelOnly: false }) {
        return this.customSupabaseApiFetchAll(
            `${this.baseUrl}${this.entityUrl}`,
            [...this.parentWithables, ...relationships],
            flags,
            this.mergeHeaders(moreHeaders),
            options,
            this
        );
    }

    static FetchById(id, relationships = [], flags = {}, moreHeaders = {}) {
        return this.customSupabaseApiFetchById(
            `${this.baseUrl}${this.entityUrl}`,
            id,
            [...this.parentWithables, ...relationships],
            flags,
            this.mergeHeaders(moreHeaders),
            this
        );
    }

    static Store(entity, relationships = [], flags = {}, moreHeaders = {}) {
        return this.customSupabaseApiStore(
            `${this.baseUrl}${this.entityUrl}`,
            entity,
            [...this.parentWithables, ...relationships],
            flags,
            this.mergeHeaders(moreHeaders),
            this
        );
    }

    static Update(entity, relationships = [], flags = {}, moreHeaders = {}) {
        return this.customSupabaseApiUpdate(
            `${this.baseUrl}${this.entityUrl}`,
            entity,
            [...this.parentWithables, ...relationships],
            flags,
            this.mergeHeaders(moreHeaders),
            this
        );
    }

    static Delete(entityId, flags = {}, moreHeaders = {}) {
        return this.customSupabaseApiDelete(
            `${this.baseUrl}${this.entityUrl}`,
            entityId,
            flags,
            this.mergeHeaders(moreHeaders),
            this
        );
    }
}