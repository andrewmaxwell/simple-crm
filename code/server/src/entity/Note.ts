import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Note {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    text: string;

    @CreateDateColumn()
    timestamp: Date;

    @ManyToOne(() => User, user => user.notes, { onDelete: "CASCADE" })
    user: User;
}
