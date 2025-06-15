import { MongoClient, ObjectId } from 'mongodb';
import MeetupDetail from '../../components/meetups/MeetupDetail';

export default function MeetupDetailPage({ meetupData }) {
  return (
    <MeetupDetail
      image={meetupData.image}
      title={meetupData.title}
      description={meetupData.description}
      address={meetupData.address} />
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect('mongodb://nextjs-meetup:mypass@localhost:27017/nextjs-meetup?authSource=nextjs-meetup')
  const db = client.db('nextjs-meetup');
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    paths: meetups.map(m => ({ params: { meetupId: m._id.toString() }})),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { meetupId } = params;

  const client = await MongoClient.connect('mongodb://nextjs-meetup:mypass@localhost:27017/nextjs-meetup?authSource=nextjs-meetup')
  const db = client.db('nextjs-meetup');
  const meetupsCollection = db.collection('meetups');
  const meetupData = await meetupsCollection.findOne({ _id: ObjectId.createFromHexString(meetupId) });
  client.close();

  return {
    props: {
      meetupData: {
        id: meetupData._id.toString(),
        title: meetupData.title,
        image: meetupData.image,
        address: meetupData.address,
        description: meetupData.description
      }
    }
  }
}
