import { DropboxAPI } from '../dropboxAPI';
import { files } from 'dropbox';
import * as path from 'path';

describe('DropboxAPI', () => {
    let api: DropboxAPI;
    const token = ''; // replace with your actual token
    const testFilePath = 'D:\\Courses\\ЗА деньгу\\JasmineTests\\postcard_phone_poster-750x435.jpg'; // replace with your actual file path
    const testFileId = '/postcard_phone_poster-750x435.jpg'; // replace with your actual file id on Dropbox


    beforeEach(() => {
        api = new DropboxAPI(token);
    });

    it('should upload a file', async () => {
        const response: files.FileMetadata = await api.upload(testFilePath);

        expect(response).toBeDefined();
        expect(response.name).toBe(path.basename(testFilePath));
    });

    it('should get file metadata', async () => {
        const dropboxResponse = await api.getFileMetadata(testFileId);
        const response: files.Metadata = dropboxResponse.result;


        // If the metadata is for a file, it should have a 'path_display' field.
        if ('path_display' in response) {
            expect(response.path_display).toBe(testFileId);
        } else {
            fail('Metadata is not for a file');
        }
    });

    it('should delete a file', async () => {
        const dropboxResponse = await api.deleteFile(testFileId);
        const response: files.DeleteResult = dropboxResponse.result;

        expect(response.metadata.path_display).toBe(testFileId);
    });
});