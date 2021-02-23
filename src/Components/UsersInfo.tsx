import { gql } from 'apollo-boost';
import React from 'react';
import { useQuery } from 'react-apollo';


const QUERY_USERS = gql`
query{
  users{
    id
    userName
    workoutType
  }
}
`;


export const UsersInfo = () => {
  const { data, loading } = useQuery(
    QUERY_USERS, {
    pollInterval: 5000
  }
  );
  if(loading) return <p>Loading.......</p>
  return data?.users.map(({ id, userName, workoutType }) => (
    <div key={id}>
      <p>
        User -       {id}: {userName} <br />
        Workout Type-{workoutType}
      </p>
    </div>
  ))
}
