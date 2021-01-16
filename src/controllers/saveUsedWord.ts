import { getFile, updateFile } from '../utils/aws';
import { USED_WORDS_FILE } from '../utils/constants';

export default async function saveNewUsedWord(newWord: string): Promise<void> {
  const fileBuffer = await getFile(USED_WORDS_FILE);

  await updateFile(`${fileBuffer.toString()}${newWord}\r\n`, USED_WORDS_FILE);
}
