import { Dropbox } from 'dropbox';
import * as fs from 'fs';
import * as path from 'path';
import {files} from "dropbox";

export class DropboxAPI {
    private dbx: Dropbox;

    constructor(token: string) {
        this.dbx = new Dropbox({ accessToken: token });
    }

    async upload(filePath: string): Promise<files.FileMetadata> {
        const fileName = path.basename(filePath);
        const fileData = fs.readFileSync(filePath);

        const response = await this.dbx.filesUpload({
            path: '/' + fileName,
            mode: { '.tag': 'add' },
            autorename: true,
            mute: false,
            strict_conflict: false,
            contents: fileData
        });

        return response.result;
    }

    async getFileMetadata(fileId: string) {
        return this.dbx.filesGetMetadata({
            path: fileId
        });
    }

    async deleteFile(fileId: string) {
        return this.dbx.filesDeleteV2({
            path: fileId
        });
    }
}