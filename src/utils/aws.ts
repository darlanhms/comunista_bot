import AWS from 'aws-sdk';
import { config as envConfig } from 'dotenv';

envConfig();

const s3 = new AWS.S3({ apiVersion: '2006-03-01', region: 'sa-east-1' });

export const getFile = async (fileName: string, bucketName = 'comunistabot'): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
    const params: AWS.S3.GetObjectRequest = {
      Bucket: bucketName,
      Key: fileName,
    };

    const readStream = s3.getObject(params).createReadStream();

    readStream.on('data', data => {
      resolve(Buffer.from(data));
    });

    readStream.on('error', err => {
      reject(err);
    });
  });
};

export const updateFile = (
  newFileBody: string,
  fileName: string,
  bucketName = 'comunistabot',
): Promise<void> => {
  return new Promise((resolve, reject) => {
    const params: AWS.S3.PutObjectRequest = {
      Bucket: bucketName,
      Key: fileName,
      Body: newFileBody,
    };

    const putStream = s3.putObject(params).createReadStream();

    putStream.on('readable', () => {
      resolve();
    });

    putStream.on('error', err => {
      reject(err);
    });
  });
};
