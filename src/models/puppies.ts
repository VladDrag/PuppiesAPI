import type {ObjectId } from 'mongodb'

// export default class Permissions {
//     constructor(public _id: ObjectId, public collection: string, public schema: any) {}
// }

export default class Puppy {
    constructor(public _id: ObjectId, public breed: string, public name: string, public birthDate: string) {}
}