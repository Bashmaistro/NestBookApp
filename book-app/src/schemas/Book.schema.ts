import { Schema , Prop , SchemaFactory} from "@nestjs/mongoose";


@Schema()
export class Book {

    @Prop({ unique: true, required:true })
    bookName: string;
    
    @Prop({ unique: false, required:true })
    author: string;

    @Prop({ unique: false, required:false })
    summary?: string;



}

export const BookSchema = SchemaFactory.createForClass(Book);