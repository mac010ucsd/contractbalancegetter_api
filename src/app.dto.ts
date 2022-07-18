import { ApiProperty } from "@nestjs/swagger";

export class balanceGetterDto {
    @ApiProperty()
    pKey : string;
    @ApiProperty()
    dest : string;
}