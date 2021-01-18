import {StixObject} from "./stix-object";

export class Relationship extends StixObject {

    public readonly source_ref: string;
    public source_name: string = "[source name]"; // TODO
    public source_attackID: string = "[source ID]"; // TODO

    public readonly target_ref: string;
    public target_name: string = "[target name]"; // TODO
    public target_attackID: string = "[target ID]"; // TODO
    
    public readonly relationship_type: string;
    public description: string;
    constructor(sdo?: any) {
        super(sdo, "relationship");
        if (sdo) {
            this.source_ref = sdo.source_ref;
            this.target_ref = sdo.target_ref;
            this.relationship_type = sdo.relationship_type;
            this.description = sdo.description;
            // THIS IS NOT PART OF THE SPEC, AND IS A PLACEHOLDER
            if (sdo.source_name) this.source_name = sdo.source_name;
            if (sdo.target_name) this.target_name = sdo.target_name;
        }
    }
    public deserialize(raw: any) {}
    public serialize(): any {}

    
    /**
     * Get the source object
     */
    public getSourceObject(): StixObject {
        return null;
    }
    /**
     * Get the target object
     */
    public getTargetObject(): StixObject {
        return null;
    }
}
