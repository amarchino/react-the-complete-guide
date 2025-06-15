import Head from 'next/head';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

export default function HomePage({ meetups }) {
  return (<>
    <Head>
      <title>React Meetups</title>
      <meta name="description" content="Browse a huge list of highly active React meetups" />
    </Head>
    <MeetupList meetups={meetups} />;
  </>)
}

export async function getStaticProps() {
  const client = await MongoClient.connect('mongodb://nextjs-meetup:mypass@localhost:27017/nextjs-meetup?authSource=nextjs-meetup')
  const db = client.db('nextjs-meetup');
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map(m => ({
        title: m.title,
        address: m.address,
        image: m.image,
        id: m._id.toString()
      }))
    },
    revalidate: 10
  };
}
