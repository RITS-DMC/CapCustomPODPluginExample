using { democapcustompodplugin.db as schema } from '../db/schema';

service MyService {

    entity MaterialsReport as projection on schema.Materialdata;

}



