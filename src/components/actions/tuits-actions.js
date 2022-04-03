/*
Our implementation of findAllTuits in TuitList works fine, but it's not a good strategy to mix rendering
code with reducer logic, so it is a best practice to instead keep them separate.
We also declare constant strings for each of the different action types which will help avoid spelling
errors and take advantage of the IDEs auto suggest tools.
 */
import * as service from '../services/tuits-service';

export const CREATE_TUIT = 'CREATE_TUIT';
export const FIND_ALL_TUITS = 'FIND_ALL_TUITS';
export const UPDATE_TUIT = 'UPDATE_TUIT';
export const DELETE_TUIT = 'DELETE_TUIT';

/*
The createTuit action posts the new tuit to the server using the corresponding service and the new
tuit is dispatched to the reducer to be added to the state.
 */
export const createTuit = async (dispatch, tuit) => {
    const newTuit = await service.createTuit(tuit);
    dispatch({
                 type: CREATE_TUIT,
                 newTuit
             });
}

// When we move findAllTuits into the new file we realize that we'll need a reference to dispatch so we pass it as a parameter.
export const findAllTuits = async (dispatch) => {
    const tuits = await service.findAllTuits();
    dispatch({
                 type: FIND_ALL_TUITS,
                 tuits
             });
}

/*
The updateTuit action puts the updated tuit to the server using the corresponding service and the new
tuit is dispatched to the reducer to be updated in the state.
 */
export const updateTuit = async (dispatch, tuit) => {
    const status = await service.updateTuit(tuit);
    dispatch({
                 type: UPDATE_TUIT,
                 tuit
             });
}

/*
The deleteTuit action can then invoke the deleteTuit service and await the response which we know is
just status information from the corresponding endpoint on the server. If the status is successful
then we notify the reducer of the DELETE_TUIT action type and pass it the tuit being removed.
 */
export const deleteTuit = async (dispatch, tuit) => {
    const response = await service.deleteTuit(tuit);
    dispatch({
                 type: DELETE_TUIT,
                 tuit
             })

}