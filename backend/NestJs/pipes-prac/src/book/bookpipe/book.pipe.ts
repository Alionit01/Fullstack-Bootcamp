import { ArgumentMetadata, BadRequestException, Injectable } from "@nestjs/common";

@Injectable()
export class BookPipe{
    transform(value: any, metadata: ArgumentMetadata){
        if(value.id == 1){
            return value;
        }
        else throw new BadRequestException('Validation failed');
        
    }
}