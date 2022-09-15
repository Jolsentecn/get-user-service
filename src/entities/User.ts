import { ObjectId } from "mongodb";

export class User {
    public readonly _id: ObjectId;

    public name: string;
    public email: string;
    public phone: string;
    public birthDate: Date;

    constructor(props: Omit<User, '_id'>, _id?: string){
        Object.assign(this, props);

        if(!_id) {
            this._id = new ObjectId();
        }
    }
}
