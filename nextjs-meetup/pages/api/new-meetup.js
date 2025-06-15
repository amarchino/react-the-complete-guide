import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if(req.method !== 'OPTIONS' && req.method !== 'POST') {
    res.status('405').end()
  }
  if(req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect('mongodb://nextjs-meetup:mypass@localhost:27017/nextjs-meetup?authSource=nextjs-meetup')
    const db = client.db('/nextjs-meetup');

    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: 'Meetup inserted!' });
  }
}
