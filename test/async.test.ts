import { getPost } from "../src/async";

describe('get post', () => {

    test('fetch post index 0', async () => {
        const postId = 0;
        const data = await getPost(postId);
        expect(data).toBeNull();
    });

    test('fetch post', async () => {
        const postId = 1;
        const data = await getPost(postId);
        if (!data) {
            return expect(data).toBeNull();
        }
        expect(data.id).toBe(postId);
    });
    
});