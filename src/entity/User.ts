import {Entity, PrimaryGeneratedColumn, Column, ValueTransformer, getManager} from "typeorm";

const transformer: ValueTransformer[] = [
    {
        from(value: any)  {
            return value;
        },
        to(value: any) {
            return value;
            return 'Junior' + value;
        }
    }
]
export interface IUser {
    name?: string;
    id: string;
}
@Entity({name: "TB_USR"})
export class User  implements IUser {

    @PrimaryGeneratedColumn()
    id: string = "";

    @Column({
        name: "NM_CLI",
        transformer: transformer,
    })
    name?: string;
}

export const UserRepository =  () => getManager("default").getRepository(User);
