import { fromEvent, FunctionEvent } from 'graphcool-lib';
import { GraphQLClient } from 'graphql-request';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  avatar: string;
}

export default async (event: FunctionEvent<{}>) => {

  try {
    // no logged in user
    if (!event.context.auth || !event.context.auth.nodeId) {
      return { data: null };
    }

    const userId = event.context.auth.nodeId;
    const graphcool = fromEvent(event);
    const api = graphcool.api('simple/v1');

    // get user by id
    const user: User = await getUser(api, userId)
      .then((r) => r.User);

    // no logged in user
    if (!user || !user.id) {
      return { data: null };
    }

    return {
      data: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        avatar: user.avatar,
      },
    };

  } catch (e) {
    console.log(e);
    return { error: 'An unexpected error occured during authentication.' };
  }
};

async function getUser(api: GraphQLClient, id: string): Promise<{ User }> {
  const query = `
    query getUser($id: ID!) {
      User(id: $id) {
        id
        firstName
        lastName
        username
        avatar
      }
    }
  `;

  const variables = {
    id,
  };

  return api.request<{ User }>(query, variables);
}