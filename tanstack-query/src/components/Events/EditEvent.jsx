import { Link, redirect, useNavigate, useNavigation, useParams, useSubmit } from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { useQuery } from '@tanstack/react-query';
import { fetchEvent, queryClient, updateEvent } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EditEvent() {
  const navigate = useNavigate();
  const params = useParams();
  const submit = useSubmit();
  const { state, } = useNavigation();

  const { data, isError, error } = useQuery({
    queryKey: [ 'events', params.id ],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
    staleTime: 10000
  });

  function handleSubmit(formData) {
    submit(formData, { method: 'PUT' });
  }

  function handleClose() {
    navigate('../');
  }
  let content;
  if(isError) {
    content = <>
      <ErrorBlock title="Failed to load event" message={error.info?.message || 'Failed to load event. Please try again later.'} />
      <div className='form-actions'>
        <Link to="../" className="button-text">Okay</Link>
      </div>
    </>
  }
  if(data) {
    content = <EventForm inputData={data} onSubmit={handleSubmit}>
      { state === 'submitting' ? <p>Sending data...</p> : <>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </> }
    </EventForm>;
  }

  return (
    <Modal onClose={handleClose}>
      { content }
    </Modal>
  );
}

export function loader({ params }) {
  return queryClient.fetchQuery({
    queryKey: [ 'events', params.id ],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id })
  });
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updatedEventData = Object.fromEntries(formData);
  await updateEvent({ id: params.id, event: updatedEventData });
  await queryClient.invalidateQueries([ 'events', params.id ]);
  return redirect('../');
}
