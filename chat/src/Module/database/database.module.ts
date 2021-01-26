import { Module } from '@nestjs/common';
import { DatabaseProvider } from 'src/Provider/database';

@Module({
    providers: [DatabaseProvider],
    exports: [DatabaseProvider],
})
export class DatabaseModule {}
