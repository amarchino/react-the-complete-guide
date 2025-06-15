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

export async function getStaticProps({ params }) {
  // Fetch data for a single meetup
  const { meetupId } = params;
  console.log(meetupId)
  return {
    props: {
      meetupData: {
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
        id: 'm1',
        title: '"A First Meetup',
        description: 'This is a first meetup',
        address: 'Some address 5, 12345 Some City'
      }
    }
  }
}
