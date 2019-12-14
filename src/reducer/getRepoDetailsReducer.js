const getRepoReducer = (state = {}, action) => {
    switch (action.type) {
       case 'GET_REOP':
          return { ...state};
       case 'REPOS_RECEIVED':
          return { ...state, repos: action.json}
       default:
          return state;
     }
  };
  export default getRepoReducer;