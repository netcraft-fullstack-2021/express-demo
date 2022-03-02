import fsPromise from 'fs/promises'

export const readFileContent = async (fileName) => {
    try {
    const content = await fsPromise.readFile(fileName, 'utf8');
    return content;
    } catch(err) {
        console.error(err);
        throw Error(`Error reading ${fileName}`)
    }
}
