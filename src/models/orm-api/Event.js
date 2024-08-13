import MyBaseModel from 'src/models/helpers/MyBaseModel';
import router from 'src/router';
import User from 'src/models/User';
import School from 'src/models/orm-api/School';
import Attendance from 'src/models/orm-api/Attendance';

export default class Event extends MyBaseModel {
    static entity = 'event';
    static entityUrl = '/api/events';
    static primaryKey = 'id';
    static titleKey = 'id';
    static openRecord(pKey){
      router.push({
        name: '/lists/events/:rId',
        params: {
          rId: pKey,
        },
      })
    }

    static parentWithables = [
        'school',
        'creator',
        'updater'
    ];

    static rules = {
        readables: () => true,
        readable: (item) => true,
        editable: (item) => true,
        creatable: () => true,
    };

    static fieldsMetadata = {
        'id': {},
            'name': {},
            'start_datetime': {},
            'end_datetime': {},
            'school_id': { relationRules: { linkables: (user) => { return {} } } },
            'creator_id': { relationRules: { linkables: (user) => { return {} } } },
            'updater_id': { relationRules: { linkables: (user) => { return {} } } },
            'created_at': {},
            'updated_at': {}
    };

    static fields() {
        return {
            'id': this.attr('').nullable(),
            'name': this.attr('').nullable(),
            'start_datetime': this.attr('').nullable(),
            'end_datetime': this.attr('').nullable(),
            'school_id': this.attr('').nullable(),
            'creator_id': this.attr('').nullable(),
            'updater_id': this.attr('').nullable(),
            'created_at': this.attr('').nullable(),
            'updated_at': this.attr('').nullable(),
            'creator': this.belongsTo(User, 'creator_id'),
            'school': this.belongsTo(School, 'school_id'),
            'updater': this.belongsTo(User, 'updater_id'),
            'attendances': this.hasMany(Attendance, 'event_id')
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
